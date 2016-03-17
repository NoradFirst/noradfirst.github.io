(function() {
    var app = angular.module('beerStore', []);

    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.beers = [];
        $http.get('/beer.json').success(function(data){
            store.beers=data;
        });
    }]);

})();