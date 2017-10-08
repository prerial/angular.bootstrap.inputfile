(function() {
    "use strict";

    angular.module('app.uds').component('dashboard', {
        templateUrl: 'app/views/heroes/dashboard.html',
        controller: 'DashboardController'

    });
    angular.module('app.uds').controller('DashboardController', ['$scope', '$location', '$timeout', 'Urls', 'notificationService', 'CommonHttpRequestService',
        function(scope, location, timeout, urls, notificationService, requestService) {

            var self = this, data;
            this.heroes = [];
            data = {requestType: 'getHeroes'};
            requestService.getRequestData(data)
                .then(function(resp){
                        self.heroes = resp.data.result.slice(0,4);
                    }, function(msg){
                        console.log(msg + 'failed');
                        showResult(' Error: ' + msg.statusText + ', status: ' + msg.status, 'error')
                    }
                );

            function showResult(msg, type){
                timeout(function() { $scope.expired = true; }, 5000);
                notificationService[type](msg);
            }

        }]);
})();
