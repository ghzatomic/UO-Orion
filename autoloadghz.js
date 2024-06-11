//#include autocura.oajs
//#include targetPVP.oajs
//#include targetPVM.oajs
//#include precast.oajs
//#include utils.oajs
//#include walkfunctions.oajs
//#include utilsPVP_M.oajs
//#include mount.oajs
//#include loot.oajs
//#include works.oajs


function Autostart() {
    Orion.Print('Ancorp - GHZATOMIC')
    Orion.Exec('autobands')
    Orion.Exec('AntiSuicida')

    Orion.Wait(2000);
    Orion.Wait(100);
    Orion.Exec('loopCastPerfeitoV2')
    Shared.AddVar('armamento', 0);
    Orion.CharPrint(self, 906, 'Bom jogo !!!');
}

function onCastPoisonTeste(){
    Orion.CharPrint(self, 906, 'aaaa');
}

function teste() {
    
    Shared.AddVar('CPCallbackFunction', 'onCastPoisonTeste');
    var callback = Shared.GetVar('CPCallbackFunction');
    eval(callback)()
}