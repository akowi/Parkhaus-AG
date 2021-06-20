class Parkhalle
{
    constructor(anzahl)
    {
        this.anzahl = anzahl;
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

    // Es wird jedem Parkplatz die richtige Position zugeordnet, sowie eine ID. Außerdem wird es aus der Datei "daten.txt" gelesen, ob jeder Platz frei ist oder nicht.

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


    // Jeder Parkplatz wird in seiner entsprechenden Position gezeichnet.

    plaetzeZeichnen()
    {
        for(var n=0;n<parkplaetze.length;n++)
        {
            var x= parkplaetze[n].x;
            var y =parkplaetze[n].y;
            parkplaetze[n].platzZeichnen(x,y,this.ctx);
        }
    }

    // Es wird ein Knopf erstellt, der dem User genau den Parkplatz zuweist, der sich am Weitesten hinten befindet. Da diese Software für eine Firma gedacht ist, befindet sich
    // der Eingang ins Gebäude vermutlich ganz hinten. Deshalb sollten die Angestellter, die früher als Andere ankommen, diese Plätze bekommen.

    // Um dies zu ermöglichen, wird der Array "parkplaetze" umgeordnet, sodass die Parkplätze sich in folgende Reihenfolge befinden: 1, 11, 2, 12, 3, 13...
    // Danach wird der richtige Parkplatz identifiziert und dem User zugeordnet.

   parkplatzZuweisen()
   {
        var knopf = document.createElement("button");
        knopf.className = "button button2"
        knopf.textContent = "Parkplatz zuweisen";
        document.body.appendChild(knopf);

        knopf.onclick =  function()
        {

            var alt_parkplaetze = new Array();

            for(var i=0;i<Math.round(parkplaetze.length*0.5);i++)
            {
                alt_parkplaetze.push(parkplaetze[i]);
                if(parkplaetze[i+10] != null)
                {
                    alt_parkplaetze.push(parkplaetze[i+10]);
                }
            }
            for(var i=0;i<alt_parkplaetze.length;i++)
            {
                    if(alt_parkplaetze[i].frei)
                    {
                        alt_parkplaetze[i].frei = false;
                        if(i % 2 == 0)
                        {
                            parkplaetze[i*0.5].frei = false;
                            alert("Ihnen wurde der Parkplatz " + (i*0.5+1).toString() + " zugewiesen");
                        }
                        else
                        {
                            parkplaetze[i+9-(i-1)*0.5].frei = false;
                            alert("Ihnen wurde der Parkplatz " + (i+9-(i-1)*0.5+1).toString() + " zugewiesen");
                        }    

                        aenderung = true;
                        break;
                    }

                    if(i==alt_parkplaetze.length-1)
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

    // Durch eine sogenannte "AJAX-Datenübertragung" werden die Daten jedes Parkplatzes an der Datei "speichern.php" gesendet.
    // Da Objekte meistens im JSON-Format ist, werden sie in einen String umgewandelt.

    plaetzeSpeichern()
    {
        $.ajax({
            url: "speichern.php",
            method: "post",
            async: true,
            data: { park : JSON.stringify(parkplaetze)},
            success: function(res){
                    
            }
          })
    }

    // Die Daten jedes Parkplatzes werden aus der Datei "daten.txt" gelesen und in die wirklichen Objekte übertragen.

    plaetzeAuffrischen()
    {
        var frei = this.textParsen();
        for(var i=0;i<parkplaetze.length;i++)
        {
            status = frei[i];
            if(parkplaetze[i].frei != this.istFrei(status))
            {
                parkplaetze[i].frei = this.istFrei(status);
            }
        }
        
    }

    // Die Daten jedes Parkplatzes werden aus der Datei "daten.txt" gelesen. 
    // Dabei wird seinen Zustand (ob sie besetzt sind oder nicht) in einem anderen Array gespeichert, das auch zurückgegeben wird.

    textParsen()
    {
        $.ajax({
            url: "lesen.php",
            method: "get",
            async: true,
            success: function(res){
                  
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
         
        return frei;
    }

    // Wenn es irgendeine Änderung beim Attribut "frei" der Parkplätze gibt, wird diese Methode aufgerufen, damit diese Änderung gespeichert wird.

    aenderung()
    {
        if(aenderung)
        {
            aenderung = false;
            this.plaetzeSpeichern();
        }
    }

    // Alle Methoden, die sich in update() befinden, werden jede 100 Millisekunden aufgerufen.

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
