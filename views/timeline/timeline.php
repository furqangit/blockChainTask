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
      <script src="../js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="timeline.css">
	  <script>
		var addNewBlock = function () {
			//var currentTime = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
			var currentTime = new Date().getTime();
			$(".timeline")
				.append($('<li id='+currentTime+'>')
					.append($('<div class="direction-l">')
						.append($('<div class="flag-wrapper">')
							.append($('<span class="flag">')
								.text(currentTime)
							)
						)
						.append($('<img class="chain_img" onclick="updateBlockInfo($(this))" style="cursor: pointer;" src="chain.png">')
						)
					)
				);
			$("body").animate({ scrollTop: $("body")[0].scrollHeight }, 500);
		};
		var updateBlockInfo = function (div) {
			var path = "#" + div.parent().parent().attr('id') + " .flag";
			$("#detailsContainer .jumbotron h4").text($(path).text());
		};
	  </script>
   </head>
   <body>
      <div class="navbar navbar-fixed-top navbar-default">
         <div class="container-fluid">
            <div class="row" style="background-color: #fff;">
				<div class="col-sm-4"><img src="../images/fraunhofer.jpg" class="img-responsive"></div>
				<div class="col-sm-8"><h1>Smart Vehicle Control System</h1></div>
				<button type="button" onclick="addNewBlock()" class="btn btn-primary">
					<span class="glyphicon glyphicon-refresh"></span> Add new block</button>
            </div>
         </div>
      </div>
      <hr></hr><br></br>
      <!-- Main start -->
      <div class="container-fluid">
         <div class="row">
            <div class="col-md-6" id="blockContainer">
               <!-- The Timeline -->
               <ul class="timeline">
					<!-- ---------------------- -->
					<!-- | Items will be here | -->
					<!-- ---------------------- -->
					<!--
					<li id="1">
						<div class="direction-l">
							<div class="flag-wrapper">
								<span class="flag">1</span>
							</div>
							<img class="chain_img" onclick="updateBlockInfo($(this))" style="cursor: pointer;" src="chain.png">
						</div>
					</li>
					-->
               </ul>
            </div>
            <!-- appears in case of click -->
            <div class="col-md-6" id="detailsContainer">
				<br></br><br></br><br></br>
				<div class="sidebar-nav-fixed affix">
					<div class="jumbotron text-center">
						<h4>Block details here</h4>
					</div>
				</div>
            </div>
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