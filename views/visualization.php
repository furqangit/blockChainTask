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
		var addNewBlock = function () {
			$("#blockContainer")
				.append($('<div class="col-sm-2">')
					.append($('<div class="jumbotron text-center">')
						.append($('<div class="row">')
							.append($('<h4>')
								.text("Block hash no and info")
							)
						)
					)
				)
		};
	</script>

	<hr></hr>
    <!-- Main start -->
    <div class="container-fluid" id="blockContainer">
        <div class="col-sm-2">
			<div class="jumbotron text-center">
			  <div class="row">
				<h4>Block hash no and info</h4>
			  </div>
			</div>
		</div>
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
