class Hamburger {
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
    }
  
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_LARGE = { price: 100, calories: 40 };
  
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
  
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_SAUCE = { price: 15, calories: 0 };
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    calculatePrice() {
      const sizePrice = this.size.price;
      const stuffingPrice = this.stuffing.price;
      const toppingsPrice = this.toppings.reduce((acc, topping) => acc + topping.price, 0);
      return sizePrice + stuffingPrice + toppingsPrice;
    }
  
    calculateCalories() {
      const sizeCalories = this.size.calories;
      const stuffingCalories = this.stuffing.calories;
      const toppingsCalories = this.toppings.reduce((acc, topping) => acc + topping.calories, 0);
      return sizeCalories + stuffingCalories + toppingsCalories;
    }
  }
  
  // Example usage
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  hamburger.addTopping(Hamburger.TOPPING_MAYO);
  
  console.log("Calories: " + hamburger.calculateCalories());
  console.log("Price: " + hamburger.calculatePrice());
  
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  console.log("Price with sauce: " + hamburger.calculatePrice());
  