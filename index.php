<?php

include 'db_verbindung.php';
$verb = verbindungHerstellen();
echo "Connected Successfully";
verbindungSchliessen($verb);

?>