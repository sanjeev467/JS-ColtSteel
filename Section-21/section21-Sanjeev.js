// function scope-----/

// function helpMe(){
//     let msg = "I'm on fire";
//     msg;
// }

// ------//------

// Eg----/

// let bird = 'scarlet macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
// }
// birdWatch()
// console.log(bird);

// if i do console.log outside the function then the output will be the one which is defined before the function which here is scarlet macaw

// let bird = 'scarlet macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch()

// and if i do console .log inside the function the output will be of the defined function

// let game = 'football';
// function sport(){
//     let game = 'cricket';
//     console.log(game);
// }
// sport()
// -----> same goes with  this one also

// -----/-----

// ----- lexical scope-----

// function bankRobbery(){
//     const heroes = ['Spiderman', 'Wolverin', 'Black panther', 'Batwoman']
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`Please help us!!, ${hero.toLocaleUpperCase()}`);
//         }
//     }
//     cryForHelp();
// }
// -----/-----

// ----/---
// function outer(){
//     const hero = 'spiderman';
//     function inner(){
//         let cryForHelp = `${hero}, please save me!!`
//         console.log(cryForHelp);
//     }
//     inner();

// }

// -----/----

// -----/----
// Function Expressions

// const add = function(x,y){
//     return x + y;
// }

// -----/----

// -----/----
// HIGHER ORDER FUNCTIONS

// const add = (a, b ) => {
//     return a + b;
// }

// const calc = (num1, num2, oper) => {
//     return oper(num1, num2);
// }

// console.log(calc(2, 5, add));

// -----/----

// -----/----
// function callTwice(func){
//     func();
//     func();
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll);
// }
//  callTwice(rollDie)
// -----/----

// Returnin finction

// function makeMysteryFunc () {
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function () {
//             console.log("This is the correct function")
//             confirm.log("Successful")
//         }
//     } else {
//         return function () {
//             alert("This is the wrong function")
//             alert("Stop trying to close this window")
//         }
//     }
// }

// ----another exmple----

// function that generates the function---

// ---function that tells a number is between any two numbers---

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function makeBetweeenFunc(min,max){
//     return function(num) {
//         return num >= min && num<=max;
//     }
// }

// ----//---

// METHODS----

// We can add function as properties on objects...We call them methods!!

// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num **3;
//     }
// }

// ----SHORTER SYNTAX___

// const myMath = {
//     PI: 3.14159,
//     square(num){
//         return num * num;
//     },
//     cube(num){
//         return num ** 3;
//     }
//     const m
// }
