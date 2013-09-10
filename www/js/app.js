var runners = angular.module('runnersApp', []).
	config(['$routeProvider', function($routeProvider){
		//use animation		
		$routeProvider.
			when('/practice', {
				templateUrl: '../partials/practice.html', 
				controller: PracticeCtrl}).
			when('/home', {
				templateUrl: '../partials/home.html', 
				controller: HomeCtrl}
			).
			otherwise({redirectTo: '/home'});
	}]);

// Geolocates user on the map if possible
runners.ggeolocateUser = function(map){
        var IWGelocation = new google.maps.Marker({
                        map: map}); 
        //success gps geolocation
        function onSuccess(position){
        	var element = document.getElementById('geolocation');
        	var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        	IWGelocation.setPosition(location);        	
        	map.setCenter(location);	                	        	
	    }

	    function onError(error){
	    	// Some error happned
	    	var errpos = new google.maps.LatLng(60, 105);
	    	IWGelocation.setPosition(errpos)                                
            map.setCenter(errpos);  
	    }
        //Try gps geolocation        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        return IWGelocation;
}
