"use strict"; 
(function (){
		
		angular.module('Student',['ngRoute']);

		angular.module('Student').config(['$routeProvider', ModuleConfig]);		
		
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
					controllerAs : 'pCtrl'
				})
				.otherwise ({
					redirectTo: '/login'
				});
		}	
	})(); 