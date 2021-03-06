class Parkplatz
{
    constructor(x,y,id,frei)
    {
        this.x = x;
        this.y = y;
        this.id = id;
        this.frei=frei;
    }

    // Die Farbe des Parkplatzes wird durch den Wert seines Booleans "frei" bestimmt.

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
        var breite = 150;
        var hoehe = 100;
        
        ctx.beginPath();
        ctx.fillStyle = this.farbeBestimmen();
        ctx.lineWidth = 10;
        ctx.rect(x, y, breite, hoehe);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    farbeÄndern()
    {
        aenderung = true;

        if(this.frei)
        {
            this.frei = false;
        }
        else
        {
            this.frei = true;
        }
    }

    // Für jeden Parkplatz wird jeweils ein Knopf erzeugt, der dazu dient, die Farbe dieses Parkplatzes zu verändern, wenn er angeklickt wird.
    // Dies ist übrigens nur möglich, wenn der User ein Administrator ist.

    knopfZeichnen(id)
    {
        var button = document.createElement("button");
        button.className = "button button1"
        button.style.top = this.y.toString()+"px";
        button.style.left = this.x.toString()+"px";
        button.id = id.toString() +"b";
        button.textContent = id+1;
        document.body.appendChild(button);
        var self = this;
        button.onclick = function()
        {
            if(admin==1)
            {
                self.farbeÄndern();
            }
            
        }
        aenderung = true;
    }

}
