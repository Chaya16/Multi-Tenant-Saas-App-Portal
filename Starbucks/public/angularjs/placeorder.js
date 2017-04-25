var StarbucksApp = angular.module('StarbucksApp', []);
StarbucksApp.controller('placeorderController', function($scope) {
    // create a message to display in our view
    console.log("place controller");
});

/*
StarbucksApp.controller('placeorderController', function($scope, $http) {
    console.log("place controller");
    // create a message to display in our view
   console.log("placeorderController");
     var store = $scope.location;
     console.log(store);

     $scope.placeOrder = function () {
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
     };

     console.log(order);

    $scope.placeorder = function()
    {
        console.log("placeorderController");
    }

});*/