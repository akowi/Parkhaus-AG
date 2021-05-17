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
    
    platzZeichnen(x,y)
    {  
        var canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 2000;

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
    }
}