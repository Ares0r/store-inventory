'use strict';
/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp').controller('MainCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    // console.log($cookies.getAll());
    $scope.userLogin = $cookieStore.get('username');
    // console.log($cookieStore.get('username'));
    $('.main-window').html('<h1>Witaj!</h1> <br><br>Jesteś zalogowany jako: ' + $scope.userLogin);
    // console.log(getCookie('username'));
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
}]);