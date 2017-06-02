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
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4"><img src="images/fraunhofer.jpg" class="img-responsive"></div>
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
                        <a href="#1" data-toggle="tab">Toll Collect</a>
                    </li>
                    <li><a href="#2" data-toggle="tab">Car Wash</a></li>
                    <li><a href="#3" data-toggle="tab">Parking</a></li>
                    <li><a href="#4" data-toggle="tab">UBER</a></li>
                </ul>
                <div class="tab-content ">
                    <div class="tab-pane active" id="1">
                        <div id="toll_collect">
                            <div class="jumbotron">
                                <div class="bs-example">
                                    <table class="table table-bordered table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Tool Plaza</th>
                                                <th>Price/Km ($)</th>
                                                <th>Balance ($)</th>
                                            </tr>
                                        </thead>
                                        <tbody id="toll_data">
                                            <tb>
                                                <td>Bonn</td>
                                                <td id="ppk"></td>
                                                <td id="tolbal"></td>
                                            </tb>
                                        </tbody>
                                    </table>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="itm">No of Kilometers driven:</label>
                                        <input type="text" class="form-control" id="itm">
                                    </div>
                                    <button type="button" onclick="toll_collect()" class="btn btn-primary pull-right">
                                        <span class="glyphicon glyphicon-road"></span> Use Street</button>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="2">
                        <div id="car_wash">
                            <div class="jumbotron">
                                <div class="bs-example">
                                    <table class="table table-bordered table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Company</th>
                                                <th>Availability</th>
                                                <th>Price ($)</th>
                                                <th>Balance ($)</th>
                                            </tr>
                                        </thead>
                                        <tbody id="car_wash_data">
                                            <tb>
                                                <td>Bonn Car Wash</td>
                                                <td id="avl"></td>
                                                <td id="cwPrc"></td>
                                                <td id="cwBal"></td>
                                            </tb>
                                        </tbody>
                                    </table>
                                </div>
                                <form>
<!--                                    <div class="form-group">
                                        <label for="itm">Company ID:</label>
                                        <input type="text" class="form-control" id="itm">
                                    </div>-->
                                    <button type="button" onclick="car_wash()" class="btn btn-primary pull-right">
                                        <span class="glyphicon glyphicon-refresh"></span> Wash Car</button>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="3">
                        <div id="car_parking">
                            <div class="jumbotron">
                                <div class="bs-example">
                                    <table class="table table-bordered table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Parking Plaza</th>
                                                <th>Availability</th>
                                                <th>Price ($)</th>
                                                <th>Balance ($)</th>
                                            </tr>
                                        </thead>
                                        <tbody id="car_parking_data">
                                            <tb>
                                                <td>Bonn Markt</td>
                                                <td id="prkAvl"></td>
                                                <td id="prkPrc"></td>
                                                <td id="prkBal"></td>
                                            </tb>
                                        </tbody>
                                    </table>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="itm">Park for Hours:</label>
                                        <input type="text" class="form-control" id="hrs">
                                    </div>
                                    <button type="button" onclick="car_parking()" class="btn btn-primary pull-right">
                                        <span class="glyphicon glyphicon-map-marker"></span> Park Car</button>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="4">
                        <div id="car_uber">
                            <div class="jumbotron">
                                <div class="bs-example">
                                    <table class="table table-bordered table-hover ">
                                        <thead>
                                            <tr>
                                                <th>Uber</th>
                                                <th>Price/Km ($)</th>
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
                                    <div class="form-group">
                                        <label for="itm">Drive Km:</label>
                                        <input type="text" class="form-control" id="km">
                                    </div>
                                    <button type="button" onclick="car_uber()" class="btn btn-primary pull-right">
                                        <span class="glyphicon glyphicon-magnet"></span> Go UBER</button>
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
