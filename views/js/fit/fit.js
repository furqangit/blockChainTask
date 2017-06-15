function alertFunc() {
		alert("no available function !");
}

$(document).ready(function() {

    var data = {
        "enrollId" : "admin",
        "enrollSecret" : "19ad565b93"
    };
    var data_json = JSON.stringify(data);

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/registrar",
        type: 'post',
        dataType: 'json',
        data: data_json,
        success: function (result) {
            console.log(result);
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
        error: function(error)
        {
            alert("Unable to connect to chain code!");
        }

    });


});

//----------- C A R--------------------------------------------------
function getBalance() {
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "1ed4f599ea8d8e922a60aff7d6c5e4da6dbcf44126db8eb702282b2859df4394d5f40263bd9e60a3e1195dc12c244fcc4c9b6234b42d8bd3d8eac3e841745e3c"
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
        async:true,
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
                "name": "1ed4f599ea8d8e922a60aff7d6c5e4da6dbcf44126db8eb702282b2859df4394d5f40263bd9e60a3e1195dc12c244fcc4c9b6234b42d8bd3d8eac3e841745e3c"
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
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            getBalance();
            getTollBalance();
            getCWBalance();
            getParkingBalance();
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
                "name": "1ed4f599ea8d8e922a60aff7d6c5e4da6dbcf44126db8eb702282b2859df4394d5f40263bd9e60a3e1195dc12c244fcc4c9b6234b42d8bd3d8eac3e841745e3c"
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
        async: true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            getBalance();
            getUberBalance();
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
                "name": "5952f7a15ef85e0004124a83b0d0c06176e2a7a765cf96cf05729bb53b5d3da9033dee1ece045cf50725dfa305710104f8b5e2c8be120d3b03506783d0bb26c1"
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
                "name": "5952f7a15ef85e0004124a83b0d0c06176e2a7a765cf96cf05729bb53b5d3da9033dee1ece045cf50725dfa305710104f8b5e2c8be120d3b03506783d0bb26c1"
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
        async: true,
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
                "name": "5952f7a15ef85e0004124a83b0d0c06176e2a7a765cf96cf05729bb53b5d3da9033dee1ece045cf50725dfa305710104f8b5e2c8be120d3b03506783d0bb26c1"
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
        async: true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            console.log(result.result);
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
                "name": "d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3"
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
        async: true,
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

function getCWPrice() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3"
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
                "name": "d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3"
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
        async: true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            console.log(result.result.message);
			// TODO change availability
            //$("#avl").html((result.result.message)?"Yes":"No");
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function car_wash() {
    var price = getCWPrice();
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "d693dcdf3860f861cbf75273b8245c598832015787ea7b3192dcd4fde226a96f3c3a1578f31892c31beadc4a72a2ce7ee56bad91790c29e518604e35762580b3"
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
        async: true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            spend(price,"carwash");
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
                "name": "ec39946add9d317db5835b096d395b477fde204a9ff0891b48bb090ffe1ee47217d9d98288864f8a20fc5461e7c15bb8dc70f248c0e17073c3e338d31bb4d112"
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
        async: true,
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
                "name": "ec39946add9d317db5835b096d395b477fde204a9ff0891b48bb090ffe1ee47217d9d98288864f8a20fc5461e7c15bb8dc70f248c0e17073c3e338d31bb4d112"
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
                "name": "ec39946add9d317db5835b096d395b477fde204a9ff0891b48bb090ffe1ee47217d9d98288864f8a20fc5461e7c15bb8dc70f248c0e17073c3e338d31bb4d112"
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
        async: true,
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
                "name": "ec39946add9d317db5835b096d395b477fde204a9ff0891b48bb090ffe1ee47217d9d98288864f8a20fc5461e7c15bb8dc70f248c0e17073c3e338d31bb4d112"
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
        async: true,
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
                "name": "faa67d5a21da01c6ae6f6eddf001e0e59b746635da3caed1c1b6071216de992949cfbf5d1d64816d0532231861668a91456558cb63092a85728fbc021e0c1bac"
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
        async: true,
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
                "name": "faa67d5a21da01c6ae6f6eddf001e0e59b746635da3caed1c1b6071216de992949cfbf5d1d64816d0532231861668a91456558cb63092a85728fbc021e0c1bac"
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
                "name": "faa67d5a21da01c6ae6f6eddf001e0e59b746635da3caed1c1b6071216de992949cfbf5d1d64816d0532231861668a91456558cb63092a85728fbc021e0c1bac"
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
        async: true,
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