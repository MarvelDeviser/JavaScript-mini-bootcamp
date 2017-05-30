# [JavaScript](https://www.javascript.com) Mini-BootCamp
- https://lambdaschool.com/mini-bootcamp/javascript
#### https://github.com/mixelpixel/JavaScript-mini-bootcamp#lesson-one
#### https://github.com/mixelpixel/JavaScript-mini-bootcamp#lesson-two
#### https://github.com/mixelpixel/JavaScript-mini-bootcamp#lesson-three
#### https://github.com/mixelpixel/JavaScript-mini-bootcamp#lesson-four
#### https://github.com/mixelpixel/JavaScript-mini-bootcamp#git--github-notes
### JavaScript Standards
- https://www.ecma-international.org/ecma-262/7.0/
- https://developer.mozilla.org/en/docs/Web/JavaScript
***
# Lesson One
## "Introduction to JavaScript"
- [LESSON ONE LECTURE](https://youtu.be/fjjebMXE-P8)
   > "This introductory lesson covers variables and operators, functions, data types, and the Math object. It also touches lightly on Node, GitHub, and npm.
   > By the time you finish this lesson (and the accompanying homework) you should have a firm grasp of the fundamental elements of the JavaScript language. You'll have your environment set up, and you'll get a short introduction into test driven development; a lot of ground to cover in only a few short minutes.
   > The homework includes initial JavaScript environment setup, and requires you to create Feynman writing prompts, then code those concepts."
- [LESSON ONE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-1)
- [LESSON ONE: Completed Homework](https://github.com/mixelpixel/JavaScript-mini-bootcamp/tree/master/js-minicamp-homework-1-master)

<details><summary><b>LESSON ONE: NOTES</b></summary><p>

### LESSON ONE LECTURE NOTES
- [@07min](https://youtu.be/fjjebMXE-P8?t=7m) **Lecture starts**
- [@8m20s](https://youtu.be/fjjebMXE-P8?t=8m20s) **Node.js**
  - Download node from [nodejs.org](https://nodejs.org)
  - To exit the node interactive shell, type `.exit` or send EOL with ctrl+d, or ctrl+c twice.
- [@09min](https://youtu.be/fjjebMXE-P8?t=9) **command line basics**
- [@11min](https://youtu.be/fjjebMXE-P8?t=11) **`var` and `console.log();`**
  - JS declaring variables with "var" keyword & using console.log() for printing to screen/stdout.
  - JS is not "strongly Typed" - var works for eVARy data type (as opposed to C where each variable is declared along with its data type.)
  ```js
  var variable_name   = 'something'; // strings
  var favorite_number = 15;          // integers
  var likesPizza      = true;        // Boolean
  var age             = 30;
  var age             = age + 10;    // arithmetic + - / *
  var remainder       = 20 % 7       // % modular arithmetic returns the remainder

  console.log(variable_name);
  console.log(favorite_number);
  console.log(likesPizza);
  console.log(age);
  console.log(remainder):

  // etc...
  ```
- [@26min](https://youtu.be/fjjebMXE-P8?t=26) **Concatenation**
```js
var firstName = 'Ben';
var lastName = 'Nelson';
var fullName = firstName + ' ' + lastName;

console.log(fullName);
```
- [@28m20s](https://youtu.be/fjjebMXE-P8?t=28m20s) **Global Objects, methods and properties**
  - e.g. the "Math" object with methods: powers, round, ceil, floor, etc.

  ```js
  var twoCubed = Math.pow(2, 3);

  console.log(twoCubed);
  ```
- [@31m25s](https://youtu.be/fjjebMXE-P8?t=31m25s) All strings have the property: Length
```js
var greeting = "Hello World!";
var greetingLength = greeting.length;

console.log(greetingLength);
```
- [@32m45s](https://youtu.be/fjjebMXE-P8?t=32m45s) **Function**
```js
function funcName() {
  console.log('Hello');
}

console.log('Hi'); // gets printed first
funcName(); // invokes the function
```
- [@8m20s](https://youtu.be/fjjebMXE-P8?t=8m20s) **Function Arguments**, using keyword "function", function naming conventions (actions) and camelCase.
```js
function funcName(argument) {
  var greeting = 'Hello ' + argument);
  console.log(greeting);
}

var name1 = 'Ben'
funcName(name1);
funcName('Fred');
funcName('Ted');
funcName('Bob');
funcName('Alice');
funcName('Betty');
```
-  [@45min](https://youtu.be/fjjebMXE-P8?t=45m) **Return**
```js
function addTwoNumbers(x,y) {
  // console.log(x, y);
  var sum = x + y;
  return sum;
}

addTwoNumbers(2, 3);

var value = addTwoNumbers(3,4);

console.log(value);
```
- [@50min](https://youtu.be/fjjebMXE-P8?t=50m) **Scope**
```js
function addTwoNumbers(x,y) {
  // console.log(x, y);
  var sum = x + y; // <--- "sum" is declared INSIDE the function
  // return x + y
  return sum;
}
var value = addTwoNumbers(3,4);
console.log(value);

console.log(sum);  // <--- "sum" is scoped inside the function. NOT accessible outside the function.
```
- [@51m30s](https://youtu.be/fjjebMXE-P8?t=51m30s) **Branching Control Flow**
```js
function canDrive(age) {
  if (age >= 16) {
    return true;
  }
  return false;
}

var myAge = 50;
var iCanDrive = canDrive(myAge);
console.log(iCanDrive);

var hisAge = 10;
var = heCanDrive = canDrive(hisAge);
console.log(heCanDrive);

var herAge = 16;
var sheCanDrive = canDrive(herAge);
console.log(sheCanDrive);
```
- [@57m45s](https://youtu.be/fjjebMXE-P8?t=57m45s) **Homework on github**, npm install (comes with node), `npm test`, etc.
- [@1h9m](https://youtu.be/fjjebMXE-P8?t=1h9m) **Q&A**

</p></details>

***
# Lesson Two
## "Control Flow in JavaScript & `git` / GitHub"
- [LESSON TWO LECTURE](https://youtu.be/4LNf5qcQWHQ)
   > "This lesson covers git and Github, loops, if/then/else statements, &, ||, !=, and other concepts.
   > For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON TWO: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-2)  
- [LESSON TWO: Completed Homework](https://github.com/mixelpixel/js-minicamp-homework-2/tree/master)  

<details><summary><b>LESSON TWO: NOTES</b></summary><p>

### LESSON TWO LECTURE NOTES
- NOTE: ALWAYS USE TRIPLE EQUALS === NOT DOUBLE EQUALS == !!!!!  
- [@2m30s](https://youtu.be/4LNf5qcQWHQ?t=2m30s) **Lecture starts**
- [@3m35s](https://youtu.be/4LNf5qcQWHQ?t=3m35s) **`git` & GitHub**
  GitHub is online storage.  
  `git` is the version control software.  
  Forking, downloading/cloning, status, staging, add, commit comments, resetting, branch master, origin master, push, pull request, branchin and merge  
- [@18m30s](https://youtu.be/4LNf5qcQWHQ?t=18m30s) **Conditionals If, Else, Else-If**
```js
if (true) {
  do this
} else {
  do that
}
```
```js
var food = 'Pizza';

if (food === 'Pizza') {
  console.log ('Yummy!');
} else {
  console.log('I would rather have pizza...');
}
```
```js
var food = 'Pizza';

if (food === 'Pizza') {
  console.log ('Yummy!');
} else if (food === 'Steak') {
  console.log('Super yummy!');
} else {
  console.log('I would rather have pizza...');
}
```
```js
var age = 16;
var hasDriversLicense = true;

// && and, || or, ! not, != not equal to, !false, !true, etc. <------------THIS
if (age >=16 && hasDriversLicense) {
  console.log('You can Drive');
} else {
  console.log('Call your mom to pick you up.');
}
```
- [@36m](https://youtu.be/4LNf5qcQWHQ?t=36m) **For loops**, iterating over arrays with index numbers.
```js
// as long as condition is true, for loop repeats.
for (var initial value; condition; iteration action) {
    do someting;
}
```
```js
for (var i = 0; i < 10; i++) {
    console.log(i + '. hi!');
}
```
```js
var favFoods = ['Steak', 'Mango', 'Curry']; // [[0], [1], [2], ...]] array

console.log(favFoods.length);
console.log(favFoods[0]);
console.log(favFoods[favFoods.length -1]); // always gives last item
```
```js
var favFoods = ['Steak', 'Mango', 'Curry'];

for (var i = 0; i < favFoods.length; i++) {
  if (favFoods[i] === 'Mango') {
    favFoods[i] = 'Pineapple';
  }
  console.log(favFoods[i]);
}
```
```js
var favFoods = ['Steak', 'Mango', 'Curry'];

favFoods.push('Ice Cream') // .push() adds item to the end
console.log(favFoods);

favFoods.pop();            // .pop() removes item from the end
console.log(favFoods);
```
- [@56m](https://youtu.be/4LNf5qcQWHQ?t=56m) **Q&A**

</p></details>

***

# Lesson Three
## "JavaScript Objects"
- [LESSON THREE LECTURE](https://youtu.be/Dc6YcYsT3UM)
   > "Objects, this, and more.
   > For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON THREE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-3)  
- [LESSON THREE: Completed Homework](https://github.com/mixelpixel/js-minicamp-homework-3)  

<details><summary><b>LESSON THREE: NOTES</b></summary><p>

### LESSON THREE LECTURE NOTES
- When assigning variables, instead of x _equals_ 5, x **gets** 5.  
- [@35s](https://youtu.be/Dc6YcYsT3UM?t=35s) **Lecture starts**
- [@1m34s](https://youtu.be/Dc6YcYsT3UM?t=1m34s) **Objects = {Keys: Values}**
  - Named keys are similar to the array index number
  - colons : separate the Key from the Value
  - object.key returns the value
```js
var object = {
  Key: Value,
}
```
```js
var user = {
  username: 'SunJieMing',
  password: 'password'
  age: 99,
  likesIceCream: true,
  sayHi: function() {       // <----- AN "ANONYMOUS" FUNCTION inside
    console.log('hello!');  // <----- an OBJECT is a called a METHOD
  },
  et: 'cetera'
  and: 'so on'
}
```
  - `console.log(user.username);` would return "SunJieMing"
    - **DOT notation**
    - **user** is the variable name that was assigned to an object containing key:value pairs.
    - **.** the dot following the object tells JS to get a **PROPERTY** which is declared in the object.
    - **username** is the property of the object "user"; it is a key which holds the value, "SunJieMing".
    - `console` is an object, `log` is a method, `user.username` is the argument which is passed to the `log` method.
  - object, dictionary, hash table - same idea, key:value, "constant lookup".
  - `user.age++;` will increment 99 to 100
  - `console.log(user);` will print out the entire object (the method will just be displayed as "sayHI: [FUNCTION]")
  - `user.sayHi();` invokes the method.
  - `user.isPremiun = true;` ADDS a KEY `isPremium` to the user object with the VALUE `true` BECAUSE isPremium does no yet exist as a KEY.
    - **BRACKET notation**
    - To enter numbers as KEYS they need to be in brackets and get turned into strings.
    - [@16m](https://youtu.be/Dc6YcYsT3UM?t=16m) the video breaks up... (he goes over it again [@24m54s](https://youtu.be/Dc6YcYsT3UM?t=24m54s))
    ```js
    var squares = {};
    squares[2] = 4;
    squares[5] = 25;

    console.log(squares); // <--- prints { '2': 4, '5': 5 }
    ```
  - [@16m30s](https://youtu.be/Dc6YcYsT3UM?t=16m30s) example similar to homework problem
    ```js
    function addProperty(object, newProperty, NewValue) {
      object[newProperty] = newValue;
      return object; // <-----------------------NECESSARY??????
    }

    addProperty(user, 'livesInUS', false); // new property variable name entered as a string

    console.log()
    ```
***
      - Not sure I quite understood what he's explaining about objects and arrays in memory.
***
  - `delete user.likesIceCream` ONLY use delete to remove a property from an OBJECT.
  - [@23m](https://youtu.be/Dc6YcYsT3UM?t=23m) **For-In Loops** - Iterating over objects:
  ```js
  for (var key in object) {
    action;
  }
  ```
  ```js
  var user = {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {       // <----- AN "ANONYMOUS" FUNCTION inside
      console.log('hello!');  // <----- an OBJECT is a called a METHOD
    },
    et: 'cetera',
    and: 'so on'
  }

  delete user.likesIceCream;

  for (var key in user) { //                 <--- iterate over an object
    console.log('>>>key', key); //           <---
    console.log('>>>value', user[key]); //   <--- bracket notation
  }

  console.log(user);
  ```
  - `user['username']` <----- THESE ARE EQUIVALENT
  - `user.username`    <----- THESE ARE EQUIVALENT
  - use dot notation unless it doesn't work, then use brackets
  - [@28m22s](https://youtu.be/Dc6YcYsT3UM?t=28m22s) **this**
  ```js
  var users = [
  {
    username: 'SunJieMing',
    password: 'password',
    age: 99,
    likesIceCream: true,
    sayHi: function() {
      var sentence = 'My username is: ' + this.username;
      console.log(sentence);
    },
    et: 'cetera',
    and: 'so on'
  },
  {},
  {},
  {}
];

users[0].sayHi();
```
- [@33m18s](https://youtu.be/Dc6YcYsT3UM?t=33m18s) **REVIEW**
  - to create an object
  ```js
  var user = {};
  user.username = 'Ben';
  user.email = 'ben@lambdaschool.com';
  ```
  OR
  ```js
  var user = {;
    username: 'Ben',
    email: 'ben@lambdaschool.com'  
  }
  ```
- Math is a global object, console is a global object, modules, etc.
- [@36m](https://youtu.be/Dc6YcYsT3UM?t=36m) **LINTer**

</p></details>

# Lesson Four
## "Advanced JavaScript"
- [LESSON FOUR LECTURE](https://youtu.be/LowXf4APQtk)
   > "The final lesson of the four-part LambdaSchool Mini Bootcamp covers Callback Functions, Closure, arguments array, recursion, prototype, and constructors.
   > For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON FOUR: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-4)  
- [LESSON FOUR: Completed Homework](https://github.com/mixelpixel/js-minicamp-homework-4/tree/master)  

<details><summary><b>LESSON FOUR: NOTES</b></summary><p>

### LESSON FOUR LECTURE NOTES
- [@3m30s](https://youtu.be/LowXf4APQtk?t=3m30s) **Lecture Starts**
  - https://jsbin.com
- [@4m25s](https://youtu.be/LowXf4APQtk?t=4m25s) **"Truthiness" & "Falsiness"**
  - How to detect if a property exists
  - any value can be interpreted as either a true value or a false value (or null, or undefined)
  ```js
  if (true) console.log('hi!')
  ```
  - true and !false print "hi!"
  - false and !true don't print
  - 0 is "falsey"
  - non-0 numbers are "truthy" (even negative numbers)
  - an empty string is "falsey"
  - a string with letters or numbers is "truthy"
  - an array [] is "truthy"
  - an object {} is "truthy"
  - null is "falsey"
  ```js
  function myFunc(x, y) {
    if (!x) console.log('no x!');
    if (!y) console.log('no y!');
  }
  ```
- [@11m25s](https://youtu.be/LowXf4APQtk?t=11m25s) **`arguments`**
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  - `arguments` keyword. Has a length property.
  ```js
  function sumNumbers() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(total);
  }
  sumNumbers(1, 2, 3, 4, 5, 6, 6, 6, 6, 9)
  sumNumbers(0, 5, 5)
  ```
- [@14m25s](https://youtu.be/LowXf4APQtk?t=14m25s) **CALLBACKS & `.forEach(){};`**
  - "Callbacks" are passing in a function as an argument to another functions
  - `.forEach(function (value, index) {action});` method
  ```js
  var numbers = [1, 2, 3, 4,5];

  numbers.push(6);
  numbers.forEach(function (num) { // <--- just each array value
    console.log(num); // <----- Prints each item in the array
  });
  ```
  ```js
  var numbers = [1, 2, 3, 4,5];

  numbers.push(6);
  numbers.forEach(function (num, i) { // <--- each array value AND array index
    console.log(num + ' is at index ' + i); // <----- Prints each item in the array
  });
  ```
  - ^^^ This is the preferred JS method for iterating over arrays ^^^
  ```js
  function invokeCallback(cb) { // <--- 'cb' is convention for indicating callback use case
    cb();
  }

  function sayHi() {
    console.log('hi!');
  }

  function say NiHao() {
    console.log('ni hao!');
  }

  invokeCallback(sayHi);
  invokeCallBack(sayNiHao);
  ```
- [@22m15s](https://youtu.be/LowXf4APQtk?t=22m15s) **`reduce`**
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  ```js
  var numbers = [1, 2, 3, 4, 5];

  // reduce also takes a callback function and like forEach, it iterates
  var sum = numbers.reduce(function(runningTotal, num) {
    return runningTotal += num;
  });

  console.log(sum);
  ```
- [@28m](https://youtu.be/LowXf4APQtk?t=28m) **`map`**
  - iterates over array and maps values onto index locations
  ```js
  var name = array_name.map(function(x) {
    return action per array index;
  });
  ```
  ```js
  var numbers = [1, 2, 3, 4, 5];

  var newNums = numbers.map(function(num) {
    return 'hi';
  });

  console.log(newNums);
  ```
  ```js
  var numbers = [1, 2, 3, 4, 5];

  var squares = numbers.map(function(num) {
    return num * num;
  });

  console.log(squares);
  ```
- [@30m30s](https://youtu.be/LowXf4APQtk?t=30m30s) **CONSTRUCTORs & "this"**
  - Making lots of objects
  - Pseudo Classical Instantiation  
  - Making a TEMPLATE
  - Constructors are Upper Case.
  ```js
  function encryptPassword(password) {
    return 'ljsdnvljnqsdvqufvqnfd;vojnq;dfojnv;089247r98h9249hj';
  }

  function User(options) {
    /* new Object() */
    this.username = options.username;
    this.password = encryptPassword(options.password);
    this.email = options.email;
    /* return Object */
  }

  var ben = new User({
    username: 'SunJieMing',
    password: 'I love JS!',
    email: 'ben@lambdaschool.com'
  });

  console.log(ben);
  ```
  - ES6 syntactic sugar?
    - http://es6-features.org/#ClassDefinition
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  ```js
  function encryptPassword(password) {
    return 'ljsdnvljnqsdvqufvqnfd;vojnq;dfojnv;089247r98h9249hj';
  }

  function User(options) {
    /* new Object() */
    this.username = options.username;
    this.password = encryptPassword(options.password);
    this.email = options.email;
    /* return Object */
  }

  var ben = new User({
    username: 'SunJieMing',
    password: 'I love JS!',
    email: 'ben@lambdaschool.com'
  });

  console.log(ben);

  var austen = new User({
    username: 'Austen',
    password: '12345',
    email: 'austen@lambdaschool.com'
  });

  console.log(austen);
  ```
- [@39m30s](https://youtu.be/LowXf4APQtk?t=39m30s) **Add a method to all the objects we create**
  ```js
  function Cat (options) {
    this.name = options.nae;
    this.age = options.age;
  }

  var pet_cat = [];

  pet_cat.push(new Cat({
    name: 'Snowball II',
    age: 5
  }));

  console.log(pet_cat);
  ```
  ```js
  function Cat (options) {
    this.name = options.name;
    this.age = options.age;
    this.meow = function() {
      console.log(this.name + ' says, \"Meow! I am ' + this.age + ' years old.\"');
    }
  }

  var snowballII = new Cat({
    name: 'Snowball II',
    age: 5
  });

  snowballII.meow();

  var snowballIII = new Cat({
  name: 'Snowball III',
  age: 2
  });

  snowballIII.meow();
  ```
- [@44m20s](https://youtu.be/LowXf4APQtk?t=44m20s) **PROTOTYPEs**
```js
function Cat (options) {
  this.name = options.name;
  this.age = options.age;
}

Cat.prototype.meow = function() {
  console.log(this.name + ' says, \"Meow! I am ' + this.age + ' years old.\"');
}

var snowballII = new Cat({
  name: 'Snowball II',
  age: 5
});

snowballII.meow();

var snowballIII = new Cat({
name: 'Snowball III',
age: 2
});

snowballIII.meow();
```
  - This is how Arrays have prototypes ("same with a string" not sure what Ben meant by this - ) e.g.
    - Array.prototype
    - Array is a built in JS keyword, Array.prototype is a constructor which is used behind the scenes to construct all arrays: `var arr = [];` => `var arr = new(Array);`
    ```js
    Array.prototype.sayHi = function() { // <--- upper case Array is a reserved word
      console.log('I\'m on the array!');
    }

    var array = [1, 2, 3, 4]; // <-------------- lower case array not reserved

    array.sayHi();

    console.log(array);
    ```
- [@49m](https://youtu.be/LowXf4APQtk?t=49m) **CLOSURE**
  - returning functions and the SCOPE of variables
  ```js
  function outer() {
    return function() {
      console.log('hi there!');
    };
  }

  var inner = outer();

  inner();

  var innerSameFunction = function() {
    console.log('hi there!');
  };

  innerSameFunction();
  ```
- WRAPPERS AROUND CALLBACK FUNCTIONS
  - If you return a function from a function the inner function remembers the SCOPE of the outer function.
  ```js
  var x = 5            // <--- x can't see vars inside the functions, but

  function outer(){
    x;                 // <--- inside the function they can see x (but not var z?)
    var y = 10;
    function inner(){
      x;               // <--- inside the inside function too!
      y;               // <--- inner function can see outer functions variable
      var z = 15;      // <--- inner variable only available to inner function
    }
  }
  ```
  ```js
  function outer() {
    var x = 10;
    return function() {
      console.log(x);
    };
  }

  var inner = outer();

  inner();
  ```
  - Cool Closure trick:
  ```js
  function limitFunctionCallCount(cb) {
    return function() {
      cb();
    };
  }

  function sayHi() {
    console.log('hi!');
  }

  var newSayHi = limitFunctionCallCount(sayHi);

  newSayHi();
  ```
  ```js
  function limitFunctionCallCount(cb, limit) {
    var callCount = 0
    return function() {
      if (callCount >= limit) return;
      callCount++;
      cb();
    };
  }

  function sayHi() {
    console.log('hi!');
  }

  var newSayHi = limitFunctionCallCount(sayHi, 5);

  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi();
  newSayHi(); // Tried invoking it 10 times, but only 5 will run!
  ```
- Note about homework ~1h00m00s
- [@1h01m13s](https://youtu.be/LowXf4APQtk?t=1h01m13s) **RECURSION**
  - essentially it's another way of iterating (looping)
  - depending on the situation, recursion can be simpler (less code) than a for-loop - especially if you've got a big complicated function.
  ```js
  // 1,   1,   2,   3,   5,   8,   13,  21, etc...  (Fibbonacci values)
  // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, etc... [position, nth Fibbo #]
  function nFibbonacci(n) {   // <---- calculating the nth Fibbonacci #
    if (n < 3) return 1;      // <-------------------- ********BASE CASE********
    return nFibbonacci(n - 2) + nFibbonacci(n - 1);
  }

  var result = nFibbonacci(3);

  console.log(result);
  ```
  - BASE CASE is like the condition which stops the for loop
  - recursive function can get out of hand if the "call stack" is too big.
- [@1h12m](https://youtu.be/LowXf4APQtk?t=1h12m) Wrap up

</p></details>

***
## git / GitHub NOTES:

<details><summary>git and GitHub</summary><p>

### I initialized this repository as a local `git init` and **_then_** set up the GitHub repository.  
- `mkdir JavaScript-mini-bootcamp`
- `cd JavaScript-mini-bootcamp`
- `git init`
- `touch README.md`
- `touch .gitignore`
- `git status`
- `git add .`
- `git commit -m "first!"`
- @GitHub.com I made a new repository: "JavaScript-mini-bootcamp" (no README.md or .gitignore)
- copied the URL: https://github.com/mixelpixel/JavaScript-mini-bootcamp.git
- `git remote add origin https://github.com/mixelpixel/JavaScript-mini-bootcamp.git`
- `git remote -v`
- `git push -u origin master`
Per: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/  

### Homework #1 was downloaded from SunJieMing's site (not forked)
- Note the appended "-master" in the url ()& local repo):
- https://github.com/mixelpixel/JavaScript-mini-bootcamp/tree/master/js-minicamp-homework-1-master
- the "Download Zip" folder came with the appended "-master"
- The downloaded files were placed in my local JavaScript-mini-bootcamp repository
- The downloaded files were git add, commit, pushed...

### For Homework #2 I made a submodule.  
Per: https://git-scm.com/book/en/v2/Git-Tools-Submodules
- Fork https://github.com/SunJieMing/js-minicamp-homework-2
- ...creating: https://github.com/mixelpixel/js-minicamp-homework-2
- copied URL
- `$  git submodule add https://github.com/mixelpixel/js-minicamp-homework-2.git`
- `git status`

### For Homework #3 I nested a cloned fork.
- Mostly just to see if there was any noticeable difference in commits/pushes.
- Seems like the nested repo on github is not linked, just noted...
- I might delete this and sub-module cuz I like that on GitHub I can descend into the submodule (even if I can't ascend out of it...)

### For Homework #4 I submoduled a fork.
Per: https://git-scm.com/book/en/v2/Git-Tools-Submodules
- Fork https://github.com/SunJieMing/js-minicamp-homework-4
- ...creating: https://github.com/mixelpixel/js-minicamp-homework-4
- copied URL
- `$  git submodule add https://github.com/mixelpixel/js-minicamp-homework-4.git`
- `git status`

</p></details>

***
# fin
