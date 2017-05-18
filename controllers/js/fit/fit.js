function alertFunc() {
		alert("no available function !");
}

$(document).ready(function() {
	// get list of available items from json string
	var json_string = '{"purchased":[{"id": "1", "name": "table", "price": "80", "quantity": "5", "owner": "furqan"},{"id": "2", "name": "chair", "price": "30", "quantity": "8", "owner": "viktor"}]}';
	var list = JSON.parse(json_string);

	for (var i = 0; i < list.purchased.length; i++) {
		var purchased_item = list.purchased[i];
		$("#buy .jumbotron .table").find('tbody')
			.append($('<tr>')
				.append($('<td>')
					.text(purchased_item.id)
				)
				.append($('<td>')
					.text(purchased_item.name)
				)
				.append($('<td>')
					.text(purchased_item.price)
				)
				.append($('<td>')
					.text(purchased_item.owner)
				)
				.append($('<td class="col-md-2">')
					.append($('<textarea class="form-control" rows="1" style="resize: none;">')
						.text(purchased_item.quantity)
					)
				)
			);
	};
	
	// get history of purcased items from json string
	var json_string = '{ "purchased":[ { "id":"7", "name":"fan", "price":"33", "quantity":"32" }, { "id":"5", "name":"tablet", "price":"130", "quantity":"25" } ] }';
	var list = JSON.parse(json_string);

	for (var i = 0; i < list.purchased.length; i++) {
		var purchased_item = list.purchased[i];
		$("#purchased .jumbotron .table").find('tbody')
			.append($('<tr>')
				.append($('<td>')
					.text(purchased_item.id)
				)
				.append($('<td>')
					.text(purchased_item.name)
				)
				.append($('<td>')
					.text(purchased_item.price)
				)
				.append($('<td>')
					.text(purchased_item.quantity)
				)
			);
	};

});
