/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




'use strict';

(function () {
    describe("tracker_web: Testing Modules", function () {

        // describe("App Module: ",function (){

        // var module;

        beforeEach(module('trackerApp'));
        
        var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

        it("should be registered", function () {

            expect(module).not.toEqual(null);
        });


        it('should have a LoginCtrl controller', function () {
             var $scope = {};
            var NotesController=$controller('NotesController', { $scope: $scope });
            expect(NotesController).toBeDefined();
        });






        // });

    });

})();


