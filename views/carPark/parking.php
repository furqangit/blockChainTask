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
                    <a href="#1" data-toggle="tab">PARKING</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="3">
                    <div id="car_parking">
                        <div class="jumbotron">
                            <div class="bs-example">
                                <table class="table table-bordered table-hover ">
                                    <thead>
                                    <tr>
                                        <th>Parking Plaza</th>
                                        <th>Price/Hr ($)</th>
                                        <th>Availability</th>
                                        <th>Balance ($)</th>
                                    </tr>
                                    </thead>
                                    <tbody id="car_parking_data">
                                    <tb>
                                        <td>Bonn Markt</td>
                                        <td id="prkPrc"></td>
                                        <td id="prkAvl">
                                            <input type="checkbox" id="toggle-trigger" checked data-toggle="toggle"
                                                   data-on="Free" data-off="Full" data-onstyle="success"
                                                   data-offstyle="danger">
                                            <script>
                                                $(function () {
                                                    //$($('#btnCarPark')).prop('disabled', !$(this).prop('checked'));
                                                    $('#toggle-trigger').change(function () {
                                                        var toggle_value = $(this).prop('checked');
                                                        var button = $('#btnCarPark');
                                                        if (toggle_value) {
                                                            $(button).prop('disabled', false);
                                                        }
                                                        else {
                                                            $(button).prop('disabled', true);
                                                        }
                                                    })
                                                })
                                            </script>
                                        </td>
                                        <td id="prkBal"></td>
                                    </tb>
                                    </tbody>
                                </table>
                            </div>
                            <form>
                                <br>
                                <div class="col-lg-12">

                                    <div class="col-lg-8">
                                        <label for="hrs">Hours</label>
                                        <input id="hrs" type="text" class="form-control">
                                    </div>
                                    <div class="col-lg-4" style="padding-top: 26px">
                                        <button type="button" id="btnCarPark" onclick="car_parking()"
                                                class="btn btn-primary pull-right">
                                            <span class="glyphicon glyphicon-map-marker"></span> Park Car
                                        </button>
                                        <!--
                                        <script>
                                            var buttonValue = $('#toggle-trigger').
                                            alert(buttonValue);
                                        </script>
                                        -->
                                    </div>
                                </div>

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
