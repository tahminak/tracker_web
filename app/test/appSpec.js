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

        beforeEach(inject(function (_$controller_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
        }));

        it("should be registered", function () {

            expect(module).not.toEqual(null);
        });



        //Test Notes Controller is defined
        it('should have a NotesController controller', function () {
            var $scope = {};
            var NotesController = $controller('NotesController', {$scope: $scope});
            expect(NotesController).toBeDefined();
        });

        //Test Notes Controller is defined
        it('should have a ScriptController controller', function () {
            var $scope = {};
            var scriptsController = $controller('scriptsController', {$scope: $scope});
            expect(scriptsController).toBeDefined();
        });

        //Test NotesTab Controller is defined
        it('should have a ScriptController controller', function () {
            var $scope = {};
            var NotesTabController = $controller('NotesTabController', {$scope: $scope});
            expect(NotesTabController).toBeDefined();
        });

        //Test DeviceSettings Controller is defined
        it('should have a DeviceSettingsController controller', function () {
            var $scope = {};
            var DeviceSettingsController = $controller('DeviceSettingsController', {$scope: $scope});
            expect(DeviceSettingsController).toBeDefined();
        });
        
        //Test VoiceMailTabController Controller is defined
        it('should have a VoiceMailTabController controller', function () {
            var $scope = {};
            var VoiceMailTabController = $controller('VoiceMailTabController', {$scope: $scope});
            expect(VoiceMailTabController).toBeDefined();
        });
        
        //Test ChatPerHourController Controller is defined
        it('should have a ChatPerHourController controller', function () {
            var $scope = {};
            var ChatPerHourController = $controller('ChatPerHourController', {$scope: $scope});
            expect(ChatPerHourController).toBeDefined();
        });

    });

})();


