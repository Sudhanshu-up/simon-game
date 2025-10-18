let gameseq=[];
let userseq=[];
let btns=["yellow","pink","green","purple"];


let started=false;
let level=0;
let h2=document.querySelector("h2");
let prevScore=0;
//step 1 game start

document.addEventListener("keypress",function(){
    if(started==false){
       console.log("game is started");
       started=true; 
       h2.innerHTML = `Level ${level} <br> Previous Score: <b>${prevScore}</b>`;
       levelup();
    }
    
});
//flash the rendom button

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },300);
}

//user flash
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },300);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //choosse btn random
    let randIndx= Math.floor(Math.random()*btns.length);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    // console.log(randbtn);
    // console.log(randnum);
    // console.log(randIndx);
    btnFlash(randbtn);
}

function check(idx){

    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        prevScore=level;
        h2.innerHTML=`Game Over! Your Score :<b>${level}</b> <br> Previous Score: <b>${prevScore}</b> <br> Please press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },200);
        reset();
    }
}
//press button
function btnpress(){
    let btn=this;
    userFlash(btn);
    let usercolo=btn.getAttribute("id");
    userseq.push(usercolo);
    check(userseq.length-1);
}

let allbtn=document.querySelectorAll(".d");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}; 

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}