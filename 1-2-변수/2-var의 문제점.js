// 1. 이름 중복시 에러가 안 남


let apple = 10;
let banana = 20;
console.log(apple);


//블록 레벨 스코프 지원 X - 블록 안에서만 임시 사용 불가
let num = 10;
if (true) {
    let num = 20;
    console.log('if 안의 num: ', num);
}

var ironman;
console.log('if 밖의 num: ' , num);
console.log(ironman);
var ironman = '토니스타크';


// 3. hoisting : 변수 선언을 자동으로 위로 끌어올림
console.log(ironman);
let ironman = '토니스타크';