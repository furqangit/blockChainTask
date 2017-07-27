var arrBlocks = new Array();
var addNewBlock = function (block, num) {
  //  alert("anils funciton")
	arrBlocks.push(block);
	var currentTime = new Date().getTime();
	$(".timeline")
		.append($('<li id='+num+'>')
			.append($('<div class="direction-l">')
				.append($('<div class="flag-wrapper">')
					.append($('<span class="flag">')
						.html("#"+num+": "+block.stateHash.substr(0,5)+"...")
					)
					.append($('<span class="active">')
					)
				)
				.append($('<img class="chain_img" tabindex="50" data-placement="left" onclick="updateBlockInfo($(this),'+num+')" style="cursor: pointer;" src="images/chain.png">')
				)
			)
		);
};

var updateBlockInfo = function (div,num) {
	var index = div.parent().parent().attr('id');
	var div_path = " .col-md-2 .timeline ";
	var flag_path = " .direction-l .flag ";
	var flag_default_path = div_path + flag_path;
	var flag_arrow_default_path = div_path + " .direction-l .active";
	var clicked_flag_path = div_path + "#" + index + flag_path;
	var clicked_flag_arrow_path = div_path + "#" + index + " .direction-l .active";
	console.log(flag_path);
	console.log(index);
	var block = arrBlocks[index-1];
	// make flag-wrapper white default
	$(flag_default_path).css('background-color', 'rgb(248,248,248)');
	$(flag_default_path).css('color', 'black');
	$(flag_arrow_default_path).css('border-left-color', "rgb(248,248,248)");
	// make flag-wrapper green of fraunhofer
	$(clicked_flag_path).css('background-color', '#14856b');
	$(clicked_flag_path).css('color', '#fff');
	$(clicked_flag_arrow_path).css('border-left-color', "#14856b");
	// make rounded image white default
	var img_default_path = div_path + " .direction-l .chain_img";
	$(img_default_path).css('top','50%');
	$(img_default_path).css('right','-65px');
	$(img_default_path).css('width','50px');
	$(img_default_path).css('height','50px');
	$(img_default_path).css('background','rgb(248,248,248)');
	// make rounded image green of fraunhofer
	var img_path = div_path + "#" + index + " .direction-l .chain_img";
	$(img_path).css('top','40%');
	$(img_path).css('right','-70px');
	$(img_path).css('width','60px');
	$(img_path).css('height','60px');
	$(img_path).css('background','#14856b');

	$('#myModal .modal-header h3').text("Block #"+num+" Details");
	$("#myModal .modal-body .row").remove();
	$("#myModal .modal-body")
		.append($('<div class="row">')
			.append($('<table class="table table-hover table-sm">')
				.append($('<tbody>')
					.append($('<tr>')
						.append($('<th class="col-md-2" scope="row">')
							.html("Hash Value:")
						)
						.append($('<td class="col-md-10 text-left" style="word-break:break-all; text-align:left">')
							.html(block.stateHash)
						)
					)
				)
			)
		)
		.append($('<div class="row">')
			.append($('<table class="table table-hover table-sm">')
				.html(getHtmlString(block, num))
			)
	);
	$('#myModal').on('hidden.bs.modal', function () {
		// make flag-wrapper white default
		$(flag_default_path).css('background-color', 'rgb(248,248,248)');
		$(flag_default_path).css('color', 'black');
		$(flag_arrow_default_path).css('border-left-color', "rgb(248,248,248)");
		// make rounded image white default
		var img_default_path = div_path + " .direction-l .chain_img";
		$(img_default_path).css('top','50%');
		$(img_default_path).css('right','-65px');
		$(img_default_path).css('width','50px');
		$(img_default_path).css('height','50px');
		$(img_default_path).css('background','rgb(248,248,248)');
	});
	$('#myModal').modal('show');

/*
	$("#detailsContainer .jumbotron").remove();
	$("#detailsContainer")
		.append($('<div class="jumbotron text-left">')
			.append($('<div class="row">')
				.append($('<table class="table table-hover table-sm">')
					.append($('<tbody>')
						.append($('<tr>')
							.append($('<th class="col-md-3" scope="row">')
								.html("Block "+num+" Hash:")
							)
							.append($('<td class="col-md-9" style="word-break:break-all;">')
								.html(block.stateHash)
							)
						)
					)
				)
			)
			.append($('<div class="row">')
				.append($('<table class="table table-hover table-sm">')
					.html(getHtmlString(block, num))
				)
			)
	);
	*/
};

var chaincodes = {
	"42602ab0d80c9fec2ed8c796989121bffc98ce51634e260d7b82d6047371da6ec9632c755da605e565f20844c13a20fcc807cd0394e5dd65063b395d38538a4c": "Carwash",
	"8a273890a316cb8d0e42d60e05b1cd4c6d267d5b415c0adf9d031815596e3b48cf7c5efab1ea7c8662dfa03badca2881762a71ddddd94447b3e3e632c512cd77": "Park",
	"28ce4c27f62002f5432c1b4888d6d3948e136167b4f40404e8bff24af63b766af3186d6dd7cd12f74cfa7d1d80b36bb785c7499bacf6b416348b48f40ffead81": "Uber",
	"4a628b196cc9ec33002cc2169cba4c2bd2801b96c6f8a1c7711fa70f0cabfe4023bdcf8832d7f35b8470b6faf04e8e440123340666cef3093ef47cd73828a187": "Toll collect",
	"aada36766f1d10343c86daac7af7fddc3c75f6710ac28c09584a53da4dd2a608d13ad07fb02aad514b891c920eb284bcc07d077b7d191aef8dad2f58bf408300": "Car"
}

var getHtmlString =  function (block, num) {
	var html = "<thead><tr><th>Job</th><th>ID</th><th>Time</th><th>Service</th></tr></thead>";
	html = html+"<tbody>";
	for (var i = 0; i < block.transactions.length; i++) {
		var tx = block.transactions[i];
		var id = tx.txid; // Transaction ID
		var name = chaincodes[atob(tx.chaincodeID).substring(3)];
		var txTime = (new Date(1000 * tx.timestamp.seconds)+"").split(" (")[0]; // Transaction time, get rid of unnecessary string
		var payload = name + " " + atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
		html = html+"<tr>";
		html = html+"<th class='col-md-1' scope='row'>"+(i+1)+"</th>";
		html = html+"<td class='col-md-5' style='word-break:break-all;'>"+id+"</td>";
		html = html+"<td class='col-md-3' style='word-break:break-word;'>"+txTime+"</td>";
		html = html+"<td class='col-md-3' style='word-break:break-word;'>"+payload+"</td>";
		html = html+"</tr>";
	}
	html= html+"</tbody>";
	return html;
}
