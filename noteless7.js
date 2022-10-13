'use strict';
/*
// DOM

console.log(document.querySelector('.message')); // nhắm tới 1 phần tử đưuọc đặt class hoặc id ở trong html(cách gọi như css)-> class :.message ; id: #message
console.log(document.querySelector('.message').textContent); // chỉ lấy phần thông tin bên trong( là text) -> dùng textContent

// DOM cho phép sử dụng Javascript để truy cập các phần tử và style HTML để sử dung chúng
/// -> thay đổi vb, các thuộc tính HTML & CSS style từ javascript
/// -> DOM là kết nối giữa code Javascript và HTML

///  DOM không phải là 1 phần của Javascript
///// - Javascript là 1 phương ngữ, hiện thỉ ở trên console
///// - DOM thao tác trên trang web được hiển thị trên trình duyệt lun(tức là tương tác trên web)
///// - DOM và các phương thức DOM  là 1 phần của web API - Application Programming Interface(Giao diện lập tình ứng dụng): gg chrome, safari,microsoft edge,firefox

//thay đổi text
document.querySelector('.message').textContent = '🚩 Correct Number!'; // nó chỉ biến đổi trê giao diện, còn trên console thì vẫn để từ nguyên bản trong html
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // muốn hiển thị value ở console thì ta cho dong cosole.log ở phía dưới dòng value đó
*/

//Event - sự kiện xảy ra trên trang khi click chuột, di chuột, bấm chuột...

/*
//test
document.querySelector('.check').addEventListener('click', function () {
  // ở đây ta sẽ truyền hàm adEventListener(lắng nghe event và phản hồi nó) vào, đối số đầu là click, đối số sau là 1 hàm nữa khi ta click vào(-> addEventListerner kỳ vọng vào hàm trong đó)
  //// 1 lần nữa, hàm function trên khog được gọi ngay lập tức, mà nó xảy ra khi event click xảy ra
  // và sau đó nó được truyền ngược lại vào hàm addEventLisener
  console.log(document.querySelector('.guess').value); // khi ta điền số vào ô, -> click 'check' -> hiển thị số đó dưới console(vì ta cho nó xuất ra console)
 // document.querySelector('.message').textContent = '🚩 Correct Number!'; //tương tự, ngay khi ta click thì chữ Start guessing... -> Correct Number
});*/

// nên tạo số bí mật ở ngoài hàm addEventListener, vì nếu trong hàm đó thì nó chỉ cho đúng 1 kq
let secretNumer = Math.trunc(Math.random() * 20) + 1;
//số bất kỳ nên dùng Math.random(nhận gtri từ 0-1) -> *20
//vì Math.random còn số thập phân -> Math.trunc loại bỏ thập phân
// và vì *20 chỉ nhận được giá trị từ 0-19(tức số cao nhất chỉ là 19.9999...) -> + 1 để nâng lên 20

let score = 20; // dùng let vì là số có thay đổi
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  // ở đây ta sẽ truyền hàm adEventListener(lắng nghe event và phản hồi nó) vào, đối số đầu là click, đối số sau là 1 hàm nữa khi ta click vào(-> addEventListerner kỳ vọng vào hàm trong đó)
  //// 1 lần nữa, hàm function trên khog được gọi ngay lập tức, mà nó xảy ra khi event click xảy ra
  // và sau đó nó được truyền ngược lại vào hàm addEventLisener
  const guess = Number(document.querySelector('.guess').value); //bởi vì mọi dữ liệu nhaaoj vào đều là string -> đổi thành number
  // khi dữ liệu không được nhập
  if (!guess) {
    //nếu dữ liệu được nhập vào guess không phải number thì hiển thị dưới
    document.querySelector('.message').textContent = '❌ No Number!';
  }
  //khi đoán đúng
  else if (guess === secretNumer) {
    document.querySelector('.message').textContent = '🚩 Correct Number!';
    document.querySelector('.number').textContent = secretNumer; // chỉ cho hiện số đúng khi trả lời đúng , còn đâu là cho hiển thị ?

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'; //khi cần thay đôi thuộc tính style nào ta chỉ càn . + với thuộc tính style đó
    // width dựa vào số liệu bên css, kq là rộng hơ nguyên bản nên ta sẽ điều chỉnh width lớn hơn nguyên bản

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // khi đoán số cao hơn
  else if (guess !== secretNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumer ? 'Too hight!' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢You lose game hehe';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  else if (guess > secretNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too hight!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢You lose game hehe';
      document.querySelector('.score').textContent = 0;
    }
  }
  //khi đoán số thấp hơn
  else if (guess < secretNumer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢You lose game hehe';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

// again lại game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumer = Math.trunc(Math.random() * 20) + 1;
  // để lại biến serectNumber ở trên thành let, vì giờ số này thay đổi(và giờ đag đặt trong hàm để nó thực hiện sau khi chúng ta click)
  // và để ở đây vì nó sẽ thành 1 số khác khi ta again
  document.querySelector('.message').textContent = 'Start guessig...'; // thay đổi dòng chữ
  document.querySelector('.score').textContent = score; // đặt lại số score(số score hiện tại trong hàm là 20)
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
