var textfeld = document.createElement("input");
textfeld.setAttribute("type","text");
//textfeld.style.position = "absolute";
//textfeld.style.top = "100px";
//textfeld.style.left = "1000px";
document.body.appendChild(textfeld);

var knopf = document.createElement("button");
//knopf.style.top = "100px";
//knopf.style.left = "1000px";
document.body.appendChild(knopf);

knopf.onclick = function()
{
    var input = textfeld.value;
    alert(input);
}