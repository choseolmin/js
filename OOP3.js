class  StockMarket{
    constructor() {
      this.observes = [];
      this.price = 10;
    }

    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify() {
      for (let observer of this.observers) {
        observer.update(this.price);
      }
    }
  
    setPrice(newPrice) {
      this.oldPrice = this.price;
      this.price = newPrice;
      this.notify();
    }
  }
  


  class Investor {
    constructor(name) {
      this.name=name;
    }

    update(price) {
      throw new Error("update 메서드는 하위 클래스에서 구현해야 합니다.");
    }

  }

  class ConservativeInvestor extends Investor {
    constructor(name, market) {
      super(name);
      this.market = market;
      this.lastPrice = market.price;
    }
  
    update(newPrice) {
      if (this.lastPrice - newPrice >= 10) {
        console.log(`${this.name}: 📉 너무 떨어졌군요!`);
      }
      this.lastPrice = newPrice;
    }
  }

  class attackInvestor extends Investor {
    constructor(name, market) {
      super(name);
      this.market = market;
      this.lastPrice = market.price;
    }
  
    update(newPrice) {
      if (this.lastPrice - newPrice < -10) {
        console.log(`${this.name}: 너무 올랐군요!`);
      }
      this.lastPrice = newPrice;
    }
  }
  