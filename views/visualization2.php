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
    <script type="text/javascript" src="./scripts/jquery.min.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row" id="headerContainer">
            <div class="col-sm-4" style="padding-left:50px;"><img src="images/fraunhofer.jpg" class="img-responsive"></div>
            <div class="col-sm-4" style="text-align:center;">
                <h1>Smart Vehicle Control System</h1>
                <h2>Activity Log of Blocks</h2>
			</div>
            <div class="col-sm-4"></div>
        </div>
    </div>
	<script>
		var addNewBlock = function (block,num) {
		    var gen_data = {
		        Hash: block.stateHash.substr(0,8)+'..',
                ChainCodes: block.transactions.length,
            }
			$("#blockContainer")
				.append($('<div class="col-sm-4">')
					.append($('<div class="jumbotron text-left">')
						.append($('<div class="row">')
							.append($('<table class="table table-hover table-sm">')
								.append($('<tbody>')
									.append($('<tr>')
										.append($('<th class="col-md-6" scope="row">')
											.html("Block "+num+" Hash Code:")
										)
										.append($('<td class="col-md-6" style="word-break:break-all;">')
											.html(block.stateHash.substr(0,8)+"...")
										)
									)
								)
							)
						)
						.append($('<div class="row">')
							.append($('<table class="table table-hover table-sm">')
								.html(getHtmlString(block))
							)
						)
					)
				)
		};
		var getHtmlString =  function (block,num) {
		    var html = "<thead><tr><th>Job</th><th>tID</th><th>tTime</th><th>Service</th></tr></thead>";
			html= html+"<tbody>";
            for (var i = 0; i < block.transactions.length; i++) {
                var tx = block.transactions[i];
                var id = tx.txid; // Transaction ID
                var txTime = (new Date(1000 * tx.timestamp.seconds)+"").split(" (")[0]; // Transaction time, get rid of unnecessary string
                var payload = atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
				html = html+"<tr>";
				html = html+"<th class='col-md-1' scope='row'>"+(i+1)+"</th>";
                html = html+"<td class='col-md-5' style='word-break:break-all;'>"+id+"</td>";
                html = html+"<td class='col-md-3' style='word-break:break-all;'>"+txTime+"</td>";
                html = html+"<td class='col-md-3' style='word-break:break-all;'>"+payload+"</td>";
				html = html+"</tr>";
            }
			html= html+"</tbody>";
		    return html;
        }
	</script>
	<hr></hr>
    <!-- blockContainer starts -->
    <div class="container-fluid" id="blockContainer">
<!-- Example block code
<div class="col-sm-4">
	<div class="jumbotron text-left">
	<div class="row">
		<table class="table table-hover table-sm">
		  <tbody>
			<tr>
			  <th class="col-md-6" scope="row">Block 1 Hash Code:</th>
			  <td class="col-md-6" style="word-break:break-all;">d693dc580b3</td>
			</tr>
		  </tbody>
		</table>
	</div>
	<div class="row">
		<table class="table table-hover table-sm">
		  <thead>
			<tr>
			  <th>Job</th>
			  <th>tID</th>
			  <th>tTime</th>
			  <th>Service</th>
			</tr>
		  </thead>
		  <tbody>
			<tr>
			  <th class="col-md-1" scope="row">1</th>
			  <td class="col-md-5" style="word-break:break-all;">d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3</td>
			  <td class="col-md-3" style="word-break:break-all;">Thu Jun 01 2017 18:32:16 GMT+0200 (W. Europe Daylight Time)</td>
			  <td class="col-md-3" style="word-break:break-all;">c5461e7c15bb8dc70f248c0e17073c3e338d31bb4d112 init hi there</td>
			</tr>
		  </tbody>
		</table>
	</div>
</div>
</div>
-->
    </div>
	<!-- blockContainer ends -->
    <!-- Footer -->
    <div class="navbar navbar-default navbar-fixed-bottom">
        <div class="container">
            <p class="navbar-text pull-left">© Fraunhofer Institute & RWTH Aachen University, SS2017</p>
        </div>
    </div>
    <!-- Footer -->
</body>

</html>
