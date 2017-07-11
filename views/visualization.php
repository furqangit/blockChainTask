<!DOCTYPE html>
<html>
<?php
  /**
   * Created by PhpStorm.
   * User: Furqan Mehmood
   * Date: 5/15/2017
   * Time: 4:45 PM
   */
  ?>
<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blockchain Web-Interface</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- Optional Bootstrap theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Extra imports for FIT coin -->
    <link rel="stylesheet" type="text/css" href="css/fit/fit.css">
    <script type="text/javascript" src="js/fit/blocks.js"></script>
    <!--
	<script type="text/javascript" src="js/fit/fit.js"></script>
	-->
    <script type="text/javascript" src="./scripts/jquery.min.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4"><img src="images/fraunhofer.jpg" class="img-responsive"></div>
            <div class="col-sm-4">
                <h1>Smart Vehicle Control System</h1></div>
            <div class="col-sm-4"></div>
        </div>
    </div>
	<hr></hr>
	<div style="text-align:center;">
		<button type="button" onclick="addNewBlock()" class="btn btn-primary">
			<span class="glyphicon glyphicon-refresh"></span> Add new block</button>
	</div>
	<script>
		var addNewBlock = function (block) {
		    var gen_data = {
		        Hash: block.stateHash.substr(0,8)+'..',
                ChainCodes: block.transactions.length,
            }
			$("#blockContainer")
				.append($('<div class="col-sm-2">')
					.append($('<div class="jumbotron text-center">')
						.append($('<div class="row">')
							.append($('<p style="font-size: small">')
								.html(getHtmlString(block))
							)

						)
					)
				)
		};

		var getHtmlString =  function (block) {
		    var html = "Block-Hash: "+block.stateHash.substr(0,5)+".. ";
            html= html+"<tr><th>tID</th><th>tTime</th><th>Serivice</th></tr>";
            for (var i = 0; i < block.transactions.length; i++) {
                var tx = block.transactions[i];
                var id = tx.txid; // Transaction ID
                var txTime = new Date(1000 * tx.timestamp.seconds); // Transaction time
                var payload = atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
                html = html+"<tr><td style='font-size: xx-small'>"+id+"</td>";
                html = html+"<td style='font-size: xx-small'>"+txTime+"</td>";
                html = html+"<td style='font-size: xx-small'>"+payload+"</td></tr>";
            }

		    return html;
        }
	</script>

	<hr></hr>
    <!-- Main start -->
    <div class="container-fluid" id="blockContainer">
    </div>
	
    <!-- Footer -->
    <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="container">
            <p class="navbar-text pull-left">© Fraunhofer Institute & RWTH Aachen University, SS2017</p>
        </div>
    </div>
    <!-- Footer -->
</body>

</html>
