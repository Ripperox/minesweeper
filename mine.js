var tileselected = null;
var board = [   [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0]];
                
const mines = new Set();
import { closest,renamer,recurse } from './functions.js';
var gameover = false;
 while(mines.size<20)
{
    mines.add(Math.floor(Math.random()*99)+1);
}
for( const i of mines.values()){
   board[Math.floor(i/10)+1][i%10+1]=1;
}
console.log(board)


function thegameisover()
{
    gameover = true;
    console.log("you lost")
}


window.onload = function (){
    setBoard();
}


function setBoard()
{
    for(let i =1;i<=10;i++)
    {
        for(let j=1;j<=10;j++){
            let tile = document.createElement("div")
            tile.id = i + "-" + j;
            tile.classList.add('tile');
            tile.addEventListener("click",selectTile);
            document.getElementById("minefield").appendChild(tile);            
        }
    }
    
}


function selectTile()
{
    console.log("Gameover value"+gameover)
    if(gameover==true)
    {   
        console.log("Gameover value"+gameover)
        tileselected = this;
        if(board[tileselected.id[0]][tileselected.id[2]]==1)
        { 
            tileselected.classList.add("bomb");  
            thegameisover();

        }
        else
        {
            console.log(closest(tileselected))
            renamer(tileselected,closest(tileselected))
        }
        console.log(tileselected.id)
    }
}