/**
 * Declare (set), configure and bootstrap all modules in this file
 */
angular.module('udsviews', []);
angular.module('uds.directives', []);
angular.module('app.uds', ['ngRoute', 'ngMessages', 'ngAnimate', 'nvd3', 'ui.grid', 'jlareau.pnotify', 'ui.bootstrap', 'angularFileUpload', 'udsviews', 'uds.directives'])
    .constant('Urls', {
        'getHeroes':'/data/heroes.json',
        'saveEncryption':'/data/saveEncryptionPolicy.json',
        'getUiGridData':'/data/getUiGridData.json',
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
            .when('/dashboard', {
                template: '<dashboard></dashboard>'
            })
            .when('/heroes', {
                template: '<heroes-list></heroes-list>'
            })
            .when('/d3index', {
                template: '<d3index></d3index>'
            })
            .when('/d3ibook/chapter1', {
                template: '<chapter1-example1></chapter1-example1>'
            })
            .when('d3ibook/chapter1/example1', {
                template: '<chapter1-example1></chapter1-example1>'
            })




            .when('/uigrid', {
                template: '<uigrid></uigrid>'
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
            {'label': 'UI Grid', 'path': 'uigrid', 'navid': '0'},
            {'label': 'Animation', 'path':'firstanim', 'navid': '1'},
            {'label': 'Heroes', 'path':'heroes', 'navid': '0'},
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
        $scope.d3book = [
            {'label': 'Chapter 1', 'path':'d3ibook/chapter1', 'navid': '2'},
            {'label': 'Chapter 2', 'path':'d3ibook/chapter2', 'navid': '2'},
            {'label': 'Chapter 3', 'path':'d3ibook/chapter3', 'navid': '2'},
            {'label': 'Chapter 4', 'path':'d3ibook/chapter4', 'navid': '2'},
            {'label': 'Chapter 5', 'path':'d3ibook/chapter5', 'navid': '2'},
            {'label': 'Chapter 6', 'path':'d3ibook/chapter6', 'navid': '2'}
        ];
        $scope.d3book_chapter1 = [
            {'label': 'Example 1', 'path':'d3ibook/chapter1/example1', 'navid': '2'},
            {'label': 'Example 2', 'path':'d3ibook/chapter1/example2', 'navid': '2'},
            {'label': 'Example 3', 'path':'d3ibook/chapter1/example3', 'navid': '2'},
            {'label': 'Example 4', 'path':'d3ibook/chapter1/example4', 'navid': '2'},
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
                        $scope.navigation = $scope.d3book;
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

