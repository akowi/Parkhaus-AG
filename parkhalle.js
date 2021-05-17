class Parkhalle
{
    constructor(anzahl) 
    {
        console.log("pog");
        
        ctx = canvasZeichnen();
        this.plaetzeZeichnen(anzahl);
        
    };

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

var parkplaetze = new Array();
var ctx;
let parkhalle = new Parkhalle(20);