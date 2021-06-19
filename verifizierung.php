<?php
session_start();
include 'db_verbindung.php';
$verb = verbindungHerstellen();
$id = $_POST['ID'];  
$passwort = $_POST['Passwort'];  


$id = stripcslashes($id);  
$passwort = stripcslashes($passwort);  
$id = mysqli_real_escape_string($verb, $id);  
$passwort = mysqli_real_escape_string($verb, $passwort);  
      
$sql = "SELECT ID,Passwort FROM BENUTZER WHERE ID = $id AND Passwort = '$passwort'";
$ergebnis = $verb->query($sql) or die($verb->error);
$anzahl = mysqli_num_rows($ergebnis);

if($anzahl==1)
{
    session_regenerate_id();
    $_SESSION['eingeloggt'] = true;
    $_SESSION['id'] = $id;

    $sql = "SELECT Admin FROM BENUTZER WHERE ID = $id AND Passwort = '$passwort'";
    $ergebnis = $verb->query($sql) or die($verb->error);
    $_SESSION['admin'] = mysqli_fetch_assoc($ergebnis);
    //echo($_SESSION['admin']["Admin"]);
    
    header("Location:home.php",true,301);
    /*while($row = $ergebnis->fetch_assoc()) 
    {
        echo "id: " . $row["ID"]. " - Passwort: " . $row["Passwort"]. "<br>";
    }*/
}
else
{
    header("Location:index.html",true,301);
    exit();
}
verbindungSchliessen($verb);

?>