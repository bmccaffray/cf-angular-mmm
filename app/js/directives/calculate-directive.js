'use strict';

module.exports = function(app){
	app.directive('calculateDirective', function(){
		var calcDirective = {
			restrict: 'EAC',
			templateUrl: 'views/calculate.html'
		};
		return calcDirective;
	});
};