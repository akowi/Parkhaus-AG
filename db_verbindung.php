<?php

function verbindungHerstellen()
 {
   $dbhost = "sql11.freemysqlhosting.net";
   $dbuser = "sql11419329";
   $dbpass = "Ic8EEYcppA";
   $dbname = "sql11419329";
   $verb = new mysqli($dbhost, $dbuser, $dbpass,$dbname);
  
   if ($verb->connect_error) 
   {
     die("Connection failed: " . $verb->connect_error);
   }
   
 return $verb;
 }
 
function verbindungSchliessen($verb)
 {
    $verb -> close();
 }
   
?>