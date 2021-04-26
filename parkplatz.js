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
    
    platzZeichnen(canvas)
    {  
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
    }
}