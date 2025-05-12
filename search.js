let talk = "윤대원이 말했다. 한별님 불좀 꺼줄래?";
let ox = 0;

ox = talk.includes("한별") && talk.includes("윤대원");


console.log("제시단어 : 한별 , 윤대원" );
console.log("두 단어가 문장에 있을까요?: " + ox);

console.log("제시단어 : 한별 , 111" );
ox = talk.includes("한별") && talk.includes("111");

console.log("두 단어가 문장에 있을까요?: " + ox);