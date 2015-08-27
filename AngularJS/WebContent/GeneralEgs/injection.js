(function(){
	
	var app = angular.module('plunker', []);

	app.controller('GreetingCtrl', GreetingControl);
			
	function GreetingControl($rootScope, $http, $routeParams) {
	  var gc = this;
	  gc.name = "sreekanth";
	  gc.people = 
			 [{
				 "firstname" : "prashanth",
				 "phone" : 234,
			 	 "city"  : "secunderabad",
			 	 "college" : "JBIT",
			 	 "id" : 1
			 }, {
				 "firstname" : "sreekanth",
				 "phone" : 123,
			 	 "city"  : "hyderabad",
			 	 "college" : "OU",
			 	 "id" : 2
			 }, {
				 "firstname" : "lucky",
				 "phone" : 124,
			 	 "city"  : "kakinada",
			 	 "college" : "QUEST",
			 	 "id" : 3
			 }];
	  
	  gc.clickButton = function() {
		gc.clicked = "You Clicked me";
	  };
	  
	  gc.deleteButton = function(position) {
		gc.people.splice(position,1);	
	  };	  	 
	  
	  gc.compare = function(number) {
		  return (number%2 ==0);
	  }
	  
	  gc.addPerson = function() {
		  gc.newStudent.id = gc.people.length + 1;
		  gc.people.push(gc.newStudent);
		  
		  //to wipe out values
		  gc.newStudent = null;
		  console.log(gc.newStudent);
	  }	  	 
	}
	
	/*app.controller('HelloCtrl', HelloControl);
	function HelloControl() {
		  var hc = this;
		  hc.child = "World";
		}*/	

})();