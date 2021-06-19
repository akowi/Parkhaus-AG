<?php
$rawdata = $_POST['park'];
$data = json_decode($rawdata);
//print_r($data);
$text ="";
foreach($data as $i)
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

$myfile = fopen("test.txt","w");
fwrite($myfile, $text);
fclose($myfile);
?>