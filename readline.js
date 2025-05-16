const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,});
  
rl.question('원하는 마름모 높이를 입력하세요  ', (input) => {

    h = parseInt(input/2+1);
    let j = 1;

    for (let i = h; i >= 0; i--)  
    {
        console.log(" ".repeat(i) + "*".repeat(j));
        j+=2;
    }

    j -=4 ;

    for (let i = 1; i < h+1; i++)  
      {
          console.log(" ".repeat(i) + "*".repeat(j));
          j-=2;
      }

    rl.close();
});


  