/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('ngifanim', {
        templateUrl: 'app/views/animations/ngifanimView.html',
        controller: 'NgifanimController'

    });
    angular.module('app.uds').controller('NgifanimController', ['$scope', '$location', '$timeout', 'Alerts', 'LoginService',
          function($scope, $location, $timeout, alerts, loginService) {
              $scope.fadeAnimation = false;
              $scope.bool = false;
         }]);

})();
