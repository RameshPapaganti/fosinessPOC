'use strict';

/**
 * @ngdoc overview
 * @name fosinessCrmApp
 * @description
 * # fosinessCrmApp
 *
 * Main module of the application.
 */
angular
    .module('fosinessCrmApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'xeditable',
        'checklist-model',
        'ui.bootstrap',
        'ui.tree',
        'angularMaterialFormBuilder',
        'ngTouch',
        'ui.grid',
        'ui.grid.cellNav',
        'ui.grid.edit',
        'ui.grid.resizeColumns',
        'ui.grid.pinning',
        'ui.grid.selection',
        'ui.grid.moveColumns',
        'ui.grid.exporter',
        'ui.grid.importer',
        'ui.grid.grouping'

    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            }).when('/editAndDrag', {
                templateUrl: 'views/editableFormFields.html',
                controller: 'editableController',
                controllerAs: 'about'
            }).when('/edittableForm', {
                templateUrl: 'views/editableForm.html',
                controller: 'EditableFormCtrl',

            }).when('/basicTreeNodes', {
                templateUrl: 'views/treeNodes.html',
                controller: 'treeNodeCtrl',

            }).when('/createLead', {
                templateUrl: 'views/crm_addLead.html',
                controller: 'createLeadController',

            }).when('/dynamicFields', {
                templateUrl: 'views/dynamicFields.html',
                controller: 'dynamicFieldsController',

            }).when('/gridWithAllOpts', {
                templateUrl: 'views/gridWithAllOpts.html',
                controller: 'gridWithAllFeaturesController',

            })
            .otherwise({
                redirectTo: '/'
            });
    });
