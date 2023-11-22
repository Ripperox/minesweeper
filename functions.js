export function closest(tile)
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
export function recurse(tile)
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