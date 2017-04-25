/**
 * Created by jnirg on 4/2/2017.
 */

// create the module and name it scotchApp
var StarbucksApp = angular.module('StarbucksApp', ['ngRoute']);

// configure our routes
StarbucksApp.config(function($routeProvider) {
    console.log("route provider")
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'templates/index.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/home', {
            templateUrl : 'templates/index.html',
            controller  : 'mainController'
        })


        .when('/placeorder', {
            templateUrl : 'templates/placeorder.html',
            controller  : 'placeorderController'
        })

        .when('/checkstatus', {
            templateUrl : 'templates/checkstatus.html',
            controller  : 'mainController'
        })

        .when('/updateorder', {
            templateUrl : 'templates/updateorder.html',
            controller  : 'mainController'
        })

        .when('/cancelorder', {
            templateUrl : 'templates/cancelorder.html',
            controller  : 'mainController'
        })

        .when('/payorder', {
            templateUrl : 'templates/about.html',
            controller  : 'contactController'
        })

        .otherwise({redirectTo: '/'});
});

// create the controller and inject Angular's $scope
StarbucksApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

StarbucksApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});




