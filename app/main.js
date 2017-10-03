/**
 * Declare (set), configure and bootstrap all modules in this file
 */
angular.module('udsviews', []);
angular.module('uds.directives', []);
angular.module('app.uds', ['ngRoute', 'ngMessages', 'ui.bootstrap', 'angularFileUpload', 'udsviews', 'uds.directives'])
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

;angular.module('udsviews').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/loginAdminView.html',
    "<div id=\"page-wrapper\"><div class=\"row\"><div class=\"col-md-12\"><form id=\"loginForm\" name=\"loginForm\" novalidate ng-submit=\"formSubmit()\" class=\"form\"><div class=\"col-md-4\"><h3>Please Login</h3><div class=\"form-group\"><label for=\"username\">User Name</label><div id=\"username-error\" class=\"popover\" ng-messages=\"loginForm.username.$error\"><span ng-message=\"required\">Your name is required.</span> <span ng-message=\"minlength\">Your name is too short.</span> <span ng-message=\"maxlength\">Your name is too long.</span></div><input id=\"username\" name=\"username\" pre-tooltip title=\"Title default content tooltip 1\" ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username (required)\" ng-minlength=\"3\" ng-maxlength=\"8\" ng-required=\"true\"></div><div class=\"form-group\"><label for=\"password\">Password</label><div id=\"password-error\" class=\"popover\" ng-messages=\"loginForm.password.$error\"><span ng-message=\"required\">Password is required.</span></div><input id=\"password\" name=\"password\" pre-tooltip ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password (required)\" ng-required=\"true\"></div><div class=\"form-group\"><button ng-disabled=\"!loginForm.$valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button><!-- <span class=\"text-danger\">AAAAA{{ loginForm.username.$error }}</span>--> <span class=\"text-danger\">Form valid: {{ loginForm.$valid }}</span></div></div></form></div></div></div>"
  );


  $templateCache.put('app/views/sourceTypesView.html',
    "<div class=\"column\" ng-show=\"currentStep === 1\"><form name=\"userForm\"><div class=\"row col-md-12\"><h3>Select Source</h3><div class=\"form-group col-md-4\"><label>Input Source</label><select class=\"form-control\" placeholder=\"Choose file type\" ng-required=\"true\" ng-model=\"inputType\"><option ng-repeat=\"type in sourceTypes\" value=\"{{type}}\">{{type}}</option></select></div><div class=\"form-group col-md-4\"><label>Target Source</label><select class=\"form-control\" placeholder=\"Choose file type\" ng-required=\"true\" ng-model=\"targetType\"><option ng-repeat=\"type in sourceTypes\" value=\"{{type}}\">{{type}}</option></select></div></div><div class=\"row col-md-12\"><div class=\"form-group col-md-4\"><input class=\"form-control\" id=\"file1\" type=\"file\" nv-file-select=\"\" uploader=\"uploader\"></div><div class=\"form-group col-md-4\"><input class=\"form-control\" id=\"file2\" type=\"file\" nv-file-select=\"\" uploader=\"uploader\"></div></div><div class=\"row col-md-12\"><div class=\"form-group col-md-4\"><button id=\"btn-step-1\" ng-click=\"showSelectionPage()\" ng-disabled=\"checkLoadedFiles()\" class=\"btn btn-primary\">Next</button></div></div></form></div><div id=\"page-wrapper\"><md-content layout-padding ng-show=\"currentStep === 2\"><h3>Select Fields</h3><div class=\"row\"><div layout-gt-sm=\"row\"><md-input-container class=\"md-block\" flex-gt-sm><label>Select Source Key</label><select placeholder=\"Choose file key\" md-on-open=\"bbbb()\" ng-required=\"true\" ng-model=\"inputKey\"><option ng-repeat=\"opt in sourceArray\" value=\"{{opt}}\">{{opt}}</option></select></md-input-container><md-input-container class=\"md-block\" flex-gt-sm><label>Select Target Key</label><select placeholder=\"Choose file key\" md-on-open=\"bbbb()\" ng-required=\"true\" ng-model=\"targetKey\"><option ng-repeat=\"opt in targetArray\" value=\"{{opt}}\">{{opt}}</option></select></md-input-container></div><div layout-gt-xs=\"row\"><button ng-click=\"addKeys()\" ng-disabled=\"checkLoadedKeys()\" class=\"md-primary md-raised md-hue-1\">Add Fields</button></div></div><h3>Map Result</h3><div id=\"result\" class=\"normal\">{{map}}</div><div layout-gt-xs=\"row\"><button ng-click=\"reconcile()\" ng-disabled=\"checkReconcile()\" class=\"md-primary md-raised md-hue-1\">Reconcile</button> <button ng-click=\"reset()\" class=\"md-primary md-raised md-hue-1\">Back</button></div></md-content></div>"
  );


  $templateCache.put('app/pages/common/tooltip.html',
    "<div class=\"tooltip-container\"><span class=\"tooltip-arrow\"></span><div class=\"tooltip-inner\"></div></div>"
  );

}]);
;(function () {
    'use strict';

    function TooltipDirective($compile, $templateCache) {

        return {
            restrict: 'A',
            scope:{
                tooltip:'=',
                title:'@'
            },
            require: '^form',
            link: function (scope, elem, attrs, formCtrl) {

                var template, inputName, title, top, left;
                elem.on("focus", function(e) {
                    e.preventDefault();
                    var container = $('.tooltip-container');
                    if(container.length > 0){
                        container.remove();
                    }
                    template = $compile($templateCache.get('app/pages/common/tooltip.html'))(scope);
                    $('body').append(template);
                    template.css('display', 'none');
                    inputName = elem.attr('id');
                    scope.$watch(function() {
                        return formCtrl[inputName].$error
                    }, function(invalid) {
                        if (invalid) {
                            title = $('#' + elem.attr('id') + '-error').find('span').html();
                            if(title){
                                template.addClass("pre-tooltip tooltip top").show().find('.tooltip-inner').html(title);
                                top = elem.offset().top - ($('.tooltip-container').height());
                                left = (elem.offset().left + elem.width()) / 2;
                                template.css('left', left).css('top', top).css('opacity', 1).css('display', 'block').stop(true,true);
                                elem.addClass('error');
                            }else{
                                template.css('opacity', 0);
                                elem.removeClass('error');
                            }
                        }else{
                            template.css('opacity', 0);
                            elem.removeClass('error');
                        }
                    }, function() {}
                    );
                });
            }
        }
    }

    TooltipDirective.$inject = ['$compile', '$templateCache'];

    angular.module('uds.directives').directive("preTooltip", TooltipDirective);

})();;(function(){
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
