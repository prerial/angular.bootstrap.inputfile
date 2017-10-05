/**
 * Declare (set), configure and bootstrap all modules in this file
 */
angular.module('udsviews', []);
angular.module('uds.directives', []);
angular.module('app.uds', ['ngRoute', 'ngMessages', 'ngAnimate', 'jlareau.pnotify', 'ui.bootstrap', 'angularFileUpload', 'udsviews', 'uds.directives'])
    .constant('Urls', {
        'saveEncryption':'/data/saveEncryptionPolicy.json',
        'getAllEncryptions':'/data/getAllEncryptionPolicy.json'
    })
    .constant('Alerts', {
        'encryption':{
            'saveTitle':'New Encryption Policy',
            'getAllTitle':'Get Encryption Policies'
        }
    })
    .config([ '$locationProvider', '$routeProvider',

        function( $locationProvider, $routeProvider) {

        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/login', {
                template: '<login-splash></login-splash>'
            })
            .when('/animations', {
                template: '<animations></animations>'
            })
            .when('/firstanim', {
                template: '<animations></animations>'
            })
            .when('/sourceTypes', {
                template: '<source-types></source-types>'
            })
            .when('/asyncFunctions', {
                template: '<async-functions></async-functions>'
            })
            .when('/stringMethods', {
                template: '<string-methods></string-methods>'
            })
            .when('/sharedMemory', {
                template: '<shared-memory></shared-memory>'
            })
            .when('/objectEntries', {
                template: '<object-entries></object-entries>'
            })
            .when('/objectDescriptors', {
                template: '<object-descriptors></object-descriptors>'
            })
            .when('/trailingCommas', {
                template: '<trailing-commas></trailing-commas>'
            })
            .when('/', {
                redirectTo: '/login'
            })

            .otherwise({redirectTo: '/login'});
    }])
    .controller('AppController',['$scope', function($scope){

        $scope.animations = [
            {'label': 'First Anim', 'path':'firstanim'},
            {'label': 'ngShow', 'path': 'ngshowanim'},
            {'label': 'ngIf', 'path':'ngifanim'}
        ];
        $scope.navigation = $scope.animations;
        $scope.users = [];
        $scope.$on('$routeChangeStart', function(event, next, current) {
            $scope.$broadcast("clearPopups");

//debugger;
//            console.log(JSON.stringify(next.$$route, null, 4));
//            $.getScript("bundles" + next.$$route.originalPath + "Bundle.js", function(sprm){
//
//           });
        });
    }]);

