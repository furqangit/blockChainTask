/**
 * Created by Furqan Mehmood on 7/11/2017.
 */
var num_of_blocks;
var curr_blk_hash;
var prev_blk_hash;
$(document).ready(function() {

    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain",
        type: 'get',
        dataType: 'json',
        data: {},
        async: false,
        success: function (result) {

            num_of_blocks = result.height;
            curr_blk_hash = result.currentBlockHash;
            prev_blk_hash = result.previousBlockHash;

            getBlocksInfo(num_of_blocks);
        },
        error: function(error)
        {
            alert("Unable to connect to chain code!");
        }

    });

});

function getBlocksInfo(num) {
    for(var i=0;i<num_of_blocks;i++) {
        $.ajax({
            url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain/blocks/" + i,
            type: 'get',
            dataType: 'json',
            data: {},
            async: true,
            success: function (result) {
                if(result.transactions != null)
                addNewBlock(result);
            },
            error: function (error) {
                alert("Unable to connect to chain code!");
            }

        });
    }
}
