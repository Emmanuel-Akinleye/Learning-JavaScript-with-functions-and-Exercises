/* 
    - I will be attempting to print out the multiplication from numbers 1 - (n)
    - This will require a kind of loop
    - I'll have to calculate ou
*/

export const multiplication_table = (number) => {
    let answer;
    console.log(`This is the multiplication table for ${number}`)
    for (var i = 1; i <= number; i++) {
        answer = number * i;
        console.log(`${number} x ${i} = ${answer}`)
    }
}
multiplication_table(10);