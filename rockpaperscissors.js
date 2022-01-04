/* This function takes the user's input and returns that input if they enter rock, paper, or scissors. 
   If they do not then an error is printed to the console. */
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log(`Error ${userInput} not valid. Please enter 'rock', 'paper', or 'scissors'.`);
    }
}

/* This function will generate a random number and uses a switch statement to assign that value to
   either rock, paper, or scissors which becomes the computer's choice*/
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

/*this function will take the possible choices for the game and determines who is the winner using if else statements within if statements *LOOPCEPTION*.  */
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'Tied game. No winner';
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer is the winner!';
        } else {
            return 'You are the winner!';
        }
    } 
    
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer is the winner!';
        } else{
            return 'You are the winner!'
        }
    }

    if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Computer is the winner!';
        } else{
            return 'You are the winner!';
        }
    }

    if(userChoice === 'bomb'){
        return 'You are the winner!';
    }

}

/*this is the function that we will call to play the game. This function ties all of our other functions together */
const playGame = () => {
    userChoice = getUserChoice('BOMB');                     //we want to set userChoice to the iteration of the getUserChoice function because it has an important method in it that we need to properly play the game...the to.Lower.Case method
    computerChoice = getComputerChoice();                       //We want to set the computerChoice to the iteration of the getComputerChoice function because that function uses special methods to generate a random number and a switch statement to return a specific value.
    console.log('You chose: ' + userChoice);                 //logging the choice
    console.log('Computer chose: ' + computerChoice);      //logging the choice

    console.log(determineWinner(userChoice, computerChoice));  //calling the determineWinner function we made previously and passing in the userChoice and computerChoice variables we just created. We are logging it to the console so we can see the result.
}

/* Here we are calling the playGame function that we just created */
playGame();             //the user input is located in the playGame function