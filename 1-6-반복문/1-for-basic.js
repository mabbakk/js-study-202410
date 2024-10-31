

//초기 변수 세팅; 끝 조건식; 변수 증감식
for (let n = 1; n <= 5; n++) {
    //반복할 코드
    console.log(`${n}번 학생 안녕하세요!`);
}


// 1부터 10이하의 수를 구해 10개의 경우를 출력해내는 게 아닌
// 0부터 10미만으로 설정하여 10개의 가짓수를 출력해낸다.
for (let i = 0; i < 10; i++) {
    console.log('안녕');
    console.log('잘가');
    
}




// 구구단 출력

let level = 20;          //단수

for (let line = 1; line <= 9; line++) {
    console.log(`${level} x ${line} = ${level * line}`);
}
console.log('반복문 종료');




//1~10까지의 누적합 == 55

let total = 0;

for (let n = 1; n <= 10; n++) {
    total += n;
}
console.log(`1~10까지의 총합: ${total}`);





