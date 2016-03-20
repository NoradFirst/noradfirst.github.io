(function (){
    var app=angular.module('beerStore',[]);

    app.controller('StoreController',['$http',function($http){
    //app.controller('StoreController',function(){
    // this.beers=test;});
        var store = this;
        store.beers=[];
        $http.get('js/beer.json').success(function(data){store.beers=data;})
    }]);
})();
