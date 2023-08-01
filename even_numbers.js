/* 
    - Print out even numbers from 0 - (n)
    - Even Numbers are Numbers that can be divided by 2
    - This sort of problem will require a loop
    - I'll have to to loop through 0 - 10 to get the even numbers
*/

// Creating a function that we
const even_numbers = (numbers) => {

    for (var n = 0; n < numbers; n ++) {
        if (n % 2 === 0) {
            console.log(n);
        }
    }
}
even_numbers(10)