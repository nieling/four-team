
function get(){
	$.ajax({//ajax请求
		url:"data/result.json",
		dataType:"json",
		type:"post",
		async:false,
		success:function(data){
			render(data);
			
		},
		error:function(){
			alert("请重新加载");

		}
	})

}
get();
function render(data){
	var strlist="",str="",str2="",str3="";
	 $.each(data,function(i,v){
	 	strlist+="<h1><span></span>"+data[i].name+"</h1>";
	 	str2+="<label for='' class='he'>"+data[i].name+"</label>";
	 	var data2=data[i].feature;
	 	var data3=data[i].mean;

	 	//console.log(data3[0])
	 	str+="<label for='' class='qi'>"+data2[0]+"</label>";
	 	str3+="<div class='hide'><ol><li>总体特征：<span>"+data2[1]+"</span></li></li><li>常见表现：<span>"+data2[2]+"</span></li><li>心理特征：<span>"+data2[3]+"</span></li><li>发病倾向：<span>"+data2[4]+"</span></li></ol><ul><li><span></span>"+data3[0]+"</li><li><span></span>"+data3[1]+"</li><li><span></span>"+data3[2]+"</li><li><span></span>"+data3[3]+"</li></ul></div>";
	 })
	$(".header").html(strlist);
	$(".show-h i").before(str2);
	$(".he").after(str);
	$(".show-h").after(str3);


}
	/*myApp.controller('first',function($scope,$http){
		$http({
			url:'data/eat.json',
			method:'GET'
		}).success(function(data){
			//响应成功
			alert(data)
			var str=''
			for(var i in data){
				for(var j in data[i]){
					str+=data[i][j]
				}
			}
			$('.article').html(str)
		}).error(function(data,header,config,status){
			alert('请重新获取页面')
		});
	});
*/
    