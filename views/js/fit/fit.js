function alertFunc() {
		alert("no available function !");
}
 var height = 0;
 var last_timestamp = 0;
 var rfid_codes = {
    "carwash": "5b36312c203139322c2033392c2039382c203138345d"
 }
$(document).ready(function() {

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
        error: function(error)
        {
            alert("Unable to connect to chain code!");
        }

    });
    last_timestamp = Date.now();
    wash_screen();
    pull_rfid(true);


});

//----------- C A R--------------------------------------------------
function getBalance() {
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "170560c26bca721f163ea8eb86d8ee49d0927eabf7ec4d9f3779880817015662cf0841cd23b489b92c607162b42374cd511637a7797b3967b693c6ae78e22cb4"
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
            console.log(result.result.message);
            $("#bal").html(result.result.message);
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
                "name": "170560c26bca721f163ea8eb86d8ee49d0927eabf7ec4d9f3779880817015662cf0841cd23b489b92c607162b42374cd511637a7797b3967b693c6ae78e22cb4"
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
        async: false,
        cache: false,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
                location.reload();
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
                "name": "170560c26bca721f163ea8eb86d8ee49d0927eabf7ec4d9f3779880817015662cf0841cd23b489b92c607162b42374cd511637a7797b3967b693c6ae78e22cb4"
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
    var km = $("#itm").val();
    var price = getTollPrice();

    if(km > 0) {
        var amount = price * km;
        payToll(amount);
    }
    else
    {
        alert("Invalid Input");
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

function wash_screen() {
    var bal = $("#cwBal").html();
    var price = $("#cwPrc").html();
    $.ajax({
        url: "http://10.223.90.227:5000/lcd?line1=Carwash+Price%3A" + price +"&line2=Balance%3A" + bal,
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
        url: "http://10.223.90.227:5000/rfid/",
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
            console.log(result.result.message);
			// TODO change availability

            $("#avl").html((result.result.message == "true")?"Yes":"No");
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function car_wash() {
    var price = getCWPrice();
    if($("#avl").html() == "Yes") {
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
                acquire();
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
        alert("Not Available this time, come back later!");
    }
}

function acquire(){
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
            console.log(result.result.message);
			// TODO change availability
            //$("#prkAvl").html((result.result.message)?"Yes":"No");
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function car_parking() {
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
            console.log(result);
            spend(amount,"parking");
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
            console.log(result);
            earn(amount,"uber");
        },
        error: function (error) {
            alert(error.statusText);
            console.log(error);
        }

    });
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
}*/
