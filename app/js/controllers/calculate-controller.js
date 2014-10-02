'use strict';

module.exports = function(app){
	app.controller('calculateController', function($scope, calculateService){
		$scope.calcMean = function(value){
			return calculateService.mean(value);
		}
		$scope.calcMedian = function(value){
			return calculateService.median(value);
		}
		$scope.calcMode = function(value){
			return calculateService.mode(value);
		}
	});
};