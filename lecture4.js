function encryptPassword(password) {
  return 'ljsdnvljnqsdvqufvqnfdvojnqdfojnv089247r98h9249hj';
}

function User(options) {
  this.username = options.username;
  this.password = encryptPassword(options.password);
  this.email = options.email;
}

var ben = new User({
  username: 'SunJieMing',
  password: 'I love JS!',
  email: 'ben@lambdaschool.com'
});

console.log(ben);


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
