const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,});
  
rl.question('변수 a를 입력해 주세요. 작은수 ', (a) => {
    
    rl.question('변수 b를 입력해 주세요. 큰수 ', (b) => {
    
    let result = 0;
    a = parseInt(a);
    b = parseInt(b);

    if (b % a === 0) {
        console.log(`b는 a의 배수 입니다.`);
    }
    else {
        console.log(`b는 a의 배수가 아닙니다.`);
    }

    for (let i = a; i < b+1 ; i++) {
        result += i;
    }

    console.log(result);
    rl.close();

});
});
