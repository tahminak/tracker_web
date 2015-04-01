//Test Chat Per hour controller
(function (){
     'use strict';
     
        describe('Unit: ChatPerHourController', function () {
        //Load the module with NotesTabController
        beforeEach(module('trackerApp'));

        var cntrl, scope;
        
         beforeEach(inject(function ($controller,$rootScope){
            //Create a new scope that's a child of the $rootScope
            scope = $rootScope.$new();
            
            //Initialize Controller
           cntrl=$controller('ChatPerHourController', {$scope: scope});
        }));
        
          it('Should define ChatPerHourController',function (){
            expect(cntrl).toBeDefined();

           
        });
        
        //Test Todays Date
        it('Should match todays date',function (){
            expect(scope.today).toEqual(new Date());

           
        });
    });
    
    
})();
