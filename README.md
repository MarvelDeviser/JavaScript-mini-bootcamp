# [JavaScript](https://www.javascript.com) Mini-BootCamp

https://lambdaschool.com/mini-bootcamp/javascript

***

# Lesson One
## "Introduction to JavaScript"
- [LESSON ONE](https://youtu.be/fjjebMXE-P8)

   "This introductory lesson covers variables and operators, functions, data types, and the Math object. It also touches lightly on Node, GitHub, and npm.

   By the time you finish this lesson (and the accompanying homework) you should have a firm grasp of the fundamental elements of the JavaScript language. You'll have your environment set up, and you'll get a short introduction into test driven development; a lot of ground to cover in only a few short minutes.

   The homework includes initial JavaScript environment setup, and requires you to create Feynman writing prompts, then code those concepts."

- [LESSON ONE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-1)
- [LESSON ONE: Completed Homework](https://github.com/mixelpixel/JavaScript-mini-bootcamp/tree/master/js-minicamp-homework-1-master)

<details><summary><b>LESSON ONE: NOTES</b></summary><p>

### LESSON ONE: NOTES

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
## "Control Flow in JavaScript & git/GitHub"
- [LESSON TWO](https://youtu.be/4LNf5qcQWHQ)

   "This lesson covers git and Github, loops, if/then/else statements, &, ||, !=, and other concepts.

   For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON TWO: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-2)  
- [LESSON TWO: Completed Homework]()  

<details><summary><b>LESSON TWO: NOTES</b></summary><p>

### LESSON TWO NOTES

</p></details>

***

# Lesson Three
## "JavaScript Objects"
- [LESSON THREE](https://youtu.be/Dc6YcYsT3UM)

   "Objects, this, and more.

   For the homework you'll fork and clone a repository from Github, make changes until tests pass, and push the repository back up."
- [LESSON THREE: Homework Assignment](https://github.com/SunJieMing/js-minicamp-homework-3)  
- [LESSON THREE: Completed Homework]()  

<details><summary><b>LESSON THREE: NOTES</b></summary><p>

### LESSON THREE NOTES

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

</p></details>

***

# fin
