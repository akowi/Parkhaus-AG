class Parkhalle
{
    constructor(anzahl) 
    {
        console.log("pog");
        
        ctx = canvasZeichnen();
        this.plaetzeZeichnen(anzahl);
        
    };

    platzEinfuegen(x,y,id)
    {
        let p1 = new Parkplatz(x,y,id);
        parkplaetze.push(p1);
    };

    plaetzeZeichnen(anzahl)
    {
        
        var quotient = Math.floor(anzahl/2);
        var rest = anzahl % 2;

        for(var i=0;i<(quotient + rest);i++)
        {
            var hoehe = 100;
            var px = 20;
            var yx = 50 + i*hoehe;
            this.platzEinfuegen(px,yx,i);
            parkplaetze[i].platzZeichnen(x,y,ctx);
        }
    };
}

