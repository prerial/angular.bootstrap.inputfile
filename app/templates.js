angular.module('commonDirectives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/loginAdminView.html',
    "<div id=\"page-wrapper\"><div class=\"row\"><div class=\"col-md-12\"><form ng-submit=\"formSubmit()\" class=\"form\"><div class=\"col-md-4\"><h3>Please Login</h3><div class=\"form-group\"><label for=\"userid\">User ID</label><input id=\"userid\" ng-model=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username (required)\" ng-required=\"true\"></div><div class=\"form-group\"><label for=\"inputPassword\">Password</label><input id=\"inputPassword\" ng-model=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password (required)\" ng-required=\"true\"></div><div class=\"form-group\"><button class=\"btn btn-primary\" type=\"submit\">Login</button> <span class=\"text-danger\">{{ error }}</span></div></div></form></div></div></div>"
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

}]);
