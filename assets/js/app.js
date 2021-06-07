var player1 = "O";
var player2 = "X";
var count = 0;

let box1=document.getElementById("cell1");
let box2=document.getElementById("cell2")
let box3=document.getElementById("cell3")

let box4=document.getElementById("cell4");
let box5=document.getElementById("cell5")
let box6=document.getElementById("cell6")

let box7=document.getElementById("cell7");
let box8=document.getElementById("cell8")
let box9=document.getElementById("cell9")

result = document.getElementById("result");
board = document.getElementById("board");
let winCondition = [
   
    // rows
    [box1,box2,box3],
    [box4,box5,box6],
    [box7,box8,box9],
    // columns
    [box1,box4,box7],
    [box2,box5,box8],
    [box3,box6,box9],
    //diagonals
    [box1,box5,box9],
    [box3,box5,box7]
]

let allBox = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
player1Box = []
player2Box = []

let currentPlayer = player1


console.log("Player 1 is O and player 2 choose X ")

var state = false;
play()

function play(  ){


    

    box1.addEventListener('click',(event)=>{
 
      
        state = switchTurn();
        currentPlayer = state ? player1 : player2
        box1.innerHTML = currentPlayer;
        
        
        if (currentPlayer == player1) {
            player1Box.push(box1)
            
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box1)
            console.log("player2 Boxes :",player2)
            checkWin(player2Box,player2);                    
        }

        box1.style.cursor = "not-allowed"
       
    },{once: true});
    
   

    box2.addEventListener('click',(event)=>{

    
        state = switchTurn();
        currentPlayer = state ? player1 : player2
        box2.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box2)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box2)
            console.log("player2 Boxes :",player2Box)
            checkWin(player2Box,player2);                    
        }
        
        box2.style.cursor = "not-allowed"
        
    },{once : true});
    

    
    box3.addEventListener('click',(event)=>{

       
        state = switchTurn();
        currentPlayer = state ? player1 : player2
        box3.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box3)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box3)
            console.log("player2 Boxes ",player2Box)
            checkWin(player2Box,player2);                    
        }
        box3.style.cursor = "not-allowed"
        
    },{once : true});
    
    box4.addEventListener('click',(event)=>{

      
        
        state = switchTurn();
        var currentPlayer = state ? player1 : player2
        

        box4.innerHTML = currentPlayer;
        
        if (currentPlayer == player1) {
            player1Box.push(box4)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box4)
            console.log("player 2 : ",player2Box)

            checkWin(player2Box,player2);                    
        }
        
        box4.style.cursor = "not-allowed"
        
    },{once : true});
    
    
    box5.addEventListener('click',(event)=>{

     
        state = switchTurn();
        currentPlayer = state ? player1 : player2
        box5.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box5)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box5)
            console.log("player 2 : ",player2Box)

            checkWin(player2Box,player2);                    
        }

        box5.style.cursor = "not-allowed"
        
    },{once : true});
    
    // let box6=document.getElementById("cell6")
    
    box6.addEventListener('click',(event)=>{

       
        
        state = switchTurn();

        currentPlayer = state ? player1 : player2
        box6.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box6)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box6)
            console.log("player 2 : ",player2Box)

            checkWin(player2Box,player2);                    
        }
        box6.style.cursor = "not-allowed"
        
    },{once : true});
    
    // let box7=document.getElementById("cell7")
    
    box7.addEventListener('click',(event)=>{

        state = switchTurn();
        currentPlayer = state ? player1 : player2



        box7.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box7)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box7)
            console.log("player 2 : ",player2Box)

            checkWin(player2Box,player2);                    
        }
        box7.style.cursor = "not-allowed"
        
       
    },{once : true});
    
    // let box8=document.getElementById("cell8")
    
    box8.addEventListener('click',(event)=>{

        state = switchTurn();
        currentPlayer = state ? player1 : player2

        box8.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box8)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box8)
            console.log("player 2 : ",player2Box)
            checkWin(player2Box,player2);                    
        }
        box8.style.cursor = "not-allowed"
        
    },{once : true});
    

    // let box9=document.getElementById("cell9")
    
    box9.addEventListener('click',(event)=>{

        state = switchTurn();
        
        currentPlayer = state ? player1 : player2
        box9.innerHTML = currentPlayer;
        if (currentPlayer == player1) {
            player1Box.push(box9)
            console.log("player1 Boxes :",player1Box)
            checkWin(player1Box,player1)
        } else {
            player2Box.push(box9)
            console.log("player 2 : ",player2Box)

            checkWin(player2Box,player2);                    
        }
        box9.style.cursor = "not-allowed"
        
    },{once : true});

    
}

function switchTurn(){

    state =!state 
    return state
}


function checkWin(boxes,player) {
    console.log("I'am Player :",player)

    console.log(allBox.length)
    if(
        (box1.innerHTML == player && box2.innerHTML ==player && box3.innerHTML == player)
        ||
        (box4.innerHTML == player && box5.innerHTML == player && box6.innerHTML == player)
        ||
        (box7.innerHTML == player && box8.innerHTML == player && box9.innerHTML == player)
        ||
        (box1.innerHTML == player && box4.innerHTML == player && box7.innerHTML == player)
        ||
        (box2.innerHTML == player && box5.innerHTML == player && box8.innerHTML == player)
        ||
        (box3.innerHTML == player && box6.innerHTML == player && box9.innerHTML == player)
        ||
        (box1.innerHTML == player && box5.innerHTML == player && box9.innerHTML == player)
        ||
        (box3.innerHTML == player && box5.innerHTML == player && box7.innerHTML == player)
    
    ){

        result.innerHTML = player + " WINS"
        
        board.style.display = "none"

    }else if(allBox.length==0){
        console
        document.getElementById("result").innerHTML = "Game Draw"
        
    }
  
}     