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
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<script src="../js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="../scripts/jquery.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<link rel="stylesheet" href="timeline.css">
<!-- -->
<script type="text/javascript" src="../js/fit/blocks.js"></script>

<script>
	var arrBlocks = new Array();
	var addNewBlock = function (block, num) {
		arrBlocks.push(block);
		var currentTime = new Date().getTime();
		$(".timeline")
			.append($('<li id='+num+'>')
				.append($('<div class="direction-l">')
					.append($('<div class="flag-wrapper">')
						.append($('<span class="flag">')
							.html("Block "+num+" : "+block.stateHash.substr(0,8)+"...")
						)
						.append($('<span class="active">')
						)
					)
					.append($('<img class="chain_img" onclick="updateBlockInfo($(this),'+num+')" style="cursor: pointer;" src="chain.png">')
					)
				)
			);
		//$("body").animate({ scrollTop: $("body")[0].scrollHeight }, 500);
	};
	var updateBlockInfo = function (div,num) {
		var path = "#" + div.parent().parent().attr('id') + " .direction-l .flag";
		console.log(path);
		var index = ($(path).text()).split(" ")[1] - 1;
		var block = arrBlocks[index];
		// make flag-wrapper white default
		$(".direction-l .flag").css('background-color', 'rgb(248,248,248)');
		$(".direction-l .flag").css('color', 'black');
		$(".direction-l .active").css('border-left-color', "rgb(248,248,248)");
		// make flag-wrapper green of fraunhofer
		$(path).css('background-color', '#14856b');
		$(path).css('color', '#fff');
		$("#" + div.parent().parent().attr('id') + " .direction-l .active").css('border-left-color', "#14856b");
		// make rounded image white default
		var default_path = ".direction-l .chain_img";
		$(default_path).css('top','50%');
		$(default_path).css('right','-65px');
		$(default_path).css('width','50px');
		$(default_path).css('height','50px');
		$(default_path).css('background','rgb(248,248,248)');
		// make rounded image green of fraunhofer
		var img_path = "#" + div.parent().parent().attr('id') + " .direction-l .chain_img";
		$(img_path).css('top','40%');
		$(img_path).css('right','-70px');
		$(img_path).css('width','60px');
		$(img_path).css('height','60px');
		$(img_path).css('background','#14856b');
		
		$("#detailsContainer .jumbotron").remove();
		$("#detailsContainer")
			.append($('<div class="jumbotron text-left">')
				.append($('<div class="row">')
					.append($('<table class="table table-hover table-sm">')
						.append($('<tbody>')
							.append($('<tr>')
								.append($('<th class="col-md-3" scope="row">')
									.html("Block "+num+" Hash:")
								)
								.append($('<td class="col-md-9" style="word-break:break-all;">')
									.html(block.stateHash)
								)
							)
						)
					)
				)
				.append($('<div class="row">')
					.append($('<table class="table table-hover table-sm">')
						.html(getHtmlString(block, num))
					)
				)
		);
	};
	var getHtmlString =  function (block, num) {
		    var html = "<thead><tr><th>Job</th><th>ID</th><th>Time</th><th>Service</th></tr></thead>";
			html = html+"<tbody>";
            for (var i = 0; i < block.transactions.length; i++) {
                var tx = block.transactions[i];
                var id = tx.txid; // Transaction ID
                var txTime = (new Date(1000 * tx.timestamp.seconds)+"").split(" (")[0]; // Transaction time, get rid of unnecessary string
                var payload = atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
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
</head>
   <body>
      <div class="navbar navbar-fixed-top navbar-default" style="zoom: 0.7;">
         <div class="container-fluid">
            <div class="row" id="headerContainer" style="background-color: #fff;">
				<div class="col-sm-4" style="padding-left:50px;"><img src="../images/fraunhofer.jpg" class="img-responsive"></div>
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
      <hr></hr><br></br>
      <!-- Main start -->
      <div class="container-fluid">
         <div class="row">
			<div class="col-md-1"></div>
            <div class="col-md-5" id="blockContainer">
               <!-- The Timeline -->
               <ul class="timeline">
					<!-- ---------------------- -->
					<!-- | Items will be here | -->
					<!-- ---------------------- 
					<li id="1">
						<div class="direction-l">
							<div class="flag-wrapper">
								<span class="flag">1</span>
								<span class="active"></span>
							</div>
							<img class="chain_img" onclick="updateBlockInfo($(this),1)" style="cursor: pointer;" src="chain.png">
						</div>
					</li>
					<li id="2">
						<div class="direction-l">
							<div class="flag-wrapper">
								<span class="flag">2</span>
								<span class="active"></span>
							</div>
							<img class="chain_img" onclick="updateBlockInfo($(this),1)" style="cursor: pointer;" src="chain.png">
						</div>
					</li>
					-->
               </ul>
            </div>
            <!-- appears in case of click -->
            <div class="col-md-5" id="detailsContainer">
				<br></br><br></br>
					<div class="jumbotron text-left">
						<h3>Please select a block for details</h3>
					</div>
					<!-- ---------------------- -->
					<!-- | Table will be here | -->
					<!-- ---------------------- 
					<div class="jumbotron text-left">
						<div class="row">
							<table class="table table-hover table-sm">
							  <tbody>
								<tr>
								  <th class="col-md-6" scope="row">Block 1 Hash :</th>
								  <td class="col-md-6" style="word-break:break-all;">0eQNoOfUG4TeleU1h3p7rNaEOGe0Hmn9sn6R2kVAJljl2dR8BwjB/wslbTegrMIqd9enxcYnXeAtxQO+j0WSKg==</td>
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
					-->
            </div>
			<div class="col-md-1"></div>
			
         </div>
      </div>
      <!-- Main end -->
	  <br></br><br></br><br></br>
      <!-- Footer -->
      <div class="navbar navbar-default navbar-fixed-bottom">
         <div class="container">
            <p class="navbar-text pull-left">© Fraunhofer Institute & RWTH Aachen University, SS2017</p>
         </div>
      </div>
      <!-- Footer -->
   </body>
</html>