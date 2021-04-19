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
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();
    }
}