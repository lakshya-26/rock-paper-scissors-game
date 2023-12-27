let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};
function pickpcmove(){
    const ranNum = Math.random();
    let pcChoice = '';
if(ranNum>=0 && ranNum<1/3){
pcChoice = 'rock';
} else if(ranNum>=1/3 && ranNum<2/3){
pcChoice = 'paper';
} else if(ranNum>=2/3 && ranNum<1){
pcChoice = 'scissors';
} 
return pcChoice;
}
function playermove(playermove){
    const pcChoice = pickpcmove();
    let result = '';
    if(playermove === 'scissors'){
        if(pcChoice === 'rock'){
             result = 'You Loose';
         }
         else if(pcChoice === 'paper' ){
            result = 'You Win';
        }
        else if(pcChoice === 'scissors'){
            result = 'Tie';
        }
    }else if(playermove === 'paper'){
        if(pcChoice === 'rock'){
            result = 'You Win';
        }
        else if(pcChoice === 'paper' ){
            result = 'Tie';
        }
        else if(pcChoice === 'scissors'){
            result = 'You Loose';
            }
        }
        else if(playermove === 'rock'){
            if(pcChoice === 'rock'){
            result = 'Tie';
        }
        else if(pcChoice === 'paper' ){
             result = 'You Loose';
        }
         else if(pcChoice === 'scissors'){
             result = 'You Win';
            }
        }
        if(result === 'You Win'){
            score.wins=score.wins+1;
        }
        else if(result === "You Loose"){
            score.losses = score.losses+1;
        }
        else if(result === 'Tie'){
            score.ties =  score.ties+1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updatescore();
        document.querySelector('.js-result')
        .innerHTML = result;
        document.querySelector('.js-moves')
        .innerHTML = `You <img src="img/${playermove}-emoji.png" class="rock-emoji">
        <img src="img/${pcChoice}-emoji.png" class="rock-emoji">Computer`;
        
    }
    function updatescore(){
        document.querySelector('.js-score')
        .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }
    updatescore();
    let isAutoplaying =false;
    let intervalID;
    function autoplay(){
        if(!isAutoplaying){
            intervalID = setInterval(function(){
                const player = pickpcmove();
                playermove(player);
            }, 1000);
            isAutoplaying = true;
        }
        else{
            clearInterval(intervalID);
            isAutoplaying = false;
        }
    }
