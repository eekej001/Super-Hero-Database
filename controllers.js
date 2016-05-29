'use strict';  
  
  /* Services */
  
var superHeroServices = angular.module('superHeroServices', ['ngResource']);
  
  superHeroServices.factory('Hero', ['$resource', 
	function($resource) {
		return $resource('characters/:characterId.json', {}, {
			query: {method: 'GET', isArray:true}
			//query: {method: 'GET'/*, params:{characterId:'characters'}*/, isArray:true}
		});
	}]); 


/* Controllers */


var superHeroControllers = angular.module("superHeroControllers", []);

superHeroControllers.controller('SuperHeroListCtrl', ['$scope', 'Hero', '$timeout', '$interval', '$window',
  function ($scope, Hero, $timeout, $interval, $window) {
	$scope.heroes = Hero.query();
		$scope.y = 0;
		console.log($scope.y)
		
		$scope.BvS = $timeout(function() {
			$scope.y = 1;
		}, 2000);
		
		$scope.BvS2 = $timeout(function() {
			$scope.y = 2;
		}, 4000);		
		

		$scope.z = 0;

		var animCount = 0;
		
		$scope.vectorsL = [
			'images/vectors/BMvL.png',
			'images/vectors/GAv3.png',
			'images/vectors/SMv2L.png',
			'images/vectors/WWv2.jpg',
			'images/vectors/BMv3.png',
			'images/vectors/SMv4.png',
			'images/vectors/GAv4.png',
			'images/vectors/SGvL.png',
			'images/vectors/SMv5.png',
			'images/vectors/RFvL.png',
			'images/vectors/FLv.png',
			'images/vectors/ZMvL.png',
			'images/vectors/FLv3R.png',
			'images/vectors/GAv5L.png',
			'images/vectors/GLvL.png',
			'images/vectors/WWv4L.png'
		]
		
		$scope.vectorsR = [
			'images/vectors/BMvR.png',
			'images/vectors/GAv3.png',
			'images/vectors/SMv2R.png',
			'images/vectors/WWv2.jpg',
			'images/vectors/BMv3.png',
			'images/vectors/SMv4.png',
			'images/vectors/GAv4.png',
			'images/vectors/SGvR.png',
			'images/vectors/SMv5.png',
			'images/vectors/RFvR.png',
			'images/vectors/FLv.png',
			'images/vectors/ZMvR.png',
			'images/vectors/FLv3R.png',
			'images/vectors/GAv5R.png',
			'images/vectors/GLvR.png',
			'images/vectors/WWv4R.png'
		]		

		//$scope.initImigL = $scope.imgL;
		//$scope.initImigR = $scope.imgR;
		
	
	  var ranNumL = Math.floor(Math.random() * (arrayL));
	  var ranNumR = Math.floor(Math.random() * (arrayL));
	  var Lstore;
	  var Rstore;
	  
	  var arrayL = $scope.vectorsL.length
	
		$scope.imgL = $scope.vectorsL[ranNumL];
		$scope.imgR = $scope.vectorsR[ranNumR];	
		
	var vecSwap = $interval(function() {
		    animCount++;
			$scope.z = 'active';
			$scope.z3++;
			ranNumL = Math.floor(Math.random() * (arrayL));
			ranNumR = Math.floor(Math.random() * (arrayL));
			
			//console.log("Lstore Beginning: " + Lstore  + "      Rstore Beginning: " + Rstore);
			
		if (ranNumL == Lstore) {
			if (ranNumL == 0) {
				ranNumL = ranNumL + 1+ (Math.floor(Math.random() * (arrayL-2)));
				console.log("Change Now! Left C1");
			}
			else if (ranNumL == (arrayL - 1)) {
				ranNumL = ranNumL - (Math.floor(Math.random() * (arrayL-1)));
				console.log("Change Now! Left C2");
			} 
			
			else {
				ranNumL = ranNumL + 1;
				console.log("Change Now! Left C3");
			} 
			
		}
		
		if (ranNumR == Rstore) {
			if (ranNumR == 0) {
				ranNumR = ranNumR + 1 + (Math.floor(Math.random() * (arrayL-2)));
				console.log("Change Now! Right C1");
			}
			else if (ranNumR == (arrayL - 1)) {
				ranNumR = ranNumR - (Math.floor(Math.random() * (arrayL-1)));
				console.log("Change Now! Right C2");
			} 
			
			else {
				ranNumR = ranNumR + 1;
				console.log("Change Now! Right C3");
			} 
			
		}
		
			
			if (ranNumL == ranNumR && ranNumL == 0) {
			$scope.imgL = $scope.vectorsL[ranNumL];
			$scope.imgR = $scope.vectorsR[ranNumR + 1];
			Lstore = ranNumL;
			Rstore = (ranNumR - 1);
			console.log("ranNumL: " + ranNumL  + "      ranNumR: " + (ranNumR + 1));
			}
			else if (ranNumL == ranNumR && ranNumL == (arrayL - 1)) {
			$scope.imgL = $scope.vectorsL[ranNumL];
			$scope.imgR = $scope.vectorsR[ranNumR - 1];
			Lstore = ranNumL;
			Rstore = (ranNumR - 1);
			console.log("ranNumL: " + ranNumL  + "      ranNumR: " + (ranNumR - 1));
			}

			else if (ranNumL == ranNumR) {
			$scope.imgL = $scope.vectorsL[ranNumL];
			$scope.imgR = $scope.vectorsR[ranNumR + 1];
			Lstore = ranNumL;
			Rstore = (ranNumR + 1);
			console.log("ranNumL: " + ranNumL  + "      ranNumR: " + (ranNumR + 1));
			}			
			
			else{
			$scope.imgL = $scope.vectorsL[ranNumL];
			$scope.imgR = $scope.vectorsR[ranNumR];
			Lstore = ranNumL;
			Rstore = ranNumR;
			console.log("ranNumL: " + ranNumL  + "      ranNumR: " + ranNumR);
			}
			$scope.z = 'inactive';
			//console.log($scope.z3);
			
			//var vecResult = document.getElementsByClassName("vector").className;
			//var jQresult = angular.element(vecResult);
			//jQresult.className = "";
			//console.log(jQresult);
			
			var L1 = angular.element('.vectorL');
			var L2 = angular.element('.vectorL2');
			var R1 = angular.element('.vectorR');
			var R2 = angular.element('.vectorR2');
			//console.log("animCount: " + (animCount%2));
			if (animCount%2 == 0) {
			L1[0].className = "vectorL2";
			R1[0].className = "vectorR2";
			$scope.z = 0;
			//console.log("zero");
			}
			
			else {
			L2[0].className = "vectorL";
			R2[0].className = "vectorR";
			//console.log("one");	
			$scope.z = 1;
			}
			
		
			$scope.$on('$destroy', function() {
				$interval.cancel(vecSwap);
		});
			
			//console.log("VectorL Classname: " + t[0].className + " VectorR Classname: " + t[1].className);
			//console.log(angular.element('.vector'));
			
			//$window.document.getElementsByClassName('vector').className = "";
		
		}, 4000); 
		
		//get element, add fade-in for 2.5s, add class after 2.5s with fade-out animation, remove all classes after 5 seconds
		

				

		
		
		

	/*	console.log("Does this even work?");

	  
		var batMove = function(){superHeroAnimations.animation('.bat', function() {
			console.log("batman");
			var moveRight = function(element, className, done) {

				element.css({
					position: 'absolute',
					left: 0,
					top: 50
				});
		
				jQuery(element).animate({
					left: 440,	
					top: 50			
				}, done);	
			}

				moveRight();

		})};

		var krypMove = function(){superHeroAnimations.animation('.kryp', function() {
	
			console.log("superman");
			var moveLeft = function(element, className, done) {

				element.css({
					position: 'absolute',
					right: 0,
					top: 50
				});
		
				jQuery(element).animate({
					right: 350,	
					top: 50			
				}, done);	
			}
			
			
				moveLeft();

				

		})};		
		
		batMove();
		krypMove();	*/
		//moveRight();
		//moveLeft();
}]);			
		//$scope.order='power';


		
		
