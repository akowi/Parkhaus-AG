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
        var canvas = document.createElement("CANVAS")
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();
        document.body.appendChild(canvas);
    }
}