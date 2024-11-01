
let numbers = [10, 20, 30, 40];
console.log(typeof numbers);
console.log(`numbers:`, numbers);

console.log(numbers[1]);
console.log(numbers[2] ** 2);

numbers [0] = 999;   //배열의 요소(element) 수정
numbers[3]++;        // 40이 41로 수정
console.log(numbers);


//배열의 총 요소(데이터) 수
console.log(numbers.length);

//배열의 마지막 요소 접근
console.log(numbers[numbers.length-1]);



console.log('==============================');

//배열의 순회 : 전체 데이터를 순차적으로 접근
for (let i = 0; i < numbers.length; i++) {
    console.log(`${i+1}번째 데이터: ${numbers[i]}`);    
}


console.log('==============================');


//배열의 순회 전용 반복문
let weekDays = ['월', '화', '수', '목', '금', '토', '일'];


// for ~ of  -- 배열에서 하나씩 꺼내줌. 전체 순회할 때 주로 사용.
for (let day of weekDays) {
    console.log(`${day}요일`);
    
}


// 부분 순회 시 주로 사용

// for (let i = 0; i < weekDays.length; i++) {
//     console.log(`${weekDays[i]}요일`);
    
// }



//배열 변수 이름 관례 : 복수형, -Lise 어미
let hobbties = ['스키', '요리'];
let hobbyList = ['스키', '요리'];
