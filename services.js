var superHeroServices = angular.module('superHeroServices', ['ngResource']);
   
  superHeroServices.factory('Hero', ['$resource', 
	function($resource) {
		return $resource('characters/:characterId.json', {}, {
			query: {method: 'GET'/*, params:{characterId:'characters'}*/, isArray:true} 
		});
	}]);

	
	
	 /*superHeroServices.factory('Hero', ['$resource', 
	function($resource) {
		return $resource('characters/:characterId.json', {}, {
			query: {method: 'GET', params:{characterId:'batman'}, isArray:true} */
	
	
	
	
	/*function($resource) {
		return $resource('characters/:superman.json', {}, {
			query: {method: 'GET', params:{characterId:'batman'}, isArray:true} */