//continue = skip 이라고 생각하면 된다!

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;                //반복문 안에 문장이 하나만 있다면 중괄호를 쓰지 않고 한 줄에 써도 됨!
    console.log(i);
}
console.log('반복문 종료!');

//if (i % 2 === 0)= 2로 나눴을 때 나머지가 0 : 2의 배수라는 뜻
//  여기에        continue(=skip) 가 붙으면 2의 배수가 아닌 수 즉 홀수들을 말한다!