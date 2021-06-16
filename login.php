<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include 'db_verbindung.php';
        $verb = verbindungHerstellen();
        $id = 1234;
        $passwort  = 'poggers';
        $sql = "SELECT ID,Passwort FROM BENUTZER WHERE EXISTS 
        (SELECT ID,Passwort FROM BENUTZER WHERE ID = 1234 AND Passwort = 'poggers')";
        $ergebnis = $verb->query($sql) or die($verb->error);;

            while($row = $ergebnis->fetch_assoc()) 
            {
              echo "id: " . $row["ID"]. " - Passwort: " . $row["Passwort"]. "<br>";
            }
        
        verbindungSchliessen($verb);

        if($ergebnis)
        {
            echo("POGCHAMP");
        }
    ?>
    <script src="login.js"></script>
</body>
</html>