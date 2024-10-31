// 1~75 사이에 2의 제곱수 가로 출력

// 특정 숫자를 고정해보자!!

let n = +prompt ('양의 정수를 입력하세요!');

// 1부터 20까지의 2의 제곱수를 구하자!
//2, 4 ,6 ,8 ,16
let resultText = '';

for (let i =1; i <= n; i *= 2) {
    resultText += `${i} `;
}
alert(resultText);