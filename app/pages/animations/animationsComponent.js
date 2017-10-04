/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('animations', {
        templateUrl: 'app/views/animationsView.html',
        controller: 'AnimationsController'

    });
    angular.module('app.uds').controller('AnimationsController', ['$scope', '$location', '$timeout', 'Alerts', 'LoginService',
          function($scope, $location, $timeout, alerts, loginService) {
              $scope.fadeAnimation = false;
              $scope.bool = false;
         }]);

})();
