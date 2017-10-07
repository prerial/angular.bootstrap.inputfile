/**
 * Declare (set), configure and bootstrap all modules in this file
 */
angular.module('udsviews', []);
angular.module('uds.directives', []);
angular.module('app.uds', ['ngRoute', 'ngMessages', 'ngAnimate', 'nvd3', 'jlareau.pnotify', 'ui.bootstrap', 'angularFileUpload', 'udsviews', 'uds.directives'])
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
            .when('/d3index', {
                template: '<d3index></d3index>'
            })
            .when('/animations', {
                template: '<animations></animations>'
            })
            .when('/ngshowanim', {
                template: '<ngshowanim></ngshowanim>'
            })
            .when('/ngifanim', {
                template: '<ngifanim></ngifanim>'
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
    .controller('AppController',['$scope', '$location', function($scope, $location){

        $scope.navid = '0';
        $scope.home = [
            {'label': 'File Upload', 'path': 'login', 'navid': '0'},
            {'label': 'Animation', 'path':'firstanim', 'navid': '1'},
            {'label': 'D3 data Visual', 'path':'d3index', 'navid': '2'}
        ];
        $scope.animations = [
            {'label': 'First Anim', 'path':'firstanim', 'navid': '1'},
            {'label': 'ngShow', 'path': 'ngshowanim', 'navid': '1'},
            {'label': 'ngIf', 'path':'ngifanim', 'navid': '1'}
        ];
        $scope.d3 = [
            {'label': 'First', 'path':'d3index', 'navid': '2'}
        ];
        $scope.navigation = $scope.home;
        $scope.setNavigation = function(e){
            $scope.navid = $(e.target).attr('navid');
//            debugger
        };
        $scope.$watch('navid', function(newValue, oldValue) {
            if(newValue !== oldValue){
                switch ($scope.navid){
                    case '0':
                        $scope.navigation = $scope.home;
                        break;
                    case '1':
                        $scope.navigation = $scope.animations;
                        break;
                    case '2':
                        $scope.navigation = $scope.d3;
                        break;

                }
            }
        });

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
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

