var superHeroAnimations = angular.module('superHeroAnimations', ['ngAnimate']);

superHeroAnimations.animation('.character', function() {
	
	console.log("fade");
	   var fadeIn = function(element, className, done) {
	   if(className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',
			left: 0,
			top: 0,			
			opacity: 0
		});
		
		jQuery(element).animate({
			opacity: 1,
			left: 0,
			height: 400,	
			top: 0			
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	
	
		var fadeOut = function(element, className, done) {
	   if (className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',
			left: 0,
			top: 0,				
			opacity: 1
		});
		
		jQuery(element).animate({	
			height: 400,		
			opacity: 0
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	return {
		addClass: fadeIn, 
		removeClass: fadeOut 
	};
	
	
	
//////////////////////////////////////////////


	
	/*
	var animateUp = function(element, className, done) {
	   if(className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',
			top: 500,
			left: 0,
			display: 'block'
		});
		
		jQuery(element).animate({
			top: 0
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	
	
		var animateDown = function(element, className, done) {
	   if (className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',
			left: 0,
			top: 0
		});
		
		jQuery(element).animate({
			top: -500
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	return {
		addClass: animateUp, 
		removeClass: animateDown 
	}; 
	 */
	
	
}); 


/////////////////////////////


superHeroAnimations.animation('.bat', function() {
	
		console.log("batman");
	   var moveRight = function(element, className, done) {
		// if (className != active) {
		//	 return;
		// }  
		//console.log("bat Add");
		
		element.css({
			position: 'absolute',
			left: 0,
			opacity: 0.8,
			top: 50
		});
		
		jQuery(element).animate({
			left: 440,	
			top: 50	
		}, done);	
		
		element.css({
			position: 'absolute',
			left: 440,
			top: 50
		});		
	}
	
	var fadeAway = function(element, className, done) {
		console.log("batRemove");
		
		jQuery(element).animate({
			opacity: 0
			//z-index: -100			
		}, done);
		
	}
	
	return {
		addClass: moveRight,
		removeClass: fadeAway
	};
});

superHeroAnimations.animation('.kryp', function() {
	
	console.log("superman");
	   var moveLeft = function(element, className, done) {
			//if (className != active) {
			// return;
		// }
		//console.log("sup Add");
		
		element.css({
			position: 'absolute',
			right: 0,
			opacity: 0.8,
			top: 50
		});
		
		jQuery(element).animate({
			right: 350,		
			top: 50			
		}, done);	
		
		element.css({
			position: 'absolute',
			right: 350,
			top: 50
		});		
	}
	
	 	var fadeAway = function(element, className, done) {
		   console.log("sup Remove");
			
		jQuery(element).animate({
			opacity: 0
			//z-index: -100			
		}, done);
		
	}
	
	return {
		addClass: moveLeft,
		removeClass: fadeAway
	};
});














superHeroAnimations.animation('.vectorL', function() {
	
	   var fadeIn = function(element, className, done) {
	   if(className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',	
			opacity: 0
		});
		
		jQuery(element).animate({
			opacity: 0.8,
			height: 600			
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	
	
		var fadeOut = function(element, className, done) {
	   if (className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',
			opacity: 0.8
		});
		
		jQuery(element).animate({	
			height: 600,		
			opacity: 0
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	return {
		addClass: fadeIn, 
		removeClass: fadeOut 
	};
});

superHeroAnimations.animation('.vectorR', function() {
	
	   var fadeIn = function(element, className, done) {
	   if(className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',			
			opacity: 0
		});
		
		jQuery(element).animate({
			opacity: 1,
			height: 600				
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	
	
		var fadeOut = function(element, className, done) {
	   if (className != 'active') {
		   return;   
	   }
		
		element.css({
			position: 'absolute',				
			opacity: 1
		});
		
		jQuery(element).animate({	
			height: 600,		
			opacity: 0
		}, done);
		
		return function(cancel) {
			if(cancel) {
				element.stop();
			}
		};	
	}
	
	
	return {
		addClass: fadeIn, 
		removeClass: fadeOut 
	};
});










