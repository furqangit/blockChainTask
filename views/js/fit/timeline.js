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

var getHtmlString =  function (block, num) {
	var html = "<thead><tr><th>Job</th><th>ID</th><th>Time</th><th>Service</th></tr></thead>";
	html = html+"<tbody>";
	for (var i = 0; i < block.transactions.length; i++) {
		var tx = block.transactions[i];
		var id = tx.txid; // Transaction ID
		var txTime = (new Date(1000 * tx.timestamp.seconds)+"").split(" (")[0]; // Transaction time, get rid of unnecessary string
		var payload = "Car " + atob(tx.payload).substring(143).replace(/[\x00-\x1F\x7F-\x9F]/g, " ").replace(/  /g, " "); // Transaction data like "carwash pay 50"
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
