// while loop

// Q) Repeat the statement 5 times 

// let i = 1;
//  while(i<=5){
//      console.log("Hii")
//      i++
//  }

// what if we print i outside he while loop
// console.log(i);
//  code finish



// we can do decrement also 

// let i = 5;
//  while(i>=0){
//      console.log("Hii" , i);
//      i--
//  }

// code finish


// FOR Loop

// for(let i = 1;i<=5;i++){
//     console.log("Hii" , i);
// }
//  code finish 


// Nested For Loop 

// for(let i = 1;i<=5;i++){
//     console.log("Hii" , i);
//     for(let j = 1;j<=5;j++)
//     console.log("hello" , j);
// }

// code finish 

// conclusion : pehle outer loop ek baar execute hoga, aur phir inner loop execute hoga tab tak jab tak ki inner loop 
// ka condition pura nhi ho jata aur agar inner loop ka condition pura ho gaya ya phir false ho gaya to ye inner loop 
// chod dega aur outer loop ka condition check krega air phir execute karega aur agar outer loop ka cond sahi hai to outer loop execute hoga aur phir inner loop pe aa jayega phir waise ho hote rahega jab tak outer loo ka condition true na ho jaye ya galat ho jaye


// Nested while loop 
// let i = 1;
//  while(i<=5){
//      console.log("Hii")
//      let j = 1;
//      while(j<=5){
//          console.log("Hello",j);
//          j++
//      }
//      i++
//  }

// code finish 


// while loop eg 
// let num = 564782;
// while(num>0){
//     console.log(num%10);
//     num = parseInt(num/10)
   
// }


// for(let i = 25; i>=0; i-=5){
//     console.log(i);
// }



// for(let i = 20; i>=0; i-=1){
//     console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for(let i = 0; i<=people.length-1;i++){
//     console.log(people[i].toUpperCase());
// }


// for(let i = 1; i<=10; i++){
//     console.log("the value is" + i);
// }

// we can do the same with template literal

// for(let i = 1; i<=10; i++){
//     console.log(`the value is ${i}`);
// }


// for...of loop 
// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let value of numbers){
//     console.log(Math.pow(value,2));
// }
//  code finish