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
    Orion.Exec('loopCastPerfeito')
    Orion.CharPrint(self, 906, 'Bom jogo !!!');
}


function teste() {
}