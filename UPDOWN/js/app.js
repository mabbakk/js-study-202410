let min = 1;
let max = 100;
const $numbers = document.getElementById('numbers');
const $up = document.getElementById('UP!!');
const $down = document.getElementById('DOWN!!');

// 랜덤 정답 생성
const secret = Math.floor(Math.random() * 100) + 1;

// 1부터 100까지 반복되는 숫자 아이콘 생성
for (let i = 1; i <= 100; i++) {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  icon.textContent = i;

  $numbers.appendChild(icon);
}




// 아이콘을 선택했을 때 정답 여부 확인,
  // 출력된 숫자가 secret과 동일한지 판별,
  // 정답 & UP & DOWN 판별.

// UP & DOWN 아이콘 방방

// const upAnimation = document.querySelector('show');

$numbers.addEventListener('click', (e) => {
  
    if (e.target.classList.contains('icon')) {
    const selectedNumber = parseInt(e.target.textContent);
    console.log(selectedNumber)}

    else if (selectedNumber === secret) {
      $numbers.addEventListener('');
      
    } else if (selectedNumber < secret) {
      $numbers.addEventListener('');

    } else if (selectedNumber > secret) {
      $numbers.addEventListener('');
    }
});


// 위에 두 개 공통사항 : 선택한 숫자 이하/이상은 사라지고 남은 숫자에서 다시 시작

// 반복

// 정답이면 어딘가에서 congraulations 아이콘이 튀어나오고 종료
