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
    
    canvasZeichnen()
    {
        var canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 2000;
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        return ctx;
    }

    platzZeichnen(x,y,ctx)
    {  
        this.ctx = ctx;
    
        ctx.beginPath();
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
    }
}