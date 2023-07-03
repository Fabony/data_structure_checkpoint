/*
At this checkpoint you are asked to write an algorithm that fulfills the following description:

Description:

Problem 1
 
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays

Instructions
Problem 1
Solution  with an array.

Initialize sum = 0. 
Compare each element of set one with the second set and if element is not present then add that element to sum. 
Then do the vice versa to add elements from the second set.
*/



//Solution


firstNumbers = [3,1,7, 9]
secondNumbers = [2,4,1,9,3]
let n = firstNumbers.length;


function dataStructure ( firstNumbers, secondNumbers, n ){
        sum = 0;
        distinctElements = new Set();


        for (i=0; i<n; i++){
            distinctElements.add(firstNumbers[i])
            sum += firstNumbers[i]
        }

        for (i=0; i<n; i++){
            if (distinctElements.has(secondNumbers[i])){
                sum -= secondNumbers[i]
            }

            else{
                sum += secondNumbers[i]
            }
        }
        return sum
}

console.log(dataStructure(firstNumbers ,secondNumbers , n));



// firstNumbers = [3,1,7, 9]
// secondNumbers = [2,4,1,9,3]
// let m = secondNumbers.length;


// function dataStructure ( secondNumbers, firstNumbers, m ){
//     sum = 0;
//     distinctElements = new Set();


//     for (i=0; i<n; i++){
//         distinctElements.add(secondNumbers[i])
//         sum += secondNumbers[i]
//     }

//     for (i=0; i<n; i++){
//         if (distinctElements.has(firstNumbers[i])){
//             sum -= firstNumbers[i]
//         }

//         else{
//             sum += firstNumbers[i]
//         }
//     }
//     return sum
// }



// console.log(dataStructure(secondNumbers ,firstNumbers, m));


// Problem 2 
// You are asked to write an algorithm that fulfill the following: 

// Name: Dot product
// Description:
// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

// PROCEDURE  dot_prouct( NUMBER: v1 , v2)

//   VAR
//      n : size   
//     v1 : vector_one
//     v2 : vector_two
    
//   BIGIN
    
//   product = 0
//       // Loop for calculate dot product
//      for (let i = 0; i < n; ) Do
//       product += v1[] *v2[] ;
      

//   END

//             //  2 SOLUTION
//             function dotProduct(vector1, vector2){
//                 let result = 0;
//                 for(let i = 0; i < vector1.length; i++){
//                     result += vector1[i] * vector2[i]
//                   }
//                 // SINCE IS FUNCTION 
//                 return result
//               }
//                   // FOR LOOP 
//               for(let i = 0; i < vectors.length; i++){
//                   // Nested  For loop
//                 for(let j = i + 1; j < vectors.length; j++){
//                   if(dotProduct(vectors[i], vectors[j]) === 0){
//                       console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
//                   }
//                 }
//               }


//                   //3 SOLUTION

//                   function dot_Product(v1, v2)

//                   VAR
//                   n : size   
//                  v1 : vector_one
//                  v2 : vector_two
                
//                  BEGIN
                
//                  product = 0
//                       // Loop for calculate dot product 
//                       for (let i = 0; i < n; i++)

//                           product = product[] + v1[] * v2[];
//                       return product;                 