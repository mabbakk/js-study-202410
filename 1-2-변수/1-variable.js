var num = 10+20; // 30 저장
console.log(num*2); //120 출력

var doubleNum = num * 2; //60 저장
console.log(doubleNum * 2); //120 출력

// 변수가 생성될 때는 var, 변경될 때는 var이 쓰이지 않음.

num = 10; //값 10으로 변경
console.log(num * 2);


//변수 선언 (생성)
// var 7freidName;  //숫자로 시작하거나 숫자만으로 지정 불가
// var friend name; //이름을 지을 때 띄어쓰기 불가능
// var my_friend_name; //snake case : SQL, python에서 자주 씀
var myFriendName; //camel : Java, Javascript_ 가장 앞글자는 소문자로 작성

//특수문자는 $,_만 사용 가능
var $friendName_;

//예약어(키워드)는 이름 지정 불가능
var for_;

var userName;
console.log(userName);

//변수의 초기화(initialized)
userName = '김철수';
console.log(userName); //김철수

//변수를 선언하면서 초기화
var adresss = '서울시';
adresss = '경기도'; //변수값 수정 (수정 시에는 var을 안 붙임)