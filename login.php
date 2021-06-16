<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .button{
        width: 150px;
        height: 100px;
        border:black;
        color: black;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: incline-block;
        font-size: 16px;
        margin: 6px 8px;
        transition-duration: 0.4s;
        cursor: pointer;
    }
    .button1 {
        background-color: blueviolet;
        color: black;
        border: black;
    }
</style>
<body>
    <input type=text>
    <button class= "button button1" onclick=""></button>
    <script type="javascript/text">

    </script>

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
</body>
</html>