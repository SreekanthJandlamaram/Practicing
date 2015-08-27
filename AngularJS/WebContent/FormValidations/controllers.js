"use strict";

(function (){
	angular.module('plunker',['ngMessages']);
	angular.module('plunker').controller('GreetingCtrl', GreetingController);
	
	function GreetingController() {
	  var lCtrl = this;
	  console.log('Login Controller');
	}
})();
