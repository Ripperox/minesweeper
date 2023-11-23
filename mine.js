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
    let ele= document.createElement("div")
    ele.innerHTML="You hit a mine!"
    ele.classList.add("msg");
    document.getElementById("message").appendChild(ele)
    let x= document.createElement("button")
    x.innerHTML="RESTART"
    x.classList.add("restart-button")
    x.addEventListener("click",reload);
    document.getElementById("restart").appendChild(x)
}
function reload(){
    location.reload();
}
function closest(tile)
{
    x=parseInt(tile.id[0]);
    y=parseInt(tile.id[2]);
    ans=0;
    for(let i =x-1;i<x+2;i++)
    {
        for(let j=y-1;j<y+2;j++)
        {
            if(board[i][j]==1)
            {   
                ans++;
            }
        }
    }
    return ans;
}
function recurse(tile)
{
    x=parseInt(tile.id[0]);//7
    y=parseInt(tile.id[2]);//7
    for(let i =parseInt(x)-1;i<parseInt(x)+2;i++)
    {
        for(let j=parseInt(y)-1;j<parseInt(y)+2;j++)
        {
            console.log(typeof x,y)
            elem=document.getElementById(i+"-"+j)
            console.log(elem.id);
            if(closest(elem)==0)
            {
                if(0<x<11 && 0<y<11)
                    recurse(elem);
            }
            else    
            {
                console.log("renaming ")
                renamer(elem,closest(elem));
            }
        }
    
    }
}
function renamer(tile,ans)
{
    if(ans==0)
        {   
        tile.classList.add("zero");  
        console.log("entering recurse");
        if(0<tile.id[0]<11 && 0<tile.id[2]<11)
            recurse(tile);
        }
    else if(ans==1)
        tile.classList.add("one");
    else if(ans==2)
        tile.classList.add("two");
    else if(ans==3)
        tile.classList.add("three");
    else if(ans==4)
        tile.classList.add("four");
    else if(ans==5)
        tile.classList.add("five");
    else if(ans==6)
        tile.classList.add("six");
    else if(ans==7)
        tile.classList.add("seven");
    else if(ans==8)
        tile.classList.add("eight");
    else 
        return 

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
    if(gameover==false)
    {   
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