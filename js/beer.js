    var app=angular.module('beerStore',[]);

    app.controller('StoreController',['$http','$scope',function($http,$scope){
        var store = this;
        store.beers=[];
        $http.get('js/beer.json').success(function(data){store.beers=data;});

        $scope.sortType     = 'Nom'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchBeer   = '';     // set the default search/filter term
        $scope.color = 'all';
        $scope.imgClassAll="over";

        $scope.changeClass = function(){
            $scope.imgClassAll="transp";
            $scope.imgClassBlanche="transp";
            $scope.imgClassBlonde="transp";
            $scope.imgClassAmbree="transp";
            $scope.imgClassRubis="transp";
            $scope.imgClassBrune="transp";
            $scope.imgClassNoire="transp";
            if ($scope.color == 'Blanche')
                $scope.imgClassBlanche="over";
            if ($scope.color == 'Blonde')
                $scope.imgClassBlonde="over";
            if ($scope.color != 'Blanche' && $scope.color != 'Blonde' && $scope.color != 'Rubis' && $scope.color != 'Brune' && $scope.color != 'Noire'&& $scope.color != 'all')
                $scope.imgClassAmbree="over";
            if ($scope.color == 'Rubis')
                $scope.imgClassRubis="over";
            if ($scope.color == 'Brune')
                $scope.imgClassBrune="over";
            if ($scope.color == 'Noire')
                $scope.imgClassNoire="over";
            if ($scope.color == 'all'){
                $scope.imgClassAll="over";
                $scope.imgClassBlanche="";
                $scope.imgClassBlonde="";
                $scope.imgClassAmbree="";
                $scope.imgClassRubis="";
                $scope.imgClassBrune="";
                $scope.imgClassNoire="";}
        };

        $scope.beers = store.beers;
    }]);

