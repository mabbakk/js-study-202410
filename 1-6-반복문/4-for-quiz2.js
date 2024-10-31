// 특정 정수를 입력 받고 해당 정수의 약수들을 모두 세로 출력.
// 그리고 마지막에 총 약수의 개수를 출력한다.

let targetNumber = +prompt ('양의 정수: ');
let count = 0;
//최종 결과 텍스트를 저장할 변수
let resultText = '';
for (let i = 1; i <= targetNumber; i++) {
  if (targetNumber % i === 0) {
    resultText += `${i}\n`
    count++;
  }
}
resultText += `약수의 개수: ${count}개`;

alert(resultText);
