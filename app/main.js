/**
 * Declare (set), configure and bootstrap all modules in this file
 */
angular.module('commonDirectives', []);

/*

angular.module('app.core', ['ngRoute', 'httpInterceptor']);

angular.module('validation', ['ngMessages']);

angular.module('app.uds', ['ui.bootstrap', 'ngSanitize', 'commonDirectives',
    'app.core', 'validation', 'ui.select', 'ngMessages'
])
*/
angular.module('app.uds', ['ngRoute', 'angularFileUpload', 'commonDirectives'])
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
        $scope.users = [];
        $scope.$on('$routeChangeStart', function(event, next, current) {
//            console.log(JSON.stringify(next.$$route, null, 4));
//            $.getScript("bundles" + next.$$route.originalPath + "Bundle.js", function(sprm){
//
//           });
        });
    }]);

;angular.module('commonDirectives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/asyncFunctionsView.html',
    "<h1>Async Functions View</h1>"
  );


  $templateCache.put('app/views/dropdownEditor.html',
    "<div>{{gender}}<select><option>AAAA</option><option>BBBB</option></select></div>"
  );


  $templateCache.put('app/views/loginAdminView.html',
    "<div layout=\"column\" ng-cloak style=\"border:2px solid #ddd\"><md-content layout-padding><div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-align=\"space-between center\"><div flex-gt-sm=\"50\"><form ng-submit=\"formSubmit()\" class=\"form\"><div class=\"col-md-4\"><h3>Please Login</h3><md-input-container class=\"md-icon-float md-block\"><!-- Use floating label instead of placeholder --><md-icon md-svg-src=\"img/icons/ic_person_24px.svg\" class=\"\"></md-icon><input ng-model=\"username\" type=\"text\" placeholder=\"Username (required)\" ng-required=\"true\"></md-input-container><md-input-container class=\"md-block\"><!-- Use floating placeholder instead of label --><md-icon md-svg-src=\"img/icons/ic_https_black_24px.svg\" class=\"email\"></md-icon><input ng-model=\"password\" type=\"password\" placeholder=\"Password (required)\" ng-required=\"true\"></md-input-container><div class=\"form-group\"><button class=\"md-primary md-raised md-hue-5\" type=\"submit\">Login</button> <span class=\"text-danger\">{{ error }}</span></div></div></form></div></div></md-content></div>"
  );


  $templateCache.put('app/views/objectDescriptorsView.html',
    "<h3>Object.getOwnPropertyDescriptors() (2017)</h3>"
  );


  $templateCache.put('app/views/objectEntriesView.html',
    "<h3>Object.entries() and Object.values() (2017)</h3>"
  );


  $templateCache.put('app/views/sharedMemoryView.html',
    "<h3>Shared memory and atomics (2017)</h3>"
  );


  $templateCache.put('app/views/sourceTypesView.html',
    "<div layout=\"column\" ng-cloak class=\"md-inline-form\"><md-content layout-padding ng-show=\"currentStep === 1\"><div><form name=\"userForm\"><h3>Select Source</h3><div layout-gt-sm=\"row\"><md-input-container class=\"md-block\" flex-gt-sm><label>Input Source</label><select placeholder=\"Choose file type\" md-on-open=\"aaaa()\" ng-required=\"true\" ng-model=\"inputType\"><option ng-repeat=\"type in sourceTypes\" value=\"{{type}}\">{{type}}</option></select></md-input-container><md-input-container class=\"md-block\" flex-gt-sm><label>Target Source</label><select placeholder=\"Choose file type\" md-on-open=\"aaaa()\" ng-required=\"true\" ng-model=\"targetType\"><option ng-repeat=\"type in sourceTypes\" value=\"{{type}}\">{{type}}</option></select></md-input-container></div><div layout-gt-xs=\"row\"><md-input-container class=\"md-block\" flex-gt-xs><input id=\"file1\" type=\"file\" nv-file-select=\"\" uploader=\"uploader\"></md-input-container><md-input-container class=\"md-block\" flex-gt-xs><input id=\"file2\" type=\"file\" nv-file-select=\"\" uploader=\"uploader\"></md-input-container></div><div layout-gt-xs=\"row\"><button id=\"btn-step-1\" ng-click=\"showSelectionPage()\" ng-disabled=\"checkLoadedFiles()\" class=\"md-primary md-raised md-hue-1\">Next</button></div></form></div></md-content></div><style>.capitalize{\r" +
    "\n" +
    "        font-size:20px;\r" +
    "\n" +
    "color:red;\r" +
    "\n" +
    "    }</style><div id=\"page-wrapper\"><md-content layout-padding ng-show=\"currentStep === 2\"><h3>Select Fields</h3><div class=\"row\"><div layout-gt-sm=\"row\"><md-input-container class=\"md-block\" flex-gt-sm><label>Select Source Key</label><select placeholder=\"Choose file key\" md-on-open=\"bbbb()\" ng-required=\"true\" ng-model=\"inputKey\"><option ng-repeat=\"opt in sourceArray\" value=\"{{opt}}\">{{opt}}</option></select></md-input-container><md-input-container class=\"md-block\" flex-gt-sm><label>Select Target Key</label><select placeholder=\"Choose file key\" md-on-open=\"bbbb()\" ng-required=\"true\" ng-model=\"targetKey\"><option ng-repeat=\"opt in targetArray\" value=\"{{opt}}\">{{opt}}</option></select></md-input-container></div><div layout-gt-xs=\"row\"><button ng-click=\"addKeys()\" ng-disabled=\"checkLoadedKeys()\" class=\"md-primary md-raised md-hue-1\">Add Fields</button></div></div><h3>Map Result</h3><div id=\"result\" class=\"normal\">{{map}}</div><div layout-gt-xs=\"row\"><button ng-click=\"reconcile()\" ng-disabled=\"checkReconcile()\" class=\"md-primary md-raised md-hue-1\">Reconcile</button> <button ng-click=\"reset()\" class=\"md-primary md-raised md-hue-1\">Back</button></div></md-content></div>"
  );


  $templateCache.put('app/views/stringMethodsView.html',
    "<h1>String Methods View</h1>"
  );


  $templateCache.put('app/views/trailingCommasView.html',
    "<h3>Trailing commas (2017)</h3>"
  );

}]);
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('asyncFunctions', {
        templateUrl: 'app/views/asyncFunctionsView.html',
        controller: 'AsyncFunctionsController'

    });
    angular.module('app.uds').controller('AsyncFunctionsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {

              function fetchJson(url) {
                  return fetch(url)
                        .then(request => request.text())
                        .then(text => {
                              return JSON.parse(text);
                        }).catch(error => {
                              console.log(`ERROR: ${error.stack}`);
                        })
              }
//authentications
//http://example.com/some_file.json
              async function fetchJson(url) {
                  try {
                      let request = await fetch(url);
                      return await request.json();

//                      let text = await request.text();
//                      return JSON.parse(text);
                  }
                  catch (error) {
                      console.log(`ERROR: ${error.stack}`);
                  }
              }
              fetchJson('data/authentications.json')
                  .then(obj => console.log(obj));

              debugger;

        }]);

})();
;angular.module('app.uds').controller('ButtonsCtrl', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

});;(function(){
    "use strict";

    angular.module('app.uds').factory('LoginService', function() {
        var admin = 'admin';
        var pass = 'pass';
        var isAuthenticated = false;

        return {
            login : function(username, password) {
                isAuthenticated = username === admin && password === pass;
                return isAuthenticated;
            },
            isAuthenticated : function() {
                return isAuthenticated;
            }
        };

    });

})();
;(function(){ 
	"use strict";
	
	angular.module('app.uds').factory('LandingService', ['$q', '$http', 'Urls', function($q, $http, Urls) {
		
		return {
			addNewEntity: addNewEntity
		};
		function httpPost(url, request){
			var deferred = $q.defer();
			$http.post(url, request)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (msg) {
				deferred.reject(msg);
			});
			return deferred.promise;
		}
		function httpGet(url){
			var deferred = $q.defer();
			$http.get(url)
			.then(function (data) {
				deferred.resolve(data);
			})
			.catch(function (msg) {
				deferred.reject(msg);
			});
			return deferred.promise;
		}
        function addNewEntity(data){
			return httpGet(Urls[data.modalType], data);
//			return httpPost(Urls[data.modalType], data);
        }
	}]);
})();
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('loginSplash', {
        templateUrl: 'app/views/loginAdminView.html',
        controller: 'LoginController'

    });
    angular.module('app.uds').controller('LoginController', ['$scope', '$location', 'Alerts', 'LoginService',

          function($scope, $location, alerts, loginService) {

              $scope.formSubmit = function() {
                  if(loginService.login($scope.username, $scope.password)) {
                      $scope.error = '';
                      $scope.username = '';
                      $scope.password = '';
                      $location.url('/sourceTypes');
                  } else {
                      $scope.error = "Incorrect username/password !";
                  }
              };
        }]);

})();
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('objectDescriptors', {
        templateUrl: 'app/views/objectDescriptorsView.html',
        controller: 'ObjectDescriptorsController'

    });
    angular.module('app.uds').controller('ObjectDescriptorsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('sharedMemory', {
        templateUrl: 'app/views/sharedMemoryView.html',
        controller: 'SharedMemoryController'

    });
    angular.module('app.uds').controller('SharedMemoryController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
;/**
 * Created by U160964 on 5/16/2017.
 */

(function() {
    "use strict";

    angular.module('app.uds').component('sourceTypes', {
        templateUrl: 'app/views/sourceTypesView.html',
        controller: 'SourceTypesController'

    });
    angular.module('app.uds').controller('SourceTypesController', ['$scope', 'FileUploader',

          function($scope, FileUploader) {
              var sourceFile, targetFile;
              var uploader = $scope.uploader = new FileUploader({});
              $scope.files = [];
              uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                  console.info('onWhenAddingFileFailed', item, filter, options);
              };
              uploader.onAfterAddingFile = function(fileItem) {
                  $scope.files.push(fileItem);
                  console.info('onAfterAddingFile', fileItem);
              };
/*
              uploader.onAfterAddingAll = function(addedFileItems) {

                  console.info('onAfterAddingAll', addedFileItems);
              };

              uploader.onBeforeUploadItem = function(item) {
                  console.info('onBeforeUploadItem', item);
              };
              uploader.onProgressItem = function(fileItem, progress) {
                  console.info('onProgressItem', fileItem, progress);
              };
              uploader.onProgressAll = function(progress) {
                  console.info('onProgressAll', progress);
              };
              uploader.onSuccessItem = function(fileItem, response, status, headers) {
                  console.info('onSuccessItem', fileItem, response, status, headers);
              };
              uploader.onErrorItem = function(fileItem, response, status, headers) {
                  console.info('onErrorItem', fileItem, response, status, headers);
              };
              uploader.onCancelItem = function(fileItem, response, status, headers) {
                  console.info('onCancelItem', fileItem, response, status, headers);
              };
              uploader.onCompleteItem = function(fileItem, response, status, headers) {
                  console.info('onCompleteItem', fileItem, response, status, headers);
              };
              uploader.onCompleteAll = function() {
                  console.info('onCompleteAll');
              };

              console.info('uploader', uploader);
*/

////////////////////////

              $scope.filesLoaded = true;
              $scope.keysLoaded = true;
              $scope.currentStep = 1;
              $scope.sourceTypes = ['File', 'Table'];
              $scope.sourceKeyArray = [];
              $scope.targetKeyArray = [];

              $scope.checkLoadedFiles = function(){
                  if($scope.files.length === 2 && $scope.userForm.$valid){
                      $scope.filesLoaded = false;
                      $('#btn-step-1').focus();
                  }
                  return $scope.filesLoaded;
              };

              $scope.checkReconcile = function(){
                  return $scope.map.length === 0;
              };

              $scope.checkLoadedKeys = function(){
                  if($scope.inputKey && $scope.inputKey !== '' && $scope.targetKey && $scope.targetKey !== ''){
                      $scope.keysLoaded = false;
                  }
                  return $scope.keysLoaded;
              };

              $scope.reset = function () {
//                  $scope.userForm.$setPristine();
                  $scope.inputType = null;
                  $scope.targetType = null;
                  uploader.queue.forEach(function(item){
                      item.remove();
                  });
                  $('#file1').val(null);
                  $('#file2').val(null);
                  $scope.userForm.$setPristine();
                  $scope.userForm.$setUntouched();
                  $scope.files = [];
                  $scope.filesLoaded = true;
//                  $scope.files.forEach(function(item){
//                      item.remove();
//                  });
                  $scope.currentStep = 1;
              };

              $scope.reconcile = function(){
                  $('#result').addClass('capitalize');
              };
              $scope.map = [];
              $scope.addKeys = function(){
                  var src = $scope.inputKey;//$('#srcSelect').val();
                  var src1 = $scope.targetKey;//$('#srcTarget').val();
                  if(src !== '' && src1 !== ''){
                      $scope.map.push({'source':{'name':src}, 'target':{'name':src1}})
                  }
              };

              $scope.setStep = function () {
                  $scope.currentStep++;
              };

              $scope.showSelectionPage = function () {
                  sourceFile = $("#sourceFile").val();
                  targetFile = $("#targetFile").val();
                  $scope.sourceArray = [];
                  getKeyArray('data/source.csv','sourceArray');
                  $scope.targetArray = [];
                  getKeyArray('data/target.csv', 'targetArray');
                  $scope.setStep();
              };


              function getKeyArray(source,key) {
                  $.ajax({
                      url: source,
                      dataType: 'text'
                  }).done(function (dt) {

                      var allRows = dt.split(/\r?\n|\r/);
                      var headers = allRows[0].split(',');
                      $scope[key] = allRows[0].split(',');
                      var data = {};
                      headers.forEach(function(head, i){
                          if (!data[head]){
                              data[head] = []
                          }
                          allRows.forEach(function(item, idx){
                              if(idx > 0){
                                  var row = item.split(',');
                                  data[head].push(row[i]);
                              }
                          });
                      });
                      if(key === 'sourceArray'){
                          $scope.sourceKeyArray = data['Acct_ref_nb'];
                      }else{
                          $scope.targetKeyArray = data['NPV_score'];
                      }
                      $scope.$apply();

               });

              }
/*
              $.ajax({
                  url: 'data/source.csv',
                  dataType: 'text',
              }).done(function (data) {
                  debugger
                  var allRows = data.split(/\r?\n|\r/);
                  var aaaa = allRows[0].split(',');
                  debugger
              });
/*
              function successFunction(data) {
                  var allRows = data.split(/\r?\n|\r/);
                  var table = '<table>';
                  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
                      if (singleRow === 0) {
                          table += '<thead>';
                          table += '<tr>';
                      } else {
                          table += '<tr>';
                      }
                      var rowCells = allRows[singleRow].split(',');
                      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
                          if (singleRow === 0) {
                              table += '<th>';
                              table += rowCells[rowCell];
                              table += '</th>';
                          } else {
                              table += '<td>';
                              table += rowCells[rowCell];
                              table += '</td>';
                          }
                      }
                      if (singleRow === 0) {
                          table += '</tr>';
                          table += '</thead>';
                          table += '<tbody>';
                      } else {
                          table += '</tr>';
                      }
                  }
                  table += '</tbody>';
                  table += '</table>';
                  $('body').append(table);
              }

              $scope.formSubmit = function() {
                  if(loginService.login($scope.username, $scope.password)) {
                      $scope.error = '';
                      $scope.username = '';
                      $scope.password = '';
                      $location.url('/sorEntities');
                  } else {
                      $scope.error = "Incorrect username/password !";
                  }
              };
*/
        }]);

})();
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('stringMethods', {
        templateUrl: 'app/views/stringMethodsView.html',
        controller: 'StringMethodsController'

    });
    angular.module('app.uds').controller('StringMethodsController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
;/**
 * Created by U160964 on 5/16/2017.
 */
(function() {
    "use strict";

    angular.module('app.uds').component('trailingCommas', {
        templateUrl: 'app/views/trailingCommasView.html',
        controller: 'TrailingCommasController'

    });
    angular.module('app.uds').controller('TrailingCommasController', ['$scope', '$location', 'Alerts', 'CommonHttpRequestService', 'ModalService',

          function($scope, $location, alerts, loginService, requestService) {


              debugger;

        }]);

})();
