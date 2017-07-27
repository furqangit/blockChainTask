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
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <!-- Optional Bootstrap theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <script src="js/jquery-3.2.1.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Extra imports for FIT coin -->
    <link rel="stylesheet" type="text/css" href="css/fit/fit.css">
    <link rel="stylesheet" type="text/css" href="css/fit/timeline.css">
    <script type="text/javascript" src="js/fit/fit.js"></script>
    <script type="text/javascript" src="js/fit/timeline.js"></script>
    <script type="text/javascript" src="js/fit/blocks.js"></script>
    <!-- Bootstrap toggle imports, http://www.bootstraptoggle.com/ -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap-toggle.min.css">
    <script type="text/javascript" src="js/bootstrap-toggle.min.js"></script>
</head>
<body>
    <!-- Header-->
    <div class="container-fluid" id="headerContainer">
        <div class="row" id="headerRow">
            <div class="col-sm-4" style="padding-left:50px;"><img src="images/fraunhofer.jpg" class="img-responsive"></div>
            <div class="col-sm-4" style="text-align:center;">
                <h1>Smart Vehicle Control System</h1></div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row" id="balanceRow">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <hr></hr>
                <div class="input-group">
                    <span class="input-group-addon"><strong>Your Balance: </strong></span>
                    <div class="form-control" style="text-align:right;">
                        <strong id="bal"></strong>
                    </div>
                    <span class="input-group-addon"><strong>$</strong></span>
                </div>
                <!--<div style="display: table; margin: 0 auto; padding-top:10px;">
                    <button type="button" class="btn btn-success pull-right" id="btn_start" onclick="startDriving()">
                      <span class="glyphicon glyphicon-road"></span> Start Driving
                    </button>
                    <button type="button" class="btn btn-danger pull-right"  id="btn_stop" onclick="stopDriving()" style="display: none;">
                      <span class="glyphicon glyphicon-off"></span> Stop Driving
                    </button>
                    <script type="text/javascript">
                        var startDriving = function(){
                          $('#btn_stop').show();
                          $('#btn_start').hide();

                            $('#btnCarPark').prop('disabled',false);
                            $('#btnCarWash').prop('disabled',false);
                        //  $('#mainContainer').show();
                          callMainData();
                        };
                        var stopDriving = function(){
                          $('#btn_stop').hide();
                          $('#btn_start').show();
                            $('#btnCarPark').prop('disabled',true);
                            $('#btnCarWash').prop('disabled',true);
                            location.reload();
                         // $('#mainContainer').hide();
                        };
                    </script>
                </div>-->
            </div>
            <div class="col-sm-4"></div>
        </div>
    </div>
    <!-- Main start-->
    <div class="container-fluid" id="mainContainer" style="display: true;">
      <div class="col-md-12"><div class="row">
        <div class="col-md-10">
          <div class="row">
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
                                              <th>Price ($)</th>
                                            </tr>
                                            </thead>
                                            <tbody id="car_wash_data">
                                            <tb>
                                              <td>Bonn Car Wash</td>
                                              <td id="avl">
                                                  <input type="checkbox" id="wash_toggle-trigger" checked data-toggle="toggle"
                                                         data-on="Free" data-off="Full" data-onstyle="success" data-offstyle="danger">
                                                  <script>
                                                    $(function(){
                                                     // $('#btnCarWash').prop('disabled', true);
                                                    });
                                                  </script>
                                              </td>
                                              <td id="cwBal"></td>
                                              <td id="cwPrc"></td>
                                            </tb>
                                            </tbody>
                                        </table>
                                    </div>
                                    <form>
                                      <button type="button" id="btnSendToScreen" onclick="wash_screen()" class="btn btn-primary">
                                          <span class="glyphicon glyphicon-send"></span> Send data to screen
                                      </button>
                                      <button type="button" id="btnPullRfid" onclick="pull_rfid()" class="btn btn-primary">
                                          <span class="glyphicon glyphicon-bell"></span> Pull data
                                      </button>
                                      <button type="button" id="btnCarWash" onclick="car_wash()" class="btn btn-primary pull-right">
                                          <span class="glyphicon glyphicon-refresh"></span> Wash Car
                                      </button>
                                    </form>
                                    <hr></hr>
                                    <a href="#" id="wash_warningMsg_toggleOn">* Please first switch the availability status for washing!</a>
                                    <a href="#" id="wash_warningMsg_toggleOff">* Please wait for current car to finish!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
              <div id="exTab2">
                  <ul class="nav nav-tabs">
                      <li class="active">
                          <a href="#1" data-toggle="tab">CAR PARKING</a>
                      </li>
                  </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="3">
                          <div id="carparking">
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
                                                <input type="checkbox" id="park_toggle-trigger" checked data-toggle="toggle"
                                                    data-on="Free" data-off="Full" data-onstyle="success" data-offstyle="danger">
                                                <script>
                                                  $(function(){
                                                      //getParkingAvailability();
                                                  //  $('#btnCarPark').prop('disabled', true);
                                                   // $('#hrs').prop('disabled', true);*/
                                                  });
                                                </script>
                                            </td>
                                            <td id="prkBal"></td>
                                          </tb>
                                        </tbody>
                                      </table>
                                  </div>
                                  <form class="form-inline">
                                    <label for="hrs">Hours: </label>
                                    <input id="hrs" type="text" class="form-control">
                                    <button type="button" id="btnCarPark" onclick="car_parking()" class="btn btn-primary pull-right">
                                    	<span class="glyphicon glyphicon-map-marker"></span> Park Car
                                    </button>
                                  </form>
                                  <hr></hr>
                                  <a href="#" id="park_warningMsg_toggleOn">* Please first switch the availability status for parking!</a>
                                  <a href="#" id="park_warningMsg_toggleOff">* Please wait for current car to finish!</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
                <div id="exTab2">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a href="#1" data-toggle="tab">TOLL COLLECT</a>
                        </li>
                    </ul>
                    <div class="tab-content ">
                        <div class="tab-pane active" id="1">
                            <div id="toll_collect">
                                <div class="jumbotron">
                                    <div class="bs-example">
                                        <table class="table table-bordered table-hover ">
                                            <thead>
                                            <tr>
                                                <th>Toll Plaza</th>
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
                                    <form class="form-inline">
                                        <label for="itm">Kilometers: </label>
                                        <input id="itm" type="text" class="form-control">
                                        <button type="button" onclick="toll_collect()" class="btn btn-primary pull-right">
                                            <span class="glyphicon glyphicon-road"></span> Use Street
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                  <form class="form-inline">
                                      <label for="km">Kilometers: </label>
                                      <input id="km" type="text" class="form-control">
                                      <button type="button" onclick="car_uber()" class="btn btn-primary pull-right">
                                          <span class="glyphicon glyphicon-magnet"></span> Go UBER
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div><!-- End of col-md-10 for 4 sections -->
        <!-- The Timeline -->
        <div class="col-md-2">
            <!-- Bootstrap Modal Pop-up -->
            <div class="modal fade" id="myModal">
             <div class="modal-dialog modal-lg">
                <div class="modal-content">
                   <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h3 class="modal-title">Block #1 Details</h3>
                   </div>
                   <div class="modal-body">
                     <div class="row">
                         <table class="table table-hover table-sm">
                           <tbody>
                           <tr>
                             <th class="col-md-2" scope="row">Hash Value:</th>
                             <td class="col-md-10 text-left" style="word-break:break-all; text-align:left">0eQNoOfUG4TeleU1h3p7rNaEOGe0Hmn9sn6R2kVAJljl2dR8BwjB/wslbTegrMIqd9enxcYnXeAtxQO+j0WSKg==</td>
                           </tr>
                           </tbody>
                         </table>
                       </div>
                       <div class="row">
                         <table class="table table-hover table-sm">
                           <thead>
                           <tr>
                             <th>Job</th><th>tID</th><th>tTime</th><th>Service</th>
                           </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <th class="col-md-1" scope="row">1</th>
                               <td class="col-md-5" style="word-break:break-all;">d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3</td>
                               <td class="col-md-3" style="word-break:break-word;">Thu Jun 01 2017 18:32:16 GMT+0200 (W. Europe Daylight Time)</td>
                               <td class="col-md-3" style="word-break:break-word;">spend 50 carwash</td>
                             </tr>
                             <tr>
                               <th class="col-md-1" scope="row">2</th>
                               <td class="col-md-5" style="word-break:break-all;">d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3</td>
                               <td class="col-md-3" style="word-break:break-word;">Thu Jun 01 2017 18:32:16 GMT+0200 (W. Europe Daylight Time)</td>
                               <td class="col-md-3" style="word-break:break-word;">spend 50 carwash</td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                   </div>
                </div>
             </div>
            </div>
            <div id="exTab2">
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#1" data-toggle="tab">BLOCKCHAIN  ACTIVITY</a>
                </li>
              </ul>
            </div>
            <ul class="">
                <!-- Items will be here
                <li id="1">
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="flag">#1: example-example</span>
                      <span class="active"></span>
                    </div>
                    <img class="chain_img" tabindex="50" data-placement="left" onclick="updateBlockInfo($(this),1)" style="cursor: pointer;" src="images/chain.png">
                  </div>
                </li>
                <li id="2">
                  <div class="direction-l">
                    <div class="flag-wrapper">
                      <span class="flag">#2: example-example</span>
                      <span class="active"></span>
                    </div>
                    <img class="chain_img" tabindex="50" data-placement="left" onclick="updateBlockInfo($(this),2)" style="cursor: pointer;" src="images/chain.png">
                  </div>
                </li>
                -->
            </ul>
        </div><!-- End of col-md-2 for blocks timeline -->
      </div></div><!-- End of col-md-12 -->
    </div> <!-- End of container fluid -->
    <!-- Footer -->
    <div class="navbar navbar-default navbar-fixed-bottom navbar-md">
        <div class="container">
            <h5 class="navbar-text pull-left">© Fraunhofer Institute & RWTH Aachen University, SS2017</h5>
        </div>
    </div>
    <!-- Footer -->
</body>
</html>
