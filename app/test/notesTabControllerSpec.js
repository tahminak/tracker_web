/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




(function () {
    'use strict';

    describe('Unit: NotesTabController', function () {
        //Load the module with NotesTabController
        beforeEach(module('trackerApp'));

        var ctrl, scope;

        // inject the $controller and $rootScope services
        // in the beforeEach block\
       
       beforeEach(inject(function($controller,$rootScope){
           //Create a new scope that's a child of the $rootScope
           scope=$rootScope.$new();
           
           //Create the controller
           ctrl=$controller('NotesTabController',{$scope:scope});
           
       }));
       
       it('Should define $scope.notesTabText',
                function (){
                    expect(scope.notesTabText).toBeDefined();
                    scope.clearNotesTab();
                    expect(scope.notesTabText).toEqual("");
                    
                }
        
        );



    });

})();