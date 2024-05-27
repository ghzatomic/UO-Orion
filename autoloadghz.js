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
    var x = 958
    var y = 736
    var z = Player.Z()
    Orion.CharPrint(self, 906, 'aa'+ isTileAndavel(x,y,z));
    //testexx()
    /*var enemy = Orion.FindObject('lasttarget');
    var x = Player.X()+10
    var y = Player.Y()+10
    var z = Player.Z()

    //x = enemy.X()
    //y = enemy.Y()
    //z = enemy.Z()

    var arr = Orion.GetPathArray(x,y,z);
    Orion.CharPrint(self, 906, 'aa'+arr.length);
    Orion.CharPrint(self, 906, 'bb'+Player.X()+"-"+Player.Y()+"-"+Player.Z());*/
}

