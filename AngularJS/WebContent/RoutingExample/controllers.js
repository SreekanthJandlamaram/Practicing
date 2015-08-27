"use strict";

(function (){
			
	angular.module('plunker').controller('ProfileCtrl', ProfileController);
	angular.module('plunker').controller('HomeCtrl', HomeController);
	angular.module('plunker').controller('LoginCtrl', LoginController);
	
	function LoginController() {
	  var lCtrl = this;
	  console.log('Login Controller');
	}

	HomeController.$inject = ['$routeParams'];
	function HomeController($routeParams) {
		var hCtrl = this;
		hCtrl.params = $routeParams;
		console.log('Home Controller');
	}	

	ProfileController.$inject = ['$routeParams'];
	function ProfileController($routeParams) {
		var pCtrl = this;
		pCtrl.params = $routeParams;
		console.log('Profile Controller');
		}	

})();
