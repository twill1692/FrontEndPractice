let myHeading = document.querySelector('h1');
let updateBtn = document.querySelector('button');
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
let data = {};

myHeading.textContent = 'Hello JS';

//Playing around with XMLHttpRequest
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    data = request.response;
    console.log("got the response!");
    console.log(data);
}
//Async lesson and the value of promises. Data wont get updated to the response value, the 
//onload event above takes place after the script below runs.
console.log(`Have we the data yet? ${data.prototype}`);

// Declaring a class with a constructor
class Person {
    constructor(first, last, age, gender) {
        this.name = {
            'first': first,
            'last': last
        },
            this.age = age,
            this.gender = gender,
            this.hello = function () {
                alert('hi');
            };
        Person.prototype.x = function () {
            alert('wabalubadubdub');
        };
    }
}

// A constructor function, og without using class
function Dude(first, last, age, gender) {
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age;
    this.gender = gender;
}

// Another constructor function, with the 'call' function used to reference the constructor 
// function 'Dude'; this is a shortcut so you dont have to define all the properties if theyre
// already defined on another constructor you might inherit from.
function Worker(first, last, age, gender, jobTitle) {
    Dude.call(this, first, last, age, gender);
    this.jobTitle = jobTitle;
}

// Whole bunch of initializations using let instead of deprecated var (no hoisting with let btw)
let Worker1 = new Worker('Bob', 'Workingman', 55, 'Male', 'Janitor')
let me = new Person('Troy', 'Williams', 32, 'Male');
let me2 = Object.create(me);
let person = new Person();

// Just a plain ol object literal expression
const guy = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

// Adding an event listener to the dom for the updateBtn and updating some property values
updateBtn.addEventListener('click', function () {
    person.name.first = document.querySelector('#fName').value;
    person.name.last = document.querySelector('#lName').value;
});

// OR, like this -
// updateBtn.onclick = () => {
//     person.name.first = document.querySelector('#fName').value;
//     person.name.last = document.querySelector('#lName').value;
// }
// OR 
// I could go to the button tag, give it an onclick attribute with the value
// set to a named function I want to call when clicked.
// OR
// document.querySelector('button').addEventListener('click', function() {
//     person.name.first = document.querySelector('#fName').value;
//     person.name.last = document.querySelector('#lName').value;
// });
//We could do the same as above here too, without the declarations etc..