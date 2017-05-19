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
    <script type="text/javascript" src="./scripts/jquery.min.js"></script>
    <script>




    </script>
   </head>
   
   <body>
   	  <!-- Header-->
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-3">
               <img src="images/fraunhofer.jpg" class="img-responsive">
            </div>
            <div class="col-sm-6">
               <h1>Blockchain Web-Interface</h1>
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
						<strong id="bal">90</strong>
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
                        <tbody id="tbl2">
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
						  <th>Quantity</th>
					   </tr>
					</thead>
					<tbody id="tbl">
						<!-- 
						Filled from json js function
						-->
					</tbody>
				 </table>
			  </div>
                   &nbsp;
			  <!-- Main end -->
               <form>
                   <div class="form-group">
                       <label for="itm">Item ID:</label>
                       <input type="text" class="form-control" id="itm">
                   </div>
                   <div class="form-group">
                       <label for="qty">Quantity:</label>
                       <input type="text" class="form-control" id="qty">
                   </div>
                   <button type="button" onclick="buy()" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-shopping-cart"></span> Buy </button>
               </form>
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