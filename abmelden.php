<?php

// Alle zeitliche Daten werden gelöscht und der User wird auf die Anmeldeseite wiedergeleitet.

session_start();
session_destroy();
header('Location: index.html');
exit();
?>