
//매개 변수(parameter) : 함수가 실행할 때 외부에서 전달받는 값

//언어를 알려주면 그 언어로 인사해주는 함수
function greet (language='한국어') {  // 함수 뒤에 = '____' 를 적으면 아래 greet 값에 아무것도 없을 때, 기본값으로 적용된다.

    switch (language) {
        case '한국어' :
            console.log('안녕하세요!');
            break;
        case '영어' :
            console.log('hello!');
            break;
        case '일본어' :
            console.log('곤니치와!');
            break;
        default :
            console.log('우가우가~!');            
    }
}


// 함수에 전달하는 값 : 인수 (argument)
greet('영어');
greet();

console.log('=====================================s');

// x ~ y 사이의 랜덤 정수 생성
function makeRandomInteger(x, y) {
    let rn = Math.floor(Math.random() * (y - x + 1)) + x;
    console.log(`랜덤정수: ${rn}`);
    return rn;         // return : 함수를 밖으로 갖고 나가게 함.
}


//호출
makeRandomInteger(1, 3);

if (rn === 1) { 
    console.log('랜덤정수 1입니다.');
}

// 매개변수 없는 함수
// f(x) = 2x + 1

function infinitehello() {
    for (let i = 0; i < 5; i++)
    console.log('hello');
} 

for (let i = 0; i < 10; i++) {
    infinitehello();
}