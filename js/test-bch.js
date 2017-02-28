      var app = angular.module("busqueda", []); 
      app.controller("myCtrl", ['$scope', '$filter', '$http', function ($scope, $filter, $http){
       $scope.names=[];
      
         $scope.getpeople = $http.get("MOCK_DATA.json").then(function(response) {
                angular.forEach(response.data, function(value, key){
                $scope.names.push(value);
            });
          });
      
          $scope.currentPage = 0;
          $scope.pageSize = 7;	
      	  $scope.pagination = 0;
          $scope.currentPageBack=0;
      
          $scope.myFunction = function(num) {
              $scope.currentPage=num;
              var myEl = angular.element( document.querySelector( '.btn-' + num ) );
               myEl.parent().children().removeClass('activo');
      		 myEl.addClass('activo');
          }
      
          $scope.getData = function () {
            return $filter('filter')($scope.names, $scope.busca);
            
          }
      	  $scope.getNumber = function(pagination) {
      	    return new Array(Math.ceil($scope.getData().length/$scope.pageSize));   
      	  }
      
      	$scope.cambiatexto=function(event){
      		if (event.target.innerHTML == "Abrir") {
      			event.target.innerHTML="Cerrar";
      		}else{
      			event.target.innerHTML="Abrir";
      		};
      	}
      
          $scope.resetStart = function(){
              $scope.currentPage = 0;
              var myEl = angular.element( document.querySelector( '.btn-0' ) );
               myEl.parent().children().removeClass('activo');
      		 myEl.addClass('activo');
          }
      
      }]);
      
      app.filter('startFrom', function() {
          return function(input, start) {
              start = +start; 
              return input.slice(start);
          }
      })
      
