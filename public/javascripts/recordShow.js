$(document).ready(function(){
	$.ajax({
		type : "GET", 
		dataType : "json",
		url : "http://localhost:8080/record/get",
		async : false,
		success : function(data){
			alert(JSON.stringify(data));
		}
	});
	$("#search").click(function(){
    		$.ajax({
      			type : "GET", 
      			dataType : "json",
      			url : "http://localhost:8080/record/getByType",
      			data : {typeId: 2},
      			async : false,
      			success : function(data){
        			alert(JSON.stringify(data));
      			}
    		});
  	});
  	$("#incentive").click(function(){
		window.location.href = '/incentive';
  	});
})