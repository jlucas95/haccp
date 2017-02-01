var app = angular.module("haccp", ["ui.router"]);




app.config(["$stateProvider", function($stateProvider) {
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

app.controller("SummaryCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.year = (new Date()).getFullYear();
}]);
app.controller('AddCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.week = Number(moment().format("w"));
  $scope.year = Number(moment().format("Y"));
    var supplierObj = {
        date: null,
        product: null,
        temp: null,
        covered: "goed",
        THT: "goed",
        action: null
    };
    var suppliers = [{
        name: "DeliXL"
    }, {
        name: "Daily Fresh"
    }, {
        name: "Becker-Rooyen"
    }];
    $scope.suppliers = [];
    for (var supplier of suppliers) {
        $scope.suppliers.push(angular.extend(supplier, supplierObj));
    }
    var storageObj = {
        date: null,
        temp: null,
        packaged: true,
        fifo: true,
        action: null
    };
    var storages = [{
                name: "Koeling 1"
            }, {
                name: "Koeling 2"
            }, {
                name: "Koelwerkbank 1"
            }, {
                name: "Koelwerkbank 2"
            }, {
                name: "Diepvries 1"
            }, {
                name: "Diepvries 2"
            }, {
                name: "Diepvries 3"
            }, {
                name: "Saladiëre"
            }, {
                name: "Bain Marie 1"
            }, {
                name: "Bain Marie 2"
              }
    ];
    $scope.storages = [];
    for (storage of storages) {
      $scope.storages.push(angular.extend(storage, storageObj));
    }
}]);
