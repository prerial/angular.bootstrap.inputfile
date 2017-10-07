(function(){
    "use strict";

    angular.module('app.uds').factory('CommonHttpRequestService', ['$rootScope', '$q', '$http', 'Urls',
        function($rootScope, $q, $http, Urls) {

            return {
                getRequestDataByID: getRequestDataByID,
                postRequestData: postRequestData,
                getRequestData: getRequestData
            };
            function httpPost(url, request){
                var deferred = $q.defer();
                $http.post(url, request)
                    .then(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (msg) {
                        $rootScope.$broadcast('error:server', msg);
                        deferred.reject(msg);
                    });
                return deferred.promise;
            }
            function httpGet(url){
                var deferred = $q.defer();
                $http.get(url)
                    .then(function functionSuccess(data) {
                        deferred.resolve(data);
                    },function functionError(msg) {
                        $rootScope.$broadcast('error:server', msg);
                        deferred.reject(msg);
                });
                return deferred.promise;
            }
            function postRequestData(data){
                return httpPost(Urls[data.requestType], data);
            }
            function getRequestData(data){
                return httpGet(Urls[data.requestType], data);
            }
            function getRequestDataByID(url){
                return httpGet(url);
            }
        }]);
})();
