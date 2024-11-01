
let petList = ['멍멍이', '야옹이', '짹짹이'];
console.log(petList);



//push() : 배열 맨 끝에 데이터 추가

petList.push('거북이');
petList.push('어흥이', '비둘기', '닭다리');

console.log(petList);
console.log(petList.length);





// pop() : 배열 맨 끝 데이터 삭제

petList.pop();    // pop에 마우스 올려보면 pop 뒤에 ( ) 괄호가 비어있다. 이건 괄호 안에 아무것도 넣지 말라는 의미.
petList.pop();    
petList.pop();    
petList.pop();    
let x = petList.pop();   

console.log(petList);
console.log(`x: ${x}`);   // 변수를 만들어 저장 후 백업 가능.






// shift() : 배열의 맨 첫 데이터 삭제

// unshift() : 배열의 맨 첫 데이터 추가

petList.unshift('뻘뻘이', '호빵이');
petList.shift();



console.log(petList);
