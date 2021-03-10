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
  "is a-rockin' so don't come a-knockin'"
];

let random_element_from_array_one =
  array_one[Math.floor(Math.random() * array_one.length)];

let random_element_from_array_two =
  array_two[Math.floor(Math.random() * array_two.length)];

console.log(random_element_from_array_one)
