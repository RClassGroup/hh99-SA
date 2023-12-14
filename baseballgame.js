// 숫자 3자리를 중복되지 않게 뽑는다 1~9
// 사용자가 값을 입력한다
// 값과 숫자를 비교한다 includes
// 스트라이크, 볼, 아웃으로 표현한다 if
// 정답이 나오면 종료한다.

// 숫자 3자리를 중복되지 않게 뽑는다 1~9
const numbers =[]; 
for(let n = 1; n < 10; n++){
    numbers.push(n);
    }

    const answer =[];
    for (let n = 1; n < 4; n++){
        const num = Math.floor(Math.random() * numbers.length)
        answer.push(numbers[num]);
        numbers.splice(num, 1)
    }
    console.log('컴퓨터가 숫자를 생성했습니다. 답을 맞춰보세요')
    console.log(answer)

let strikes = 0;
let balls = 0;
let count = 0;

while (strikes < 3) {
    count++
    let userInput = prompt("숫자 3개를 입력해 주세요 (중복되지 않는 1~9 사이의 숫자):");
    let userNumbers = userInput.split('').map(Number);
    console.log(`${count}번째 시도 : ${userNumbers}`);

    strikes = 0;
    balls = 0;

    for (let i = 0; i < 3; i++) {
        if (userNumbers[i] === answer[i]) {
            strikes++;
        } else if (answer.includes(userNumbers[i])) {
            balls++;
        }
    }

    

    console.log(`Strikes: ${strikes}, Balls: ${balls}`);

    if (strikes === 3) {
        console.log(`${count}번만에 맞히셨습니다.
        게임을 종료합니다.`);
    }
}