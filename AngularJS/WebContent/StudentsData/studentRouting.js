"use strict"; 
(function (){
		
		angular.module('Student',['ngRoute','ngMessages']);
		angular.module('Student').config(['$routeProvider', ModuleConfig]);		
		
		function ModuleConfig($routeProvider) {
			$routeProvider				
				.when('/guest', {
					templateUrl : 'guest.html',
					controller : 'GuestCtrl',
					controllerAs : 'gCtrl'
				})
				.when('/register', {
					templateUrl : 'register.html',
					controller : 'RegisterCtrl',
					controllerAs : 'rCtrl'
				})
				.when('/profile', {
					templateUrl : 'profile.html',
					controller : 'ProfileCtrl',
					controllerAs : 'pCtrl'
				});
		}
	})(); 