
var user = {
  username: 'SunJieMing',
  password: 'password',
  age: 99,
  likesIceCream: true,
  sayHi: function() {
    console.log('hello!');
  },
  et: 'cetera',
  and: 'so on'
}

console.log(user);
console.log();

delete user.likesIceCream;

for (var key in user) {
  console.log('>>>key', key);
  console.log('>>>value', user[key]);
}
console.log();

console.log('likesIceCream was deleted.');
console.log();

console.log(user);
console.log();

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
console.log();
