function alertFunc() {
		alert("no available function !");
}
var err = "";
var err_
 var height = 0;
 var last_timestamp = 0;
 var rfid_codes = {
    "carwash": "5b36312c203139322c2033392c2039382c203138345d",
    "parking": "",
    "toll": "",
    "uber": ""
 }

$(document).ready(function() {
	//getBalance();
    callMainData();//toggleParking();
});

function callMainData() {
	var data = {
		"enrollId" : "admin",
		"enrollSecret" : "dfb03c0214"
	};
	var data_json = JSON.stringify(data);

	$.ajax({
		url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/registrar",
		type: 'post',
		dataType: 'json',
		data: data_json,
		async: false,
		success: function (result) {
			getBalance();
			getTollPrice();
			getTollBalance();
			getCWBalance();
			getCWPrice();
			getCWAvailability();
			getParkingBalance();
			getParkingPrice();
			getParkingAvailability();
			getUberBalance();
			getUberPrice();
		},
		error: function(error){
			alert("Unable to connect to chain code!");
		}
	});
	last_timestamp = Date.now();
	display_data();
	pull_rfid(true);
}

//----------- C A R--------------------------------------------------
function getBalance() {
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "balance",

            },
            "secureContext": "admin"
        },
        "id": 2
    };

    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async:false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#bal").html(result.result.message);
        },
        error: function(error)
        {
            console.log(error.statusText);
        }

    });
}

function checkCarAvail() {
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "available",

            },
            "secureContext": "admin"
        },
        "id": 2
    };

    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async:false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            // DO STUFF HERE
        },
        error: function(error)
        {
            console.log(error.statusText);
        }

    });
}

function spend(sum,purpose) {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "spend",
                "args": [
                    ""+sum+"",
                    purpose
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: true,
        cache: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            location.reload();
            //callMainData();
        },
        error: function (error) {
            alert(error.statusText);
            console.log(error);
        }

    });
}

function earn(sum,source) {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "earn",
                "args": [
                    ""+sum+"",
                    source
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            alert("Enjoy they Ride!");
            location.reload();
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function acquire() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "acquire",
                "args": []
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            // DO STUFF
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function release() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300"
            },
            "ctorMsg": {
                "function": "release",
                "args": []
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            // DO STUFF
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

//--------------T O L L-----------------------------------------------------
function getTollPrice() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "4a628b196cc9ec33002cc2169cba4c2bd2801b96c6f8a1c7711fa70f0cabfe4023bdcf8832d7f35b8470b6faf04e8e440123340666cef3093ef47cd73828a187"
            },
            "ctorMsg": {
                "function": "price",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#ppk").html(result.result.message);
            result_data = result.result.message;
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
    return result_data;
}

function getTollBalance() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "4a628b196cc9ec33002cc2169cba4c2bd2801b96c6f8a1c7711fa70f0cabfe4023bdcf8832d7f35b8470b6faf04e8e440123340666cef3093ef47cd73828a187"
            },
            "ctorMsg": {
                "function": "balance",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#tolbal").html(result.result.message);
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function payToll(amount) {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "4a628b196cc9ec33002cc2169cba4c2bd2801b96c6f8a1c7711fa70f0cabfe4023bdcf8832d7f35b8470b6faf04e8e440123340666cef3093ef47cd73828a187"
            },
            "ctorMsg": {
                "function": "pay",
                "args": [
                    ""+amount+""
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            spend(amount,"tollcollect");
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function toll_collect(){
    if(err_ == "" && err == "") {
        var km = $("#itm").val();
        var price = getTollPrice();

        if (km > 0) {
            var amount = price * km;
            payToll(amount);
        }
        else {
            alert("Invalid Input");
        }
    }
    else
    {
        alert(err+err_);
    }
}

//-------------------C A R --- W A S H -------------------------------------
function getCWBalance() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c"
            },
            "ctorMsg": {
                "function": "balance",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#cwBal").html(result.result.message);
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function display_data() {
    var bal = $("#bal").html();

    $.ajax({
        url: "http://10.223.116.21:5000/lcd?line1=Car+balance%3A " + bal +"&line2=Available%3A ",
        type: 'get',
        success: function (result) {
            console.log("Hardware notified");
        },
        error: function (error) {
            console.log(error);
        }

    });
}

function pull_rfid(repeat) {
    console.log("Pulling rfid");

    $.ajax({
        url: "http://10.223.116.21:5000/rfid/",
        type: 'get',
        success: function (result) {
            process_rfid(result);
            if (repeat) {
                setTimeout(function() {
                    pull_rfid(true);
                }, 5000);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function process_rfid(result) {
    var data = JSON.parse(result);
    var maxTimeStamp = last_timestamp;
    data.forEach(function (record) {
        var timestamp = Date.parse(record.timestamp);
        if (timestamp > last_timestamp) {
            console.log(record.cardUID);
            if (record.cardUID === rfid_codes.carwash) {
                car_wash();
            } else if (record.cardUID === rfid_codes.parking) {
                car_parking();
            } else if (record.cardUID === rfid_codes.toll) {
                toll_collect();
            } else if (record.cardUID === rfid_codes.uber) {
                car_uber();
            }
            if (timestamp > maxTimeStamp) {
                maxTimeStamp = timestamp;
            }
        }
    });
    last_timestamp = maxTimeStamp;
}

function getCWPrice() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c"
            },
            "ctorMsg": {
                "function": "price",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#cwPrc").html(result.result.message);
            result_data = result.result.message;

        },
        error: function (error) {
            alert(error.statusText);
        }

    });
    return result_data;
}

function getCWAvailability() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c"
            },
            "ctorMsg": {
                "function": "available",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            //$("#avl").html((result.result.message == "true")?"Yes":"No");
			// TODO: change availability status
			if(result.result.message == "true") {
			    err_ = "";
				$('#wash_toggle-trigger').bootstrapToggle('on');
				console.log("wash status: free");
				$('#wash_warningMsg_toggleOn').show();
				$('#wash_warningMsg_toggleOff').hide();
                $('#wash_toggle-trigger').bootstrapToggle('disable');
			}
			else {
			    err_ = "Car is under washing station";
				$('#wash_toggle-trigger').bootstrapToggle('off');
				console.log("wash status: full");
				$('#wash_warningMsg_toggleOn').hide();
				$('#wash_warningMsg_toggleOff').show();
               // $('#btnCarWash').prop('disabled', true);
				// Switching the toggle enable is only possible with scanning RFID
				//$('#wash_toggle-trigger').bootstrapToggle('disable');
			}
			// Toggle settings for availability status of washing
			$('#wash_toggle-trigger').change(function() {
				var toggle_value = $($('#wash_toggle-trigger')).prop('checked');
				var button = $('#btnCarWash');
				if (!toggle_value) {
                    err_ = "Car is under washing station";
					//$(button).prop('disabled', true);
					$('#wash_warningMsg_toggleOn').hide();
					//TODO: ajax request for parking here
					//alert("call changeWashingAvailability() function here!");
				} else {
                    err_ = "";
					//$(button).prop('disabled', false);
					$('#wash_warningMsg_toggleOn').show();
                    $('#wash_toggle-trigger').bootstrapToggle('disable');
				}
				console.log("calling toggle wash..");
				toggleWashing();
			});
        },
        error: function (error) {
            alert(error.statusText);
        }
    });
}

