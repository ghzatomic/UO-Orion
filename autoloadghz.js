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
    setaVariaveisImportantes()
    Orion.CharPrint(self, 906, 'Bom jogo !!!');
}

function resetVariaveisImportantes(){
	Shared.RemoveVar('idRunebook');
}

function setaVariaveisImportantes(){
    resetVariaveisImportantes()
    selectionaObjESetaVariavel('idRunebook', 'Selecione o runebook para correr',undefined)
}

function selectionaObjESetaVariavel(nameVar,msg,type){
    Orion.CancelTarget();
    Orion.Wait(1000)
    Orion.ClientLastTarget('');
    Orion.Wait(1000)
    Orion.ClearJournal()
    Orion.Wait(1000)
    Orion.ClearJournal('self');
    if (!type){
        type =''
    }
    var variavel = undefined
    if (nameVar){
        variavel = Shared.GetVar(nameVar)
    }
    Orion.CancelTarget();
    Orion.ClientLastTarget('');
    if (!variavel){
        Orion.CancelTarget();
        Orion.ClientLastTarget('');
        Orion.CharPrint(self, 906, msg);
        while(!variavel){
            if (type == 'mostrauid'){
                Orion.Say('.mostraruid')
                Orion.Wait(1000)
                Orion.WaitJournal('UID', Orion.Now(), Orion.Now()+10000, 'sys');
                if (Orion.InJournal('UID', 'sys')){
                    var jorMSG = Orion.InJournal('UID', 'sys')
                    if (jorMSG){
                        var id = jorMSG.Text().split(':')[1]
                        if (id){
                            if (nameVar){
                                Shared.AddVar(nameVar, '0x'+id.trim());
                                variavel = Shared.GetVar(nameVar)
                            }else{
                                variavel = '0x'+id.trim()
                            }
                            Orion.CharPrint(self,906,'Setando id : '+variavel);
                            return variavel
                            break;
                        }
                        
                    }
                }
            }else{
                Orion.Info();
                Orion.WaitTargetObject('lasttarget');
                var target = undefined
                while(Orion.ClientLastTarget()==0){
                    Orion.Wait(1000)
                }
                target = Orion.ClientLastTarget();
                TextWindow.Close();
                if (target != 0){
                    var id = Orion.GetSerial(target)
                    if (nameVar){
                        Shared.AddVar(nameVar, id.trim());
                        variavel = Shared.GetVar(nameVar)
                    }else{
                        variavel = id.trim()
                    }
                    Orion.CharPrint(self,906,'Setando id : '+variavel);
                    TextWindow.Close();
                    Orion.Wait(1000)
                    Orion.CancelTarget();
                    Orion.ClientLastTarget('');
                    Orion.ClearJournal()
                    Orion.Wait(1000)
                    return variavel
                }
                
            }
        }
    }
    
}

function onCastPoisonTeste(){
    Orion.CharPrint(self, 906, 'aaaa');
}

function teste() {
    
    Shared.AddVar('CPCallbackFunction', 'onCastPoisonTeste');
    var callback = Shared.GetVar('CPCallbackFunction');
    eval(callback)()
}