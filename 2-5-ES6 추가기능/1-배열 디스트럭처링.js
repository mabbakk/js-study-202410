
// 디스트럭처링 (destructuring) : 구조 분해 할당

const userNames = ['김철수', '홍길동', '고구마'];

// 배열에 들어있는 데이터를 다시 각각의 변수에 저장하고싶음
// const kim = userNames[0];
// const hong = userNames[1];
// const go = userNames[2];

const [kim, hong, go] = userNames;


console.log(`kim : ${kim}, hong : ${hong}, go : ${go}`);

// 나는 0번 인덱스와 2번만 추출하고 싶어 1번은 안 할래
const [kk, , gg] = userNames;
console.log(`kk: ${kk}, gg: ${gg}`);

const exArr = [ [10, 20], () => { } ];

const [numbers, foo] = exArr;
numbers[1];
foo();



let first = 10, second = 20;


[first, second] = [second, first];
console.log(`first : ${first}. second : ${second}`);



// 맨 앞 2개의 숫자만 각각의 변수에 저장하고
// 나머지는 다시 한 번 배열로 묶어서 보관하고 싶다.
const nums = [1, 3, 5, 7, 9, 11];

// const numsCopy = numsCopy.shift()
// const one = numsCopy.shift();
// const three = numsCopy.shift();

const [one, three, ...numsCopy] = nums;

console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`others: `, numsCopy);


// 스프레드를 통한 배열 합치기
const foods = ['햄버거', '콜라', '감자튀김'];
const fruits = ['오렌지', '자몽', '레몬'];

const newFoods = [...foods, ...fruits];
console.log(newFoods);

//배열 복사
const newFruits = [...fruits];
newFruits[1] = '포도';
console.log(newFruits);

const mtFavoriteFoods = ['족발', ...foods, '닭강정', '피자'];
console.log(mtFavoriteFoods);

//원본을 유지하면서 push 해보고 싶을 때 spread를 사용하면 원본이 손상되지 않는 장점이 있음.
