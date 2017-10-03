/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('loginSplash', {
        templateUrl: 'app/views/loginAdminView.html',
        controller: 'LoginController'

    });
    angular.module('app.uds').controller('LoginController', ['$scope', '$location', '$timeout', 'Alerts', 'LoginService',

          function($scope, $location, $timeout, alerts, loginService) {

              $scope.formSubmit = function() {
                  $scope.expired = false;
                  if(loginService.login($scope.username, $scope.password)) {
                      $scope.error = '';
                      $scope.username = '';
                      $scope.password = '';
                      $location.url('/sourceTypes');
                  } else {
                      $timeout(function() { $scope.expired = true; }, 5000);
                      $scope.alerts.push({type: 'danger',msg: 'Incorrect username/password!'});

                  }
              };

              $scope.alerts = [
 //                 { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
 //                 { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
              ];

              $scope.addAlert = function() {
                  $scope.alerts.push({msg: 'Another alert!'});
              };

              $scope.closeAlert = function(index) {
                  $scope.alerts.splice(index, 1);
              };
        }]);

})();
