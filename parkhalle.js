class Parkhalle
{
    constructor(anzahl)
    {
        this.ctx = canvasZeichnen();
        this.plaetzeEinfuegen(anzahl);
        this.update();
        
    }


    platzEinfuegen(x,y,id)
    {
        let p1 = new Parkplatz(x,y,id);
        parkplaetze.push(p1);
        p1.knopfZeichnen(id);
    }

    plaetzeEinfuegen(anzahl)
    {
        var quotient = Math.floor(anzahl/2);
        var rest = anzahl % 2;

        for(var n=0;n<2;n++)
        {
            for(var i=0;i<(quotient + rest);i++)
            {
                var hoehe = 100;
                var x = 200+500*n;
                var y = 50 + i*hoehe;
                this.platzEinfuegen(x,y,i+n*(quotient + rest));
            }
        }
    }

    plaetzeZeichnen()
    {
        for(var n=0;n<parkplaetze.length;n++)
        {
            var x= parkplaetze[n].x;
            var y =parkplaetze[n].y;
            parkplaetze[n].platzZeichnen(x,y,this.ctx);
        }
    }

   update()
    {
        self =this;
        setInterval(function()
                    {
                        self.plaetzeZeichnen();
                    }
        ,500)
    }
}
