/* App Module */
'use strict';

var superHeroApp = angular.module('superHeroApp', [
	'ngRoute',
	'superHeroAnimations',
	'superHeroControllers',
	'superHeroFilters',
	'superHeroServices'
	]);
	
	
superHeroApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/characters', {
			   templateUrl: 'character-list.html',
			   controller: 'SuperHeroListCtrl'
			}).
			when('/characters/:characterId', {
			   templateUrl: 'character-bio.html',
			   controller:  'CharacterBioCtrl'
			}).
			otherwise({
			   redirectTo: '/characters'
			});
	
	}]);	