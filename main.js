function canvasZeichnen()
{
        var canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 2000;
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        return ctx;
}

var parkplaetze = new Array();
let parkhalle = new Parkhalle(20);
//alert("admin:" + admin);

