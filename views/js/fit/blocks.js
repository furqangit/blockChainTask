/**
 * Created by Furqan Mehmood on 7/11/2017.
 */
var num_of_blocks;
var curr_blk_hash;
var prev_blk_hash;
var blk_num = 0;
$(document).ready(function() {
    getBlocks();
    callBlocks();
});
function callBlocks(){
    window.setInterval(function(){
        console.log("calling for new block....");
        getNewBlock();
    }, 5000);
}
function getBlocks(){
    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain",
        type: 'get',
        dataType: 'json',
        data: {},
        async: false,
        success: function (result) {

            num_of_blocks = result.height-1;
            curr_blk_hash = result.currentBlockHash;
            prev_blk_hash = result.previousBlockHash;
            getBlocksInfo(num_of_blocks,false);

        },
        error: function(error)
        {
            alert("Unable to connect to chain code!");
        }

    });

}
function getNewBlock(){
    $.ajax({
        url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain",
        type: 'get',
        dataType: 'json',
        data: {},
        async: false,
        success: function (result) {

            var height = result.height-1;
            curr_blk_hash = result.currentBlockHash;
            prev_blk_hash = result.previousBlockHash;
            if(height > num_of_blocks) {
                num_of_blocks = height;
                getBlocksInfo(num_of_blocks,true);
            }
        },
        error: function(error)
        {
            alert("Unable to connect to chain code!");
        }

    });

}
function getBlocksInfo(num,isNewBlock) {
    var x;
    if(isNewBlock)    {
        x = num;
    }
    else {
        x = num - 9;
    }
    for (var i = x; i <= num; i++) {
        $.ajax({
            url: "https://1acda275b31041d89efd8a04b9bac2ea-vp0.us.blockchain.ibm.com:5004/chain/blocks/" + i,
            type: 'get',
            dataType: 'json',
            data: {},
            async: true,
            success: function (result) {
                if (result.transactions != null)
                    addNewBlock(result, ++blk_num);
            },
            error: function (error) {
                alert("Unable to connect to chain code!");
            }

        });
    }
}
