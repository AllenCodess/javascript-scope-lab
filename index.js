// Write your solution in this file!


// Step 1: Variable Data
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// add flatburger to the array
function addBurger() {
  const newBurger = 'Flatburger'; // function-scoped
  burgers.push(newBurger);
}

// if true add maple bacon burger to the array
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// changeFeaturedDrink changes the value of feturedDrink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}



  