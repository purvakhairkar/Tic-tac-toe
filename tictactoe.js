let val1 = prompt("Player X :");
let val2= prompt("Player O:");
let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if (turnO) {
            box.innerText= "X";
            turnO=false;
        } else {
            box.innerText= "O";
            turnO= true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled= true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled= false;
        box.innerText="";
    }
};

const showWinner = (winner)=> {
    msg.innerText= `CONGRATULATIONS, ${winner} WINS!🎉`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val!= "" && pos3Val!= "") {
            if (pos1Val===pos2Val && pos2Val===pos3Val) {
                console.log("winner", pos1Val);
                if(pos1Val=="X") {
                    showWinner(val1);
                } else {
                    showWinner(val2);
                }
                
            } 
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click",resetGame);