
class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    Sleep() {
      console.log(`${this.name}은 잠에 들었습니다.`);
    }
  }
  
  let kim = new Human('김', 30);
  
  // 비교 1
  console.log(Human.prototype.constructor === Human); // true
  
  // 비교 2
  console.log(Human.prototype === kim.__proto__);     // true
  
  // 비교 3
  console.log(Human.prototype.Sleep === kim.Sleep);   // true
  