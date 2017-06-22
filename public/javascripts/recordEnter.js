$(document).ready(function(){
  	$("#enter").click(function(){
    		$.ajax({
      			type : "POST", 
      			dataType : "json",
            contentType: "application/json;charset=utf-8",
      			url : "http://localhost:8080/record/set",
      			data : JSON.stringify({
      					"typeId": 2,
      					"phone": $("#phone").val(), 
      					"name": $("#name").val(),
                "value": null,
      					"salesmanId" : 3
      			}),
      			async : false,
      			success : function(data){
        				alert("录入成功！");
      			}
    		});
    });
    $("#back").click(function(){
        window.location.href = '/salesman';
    });
})