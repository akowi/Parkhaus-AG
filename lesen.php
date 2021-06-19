<?php
$myfile = fopen("test.txt","r");
if(filesize("test.txt") > 0)
{
    $text = fread($myfile,filesize("test.txt"));
    print_r($text);
}
fclose($myfile);
?>