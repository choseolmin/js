const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,});
  


rl.question('입력한 문장의 짝수 인덱스만 출력합니다. 원하는 값을 입력하세요: ', (string) => {
    
    let result = "";

    for (let i = 2; i < string.length; i++) {
        if (i % 2 === 0) {
            result += string[i];
        }
    }

    console.log(`짝수 인덱스 문자열: ${result}`);

    rl.close();
});