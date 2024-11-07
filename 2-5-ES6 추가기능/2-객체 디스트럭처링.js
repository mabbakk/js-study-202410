
const student = {
  stuName : '뽀로로',
  age : 5,
  birthDay: '2020-01-03'
};

// const name = student.stuName;
// const age = student.age;
// const birth= student.birthDay;

const { stuName : name, age, birthDay : birth} = student;  // 변수의 이름을 바꿀 수 있음
console.log(`stuName : ${name}`);
console.log(`age : ${age}`);
console.log(`birthDay : ${birth}`);


const divStyle = {
  'font-size': '16px',
  'border-radius': '50%'
};


const { 'font-size': fontSize, 'border-radius': bddr } = divStyle;
console.log(fontSize);
console.log(bddr);



const myPetInfo = ({name, age}) => {
  console.log(`우리 애완동물 이름은 ${name}입니다.`);
  console.log(`우리 애완동물 나이는 ${age}살 입니다.`);
}

const dog = {
  name : '초코',
  age: 3,
  kind: '진돗개',
  injection: true,   // 실무에서는 이처럼 뒤에 더 추가할 사항이 없을지라도 , 를 추가해주는 것이 조금 더 센스있음.
};
const cat = {name : '나비', age: 2};

myPetInfo(dog);
myPetInfo(cat);

const {kind, injection, ...dogRest} = dog;
console.log(dogRest);


// 스프레드
// cat의 원본은 유지하면서 새 객체에 injection 프로퍼티를 추가하고싶다?
// (원본은 건드리면 안 됨)

const copyCat = {
  ...cat,
  injection : false,
  age: 10
};

copyCat.injection = false;
console.log(cat);
console.log(copyCat);
