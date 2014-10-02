'use strict';

require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);

require('./controllers/calculate-controller')(mmmApp);

require('./services/calculate-service')(mmmApp);

mmmApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/calculate.html',
		controller: 'calculateController'
	}).otherwise({
		redirectTo: '/'
	});
}]);