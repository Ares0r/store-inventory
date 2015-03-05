'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
angular
  .module('storeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add-product', {
        templateUrl: 'views/add-product.html',
        controller: 'AddProductCtrl'
      })
      .when('/list-product', {
        templateUrl: 'views/list-product.html',
        controller: 'productListCtrl'
      })
      .when('/product-card', {
        templateUrl: 'views/product-card.html',
        controller: 'productCardCtrl'
      })
      .when('/product-info/:productId', {
        templateUrl: 'views/product-info.html',
        controller:'productInfoCtrl'    
      })
      .when('/product-change/:productId', {
        templateUrl: 'views/product-change.html',
        controller:'productChangeCtrl'    
      })
      .when('/product-delete/:productId', {
        templateUrl: 'views/product-delete.html',
        controller:'productDeleteCtrl'    
      })
      .otherwise({
        redirectTo: '/'
      });
  });
