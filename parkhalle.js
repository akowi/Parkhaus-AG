class Parkhalle
{
    constructor(anzahl)
    {
        this.ctx = canvasZeichnen();
        this.plaetzeEinfuegen(anzahl);
        this.update();
        this.parkplatzZuweisen();
    }
    
    platzEinfuegen(x,y,id,frei)
    {
        let p1 = new Parkplatz(x,y,id,frei);
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
                var frei;
                var name = "p"+(i+10*n).toString();

                if(localStorage.getItem(name)==null)
                {
                    frei = true
                }
                else
                {
                    status = localStorage.getItem(name);
                    frei = this.istFrei(status);
                }

                this.platzEinfuegen(x,y,i+n*(quotient + rest),frei);
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

   parkplatzZuweisen()
   {
        var knopf = document.createElement("button");
        knopf.className = "button button2"
        knopf.textContent = "Parkplatz zuweisen";
        document.body.appendChild(knopf);

        knopf.onclick =  function()
        {
            if(admin)
            {
                    for(var i=0;i<parkplaetze.length;i++)
                    {
                            if(parkplaetze[i].frei)
                            {
                                    parkplaetze[i].frei = false;
                                    alert("Ihnen wurde der Parkplatz " + (i+1).toString() + " zugewiesen");
                                    break;
                            }

                            if(i==parkplaetze.length-1)
                            {
                                alert("Kein Platz verfügbar :(");
                            }
                    }

                    
            }
        }
    }
    
    istFrei(status)
    {
        if(status == "frei")
        {
            return true;
        }
        else if(status == "unfrei")
        {
            return false;
        }
    }

    plaetzeSpeichern()
    {
        for(var i=0;i<parkplaetze.length;i++)
        {
            var name = "p"+i.toString();
            var status;
            if(parkplaetze[i].frei)
            {
                status = "frei"
            }
            else
            {
                status = "unfrei";
            }
            localStorage.setItem(name,status);
        }
    }

    plaetzeAuffrischen()
    {
        for(var i=0;i<parkplaetze.length;i++)
        {
            var name = "p"+i.toString();
            var status = localStorage.getItem(name);
            parkplaetze[i].frei = this.istFrei(status);
        }
    }

    update()
    {
        self =this;
        setInterval(function()
                    {
                        self.plaetzeZeichnen();
                        self.plaetzeSpeichern();     
                        self.plaetzeAuffrischen();                
                    }
        ,500)
    }
}
