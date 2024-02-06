let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn= document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let turn0=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turn0= true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

    
  const disableBoxes=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }

}
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });


    const showWinner=(winner)=>{
        
        msg.InnerText =`Congrats,Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

   const checkWinner = () =>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" &&pos2!=""&&pos3!="")
        {
            if(pos1===pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
        

    }

 }
    
});

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

