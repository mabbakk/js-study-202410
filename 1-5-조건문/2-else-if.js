
let age = 5;

//위에서부터 내려오면서 true가 되는 조건을 찾으면 그 아래 조건들은 cancel 된다!
if (age > 19) {
    console.log('성인입니다.');
}  else if (age >= 17) {
    console.log('고등학생입니다.');    
}  else if (age >= 14) {
    console.log('중학생입니다.');    
}  else if (age >= 8) {
    console.log('초등학생입니다.');    
}  else if (age >= 5) {
    console.log('미취학 아동입니다.');    
} 