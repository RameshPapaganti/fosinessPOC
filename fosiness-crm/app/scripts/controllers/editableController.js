'use strict';

/**
 * @ngdoc function
 * @name fosinessCrmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fosinessCrmApp
 */
angular.module('fosinessCrmApp')
    .controller('editableController', ['$scope', '$filter', function($scope, $filter) {

        debugger;
        $scope.user = {
            email: 'email@example.com',
            fieldTag: 'editable-email',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: '12:30',
            datetime: null,
            month: null,
            week: null
        };

     /*   $scope.user = [{
            field: 'email@example.com',
            type: 'email',
            field-tag : 'editable-email'
        },{
        	field: '123-45-67',
        	type: 'phone',
        	field-tag : 'editable-tel'
        }
        ]    
        ;*/


        $scope.abc = function () {
        	return 'editable-number';
        }

        // onshow event will trigger when x-editable label is loading
        $scope.validateUserName = function(thiss) {
            debugger;
        }

        // drop down
        $scope.user = {
            status: 2
        };

        $scope.statuses = [{
            value: 1,
            text: 'status1'
        }, {
            value: 2,
            text: 'status2'
        }, {
            value: 3,
            text: 'status3'
        }, {
            value: 4,
            text: 'status4'
        }];

        $scope.showStatus = function() {
            var selected = $filter('filter')($scope.statuses, {
                value: $scope.user.status
            });
            return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
        };

        // check boxlist model
        $scope.user = {
            status: [2, 3]
        };

        $scope.statuses = [{
            value: 1,
            text: 'status1'
        }, {
            value: 2,
            text: 'status2'
        }, {
            value: 3,
            text: 'status3'
        }];

        /* $scope.showStatus = function() {
             var selected = [];
             angular.forEach($scope.statuses, function(s) {
                 if ($scope.user.status.indexOf(s.value) >= 0) {
                     selected.push(s.text);
                 }
             });
             return selected.length ? selected.join(', ') : 'Not set';
         };*/

        // date picker
        $scope.user = {
            dob: new Date(1984, 4, 15)
        };

    }])
    .controller('TypeaheadCtrl', function($scope) {
        $scope.user = {
            state: 'Arizona'
        };

        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    });;
