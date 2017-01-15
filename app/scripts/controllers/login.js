'use strict';
/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp').controller('loginCtrl', function($scope, $location, $http, $cookies) {

    function doSLoginMessage() {
        // alert(message);
        $location.path('main');
    }

    $scope.validateLogin = function() {

        $http.get('https://api.parse.com/1/login', {
            headers: {
                'X-Parse-Application-Id': 'eS1rNrAJQKbNEfm5AfA3jaY1Xajektnnu27XHT6d',
                'X-Parse-REST-API-Key': '38FBR0WkiWMjMOzOt5gkU7EcXrTwvYHsNWnrx40k',
                'Content-Type': 'application/json'
            },
            params: {
                'username': $scope.user.login,
                'password': $scope.user.password
            }
        })
        .then(function(data) {
            console.log('success',data, status);
            // console.log(userLogin);
            $cookies.put('username', data.username);
            doSLoginMessage('Gratulacje zalogowałeś się!');
        })
        .catch(function(data, status) {
            console.log('error', data, status);
        });
    };
});
