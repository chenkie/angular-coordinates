(function() {

	'use strict';

	angular
		.module('angular-coordinates')
		.controller('mapCtrl', map);

	function map($scope, coordinateFilterFilter, $timeout) {

		var vm = this;

		$scope.map = {
			center: {
				latitude: $scope.lat || 62.34, 
				longitude: $scope.lon || -114.23
			}, 
			zoom: 7 
		};

		$scope.marker = {
			id: 0,
			coords: {
				latitude: $scope.lat || 62.34,
				longitude: $scope.lon || -114.23
			},
			options: {
				draggable: false
			}
		}
		$scope.options = {scrollwheel: false};
		$scope.coordsUpdates = 0;
		$scope.dynamicMoveCtr = 0;

		var updateCenter = function() {
	    	$scope.marker.coords = {
	    		latitude: parseFloat(coordinateFilterFilter($scope.lat, 'toDD')) || 62.34,
	    		longitude: parseFloat(coordinateFilterFilter($scope.lon, 'toDD')) || -114.23
	    	}

	    	$scope.map.center = {
	    		latitude: parseFloat(coordinateFilterFilter($scope.lat, 'toDD')) || 62.34,
	    		longitude: parseFloat(coordinateFilterFilter($scope.lon, 'toDD')) || -114.23
	    	}
	    	
	  	}

		$scope.$watch('lat', updateCenter);
		$scope.$watch('lon', updateCenter);
	}
})();