(function() {
    "use strict";

    angular.module('app.uds').component('heroesList', {
        templateUrl: 'app/views/heroes/heroes-list.html',
        controller: 'HeroesListController'

    });
    angular.module('app.uds').controller('HeroesListController', ['$scope', '$location', '$timeout', 'Urls', 'notificationService', 'CommonHttpRequestService',
        function(scope, location, timeout, urls, notificationService, requestService) {

        var self = this, data;
            self.heroes = [];

            data = {requestType: 'getHeroes'};
            requestService.getRequestData(data)
                .then(function(resp){
                    self.heroes = resp.data.result;
                    }, function(msg){
                        console.log('Error: ' + msg.statusText + ', status: ' + msg.status);
                        showResult(' Error: ' + msg.statusText + ', status: ' + msg.status, 'error')
                    }
                );

            this.add = function(hero){
                if(hero !== ''){
                    var id = self.heroes[self.heroes.length-1].id;
                    self.heroes.push({'id':++id,'name': hero});
                    showResult(hero + ' was added successfully!', 'success')
                }
            };

            this.delete = function(hero){
                self.heroes.splice(self.heroes.indexOf(hero), 1);
                showResult(hero.name + ' was successfully deleted!', 'success')
            };

            function showResult(msg, type){
                timeout(function() { $scope.expired = true; }, 5000);
                notificationService[type](msg);
            }

        }]);
})();
