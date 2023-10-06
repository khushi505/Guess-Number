'use script';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20)+1;

let score=20;
let highscore = 0;


document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent= 'No Number!';
    }

    //when player wins
    else if(guess === secretnumber)
    {
        document.querySelector('.message').textContent = 'Correct Answer!';

        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor ='#60b347';
        // document.querySelector('.number').style.width = '300px';

        winning()

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //when guess is too high
    else if(guess > secretnumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too High!';
        score = score-1;
        document.querySelector('.score').textContent = score;
        }

        else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
    }

    //when guess is too low
    else if(guess < secretnumber){
        if(score>1){
            document.querySelector('.message').textContent = 'Too Low!';
        score = score-1;
        document.querySelector('.score').textContent = score;
        }

        else{
            document.querySelector('.message').textContent='You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

});

function winning(){
    const gif = document.getElementById("win");
    gif.src = 'assets/great.gif';
}

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber = Math.trunc(Math.random() * 20)+1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '270px';
    document.querySelector('body').style.backgroundColor = 'black';
    
    const gif = document.getElementById("win");
    gif.src = '';
})