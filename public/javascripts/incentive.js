$(document).ready(function(){
	$("#value").click(function(){
		$.ajax({
  			type : "GET", 
  			dataType : "json",
  			url : "http://localhost:8080/protype/set",
  			data : {id: 1, value: 100},
  			async : false,
  			success : function(data){
    			alert(JSON.stringify(data));
  			}
		});
  	});
  	$("#search").click(function(){
		$.ajax({
  			type : "GET", 
  			dataType : "json",
  			url : "http://localhost:8080/record/all/group",
  			async : false,
  			success : function(data){
    			alert(JSON.stringify(data));
  			}
		});
  	});
})