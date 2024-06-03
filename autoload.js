//#include autocura.oajs
//#include targetPVP.oajs
//#include targetPVM.oajs
//#include precast.oajs
//#include utils.oajs
//#include walkfunctions.oajs
//#include utilsPVP_M.oajs
//#include mount.oajs
//#include loot.oajs
//#include work.oajs

function teste2() {
  var objetos_chao = Orion.FindTypeEx('any', '-1', ground, 'ignoreself', '18');
  var obj = get_object_at(objetos_chao, 944, 810)
  Orion.CharPrint(self, 906, "aa" + Orion.GetPathArrayEx(x, y, x + 10, y + 10));
  //canWalk( 4093,321)
  //Orion.WalkTo(4094, 323, 0, 0, 10, 2, 1);
}
function teste() {
  Orion.Info()
}

function Autostart() {
  Orion.Print('Ancorp - GHZATOMIC')
  Orion.Exec('autobands')
  Orion.Exec('AntiSuicida')

  Orion.Wait(2000);
  Orion.CharPrint(self, 906, 'Bom jogo !!!');
  Orion.Wait(100);
  Orion.Exec('loopCastPerfeito')
}



function PreFSTest() {
  var enemy = Orion.FindObject('lasttarget');
  Orion.ClearJournal('Kal Vas Flam');
  while (true) {
    if (Orion.InJournal('Kal Vas Flam')) {
      break;
      Orion.Wait(25);
    } else {
      Orion.UseType('0x1F5F');
      Orion.WaitTargetObject('lasttarget');
      Orion.AddDisplayTimer(100, 3800, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
      Orion.Wait(15);
    }
    Orion.WaitJournal('Kal Vas Flam', Orion.Now(), Orion.Now() + 280);
  }
}


function atacaMonstros() {
  OTrackingDefinitivo(2);
}

function atacaPlayers() {
  OTrackingDefinitivo(3);
}


function CureGHZ() {
  while (!Player.Poisoned()) {
    Orion.Wait(1)
  }
  Orion.Cast('Cure', 'self');
}

function AutoTracking() {
  while (true) {
    Orion.ClearJournal();
    Orion.CharPrint(self, 906, 'Rastreando Inimigos...');
    Orion.WarMode('0');
    Orion.UseSkill('Tracking');
    Orion.Wait(200);
    var menu0 = Orion.GetMenu('last');
    if (menu0 !== null) {
      if (menu0.Name() === "Tracking")
        menu0.Select('Humanos');
    }
    Orion.WaitJournal('Voce nao|cancelada', Orion.Now(), Orion.Now() + 500);
    if (!Orion.InJournal('Voce nao|cancelada')) {
      var menu = Orion.GetMenu('lastmenu');
      var count = menu.ItemsCount();
      Orion.Print(33, 'Voce encontrou ' + count + ' player(s).');
      var items = [];
      for (var i = 0; i < count; i++) {
        items.push(menu.ItemName(i));
        Orion.CharPrint(self, 906, (i + 1) + ': ' + items[i]);
      }
      //    HideRecalKey();
      Orion.Wait(15000);
      Orion.CloseMenu('all');
    }
    if (Orion.ClientLastTarget()) {
      Orion.WarMode('1')
      Orion.Attack(Orion.ClientLastTarget());
    }
    Orion.Wait(15000);
  }
}


function EnchantedFish() {
  var encFish = Orion.FindType('0x097B', 'any', 'backpack');
  if ((encFish.length) && (!Orion.DisplayTimerExists('EnchentedFish'))) {
    Orion.UseObject(encFish[0]);
    Orion.AddDisplayTimer('EnchentedFish', '120000', 'Top', 'Line|Bar', 'Enchented Fish', '0', '15');
  }
}


function TargetNextHuman() {
  var serial = FindNearestHumanEnemy();
  if (!serial.length) return;
  Orion.ClientLastTarget(serial);
  Orion.TargetObject(serial);
  Orion.Ignore(serial);
  Orion.Attack(serial);

  targetObj = Orion.FindObject(lasttarget);
  if (targetObj != null) {
    Orion.CharPrint(targetObj.Serial(), 1153, "Enemy is: " + targetObj.Name());
  }
  Orion.Cast('Magic Arrow', 'lasttarget');
}


function TargetNext2() {
  for (var i = 0; i < 2; i++) {
    var mobileID = Orion.FindType("0x0190|0x0191|0x025D|0x025E", "-1", ground, "near|live|ignoreself|ignorefriends", 18, "gray|criminal|orange|red|blue|green");
    Orion.Cast('Magic Arrow', mobileID);
    Orion.ClientLastTarget(mobileID);
    if (mobileID.length) {
      Orion.ClearHighlightCharacters([priorityHighlight = false])
      Orion.ClientLastAttack(mobileID[0]);
      Orion.AddHighlightCharacter('lasttarget', 0x0AC6, [priorityHighlightList = false]);
      Orion.Ignore(mobileID[0]);
      return;
    }
    else if (i == 0) {
      Orion.IgnoreReset();
    }
  }

  Orion.Print("No enemies");
}


function auto_cure() {
  while (!Player.Poisoned()) {
    Orion.Wait(1)
  }
  Orion.Cast('Cure', 'self');
}


function Colored_On() {
  var cor = '0x0A08';
  var friendlist = Orion.GetFriendList();
  if (friendlist && friendlist.length > 0) {
    friendlist.forEach(function (char) {
      Orion.AddHighlightCharacter(char, cor);  //0x0AA6
      Orion.AddHighlightCharacter(self, cor);  //0x0AA6
    });
  }
  Orion.CharPrint(self, '0x0790', 'Colored: On');
}

function Colored_Off() {
  Orion.ClearHighlightCharacters();
  Orion.CharPrint(self, '0x0790', 'Colored: Off');
}




function GeneratedScript_153654() {
  Orion.UseType('0x1F65', '0x0000');
}


function FazerUltimo() {
  while (Player.Weight() < Player.MaxWeight() - 78) {
    if (Orion.WaitForGump(1000)) {
      gump = Orion.GetGump('last');
      if ((gump !== null) && (!gump.Replayed())) {
        gump.Select(Orion.CreateGumpHook(5008));
        Orion.Wait(100);
      }
    }
  }
}

function FastLootPVP() {
  //1 - loot all; 0 - loot prioritized items
  var all = 0;

  //1 - ignore list, 0 - do not ignore
  var clear = 1;

  //1 - use skinning
  var useSkining = 1;

  FastLoot('Loot', all, clear, useSkining);
}

function FindCorpse() {
  var list = Orion.FindType('0x0ED0|0x0E43|0x0ECD|0x2006|0x0ECA|0x0ECC|0x0E40|0x0E41|0x0ECE', '-1', ground, 'fast', '2');

  if (list.length) {
    return Orion.FindObject(list[0]);
  }
  return null;
}

function FastLoot(listName, all, clear, useSkining) {
  var corpse = FindCorpse();

  if (corpse == null) {
    Orion.ResetIgnoreList();
    Orion.IgnoreReset();
  }
  else {
    Orion.AddObject('corpse', corpse.Serial());
    if (useSkining == 1)
      Skining();
    Orion.UseObject('corpse');
    Orion.Wait('200');
    LootLag();
    Loot(listName, all, clear, useSkining);
  }
}

function LootLag() {
  var timer = Orion.Now() + 300;

  while (!Orion.FindType('-1', '-1', 'corpse').length && timer > Orion.Now())
    Orion.Wait(50);
}

function Loot(listName, all, clear, useSkining) {
  var bag = '0x0E75';

  var lootBagList = Orion.FindType(bag);

  if (lootBagList.length)
    Orion.AddObject('lootpack', lootBagList[0]);
  else
    Orion.AddObject('lootpack', Orion.GetSerial(backpack));



  if (all == 1) {
    if (clear == 1)
      Orion.UseIgnoreList('ignoreLoot');
    else
      Orion.ResetIgnoreList();

    LootAll();

    Orion.ResetIgnoreList();
  }
  else {
    LootByFindList(listName);
  }
}

function LootItems(list) {
  if (!list.length)
    return false;

  for (var i = 0; i < list.length; i++) {
    if (Orion.GetDistance('corpse') > 2)
      return false;

    Orion.MoveItem(list[i], 0, 'lootpack');
    Orion.Wait(100);
  }

  return true;
}


function LootAll() {
  while (LootItems(Orion.FindType('-1', '-1', 'corpse')))
    Orion.Wait(50);
}

// Tipo 3 - humanos
function OTrackingDefinitivo(tipo) {
  //#################################
  //Habilite aqui as fun  es que voce deseja adicionar ao macro ("= 1"   ON, "= 0"   OFF).
  var seguir_auto = 0;
  var mandar_no_gc = 0;
  var falar = 0;
  //#################################
  //Usa o tracking e conta quantos players estao na regiao.
  Orion.UseSkill('Tracking');
  Orion.WaitMenu('Tracking', tipo);
  var menu = Orion.GetMenu(0);
  Orion.Wait('350');
  Orion.GetMenu(0).Select('Players \n');
  Orion.Wait('350');
  Orion.WaitJournal('You see no evidence', Orion.Now(), Orion.Now() + 500);
  if (Orion.InJournal('You see no evidence')) { }
  else {
    var menu = Orion.GetMenu(0);
    var count = menu.ItemsCount();
    Orion.Print(33, 'Voce encontrou ' + count + ' player(s).');
    //#################################
    //Printa os nomes de cada player encontrado no jog em lista.
    var items = [];
    for (var i = 0; i < count; i++) {
      items.push(menu.ItemName(i));
      //Orion.Print(63,(i+1) + ': ' + items[i]);
    }
    //#################################
    //Filtrar players encontrados.
    var amigos_proximos = 0;
    var compare = [];
    var friendlist = Orion.GetFriendList();
    for (var j = 0; j < friendlist.length; j++) {
      compare[j] = Orion.RequestName(friendlist[j], 10);
    }
    Orion.Print(compare);
    Orion.Print('\nAnalisando...')
    for (var i = 0; i < count; i++) {
      for (var j = 0; j < compare.length; j++) {
        if (items[i] == compare[j]) {
          amigos_proximos = amigos_proximos + 1;
          j = compare.length;
        }
      }
    }
    Orion.
      Print(3, 'Amigos Proximos: ' + (amigos_proximos));
    var inimigos_proximos = count - amigos_proximos;
    Orion.Print(33, 'Inimigos proximos: ' + inimigos_proximos);
    //#################################    
    //#################################
    //Analise de viabilidade do mulao dentro do alcance.
    if ((amigos_proximos + 1) > inimigos_proximos) {
      if (inimigos_proximos > 0) {
        if (falar == 1) {
          Orion.Say('Mul o autorizado!');
        }
      }
      if (inimigos_proximos == 0) {
        if (falar == 1) {
          Orion.Say('Sem inimigos por perto');
        }
      }
    }
    if ((amigos_proximos + 1) < inimigos_proximos) {
      if (inimigos_proximos > 0) {
        if (falar == 1) {
          Orion.Say('O ambiente est  desfavor vel');
        }
      }
      if (inimigos_proximos == 0) {
        if (falar == 1) {
          Orion.Say('Sem inimigos por perto');
        }
      }
    }
    if ((amigos_proximos + 1) == inimigos_proximos) {
      if (falar == 1) {
        Orion.Say('A batalha est  equilibrada');
      }
    }
    //#################################
    //nome dos inimigos proximos.
    var amigos = [];
    var inimigos = [];
    if (inimigos_proximos != 0) {
      //Orion.Print(63,'\nAmigos: ');
      for (var i = 0; i < count; i++) {
        for (var j = 0; j < compare.length; j++) {
          if (items[i] == compare[j]) {
            amigos[i] = items[i];
          }
        }
      }
    }
    if (inimigos_proximos != 0) {
      //Orion.Print(33,'\nInimigos: ');
      for (var i = 0; i < count; i++) {
        if (items[i] == amigos[i]) {
        } else {
          inimigos[i] = items[i];
        }
      }
    }
    if (amigos_proximos != 0) {
      Orion.Print(63, '\nAmigos: ');
      for (var i = 0; i < amigos.length; i++) {
        if (amigos[i] != 0) {
          Orion.Print(63, amigos[i]);
        }
      }
    }
    if (inimigos_proximos != 0) {
      Orion.Print(33, '\nInimigos: ');
      for (var i = 0; i < inimigos.length; i++) {
        if (inimigos[i] != 0) {
          Orion.Print(33, inimigos[i]);
        }
      }
    }
    //#################################
    //Mandar no gc o target e o local.
    if (mandar_no_gc == 1) {
      if (inimigos_proximos != 0) {
        var mensagem = 0;
        Orion.Say('.where');
        lastTime = Orion.Now();
        while (mensagem == 0) {
          msg = Orion.WaitJournal('I am', lastTime, Orion.Now() + 100);

          if (msg) {
            lastTime = msg.Timer() + 1;
            Orion.Say('.gc ' + msg.Text());
            Orion.Say('.gc ' + 'Tem ' + inimigos_proximos + ' inimigo(s) aqui.');
            mensagem = 1;
          }
        }
      }
    }
    //#################################
    //Seguir o primeiro da lista de inimigos.
    if (seguir_auto == 1) {
      if (inimigos_proximos != 0) {
        if (mandar_no_gc == 1) {
          Orion.Say('.gc ' + 'Estou seguindo: ' + inimigos[0]);
        }
        menu.Select(inimigos[0]);
      }
    }
    Orion.ClearJournal();
    //#################################
    menu.Close();
  }
}

function Stealth() {

  if (!Player.Hidden()) {
    Orion.UseSkill('Hiding');
    Orion.AddDisplayTimer(100, 4000, 'UnderChar', 'Circle|Bar', 'Hiding', 0, 0, '0x0058', 0, 'red')
    Orion.Unequip('Pants')
    Orion.Wait(700);
    Orion.Unequip('InnerTorso');
    Orion.Wait(100);
    Orion.Wait(3200);
  }

  Orion.UseSkill('Stealth');
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Stealth', 0, 0, '0x0058', 0, 'red')
  while (Player.Hidden()) {
    Orion.Wait(100);
  }
  if (!Player.Hidden()) {
    Orion.UseType('0x1411') //Perna Std
    Orion.UseType('0x141A') //Perna 2
    Orion.UseType('0x1415') // chest1 
    Orion.UseType('0x1416') // chest 2
  }
}

function MagiaINVIS() {
  Orion.Cast('Invisibility', 'self');
}

function MassDispel() {
  Orion.Cast('Mass Dispel', 'self');
}

function comerpeixe() {
  Orion.UseType('0x09CC', '0x0042')
}

function tirarrobe() {
  if ((Player.Stam() <= 89)) {
    Orion.Say('.drinkrefresh');
    Orion.Terminate('tirarrobe')
  }
  if ((Player.Stam() <= 99)) {
    if (Orion.Count('0x09CC', '0x0042', backpack) >= 1) {
      Orion.UseType('0x09CC', '0x0042', backpack)
      Orion.Unequip('robe')
      Orion.Wait(600)
      Orion.Unequip('shoes')
      Orion.Wait(600)
      Orion.UseObject('0x40327BB1') //Object da bota
      Orion.UseObject('0x40327BC6') //object do robe vip
      Orion.Terminate('tirarrobe')
    }
    if (Orion.Count('0x09CC', '0x0042', backpack) == 0) {
      Orion.Say('.drinkrefresh');
      Orion.Terminate('tirarrobe')
    }
  }
  if ((Player.Stam() < 120)) {
    Orion.Unequip('robe')
    Orion.Wait(600)
    Orion.Unequip('shoes')
    Orion.Wait(600)
    Orion.UseObject('0x40327BB1') //Object da bota
    Orion.UseObject('0x40327BC6') //object do robe vip
  }
}

function manaaa() {
  Orion.Say('.drinkmana');
  Orion.AddDisplayTimer(-2200, 17000, 'UnderChar', 'Circle|Bar', 'MANA', -540, -400, '0x0033', 1, 'blue');
}

function heall() {
  {
    if (Player.Hits() < Player.MaxHits()) {
      Orion.Say('.drinkheal');
    }
    Orion.UseFromGround('0x1008', '0x0530', '3');
  }
  Orion.AddDisplayTimer(-2300, 17000, 'UnderChar', 'Circle|Bar', 'HEAL', -475, -400, '0x0033', 1, 'yellow');
}

function Inviss() {
  Orion.Say('.drinkinvisibility');
  Orion.AddDisplayTimer(-2400, 17000, 'UnderChar', 'Circle|Bar', 'INVIS', -415, -400, '0x0033', 1, 'purple');
}

function Strself() {
  Orion.Cast('Strength', 'self');
}

function GreaterSel() {
  Orion.Cast('Greater Heal', 'self');
}

function Cureself() {
  Orion.Cast('Cure', 'self');
}

function Maself() {
  Orion.Cast('Magic Arrow', 'self');
}



function StopAllScripts() {
  Orion.Resend();
  Orion.Wait(100);
  Orion.CancelTarget();
  Orion.Wait(100);
  Orion.CharPrint(self, '95', 'Bands Off');
  Orion.Terminate('all');
}

function ping() {
  var a = 0;
  Orion.ClearJournal();
  Orion.Click('backpack');
  Orion.SetTimer('ping');
  while (!Orion.InJournal('backpack')) {
    a++;
  }
  Orion.Say('Ping :' + Orion.Timer('ping') + 'ms');
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function Attacknearest() {
  var serial = FindNearestEnemyCaio();
  Orion.Attack(serial);
}

function FindNearestEnemyCaio() {
  Orion.Ignore('self');
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    Orion.Ignore(friends[i]);
  }


  var humans = Orion.FindType('0x0190|0x0191|0x025D|0x025E', '-1', ground, 'near|mobile', '18');
  if (!humans.length) {
    Orion.Print('-1', 'no humans found, resetting ignore list');
    Orion.IgnoreReset();
    return '';
  }
  return humans[0];
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function bandageself() {
  Orion.BandageSelf();
}

function bandage() {
  Orion.UseType('0xe21');
}

function healSelf() {
  while (Player.Hits() < Player.MaxHits()) {
    Orion.Cast('Heal', self);
    Orion.Wait(1950);
  }
}

function healLast() {
  while (!Player.Dead()) {
    Orion.Cast('Heal', 'lasttarget');
    Orion.Wait(2200);
  }
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function MagicReflection() {
  Orion.Cast('Magic Reflection', 'self');
  Orion.AddDisplayTimer(100, 4800, 'UnderChar', 'Circle|Bar', 'Magic Reflection', 0, 0, '0x00105', 0, 'white');
}

function Protection() {
  Orion.Cast('Protection', 'self');
}

function React() {
  Orion.Cast('Reactive Armor', 'self');
}

function comerUva() {
  Orion.UseType('0x09D1');
  Orion.UseType('0x097B', 'any', 'backpack');
}

function RobeGuilda() {
  Orion.UseObject('0x401017B3') //Robe Guilda
  //	Orion.UseType('0x1451')// Ornate Crown
  Orion.Wait(200);
  if (Player.Stam() < Player.MaxStam()) {
    Orion.UseType('0x09CC', '0x0042')
  }
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




function setarArma() {
  Orion.AddObject('arma');
  Orion.Print('-1', 'Target your weapon')
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function HideRecalKey() {
  Orion.WarMode(false);
  Orion.Cast('Recall', '0x401B43F4');
  Orion.Wait(200);
}

function HideRecalBook() {
  Orion.WarMode(false);
  Orion.Cast('Recall', '0x40307B98');
  Orion.Wait(200);
  Orion.UseSkill("Hiding");
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Hiding', 0, 0, '0x0000', 0, 'black');
  Orion.Wait(3500);
  Orion.AddDisplayTimer(100, 6000, 'UnderChar', 'Circle|Bar', 'Recall', 0, 0, '0x0099', 0, 'yellow');
}

function HideGateBook() {
  Orion.WarMode(false);
  Orion.Cast('Gate Travel', '0x40307B98');
  Orion.Wait(100);
  Orion.UseSkill("Hiding");
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Hiding', 0, 0, '0x0000', 0, 'black');
  Orion.Wait(3500);
  Orion.AddDisplayTimer(100, 8000, 'UnderChar', 'Circle|Bar', 'Gate Travel', 0, 0, '0x00105', 0, 'white');
}

function DispelGate() {
  Orion.Cast('Dispel');
  Orion.WaitTargetGround('0xf6c', 'any', '15');
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function Heal() {
  if (Player.Hits() < Player.MaxHits()) {
    Orion.Say('.drinkheal');
  }
  Orion.UseFromGround('0x1008', '0x0530', '3');
}
function Mana() {
  if (Player.Mana() < Player.MaxMana()) {
    Orion.Say('.drinkmana');
  }
}

function Invis() {
  Orion.Say('.drinkinvisibility');
}

function Refresh() {
  if (Player.Stam() < Player.MaxStam()) {
    Orion.Say('.drinkRefresh');
  }
}
function GCure() {
  if (Player.Poisoned()) {
    Orion.Say('.drinkCure');
  }
}

function Shrink() {
  Orion.UseType('0x0F0E', ' 0x07FD', 'backpack');
}

function hide() {
  Orion.UseSkill("Hiding");
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Hiding', 0, 0, '0x0000', 0, 'black');
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function Explo() {
  Orion.UseType('0xf0e', '21', 'backpack')
  Orion.Wait(100);
  Orion.CancelTarget();
  Orion.Wait(200);
  Orion.Attack('lasttarget');
}

function MAexplo() {
  var cor = '0x0015'
  var item = '0x0F0E'
  Orion.CharPrint('self', '0x0015', 'Potes explosion ' + (Orion.Count(item, cor)))
  if (Orion.Count('0x0F0E', '0x0015') == 0) {
    Orion.Cast('Magic Arrow', 'self')
  }
  else
    Orion.Cast('Magic Arrow')
  Orion.WaitTargetType('0x0F0E', '0x0015')
}

function MASelf() {
  if (Player.Frozen()) {
    Orion.Cast('Magic Arrow', 'self');
    Orion.AddDisplayTimer(100, 1500, 'UnderChar', 'Circle|Bar', 'Magic Arrow', 0, 0, '0x0098', 0, 'yellow');
  }
}

function MassDispel() {
  Orion.Cast('Mass Dispel');
  Orion.Wait(100);
  Orion.AddDisplayTimer(100, 5500, 'UnderChar', 'Circle|Bar', 'Mass Dispel', 0, 0, '0x00105', 0, 'white');
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function castSpell(spellName, target, scrollType) {
  var scroll = Orion.FindType(scrollType);

  if (scroll && scroll.length > 0) {
    Orion.UseObject(scroll[0]);
  } else {
    Orion.Cast(spellName);
  }
  Orion.WaitTargetObject(target);
}

function castMA() {
  castSpell('Magic Arrow', 'lasttarget');
  Orion.AddDisplayTimer(100, 1500, 'UnderChar', 'Circle|Bar', 'MA', 0, 0, '0x0029', 0, 'yellow');
}


function castPoison() {
  castSpell('Poison', 'lasttarget', '0x1F40');
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Poison', 0, 0, '0x0029', 0, 'green');
}

function Atravessar() {
  if (Player.Stam() < Player.MaxStam() && Player.Stam() >= 100) {
    Orion.MoveItem('botavip', 'backpack');
    Orion.UseType('0x1F03', 'any')
    Orion.Wait(1500);
    Orion.UseObject('robevip');
    Orion.UseObject('botavip');
  }
  else {
    if (Player.Stam() < 100) {
      Orion.UseObject('robevip');
      Orion.UseObject('botavip');
      Orion.UseType('0x0F0E', '0x0021');
      //Orion.UseType('0x1F04', '0x0000');

    }
  }
}

function castFlamestrike() {
  castSpell('Flame strike', 'lasttarget', '0x1F5F');
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'FS', 0, 0, '0x0029', 0, 'red');
}

function castParalyze() {
  castSpell('Paralyze', 'lasttarget');
  Orion.AddDisplayTimer(100, 3300, 'UnderChar', 'Circle|Bar', 'Paralyze', 0, 0, '0x0029', 0, 'blue');
}

function castLight() {
  castSpell('Lightning', 'lasttarget');
  Orion.AddDisplayTimer(100, 2800, 'UnderChar', 'Circle|Bar', 'Lightning', 0, 0, '0x0029', 0, 'white');
}



function HarmLast() {
  Orion.Cast('Harm', 'lasttarget');
  Orion.AddDisplayTimer(100, 1800, 'UnderChar', 'Circle|Bar', 'Harm', 0, 0, '0x0098', 0, 'yellow');
}

function ClumsyLast() {
  Orion.Cast('Clumsy', 'lasttarget');
  Orion.AddDisplayTimer(100, 1800, 'UnderChar', 'Circle|Bar', 'Harm', 0, 0, '0x0098', 0, 'yellow');
}


function DispelLast() {
  Orion.Cast("Dispel", 'lasttarget');
  Orion.AddDisplayTimer(100, 3300, 'UnderChar', 'Circle|Bar', 'Dispel', 0, 0, '0x00105', 0, 'white');
}

function Dispel() {
  Orion.Cast('Dispel');
}


function DispelField() {
  Orion.Cast('Dispel Field');
}


function Teleport() {
  Orion.Cast('Teleport')
}

function Reveal() {
  Orion.Cast('Reveal')
  Orion.AddDisplayTimer(100, 3500, 'UnderChar', 'Circle|Bar', 'Reveal', 0, 0, '0x00105', 0, 'white');
}

function resurrect() {
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    var hp = Orion.FindObject(friends[i]);
    if (hp != null) {
      if (hp.Dead() && Orion.GetDistance(friends[i]) <= 12) {
        targetObj = Orion.FindObject(lasttarget);
        Orion.CharPrint(friends[i], '38', 'Ressando ' + targetObj.Name());
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x1F67', '0x0000', backpack);
        Orion.Wait(150);
        Orion.WaitTargetObject(friends[i]);
        if (Orion.Count('0x0E21', '-1', 'backpack') > 30) {
          Orion.UseType('0x0E21', '0x000', backpack);
        } else {
          Orion.Cast('resurrection');
        }

        return;
      }
    }
  }
  Orion.CharPrint(self, '38', 'Sem amigos mortos');
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function FF() {
  Orion.Cast("Fire Field");
  Orion.AddDisplayTimer(100, 4200, 'UnderChar', 'Circle|Bar', 'Fire Field', 0, 0, '0x0020', 0, 'red');
}

function FFself() {
  Orion.CancelWaitTarget();
  Orion.WaitTargetTileRelative('mine', 0, 0, 0);
  Orion.Cast('Fire Field');
  Orion.AddDisplayTimer(100, 4500, 'UnderChar', 'Circle|Bar', 'Fire Field', 0, 0, '0x0020', 0, 'red');
}

function FFlast() {
  var obj = Orion.FindObject('lasttarget');
  if (obj != null) {
    Orion.WaitTargetTile('400', obj.X(), obj.Y(), obj.Z());
    Orion.Cast('Fire Field');
    Orion.AddDisplayTimer(100, 4500, 'UnderChar', 'Circle|Bar', 'Fire Field', 0, 0, '0x0020', 0, 'red');
  }
}

function PF() {
  Orion.Cast("Paralyze Field");
  Orion.AddDisplayTimer(100, 4900, 'UnderChar', 'Circle|Bar', 'Paralyze Field', 0, 0, '0x0062', 0, 'blue');
}

function PFself() {
  Orion.CancelWaitTarget();
  Orion.WaitTargetTileRelative('mine', 0, 0, 0);
  Orion.Cast('Paralyze Field');
  Orion.AddDisplayTimer(100, 4900, 'UnderChar', 'Circle|Bar', 'Paralyze Field', 0, 0, '0x0060', 0, 'blue');
}

function PFlast() {
  var obj = Orion.FindObject('lasttarget');
  if (obj != null) {
    Orion.WaitTargetTile('400', obj.X(), obj.Y(), obj.Z());
    Orion.Cast('Paralyze Field');
    Orion.AddDisplayTimer(100, 4900, 'UnderChar', 'Circle|Bar', 'Paralyze Field', 0, 0, '0x0060', 0, 'blue');
  }
}

function EF() {
  Orion.Cast("Energy Field");
  Orion.AddDisplayTimer(100, 5500, 'UnderChar', 'Circle|Bar', 'Energy Field', 0, 0, '0x0078', 0, 'magenta');
}

function EFself() {
  Orion.CancelWaitTarget();
  Orion.WaitTargetTileRelative('mine', 0, 0, 0);
  Orion.Cast('Energy Field');
  Orion.AddDisplayTimer(100, 5500, 'UnderChar', 'Circle|Bar', 'Energy Field', 0, 0, '0x0078', 0, 'magenta');
}

function EFlast() {
  var obj = Orion.FindObject('lasttarget');
  if (obj != null) {
    Orion.WaitTargetTile('400', obj.X(), obj.Y(), obj.Z());
    Orion.Cast('Energy Field');
    Orion.AddDisplayTimer(100, 5500, 'UnderChar', 'Circle|Bar', 'Energy Field', 0, 0, '0x0078', 0, 'magenta');
  }
}

function WS() {
  Orion.Cast("Wall Of Stone");
  Orion.AddDisplayTimer(100, 3000, 'UnderChar', 'Circle|Bar', 'Wall Of Stone', 0, 0, '0x00136', 0, 'gray');
}

function WSself() {
  Orion.CancelWaitTarget();
  Orion.WaitTargetTileRelative('mine', 0, 0, 0);
  Orion.Cast('Wall Of Stone');
  Orion.AddDisplayTimer(100, 3000, 'UnderChar', 'Circle|Bar', 'Wall Of Stone', 0, 0, '0x00136', 0, 'gray');
}

function WSlast() {
  var obj = Orion.FindObject('lasttarget');
  if (obj != null) {
    Orion.WaitTargetTile('400', obj.X(), obj.Y(), obj.Z());
    Orion.Cast('Wall Of Stone');
    Orion.AddDisplayTimer(100, 3000, 'UnderChar', 'Circle|Bar', 'Wall Of Stone', 0, 0, '0x00136', 0, 'gray');
  }
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


function tamingpro() {
  Orion.UseType('0x1088');
  if (!Orion.ObjAtLayer('TamingPro')) {
    if (!Orion.FindObject('TamingPro')) {
      Orion.AddObject('TamingPro');
      Orion.Print('-1', 'Target yout Taming')
      Orion.WaitForTarget(1000);
    }
  }
  Orion.ClearJournal();
  Orion.Wait(100);
  Orion.UseSkill('Animal Taming', 'TamingPro');
  Orion.Wait(1000);
  while (!Orion.ObjAtLayer('TamingPro')) {
    Orion.Wait(1000);
    if (Orion.InJournal('nao conseguiu domesticar')) {
      tamingpro();
    }
    if (Orion.InJournal('linha visao')) {
      tamingpro();
    }
    if (Orion.InJournal('feroz')) {
      peace();
      tamingpro();
    }
    if (Orion.InJournal('aceitou voce')) {
      Orion.Say('.drink Shrink');
      Orion.WaitTargetObject('TamingPro');
      Orion.UseType('0x1413'); // Gorget
      Orion.Terminate('tamingpro');
    }
    if (Orion.InJournal('domesticado')) {
      Orion.UseType('0x1413'); // Gorget
      Orion.Terminate('tamingpro');
    }
  }
}

function peace() {
  Orion.ClearJournal();
  Orion.Wait(100);
  Orion.UseSkill('Peacemaking', 'TamingPro')
  Orion.Wait(100);
  while (!Orion.InJournal('se acalmou')) {
    Orion.Wait(1000);
    if (Orion.InJournal('falhou')) {
      peace();
    }
    if (Orion.InJournal('tocou mal')) {
      peace();
    }
  }
}

function book() {
  Orion.UseObject('0x402652F9');
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function cureOuBands() {
  if (Player.Poisoned()) {
    Orion.Cast('Cure', 'self');
  }
  else {
    while (Player.Hits() < Player.MaxHits()) {
      Orion.BandageSelf();
      Orion.Wait(2000);
    }
  }
}

function CastNearestInjuredFriend(spellName) {
  var friendSerialString = Orion.FindFriend('injured|live', '18');
  if (!friendSerialString.length) {
    Orion.Print('-1', 'Found no friends nearby');
    return;
  }
  Orion.Cast(spellName, serial);
}

//cast spell with a given name on your chosenFriend which is a saved Serial in Lists -> Objects
//or make a new one 
function CastFriend(spellName) {
  var chosenFriend = Orion.FindObject('chosenFriend');
  if (chosenFriend == null || chosenFriend == 0) {
    Orion.Print('-1', 'No chosen friend found');
    Orion.Print('-1', 'Target a mobile to mark him as your chosen friend.');
    Orion.AddObject('chosenFriend');
    while (Orion.HaveTarget()) {
      Orion.Wait('50');
    }
    chosenFriend = Orion.FindObject('chosenFriend');
    //Orion.AddFriendList(chosenFriend.Serial()); need to implement
  }
  Orion.Print('-1', 'try cast friend ' + chosenFriend.Name());
  Orion.Cast(spellName, chosenFriend.Serial());

}

//cast spell with a given name on target
function CastTargetedEnemy(spellName) {
  Orion.Cast(spellName, 'lasttarget');
}

//helper function for AttacktNextHuman() and TargetNextHuman()
function FindNearestHumanEnemy() {
  Orion.Ignore('self');
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    Orion.Ignore(friends[i]);
  }


  var humans = Orion.FindType('0x0190|0x0191|0x025D|0x025E', '-1', ground, 'near|mobile', '18');
  if (!humans.length) {
    Orion.Print('-1', 'no humans found, resetting ignore list');
    Orion.IgnoreReset();
    return '';
  }
  return humans[0];
}

//This function will swap between players in range of 18 and attack them.
function AttacktNextHuman() {
  var serial = FindNearestHumanEnemy();
  if (!serial.length) return;
  Orion.ClientLastAttack(serial);
  Orion.Attack(serial);
  Orion.Ignore(serial);

}
//This function will swap between players in range of 18 and target them.
function TargetNextHuman() {
  var serial = FindNearestHumanEnemy();
  if (!serial.length) return;
  Orion.ClientLastTarget(serial);
  Orion.TargetObject(serial);
  Orion.Ignore(serial);

  targetObj = Orion.FindObject(lasttarget);
  if (targetObj != null) {
    Orion.CharPrint(targetObj.Serial(), 1153, "Enemy is: " + targetObj.Name());
  }
}

//This function will swap between your nearby friends from your friend list
function SwitchFriend() {
  var friend = Orion.FindFriend('next', '18');
  if (!friend.length) {
    Orion.Print('-1', 'There are no friends nearby');
    return;
  }
  Orion.AddObject('chosenFriend', friend);
}

function FindSerialRecursive(friendsAmount, friends, i) {
  if (friendsAmount - 1 != i) {
    friend = Orion.FindObject(friends[i + 1]);
    if (friend == null)
      return FindSerialRecursive(friendsAmount, friends, i + 1);
    else
      return friend;
  }
  else {
    //loop over friends again and take the first one which is neaby
    for (var c = 0; i < friendsAmount; c++) {
      friend = Orion.FindObject(friends[c]);
      if (friend != null)
        return friend;
    }

  }
}



function castself() {
  var value = 8;
  var empty = 0;

  var offset =
    [
      [empty, -value],        //direction = 0
      [value, -value],        //direction = 1
      [value, empty],     //direction = 2
      [value, value],     //direction = 3
      [empty, value],     //direction = 4
      [-value, value],        //direction = 5
      [-value, empty],        //direction = 6
      [-value, -value]        //direction = 7
    ];

  var xy = offset[Player.Direction() & 2];
  Orion.WaitTargetTileRelative('self', xy[0], xy[0], 0);
  Orion.Cast('Paralyze Field');
}

//o script vai procurar uma das armas predefinidas e poisonara
//eh necessario que as pots de poison estejam na bag principal
var armasparapoisonar = '0x1400|0x0F51|0x1402|0x1404|0x1405' //adicione aqui os types das armas que quiser, o script vai procurar por todas


function scrollOrSpellTarget() {
  var type = 0x1F5F;
  var spellname = 'Flame strike'
  var scroll = Orion.FindType(type, '-1', 'self', '-1', '-1', '-1', true);
  if (scroll.length) {
    if (spellname == 'Flame strike') {
      Orion.Print('-1', spellname + ' Scroll');
      Orion.WaitTargetObject('lasttarget');
      Orion.UseType(type, '0x0000', self, true);
    }
    else {
      Orion.Print('-1', spellname + ' Scroll');
      Orion.WaitTargetObject('lasttarget');
      Orion.UseType(type);
    }
  }
  else {
    Orion.Print('-1', spellname + ' Spell');
    Orion.WaitTargetObject('lasttarget');
    Orion.Cast(spellname);
  }
  Orion.AddDisplayTimer(100, 3350, 'UnderChar', 'Circle|Bar', 'FS', 0, 0, '0x0058', 0, 'red');
}




function LootByFindList(listName) {
  while (LootItems(Orion.FindList(listName, 'corpse')))
    Orion.Wait(50);
  Orion.Ignore('corpse');
}

function LootAll() {
  while (LootItems(Orion.FindType('-1', '-1', 'corpse')))
    Orion.Wait(50);
}



function tame() {
  var mobs = Orion.FindType('!0x0190|!0x0191|!0x025E', '-1', ground, 'near|mobile', '25', 'yellow|gray|criminal|blue|murderer');
  if (mobs.length) {
    Orion.SetGlobal('tame', mobs[0]);
    var mobo = Orion.FindObject(mobs[0]);


    Orion.WalkTo(mobo.X(), mobo.Y(), 0);
    Orion.ClearJournal();
    Orion.WaitTargetObject(Orion.GetGlobal('tame'));
    Orion.UseType('0x0EB2', '0x0185');
    Orion.Wait(2000);
    while (!Orion.InJournal('belong')) {
      Orion.ClearJournal();
      Orion.WarMode(false);
      Orion.WalkTo(mobo.X(), mobo.Y(), 0);
      Orion.WaitTargetObject(Orion.GetGlobal('tame'));
      Orion.UseType('0x0EB2', '0x0185');
      Orion.Wait(500);
      Orion.WalkTo(mobo.X(), mobo.Y(), 0);
      Orion.Wait(500);
      Orion.WalkTo(mobo.X(), mobo.Y(), 0);
      Orion.Wait(500);
    }
    Orion.WaitTargetObject(Orion.GetGlobal('tame'));
    Orion.UseType('0x0F0E', '0x0076');
    Orion.Wait(2000);
    Orion.SetGlobal('LastReacal', Orion.Now());
    Orion.Say('.recall 1,2');
  }
}

function castlasttargetpf() {
  var value = 8;
  var empty = 0;

  var offset =
    [
      [empty, -value],        //direction = 0
      [value, -value],        //direction = 1
      [value, empty],     //direction = 2
      [value, value],     //direction = 3
      [empty, value],     //direction = 4
      [-value, value],        //direction = 5
      [-value, empty],        //direction = 6
      [-value, -value]        //direction = 7
    ];

  var xy = offset[Player.Direction() & 2];
  Orion.WaitTargetTileRelative('lasttarget', xy[0], xy[0], 0);
  Orion.Cast('Paralyze Field');
}

function cast_pf_last() {
  var obj = Orion.FindObject('lasttarget');
  if (obj != null) {
    Orion.WaitTargetTile('400', obj.X(), obj.Y(), obj.Z());
    Orion.Cast('Paralyze Field');
  }
}

function cure() {

  Orion.EquipT('0x1F03');
  //robe of bless
  Orion.Wait(600);


  Orion.EquipT('0x2683');

  Orion.Wait(510);
  //continue Com poison
  if (Player.Poisoned()) {
    Orion.Say('.gcure');
  }
}

function Loot() {
  var Gold = Orion.FindType('0x0EED', '0xFFFF', 'ground', 'near', '3');
  var corpse = Orion.FindType('0x2006', '0xFFFF', 'ground', 'near', '3');
  for (var c = 0; c < corpse.length; c++) {
    var serial = corpse[c];
    Orion.UseObject(serial);
    Orion.Wait(150);
    var list = Orion.FindList('Loot', serial);
    for (var i = 0; i < list.length; i++) {
      Orion.MoveItem(list[i], 0, 'backpack');
      Orion.Wait(250);
    }
  }
  for (var i = 0; i < Gold.length; i++) {
    Orion.MoveItem(Gold[i], 0, backpack);
    Orion.Wait(600);
  }
  Orion.Print('Loot Done');
}

function MountBandold() {
  var msg2 = "nao precisa ser curado";
  Orion.ClearJournal();
  Orion.WaitTargetObject('myMount');
  Orion.UseType('0x0e21', '0x0000', 'backpack');
  Orion.Wait(200);
  if (Orion.InJournal('Voce nao pode curar com bandagem alguem envenenado')) {
    Orion.Cast('Cure', 'myMount');
    Orion.Wait(100);
  }
  if (Orion.InJournal('Voce nao alcanca')) {
    Orion.Cast('Dispel', 'MyMount');
    Orion.Wait(100);
  }
  else {
    Orion.ClearJournal();
    if (!Orion.InJournal(msg2)) {
      Orion.Wait(200);
      Orion.WaitTargetObject('myMount')
      Orion.UseType('0x0e21', '0x0000', 'backpack');
    }
  }
}

function DropBau() { Orion.DropType('0x09AA|0x0E7D') }

function shortSpear() {
  Orion.UseObject('0x401E9C15');
  if (Orion.WaitForGump(1000)) {
    var gump0 = Orion.GetGump('last');
    if ((gump0 !== null) && (gump0.ID() === '0x00000484')) {
      gump0.Select(Orion.CreateGumpHook(10104));
      Orion.Wait(100);
    }
  }
  if (Orion.WaitForGump(1000)) {
    var gump1 = Orion.GetGump('last');
    if ((gump1 !== null) && (gump1.ID() === '0x00000484')) {
      gump1.Select(Orion.CreateGumpHook(0));
      Orion.Wait(100);
    }
  }
}

function setarFollow() {
  Orion.AddObject('follow');
  Orion.Print('-1', 'Target your follow')
}

function Follow() {
  var mobileObj = Orion.FindObject('follow');

  if (mobileObj) {
    while (mobileObj.Exists()) {
      if (Orion.GetDistance(mobileObj.Serial()) > 1) {
        Orion.OptionAlwaysRun(true);
        Orion.WalkTo(mobileObj.X(), mobileObj.Y(), mobileObj.Z(), 1);
      }
      else {
        Orion.Wait(100);
      }
    }
  }
}

function ressurect2() {
  if (Player.Hits() < 60) {
    Orion.CharPrint(self, '38', '!!!???? ?? ??? ???????!!!');
    return;
  }
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    var hp = Orion.FindObject(friends[i]);
    if (hp != null) {
      if (hp.Dead() && Orion.GetDistance(friends[i]) <= 2) {
        targetObj = Orion.FindObject(lasttarget);
        Orion.CharPrint(friends[i], '38', 'Ressando ' + targetObj.Name());
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x1F49', '0xFFFF', backpack);
        Orion.Wait(150);
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x0E21', '0x000', backpack);
        return;
      }
    }
  }
  Orion.CharPrint(self, '38', 'Sem amigos mortos');
}


function cortaCorpo() {
  var list = Orion.FindType('0x2006|0x0ECA|0x0ECB|0x0ECC|0x0ECD|0x0ECE|0x0ECF|0x0ED0|0x0ED1|0x0ED2', '-1', ground, 'fast', '2');

  Orion.ClearJournal();
  if (!Orion.FindObject('armaD')) {
    Orion.Print('Selecione a arma cortante');
    Orion.AddObject('armaD');
    while (Orion.HaveTarget()) {
      Orion.Wait(20);
    }
  }
  for (var i = 0; i < list.length; i++) {
    Orion.Print(list[i]);
    Orion.WaitTargetObject(list[i]);
    Orion.UseObject(Orion.FindObject('armaD').Serial())
    Orion.Wait(300);
    if (Orion.InJournal('You can')) {
      Orion.Print('Selecione a arma cortante');
      Orion.AddObject('armaD');
      while (Orion.HaveTarget()) {
        Orion.Wait(20);
      }
    }
  }


}


function ressa() {
  if (Player.Hits() < 60) {
    Orion.CharPrint(self, '38', '!!!???? ?? ??? ???????!!!');
    return;
  }
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    var hp = Orion.FindObject(friends[i]);
    if (hp != null) {
      if (hp.Dead() && Orion.GetDistance(friends[i]) <= 2) {
        targetObj = Orion.FindObject(lasttarget);
        Orion.CharPrint(friends[i], '38', 'Ressando ' + targetObj.Name());
        Orion.Cast('Resurrection', friends[i]);
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x1F67', '0x0000', backpack);
        Orion.Wait(150);
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x0E21', '0x000', backpack);
        return;
      }
    }
  }
  Orion.CharPrint(self, '38', 'Sem amigos mortos');
}

function Ward() {
  while (!Player.Dead()) {
    Orion.ClearJournal
    Orion.Wait('2000');
    if (!Player.Hidden()) {
      Orion.UseSkill('Hiding');
      Orion.Wait('4000');
      Orion.UseSkill('Stealth');
      Orion.Wait('4000');
    }
    Orion.Wait(200);
    if (Orion.InJournal('You see:')) {
      Orion.Wait(200);
      Orion.Say('.gc Inimigo se aproximando!!!');
    }
  }
}
///////////////////////////////////////////////////////////////////////////

function Gardening() {
  Orion.UseType('0x09A7', 'backpack');
  Orion.Wait(200);
  Orion.TargetGround('0x0B41', '0x0000', '3')
  Orion.TargetGround('0x0B42', '0x0000', '3')
  Orion.TargetGround('0x0B43', '0x0000', '3')
  Orion.TargetGround('0x0B44', '0x0000', '3')
}

function gumpWait(pos, text) {
  while (Orion.WaitForGump(20000)) {
    var gump0 = Orion.GetGump('last')
    if ((gump0 !== null) && (gump0.Text(pos).match(text))) {
      return gump0
    }
  }
}

function TargetNextHuman1() {
  Orion.Ignore(self);
  var serial = Orion.FindType('0x0190|0x0191', '-1', ground, 'ignorefriends', '18');
  if (!serial.length) {
    Orion.IgnoreReset();
    return;
  }
  Orion.CharPrint(serial[0], '30', 'AQUI');
  Orion.CharPrint(self, '50', Orion.RequestName(serial[0]));
  Orion.ClientLastTarget(serial[0]);
  Orion.Wait(100);
  Orion.Attack(Orion.ClientLastTarget());
  Orion.Ignore(serial[0]);
}

function EnchantedFish() {
  var encFish = Orion.FindType('0x097B', 'any', 'backpack');
  if ((encFish.length) && (!Orion.DisplayTimerExists('EnchentedFish'))) {
    Orion.UseObject(encFish[0]);
    Orion.AddDisplayTimer('EnchentedFish', '120000', 'Top', 'Line|Bar', 'Enchented Fish', '0', '15');
  }
}


function TargetNextEnemy_PvM() {
  Orion.Terminate('tame');
  if (Orion.HaveTarget()) {
    //Orion.TargetObject(lasttarget);
    Orion.TargetObject(Orion.GetGlobal('global_enemy'));
  } else {
    var serial = FindNearestEnemy_PvM(0);
    if (!serial.length)
      return;
    var enemy = Orion.FindObject(serial);
    var notoColor;
    switch (enemy.Notoriety()) {
      case 1:
        notoColor = 2119;
        break;
      case 3:
        notoColor = 906;
        break;
      case 6:
        notoColor = 33;
        break;
      default:
        notoColor = 906;
    }
    var loop = 0;
    while (loop < 5) {
      Orion.CharPrint(self, notoColor, ' ');
      Orion.CharPrint(lasttarget, notoColor, ' ');
      loop++;
    }
    Orion.CharPrint(self, notoColor, ' Enemy: ' + enemy.Name());
    Orion.CharPrint(serial, notoColor, ' ALVO ');
    Orion.SetGlobal('global_enemy', serial);
    Orion.ClientLastTarget(serial);
    Orion.TargetSystemSerial(serial);
    Orion.TargetObject(serial);
    Orion.Attack(serial);
    Orion.Ignore(serial);
    Orion.UseType('0x09D1'); // Grapes of Wrath
  }
}

function FindNearestEnemy_PvM(a) //subfunction
{
  //timer rest idea from Caleb
  var resetTime = 800;
  var currentTimeMs = Orion.Now();
  var lastTimeMs = Orion.GetGlobal("FindNearestEnemy_PvM_LastTime");

  var timeSpan = currentTimeMs - lastTimeMs;

  if (timeSpan > resetTime) {
    //Orion.Print('-1', 'TIMER RESET: ' + timeSpan); //debug
    Orion.IgnoreReset();
  }
  Orion.Ignore('self');
  //Orion.UseIgnoreList('ignoreProvoke'); //example usage of custom IgnoreList
  var enemy = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "near|mobile|ignorefriends", 18, "gray|red");
  if (!enemy.length) {
    Orion.Print('-1', 'no enemy found, resetting ignore list');
    Orion.IgnoreReset();
    return '';
  }
  var eSummon = (Orion.FindObject(enemy[0])).CanChangeName();
  while (eSummon) {
    //Orion.Print('[Summon:] ' + (Orion.FindObject(enemy[0])).Name()); //debug print
    Orion.Ignore(enemy[0]);
    enemy = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "near|mobile|ignorefriends", 18, "gray|red");
    if (!enemy.length) {
      Orion.Print('-1', 'no enemy found, resetting ignore list');
      Orion.IgnoreReset();
      return '';
    }
    eSummon = (Orion.FindObject(enemy[0])).CanChangeName();
  }
  Orion.SetGlobal("FindNearestEnemy_PvM_LastTime", Orion.Now());
  return enemy[0];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////               C O O K I N G             ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

function setarbaucooking() {
  Orion.Say('Selecione o bau com greater str e uvas')
  Orion.WaitForAddObject('baucooking')
  Orion.Say('Selecione o bau para guardas as comidas')
  Orion.WaitForAddObject('baucomidas')
}


function FazerGrapes() {
  Orion.UseObject('baucooking')
  Orion.Wait(1500)
  if (Orion.Count('0x0F0E', '0x038A', 'baucooking') == 0 || Orion.Count('0x09D1', '0', 'baucooking') == 0) {
    Orion.Say('Insumos insuficientes')
    Orion.Terminate('FazerGrapes')
  }
  while (!Player.Dead()) {
    if (Orion.Count('0x0F0E', '0x038A', 'self') <= 5 || Orion.Count('0x09D1', '0', 'self') == 0) {
      var uvapronta = Orion.FindType('0x09D1', '0x0482', 'backpack')
      Orion.MoveItem(uvapronta, -1, 'baucomidas')
      Orion.Wait(600)
      var strp = Orion.FindType('0x0F0E', '0x038A', 'baucooking')
      Orion.MoveItem(strp, 1, backpack)
      Orion.Wait(600)
      var uvap = Orion.FindType('0x09D1', '0', 'baucooking')
      Orion.MoveItem(uvap, 1, backpack)
      Orion.Wait(600)
    }
    while (Orion.Count('0x09D1', '0', 'self') >= 1) {
      if (Orion.WaitForGump(1000)) {
        var gump0 = Orion.GetGump('last');
        if (gump0 !== null) {
          gump0.Select(Orion.CreateGumpHook(5008));
          Orion.Wait(100);
        }
      }
    }
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////          A L C H E M Y   -  F S          /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function FazerPotHeal() {
  Orion.UseObject('bauguard')
  Orion.Wait(600)
  Orion.UseObject('baureag')
  Orion.Wait(600)
  if (Orion.Count('0x0F85', '-1', 'baureag') <= 13 || Orion.Count('0x0F0E', '0', 'baureag') == 0) {
    Orion.Say('Insumos insuficientes')
    Orion.Terminate('FazerPotHeal')
  }
  while (!Player.Dead()) {
    if (Orion.Count('0x0F85', '-1', 'self') <= 13 || Orion.Count('0x0F0E', '0', 'self') == 0) {
      var gisengg = Orion.FindType('0x0F85', '0', 'backpack')
      Orion.MoveItem(gisengg, -1, 'baureag')
      Orion.Wait(600)
      var potheal = Orion.FindType('0x0F0E', '0x00FF', 'backpack')
      Orion.MoveItem(potheal, -1, 'bauguard')
      Orion.Wait(600)
      var potvaziog = Orion.FindType('0x0F0E', '0', 'backpack')
      Orion.MoveItem(potvaziog, -1, 'baureag')
      Orion.Wait(600)
      var gisengp = Orion.FindType('0x0F85', '0', 'baureag')
      Orion.MoveItem(gisengp, 1400, backpack)
      Orion.Wait(600)
      var potvazio = Orion.FindType('0x0F0E', '0', 'baureag')
      Orion.MoveItem(potvazio, 100, backpack)
      Orion.Wait(600)
    }
    if (Orion.Count('0x0F85', '-1', 'self') >= 14) {
      if (Orion.WaitForGump(1000)) {
        var gump0 = Orion.GetGump('last');
        if (gump0 !== null) {
          gump0.Select(Orion.CreateGumpHook(5008));
          Orion.Wait(100);
        }
      }
    }
  }
}

function setarbauGreat() {
  Orion.Say('Selecione o bau com Mandrake Roots')
  Orion.WaitForAddObject('baureag')
  Orion.Say('Selecione o bau para guardar os Great')
  Orion.WaitForAddObject('bauguard')
}



function FazerPotGreat() {
  Orion.UseObject('baureag')
  Orion.Wait(500)
  Orion.UseObject('bauguard')
  Orion.Wait(1500)
  if (Orion.Count('0x0F86', '-1', 'baureag') <= 5 || Orion.Count('0x0F0E', '0', 'baureag') == 0) {
    Orion.Say('Insumos insuficientes')
    Orion.Terminate('FazerPotGreat')
  }
  while (!Player.Dead()) {
    if (Orion.Count('0x0F86', '-1', 'self') <= 5 || Orion.Count('0x0F0E', '0', 'self') == 0) {
      var eyeg = Orion.FindType('0x0F86', '0', 'backpack')
      Orion.MoveItem(eyeg, -1, 'baureag')
      Orion.Wait(600)
      var potmana = Orion.FindType('0x0F0E', '0x0480', 'backpack')
      Orion.MoveItem(potmana, -1, 'bauguard')
      Orion.Wait(600)
      var potvaziog = Orion.FindType('0x0F0E', '0', 'backpack')
      Orion.MoveItem(potvaziog, -1, 'baureag')
      Orion.Wait(600)
      var eyep = Orion.FindType('0x0F86', '0', 'baureag')
      Orion.MoveItem(eyep, 600, backpack)
      Orion.Wait(600)
      var potvazio = Orion.FindType('0x0F0E', '0', 'baureag')
      Orion.MoveItem(potvazio, 100, backpack)
      Orion.Wait(600)
    }
    if (Orion.Count('0x0F86', '-1', 'self') >= 6) {
      if (Orion.WaitForGump(1000)) {
        var gump0 = Orion.GetGump('last');
        if (gump0 !== null) {
          gump0.Select(Orion.CreateGumpHook(5008));
          Orion.Wait(100);
        }
      }
    }
  }
}


function FazerPotMana() {
  Orion.UseObject('baureag')
  Orion.Wait(500)
  Orion.UseObject('bauguard')
  Orion.Wait(1500)
  if (Orion.Count('0x0F87', '-1', 'baureag') <= 5 || Orion.Count('0x0F0E', '0', 'baureag') == 0) {
    Orion.Say('Insumos insuficientes')
    Orion.Terminate('FazerPotMana')
  }
  while (!Player.Dead()) {
    if (Orion.Count('0x0F87', '-1', 'self') <= 5 || Orion.Count('0x0F0E', '0', 'self') == 0) {
      var eyeg = Orion.FindType('0x0F87', '0', 'backpack')
      Orion.MoveItem(eyeg, -1, 'baureag')
      Orion.Wait(600)
      var potmana = Orion.FindType('0x0F0E', '0x0480', 'backpack')
      Orion.MoveItem(potmana, -1, 'bauguard')
      Orion.Wait(600)
      var potvaziog = Orion.FindType('0x0F0E', '0', 'backpack')
      Orion.MoveItem(potvaziog, -1, 'baureag')
      Orion.Wait(600)
      var eyep = Orion.FindType('0x0F87', '0', 'baureag')
      Orion.MoveItem(eyep, 600, backpack)
      Orion.Wait(600)
      var potvazio = Orion.FindType('0x0F0E', '0', 'baureag')
      Orion.MoveItem(potvazio, 100, backpack)
      Orion.Wait(600)
    }
    if (Orion.Count('0x0F87', '-1', 'self') >= 6) {
      if (Orion.WaitForGump(1000)) {
        var gump0 = Orion.GetGump('last');
        if (gump0 !== null) {
          gump0.Select(Orion.CreateGumpHook(5008));
          Orion.Wait(100);
        }
      }
    }
  }
}

function setarbauFS() {
  Orion.Say('Selecione o bau com blank susfour spider')
  Orion.WaitForAddObject('baureag')
  Orion.Say('Selecione o bau para guardar os FS')
  Orion.WaitForAddObject('bauguard')
}


function FazerFS() {
  Orion.UseObject('baureag')
  Orion.Wait(500)
  Orion.UseObject('bauguard')
  Orion.Wait(1500)
  if (Orion.Count('0x0F8C', '-1', 'baureag') == 0 || Orion.Count('0x0F8D', '0', 'baureag') == 0 || Orion.Count('0x0E34', '0', 'baureag') == 0) {
    Orion.Say('Insumos insuficientes')
    Orion.Terminate('FazerFS')
  }
  while (!Player.Dead()) {
    if (Orion.Count('0x0F8C', '-1', 'self') == 0 || Orion.Count('0x0F8D', '0', 'self') == 0 || Orion.Count('0x0E34', '0', 'self') == 0) {
      var sulfg = Orion.FindType('0x0F8C', '0', 'backpack')
      Orion.MoveItem(sulfg, -1, 'baureag')
      Orion.Wait(600)
      var spiderg = Orion.FindType('0x0F8D', '0', 'backpack')
      Orion.MoveItem(spiderg, -1, 'baureag')
      Orion.Wait(600)
      var bscrollg = Orion.FindType('0x0E34', '0', 'backpack')
      Orion.MoveItem(bscrollg, -1, 'baureag')
      Orion.Wait(600)
      var fsscroll = Orion.FindType('0x1F5F', '0x0000', 'backpack')
      Orion.MoveItem(fsscroll, -1, 'bauguard')
      Orion.Wait(600)
      var sulfp = Orion.FindType('0x0F8C', '0', 'baureag')
      Orion.MoveItem(sulfp, 100, backpack)
      Orion.Wait(600)
      var spiderp = Orion.FindType('0x0F8D', '0', 'baureag')
      Orion.MoveItem(spiderp, 100, backpack)
      Orion.Wait(600)
      var bscrollp = Orion.FindType('0x0E34', '0', 'baureag')
      Orion.MoveItem(bscrollp, 100, backpack)
      Orion.Wait(600)
    }
    if (Orion.Count('0x0F8C', '-1', 'self') == 1 || Orion.Count('0x0F8D', '0', 'self') == 1 || Orion.Count('0x0E34', '0', 'self') == 1) {
      if (Orion.WaitForGump(1000)) {
        var gump0 = Orion.GetGump('last');
        if (gump0 !== null) {
          gump0.Select(Orion.CreateGumpHook(5008));
          Orion.Wait(100);
        }
      }
    }
  }
}


function autoprismaA() {
  var prisma = Orion.FindObject(Orion.ClientLastTarget())
  while (prisma && prisma.Hits() > 0) {
    if (Player.Mana() < 70) {
      Orion.Say('.drinkmana');
    }
    Orion.AddDisplayTimer(900, 45000, 'UnderChar', 'Circle|Bar', 'Prisma', -450, -315, '0x0033', 2, 'blue');
    Orion.DisplayTimerSetIcon(900, 'Bottom', '0x20D3', '0x09bc', 0, 0)
    Orion.CharPrint('self', '0x666', 'Castando PF ')
    var mana = Player.Mana()
    Orion.Exec('pfSelf')
    Orion.Wait('6250')
    while (Player.Mana() >= mana) {
      Orion.Exec('pfSelf')
      Orion.Wait('6250')
    }
    Orion.Exec('Armar')
    Orion.CharPrint('self', '0x13', 'Atacando Prisma ')
    Orion.Wait('34000')
  }
  Orion.Exec('CortarCorpo')
  Orion.Wait('100')
  Orion.Exec('lootvarios')
  Orion.Wait('100')
  Orion.Exec('Recallrb')
}



function AttackNextPlayer() {
  Orion.CloseStatusbar(Orion.GetSerial('Enemy'));

  if (!targetSerial) {
    var targetSerial = FindNearestEnemy();
  }

  if (targetSerial) {
    Orion.ShowStatusbar(targetSerial, 900, 850);
    Orion.AddObject('Enemy', targetSerial);

    Orion.ClientLastTarget(targetSerial);
    Orion.CharPrint('self', '0x0790', Orion.RequestName(targetSerial));
  }
}

function FindNearestEnemy() {
  Orion.ClearHighlightCharacters();
  Orion.Ignore('self');
  Orion.Ignore('Enemy');

  var enemies = Orion.GetEnemyList();

  if (enemies.length) {
    for (var i = 0; i < enemies.length; i++) {
      if (Orion.GetSerial('Enemy') != enemies[i]) {
        return enemies[i];
      }
    }

    return enemies[0];
  }

  var friends = Orion.GetFriendList();

  for (var i = 0; i < friends.length; i++) {
    Orion.Ignore(friends[i]);
  }

  var enemy = Orion.FindType('0x0190|0x0191|0x00B6|0x00B7|0x00B8|0x00B9|0x00BA', '0xFFFF', ground, 'near|mobile|ignorefriends|ignoreNPC', '25', 'criminal|red|gray|orange|blue');

  if (!enemy.length) {
    Orion.Print('-1', 'Ninguem na area!!');
    Orion.IgnoreReset();
    return '';
  }

  return enemy[0];
}

function AutoLootGold() {
  //1 - loot all; 0 - loot prioritized items
  var all = 0;
  //1 - ignore list, 0 - do not ignore
  var clear = 0;
  //1 - use skinning
  var useSkining = 0;
  //name of your lootlist
  var listName = 'ListaGold';
  //recursive search in a corpse
  //name of the list of bags
  //If corpses contain bags and more bags within those bags
  //create a list with possible bag types to check inside those too
  var bagsList = 'bagsList';
  FastLoot2(listName, all, clear, useSkining, bagsList);
}

function AutoLootMapa() {
  //1 - loot all; 0 - loot prioritized items
  var all = 0;
  //1 - ignore list, 0 - do not ignore
  var clear = 0;
  //1 - use skinning
  var useSkining = 0;
  //name of your lootlist
  var listName = 'ListaMapa';
  //recursive search in a corpse
  //name of the list of bags
  //If corpses contain bags and more bags within those bags
  //create a list with possible bag types to check inside those too
  var bagsList = 'bagsList';
  FastLoot2(listName, all, clear, useSkining, bagsList);
}

function AutoLootHeart() {
  //1 - loot all; 0 - loot prioritized items
  var all = 0;
  //1 - ignore list, 0 - do not ignore
  var clear = 0;
  //1 - use skinning
  var useSkining = 0;
  //name of your lootlist
  var listName = 'ListaHeart';
  //recursive search in a corpse
  //name of the list of bags
  //If corpses contain bags and more bags within those bags
  //create a list with possible bag types to check inside those too
  var bagsList = 'bagsList';
  FastLoot2(listName, all, clear, useSkining, bagsList);
}

function arena() {
  Orion.UseObject('0x400C9744');
  if (Orion.WaitForGump(1000)) {
    var gump0 = Orion.GetGump('last');
    if ((gump0 !== null) && (gump0.ID() === '0x0000046A')) {
      gump0.Select(Orion.CreateGumpHook(2));
      Orion.Wait(100);
    }
  }
}

function reparar() {
  Orion.UseType('0x1022', '0xFFFF');
  if (Orion.WaitForGump(1000)) {
    var gump0 = Orion.GetGump('last');
    if (gump0 !== null) {
      gump0.Select(Orion.CreateGumpHook(5006));
      Orion.Wait(100);
    }
  }
  if (Orion.WaitForTarget(1000))
    Orion.TargetType('0x13B2');
  Orion.TargetType('0x0F4F');
  Orion.TargetType('0x0F50');
  Orion.TargetType('0x13B1');
  Orion.TargetType('0x13FC');
  Orion.TargetType('0x13FD');
}

function pedracomerce() {
  Orion.UseObject('0x40307B98');
  Orion.UseObject('0x4002ECBC');
  if (Orion.WaitForGump(1000)) {
    var gump0 = Orion.GetGump('last');
    if ((gump0 !== null) && (gump0.ID() === '0x00000469')) {
      gump0.Select(Orion.CreateGumpHook(16));
      Orion.Wait(100);
    }
  }
}

//###########SCRIPT RECALL COM TIMER#################//
function Recallbarco() {
  Orion.WaitTargetObject('0x40088336')
  Orion.Cast('Recall')
  Orion.Wait('100')
  Orion.UseSkill('Hiding')
  Orion.AddDisplayTimer(100, 7200, 'UnderChar', 'Circle|Bar', 'RECALL', 0, 0, '0x0033', 1, 'blue');
}
//###########SCRIPT RECALL COM TIMER#################//


//###########SCRIPT GATE COM TIMER#################//
function Gaterb() {
  Orion.Say('.gate 040275FEE,1')
  Orion.Wait('150')
  Orion.UseSkill('Hiding');
  Orion.AddDisplayTimer(100, 11500, 'UnderChar', 'Circle|Bar', 'GATE', 0, 10, '0x0032', 1, 'red');
}
//###########SCRIPT GATE COM TIMER#################//

function castRessBandsMagia() {
  Orion.AddDisplayTimer(300, 8500, 'UnderChar', 'Circle|Bar', 'RESS AMIGO', 425, -305, '0x0032', 1, 'blue');
  var friends = Orion.GetFriendList();

  for (var i = 0; i < friends.length; i++) {
    if (Orion.FindObject(friends[i]) && Orion.FindObject(friends[i]).Dead()) {
      if (Orion.Count('0x0E21') >= 30) {
        Orion.WaitTargetObject(friends[i]);
        Orion.UseType('0x0E21');
        Orion.WaitJournal('Voce conseguiu|Voce nao|Voce esta|Voce precisa', Orion.Now(), Orion.Now() + 6000);
      } else {
        Orion.Cast('Resurrection');
        Orion.WaitTargetObject(friends[i]);
        Orion.Print('N?o tem bandagem suficiente para ressar!!')
        Orion.Wait(500);
      }

      break;
    }
  }
}

function gm_inscription() {
  if (Orion.WaitForGump(1000)) {
    var gump0 = Orion.GetGump('last');
    if ((gump0 !== null) && (!gump0.Replayed()) && (gump0.ID() === '0x00000485')) {
      gump0.Select(Orion.CreateGumpHook(5008));
      Orion.Wait(100);
    }
  }
  Orion.Wait(4000)
  gm_inscription()
}

function atiraArco() {
  Orion.WalkTo(Player.X() - 1, Player.Y(), Player.Z(), 0)
  Orion.Wait(2200)
  Orion.WalkTo(Player.X() + 1, Player.Y(), Player.Z(), 0)
  Orion.Wait(2200)
  atiraArco()
}
function MAexplo() {
  var cor = '0x0000'
  var item = '0x0F02'
  Orion.CharPrint('self', '0x0015', 'Potes explosion ' + (Orion.Count(item, cor)))
  if (Orion.Count('0x0F02', '0x0000') == 0) {
    Orion.Cast('Magic Arrow', 'self')
  }
  else
    Orion.Cast('Magic Arrow')
  Orion.WaitTargetType('0x0F02', '0x0000')
}
function Heal() {
  {
    Orion.UseType(0x0F82, 0x0026);
  }
}

function ref() {
  {
    Orion.UseType(0x0F82, 0x017F);
  }
}

function Mana() {
  {
    Orion.UseType(0x0F82, 0x0532);
  }
}

function Invis() {
  Orion.UseType(0x0F0E, 0x0001);
}

function Refresh() {
  {
    Orion.UseType(0x0F0E, 0x0022);
  }
}
function GCure() {
  Orion.UseType(0x0F0E, 0x008F);
}

//helper function for AttacktNextHuman() and TargetNextHuman()
function FindNearestHumanEnemy() {
  Orion.Ignore('self');
  var friends = Orion.GetFriendList();
  for (var i = 0; i < friends.length; i++) {
    Orion.Ignore(friends[i]);
  }

  var humans = Orion.FindType('0x0190|0x0191|0x025D|0x025E', '-1', ground, 'near|mobile', '18');
  if (!humans.length) {
    Orion.Print('-1', 'no humans found, resetting ignore list');
    Orion.IgnoreReset();
    return '';
  }
  return humans[0];
}

//This function will swap between players in range of 18 and attack them.
function AttacktNextHuman() {
  var serial = FindNearestHumanEnemy();
  if (!serial.length) return;
  CharPrintDelayed(serial, '05', 'ATTACKING');
  CharPrintDelayed('self', '0x0021', Orion.RequestName(serial));
  Orion.Say('.gc ATTACKING: ' + Orion.RequestName(serial));
  Orion.ClientLastAttack(serial);
  Orion.Attack(serial);
  Orion.Ignore(serial);

}
//This function will swap between players in range of 18 and target them.
function TargetNextHuman() {
  var serial = FindNearestHumanEnemy();
  if (!serial.length) return;
  CharPrintDelayed(serial, '30', 'TARGET');
  Orion.ClientLastTarget(serial);
  Orion.TargetObject(serial);
  Orion.Ignore(serial);

}

function CharPrintDelayed(serial, color, text) {
  var oldUse = Orion.OptionScaleSpeech();
  var oldDelay = Orion.OptionScaleSpeechDelay();

  Orion.OptionScaleSpeech(true);
  Orion.OptionScaleSpeechDelay(50);

  Orion.CharPrint(serial, color, text);
  Orion.Wait(50);

  Orion.OptionScaleSpeech(oldUse);
  Orion.OptionScaleSpeechDelay(oldDelay);
}

function passarPorCima1() {
  if (Player.Stam() < Player.MaxStam() && Player.Stam() >= 100) {
    Orion.MoveItem('0x40327BC6', 'backpack');
    Orion.Wait(500);
    Orion.MoveItem('0x40327BB1', 'backpack');
  }
  else {
    if (Player.Stam() < 100) {
      Orion.UseObject('0x40327BC6');
      Orion.Wait(500);
      Orion.UseObject('0x40327BB1');
      Orion.UseType('0x0F0E', '0x0021');
    }
  }
}

function Atravessar06() {
  if (Player.Stam() < Player.MaxStam() && Player.Stam() >= 100) {
    Orion.MoveItem('robeVIP', 'backpack');
    Orion.UseType('0x1711'); //bota newbie ou qualquer sand lia do tipo...
  }
  else {
    if (Player.Stam() < 100) {
      Orion.UseObject('robeVIP');
      Orion.UseObject('botaVIP');
      Orion.UseType('0x0F0E', ' 0x0021');
    }
  }
}

function FazerUltimo77() {
  while (true) {
    if (Orion.WaitForGump(1000)) {
      gump = Orion.GetGump('last');
      if ((gump !== null) && (!gump.Replayed())) {
        gump.Select(Orion.CreateGumpHook(5008));
        Orion.Wait(100);
      }
    }
  }
}

function TargetNext2() {
  for (var i = 0; i < 2; i++) {
    var mobileID = Orion.FindType("0x0190|0x0191|0x025D|0x025E", "-1", ground, "near|live|ignoreself|ignorefriends", 18, "gray|criminal|orange|red|blue|green");
    Orion.Cast('Magic Arrow', mobileID);
    Orion.ClientLastTarget(mobileID);
    if (mobileID.length) {
      Orion.ClearHighlightCharacters([priorityHighlight = false])
      Orion.ClientLastAttack(mobileID[0]);
      Orion.AddHighlightCharacter('lasttarget', 0x0AC6, [priorityHighlightList = false]);
      Orion.Ignore(mobileID[0]);
      Orion.Say('.gc Comendo o cu do: ' + Orion.RequestName(lasttarget, 500));
      return;
    }
    else if (i == 0) {
      Orion.IgnoreReset();
    }
  }

  Orion.Print("No enemies");
}

function castFSs() {
  if (Player.Poisoned()) {
    Orion.Cast('Cure', 'self');
    Orion.Wait(200);
    Orion.BandageSelf();
    break
  }
  var myMount2 = Orion.FindObject('lasttarget')
  if (myMount2.Poisoned()) {
    Orion.UseType('0x1F5F');
    Orion.WaitTargetObject('lasttarget')
    Orion.AddDisplayTimer(100, 3850, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
    Orion.Wait(200);
    Orion.BandageSelf();
  }
  else {
    Orion.Cast('Poison', 'lasttarget');
    Orion.AddDisplayTimer(100, 3750, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
    Orion.Wait(200);
    Orion.BandageSelf();
  }
}

function adaga() {
  if (Player.Poisoned()) {
    Orion.UseType('0x0F51')
    Orion.Attack('lasttarget');
    Orion.Wait(1850);
    Orion.Cast('Cure', 'self');
    Orion.Wait(300);
    Orion.BandageSelf();
  }
  else {
    Orion.UseType('0x0F51')
    Orion.Attack('lasttarget');
  }
}


function equipKALI() {
  Orion.Print('Selecione a SUA bag');
  Orion.AddObject('BAG') // ID (OBJECT) DA BAG PRA ARRUMAR
  Orion.Wait(3500);
  Orion.Exec('restockKALI_CONSUMIVEIS')
}



function restockKALI_CONSUMIVEIS() {
  Orion.UseObject('0x4016766C')
  Orion.Wait(300)
  var containerLOOT = '0x4016766C' // ID (OBJECT) ONDE PEGA OS ITENS

  Orion.Wait(600)
  var refresher = [
    ['0x097B', 3, '0x0000'], //COMIDA
    ['0x09D1', 5, '0x0482'], //UVA
    ['0x0F0E', 10, '0x0015'], //XPLO
    ['0x0F0E', 4, '0x0044'], //POISON
    ['0x1F5F', 25, '0x0000'], //FS
    ['0x0F3F', 40, '0x0000'], //Arrow...
    ['0x0F0E', 15, '0x00FF'], //Heal
    ['0x0F0E', 25, '0x0480'], //Mana
    ['0x0F0E', 3, '0x038A'], //G. STR
    ['0x0F0E', 10, '0x0021'], //Refresh
    ['0x0F0E', 10, '0x002C'], //Cure
    ['0x0F0E', 10, '0x01F7'], //Invis
    ['0x0F0E', 3, '0x07FD'], //shrink

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }

  Orion.Exec('restockKALI_BANDS');
}

function restockKALI_BANDS() {
  var containerLOOT = '0x4016766C' // ID (OBJECT) ONDE PEGA OS BANDS

  Orion.Wait(600)
  var refresher = [
    ['0x0E21', 150, '0x0000'], //BANDS

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('pegaplateKALI');
}

function pegaplateKALI() {
  Orion.UseObject('0x4009D424') // ID (OBJECT) ONDE PEGA A PLATE
  Orion.Wait(300)
  var containerLOOT = '0x4009D424' // ID (OBJECT) ONDE PEGA A PLATE

  Orion.Wait(600)
  var refresher = [

    ['0x1412', 1, '0x09B5'], //HELMET
    ['0x1413', 1, '0x09B5'], //GORGET
    ['0x1414', 1, '0x09B5'], //MÃO
    ['0x1410', 1, '0x09B5'], //BRAÇO
    ['0x1415', 1, '0x09B5'], //PEITO
    ['0x1411', 1, '0x09B5'], //PERNA     

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_RING');
}

function restockKALI_RING() {
  Orion.UseObject('0x400BAEC8') // ID (OBJECT) ONDE PEGA O RING
  Orion.Wait(300)
  var containerLOOT = '0x400BAEC8' // ID (OBJECT) ONDE PEGA O RING

  Orion.Wait(600)
  var refresher = [
    ['0x108A', 1, '0x09B7'], //RING STR   

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_BRACE');
}

function restockKALI_BRACE() {
  Orion.UseObject('0x4018158F') // ID (OBJECT) ONDE PEGA O BRACE
  Orion.Wait(300)
  var containerLOOT = '0x4018158F' // ID (OBJECT) ONDE PEGA O BRACE

  Orion.Wait(600)
  var refresher = [
    ['0x1086', 1, '0x0993'], //BRACE MANA

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_SASH');
}

function restockKALI_SASH() {
  Orion.UseObject('0x4015AA0A') // ID (OBJECT) ONDE PEGA O SASH
  Orion.Wait(300)
  var containerLOOT = '0x4015AA0A' // ID (OBJECT) ONDE PEGA O SASH

  Orion.Wait(600)
  var refresher = [
    ['0x1541', 1, '0x0000'], //SASH

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_ADAGA');
}

function restockKALI_ADAGA() {
  Orion.UseObject('0x4009D422') // ID (OBJECT) ONDE PEGA A ADAGA
  Orion.Wait(300)
  var containerLOOT = '0x4009D422' // ID (OBJECT) ONDE PEGA A ADAGA

  Orion.Wait(600)
  var refresher = [
    ['0x0F51', 1, '0x0000'], //ADAGA

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_RUNA');
}

function restockKALI_RUNA() {
  Orion.UseObject('0x401EAA72') // ID (OBJECT) ONDE PEGA A RUNA
  Orion.Wait(300)
  var containerLOOT = '0x401EAA72' // ID (OBJECT) ONDE PEGA A RUNA

  Orion.Wait(600)
  var refresher = [
    ['0x1F14', 1, '0x0000'], //RUNA

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('restockKALI_INSTRUMENTO');
}

function restockKALI_INSTRUMENTO() {
  Orion.UseObject('0x4006554C') // ID (OBJECT) ONDE PEGA O INSTRUMENTO
  Orion.Wait(300)
  var containerLOOT = '0x4006554C' // ID (OBJECT) ONDE PEGA O INSTRUMENTO

  Orion.Wait(600)
  var refresher = [
    ['0x0EB3', 1, '0x0000'], //INSTRUMENTO

  ];

  var countrows = refresher.length;
  for (i = 0; i < countrows; i++) {
    // Verify if more is needed
    var bagitem = Orion.Count(refresher[i][0], refresher[i][2]);
    if (bagitem < refresher[i][1]) {
      itemfound = Orion.FindType(refresher[i][0], refresher[i][2], containerLOOT);
      if (itemfound.length) {
        Orion.MoveItem(itemfound[0], refresher[i][1] - bagitem, 'bag'); // ID (OBJECT) ONDE COLOCA OS ITENS
        Orion.Wait(600);
      }
    }
  }
  Orion.Exec('markrune');
}

function markrune() {
  Orion.Cast('Mark')
  Orion.WaitTargetType('0x1F14')
  Orion.Wait(300);
  Orion.Exec('equipaKALI');
}

function equipaKALI() {
  Orion.UseType('0x1412') //HELMET
  Orion.Wait(200);
  Orion.UseType('0x1413') //GORGET
  Orion.Wait(200);
  Orion.UseType('0x1414') //MÃO
  Orion.Wait(200);
  Orion.UseType('0x1410') //BRAÇO
  Orion.Wait(200);
  Orion.UseType('0x1415') //PEITO
  Orion.Wait(200);
  Orion.UseType('0x1411') //PERNA     
  Orion.Wait(200);
  Orion.UseType('0x108A') //RING 
  Orion.Wait(200);
  Orion.UseType('0x1086') //BRACE
  Orion.Wait(200);
  Orion.UseType('0x1541') //SASH
  Orion.Wait(200);

  Orion.Exec('arrumarKALI');
}






function arrumarKALI() {

  const potionList =
    [
      { type: '0x0F0E', color: '0x0480' },	//mana
      { type: '0x0F0E', color: '0x00FF' },	//heal
      { type: '0x0F0E', color: '0x0021' },	//refresh
      { type: '0x0F0E', color: '0x002C' },	//cure 
      { type: '0x0F0E', color: '0x01F7' },	//invis
      { type: '0x0F0E', color: '0x038A' },	//greater str
      { type: '0x0F0E', color: '0x0044' },	//poison
      { type: '0x0F0E', color: '0x0015' },	//l. explo
      { type: '0x0F0E', color: '0x07FD' },	//shrink

    ];

  const reagList =
    [
      { type: '0x1F5F', color: '0x0000' },	//fs
      { type: '0x0E21', color: '0x0000' },	//band
      { type: '0x09D1', color: '0x0482' },	//uva


    ];

  //posições das potions (variáveis)
  var x1 = 28;
  var y1 = 30;
  var x2 = 28;
  var y2 = 58;

  const pegaElarga = function (x, y, obj) {
    if (obj) {
      if (obj.Count() > 0 && (obj.X() != x || obj.Y() != y)) {
        Orion.DragItem(obj.Serial());
        Orion.DropDraggedItem('BAG', x, y, 0); //ID (OBJECT) DA BAG PRA ARRUMAR
        Orion.Wait('moveitemdelay');
      }
    }
  };

  potionList.forEach(function (el, index) {

    obj = Orion.FindObject(Orion.FindType(el.type, el.color, 'BAG')[0]); //ID (OBJECT) DA BAG PRA ARRUMAR
    pegaElarga(x1, y1, obj);
    x1 = x1 + 9.5;

  });

  reagList.forEach(function (el, index) {

    obj = Orion.FindObject(Orion.FindType(el.type, el.color, 'BAG')[0]); //ID (OBJECT) DA BAG PRA ARRUMAR
    pegaElarga(x2, y2, obj);
    x2 = x2 + 20;

  });


  Orion.CharPrint(self, 0x0021, 'rdy2go. . .');

}


function PreParalyze() {
  var enemy = Orion.FindObject('lasttarget');
  Orion.ClearJournal('An Ex Por');
  while (true) {
    if (Orion.InJournal('An Ex Por')) {
      break;
      Orion.Wait(25);
    }
    else {
      Orion.WaitTargetObject('lasttarget')
      Orion.Cast("Paralyze");
      Orion.AddDisplayTimer(100, 3550, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
      Orion.Wait(15);
    }
    Orion.WaitJournal('An Ex Por', Orion.Now(), Orion.Now() + 280);
  }
}



function PrePoison() {
  var enemy = Orion.FindObject('lasttarget');
  Orion.ClearJournal('In Nox');
  while (true) {
    if (Orion.InJournal('In Nox')) {
      break;
      Orion.Wait(25);
    }
    else {
      Orion.WaitTargetObject('lasttarget')
      Orion.Cast("Poison");
      Orion.AddDisplayTimer(100, 3750, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
      Orion.Wait(15);
    }
    Orion.WaitJournal('In Nox', Orion.Now(), Orion.Now() + 280);
  }
}


function PreFS() {
  var enemy = Orion.FindObject('lasttarget');
  Orion.ClearJournal('Kal Vas Flam');
  while (true) {
    if (Orion.InJournal('Kal Vas Flam')) {
      break;
      Orion.Wait(25);
    }
    else {
      Orion.UseType('0x1F5F');
      Orion.WaitTargetObject('lasttarget');
      Orion.AddDisplayTimer(100, 3800, 'UnderChar', 'Circle|Bar', 'DELAY', 0, 0, '0x00FF', 0, 'white');
      Orion.Wait(15);
    }
    Orion.WaitJournal('Kal Vas Flam', Orion.Now(), Orion.Now() + 280);
  }
}

function ageArrowExplo() {
  var cor = '0x0012';
  var item = '0x0E25';
  Orion.CharPrint('self', cor, 'Potes explosion: ' + (Orion.Count(item, cor)));

  if (Orion.Count(item, cor) == 0) {
    Orion.Cast('Magic Arrow', 'self')
  } else {
    Orion.Cast('Magic Arrow');
    Orion.WaitTargetType(item, cor);
  }
}
