"use strict";

(function() {

	/*var app = angular.module('Student',[]);	
	app.run(['$rootScope', '$route', function($rootScope, $route) {
	    $rootScope.$on('$routeChangeSuccess', function() {
	        document.title = $route.current.title;
	    });
	}]);*/
	
	/*angular.module('Student').controller('TitleCtrl', TitleController);
	TitleController.$inject = ['$rootScope', '$route'];
	function TitleController($rootScope, $route) {
		
	}*/
	angular.module('Student').controller('GuestCtrl', GuestController);
	angular.module('Student').controller('RegisterCtrl', RegisterController);
	angular.module('Student').controller('ProfileCtrl', ProfileController);	
	
	
	
	GuestController.$inject = [ '$http' ];
	function GuestController($http) {
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

//method : 'GET',
// url : 'http://localhost:8090/CrunchifySpringMVCTutorial/student'