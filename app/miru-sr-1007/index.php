<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="-1">
        <title>CDL Room | Miru SR-1007</title>
        <?php include '../includes/head.html'?>
    </head>
    <body>
        <?php
            include '../includes/header.html';
            // include '../includes/product-details-mirusr1007.html';

            if($_GET['utm'] == 'black-friday'){include '../includes/product-details-mirusr1007-black-friday.html'; }
            else{include '../includes/product-details-mirusr1007.html'; };

            include '../includes/footer.html';
            include '../includes/ymcounter.html';
        ?>
    </body>
</html>