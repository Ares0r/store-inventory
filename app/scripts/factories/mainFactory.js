'use strict';
angular.module('storeApp', []);
angular.module('storeApp', []).factory('MainFac', function() {
	var obj = {};
	obj.showConsole = function() {
		console.log('it works!!');
	};

	return obj;

});