superHeroControllers.controller('CharacterBioCtrl', ['$scope', '$routeParams', 'Hero', '$interval',
  function ($scope, $routeParams, Hero, $interval) {
	  $scope.character = Hero.get({characterId: $routeParams.characterId}, function(character) {
		  $scope.mainImg = character.image;

		var x = 0;
		
		$scope.clock = $interval(function() {
			x++;
			console.log(x);
		}, 1000);	
		  
		  
		$scope.resetClock = function() {
			x = 0;
		};  
		
		$scope.reveal = $interval(function() {
			if ($scope.mainImg == character.image && x%4 == 0) {
				$scope.mainImg = character.rimage;
			}
			else if ($scope.mainImg == character.rimage && x%4 == 0) {
				$scope.mainImg = character.image;
			}			
		}, 1000);	  
		
		$scope.$on('$destroy', function() {
			$interval.cancel($scope.clock);
		});
	  
	  });
		
		$scope.setImg = function(img) {
			$scope.mainImg = img;
			
		}; 



	

		
  }]);		
  
  
  /* Filters */
  angular.module('superHeroFilters', []).filter('cross', function() {
	  return function(input) {
		  return (input == 'N/A') ? '\u2718': input;
	  };
  });
  


/*

  // Controllers 
'use strict';

var superHeroControllers = angular.module("superHeroControllers", []);

superHeroControllers.controller('SuperHeroListCtrl', ['$scope', '$http',
  function ($scope, $http) {
	$http.get('characters.json').success(function(data) {
		$scope.heroes = data;	
		});			
		//$scope.order='power';

}]);
		
		
superHeroControllers.controller('CharacterBioCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
	  $http.get('characters/' + $routeParams.characterId + '.json').success(function(data) {
		  $scope.character = data;
		  $scope.mainImg = data.image;
	  });
		
		$scope.setImg = function(img) {
			$scope.mainImg = img;
			
		}; 		  
  }]);		
  
  
  // Filters 
  angular.module('superHeroFilters', []).filter('cross', function() {
	  return function(input) {
		  return (input == 'N/A') ? '\u2718': input;
	  };
  });
  
  */
  