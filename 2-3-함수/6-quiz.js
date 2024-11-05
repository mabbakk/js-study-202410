
/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/



//함수는 컴팩트할수록 좋음.
//하나의 함수에는 하나의 동작만 처리하는 것이 좋다.

let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w);

console.log(myBmi);



function judgeBmi(bmi) {
  //bmi를 가지고 체중상태를 출력하는 동작
  if (bmi > 25) {
    console.log('당신은 과체중입니다.');
  } else if (bmi < 18.5) {
    console.log('당신은 저체중입니다.');    
  } else {
    console.log('당신은 정상체중입니다.');   
  }
}


function calcBMI(cm, kg) {
  let m = cm / 100;
  let bmi = kg / (m * m);

  //bmi 판별 출력
  judgeBmi(bmi);

  return bmi;
}
