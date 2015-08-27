"use strict";

(function (){
	
	angular.module('Student').controller('GuestCtrl', GuestController);
	angular.module('Student').controller('RegisterCtrl', RegisterController);
	angular.module('Student').controller('ProfileCtrl', ProfileController);
		
	GuestController.$inject = ['$http'];
	function GuestController($http) {
		var gCtrl = this;
		gCtrl.createNewGuest = function() {
			console.log("Guest controller");
			$http({
				method: 'GET',
				url : 'http://localhost:8090/CrunchifySpringMVCTutorial/student'
			});
		}
	}	
		
	ProfileController.$inject = ['$routeParams'];
	function RegisterController($routeParams) {
		  var rCtrl = this;
		  rCtrl.params = $routeParams;
		  rCtrl.name = rCtrl.params.firstName;
		}


	ProfileController.$inject = ['$routeParams'];
	function ProfileController($routeParams) {
		var pCtrl = this;
		pCtrl.params = $routeParams;
		console.log('Profile Controller');
		}	

})();
