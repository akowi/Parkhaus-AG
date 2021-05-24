class Parkhalle
{
    constructor(anzahl) 
    {
        console.log("pog");
        
        this.ctx = canvasZeichnen();
        this.plaetzeZeichnen(anzahl);
        
    }


    platzEinfuegen(x,y,id)
    {
        let p1 = new Parkplatz(x,y,id);
        parkplaetze.push(p1);
    }

    plaetzeZeichnen(anzahl)
    {
        
        var quotient = Math.floor(anzahl/2);
        var rest = anzahl % 2;

        for(var n=0;n<2;n++)
        {
            for(var i=0;i<(quotient + rest);i++)
            {
                var hoehe = 100;
                var px = 200+500*n;
                var py = 50 + i*hoehe;
                this.platzEinfuegen(px,py,i+n*(quotient + rest));
                parkplaetze[i+n*(quotient + rest)].platzZeichnen(px,py,this.ctx);
            }
        }
    }
}

