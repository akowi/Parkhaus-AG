<?php
session_start();
if (!isset($_SESSION['eingeloggt'])) 
{
	header('Location: index.html');
	exit;
}
$admin = $_SESSION['admin']["Admin"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<style>
    .button{
        width: 150px;
        height: 100px;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: incline-block;
        font-size: 16px;
        margin: 6px 8px;
        transition-duration: 0.4s;
        cursor: pointer;
        outline: 0;
    }
    .button1 {
        background-color: transparent;
        color: none;
        border: none;
        position: absolute;
    }
    .button1:hover {
        background-color: rgba(255,255,255,0.5);
        color: none;
    }
    .button2 {
        background-color: lightgray;
        color: black;
        border: 2px solid black;
        border-radius: 8px;
        position: absolute;
        top: 100px;
        left: 1200px;
    }
    .button2:hover {
        background-color: rgba(255,255,255,0.5);
        color: black;
    }
</style>
</head>
<body>

    <php?
    
    ?>

    <script type="text/javascript">var admin = "<?= $admin ?>";</script>
    <script src="parkplatz.js"></script>
    <script src="parkhalle.js"></script>
    <script src="main.js"></script>
    <!--button id = "button" class="button button1">Freistellen</button-->
    
</body>
</html>