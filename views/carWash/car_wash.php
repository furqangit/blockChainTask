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
    <!-- Optional Bootstrap theme -->
    <link rel="stylesheet" href="../css/bootstrap-theme.min.css">
    <script src="../js/jquery-3.2.1.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <!-- Extra imports for FIT coin -->
    <link rel="stylesheet" type="text/css" href="../css/fit/fit.css">
    <script type="text/javascript" src="../js/fit/fit.js"></script>
    <script type="text/javascript" src="../scripts/jquery.min.js"></script>
	<!-- Bootstrap toggle imports, http://www.bootstraptoggle.com/ -->
	<link rel="stylesheet" type="text/css" href="../css/bootstrap-toggle.min.css">
	<script type="text/javascript" src="../js/bootstrap-toggle.min.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4"><img src="../images/fraunhofer.jpg" class="img-responsive"></div>
            <div class="col-sm-4">
                <h1>Smart Vehicle Control System</h1></div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <hr></hr>
                <div class="input-group">
                    <span class="input-group-addon"><strong>Your Balance : </strong></span>
                    <div class="form-control" style="text-align:right;">
                        <strong id="bal"></strong>
                    </div>
                    <span class="input-group-addon"><strong>$</strong></span>
                </div>
            </div>
            <div class="col-sm-4"></div>
        </div>
    </div>
    <!-- Main start-->
    <div class="container-fluid">
        <br></br>
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <div id="exTab2">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#1" data-toggle="tab">CAR WASH</a>
                    </li>
                </ul>
                <div class="tab-content ">
                    <div class="tab-pane active" id="2">
                        <div id="car_wash">
                            <div class="jumbotron">
                                <div class="bs-example">
                                    <table class="table table-bordered table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Company</th>
                                                <th>Availability</th>
                                                <th>Balance ($)</th>
                                            </tr>
                                        </thead>
                                        <tbody id="car_wash_data">
                                            <tb>
                                                <td>Bonn Car Wash</td>
                                                <td id="avl">
													<input type="checkbox" id="toggle-trigger" checked data-toggle="toggle" data-on="Ready" data-off="Busy" data-onstyle="success" data-offstyle="danger">
													<script>
													  $(function() {
													    $($('#btnCarWash')).prop('disabled', !$(this).prop('checked'));
														$('#toggle-trigger').change(function() {
															var toggle_value = $(this).prop('checked');
															var button = $('#btnCarWash');
															if(toggle_value){
																$(button).prop('disabled', true);
															}
															else{$(button).prop('disabled', false);}
														})
													  })
													</script>
												</td>
                                                <td id="cwBal"></td>
                                            </tb>
                                        </tbody>
                                    </table>
                                </div>
                                <form>
                                    <button type="button" id="btnCarWash" onclick="car_wash()" class="btn btn-primary pull-right">
                                        <span class="glyphicon glyphicon-refresh"></span> Wash Car</button>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-3"></div>
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
