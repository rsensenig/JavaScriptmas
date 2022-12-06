import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    // filter for products with the type of sweet
    const candy = data.filter(product => product.type === "sweet");
    
    // use map to create a new array called shoppingCart that contains only the item and price of each candy
    const shoppingCart = candy.map(({item, price}) => ({item, price}));
    return shoppingCart;
};

console.log(getSaleItems(products));