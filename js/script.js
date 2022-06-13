'use strict';
// Bismillahir Rahmanir Rahim
// Creator : Gias uddin vuiya
// date : 13/6/22
// time : 6:40 am
const btnElm = document.querySelector('.submitBtnElm');
const p1BtnElm = document.querySelector('.p1BtnElm');
const p2BtnElm = document.querySelector('.p2BtnElm');
const resetBtnElm = document.querySelector('.resetBtnElm');

const inputElm = document.querySelector('.inputElm');
const mainScoreElm = document.querySelector('.mainSscoreElm');
const player1ScoreElm = document.querySelector('#player1ScoreElm');
const player2ScoreElm = document.querySelector('#player2ScoreElm');

const errorMessageElm1 = document.querySelector('.errorMessages1');
const errorMessages2 = document.querySelector('.errorMessages2');

const successMessElm = document.querySelector('.successMessage');
// data layer start here
let score = 10;
let p1Score = 0;
let p2Score = 0;
let turn = 'player1';
// view layer start here
function viewLayer()
{
    mainScoreElm.textContent = score;
    player1ScoreElm.textContent = p1Score;
    player2ScoreElm.textContent = p2Score;
}
viewLayer();
// Game creating start now 
btnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
    // adding item to ui
    addItemToUI();
    // input box validation start here
    inputBoxValidation();
    // reseet input box
    resetInput();
   
});
// player one button start here
p1BtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
   if(turn === 'player1')
   {
      p1Score++;
      player1ScoreElm.textContent = p1Score;
      p1BtnElm.setAttribute('disabled','disabled');
      p2BtnElm.removeAttribute('disabled')

      turn = 'player2';
   }
    // success message it means who will be success p1 or p2
    successMess()
});

// player two button start here
p2BtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
    if(turn === 'player2')
    {
        p2Score++;
        player2ScoreElm.textContent = p2Score;
        p2BtnElm.setAttribute('disabled','disabled');
        p1BtnElm.removeAttribute('disabled');

        turn = 'player1';
    }
    // success message it means who will be success p1 or p2
    successMess();
});

// reset button start here
resetBtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();

    score = 10;
    mainScoreElm.textContent = score;
    //  reset all the thing start here now
    resetP1AndP2Score();
    // reset player1 and player2 button 
    resetPlayer1_Player2Btn();
    // reset success message 
    resetSuccessMessageAndError();
})
// reset success message 
function resetSuccessMessageAndError()
{
    successMessElm.textContent = 'Who is Succcess';
    errorMessages2.textContent = '';
    errorMessageElm1.textContent = '';
}
// reset player1 and player2 button 
function resetPlayer1_Player2Btn() 
{
    p1BtnElm.removeAttribute('disabled');
    p2BtnElm.removeAttribute('disabled');
}
// reset all the think 
function  resetP1AndP2Score()
{
    p1Score = 0;
    p2Score = 0;
   
   player1ScoreElm.textContent = p1Score;
   player2ScoreElm.textContent = p2Score;
}
// success message
function successMess()
{
    let p1Success = score === p1Score;
    let p2Success = score === p2Score;
    if(p1Success)
    {
        successMessElm.textContent = ('Player one is success');
        p1BtnElm.setAttribute('disabled','disabled');
        p2BtnElm.setAttribute('disabled','disabled');
    }else if(p2Success)
    {
        successMessElm.textContent = ('Player two is success');
        p1BtnElm.setAttribute('disabled','disabled');
        p2BtnElm.setAttribute('disabled','disabled');
    }
}
// input box validation start here
function inputBoxValidation() 
{
    if(inputElm.value < 0)
    {
        errorMessages2.textContent = 'you should pass minimum 1';
        errorMessages2.style.marginLeft = '70px';
        errorMessages2.style.color = 'red';
    }
    if(!inputElm.value)
    {
        errorMessageElm1.textContent = 'Please fill up the input field';
        errorMessageElm1.style.marginLeft = '70px';
        errorMessageElm1.style.color = 'red';
    }
    if(inputElm.value >= 1)
    {
        errorMessageElm1.style.color = 'white';
        errorMessages2.style.color = 'white';
    }else if(inputElm.value < 0)
    {
        errorMessages2.textContent = 'you should pass minimum 1';
        errorMessageElm1.style.color = 'red';
        errorMessages2.style.color = 'red';
    }
}
// reseet input box function
function resetInput()
{
    inputElm.value = '';
}
// adding item to ui function 
function addItemToUI() 
{
    score = Number(inputElm.value);
    mainScoreElm.textContent = score;
}




