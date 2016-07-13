var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('cont', function($scope){
  $scope.back=function(){
  	 history.back()
  };
});
myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/first', {
	    templateUrl : 'html/first.html'
	});
	$routeProvider.when('/second', {
	    templateUrl : 'html/second.html',
	    controller :'second'

	});
	$routeProvider.when('/three', {
	    templateUrl : 'html/three.html',
	    controller :'three'
	});
	$routeProvider.when('/four', {
	    templateUrl : 'html/four.html',
	    controller :'four'
	});
	$routeProvider.when('/five', {
	    templateUrl : 'html/five.html',
	    controller :'five'
	});
	$routeProvider.when('/six', {
	    templateUrl : 'html/six.html',
	    controller :'six'
	});
	$routeProvider.when('/seven', {
	    templateUrl : 'html/seven.html',
	    controller :'seven'
	});
	$routeProvider.otherwise({
	    redirectTo : '/first'
	});
}]);
//three four
myApp.controller('three',function($scope,$http){
	$http({
		url:'data/unLike.json',
		method:'GET'
	}).success(function(data){
		var str="";
		$.each(data.sickness,function(key,value){
			$.each(value,function(key1,value1){
				str+='<ul>'
				+'<li>'+value1+'</li>'
				 +'</ul>';
			})
			$(".list_1").html(str);	
			$('.list_1').hide()
		})
		$(".list_1").on("click","li",function(){
			$(this).addClass("bg");
		})
		
		$('.continue').on('click',function(){
			$.each($('.list_1 ul'),function(){
				if($(this).find('li').hasClass('bg')){
					$('.continue').attr({
						'href':"#/four"
					}) 
				}	
			})
		})

	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});
	$scope.fn=function(){
		$('.list_1').show()
	}
	$scope.fn2=function(){
		$('.list_1').hide()
	}
});

myApp.controller('four',function($scope,$http){
	$http({
		url:'data/unLike.json',
		method:'GET'
	}).success(function(data){
		var str="";
		$.each(data.illFood,function(key,value){
			$.each(value,function(key1,value1){
				str+='<ul>'
				+'<li>'+value1+'</li>'
				 +'</ul>';
			})
			$(".list_1").html(str);	
			$('.list_1').hide()
		})
		$(".list_1").on("click","li",function(){
			$(this).addClass("bg");
		})
		$('.continue').on('click',function(){
			$.each($('.list_1 ul'),function(){
				if($(this).find('li').hasClass('bg')){
					$('.continue').attr({
						'href':"#/five"
					}) 
				}	
			})
		})
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});
	$scope.fn=function(){
		$('.list_1').show()
	}
	$scope.fn2=function(){
		$('.list_1').hide()
	}
});
//five
myApp.controller('five',function($scope,$http){
	$http({
		url:'data/unLike.json',
		method:'GET'
	}).success(function(data){
		var str="";
		$.each(data.food,function(key,value){
			$.each(value,function(key1,value1){
				str+='<li>'+value1+'</li>';
			})
			$("#ull").html(str);	
		})
		$("#ull").on("click","li",function(){
			$(this).addClass("bg");
		})
		$('.continue').on('click',function(){
			$.each($('#ull li'),function(){
				if($(this).hasClass('bg')){
					$('.continue').attr({
						'href':"#/six"
					}) 
				}	
			})
		})	
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});
	$scope.dialog=function(){
		$('.dialog').show()
	}
});
//six
myApp.controller('six',function($scope,$http){
	$http({
		url:'data/question.json',
		method:'GET'
	}).success(function(data){
		//响应成功
		var str="",
		jsonData=data;
		$.each(jsonData,function(value,key){
		//console.log(key);
			$.each(key,function(v,k){
				//console.log(k.value);
				$.each(k.value,function(_v,k_value){
					if(_v<10){
						//console.log(k_value.qName);
						str +='<li><span></span>'+k_value.qName+'</li>'+
						'<li class="lis">'+
							'<span ">没有</span><span ">很少</span><span ">总是</span><span ">有时</span><span ">经常</span>'
						'</li>'
					}
					
				})	
				var str2='<div class="jixu"><a href="#/seven" class="continue">继续</a></div>'
				$("#uls").html(str+str2);
				$(".section").on("click",".lis span",function(){
					$(this).addClass("on").siblings().removeClass();
				})
				/*
				//判断
				$('.continue').on('click',function(){
					var flag;
					$.each(".lis",function(){
						$.each($(this).find('span'),function(){
							if($(this).hasClass('on')){
								flag=true;
							}
						})
					})
					$(this).attr({
						'href':"#/seven"
					})

				})*/
			})
		})
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	})
	
});
//seven
myApp.controller('seven',function($scope,$http){
	$http({
		url:'data/result.json',
		method:'GET'
	}).success(function(data){
		$scope.render(data)		
	}).error(function(data,header,config,status){
		alert('请重新获取页面')
	});
	$scope.render=function(data){
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
		 console.log(str2)
		$(".seven .title").html(strlist);
		$(".result-section .span").html(str2);
		$(".seven .he").after(str);
		$(".seven .show-h").after(str3);
	};
	$scope.fn=function(){
		$('.show-h').hide();
		$('.hide-h').show()
		$('.hide').show()
	}
	$scope.eat=function(){
		if(!$('#keEat').attr('data-tit')){
			$('#keEat').attr('data-tit','true')
			$('.pic1').css({
				'display':'-webkit-flex'
			})
		}else{
			$('#keEat').attr('data-tit','false')
			$('.pic1').css({
				'display':'none'
			})
		}
		
	}
	$scope.not=function(){
		if(!$('#notEat').attr('data-tit')){
			$('#notEat').attr('data-tit','true')
			$('.pic2').css({
				'display':'-webkit-flex'
			})
		}else{
			$('#notEat').attr('data-tit','false')
			$('.pic2').css({
				'display':'none'
			})
		}
	}
});