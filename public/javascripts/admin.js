$(document).ready(function(){
  	$("#login").click(function(){
    		$.ajax({
      			type : "GET", 
      			dataType : "json",
      			url : "http://localhost:8080/verify/admin",
      			data : {name: $("#name").val(), pass: $("#pass").val()},
      			async : false,
      			success : function(data){
        				if(data.length === 0){
        			      alert("密码错误！");
        				}else{
        					  alert("登录成功！");
                    window.location.href = '/recordShow';
        				}
      			}
    		});
  	});
})