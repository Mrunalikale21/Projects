let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");

let turnO = true; //playerX, payerO
let count = 0 ; //to track draw

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("box was clicked");
       if (turnO){ //player O turn
        box.innerText = "O";
        box.style.color = "green";
        turnO = false;
       }
       else{  //player x turn
        box.innerText = "X";
        box.style.color = "red";
        turnO = true;
       }
       box.disabled = true;
       count++;

       let isWinner = checkwinner();

      if(count === 9 && !isWinner){
        gameDraw();
      }

       
    });

});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }

    
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

    
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const gameDraw = () => {
     msg.innerText = `Game was a Draw`;
     msgContainer.classList.remove("hide");
     disabledBoxes();
     
};



const checkwinner = () => {
    for( let pattern of winPatterns){
        //console.log(pattern[0], pattern[1], pattern[2]); to get seperate index this are postions.
        //console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            }
        }

 }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

