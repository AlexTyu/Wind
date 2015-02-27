var app = angular.module("wind",[]);

app.controller("portfolioController", function ($scope,$rootScope,$http) {
	
	$scope.cats = [];
	
	
	
	$scope.get = function(catname){
		if(catname!=''){
			$http({
				url: '../../portfolio', 
				method: "GET",
				params: { category: true, name: catname }
			}).
			success(function(response){
				$scope.portfolios = response;
				$scope.catname = catname;
				console.log($scope.portfolios);
			})
		} else {
			$http({
				url: '../../portfolio', 
				method: "GET",
				params: { category: true }
			}).
			success(function(response){
				$scope.portfolios = response;
				$scope.catname = catname;
				console.log($scope.portfolios);
			})
		}
		
		
	}	
	
});


$(window).scroll(function(){
	if ( $( "body" ).hasClass( "portfiliosingle" )  && ($(window).scrollTop() > 500) ){
		$(".portfiliosingle #header").addClass('bg');
	} else if ($(window).scrollTop()  < 500) {
		$(".portfiliosingle #header").removeClass('bg');
	}
})