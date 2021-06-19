<?php
$myfile = fopen("daten.txt","r");
if(filesize("daten.txt") > 0)
{
    $text = fread($myfile,filesize("daten.txt"));
    print_r($text);
}
fclose($myfile);
?>