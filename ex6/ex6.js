/*

1. Create two to four lists of words or phrases. Each list should have some sort of theme, or be similar in some way. As a guiding principle, each list should have 5+ items to start. Your lists should be separate in some way (in theme, purpose, or structure).

2. Write the formula for selecting a random element from an array. Use string interpolation to swap out one of the words in the poem for a randomly selected element from your list.

Hint: Formula for selecting a random element from an array
let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];

3. Write a function that logs the randomized poem to the console.

4. Invoke (call) the function to run the poem.

5. Check the console for the result.

Sample Poem: // A house of steel / Among high mountains / Using candles / Inhabited by people who sleep almost all the time.

*/

let array_one = [
  "a house of wood",
  "a house of brick",
  "a house of broken dishes",
  "a house of discarded clothing",
  "a house of dust"
];

let array_two = [
  "is sitting on a pile of dirty socks",
  "is a-rockin' so don't come a-knockin'",
  "is only half of a good house because of ELEMENTAL",
  "would smell better if you showered once in a while",
  "isn't great, but the mortgage payments are decent"
];

function renderPoem() {
  let random_element_from_array_one =
    array_one[Math.floor(Math.random() * array_one.length)];

  let random_element_from_array_two =
    array_two[Math.floor(Math.random() * array_two.length)];

  let poem = document.querySelector(".poem");

  let paragraph = document.createElement("p");

  paragraph.textContent =
    `${random_element_from_array_one} \n ${random_element_from_array_two}`;

  poem.appendChild(paragraph);

}

let btn = document.querySelector("button");
btn.addEventListener("click", renderPoem);

/*
function randomPoem() {
  //   generate random elements from arrays
  let elementOne = one[Math.floor(Math.random() * one.length)];
  let elementTwo = two[Math.floor(Math.random() * two.length)];
  let elementThree = three[Math.floor(Math.random() * three.length)];
  let elementFour = four[Math.floor(Math.random() * four.length)];
  //   grab div from DOM
  let poem = document.querySelector(".poem");
  //   create new p element
  let paragraph = document.createElement("p");
  //   add text to new element
  paragraph.textContent = `${elementOne} for ${elementTwo} ${elementThree} at ${elementFour}`;
  //   add p element to div
  poem.appendChild(paragraph);
}
paragraph.textContent =
  `${random_element_from_array_one} \n ${random_element_from_array_two}`
  random_element_from_array_one + " " + random_element_from_array_two;
console.log(
  `${random_element_from_array_one} \n ${random_element_from_array_two}`
);

let btn = document.querySelector("button");
btn.addEventListener("click", renderPoem);
*/
