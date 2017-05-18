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
                },
                error: function(error)
                {
                    alert("Unable to connect to chain code!");
                }

            });
        });

        function buy() {
            var boughtItems = {};
            $('#tbl tr').each(function() {

                var id = trim($(this).find("#prodId").html());
                var qty = $(this).find("#qty").val();

                if(id && qty)
                {
                    boughtItems = {
                        id:id,
                        qty:qty};
                }
                console.log(boughtItems);
            });
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
