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
        width: 50px;
        height: 50px;
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

    <form action="/verifizierung.php" method="post">
    <label>ID</label><br>
    <input type=text name='ID'><br>
    <label>Passwort</label><br>
    <input type=password name='Passwort'><br>
    <input type=submit value=Login>
    <!--<button class= "button button1" onclick=""></button>-->
    </form>
    
</body>
</html>