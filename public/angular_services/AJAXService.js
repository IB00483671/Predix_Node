var jouleApp = angular.module('jouleApp');

jouleApp.service('ajaxService', ['$http', '$q', function($http, $q) {
	this.get = function(requestParams) {
		var deferred = $q.defer();

		$http({
			method: "POST",
			url: "https://google.com",
			headers: {
				"Content-Type" : "application/json"
			},
			data: requestParams
		}).then(function(successRes) {
			deferred.resolve();
		}, function(errorRes) {
			deferred.reject();
		});

		return deferred.promise;
	};
}]);