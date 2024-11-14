
// 일급 함수 : 함수를 값으로 표현하여 다른 함수에 전달하거나   ---> 콜백함수
//             함수의 리턴으로 함수를 보낼 수 있는 케이스

function calculate () {
  console.log('calculate call!');
  // 중첩 합수, 헬퍼 함수
  function add(n1, n2) {      // 여기 안에 있는 함수를
    console.log('add call!');
    return n1 + n2;
  }
  return add;      // 밖으로 내보낼 수가 있다
}

const result = calculate();
console.log(typeof result);
// console.log(`result : ${result}`);  --> result는 function으로 나옴, 즉 함수.

const r1 = result(80, 20);
console.log(`r1: ${r1}`);

// 함수가 함수를 리턴한답니다

console.log('==================================================');

// function foo() {
//   function bar() {
//     return 10;
//   }
//   return bar;
// }
// 위의 함수가 축약되면 아래와 같다.

const foo = () => () => 10;

const fas = foo();
const r2 = fas();
console.log(`r2: ${r2}`);

console.log('==================================================');

// 카운트를 0부터 1씩 증가시키는 함수
// function increase() {
//   let count = 0;
//   return ++count;
// }

// console.log(increase()); // 1
// console.log(increase()); //expect: 2, actual: 1
/* 한 번 더 indrease를 호출했을 때 결과값이 2가 아닌 이유 : count는 지역변수이기 때문에 함수에 한 번 올라가고 난 후 결과값이 나오면
  count는 사라진다. 그러므로 다시 increase를 호출했을 때는 count가 이전 결과값인 1을 가지고 있지 않고 다시 처음으로 돌아가 
  0으로 시작하여 결과값 1을 출력해낸다.

  만약 여기서 count의 값이 1, 2, 3... 을 출력하고 싶다면 function 함수 안에 지역변수로 선언하는 것이 아니라
  밖에서 let count = 0; 즉, 아래와 같이 전역변수로 선언한다면 count의 값은 1, 2, 3 ...을 갖게 된다.
  let count = 0;
  function increase() {
  return ++count;
  }

  그러나 선언해야 할 전역변수의 개수가 무수히 많다면, 클로저를 활용하는 것이 훨씬 효율적이다. (뒤에서 계속)
*/
