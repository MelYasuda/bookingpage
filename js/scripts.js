$(document).ready(function() {
	$("form#add").submit(function(event) {
	event.preventDefault();
	var number1 = parseInt($("#add1").val());
	var number2 = parseInt($("#add2").val());
	var result = add(number1, number2);
	$("#outputadd").text(result);
	});
});
