/**
 * Created by Nguyen Cong Thanh on 2016/10/21.
 */
(function () {
    'use strict';

    angular.module('MsgApp',[])
        .controller('MsgController',MsgController);

    MsgController.$inject = ['$scope'];
    
    function MsgController($scope) {
        $scope.menuItems = "";
        $scope.msg = "";
        
        $scope.checkMenu = function () {
            if($scope.menuItems) {
                var NoMenuItems = $scope.menuItems.split(',').length;

                if (NoMenuItems > 3) {
                    $scope.msg = "Too much!";
                } else {
                    $scope.msg = "Enjoy!";
                }
            } else {
                $scope.msg = "Please enter data first";
            }
        };
    }

})();