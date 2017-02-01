var app = angular.module("haccp", ["ui.router"]);




app.config(["$stateProvider", function($stateProvider){
  $stateProvider.state({
    name: 'summary',
    url: '/',
    templateUrl: 'summary.html',
    controller: 'SummaryCtrl'
  })
  .state({
    name: 'add',
    url: '/add',
    templateUrl: '/add.html',
    controller: 'AddCtrl'
  });
}]);

app.controller("SummaryCtrl",
["$scope", "$http" ,function($scope, $http){
  $scope.year = (new Date()).getFullYear();
}]);
app.controller('AddCtrl', ['$scope', '$http', function($scope, $http){
  var supplierObj = {date: null, product: null, temp: null, covered: true, THT: true, action: null};
  var suppliers =  [{name: "DeliXL"},{name: "Daily Fresh"} , {name: "Becker-Rooyen"}];
  $scope.suppliers = [];
  for (var index in suppliers) {
    $scope.suppliers.push(angular.extend(suppliers[index], supplierObj));
  }
  var storageObj = {date: null, temp: null, packaged: 'goed', THT: 'goed', action: null};
  $scope.storage = [{name}]
}]);
