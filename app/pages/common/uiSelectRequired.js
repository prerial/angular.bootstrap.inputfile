/* add ui-select-required
Thanks imaa! It is working well. The error msg also started showing up when
I change the condition from:
    ng-show="abcForm.tasks.$error.required"
to
    ng-show="abcForm.tasks.$invalid"
*/
angular.module('uds.directives').directive('uiSelectRequired', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.uiSelectRequired = function (modelValue, viewValue) {
                var determineVal;
                if (angular.isArray(modelValue)) {
                    determineVal = modelValue;
                } else if (angular.isArray(viewValue)) {
                    determineVal = viewValue;
                } else {
                    return false;
                }
                return determineVal.length > 0;
            };
        }
    };
});