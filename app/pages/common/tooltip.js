(function () {
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
                        if(formCtrl[inputName].$valid){
                            console.log('a');
                            template.css('opacity', 0);
                            elem.removeClass('error');
                        }
                        return formCtrl[inputName].$error
                    },function(errarr){
                        var str = '[ng-message=\"'+ Object.keys(errarr)[0] +'\"]';
                        title = $('#' + elem.attr('id') + '-error').find('span'+str).html();
                        template.addClass("pre-tooltip tooltip top").show().find('.tooltip-inner').html(title);
                        top = elem.offset().top - ($('.tooltip-container').height());
                        left = (elem.offset().left + elem.width()) / 2;
                        template.css('left', left).css('top', top).css('opacity', 1).css('display', 'block').stop(true,true);
                        elem.addClass('error');
                    }, function(){
                    });
                });
            }
        }
    }

    TooltipDirective.$inject = ['$compile', '$templateCache', '$timeout'];

    angular.module('uds.directives').directive("preTooltip", TooltipDirective);

})();