let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-div");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];

const resetGame = () => {
    count=0;
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const drawGame = () => {
    count=0;
    msg.innerText = "Oops, Game draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const enableBoxes = () => {
    for (let box of boxes) {
        // box.enabled = true ;
        box.disabled = false ;
        box.innerText="";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true ;
    }
}

const showWinner = (winner) => {
    count=0;
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

checkWinner = () => {
    if(count===9){
        drawGame();
    }
    
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
            if (pos1Val===pos2Val && pos2Val===pos3Val && pos3Val===pos1Val){
                showWinner(pos1Val);
            } 
        }
    }
}

let count=0;
boxes.forEach((box) => {
    
    box.addEventListener("click",() => {
        count++;
        if(turnO) {
            box.innerText = "O";
            // box.style.color = "red";
            turnO=false;
        } else {
            box.innerText = "X";
            // box.style.color = "blue";
            turnO=true;
        }
        box.disabled = true;
        
        checkWinner();
        // console.log(count);
    });
});

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
