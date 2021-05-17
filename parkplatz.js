class Parkplatz
{
    constructor(x,y,id)
    {
        this.x = x;
        this.y = y;
        this.id = id;
        var frei;
        
    }

    istFrei()
    {
        return frei;
    }

    platzZeichnen(x,y,ctx)
    {  
        this.ctx = ctx;
    
        ctx.beginPath();
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
    }
}