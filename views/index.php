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

    <script type="text/javascript" src="./scripts/jquery.min.js"></script>

    <script>
        $(document).ready(function() {

            var data = {
                "enrollId" : "admin",
                "enrollSecret" : "19ad565b93"
            };
            var data_json = JSON.stringify(data);

            $.ajax({
                url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/registrar",
                type: 'post',
                dataType: 'json',
                data: data_json,
                success: function (result) {
                    console.log(result);
                    setTimeout(
                        function()
                        {
                            //do something special
                        }, 5000);
                    getItems();
                },
                error: function(error)
                {
                    alert("Unable to connect to chain code!");
                }

            });


        });

        function getItems(){

            var request = {
                "jsonrpc":"2.0",
                "method":"query",
                "params":{
                    "type":1,
                    "chaincodeID": {
                            "name":"ff7c0eb73853755c85ca5af7f1ced1e4f90cdec0c0670f3d7be005e62c49d9dbdb40c9b330aacfd594b921c5d120dab606d9ee60aa808a78158aea1389eb527f"
                        },
                    "ctorMsg":{
                        "function":"read",
                        "args":["viktor"]
                    },
                    "secureContext":"list"
                },
                "id":2
            };

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
                url: "https://bf2ecd302ef6404abcf3ad797a0eefaa-vp0.us.blockchain.ibm.com:5002/registrar",
                async:true,
                type: 'post',
                dataType: 'json',
                data: json_request,
                success: function (result) {
                    console.log(result);
                },
                error: function(error)
                {
                    console.log(error.statusText);
                }

            });
        }

        function buy() {
            var boughtItems = [];
            var items;
            $('#tbl #rw').each(function() {

                var id = $.trim($(this).find("#prodId").html());

                var qty = $(this).find("#qty").val();

                if(id && qty)
                {
                    item = [id,qty];
                }
                boughtItems.push(item);
            });
            console.log(boughtItems);
        }

    </script>

    <body>
        <div>
            <button type="button" onclick="alert('Hello world!')">My Products</button>
            <b>Balance: </b><strong>100</strong>
        </div>
        <form method="post" action="./../controllers/shopping.php">
            <table width="50%" border="0" cellspacing="0" cellpadding="0" id="tbl">
                <div>
                <tr>
                    <td width="30%">
                        ID
                    </td>
                    <td width="30%" align="center">
                        Title
                    </td>
                    <td width="30%" align="center">
                        Quantity
                    </td>
                </tr>
                <?php
                $products = ['a','b' , 'c'];
                foreach ($products as $prod){?>
                        <tr id="rw">
                            <td id="prodId" width="30%">
                                <?php echo $prod; ?>
                            </td>
                            <td width="30%" align="center">
                                <?php echo $prod ?>
                            </td>
                            <td id="elm" width="30%" align="center">
                                <input id="qty" type="text">
                            </td>
                        </tr>
                <?php } ?>
                </div>
                <input type="button" value="Buy" onclick="buy()">
            </table>
        </form>

    </body>
</html>
