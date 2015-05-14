(function() {

	'use strict';

	angular
		.module('angular-coordinates')
		.controller('mapController', map);

	function map($scope, coordinateFilterFilter) {

		$scope.map = {
			center: {
				latitude: $scope.lat || 62.4568, 
				longitude: $scope.lon || -114.3964
			}, 
			zoom: 7 
		};

		$scope.marker = {
			id: 0,
			coords: {
				latitude: $scope.lat || 62.4568,
				longitude: $scope.lon || -114.3964
			},
			options: {
				draggable: false
			}
		}

		var updateCenter = function() {
	 
	    	$scope.marker.coords = {
	    		latitude: parseFloat(coordinateFilterFilter($scope.lat, 'toDD')) || 62.4568,
	    		longitude: parseFloat(coordinateFilterFilter($scope.lon, 'toDD')) || -114.3964
	    	}

	    	$scope.map.center = {
	    		latitude: parseFloat(coordinateFilterFilter($scope.lat, 'toDD')) || 62.4568,
	    		longitude: parseFloat(coordinateFilterFilter($scope.lon, 'toDD')) || -114.3964
	    	}
	    	
	  	}

		$scope.$watch('lat', updateCenter);
		$scope.$watch('lon', updateCenter);
	}
})();