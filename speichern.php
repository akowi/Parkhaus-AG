<?php

// Die Daten, die vom Javascript-Skript gesendet werden, werden hier gelesen und in die Datei "daten.txt" übertragen.

$rohdaten = $_POST['park'];
$daten = json_decode($rohdaten);
$text ="";
foreach($daten as $i)
{
    $text .= strval($i->id);
    $text .= " ";
    if($i->frei)
    {
        $text .= strval($i->frei);
    }
    else
    {
        $text .= "0";
    }
    $text .= " ";
}

$datei = fopen("daten.txt","w");
fwrite($datei, $text);
fclose($datei);
?>