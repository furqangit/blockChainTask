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
      <script type="text/javascript" src="js/fit/fit.js"></script>
   </head>
   <body>
   	  <!-- Header-->
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-3">
               <img src="images/fraunhofer.jpg" class="img-responsive">
            </div>
            <div class="col-sm-6">
               <h1>Blockchain Web-Interface for FIT Coin</h1>
            </div>
            <div class="col-sm-3"></div>
         </div>
      </div>
	  <br></br><br></br>
	  <!-- Header-->
      <!-- Main start-->
      <div class="container">
         <div class="row">
		 <!-- Left start -->
		 <div class="col-md-6" id="purchased">
               <div class="jumbotron">
                  <div class="input-group">
                     <span class="input-group-addon"><strong>Your Balance : </strong></span>
                     <div class="form-control" style="text-align:right;">
						<strong>90</strong>
					 </div>
                     <span class="input-group-addon"><strong>$</strong></span>
                  </div>
                  &nbsp;
                  <p>Purchased Products</p>
                  <div class="bs-example">
                     <table class="table table-bordered table-hover">
                        <thead>
                           <tr>
                              <th>ID</th>
                              <th>Item</th>
                              <th>Price ($)</th>
							  <th>Quantity</th>
                           </tr>
                        </thead>
                        <tbody>
							<!-- 
								Filled from json js function
							-->
                        </tbody>
                     </table>
                  </div>
				  <!-- Main end -->
               </div>
		</div>
		<!-- Left end -->
		<!-- Right start -->
		<div class="col-md-6" id="buy">
		   <div class="jumbotron">
			  <!-- Main start -->
			  <p>Available Products</p>
			  <div class="bs-example">
				 <table class="table table-bordered table-hover ">
					<thead>
					   <tr>
						  <th>ID</th>
						  <th>Item</th>
						  <th>Price ($)</th>
						  <th>Owner</th>
						  <th>Quantity</th>
					   </tr>
					</thead>
					<tbody>
						<!-- 
						Filled from json js function
						-->
					</tbody>
				 </table>
			  </div>
			  <button type="button" onclick="javascript:alertFunc();" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-shopping-cart"></span> Buy </button>
			  &nbsp;
			  <!-- Main end -->
		   </div>
		</div>
			<!-- Right end -->
         </div>
      </div>
      <!-- Middle end -->
<!-- Footer -->
  <div class="navbar navbar-default navbar-fixed-bottom">
	 <div class="container">
		<p class="navbar-text pull-left">© Fraunhofer Institute & RWTH Aachen University, SS2017</p>
	 </div>
  </div>
<!-- Footer -->
   </body>
</html>