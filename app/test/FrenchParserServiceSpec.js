
//Test FrenchParserService
(function (){
    'use strict';
    
    describe('Unit: FrenchParserService',function (){
        
          //Load the module with NotesTabController
        beforeEach(module('trackerApp'));
        
        var frenchPerserSrv;
        var testStr="Je peux certainement vous aider avec ceci. S'il vous pla&#238;t confirmer que le num&#233;ro de t&#233;l&#233;phone  sans fil et le code postal entr&#233; avant d'entrer dans ce service est pour le dispositif en question. [Oui / Non]";
        var frnStr="Je peux certainement vous aider avec ceci. S'il vous plaît confirmer que le numéro de téléphone  sans fil et le code postal entré avant d'entrer dans ce service est pour le dispositif en question. [Oui / Non]";
        
         beforeEach(inject(function (FrenchParserService){
            frenchPerserSrv=FrenchParserService;
        }));
        
         it('Should Define FrenchParserService  Service',function (){

            expect(frenchPerserSrv).toBeDefined();
        });
        
        it('Should parse the correct string',function (){

            expect(frenchPerserSrv.parse(testStr)).toEqual(frnStr);
        });
        
    });
    
    
    
    
    
})();

