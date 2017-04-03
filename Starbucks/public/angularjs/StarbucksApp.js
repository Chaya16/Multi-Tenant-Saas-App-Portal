/**
 * Created by jnirg on 4/2/2017.
 */
/*
var Home = angular.module('Home', ['ui.router']);

Home.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('Home', {
        url : '/',
        views: {
            'header': {
                templateUrl : 'templates/header.html',
            },
            'content': {
                templateUrl : 'templates/index.html',
            },
        }
    })
    $urlRouterProvider.otherwise('/');
});*/

// create the module and name it scotchApp
var StarbucksApp = angular.module('StarbucksApp', ['ngRoute']);

// configure our routes
StarbucksApp.config(function($routeProvider) {
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
        .when('/contact', {
            templateUrl : 'templates/contact.html',
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

StarbucksApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});