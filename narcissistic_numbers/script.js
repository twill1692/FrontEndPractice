//A Narcissistic Number is a number that is the sum of its own digits each raised to the 
//power of the number of digits.
//For example, take 153 (3 digits), which is narcisstic:
//1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//1652 (4 digits), is non-narcisstic:
//1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

//Create a function that returns true or false depending upon whether the given number n is a 
//Narcissistic number or not.
//--------------------------------------------------------------------------------------------


//Area of confusion. Map is a built in object (See object vs Map in MDN re. Iterability) map is 
//is a method of the Array object (class).

//lets break this out to its compent pieces.
//split() returns an array, map() takes an array and maps somthing to each element in that array
//in our case we are mapping a function to each element in the array. Reduce... well i'm not
//sure what reduce is doing yet.

let max = 5000;
let min = 1;

//Copied and pasted; disect this function when you can.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = null;
    // return Math.floor(Math.random() * (max - min + 1) + min);
    return 153;
}

function isNarcissistic() {
    //Get a random number between two values;
    n = getRandomIntInclusive(min, max)
    console.log(typeof (n))
    console.log(n);

    //create a string out of the number.
    let numberString = n.toString();

    //use the split method of the string object to return an array from the number
    let myNumberArray = numberString.split("");

    //Now that we have an array we can use the map method to map onto it a function.
    //When using an arrow function expression: () => ... remember, if you include {}
    //for the body, you also have to include a return statement.
    //Map Syntax: array.map(function(currentValue, index, arrayBeingMappedTo))
    //currentValue is required
    //Inline Anonymous function as below as a seperate named function.
    //like this:
    // let myMappedArray = myNumberArray.map(exponent);
    // function exponent(x, i, arr) {
    //     return x ** arr.length
    // }
    let myMappedArray = myNumberArray.map((x, i, arr) => { return x ** arr.length })
    console.log("Heres the new array of function mapped values")
    for (const i of myMappedArray) {
        console.log(i)
    }
    //Now run a reducer to get the total from the new mapped array and check if it equals
    //the original number. Array.reduce() works similarly to Array.map() in that it applies 
    //a function to each element in the array, but it differs in that it maintains an accumulator
    //value to keep a total as the function works on each pass through the array.
    //Reduce syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    //total and currentValue are required.
    let total = myMappedArray.reduce((a, x) => { return a += x })
    console.log(`The return value type of the total is ${typeof (total)}`)
    console.log(`And heres the total \n${total}`)

    //Now, put it together
    return n.toString()
        .split("")
        .map((x, i, arr) => x ** arr.length)
        //Either of these methods works. The first is taking the accumulator a and assigning to
        //it the value of the current value of the accumulator plus the current value in the array
        //the following method +a + +b works the same but the +a syntax indicates a Unary operator
        //that does a type check to make sure the operand is converted to a number, if it isnt.
        //this seems redudant as we know programmaticaly we are getting a number from the begging
        //and using the strict equivalance operator, we check that the result is of same type 
        //as n
        .reduce((a, x) => a += x)
        // .reduce((a, x) => +a + +x)
        === n

    //And.. it works!
}

document.getElementById("btn").onclick = () => {
    console.log(isNarcissistic() ? `${n} is narcissistic` : `${n} is not narcissistic`);
    //Combine that ternary with interpolation; wrap with () ?
}