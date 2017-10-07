/**
 * Created by Mikhail on 5/13/2017.
 */
(function(){
    "use strict";

    angular.module('app.uds').component('uigrid', {
        templateUrl: 'app/views/uiGridView.html',
        controller: 'UiGridController'

    })
        .filter('mapGender', function() {
            var genderHash = {
                1: 'male',
                2: 'female'
            };

            return function(input) {
                if (!input){
                    return 'Action';
                } else {
                    return genderHash[input];
                }
            };
        });

    angular.module('app.uds').controller('UiGridController', ['$scope', 'CommonHttpRequestService',

        function($scope, requestService) {
            var startT = new Date().getTime();

            $scope.title = 'Data Sets';
            $scope.refresh = function(){

            };

            $scope.linkConversion = function(a,b,c,d){
                debugger
            };

            $scope.gridOptions = {
                enableSorting: true,
                enableGridMenu: true,
                enableColumnResizing: true,

                importerDataAddCallback: function ( grid, newObjects ) {
                    $scope.data = $scope.data.concat( newObjects );
                },
/*
                onRegisterApi: function(gridApi){
                    $scope.gridApi = gridApi;
                },
*/
                columnDefs: [
                    { field: 'sorName', displayName: "Data Domain Name", minWidth: 200, width: 250, pinnedLeft:false },
                    { field: 'gender', enableCellEdit: true, displayName: "Gender",width:100, editableCellTemplate: 'uds/views/dropdownEditor.html', editDropdownValueLabel: 'gender', editDropdownOptionsArray: [
                        { id: 1, gender: 'male' },
                        { id: 2, gender: 'female' }
                    ]
                     },
                    { field: 'entityName',
                        cellTemplate: '<a href="javascript:(0)"> {{row.entity[col.colDef.name]}}</a>',

                        displayName: "Data Set Name", width: '30%', maxWidth: 200, minWidth: 70, pinnedLeft:false },
                    { field: 'sourceTypeDisplay', displayName: "Type", width: '30%', maxWidth: 200, minWidth: 70 },
                    { field: 'stateDisplay', displayName: "State", width: '30%', maxWidth: 200, minWidth: 70 },
                    { field: 'lob', displayName: "LOB", width: '20%' },
                     { field: 'updatedTime', displayName: "Last Updated", width: '30%', maxWidth: 200, minWidth: 70, pinnedRight:true },
                    { field: 'gender', displayName: 'Gender', editableCellTemplate: 'uds/views/dropdownEditor.html', width: '20%',
                        cellFilter: 'mapGender', editDropdownValueLabel: 'gender', editDropdownOptionsArray: [
                        { id: 1, gender: 'male' },
                        { id: 2, gender: 'female' }
                    ]
                    }]
            };

            $scope.gridOptions.onRegisterApi = function(gridApi){
                //set gridApi on scope
/*
                $scope.gridApi = gridApi;
                gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                    $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
                    $scope.$apply();
                });
*/
            };

            $scope.data = {requestType:'getUiGridData'};
            requestService.getRequestData($scope.data).then(function(response){
                console.log("Received records from portal took "+(new Date().getTime()-startT)/1000.0+" seconds.");
//                    startT=new Date().getTime();
                response.data.payload.forEach(function(mem){
                    mem.gender = 'male';
                });
                $scope.gridOptions.data = response.data.payload;
                console.log("Redraw the table took "+(new Date().getTime()-startT)/1000.0+" seconds.")
            }, function(){
                console.log("Entities load failed.");
            });
        }])
})();