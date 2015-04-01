
//Test Read Json File Service
(function () {
    'use strict';

    describe('Unit: ReadJasonFileService', function () {
        //Load the module with NotesTabController
        beforeEach(module('trackerApp'));

        var readFileSrv;
        
        beforeEach(inject(function(ReadFileService){
            
            readFileSrv=ReadFileService;
        }));
      
//         beforeEach(inject(function ($controller, $rootScope, $injector,$http,$q) {
//            // Set up the mock http service responses
//            $httpBackend = $injector.get('$httpBackend');
//
//            // backend definition common for all tests
//            authRequestHandler = $httpBackend.when('GET', 'exampleNotes')
//                    .respond([{}]);
//
//
//            //Create a new scope that's a child of the $rootScope
//            scope = $rootScope.$new();
//
//            //Create the controller
//            ctrl = $controller('NotesTabController', {$scope: scope,$http: $http});
//
//        }));


        it('Should define ReadFileService',
                function () {
                    expect(readFileSrv).toBeDefined();

                }

        );
    });

})();