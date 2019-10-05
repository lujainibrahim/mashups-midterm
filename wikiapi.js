$(document).ready(function(){

	//button and search output function
	$('#searchBtn').click(function(){
		var searchTerm = $('#search').val();

		//wikipedia api call
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

		//find json data within api
  $.ajax({
		type:"GET",
		url: url,
		asyn:false,
		dataType: "json",
		success: function(data, textInput, jqXHR){
			$('#searchResults').html('');
			for(var i=0; i < data[1].length; i++){
				$('#searchResults').prepend("<div><div class='btn-default'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2></a>" + "<p>" + data[2][i] + "</p></div></div>" );
			}
		},

		//error message
		error: function(errorMess){
			alert(errorMess);
		}
	});
	});
});
