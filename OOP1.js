class Shape {
    constructor() {
     
    }
  
    area() {
        throw new Error("area() 메서드를 구현해야 합니다.");

    }
  
    perimeter() {
        throw new Error("perimeter() 메서드를 구현해야 합니다.");

    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(sero,garo) {
      super();
      this.sero = sero;
      this.garo = garo;
    }
  
    area() {
      return this.sero * this.garo;
    }
  
    perimeter() {
      return this.sero*2 + this.garo*2;
    }
  }

  class Triangle extends Shape {
    constructor(a,b, base, height) {
      super();
      this.a =a ;
      this.b =b ;
      this.base =base ;
      this.height =height ;
    }
  
    area() {
      return this.height * this.base;
    }
  
    perimeter() {
      return this.a + this.b + this.base;
    }
  }

const circle = new Circle(5);
console.log(circle.area());   
console.log(circle.perimeter()); 

const rect = new Rectangle(4, 6);
console.log(rect.area());    
console.log(rect.perimeter());   

const tri = new Triangle(3, 4, 5, 3);
console.log(tri.area());         
console.log(tri.perimeter());    