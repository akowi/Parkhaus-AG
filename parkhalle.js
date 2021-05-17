class Parkhalle
{
    constructor() 
    {
        console.log("pog");
        this.canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        this.canvas = 
        {
            width:500,
            height:500
        };

        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.stroke();

        
       
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