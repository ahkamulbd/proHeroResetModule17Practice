/* 
    Practice Problem 4: 

    Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
    remainder would be if she divided the number by 5. Help Sarah write the program.
    Input:
    The first line of the input contains the number.
    Output:
    Print the remainder.
   
    Sample Input:
    119
    Output: 
    4
*/

var givenNumber = 119;
var divider = 5;

var remainderNumber = givenNumber % divider;

console.log(remainderNumber);