function car_wash() {
    if(err_ == "" && err == "") {
        var price = getCWPrice();
        var result_data = null;
        var request = {
            "jsonrpc": "2.0",
            "method": "invoke",
            "params": {
                "type": 1,
                "chaincodeID": {
                    "name": "42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c"
                },
                "ctorMsg": {
                    "function": "pay",
                    "args": [
                        price
                    ]
                },
                "secureContext": "admin"
            },
            "id": 2
        };
        var json_request = JSON.stringify(request);


        $.ajax({
            url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
            async: false,
            type: 'post',
            dataType: 'json',
            data: json_request,
            success: function (result) {
                toggleWashing();
                spend(price, "carwash");
            },
            error: function (error) {
                alert(error.statusText);
                console.log(error);
            }

        });
    }
    else
    {
        alert(err_+err);
    }
}

function toggleWashing(){
    console.log("Toggling Wash..");
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c"
            },
            "ctorMsg": {
                "function": "toggle",
                "args": [

                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {

        },
        error: function (error) {
            alert(error.statusText);
            console.log(error);
        }

    });
}

//-----------------P A R K I N G -------------------------------
function getParkingBalance() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77"
            },
            "ctorMsg": {
                "function": "balance",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#prkBal").html(result.result.message);
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function getParkingPrice(){
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77"
            },
            "ctorMsg": {
                "function": "price",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);


    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#prkPrc").html(result.result.message);
            result_data = result.result.message;

        },
        error: function (error) {
            alert(error.statusText);
        }

    });
    return result_data;

}

