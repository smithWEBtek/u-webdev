console.log(2 + 2);

var fs = require('fs');
var https = require('https');


fs.writeFile(__dirname + 'index.html', "<h1>html is great</h1>", function (error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log('congrats');
  }
})

var myDogPhoto = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg'

https.get(myDogPhoto, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/myDogPhoto.jpeg"))
});