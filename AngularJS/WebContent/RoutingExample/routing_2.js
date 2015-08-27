"use strict"; 
(function (){
		
		angular.module('plunker',['ngRoute']);

		angular.module('plunker').config(['$routeProvider', ModuleConfig]);		
		
		function ModuleConfig($routeProvider) {
			$routeProvider				
				.when('/home/:name/:city', {
					templateUrl : 'home.html',
					controller : 'HomeCtrl',
					controllerAs : 'hCtrl'
				})
				.when('/login', {
					templateUrl : 'login.html',
					controller : 'LoginCtrl',
					controllerAs : 'lCtrl'
				})
				.when('/profile', {
					templateUrl : 'profile.html',
					controller : 'ProfileCtrl',
					controllerAs : 'pCtrl',
					resolve : {
						peopleData : ['$http', LoadData]
					}
				})
				.otherwise ({
					redirectTo: '/login'
				});
			
			function LoadData($http) {
				return $http({
					method : 'GET',
					url : 'http://jsonplaceholder.typicode.com/users/1'
				});
			}
		}	
	})(); 