"use strict";

(function() {

	angular.module('Student').controller('GuestCtrl', GuestController);
	angular.module('Student').controller('RegisterCtrl', RegisterController);
	angular.module('Student').controller('ProfileCtrl', ProfileController);

	GuestController.$inject = [ '$http' ];
	function GuestController($http) {
		console.log("In GuestController");
		var gCtrl = this;
		gCtrl.sendForm = function(guestData) {

			var guestDataObj = {
				"Name" : guestData.Name
			};
			console.log(guestDataObj);
			$http({
				method : 'POST',
				url : 'http://localhost:8090/CrunchifySpringMVCTutorial/reserve',
				data : guestDataObj				
			// method : 'GET',
			// url : 'http://localhost:8090/CrunchifySpringMVCTutorial/student'
			});
		};
	}

	ProfileController.$inject = [ '$routeParams' ];
	function RegisterController($routeParams) {
		var rCtrl = this;
		rCtrl.params = $routeParams;
		rCtrl.name = rCtrl.params.firstName;
	}

	ProfileController.$inject = [ '$routeParams' ];
	function ProfileController($routeParams) {
		var pCtrl = this;
		pCtrl.params = $routeParams;
		console.log('Profile Controller');
	}

})();
