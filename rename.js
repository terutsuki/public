$(function replaceElement() {
	var element = document.getElementById("t1");
	var newElement = document.createElement("input");
	newElement.setAttribute("type", "text");
	newElement.setAttribute("id", "ipt");
	newElement.setAttribute("value", document.getElementById("t1").innerHTML);
	var target = element.childNodes.item(0);
	element.replaceChild(newElement, target); 
});
	
$(function() {
	$('.simple-form').on('submit', function () {
		var $input = $(this).children('input[type=text]');
		var text = $input.val();
		var formdata = new FormData();
		formdata.append('newtext', text);
		$.ajax({
			url  : 'action_rename.php',
			type : 'POST',
			data : formdata,
			cache	   : false,
			contentType : false,
			processData : false,
			dataType	: 'text'
		})
		.done(function(j_data, textStatus, jqXHR){
			alert('送れた');
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			alert('失敗');
		});
		
		var node = document.getElementById("ipt");
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
		
		var info = document.getElementById('t1');
		var textNode = document.createTextNode(text);
		info.appendChild(textNode);
		return false;
	});
});
