class Parkhalle
{
    constructor() 
    {
        parkplaetze = [];

        this.platzEinfuegen(20,20);
    }

    platzEinfuegen(x,y)
    {
        let p1 = new Parkplatz(x,y);
        parkplaetze.push(p1);
    }

    plaetzeZeichnen()
    {
        for(i=0;i<5;i++)
        {
            parkplaetze[i].platzZeichnen();
        }
    }
}