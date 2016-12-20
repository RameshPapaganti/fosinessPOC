 angular.module('fosinessCrmApp').controller('treeNodeCtrl', ['$scope', function($scope) {
     $scope.remove = function(scope) {
         scope.remove();
     };

     $scope.removeEachField = function (scope) {
        debugger;
     }

     $scope.toggle = function(scope) {
         scope.toggle();
     };

     $scope.moveLastToTheBeginning = function() {
         var a = $scope.data.pop();
         $scope.data.splice(0, 0, a);
     };

     $scope.newSectionAdd = function(scope) {
      debugger;
         var nodeData = scope.$modelValue;
         nodeData.nodes.push({
             id: nodeData.id * 10 + nodeData.nodes.length,
             title: nodeData.title + '.' + (nodeData.nodes.length + 1),
             nodes: []
         });
     };

     $scope.newFieldAdd = function(scope) {
      debugger;
         var nodeData = scope.$modelValue;
         nodeData.nodes.push({
             id: nodeData.id * 10 + nodeData.nodes.length,
             title: nodeData.title + '.' + (nodeData.nodes.length + 1),
             nodes: []
         });
     };

     $scope.collapseAll = function() {
         $scope.$broadcast('collapseAll');
     };

     $scope.expandAll = function() {
         $scope.$broadcast('expandAll');
     };

     $scope.data = [{
             'id': 1,
             'title': 'node1',
             // 'type': 'text',
             'nodes': [{
                 'id': 11,
                 'type': 'number',

                 'title': 'node1.1',
             }, {
                 'id': 12,
                 'title': 'node1.2',
                 'type': 'number',

                 /*'nodes': [{
                     'id': 111,
                     'type': 'email',
                     'title': 'node1.1.1',
                     'nodes': []
                 }]*/
             }, {
                 'id': 13,
                 'title': 'node1.3',
                 'type': 'number',
                 'nodes': []
             }]
         },{
             'id': 2,
             'title': 'node2',
             // 'type': 'text',
             'nodes': [{
                 'id': 21,
                 'type': 'number',

                 'title': 'node2.1',
             }, {
                 'id': 22,
                 'title': 'node2.2',
                 'type': 'number',

                 /*'nodes': [{
                     'id': 111,
                     'type': 'email',
                     'title': 'node1.1.1',
                     'nodes': []
                 }]*/
             }, {
                 'id': 23,
                 'title': 'node2.3',
                 'type': 'number',
                 'nodes': []
             }]
         }]
         /*{
                  'id': 2,
                  'title': 'node2',
                  'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
                  'nodes': [{
                      'id': 21,
                      'title': 'node2.1',
                      'nodes': []
                  }, {
                      'id': 22,
                      'title': 'node2.2',
                      'nodes': []
                  }]
              }, {
                  'id': 3,
                  'title': 'node3',
                  'nodes': [{
                      'id': 31,
                      'title': 'node3.1',
                      'nodes': []
                  }]
              }];*/
 }]);
