(function (){
	
	var app = angular.module('plunker', []);

	app.controller('GreetingCtrl', GreetingControl);
	app.filter('PhoneFilter', phoneFilter);
	app.filter('CustomFilter', customFilter);	
	
	function GreetingControl() {
	  var gc = this;
	  gc.name = "sreekanth";
	  gc.people = 
			 [{
				 "firstname" : "prashanth",
				 "phone" : 234567892,
			 	 "city"  : "secunderabad",
			 	 "college" : "JBIT",
			 	 "id" : 1
			 }, {
				 "firstname" : "sreekanth",
				 "phone" : 12345434,
			 	 "city"  : "hyderabad",
			 	 "college" : "OU",
			 	 "id" : 2
			 }, {
				 "firstname" : "lucky",
				 "phone" : 124789045,
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
	  
	  gc.items = {
			  'color1' : { 'color': "red" },
			  'color2' : { 'color': "green" },			  
			  'color3' : { 'color': "blue" }
	  }
	}
	
	function phoneFilter() {
		return function(phone){
			if(phone){
				if(phone.length == 9) {
					return '('+phone.slice(0,3) + ')' + phone.slice(4);
				} else {
					return phone;
				} 
			} else {
					return phone;
				}
			}		
	}
	
	function customFilter() {
		return function(itemObject, reverse){
			var res = [];
			
			angular.forEach(itemObject, function(value, key){
				res.push(value);
			});
			res.sort(function(a,b){
				if(a.color > b.color) 
					return true;
				else 
					return false;
			});
			
			if(reverse == true) { res.reverse(); }
			return res;
			}
	}
	
	/*app.controller('HelloCtrl', HelloControl);
	function HelloControl() {
		  var hc = this;
		  hc.child = "World";
		}*/	

})();