<?php

function verbindungHerstellen()
 {
 $dbhost = "sql11.freemysqlhosting.net";
 $dbuser = "sql11419329";
 $dbpass = "Ic8EEYcppA";
 $db = "example";
 $verb = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Verbindung fehlgeschlagen: %s\n". $verb -> error);
 
 return $verb;
 }
 
function verbindungSchliessen($verb)
 {
    $verb -> close();
 }
   
?>