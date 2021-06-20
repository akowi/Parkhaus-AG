<?php

// Die Inhalte der Datei "daten.txt" werden durch den Befehl "print_r" an dem Javascript-Code gesendet.

$datei = fopen("daten.txt","r");
if(filesize("daten.txt") > 0)
{
    $text = fread($datei,filesize("daten.txt"));
    print_r($text);
}
fclose($datei);
?>