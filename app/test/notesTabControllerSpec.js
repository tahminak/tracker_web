


(function () {
    'use strict';

    describe('Unit: NotesTabController', function () {
        //Load the module with NotesTabController
        beforeEach(module('trackerApp'));

        var ctrl, scope;
        var $httpBackend, createController, authRequestHandler;

        // inject the $controller and $rootScope services
        // in the beforeEach block\

        beforeEach(inject(function ($controller, $rootScope, $injector,$http) {
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');

            // backend definition common for all tests
            authRequestHandler = $httpBackend.when('GET', 'exampleNotes')
                    .respond([{}]);


            //Create a new scope that's a child of the $rootScope
            scope = $rootScope.$new();

            //Create the controller
            ctrl = $controller('NotesTabController', {$scope: scope,$http: $http});

        }));

        it('Should define $scope.notesTabText',
                function () {
                    expect(scope.notesTabText).toBeDefined();
                    scope.clearNotesTab();
                    expect(scope.notesTabText).toEqual("");
                    $httpBackend.flush();

                }

        );


        it('should fetch notes.json', function () {
            $httpBackend.expectGET('exampleNotes');
            var controller = ctrl;
            $httpBackend.flush();
        });

it("should have 1 object", function () {
            $httpBackend.flush();
            expect(scope.notesTabText.length).toBe(1);
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        })


    });

})();