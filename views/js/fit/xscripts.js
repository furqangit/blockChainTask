function reset() {
    var data = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
            },
            "ctorMsg": {
                "function": "init",
                "args": ["init"]
            },
            "secureContext": "admin"
        },
        "id": 3
    };

    var data_json = JSON.stringify(data);

    $.ajax({
        url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/chaincode",
        type: 'post',
        dataType: 'json',
        data: data_json,
        success: function (result) {
            if(result.result.status == "OK")
            {
                console.log("initializing");
            }
        },
        error: function(error)
        {
            alert("Connection LOST!");
        }

    });
}

function getItems(){
    var result_data = null;
    var request =  {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
            },
            "ctorMsg": {
                "function": "list",
                "args": [
                    "viktor"
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);


    $.ajax({
        url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/chaincode",
        async:true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            result_data = JSON.stringify(result.result.message);
            result_data =  result_data.replace(/\"{/g, "{");
            result_data =  result_data.replace(/}\\"/g, "}");
            result_data =  result_data.replace(/\"\[/g, "[");
            result_data =  result_data.replace(/\]\"/g, "]");
            result_data =  result_data.replace(/\\/g, "");

            $result_data = JSON.parse(result_data);
            getAvailableItems($result_data)
        },
        error: function(error)
        {
            alert(error.statusText);
        }

    });
}

function getBoughtItems() {
    var result_data = null;
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
            },
            "ctorMsg": {
                "function": "list",
                "args": [
                    "furqan"
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };
    var json_request = JSON.stringify(request);


    $.ajax({
        url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/chaincode",
        async: true,
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            result_data = JSON.stringify(result.result.message);
            result_data = result_data.replace(/\"{/g, "{");
            result_data = result_data.replace(/}\\"/g, "}");
            result_data = result_data.replace(/\"\[/g, "[");
            result_data = result_data.replace(/\]\"/g, "]");
            result_data = result_data.replace(/\\/g, "");

            $result_data = JSON.parse(result_data);
            getPurchasedItems($result_data)
        },
        error: function (error) {
            alert(error.statusText);
        }

    });
}

function getBalance() {
    var request = {
        "jsonrpc": "2.0",
        "method": "query",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
            },
            "ctorMsg": {
                "function": "read",
                "args": [
                    "furqan"
                ]
            },
            "secureContext": "admin"
        },
        "id": 2
    };

    var json_request = JSON.stringify(request);


    $.ajax({
        url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/chaincode",
        async:true,
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

function buy(){
    var id = $("#itm").val();
    var qty = $("#qty").val();



    var request = {
        "jsonrpc": "2.0",
        "method": "invoke",
        "params": {
            "type": 1,
            "chaincodeID": {
                "name": "ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
            },
            "ctorMsg": {
                "function": "trade",
                "args": [
                    id,
                    qty
                ]
            },
            "secureContext": "admin"
        },
        "id": 3
    };

    var json_request = JSON.stringify(request);
    $.ajax({
        url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/chaincode",
        type: 'post',
        dataType: 'json',
        data: json_request,
        success: function (result) {
            if(result.result.status == "OK")
            {
                alert("Item Purchased");
                getBoughtItems();
                getBalance();
                getItems();
            }
        },
        error: function(error)
        {
            alert("Item Not Found");
        }

    });
}

function getAvailableItems(data) {
    $("#tbl tr").remove();
    for(var j=0;j<data.length;j++)
    {

        $("#buy .jumbotron .table").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .text(data[j].id)
                )
                .append($('<td>')
                    .text(data[j].name)
                )
                .append($('<td>')
                    .text(data[j].price)
                )
                .append($('<td>')
                    .text(data[j].quantity)
                )
            );
    }

}

function getPurchasedItems(data) {
    $("#tbl2 tr").remove();
    for(var j=0;j<data.length;j++)
    {
        $("#purchased .jumbotron .table").find('tbody')
            .append($('<tr>')
                .append($('<td>')
                    .text(data[j].id)
                )
                .append($('<td>')
                    .text(data[j].name)
                )
                .append($('<td>')
                    .text(data[j].price)
                )
                .append($('<td>')
                    .text(data[j].quantity)
                )
            );
    }

}