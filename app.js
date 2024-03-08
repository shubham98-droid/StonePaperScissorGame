let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
let userScrPara=document.querySelector("#user-score");
let compScrPara=document.querySelector("#Comp-score");
const genComChoice=()=>{
let option=["rock","paper","scissors"];
let index=Math.floor(Math.random()*3)
return option[index]
}
const drawGame=()=>{

msgPara.innerText="Match draw";
msgPara.style.backgroundColor="#081b31";


}
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScrPara.innerText=userScore;
        msgPara.innerText=`You Win ${userChoice} beats ${comChoice}`;
        msgPara.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScrPara.innerText=compScore;
        msgPara.innerText=`You lose ${comChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    
    const comChoice=genComChoice();
   
    
    if(userChoice===comChoice){
     drawGame()
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissor
            userWin=comChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock ,scissor
            userWin=comChoice==="scissors"?false:true;
        }else{
            //paper ,rock
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
    
}

choices.forEach((i)=>{
    i.addEventListener("click",()=>{
        const userChoice=i.getAttribute("id")
       playGame(userChoice);
    })
})