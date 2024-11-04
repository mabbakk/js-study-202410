//return은 함수를 강제 종료하는 구문이다.  반복문에서 break와 동일한 기능을 한다고 보면 됨.
function foo() {
    let a = 10;
    let b = 20;
    return a + b;
}

for (let i = 0; i < 3; i++) {
    if (i === 2) {
        break;
    }
    console.log('hello');
}

function callYourName(name) {
    let prohibits = ['바보', '멍충이', '메롱'];
    if (prohibits.includes(name)) {
        console.log('그런 이름은 불러줄 수가 없단다, 얘야.');
        return;        
    }
    console.log(`${name}님 안녕하세요!`);    
}

callYourName('뽀로로');
callYourName('멍충이');


console.log('==========================');

function loop (n) {
    while (true) {
        if (n === 0) {
            console.log('break!');
            break;
        } else if (n === 1) {
            console.log('return!');
            return;            // break는 반복문을 종료, return은 함수 자체를 종료시키므로 가장 강력하다. 
        }
    }  //end while
    console.log('end!!');    
}    // end function

loop(1);


// 리턴은 언제나 하나의 값만 반환이 가능하다!
// 숫자 2개를 전달하면 해당 숫자의 덧셈결과, 뺄셈, 곱셈, 나눗셈 결과를 반환.
function operate (n1, n2) {

    return {
        addResult : add(n1, n2), 
        subResult : n1 - n2, 
        multiResult : n1 * n2, 
        divResult : n1 / n2,
    };
}

let result = operate(10,5);
console.log(`덧셈: ${result[0]}`);
console.log(`뺄셈: ${result[1]}`);
console.log(`곱셈: ${result[2]}`);
console.log(`나눗셈: ${result[3]}`);
