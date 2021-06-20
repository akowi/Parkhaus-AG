<?php

// Hier wird überpruft, ob die eingegebe Daten eigentlich den Daten eines Users in der Datenbank entsprechen.

session_start();
include 'db_verbindung.php';
$verb = verbindungHerstellen();
$id = $_POST['ID'];  
$passwort = $_POST['Passwort'];  

// Dieser Code dient nur dazu, SQL-Injections zu vermeiden.

$id = stripcslashes($id);  
$passwort = stripcslashes($passwort);  
$id = mysqli_real_escape_string($verb, $id);  
$passwort = mysqli_real_escape_string($verb, $passwort);  
      
$sql = "SELECT ID,Passwort FROM BENUTZER WHERE ID = $id AND Passwort = '$passwort'";
$ergebnis = $verb->query($sql) or die($verb->error);
$anzahl = mysqli_num_rows($ergebnis);

// Falls der Vorgang erfolgreich ist, werden ein paar sogenannte Sitzung-Variablen, die für die ganze Sitzung ihren Wert behalten, auch wenn man die Seite wiederauffrischt.
// Wenn die Identifizierung des Users misslingt, dann wird er auf die Anmeldeseite wieder weitergeleitet.

if($anzahl==1)
{
    session_regenerate_id();
    $_SESSION['eingeloggt'] = true;
    $_SESSION['id'] = $id;

    $sql = "SELECT Admin FROM BENUTZER WHERE ID = $id AND Passwort = '$passwort'";
    $ergebnis = $verb->query($sql) or die($verb->error);
    $_SESSION['admin'] = mysqli_fetch_assoc($ergebnis);
    
    header("Location:home.php",true,301);
}
else
{
    header("Location:index.html",true,301);
    exit();
}
verbindungSchliessen($verb);

?>