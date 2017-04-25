/**
 * Created by jnirg on 4/2/2017.
 */

// create the module and name it scotchApp
var StarbucksApp = angular.module('StarbucksApp', ['ngRoute']);

// configure our routes
StarbucksApp.config(function($routeProvider) {

    var link = ''
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
            templateUrl : 'templates/payorder.html',
            controller  : 'mainController'
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


angular.module('StarbucksApp').controller("placeorderController", function ($scope, $http, $route, $rootScope,
                                                                  $interval) {
    $scope.message = 'Placing an order';
    console.log("Heyo!!!!");

    $scope.placeOrder = function () {

        console.log("in the place order function");

        console.log("placeorder called");

        console.log("inside placeordeCtrl");
        var order = {
            "location": "store-1",
            "items": [{
                "qty": $scope.qty,
                "name": $scope.drink,
                "milk": $scope.milk,
                "size": $scope.size
            }]
        }



        console.log(order);

        $http({
            method: 'POST',
            url: 'http://54.183.83.252:8000/Starbucks1/v1/starbucks/order',
            headers: {'Content-Type': 'application/x-www-form-urlencoded','Host':'Starbucks1.com','Access-Control-Allow-Credentials': true},
            data: order

        }).success(function (data) {
            $scope.msg = "Order placed";
            //message should be displayed that your order has been placed
            //manage this flag in UI
            $scope.msg_flag = false;
            $route.reload();
        });

    }
});




