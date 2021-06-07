class Parkplatz
{
    constructor(x,y,id)
    {
        this.x = x;
        this.y = y;
        this.id = id;
        this.frei=true;
        console.log("POG");

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

    knopfZeichnen(x,y)
    {
        var button = document.createElement("button");
        button.className = "button button1";
        button.style.top = y;
        button.style.left = x;
        document.body.appendChild(button);
    }

    platzZeichnen(x,y,ctx)
    {
        this.ctx = ctx;
        ctx.beginPath();
        ctx.fillStyle = this.farbeBestimmen();
        ctx.lineWidth = 10;
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
        ctx.fill();
        this.knopfZeichnen(x,y);
    }
}
