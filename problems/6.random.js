/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
// function rand() {
//   return Math.random();
// }
const rand = () => Math.random();

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
// function diceRoll() {
//   return Math.floor((Math.random()*6) + 1);
// }
const diceRoll = () => Math.floor((Math.random()*6) + 1);

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
// function randRange(n) {
//   return Math.floor(Math.random() * n);
// }
const randRange = n => Math.floor(Math.random() * n);

/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
// function totallyFairDiceRoll() {
//   return 4;
// }
const totallyFairDiceRoll = () => 4;

module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}