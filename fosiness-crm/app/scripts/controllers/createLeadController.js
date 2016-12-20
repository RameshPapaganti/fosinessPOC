(function(angular) {
    'use strict';

    angular.module('fosinessCrmApp').controller('createLeadController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {


        var fieldObj = undefined;
        var sectionObj = undefined;

        // getting layout object
        var promise = $http.post('/crm/private/json/Leads/getLayout', {
            "partyId": "Company"
        });

        promise.success(function(response) {
            debugger
            sectionObj = angular.copy(response.response.result.layout[0]);
            fieldObj = angular.copy(response.response.result.layout[0].fields[0]);
            $scope.section = response.response.result.layout;
            $scope.section.node = {};
            $scope.section.node.fields = []; 

        });
        promise.error(function(response) {
            debugger
            // var result = response.messages[0].description;

        });


        /*
                $scope.editMe = function(a, b) {
                    debugger;
                    b.$show();
                }*/


        // adding new field object
        $scope.addField = function(selectedSection, index, fieldType) {
            var newField = null;

            // Whether atleat one field is exist in the section or not 
            if (selectedSection.fields.length !== 0) {
                // already fields exists
                newField = angular.copy(selectedSection.fields[selectedSection.fields.length - 1]);
                var newSequenceNum = parseInt(newField.sequenceNum) + 1;
                newField.sequenceNum = newSequenceNum.toString();


            } else {
                // no fields exists
                newField = angular.copy(fieldObj);
                newField.sectionId = selectedSection.sectionId;
                newField.sequenceNum = "1";
            }

            newField.label = "New field";
            newField.etype = "textField";
            newField.mxlen = newField.mxlen.toString();
            newField.secSequenceNum = undefined;

            var promise = $http.post('/crm/private/json/Layout/addField', newField);

            promise.success(function(response) {

                newField.fieldId = response.response.result.fieldId;
                $scope.section[index].fields.push(newField);

            });

            promise.error(function(response) {
                $scope.section[index].fields.push(newField);
                //   debugger;

            });

        }

        // Adding section
        $scope.addSection = function(beforeSection, beforeSectionIndex) {
            // debugger;

            var newSection = angular.copy(beforeSection);
            var sectionSequenceNum = parseInt(newSection.sequenceNum) + 1
            newSection.sequenceNum = sectionSequenceNum.toString();
            newSection.fields = [];
            newSection.sectionName = 'New Section' + newSection.sectionId;

            newSection.sectionId = "new";
            newSection.sequences = [];
            $scope.section.splice(beforeSectionIndex + 1, 0, newSection);

            $scope.section = angular.forEach($scope.section, function(currentSection, index) {
                var sectionObj = {};
                sectionObj.sectionId = currentSection.sectionId;
                var newSequenceNum = index + 2;
                sectionObj.sequenceNum = newSequenceNum.toString();
                newSection.sequences.push(sectionObj);

            })
            debugger;

            var promise = $http.post('/crm/private/json/Layout/addSection', newSection);

            promise.success(function(response) {
                debugger;
                newSection.sectionId = $scope.section[beforeSectionIndex + 1].sectionId;
                newSection.sectionId = response.response.result.sectionId;
                newSection.fields = [];
                delete newSection.sequences;
                //   $scope.section.splice(beforeSectionIndex + 1, 0, newSection);

                /* $scope.section = angular.forEach($scope.section, function(currentSection, index) {
                     currentSection.sequenceNum = index + 1;

                 })*/


            });

            promise.error(function(response) {
                //debugger;
                // var result = response.messages[0].description;

            });

        }

        //  Tree node events
        $scope.treeOptions = {
            accept: function(sourceNodeScope, destNodesScope, destIndex) {
                return true;
            },
            dragStart: function(event) {

                $scope.collapseAll();
            },
            beforeDrop: function(event) {

                debugger;

                 var isParentSection = event.dest.nodesScope.isParent(event.source.nodeScope);
                 if(!isParentSection){
                        event.dest.nodesScope.nodropEnabled = true;
                 }

               /* var sourceSeqNum = event.source.nodeScope.$modelValue.sequenceNum,
                    sectionSeqNum = event.source.nodeScope.$modelValue.sectionId,
                    i = sourceSeqNum - 1,
                    j = event.dest.index,
                    start, end;
                var section = getSectionBySectionId(sectionSeqNum);
                if (i > j) {
                    start = j;
                    end = i;
                    section.fields[start].sequenceNum = end + 1;
                    // section.fields[end].sequenceNum = start + 1;
                } else {
                    start = i;
                    end = j;
                }


                // section.fields[end].sequenceNum = start;
                for (; start < end; start++) {
                    debugger
                    // event.source.nodesScope.$modelValue[start].sequenceNum = start+1;
                    section.fields[start].sequenceNum = section.fields[start].sequenceNum++;
                }*/

                //debugger
            },
            dropped: function(event) {
                debugger;
                var sIndex = event.source.index,
                    dIndex = event.dest.index,
                    sectionSeqNum = event.source.nodeScope.$modelValue.sectionId,

                    isFieldDragged = event.source.nodeScope.$modelValue.etype ? true : false;
                var newElementsOrder = [];
                // field drag and drop in same section
                if (isFieldDragged) {
                    //  debugger
                    var isParentSection = event.dest.nodesScope.isParent(event.source.nodeScope);

                    // this case need to implement in future
                    if (!isParentSection) {
                        // get dest sectionId and update it on to current dragging field

                    }
                    var fields = event.source.nodesScope.$modelValue;

                    for (var index in fields) {
                        var fieldObj = {};
                        fieldObj.fieldId = fields[index].fieldId;
                        var newSeqNum = parseInt(index) + 1;
                        fieldObj.sequenceNum = newSeqNum.toString();
                        newElementsOrder.push(fieldObj);
                        //fields[index].sequenceNum = parseInt(index) + 1;
                    }
                }
                // section drag and drop
                else {
                    var sections = event.source.nodesScope.$modelValue;
                    for (var index in sections) {
                        var sectionObj = {};
                        sectionObj.sectionId = sections[index].sectionId;
                        var newSeqNum = parseInt(index) + 1;
                        sectionObj.sequenceNum = newSeqNum.toString();
                        newElementsOrder.push(sectionObj);
                        //sections[index].sequenceNum = parseInt(index) + 1;
                    }
                }
                // field drop out side parent section
                debugger;
            }

        };

        var getSectionBySectionId = function(secctionSeqNum) {
            var section;
            for (var index in $scope.section) {
                section = $scope.section[index];
                if (section.sectionId === secctionSeqNum) {
                    return section;
                }
            }
        }

        $scope.collapseAll = function() {
            $scope.$broadcast('collapseAll');
        };

        // updatein field label or section label
        $scope.updateLabel = function(node, newLabel) {
            var updatedLabelObj = {};
            updatedLabelObj.label = newLabel;
            var isSection = node.fields ? true : false;
            if (isSection) {
                updatedLabelObj.sectionId = node.sectionId;
                updatedLabelObj.type = "SECTION";
            } else {
                updatedLabelObj.fieldId = node.fieldId;
                updatedLabelObj.type = "FIELD";
            }

            debugger;
        }




    }]);
})(angular);
