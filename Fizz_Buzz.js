
let answer = parseInt(window.prompt("How many numbers do you want? "));

for (var i = 1; i < answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}