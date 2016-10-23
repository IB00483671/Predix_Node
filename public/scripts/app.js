var jouleApp = angular.module('jouleMain', []);

jouleApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/path/:param', {
		template : ''
	}).when('/home', {
		template : ''
	}).otherwise({
		redirect : '/home'
	});
} ]);