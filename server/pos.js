const readline = require("readline");
// create a readline interface for reading user input
const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// define the products available for purchase
const products = {
  apple: 25,
  banana: 55,
  orange: 35,
};

// initialize the total price
let totalPrice = 0;

// start the main program loop
const start = () => {
  readline.question(
    `Enter a product name (or "done" to complete the sale)`,
    (product) => {
      if (product === "done") {
        console.log(`Total price: $${totalPrice.toFixed(2)}`);
        readline.close();
        return;
      }

      if (products[product]) {
        totalPrice += products[product];
        console.log(`Added ${product} to cart (price: $${products[product]})`);
      } else {
        console.log(`Sorry, ${product} is not available for purchase`);
      }

      start();
    }
  );
};

// start the program
start();
