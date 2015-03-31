
//Test Json File
(function () {
    'use strict';

    describe('Unit: jsonFileService', function () {
        //Load the module with NotesTabController
        beforeEach(module('trackerApp'));

        var service;
        
        beforeEach(inject(function (jsonFilesService){
            service=jsonFilesService;
        }));
        
        it('Should instantiate Json File Service',function (){

            expect(service).toBeDefined();
        });
        
        it('Should get notes.json',function (){
            expect(service.notesFile).toEqual("notes.json");

           
        });

    });

})();