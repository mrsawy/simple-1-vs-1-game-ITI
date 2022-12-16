var timerIntervalOne ;
var timerIntervaltwo ;
var first_player_counter ;
var second_player_counter ;

const startTheGame = () => {
    document.querySelector(`.player_two_win`).src =`` ;
    document.querySelector(`.player_one_win`).src =`` ;

    //-----points 1
 let first_player_points = 0 ;
  first_player_counter = document.querySelector(` .first_player .counter`) ;
 first_player_counter.innerHTML = `POINTS : ${first_player_points}`
 //-timer 1
 let timerVariableOne = 0;
  timerIntervalOne = setInterval(function () { ++timerVariableOne;
    firstTimer.innerHTML = `timer : ${timerVariableOne}`;
    if(timerVariableOne == 10){
        timerVariableOne = 0 ;
        --first_player_points ;
        first_player_counter.innerHTML = `POINTS : ${first_player_points}`
    }
}, 1000);
//----click functionality 1
const first_player_button = document.querySelector(`.first_player button`) ;
const cliclFunction = ()=>{
    timerVariableOne =0 ;
    ++first_player_points ;
    first_player_counter.innerHTML = `POINTS : ${first_player_points}`
}
first_player_button.addEventListener(`click`,cliclFunction)



  //------------------------------------------------------------------------------points 2
  let second_player_points =0
   second_player_counter = document.querySelector(`.second_player .counter`)
  second_player_counter.innerHTML = `POINTS : ${second_player_points}`
//---timer 2
  let timerVariableTwo = 0;
   timerIntervaltwo=setInterval(function () {++timerVariableTwo;
    secondTimer.innerHTML = `timer : ${timerVariableTwo}`;
    if(timerVariableTwo == 10){
        timerVariableTwo = 0 ;
        --second_player_points ;
        second_player_counter.innerHTML = `POINTS : ${second_player_points}` }
    }, 1000);
//----click functionality 2
const second_player_button = document.querySelector(` .second_player button`) ;
second_player_button.addEventListener(`click`,()=>{
    timerVariableTwo =0 ;
    ++second_player_points ;
        second_player_counter.innerHTML = `POINTS : ${second_player_points}`

})




};

const here = document.querySelector(`h1 strong`).addEventListener(`click`, (e) => {
    if(!firstTimer.innerHTML && !secondTimer.innerHTML){
        startTheGame();
        document.querySelector(`h1`).style.transform= `translatey(-300px)`
    }  });

document.addEventListener("keydown",(event) => {
    if(!firstTimer.innerHTML && !secondTimer.innerHTML){
        startTheGame();
        document.querySelector(`h1`).style.transform= `translatey(-300px)`

    }
  }, false
);

const firstTimer = document.querySelector(`.first_player .timer`);
const secondTimer = document.querySelector(`.second_player .timer`);


//----------------------------------------------------
//-------------logout functionality

const winnerSrc = "data:image/png;base64,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"

//-----------
const clickLogoutFunction = async (e , winner)=>{
    if(!e.target.classList.contains("warning")){
        e.target.classList.add(`warning`)
        e.target.innerHTML = `LOGIN`
        let timer = 1 ;
        let temp =setInterval(function(){
            e.target.innerHTML = `${timer}`;
            timer++
        },1000)
        
        setTimeout(()=>{
            document.querySelector(winner).src =winnerSrc ;
            clearInterval(timerIntervaltwo);
            clearInterval(timerIntervalOne);
            endGame();
            clearInterval(temp);
        } 
        , 10000)
    }else{
        e.target.classList.remove(`warning`)
        e.target.innerHTML = `logout` 
    }
}
const firstLogout = document.querySelector(`.first_logout`) ;
firstLogout.addEventListener(`click`,(e)=>{clickLogoutFunction(e,`.player_two_win`)});
const secondLogout = document.querySelector(`.second_logout`) ;
secondLogout.addEventListener(`click`,(e)=>{clickLogoutFunction(e,`.player_one_win`)});

//------------
function endGame(){
    document.querySelector(`h1`).style.transform= `translatey(0px)`

    clearInterval(timerIntervaltwo);
    clearInterval(timerIntervalOne);

    firstTimer.innerHTML = ``;
    first_player_counter.innerHTML = ``
    second_player_counter.innerHTML = ``

    secondTimer.innerHTML = ``;

}
