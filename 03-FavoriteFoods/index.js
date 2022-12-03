/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I usually want pizza 🍕.
*/

const faveFoods = {
    breakfast: 'eggs 🍳',
    lunch: 'a sandwich 🥪',
    supper: 'ramen 🍜'
}

// destructure the object faveFoods
const { breakfast, lunch, supper } = faveFoods;

// console.log(breakfast);

// Identify your target, which should be the meals <section>.
// Grab the section element

let meals = document.getElementById("meals");

// Create a new <p> element
const newP = document.createElement('p');

// Store the sentence describing my favorite foods for breakfast, lunch, and dinner in a variable
let faveMeals = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I usually want ${supper}.`

// Create the text node with your faveMeals as an input
// Append the text node to the <p> element
newP.appendChild(document.createTextNode(faveMeals));

// Add the <p> element to the meals <section>
meals.appendChild(newP);

