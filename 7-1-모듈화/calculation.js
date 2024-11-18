
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;


// 변수 내보내기  - 변수는 export 하는 순간 const로 바뀜
let foodName = '짜장면';
const food = {     // 객체로 포장해서 내보냄
  foodName : foodName
}
export {foodName};


// 내보낼 데이터가 단 한 개면 export default
export default {
  add : add,
  sub : sub
};