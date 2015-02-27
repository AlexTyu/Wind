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


$(".portfiliosingle").scroll(function(){
	console.log(1);
})