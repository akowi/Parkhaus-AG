class Parkhalle
{
    constructor(anzahl)
    {
        this.anzahl = anzahl;
        this.ctx = canvasZeichnen();
        this.plaetzeEinfuegen(anzahl);
        this.update();
        this.parkplatzZuweisen();
        console.log(admin);
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

                if(text==null)
                {
                    frei = true
                }
                else
                {
                    var status = this.textParsen();
                    frei = this.istFrei(status[i+10*n]);
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
            
            for(var i=0;i<parkplaetze.length;i++)
            {
                    if(parkplaetze[i].frei)
                    {
                            parkplaetze[i].frei = false;
                            aenderung = true;
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
    
    istFrei(status)
    {
        if(status == 1)
        {
            return true;
        }
        else if(status == 0)
        {
            return false;
        }
    }

    plaetzeSpeichern(callback)
    {
        /*for(var i=0;i<parkplaetze.length;i++)
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
        }*/
        var self=this;
        $.ajax({
            url: "speichern.php",
            method: "post",
            async: true,
            data: { park : JSON.stringify(parkplaetze)},
            success: function(res){
                    //console.log(res);
            }
          })
    }

    plaetzeAuffrischen()
    {
        /*for(var i=0;i<parkplaetze.length;i++)
        {
            var name = "p"+i.toString();
            var status = localStorage.getItem(name);
            parkplaetze[i].frei = this.istFrei(status);
        }*/

        var frei = this.textParsen();
        for(var i=0;i<parkplaetze.length;i++)
        {
            status = frei[i];
            if(parkplaetze[i].frei != this.istFrei(status))
            {
                parkplaetze[i].frei = this.istFrei(status);
            }
            //console.log(parkplaetze[i].frei);
        }
        
    }

    textParsen()
    {
        var request=$.ajax({
            url: "lesen.php",
            method: "get",
            async: true,
            success: function(res){
                
                    //console.log(res);     
                    text = res;        
            }
            })
    
        var id = new Array();
        var frei = new Array();

        if(text == null)
        {
            for(var i=0;i<this.anzahl;i++)
            {
                frei[i] = 1;
            }
        }

        else
        {
            var split = text.split(" ");
            //console.log(split[1]);
            
            for(var i=0;i<split.length-1;i++)
            {
                if(i % 2 == 0)
                {
                    id.push(split[i])
                }
                else
                {
                    frei.push(split[i]);
                }
            }
        }
        
        for(var i=0;i<id.length-1;i++)
        {
           // console.log(id[i]+" "+frei[i]);
        }
        
        return frei;
    }

    aenderung()
    {
        if(aenderung)
        {
            aenderung = false;
            this.plaetzeSpeichern();
        }
    }

    update()
    {
        self =this;
        setInterval(function()
                    {
                        self.aenderung(); 
                        self.plaetzeAuffrischen();   
                        self.plaetzeZeichnen();   
                    }
        ,100)
    }
}
