
let num = 20;
let address = '서울시';
let result = '10';

//타입이 다르면 연산 불가
//암묵적 형 변환 (implict type casting)
//숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경
console.log(num + result);
console.log(address + num);

//덧셈 제외 산술연산은 문자를 숫자로 변환시도한 후
//변환 성공 시 산술연산 수행 실패 시 NaN 출력
const opertating = num + result;
console.log(num - result);

console.log(address - num);


let money =0;
let fruits = '사과';

if (money > 1000) {
    console.log(`${fruits}를 살 수 있어요`);
}


//명시적 형 변환
const n1 = '10';
const n2 = '20';

const n3 = Number(n1) + n2;  //명시적으로 30을 만들고 싶다.
console.log(`n3: ${n3}`);





