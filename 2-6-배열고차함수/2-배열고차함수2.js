const nums = [10, 20, 30, 40, 50, 60, 70, 80];

//숫자배열에서 홀수번째 데이터만 필터링해서
//해당 수에 50을 더해서 맵핑

const filterdNums = nums.filter((n, i) => {
    if (i % 2 === 0) {
        return n;
    }
});

// console.log(filterdNums);

const mappedArray = filterdNums.map(n => n + 50);
console.log(mappedArray);


// 메서드 체이닝
const foods = ['짜장', '짬뽕', '탕수육'];
const slicedFoods = foods.slice(0, 2);
const noodle = slicedFoods[0];
const newNoodle =  slicedFoods[0]; + '면';

console.log(newNoodle);
