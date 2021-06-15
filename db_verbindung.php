<?php

function verbindungHerstellen()
 {
 $dbhost = "sql11.freemysqlhosting.net";
 $dbuser = "sql11419329";
 $dbpass = "Ic8EEYcppA";
 $verb = new mysqli($dbhost, $dbuser, $dbpass) or die("Verbindung fehlgeschlagen: %s\n". $verb -> connect_error);
 
 return $verb;
 }
 
function verbindungSchliessen($verb)
 {
    $verb -> close();
 }
   
?>