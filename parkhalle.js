class Parkhalle
{
    constructor(anzahl) 
    {
        this.ctx = canvasZeichnen();
        this.update();
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

    farbeÄndern()
    {
        var button = document.getElementById("button");
        button.onclick = function()
                        {
                            for(var i=0;i<parkplaetze.length;i++)
                            {
                                if(parkplaetze[i].frei)
                                {
                                    parkplaetze[i].frei = false;
                                }
                                else
                                {
                                    parkplaetze[i].frei = true;
                                }
                            }
                        }
   
    }
    
   update()
    {
        self =this;
        setInterval(function()
                    {
                        self.farbeÄndern();
                        self.plaetzeZeichnen(20);
                    }
        ,1000)
    }
}

