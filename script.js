let userName = prompt("Hello, what is your name?");
userName ? alert("Hello, " + userName) : alert("Hello");

let userQuestion = prompt(`Hello ${userName}! What is your question? Please ask a yes-no question.`)

confirm(`Hello ${userName}, did you ask: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall;

if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

/*
switch (randomNumber) {
case randomNumber === 0:
  eightBall = 'It is certain'
  break;
case randomNumber === 1:
  eightBall = 'It is decidedly so'
  break;
case randomNumber === 2:
  eightBall = 'Reply hazy try again'
  break;
case randomNumber === 3:
  eightBall = 'Cannot predict now'
  break;
case randomNumber === 4:
  eightBall = 'Do not count on it'
  break;
case randomNumber === 5:
  eightBall = 'My sources say no'
  break;
case randomNumber === 6:
  eightBall = 'Outlook not so good'
  break;
default:
  eightBall = 'Signs point to yes';
}*/

alert(randomNumber + ": " + eightBall);