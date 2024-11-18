
// 다른 js파일에서 데이터(변수, 상수, 함수, 클래스) 불러오기
import { $btn as button } from './getDOM.js';
import { $clickHandler as cHandler } from './eventHandler.js';
import xyz from './calculation.js';
import { foodName } from './calculation.js';

const $btn = 'button!';

const {add, sub} = xyz;

console.log(xyz.add(10, 30));
console.log(xyz.add(50, 15));


// 버튼에 클릭이벤트 등록
$btn.addEventListener('click', clickHandler);