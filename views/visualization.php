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
	<script type="text/javascript" src="js/fit/blocks.js"></script>
    <link rel="stylesheet" type="text/css" href="css/fit/fit.css">
    <script type="text/javascript" src="./scripts/jquery.min.js"></script>
</head>
<body>
	<div class="navbar navbar-fixed-top navbar-default" style="zoom: 0.7;">
	 <div class="container-fluid">
		<div class="row" id="headerContainer" style="background-color: #fff;">
			<div class="col-sm-4" style="padding-left:50px;"><img src="images/fraunhofer.jpg" class="img-responsive"></div>
			<div class="col-sm-4" style="text-align:center;">
				<h1>Smart Vehicle Control System</h1>
				<h2>Activity Log of Blocks</h2>
				<style>
					h2{
						font-weight: bold;
						color: #14856b;
					}
				</style>
			</div>
			<div class="col-sm-4"></div>
		</div>
	 </div>
	</div>
	<br></br>
	<script>
		var addNewBlock = function (block,num) {
		    var gen_data = {
		        Hash: block.stateHash.substr(0,8)+'..',
                ChainCodes: block.transactions.length,
            };
			$("#blockContainer")
				.append($('<div class="col-sm-3">')
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
		var chaincodes = {
			"42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c": "Carwash",
			"8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77": "Park",
			"28ce4c27f62002f5432c1b4888d6d3948e136167b4f40404e8bff24af63b766af3186d6dd7cd12f74cfa7d1d80b36bb785c7499bacf6b416348b48f40ffead81": "Uber",
			"4a628b196cc9ec33002cc2169cba4c2bd2801b96c6f8a1c7711fa70f0cabfe4023bdcf8832d7f35b8470b6faf04e8e440123340666cef3093ef47cd73828a187": "Toll collect",
			"aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300": "Car"
		}
		var getHtmlString =  function (block,num) {
		    var html = "<thead><tr><th>Job</th><th>tID</th><th>tTime</th><th>Service</th></tr></thead>";
			html= html+"<tbody>";
            for (var i = 0; i < block.transactions.length; i++) {
				var tx = block.transactions[i];
				var id = tx.txid; // Transaction ID
				var name = chaincodes[atob(tx.chaincodeID).substring(3)];
				var txTime = (new Date(1000 * tx.timestamp.seconds)+"").split(" (")[0]; // Transaction time, get rid of unnecessary string
				var payload = name + " " + atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
				html = html+"<tr>";
				html = html+"<th class='col-md-1' scope='row'>"+(i+1)+"</th>";
				html = html+"<td class='col-md-5' style='word-break:break-all;'>"+id+"</td>";
				html = html+"<td class='col-md-3' style='word-break:break-word;'>"+txTime+"</td>";
				html = html+"<td class='col-md-3' style='word-break:break-word;'>"+payload+"</td>";
				html = html+"</tr>";
            }
			html= html+"</tbody>";
		    return html;
        }
	</script>
	<hr></hr>
    <!-- blockContainer starts -->
    <div class="container-fluid" id="blockContainer" style="zoom: 0.8;">

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
			  <td class="col-md-3" style="word-break:break-word;">Thu Jun 01 2017 18:32:16 GMT+0200 (W. Europe Daylight Time)</td>
			  <td class="col-md-3" style="word-break:break-word;">spend 50 carwash</td>
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
