myApp.controller('five',function($scope,$http){
	$http({
		url:'data/unLike.json',
		method:'GET'
	}).success(function(data){
		//响应成功
		renderFive(data);
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});
});
$(".section2").on("click",".inp label",function(){

	//$(this).addClass('bg').siblings().removeClass()
})
function renderFive(data){
    var datalist = data.food,str='';
    	
		$.each(datalist.content,function(v,k){
			str+='<li><div class="inp"><input type="checkbox" id="input'+v+'"><label for="input'+v+'"></label> <span>'+datalist.content[v]+'</span></div>'+'</li>'
		})
		
    $("#ull").html(str);
}