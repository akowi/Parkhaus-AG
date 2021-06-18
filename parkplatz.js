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
        ctx.fillStyle = this.farbeBestimmen();
        ctx.lineWidth = 10;
        ctx.rect(x, y, 150, 100);
        ctx.stroke();
        ctx.fill();
    }

    farbeÄndern()
    {
        if(this.frei)
        {
            this.frei = false;
        }
        else
        {
            this.frei = true;
        }
    }

    knopfZeichnen(id)
    {
        var button = document.createElement("button");
        button.className = "button button1"
        button.style.top = this.y.toString()+"px";
        button.style.left = this.x.toString()+"px";
        button.id = id.toString() +"b";
        document.body.appendChild(button);
        var self = this;
        button.onclick = function()
        {
            if(admin)
            {
                self.farbeÄndern();
            }
            
        }
    }


}
