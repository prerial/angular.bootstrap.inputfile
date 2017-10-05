/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('ngshowanim', {
        templateUrl: 'app/views/animations/ngshowanimView.html',
        controller: 'NgshowanimController'

    });
    angular.module('app.uds').controller('NgshowanimController', ['$scope', '$location', '$timeout', 'Alerts', 'LoginService',
        function($scope, $location, $timeout, alerts, loginService) {
            $scope.fadeAnimation = false;
            $scope.bool = false;
        }]);

})();
