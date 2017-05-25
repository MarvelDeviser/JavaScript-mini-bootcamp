# [JavaScript](https://www.javascript.com) Mini-BootCamp

https://lambdaschool.com/mini-bootcamp/javascript

***

# Lesson One
## "Introduction to JavaScript"
- [LESSON ONE LECTURE](https://youtu.be/fjjebMXE-P8)

   "This introductory lesson covers variables and operators, functions, data types, and the Math object. It also touches lightly on Node, GitHub, and npm.

   By the time you finish this lesson (and the accompanying homework) you should have a firm grasp of the fundamental elements of the JavaScript language. You'll have your environment set up, and you'll get a short introduction into test driven development; a lot of ground to cover in only a few short minutes.

   The homework includes initial JavaScript environment setup, and requires you to create Feynman writing prompts, then code those concepts."

- [LESSON ONE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-1)
- [LESSON ONE: Completed Homework](https://github.com/mixelpixel/JavaScript-mini-bootcamp/tree/master/js-minicamp-homework-1-master)

<details><summary><b>LESSON ONE: NOTES</b></summary><p>

### LESSON ONE LECTURE NOTES

- To exit the node interactive shell, type `.exit` or send EOL with ctrl+d, or ctrl+c twice.

- [@07min](https://youtu.be/fjjebMXE-P8?t=7m) Lecture starts
- [@8m20s](https://youtu.be/fjjebMXE-P8?t=8m20s) download node from [nodejs.org](https://nodejs.org)
- [@09min](https://youtu.be/fjjebMXE-P8?t=9) command line basics
- [@11min](https://youtu.be/fjjebMXE-P8?t=11) JS declaring variables with "var" keyword & using console.log() for printing to screen/stdout.

JS is not "strongly Typed" - var works for eVARy data type (as opposed to C where each variable is declared along with its data type.)

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

etc...
```

- [@26min](https://youtu.be/fjjebMXE-P8?t=26) Concatenation

```js
var firstName = 'Ben';
var lastName = 'Nelson';
var fullName = firstName + ' ' + lastName;

console.log(fullName);
```

- [@28m20s](https://youtu.be/fjjebMXE-P8?t=28m20s) Global Objects, methods and properties, e.g. the "Math" object with methods: powers, round, ceil, floor, etc.

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

- [@32m45s](https://youtu.be/fjjebMXE-P8?t=32m45s) Function

```js
function funcName() {
  console.log('Hello');
}

console.log('Hi'); // gets printed first
funcName(); // invokes the function
```

- [@8m20s](https://youtu.be/fjjebMXE-P8?t=8m20s) Function Arguments, using keyword "function", function naming conventions (actions) and camelCase.

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

-  [@45min](https://youtu.be/fjjebMXE-P8?t=45m) Return

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

- [@50min](https://youtu.be/fjjebMXE-P8?t=50m) Scope

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
- [@51m30s](https://youtu.be/fjjebMXE-P8?t=51m30s) Branching Control Flow

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

- [@57m45s](https://youtu.be/fjjebMXE-P8?t=57m45s) Homework on github, npm install (comes with node), `npm test`, etc.

- [@1h9m](https://youtu.be/fjjebMXE-P8?t=1h9m) Q&A

</p></details>

***

# Lesson Two
## "Control Flow in JavaScript & `git` / GitHub"
- [LESSON TWO LECTURE](https://youtu.be/4LNf5qcQWHQ)

   "This lesson covers git and Github, loops, if/then/else statements, &, ||, !=, and other concepts.

   For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON TWO: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-2)  
- [LESSON TWO: Completed Homework](https://github.com/mixelpixel/js-minicamp-homework-2/tree/master)  

<details><summary><b>LESSON TWO: NOTES</b></summary><p>

### LESSON TWO LECTURE NOTES

- NOTE: ALWAYS USE TRIPLE EQUALS === NOT DOUBLE EQUALS == !!!!!  

- [@2m30s](https://youtu.be/4LNf5qcQWHQ?t=2m30s) Lecture starts

- [@3m35s](https://youtu.be/4LNf5qcQWHQ?t=3m35s) `git` & GitHub  
  GitHub is online storage.  
  `git` is the version control software.  
  Forking, downloading/cloning, status, staging, add, commit comments, resetting, branch master, origin master, push, pull request, branchin and merge  

- [@18m30s](https://youtu.be/4LNf5qcQWHQ?t=18m30s) Conditionals If, Else, Else-If

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

- [@36m](https://youtu.be/4LNf5qcQWHQ?t=36m) For loops, iterating over arrays with index numbers.

```js
// as long as condition is true, for loop repeats.
for (var initial value; condition; iteration action) {
    do someting;
}
```

```js
for (var i = 0; 1 < 10; i++) {
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

- [@56m](https://youtu.be/4LNf5qcQWHQ?t=56m) Q&A

</p></details>

***

# Lesson Three
## "JavaScript Objects"
- [LESSON THREE LECTURE](https://youtu.be/Dc6YcYsT3UM)

   "Objects, this, and more.

   For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON THREE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-3)  
- [LESSON THREE: Completed Homework]()  

<details><summary><b>LESSON THREE: NOTES</b></summary><p>

### LESSON THREE LECTURE NOTES

when assigning variables, instead of x _equals_ 5, x **gets** 5.

- [@35s](https://youtu.be/Dc6YcYsT3UM?t=35s) Lecture starts
- [@1m34s](https://youtu.be/Dc6YcYsT3UM?t=1m34s) Objects = {Keys: Values}
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
  - [@16m30s](https://youtu.be/Dc6YcYsT3UM?t=16m30) example similar to homework problem
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
  - iterating over objects:
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

  delete user.likesIceCream;

  for (var key in user) {
    console.log('>>>key',, key);
    console.log('>>>value', user[key]);
  }

  console.log(user);
  ```

</p></details>

***

## git / GitHub NOTES:

<details><summary>git and GitHub</summary><p>

I initialized this repository as a local `git init` and **_then_** set up the GitHub repository.  
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

For Homework #2 I made a submodule.  
Per: https://github.com/mixelpixel/js-minicamp-homework-2.git
- Fork https://github.com/SunJieMing/js-minicamp-homework-2
- ...creating: https://github.com/mixelpixel/js-minicamp-homework-2
- copied URL
- `$  git submodule add https://github.com/mixelpixel/js-minicamp-homework-2.git`
- `git status`



</p></details>

***

# fin
