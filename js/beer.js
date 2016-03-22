    var app=angular.module('beerStore',[]);

    app.controller('StoreController',['$http','$scope',function($http,$scope){
        var store = this;
        store.beers=[];
        $http.get('js/beer.json').success(function(data){store.beers=data;});

        $scope.sortType     = 'Nom'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchBeer   = '';     // set the default search/filter term

        $scope.beers = store.beers;
    }]);

