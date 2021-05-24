class Parkplatz
{
    constructor(x,y,id)
    {
        this.x = x;
        this.y = y;
        this.id = id;
        this.frei=true;
        
    }


    farbeBestimmen()
    {
        var farbe;

        if(!this.frei)
        {
            farbe = "red";
        }
        else
        {
            farbe = "limegreen";
        }
        return farbe;
    }

    platzZeichnen(x,y,ctx)
    {  
        this.ctx = ctx;
        ctx.beginPath();
        console.log(this.farbeBestimmen());
        ctx.fillStyle = this.farbeBestimmen();
        ctx.lineWidth = 10;
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
        ctx.fill();
    }
}