function getParkingAvailability() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77"
            },
            "ctorMsg": {
                "function": "available",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
			//$("#prkAvl").html((result.result.message)?"Yes":"No");
			// TODO: change availability status
			if(result.result.message == "true") {
				$('#park_toggle-trigger').bootstrapToggle('on');
				console.log("park status: free");
				$('#park_warningMsg_toggleOn').show();
				$('#park_warningMsg_toggleOff').hide();
                $('#park_toggle-trigger').bootstrapToggle('disable');
				err = "";
			}
			else {
				$('#park_toggle-trigger').bootstrapToggle('off');
				console.log("park status: full");
				err = "car is parked";
				$('#park_warningMsg_toggleOn').hide();
				$('#park_warningMsg_toggleOff').show();
                //$('#btnCarPark').prop('disabled', true);
               // $('#hrs').prop('disabled', true);
				// Switching the toggle enable is only possible with scanning RFID
				//$('#park_toggle-trigger').bootstrapToggle('disable');
			}
			// Toggle settings for availability status of parking
			$('#park_toggle-trigger').change(function() {
				var toggle_value = $('#park_toggle-trigger').prop('checked');
				var button = $('#btnCarPark');
				var input = $('#hrs');
				if (!toggle_value) {
                    err = "car is parked";
					//$(button).prop('disabled', true);
					//$(input).prop('disabled', true);
					$('#park_warningMsg_toggleOn').hide();
					//TODO: ajax request for parking here
				} else {
                    err = "";
					//$(button).prop('disabled', false);
					//$(input).prop('disabled', false);
					$('#park_warningMsg_toggleOn').show();
                    $('#park_toggle-trigger').bootstrapToggle('disable');
				}
                console.log("calling toggle parking..");
                toggleParking();
			});
        },
        error: function (error) {
            alert(error.statusText);
        }
    });
}

function car_parking() {
    if(err == "" && err_=="") {
        var price = getParkingPrice();
        var hours = $("#hrs").val();
        var amount = price * hours;
        var result_data = null;
        var request = {
            "jsonrpc": "2.0",
            "method": "invoke",
            "params": {
                "type": 1,
                "chaincodeID": {
                    "name": "8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77"
                },
                "ctorMsg": {
                    "function": "pay",
                    "args": [
                        "" + amount + ""
                    ]
                },
                "secureContext": "admin"
            },
            "id": 2
        };
        var json_request = JSON.stringify(request);
        if ($.isNumeric($("#hrs").val())) {
            $.ajax({
                url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
                async: false,
                type: 'post',
                dataType: 'json',
                data: json_request,
                success: function (result) {
                    toggleParking();
                    spend(amount, "parking");
                },
                error: function (error) {
                    alert(error.statusText);
                    console.log(error);
                }

            });
        }
        else {
            alert('Enter valid hours!');
            return;
        }
    }
    else
    {
     alert(err+err_);
    }
}

function toggleParking(){
    console.log("Toggling Parking..");
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77"
            },
            "ctorMsg": {
                "function": "toggle",
                "args": [

                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {

        },
        error: function (error) {
            alert(error.statusText);
            console.log(error);
        }

    });
}
//------------------ U B E R --------------------------------------
function getUberBalance() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "28ce4c27f62002f5432c1b4888d6d3948e136167b4f40404e8bff24af63b766af3186d6dd7cd12f74cfa7d1d80b36bb785c7499bacf6b416348b48f40ffead81"
            },
            "ctorMsg": {
                "function": "balance",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#ubrBal").html(result.result.message);
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function getUberPrice(){
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "28ce4c27f62002f5432c1b4888d6d3948e136167b4f40404e8bff24af63b766af3186d6dd7cd12f74cfa7d1d80b36bb785c7499bacf6b416348b48f40ffead81"
            },
            "ctorMsg": {
                "function": "price",
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
        async: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            $("#ubrPrc").html(result.result.message);
            result_data = result.result.message;

        },
        error: function (error) {
            alert(error.statusText);
        }

    });
    return result_data;

}

function car_uber() {
    if(err_ == "" && err == "") {
        var kms = $("#km").val();
        var ppk = getUberPrice();
        var amount = kms * ppk;

        var result_data = null;
        var request = {
            "jsonrpc": "2.0",
            "method": "invoke",
            "params": {
                "type": 1,
                "chaincodeID": {
                    "name": "28ce4c27f62002f5432c1b4888d6d3948e136167b4f40404e8bff24af63b766af3186d6dd7cd12f74cfa7d1d80b36bb785c7499bacf6b416348b48f40ffead81"
                },
                "ctorMsg": {
                    "function": "drive",
                    "args": [
                        "" + amount + ""
                    ]
                },
                "secureContext": "admin"
            },
            "id": 2
        };
        var json_request = JSON.stringify(request);
        if(kms > 0) {
            $.ajax({
                url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chaincode",
                async: false,
                type: 'post',
                dataType: 'json',
                data: json_request,
                success: function (result) {
                    console.log(result);
                    earn(amount, "uber");
                },
                error: function (error) {
                    alert(error.statusText);
                    console.log(error);
                }

            });
        }
        else
        {
            alert("Invalid Kilometres");
        }
    }
    else
    {
        alert(err+err_)
    }
}

//_________________________________________________________________________________________________
/*
function checkHeight()
{
    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain",
        async: false,
        type: 'post',
        dataType: 'json',
        data: '',
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            alert(error.statusText);
            console.log(error);
        }

    });
}
*/
