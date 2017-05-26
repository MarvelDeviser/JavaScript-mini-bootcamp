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
