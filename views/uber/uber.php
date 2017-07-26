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
    <script type="text/javascript" src="./scripts/jquery.min.js"></script>
</head>
<body>
<div class="container-fluid">
    <div class="row" id="headerContainer">
        <div class="col-sm-4" style="padding-left:50px;"><img src="../images/fraunhofer.jpg" class="img-responsive"></div>
        <div class="col-sm-4" style="text-align:center;">
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
                    <a href="#1" data-toggle="tab">UBER</a>
                </li>
            </ul>
            <div class="tab-content ">
                <div class="tab-pane active" id="4">
                    <div id="car_uber">
                        <div class="jumbotron">
                            <div class="bs-example">
                                <table class="table table-bordered table-hover ">
                                    <thead>
                                    <tr>
                                        <th>Uber</th>
                                        <th>Rent/Km ($)</th>
                                        <th>Customer's Balance ($)</th>
                                    </tr>
                                    </thead>
                                    <tbody id="car_uber_data">
                                    <tb>
                                        <td>Bonn Uber Service</td>
                                        <td id="ubrPrc"></td>
                                        <td id="ubrBal"></td>
                                    </tb>
                                    </tbody>
                                </table>
                            </div>
                            <form>
                                <div class="col-lg-12">
                                    <div class="col-lg-8">
                                        <label for="km">Kilometers</label>
                                        <input id="km" type="text" class="form-control">
                                    </div>
                                    <div class="col-lg-4" style="padding-top: 26px">
                                        <button type="button" onclick="car_uber()" class="btn btn-primary pull-right">
                                            <span class="glyphicon glyphicon-magnet"></span> Go UBER
                                        </button>
                                    </div>
                                </div>
                                <br>
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
