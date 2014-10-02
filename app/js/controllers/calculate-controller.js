'use strict';

module.exports = function(app){
	app.controller('calculateController', function($scope, calculateService){
		$scope.calcMean = function(value){
			console.log(value);
			calculateService.mean(value);
		}
	});
};