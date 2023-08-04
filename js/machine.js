let money = 10000;

function showPrice() {
    const price = document.getElementById('price');
    price.innerHTML = money;
}
//querySelector 는 선택자의 첫번째 객체 반환
//getElementById 선택자와 일치하는 객체 반환
const button = document.getElementById('btn');

button.onclick = function() {

    money -= 1000;

    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = Math.floor((Math.random() * 10));
    }
        let n1 = arr[0];
        let n2 = arr[1];
        let n3 = arr[2];
        

        const d1 = document.getElementById('first_num');
        d1.innerHTML = n1;
        const d2 = document.getElementById('second_num');
        d2.innerHTML = n2;
        const d3 = document.getElementById('third_num');
        d3.innerHTML = n3;
    
    // 0원 이하일 때 알림 띄우기
    if(money<=0) {
        alert(`돈이 부족합니다.`);
    } else {
        // 세개의 숫자가 같은 숫자일 경우 +5000 (7일 경우 제외)
        if((n1 === n2 && n1 === n3) && (n1 !== 7)) {
            money += n1 * 5000;
          }

        // 세개의 같은 숫자이면서 0일 경우 +10000원  
        if((n1 === n2 && n1 === n3) && (n1 === 0)) {
            money += 10000;
        }

        // 7이 하나라도 나올 경우 +2500원
        if((n1 === 7 || n2 === 7) || (n3 === 7)) {
            money += 2500;
        }
    }

    console.log(`${n1}, ${n2}, ${n3}`);
    console.log(`잔액 : ${money}`);
     
    showPrice();
    
}    
