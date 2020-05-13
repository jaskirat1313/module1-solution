(function () {
    'use strict';
    angular.module('LunchCheck',[]).
    controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchCheck = function(){
                            var lunch = $scope.lunchMenu;
                            if(lunch!=undefined && lunch!=''){
                              if(count(lunch)<=3)
                              {
                                $scope.message = 'Enjoy!';
                                $scope.color='green';
                            }
                              else
                              {
                                $scope.message = 'Too much!';
                              $scope.color='green';
                              }
                            }else{
                              $scope.message = 'Please enter data first';
                              $scope.color='red';
                            }
                          };
    }
    function count(string){
      var count = 0;
      var menu = string.split(',');
      for(var i=0;i<menu.length;i++){
        if(menu[i].trim()!=',')
          count++;
      };
      return count;
    }
  })();