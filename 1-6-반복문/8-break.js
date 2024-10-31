
for (let i = 1; i <= 10; i++) {
    if (i===5) {
        break;
    }
    console.log(i);
}
console.log('반복문 종료!');



//중첩 반복문의 break 
console.log('============================');

apple: for (let i = 0; i < 3; i++) {
grape:    for (let j = 0; j < 2; j++) {
        if (i===j) {
            break apple;
        }
        console.log(`${i}, ${j}`);        
    }
    // if (i === 1) {
    //     break;
    // }
}
//break는 소속된 반복문에만 적용된다!
//break 더블 클릭을 하면 어디 반복문에 적용되는지 알 수 있다!

//바깥쪽 반복문을 break 하고 싶으면 반복문 앞에 apple: , grape: 과 같은 이름을 붙이고,
//break 뒤에 apple, grape (지정한 이름) 을 붙여 내가 원하는 반복문에 break를 적용할 수 있다.
