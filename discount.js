// 1번 문제 
console.log("1번 문제");  
let price = 9357;
let discount = 20;

console.log("기존 가격 : "+price);
console.log("할인률 : "+discount +"%");

function disprice(price, discount) {
    
    return Math.round((price - (price * discount / 100))/10) * 10;
}

console.log("할인가 : " + disprice(price, discount));
console.log("\n");  

// 2번 문제
console.log("2번 문제");  
let string = "윤대원이 말했다. 한별님 불좀 꺼줄래?";
let word1 = "한별";
let word2 = "윤대원";

console.log("원본 문장 : "+string);
console.log("삭제 단어 : "+word1);
console.log("삽입 단어 : "+word2);

function changeWord(string, word1, word2) {


    let first_index = string.indexOf(word1);
    let last_index = first_index + word1.length-1;

    let string1 ="";
    let string2 ="";

    string1 = string.slice(0, first_index);
    string2 = string.slice(last_index+1, string.length);

    return string1 + word2 + string2;
}

console.log("단어 바꾸기 함수 실행");
console.log(changeWord(string, word1, word2));
console.log("\n");  

// 3번 문제

console.log("3번 문제");  
let talk = "윤대원이 말했다. 한별님 불좀 꺼줄래?";
let word3 = "한별";
let word4 = "111";

console.log("원본 문장 : "+talk);
console.log("확인 단어 1 : "+word3);
console.log("확인 단어 2 : "+word4);


function checkWord(talk, word3, word4) {

    return talk.includes(word3) || talk.includes(word4);
}


console.log("두 단어중 하나라도 문장에 있을까요?: " + checkWord(talk, word3, word4));
console.log("\n");  