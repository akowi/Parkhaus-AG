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
    
    platzZeichnen(ctx)
    {  
        this.ctx = ctx;
        //ctx.beginPath();
        //ctx.rect(20, 20, 150, 100);
        //ctx.stroke();
        //ctx.fillStyle = "red";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}