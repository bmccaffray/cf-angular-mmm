'use strict';

module.exports = function(app){
	app.controller('calculateController', function($scope){

		$scope.mean = function(numArray){
			numArray = $scope.parseStr(numArray);
			console.log(numArray);
			if(!numArray){
				return '';
			}
			var mean = 0;

			for(var i = 0; i < numArray.length; i++){
			    mean += numArray[i];
			}
			mean /= numArray.length;

			mean = Math.round(mean * 100) / 100;

			return mean;
		};

		$scope.median = function(numArray){
			console.log(numArray);
			if(!numArray){
				return '';
			}
			var medianMin = 0, medianMax = 0, median = 0;
			if((numArray.length % 2) == 0){
			    medianMin = numArray.length/2 - 1;
			    medianMax = numArray.length/2;
			    median = (numArray[medianMin] + numArray[medianMax])/2;
			} else {
				median = numArray[Math.floor(numArray.length/2)];
			}

			return median;
		};

		$scope.mode = function(numArray){
			console.log(numArray);
			if(!numArray){
				return '';
			}
			var mode = 0;
			var modeNum;
			var count = 0;
			var maxCount = 0;
			for(var i = 0; i < numArray.length; i++){
				if(numArray[i] == (numArray[i+1])){
			        count++;
			        if(count > maxCount){
			            modeNum = numArray[i];
			            maxCount = count;
			        }
				} else {
					count = 0;
				}
			}
			if(modeNum){
				mode = modeNum;
			} else {
				mode = 'no mode';
			}

			return mode;
		};

		$scope.parseStr = function(string){
			return 'NO!';
		};

	});
};