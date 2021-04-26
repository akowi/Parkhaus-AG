class Parkplatz
{
    constructor(x,y)
    {
        this.x = x;
        this.y= y;
        var frei;

        
    }

    istFrei()
    {
        return frei;
    }
    
    platzZeichnen()
    {  
        var x = document.createElement("canvas")
        var ctx = x.getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
        document.body.appendChild(x);
    }
}