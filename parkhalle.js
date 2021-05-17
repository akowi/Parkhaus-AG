class Parkhalle
{
    constructor() 
    {
        console.log("pog");
        
        let parkplatz = new Parkplatz(20,20);
        parkplatz.platzZeichnen(50,50);  
    };

    platzEinfuegen(x,y)
    {
        let p1 = new Parkplatz(x,y);
        parkplaetze.push(p1);
    };

    plaetzeZeichnen()
    {
        for(i=0;i<5;i++)
        {
            parkplaetze[i].platzZeichnen();
        }
    };
}

let parkhalle = new Parkhalle();