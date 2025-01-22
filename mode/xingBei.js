import { lib, game, ui, get, ai, _status } from "../noname.js";
export const type = "mode";
/**
 * @type { () => importModeConfig }
 */
export default () => {
	return {
		name:'xingBei',
		start:function(){
			"step 0"
			_status.mode=get.config('versus_mode');
			if(_status.connectMode) _status.mode=lib.configOL.versus_mode;

			"step 1"
			var playback=localStorage.getItem(lib.configprefix+'playback');
			if(playback){
				ui.create.me();
				ui.arena.style.display='none';
				ui.system.style.display='none';
				_status.playback=playback;
				localStorage.removeItem(lib.configprefix+'playback');
				var store=lib.db.transaction(['video'],'readwrite').objectStore('video');
				store.get(parseInt(playback)).onsuccess=function(e){
					if(e.target.result){
						ui.shiQiInfo=ui.create.div('.touchinfo.bottom-right',ui.window);
						ui.updateShiQiInfo();
						game.playVideoContent(e.target.result.video);
					}
					else{
						alert('播放失败：找不到录像');
						game.reload();
					}
				}
				event.finish();
				return;
			}
			if(_status.connectMode){
				game.waitForPlayer(function(){//联机人数确定
					switch(lib.configOL.versus_mode){
						case '2v2':lib.configOL.number=4;break;
						case '3v3':lib.configOL.number=6;break;
						case '4v4':lib.configOL.number=8;break;
					}
				});
			}
			else if(_status.mode=='two'){
				game.prepareArena(4);
			}else if(_status.mode=='three'){
				game.prepareArena(6);
			}else if(_status.mode=='four'){
				game.prepareArena(8);
			}
			// game.delay();
			"step 2"
			if(_status.connectMode){
				game.randomMapOL();
			}
			else if(_status.mode=='two'||_status.mode=='three'||_status.mode=='four'){
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
				}
				game.chooseCharacter();
			}
			game.broadcastAll(function(){
                ui.shiQiInfo=ui.create.div('.touchinfo.bottom-right',ui.window);
                ui.updateShiQiInfo();
            });
			"step 3"
			if(_status.connectMode){
				_status.mode=lib.configOL.versus_mode;
				game.zhanJiList={hongShiQi:game.hongShiQi,lanShiQi:game.lanShiQi,hongZhanJi:game.hongZhanJi,lanZhanJi:game.lanZhanJi,hongXingBei:game.hongXingBei,lanXingBei:game.lanXingBei};
                _status.onreconnect=[function(zhanJiList){
                    var players=game.players;
                    for(var i=0;i<players.length;i++){
                        if(players[i].side==true){
                            players[i].node.identity.firstChild.innerHTML='红';
                        }
                        else{
                            players[i].node.identity.firstChild.innerHTML='蓝';
                        }
                    }
					game.hongShiQi=zhanJiList['hongShiQi'];
					game.lanShiQi=zhanJiList['lanShiQi'];
					game.hongZhanJi=zhanJiList['hongZhanJi'];
					game.lanZhanJi=zhanJiList['lanZhanJi'];
					game.hongXingBei=zhanJiList['hongXingBei'];
					game.lanXingBei=zhanJiList['lanXingBei'];
                    ui.shiQiInfo=ui.create.div('.touchinfo.bottom-right',ui.window);
                    ui.updateShiQiInfo();
                },game.zhanJiList];
			};
			var players=get.players(lib.sort.position);
			var info=[];
			for(var i=0;i<players.length;i++){
				info.push({
					name:players[i].name1,
					name2:players[i].name2,
					identity:players[i].node.identity.firstChild.innerHTML,
					color:players[i].node.identity.dataset.color
				});
			}
			_status.videoInited=true;
			if(_status.connectMode||_status.mode=='two'||_status.mode=='three'||_status.mode=='four'){
				info.push(false);
			}
			else{
				info.push(lib.storage.single_control&&game.players.length>=4);
			}
			game.addVideo('init',null,info);
			event.trigger('gameStart');
			game.changeShiQi(game.shiQiMax,true,false);
			game.changeShiQi(game.shiQiMax,false,false);
            'step 4'
			if(_status.connectMode){
                _status.first_less=true;
                
                var firstChoose=(_status.firstAct||game.players.randomGet());
                if(firstChoose.next.side==firstChoose.side){
                    firstChoose=firstChoose.next;
                }
                game.gameDraw(firstChoose,function(player){
                    return 4;
                });
                game.phaseLoop(firstChoose);

				event.finish();
			}
			else{
                _status.first_less=true;
                _status.first_less_forced=true;
                var firstChoose=_status.firstAct;
                game.gameDraw(firstChoose);
                game.phaseLoop(firstChoose);
			}
		},
		game:{
			checkResult:function(me){
				if(game.players[0].side==true){
					if(game.hongShiQi<=0||game.lanXingBei>=game.xingBeiMax){
						game.over(false);
					}else if(game.lanShiQi<=0||game.hongXingBei>=game.xingBeiMax){
						game.over(true);
					}

				}
				else if(game.players[0].side==false){
					if(game.lanShiQi<=0||game.hongXingBei>=game.xingBeiMax){
						game.over(false);
					}else if(game.hongShiQi<=0||game.lanXingBei>=game.xingBeiMax){
						game.over(true);
					}
				}
			},

			checkOnlineResult:function(player){
				return game.players[0].side==player.side;
			},
			getRoomInfo:function(uiintro){
				if(lib.configOL.versus_mode=='4v4'){
					uiintro.add('<div class="text chat">队伍顺序：随机');
				}else{
					switch(lib.configOL.choose_mode){
						case '多选1':uiintro.add('<div class="text chat">选角模式：多选1');break;
						case 'CM02':uiintro.add('<div class="text chat">选角模式：CM02');break;
						case 'BP01':uiintro.add('<div class="text chat">选角模式：BP01');break;
						case 'BP02':uiintro.add('<div class="text chat">选角模式：BP02');break;
					}
					if(lib.configOL.choose_mode!='CM02'){
						switch(lib.configOL.team_sequence){
							case 'random':uiintro.add('<div class="text chat">队伍顺序：随机');break;
							case 'near':uiintro.add('<div class="text chat">队伍顺序：临近');break;
							case 'crossed':uiintro.add('<div class="text chat">队伍顺序：交叉');break;
							case 'CM':uiintro.add('<div class="text chat">队伍顺序：CM');break;
						}
						if(lib.configOL.choose_mode=='BP02'||lib.configOL.choose_mode=='BP01'){
							var last=uiintro.add('<div class="text chat">可选角色数：'+lib.configOL.BPchoose_number);
						}else{
							var last=uiintro.add('<div class="text chat">侯选角色数：'+lib.configOL.choose_number);
						}
					}
				}
				switch(lib.configOL.viewHandcard){
					case true:uiintro.add('<div class="text chat">可见队友手牌：是');break;
					case false:uiintro.add('<div class="text chat">可见队友手牌：否');break;
				}
				switch(lib.configOL.chooseSide){
					case true:uiintro.add('<div class="text chat">手动选择选队：是');break;
					case false:uiintro.add('<div class="text chat">手动选择选队：否');break;
				}
				var last=uiintro.add('<div class="text chat">出牌时限：'+lib.configOL.choose_timeout+'秒');
				if(lib.configOL.banned.length){
					last=uiintro.add('<div class="text chat">禁用角色：'+get.translation(lib.configOL.banned));
				}
				/*
				if(lib.configOL.bannedcards.length){
					last=uiintro.add('<div class="text chat">禁用卡牌：'+get.translation(lib.configOL.bannedcards));
				}*/
				last=uiintro.add('<div class="text chat">士气初始值：'+get.translation(lib.configOL.shiQiMax||game.shiQiMax));
				last=uiintro.add('<div class="text chat">战绩区上限：'+get.translation(lib.configOL.zhanJiMax||game.zhanJiMax));
				last=uiintro.add('<div class="text chat">星杯上限：'+get.translation(lib.configOL.xingBeiMax||game.xingBeiMax));

				last.style.paddingBottom='8px';
			},
			getVideoName:function(){
				var str=get.translation(game.me.name1);
				var str2;
 				switch(_status.mode){
 					case 'two':str2='2v2';break;
 					case 'three':str2='3v3';break;
					case 'four':str2='4v4';break;
					case '2v2':str2='2v2';break;
					case '3v3':str2='3v3';break;
					case '4v4':str2='4v4';break;
				}
				if(game.me.side==true) str2+='（红方）';
				else str2+='（蓝方）';

				return [str,str2];
			},
			
			
			chooseCharacter:function(){
				switch(get.config('choose_mode')){
					case '多选1':game.chooseCharacterDuoXuanYi();break;
					case 'CM02':game.chooseCharacterCM02();break;
				}
			},
			chooseCharacterDuoXuanYi:function(){
				var next=game.createEvent('chooseCharacter');
				next.showConfig=true;
				next.setContent(function(){
					'step 0'
					var number=game.players.length;
					var choose_number=get.config('choose_number');
					ui.arena.classList.add('choose-character');
					
					var list=game.teamSequenceList();
					var ref=game.players.randomGet();
					for(var i=0;i<number;i++){
						ref.side=list[i];
						ref=ref.next;
					}
					
					var firstChoose=ref;
					_status.firstAct=firstChoose;
					for(var i=0;i<number;i++){
						firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
						firstChoose=firstChoose.next;
					}

					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==true){
							game.players[i].node.identity.firstChild.innerHTML='红';
						}
						else if(game.players[i].side==false){
							game.players[i].node.identity.firstChild.innerHTML='蓝';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}
					//22选将框分配
					var list=get.characters();

					event.list=list;
					

					var addSetting=function(dialog){
						dialog.add('选择座位').classList.add('add-setting');
						var seats=document.createElement('table');
						seats.classList.add('add-setting');
						seats.style.margin='0';
						seats.style.width='100%';
						seats.style.position='relative';
						for(var i=1;i<=game.players.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML=get.cnNumber(i,true);
							td.link=i-1;
							seats.appendChild(td);
							if(get.distance(_status.firstAct,game.me,'absolute')===i-1){
								td.classList.add('bluebg');
							}
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								if(get.distance(_status.firstAct,game.me,'absolute')==this.link) return;
								var current=this.parentNode.querySelector('.bluebg');
								if(current){
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								_status.firstAct=game.me;
								var sideList=[]
								for(var i=0;i<game.players.length;i++){
									sideList.push(game.players[i].side);
								}
								for(var i=0;i<this.link;i++){
									_status.firstAct=_status.firstAct.previous;
								}
								var firstChoose=_status.firstAct;
								var start=firstChoose;
								for(var i=0;i<game.players.length;i++){
									start.side=sideList.shift();
									start=start.next;
								}
								
								/*
								var firstChoose=_status.firstAct;
								firstChoose.next.side=!firstChoose.side;
								firstChoose.next.next.side=!firstChoose.side;
								firstChoose.previous.side=firstChoose.side;
								*/
								for(var i=0;i<game.players.length;i++){
									if(game.players[i].side==true){
										game.players[i].node.identity.firstChild.innerHTML='红';
									}
									else if(game.players[i].side==false){
										game.players[i].node.identity.firstChild.innerHTML='蓝';
									}
									game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
								}
								for(var i=0;i<number;i++){
									firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
									firstChoose=firstChoose.next;
								}
							});
						}
						dialog.content.appendChild(seats);
						if(game.me==game.zhu){
							seats.previousSibling.style.display='none';
							seats.style.display='none';
						}

						dialog.add(ui.create.div('.placeholder.add-setting'));
						dialog.add(ui.create.div('.placeholder.add-setting'));
						if(get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
					};
					var removeSetting=function(){
						var dialog=_status.event.dialog;
						if(dialog){
							dialog.style.height='';
							delete dialog._scrollset;
							var list=Array.from(dialog.querySelectorAll('.add-setting'));
							while(list.length){
								list.shift().remove();
							}
							ui.update();
						}
					};
					event.addSetting=addSetting;
					event.removeSetting=removeSetting;

					var characterChoice=list.randomGets(choose_number);

					var basenum=1;
					var basestr='选择角色';
					if(get.config('phaseswap')){
						basenum =number/2;
						basestr='选择你和队友的角色';
						event.phaseswap=true;
					}

					var dialog=ui.create.dialog(basestr,[characterChoice,'character']);
					game.me.chooseButton(true,dialog,basenum).set('onfree',true);
					if(!_status.brawl||!_status.brawl.noAddSetting){
						if(get.config('change_identity')){
							addSetting(dialog);
						}
					}

					ui.create.cheat=function(){
						_status.createControl=ui.cheat2;
						ui.cheat=ui.create.control('更换',function(){
							if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
								return;
							}
							var buttons=ui.create.div('.buttons');
							var node=_status.event.dialog.buttons[0].parentNode;
							_status.event.dialog.buttons=ui.create.buttons(list.randomGets(choose_number),'character',buttons);
							_status.event.dialog.content.insertBefore(buttons,node);
							buttons.addTempClass('start');
							node.remove();
							game.uncheck();
							game.check();
						});
						delete _status.createControl;
					};
					if(lib.onfree){
						lib.onfree.push(function(){
							event.dialogxx=ui.create.characterDialog('heightset');
							if(ui.cheat2){
								ui.cheat2.addTempClass('controlpressdownx',500);
								ui.cheat2.classList.remove('disabled');
							}
						});
					}
					else{
						event.dialogxx=ui.create.characterDialog('heightset');
					}
					ui.create.cheat2=function(){
						ui.cheat2=ui.create.control('自由选角',function(){
							if(this.dialog==_status.event.dialog){
								this.dialog.close();
								_status.event.dialog=this.backup;
								this.backup.open();
								delete this.backup;
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.addTempClass('controlpressdownx',500);
									ui.cheat.classList.remove('disabled');
								}
							}
							else{
								this.backup=_status.event.dialog;
								_status.event.dialog.close();
								_status.event.dialog=_status.event.getParent().dialogxx;
								this.dialog=_status.event.dialog;
								this.dialog.open();
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.classList.add('disabled');
								}
							}
						});
						ui.cheat2.classList.add('disabled');
					}
					if(!_status.brawl||!_status.brawl.chooseCharacterFixed){
						if(!ui.cheat&&get.config('change_choice')){
							ui.create.cheat();
						}
						if(!ui.cheat2&&get.config('free_choose')){
							ui.create.cheat2();
						}
					}
					'step 1'
					if(ui.cheat){
						ui.cheat.close();
						delete ui.cheat;
					}
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					}
					for(var i=0;i<result.links.length;i++){
						game.addRecentCharacter(result.links[i]);
					}
					game.me.init(result.links[0]);
					if(event.phaseswap){
						for(var i=1;i<result.links.length;i++){
							event.list.remove(result.links[i]);
						}
					}
					event.list.remove(game.me.name1);

					let count=0;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=game.me){
							if(_status.brawl&&_status.brawl.chooseCharacter){
								var list=_status.brawl.chooseCharacter(event.list,game.players[i]);
								game.players[i].init(list.randomGet());
								event.list.remove(game.players[i].name1);
							}
							else{
								if(event.phaseswap&&game.players[i].side==game.me.side){
									count++;
									game.players[i].init(result.links[count]);
								}
								else{
									var name=event.list.randomRemove();
									if(lib.characterReplace[name]&&lib.characterReplace[name].length) name=lib.characterReplace[name].randomGet();
									game.players[i].init(name);
								}
							}
						}
					}

					'step 3'
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.moDan=false;
						game.players[i].storage.zhongDu=[];
					}

					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);

					var viewHandcard=get.config('viewHandcard');
					if(viewHandcard==true){
						game.addGlobalSkill('viewHandcard');
					}

					if(get.config('phaseswap')){
						game.addGlobalSkill('autoswap');
					}
					
				});
			},

			chooseCharacterOL:function(){
				if(lib.configOL.versus_mode=='4v4'){
					game.chooseCharacterOLDuoXuanYi();
				}else{
					switch(lib.configOL.choose_mode){
						case '多选1':game.chooseCharacterOLDuoXuanYi();break;
						case 'CM02':game.chooseCharacterOLCM02();break;
						case 'BP01':game.chooseCharacterOLBP01();break;
						case 'BP02':game.chooseCharacterOLBP02();break;
					}	
				}
			},
			
			chooseSide:function(){
				var next=game.createEvent('chooseSide');
				next.setContent(function(){
					'step 0'
					var sides=['红方','蓝方'];
					var list=game.players.map(player=>[player,['选择阵营',[sides,'tdnodes']],true]);
					game.me.chooseButtonOL(list,function(){},function(){return 1+Math.random()}).set('switchToAuto',function(){
						_status.event.result='ai';
					}).set('processAI',function(){
						var buttons=_status.event.dialog.buttons;
						return {
							bool:true,
							links:[buttons.randomGet().link],
						}
					});
					'step 1'
					var red=0;
					var blue=0;
					var number=lib.configOL.number;
					for (var i in result) {//优先计算真人的选择
						//if(result[i].confirm!='ok') continue;
						if(!lib.playerOL[i].isOnline()) continue;
						if (result[i].links[0] == "红方") {
							lib.playerOL[i].side=true;
						}else{
							lib.playerOL[i].side=false;
						}

						if(lib.playerOL[i].side==true) red++;
						else blue++;
						if(red>number/2){
							lib.playerOL[i].side=false;
							red--;
						}
						else if(blue>number/2){
							lib.playerOL[i].side=true;
							blue--;
						}
					}

					for (var i in result) {//计算ai的选择
						//if(result[i].confirm=='ok') continue;
						if(lib.playerOL[i].isOnline()) continue;
						if (result[i].links[0] == "红方") {
							lib.playerOL[i].side=true;
						}else{
							lib.playerOL[i].side=false;
						}

						if(lib.playerOL[i].side==true) red++;
						else blue++;
						if(red>number/2){
							lib.playerOL[i].side=false;
							red--;
						}
						else if(blue>number/2){
							lib.playerOL[i].side=true;
							blue--;
						}
					}
				});
			},

			moveSeat:function(list,ref){
				var players=game.players;
				let trueToSwap = [];
				let falseToSwap = [];

				for (let i = 0; i < players.length; i++) {
					if (ref.side !== list[i]) {
						if (list[i] === true && ref.side === false) {
							trueToSwap.push(ref);
						} else if (list[i] === false && ref.side === true) {
							falseToSwap.push(ref);
						}
					}
					ref=ref.next;
				}
				while (trueToSwap.length > 0 && falseToSwap.length > 0) {
					const truePlayer = trueToSwap.pop();
					const falsePlayer = falseToSwap.pop();
					game.broadcastAll(function(truePlayer,falsePlayer){
						game.swapSeat(truePlayer,falsePlayer,false,false,true);
					},truePlayer,falsePlayer)
				}
			},

			getFirstRed:function(){
				var ref=game.players.randomGet();;
				while (ref.side!=true) {//确保红队第一个
					ref=ref.next;
				}
				return ref
			},

			teamSequenceList:function(){
				var number,team_sequence,mode;
				if(_status.connectMode){
					number=lib.configOL.number;
					team_sequence=lib.configOL.team_sequence;
					mode=lib.configOL.versus_mode;
					if(mode=='CM02'){
						team_sequence='CM';
					}
				}else{
					number=game.players.length;
					team_sequence=get.config('team_sequence');
				}
				
				var list=[];
				if(number==4){
					if(team_sequence=='CM'){
						list=[true,false,false,true];
					}else if(team_sequence=='near'){
						list=[true,true,false,false];
					}else if(team_sequence=='crossed'){
						list=[true,false,true,false];
					}else{
						list=[true,false,false,true];
						list.randomSort();
					}
				}else if(number==6){
					if(team_sequence=='CM'){
						list=[true,false,false,true,true,false];
					}else if(team_sequence=='near'){
						list=[true,true,true,false,false,false];
					}else if(team_sequence=='crossed'){
						list=[true,false,true,false,true,false];
					}else{
						list=[true,true,true,false,false,false];
						list.randomSort();
					}
				}else if(number==8){
					list=[true,true,true,false,false,false,true,false];
					list.randomSort();
				}
				return list;
			},
			
			chooseCharacterOLDuoXuanYi:function(){
				var next=game.createEvent('chooseCharacterOL');
				next.setContent(function(){
					'step 0'
					//获取顺位
					var chooseSide=lib.configOL.chooseSide;

					event.list=game.teamSequenceList();

					if(chooseSide){//自由选择队伍
						game.chooseSide();
					}
					'step 1'
					var team_sequence=lib.configOL.team_sequence;
					var chooseSide=lib.configOL.chooseSide;
					var number=lib.configOL.number;
					if(chooseSide){
						var ref=game.getFirstRed();
						if(team_sequence!='random'&&number!=8) game.moveSeat(event.list,ref);
					}else{
						var ref=game.players.randomGet();
						for(var i=0;i<number;i++){
							ref.side=event.list[i];
							ref=ref.next;
						}
					}
					
					var choose_number=parseInt(lib.configOL.choose_number);
					
					var firstChoose=ref;
					_status.firstAct=firstChoose;
					for(var i=0;i<number;i++){
						firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
						firstChoose=firstChoose.next;
					}

					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==true){
							game.players[i].node.identity.firstChild.innerHTML='红';
						}
						else if(game.players[i].side==false){
							game.players[i].node.identity.firstChild.innerHTML='蓝';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}

					
					var map={};
					for(var i=0;i<number;i++){
						map[game.players[i].playerid]=[game.players[i].side,game.players[i].node.identity.firstChild.innerHTML,game.players[i].node.name.innerHTML];
					}

					var func=function(map){
						for(var i in map){
							var player=lib.playerOL[i];
							if(player){
								player.side=map[i][0];
								player.node.identity.firstChild.innerHTML=map[i][1];
								player.node.name.innerHTML=map[i][2];
								player.node.identity.dataset.color=player.side+'zhu';
							}
						}
						ui.arena.classList.add('choose-character');
					}


					game.broadcastAll(func,map);


					
					
					//22联机分配角色
					var list=get.charactersOL();
					list=get.characterGets(list);
					var choose={};
					event.list=list;

					//推荐队友选将
					//给所有人生成对话框
					for(var i=0;i<game.players.length;i++){
						choose[game.players[i].playerid]=list.randomRemove(choose_number);
					}
					//每名玩家的可选角色
					game._characterChoice=choose;
					event._choiceMap={};
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(id,choice){
						game._characterChoice=choice;
						game._characterDialogID=id;
						var dialog=ui.create.dialog('请选择角色');
						dialog.videoId=id;
						var players;
						var player=game.me;
						for(var i in choice){
							var current=lib.playerOL[i];
							if(current==player) players=choice[i];
						}
						//dialog.addText('你的选将框');
						var buttons=ui.create.div('.buttons',dialog.content);
						dialog.players=ui.create.buttons(players,'character',buttons)
						dialog.buttons=dialog.buttons.concat(dialog.players);
					},event.videoId,choose);
					
					//发送选择事件
					var send=function(){
						var next=game.me.chooseButton([1,2],true);
						next.set('dialog',game._characterDialogID);
						next.set('callback',function(player,result){
							player.init(result.links[0],null,null,false);
							var button=game._playerChoice;
							button.classList.remove('glow2');
							button.classList.add('selected');
							delete game._playerChoice;
						});
						//托管选择
						next.set('ai',function(button){
							if(ui.selected.buttons.length) return 0;
							var dialog=get.idDialog(game._characterDialogID);
							//if(dialog.friends&&dialog.friends.includes(button)) return 0;
							//if(dialog.classList.includes('glow2')) return 1+Math.random();
							return 0.5+Math.random();
						});
						//修改点击按钮后的反应
						next.set('custom',{replace:{
							button:function(button){
								var dialog=get.idDialog(game._characterDialogID);
								var origin=button._link,choice=button.link;
								//选择按钮时自动取消选择上一个按钮
								if(dialog.players.includes(button)){
									if(!button.classList.contains('selected')){
										button.classList.add('selected');
										ui.selected.buttons.add(button);
										game._playerChoice=button;
										for(var other of dialog.players){
											if(other!=button&&other.classList.contains('selected')){
												other.classList.remove('selected');
												ui.selected.buttons.remove(other);
											}
										}
									}
									game.check();
								}
							}
						},add:{}});
						if(game.online) game.resume();
					}

					//确认选将后的回传函数
					event.confirm=function(player,choice){
						if(!player.name1) player.init(choice,null,null,false);
						if(game._characterDialogID==undefined) return;
						var dialog=get.idDialog(game._characterDialogID);
						if(!dialog) return;
					}
					//处理result
					var sendback=function(result,player){
						var type=typeof result;
						if(result&&type=='object'){
							var choice=result.links[0];
							event._choiceMap[player.playerid]=choice;
						}
					}
					event.sendback=sendback;
					
					//发送
					event.ai_targets=[];
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].isOnline()){
							event.withol=true;
							game.players[i].send(send);
							game.players[i].wait(sendback);
						}
						else if(game.players[i]==game.me){
							event.withme=true;
							send();
							game.me.wait(sendback);
						}
						else{
							event.ai_targets.push(game.players[i]);
							game.players[i].showTimer();
						}
					}
					//模拟AI思考后选择
					
					if(event.ai_targets.length){
						event.ai_targets.randomSort();
						setTimeout(function(){
							event.interval=setInterval(function(){
								var target=event.ai_targets.shift();
								var list=game._characterChoice[target.playerid];
								var choice;
								//AI必选玩家推荐角色
								if(target._aiChoice&&list.includes(target._aiChoice)) choice=target._aiChoice;
								else choice=list.randomGet();
								if(lib.characterReplace[choice]) choice=lib.characterReplace[choice].randomGet();
								event.sendback({
									result:true,
									links:[choice],
								},target);
								target.hideTimer();
								if(!event.ai_targets.length){
									clearInterval(event.interval);
									if(event.withai) game.resume();
								}
							},1000);
						},6000)
					}
					
					'step 2'
					if(event.withme){
						game.me.unwait(result);
					}
					'step 3'
					if(event.withol&&!event.resultOL){
						game.pause();
					}
					'step 4'
					if(event.ai_targets.length>0){
						event.withai=true;
						game.pause();
					}
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.moDan=false;
						game.players[i].storage.zhongDu=[];
					}

					

					
					'step 5'
					game.broadcastAll(function(id){
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.close();
							clearInterval(dialog.delay);
						}
					},event.videoId);
					var result=event._choiceMap;
					for(var i in lib.playerOL){
						if(!lib.character[result[i]]){
							result[i]=game._characterChoice[i].randomGet();
						}
						if(!lib.playerOL[i].name1){
							lib.playerOL[i].init(result[i]);
						}
						lib.playerOL[i].update();
					}
					game.broadcast(function(result){
						for(var i in result){
							if(!lib.playerOL[i].name1){
								lib.playerOL[i].init(result[i]);
								lib.playerOL[i].update();
							}
						}
						setTimeout(function(){
							ui.arena.classList.remove('choose-character');
						},500)
					},result);
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
					
					var viewHandcard=lib.configOL.viewHandcard;
					if(viewHandcard==true){
						game.addGlobalSkill('viewHandcard');
					}
					

				});
			},

			chooseCharacterOLCM02:function(){
				var next=game.createEvent('chooseCharacterOL');
				next.setContent(function(){
					'step 0'
					//console.log('chooseCharacterOLCM02');
					//var ref=game.players[0];
					event.number=lib.configOL.number;
					event.choose_number=18;

					event.list=game.teamSequenceList();

					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){
						game.chooseSide();
					}
					'step 1'
					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){
						var ref=game.getFirstRed();
						game.moveSeat(event.list,ref);
					}else{
						var ref=game.players.randomGet();
						console.log(event.list);
						for(var i=0;i<event.number;i++){
							ref.side=event.list[i];
							ref=ref.next;
						}
					}
					
					if(event.number==4){
						event.red_list=[ref,ref.previous];
						event.blue_list=[ref.next,ref.next.next];
						var R1=ref;
						var R2=ref.next.next.next;
						var B1=ref.next;
						var B2=ref.next.next;
						event.choose_list=[R1,B1,B2,R2];
					}else{
						event.red_list=[ref,ref.next.next.next,ref.next.next.next.next];
						event.blue_list=[ref.next,ref.next.next,ref.previous];
						var R1=ref;
						var R2=ref.next.next.next;
						var R3=ref.next.next.next.next;
						var B1=ref.next;
						var B2=ref.next.next;
						var B3=ref.previous;
						event.choose_list=[R1,B1,R2,B2,B3,R3];
					}
					

					var firstChoose=ref;

					_status.firstAct=firstChoose;
					for(var i=0;i<event.number;i++){
						firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
						firstChoose=firstChoose.next;
					}
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==true){
							game.players[i].node.identity.firstChild.innerHTML='红';
						}
						else if(game.players[i].side==false){
							game.players[i].node.identity.firstChild.innerHTML='蓝';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}

					
					var map={};
					for(var i=0;i<event.number;i++){
						map[game.players[i].playerid]=[game.players[i].side,game.players[i].node.identity.firstChild.innerHTML,game.players[i].node.name.innerHTML];
					}

					var func=function(map){
						for(var i in map){
							var player=lib.playerOL[i];
							if(player){
								player.side=map[i][0];
								player.node.identity.firstChild.innerHTML=map[i][1];
								player.node.name.innerHTML=map[i][2];
								player.node.identity.dataset.color=player.side+'zhu';
							}
						}
					}


					game.broadcastAll(func,map);


					'step 2'
					if(event.number==4){
						event.red_vote=[0,0];
						event.blue_vote=[0,0];
					}else{
						event.red_vote=[0,0,0];
						event.blue_vote=[0,0,0];
					}

					
					var list=game.players.map(function(player){
						let dialog;
						if(player.side==true){
							if(event.number==4) dialog=["一号位", "四号位"];
							else dialog=["一号位", "四号位", "五号位"];
						}else{
							if(event.number==4) dialog=["二号位", "三号位"];
							else dialog=["二号位", "三号位", "六号位"];
						}
						return [player,['投票选择队长',[dialog,'tdnodes']],true];
					});
					game.me.chooseButtonOL(list).set('switchToAuto',function(){
						_status.event.result='ai';
					}).set('processAI',function(){
						var buttons=_status.event.dialog.buttons;
						return {
							bool:true,
							links:[buttons.randomGet().link],
						}
					});

					'step 3'
					var list=[];
					for(var i in result){
						list.push(result[i].links[0]);
					}
					var result=list;
					for(var i of result){
						if(event.number==4){
							switch(i){
								case "一号位":event.red_vote[0]++;break;
								case "四号位":event.red_vote[1]++;break;
								case "二号位":event.blue_vote[0]++;break;
								case "三号位":event.blue_vote[1]++;break;
							}
						}else{
							switch(i){
								case "一号位":event.red_vote[0]++;break;
								case "四号位":event.red_vote[1]++;break;
								case "五号位":event.red_vote[2]++;break;
								case "二号位":event.blue_vote[0]++;break;
								case "三号位":event.blue_vote[1]++;break;
								case "六号位":event.blue_vote[2]++;break;
							}
						}
					}

					'step 4'
					var red_index=0;
					var red_max=0;
					var blue_index=0;
					var blue_max=0;
					for(var i=0;i<event.red_vote.length;i++){
						if(event.red_vote[i]>red_max){
							red_max=event.red_vote[i];
							red_index=i;
						}
					}
					for(var i=0;i<event.blue_vote.length;i++){
						if(event.blue_vote[i]>blue_max){
							blue_max=event.blue_vote[i];
							blue_index=i;
						}
					}
					event.red_leader=event.red_list[red_index];
					event.blue_leader=event.blue_list[blue_index];
					game.log('<span style="color:red;">红方</span>队长为',event.red_leader.node.name.innerHTML);
					game.log('<span style="color:blue;">蓝方</span>队长为',event.blue_leader.node.name.innerHTML);
					game.broadcastAll(function(red_leader,blue_leader){
						game.red_leader=red_leader;
						game.blue_leader=blue_leader;
					},event.red_leader,event.blue_leader);
					game.delay(4);
					'step 5'//ban角色
					//角色列表
					var list = get.charactersOL();
					event.list = get.characterGets(list,event.choose_number);
					event.choosing=game.red_leader;
					event.videoId = lib.status.videoId++;
					event.red_chooseList = [];
					event.blue_chooseList = [];

					var createDialog = function (list, id, list1, list2) {
						var dialog = ui.create.dialog("Ban角色", [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list1 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me&&list1==game.red_leader) {
								dialog.content.firstChild.innerHTML = "等待<span style='color:red;'>红方</span>队长选择";
							}else if(list1!=game.me&&list1==game.blue_leader){
								dialog.content.firstChild.innerHTML = "等待<span style='color:blue;'>蓝方</span>队长选择";
							}
						}
					};
					
					game.broadcastAll(createDialog, event.list, event.videoId, event.choosing);
					event.num=1;
					event.selected = [];
					_status.firstChoose = event.choosing;
					_status.onreconnect = [
						createDialog,
						event.list,
						event.videoId,
						event.red_chooseList,
						event.blue_chooseList
					];
					'step 6'
					var next = event.choosing.chooseButton(event.videoId, event.num, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					'step 7'
					game.broadcastAll(
						function (links, choosing, first, id) {
							var dialog = get.idDialog(id);
							if (dialog) {
								if (choosing == game.red_leader) {
									choosing = "<span style='color:red;'>红方</span>队长";
								} else {
									choosing = "<span style='color:blue;'>蓝方</span>队长";
								}
								dialog.content.firstChild.innerHTML =
									choosing + "Ban了" + get.translation(links);
								for (var i = 0; i < dialog.buttons.length; i++) {
									if ((dialog.buttons[i].link == links[0])||(dialog.buttons[i].link == links[1])) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links,
						event.choosing,
						event.choosing == _status.firstChoose,
						event.videoId
					);
					event.selected.addArray(result.links);
					if(event.choosing==game.blue_leader){
						event.blue_chooseList.addArray(result.links);
					}else{
						event.red_chooseList.addArray(result.links);
					}

					for(var i=0;i<result.links.length;i++){
						var index=event.list.indexOf(result.links[i]);
						if(index!=-1) event.list.splice(index,1);
					}
					if(event.choosing==game.blue_leader){
						event.choosing=game.red_leader;
					}else{
						event.choosing=game.blue_leader;
					}
					event.num++;
					if (event.num<=2) {
						event.goto(6);
					}
					'step 8'
					game.delay(2);
					'step 9'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);
					//为各方队友选择角色
					'step 10'
					//设置第一次提示
					event.choosed=event.choose_list[0];
					//console.log(event.choosed.node.name.innerHTML);
					event.choosing=game.blue_leader;
					event.red_chooseList = [];
					event.blue_chooseList = [];
					event.selected = [];

					event.videoId = lib.status.videoId++;
					var createDialog = function (choosed,list, id,list1, list2) {
						var dialog = ui.create.dialog(`<span style="color:red;">红方</span>为${choosed}选择角色，<span style="color:blue;">蓝方</span>队长是否插入Ban`, [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list1 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me&&list1==game.red_leader) {
								dialog.content.firstChild.innerHTML = "等待<span style='color:red;'>红方</span>队长选择";
							}else if(list1!=game.me&&list1==game.blue_leader){
								dialog.content.firstChild.innerHTML = "等待<span style='color:blue;'>蓝方</span>队长选择";
							}
						}
					};
					game.broadcastAll(createDialog,event.choosed.node.name.innerHTML, event.list, event.videoId, event.choosing);

					_status.firstChoose = game.red_leader;
					event.num=1;//记录选角次数
					_status.onreconnect = [
						createDialog,
						event.choosed.node.name.innerHTML,
						event.list,
						event.videoId,
						event.red_chooseList,
						event.blue_chooseList
					];
					"step 11"//插入ban角色
					event.choosed=event.choose_list.shift();
					if(event.choosed.side==true){
						event.choosing=game.red_leader;
					}else{
						event.choosing=game.blue_leader;
					}
					result.bool=undefined;
					//反转选择，使插入ban提示正确
					if(event.choosing==game.blue_leader){
						event.choosing=game.red_leader;
					}else{
						event.choosing=game.blue_leader;
					}

					if(!event.red_ban&&event.choosing==game.red_leader){
						//console.log('红方插入ban');
						var next = event.choosing.chooseButton(event.videoId, 1);
						next.set("filterButton", function (button) {
							if (_status.event.selected.includes(button.link)) return false;
							return true;
						});
						next.set("selected", event.selected);
						next.set("ai", function () {
							return Math.random();
						});
					}else if(!event.blue_ban&&event.choosing==game.blue_leader){
						//console.log('蓝方插入ban');
						var next = event.choosing.chooseButton(event.videoId, 1);
						next.set("filterButton", function (button) {
							if (_status.event.selected.includes(button.link)) return false;
							return true;
						});
						next.set("selected", event.selected);
						next.set("ai", function () {
							return Math.random();
						});
					}
					'step 12'
					//console.log(result.bool);
					if(result.bool){
						if(event.choosing==game.blue_leader){
							event.blue_ban=true;
						}else{
							event.red_ban=true;
						}
						game.broadcastAll(
							function (link, choosing,id,choosed) {
								var dialog = get.idDialog(id);
								if (dialog) {
									var str;
									if (choosing == game.red_leader) {
										choosing = "<span style='color:red;''>红方</span>队长";
										str=`，<span style="color:blue;">蓝方</span>队长为${choosed}选择角色`;
									} else {
										choosing = "<span style='color:blue;'>蓝方</span>队长";
										str=`，<span style="color:red;">红方</span>队长为${choosed}选择角色`;
									}
									dialog.content.firstChild.innerHTML =
										choosing + "Ban了" + get.translation(link)+str;

									//console.log(dialog.content.firstChild.innerHTML);

									for (var i = 0; i < dialog.buttons.length; i++) {
										if (dialog.buttons[i].link == link) {
											dialog.buttons[i].classList.add("glow2");
										}
									}
								}
							},
							result.links[0],
							event.choosing,
							event.videoId,
							event.choosed.node.name.innerHTML					
						);
						event.selected.push(result.links[0]);
					}

					if(event.choosing==game.blue_leader){
						event.choosing=game.red_leader;
					}else{
						event.choosing=game.blue_leader;
					}
					
					if(result.bool===false){
						game.broadcastAll(
							function (choosing,id,choosed) {
								var dialog = get.idDialog(id);
								if (dialog) {
									if (choosing == game.red_leader) {
										choosing = `<span style="color:red;">红方</span>队长为${choosed}`;
									} else {
										choosing = `<span style="color:blue;">蓝方</span>队长为${choosed}`;
									}
									dialog.content.firstChild.innerHTML =
										choosing + "选择角色";

									//console.log(dialog.content.firstChild.innerHTML);
								}
							},
							event.choosing,
							event.videoId,
							event.choosed.node.name.innerHTML
						);
					}
					
					'step 13'
					//console.log('选择角色');
					var next = event.choosing.chooseButton(event.videoId, 1, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					"step 14";
					event.selected.push(result.links[0]);
					if(event.choosing==game.red_leader){
						event.red_chooseList.push(result.links[0]);
						var id=event.red_list.shift().playerid;
					}else{
						event.blue_chooseList.push(result.links[0]);
						var id=event.blue_list.shift().playerid;
					}
					var name=event.choosed.node.name.innerHTML;
					game.broadcastAll(function(id,link){
							if(!lib.playerOL[id].name1){
								lib.playerOL[id].init(link);
								lib.playerOL[id].update();
							}
					},id,result.links[0]);

					if(event.choose_list.length>0){
						var next_choosed_name=event.choose_list[0].node.name.innerHTML;
						var next_choosed_side=event.choose_list[0].side;
					}else{
						var next_choosed_name='';
						var next_choosed_side=false;
					}

					game.broadcastAll(
						function (link, choosing, first, id,red_ban,blue_ban,choosed,next_choosed_name,next_choosed_side) {
							var dialog = get.idDialog(id);
							if (dialog) {
								//console.log(red_ban,blue_ban);
								var ban='';
								if (choosing == game.red_leader) {
									choosing = `<span style="color:red;">红方</span>队长为${choosed}`;
								} else {
									choosing = `<span style="color:blue;">蓝方</span>队长为${choosed}`;
								}

								if(next_choosed_side===true){
									if(!blue_ban){
										ban=`，<span style="color:red;">红方</span>队长将要为${next_choosed_name}选择角色，<span style="color:blue;">蓝方</span>是否插入Ban`;
									}else{
										if(next_choosed_name){
											ban=`，<span style="color:red;">红方</span>队长为${next_choosed_name}选择角色`;
										}
										
									}
								}else if(next_choosed_side===false){
									if(!red_ban){
										ban=`，<span style="color:blue;">蓝方</span>队长将要为${next_choosed_name}选择角色，<span style="color:red;">红方</span>是否插入Ban`;
									}else{
										if(next_choosed_name){
											ban=`，<span style="color:blue;">蓝方</span>队长为${next_choosed_name}选择角色`
										}
									}
								}

								var str=choosing + "选择了" + get.translation(link)+ban;
								dialog.content.firstChild.innerHTML =str;

								for (var i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == link) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links[0],
						event.choosing,
						event.choosing == _status.firstChoose,
						event.videoId,
						event.red_ban,
						event.blue_ban,
						name,
						next_choosed_name,
						next_choosed_side

					);
					if (event.choose_list.length>0) {
						event.goto(11);
					}
					game.delay(1);
					'step 15'
					game.delay(2);
					'step 16'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);
					
					'step 17'
					var viewHandcard=lib.configOL.viewHandcard;
					if(viewHandcard==true){
						game.addGlobalSkill('viewHandcard');
					}
					
				});
			},

			chooseCharacterOLBP01:function(){
				var next=game.createEvent('chooseCharacterOL');
				next.setContent(function(){
					'step 0'
					//console.log('chooseCharacterOLCM02');
					//var ref=game.players[0];
					event.number=lib.configOL.number;
					event.choose_number=parseInt(lib.configOL.BPchoose_number);
					event.list=game.teamSequenceList();

					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){//自由选择队伍
						game.chooseSide();
					}
					'step 1'
					var team_sequence=lib.configOL.team_sequence;
					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){
						var ref=game.getFirstRed();
						if(team_sequence!='random') game.moveSeat(event.list,ref);
					}else{
						var ref=game.players.randomGet();
						for(var i=0;i<event.number;i++){
							ref.side=event.list[i];
							ref=ref.next;
						}
					}
					
					

					event.red_list=[];
					event.blue_list=[];
					event.choose_list=[];

					var firstChoose=ref;

					_status.firstAct=firstChoose;
					for(var i=0;i<event.number;i++){
						firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
						if(firstChoose.side==true){
							event.red_list.push(firstChoose);
						}else{
							event.blue_list.push(firstChoose);
						}
						firstChoose=firstChoose.next;
					}
					//选角顺序
					if(event.number==4){
						event.choose_list=[event.red_list[0],event.blue_list[0],event.red_list[1],event.blue_list[1]];
					}else{
						event.choose_list=[event.red_list[0],event.blue_list[0],event.red_list[1],event.blue_list[1],event.red_list[2],event.blue_list[2]];
					}

					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==true){
							game.players[i].node.identity.firstChild.innerHTML='红';
						}
						else if(game.players[i].side==false){
							game.players[i].node.identity.firstChild.innerHTML='蓝';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}

					
					var map={};
					for(var i=0;i<event.number;i++){
						map[game.players[i].playerid]=[game.players[i].side,game.players[i].node.identity.firstChild.innerHTML,game.players[i].node.name.innerHTML];
					}

					var func=function(map){
						for(var i in map){
							var player=lib.playerOL[i];
							if(player){
								player.side=map[i][0];
								player.node.identity.firstChild.innerHTML=map[i][1];
								player.node.name.innerHTML=map[i][2];
								player.node.identity.dataset.color=player.side+'zhu';
							}
						}
					}


					game.broadcastAll(func,map);


					'step 2'
					//ban角色
					//角色列表
					var list = get.charactersOL();
					event.list = get.characterGets(list,event.choose_number);
					event.choosing=event.red_list[0];
					event.videoId = lib.status.videoId++;
					event.red_ban=[];
					event.blue_ban=[];
					event.selected = [];
					event.num=1;
					
					var createDialog = function (list, id, list1, list2) {
						var dialog = ui.create.dialog("Ban角色", [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list1 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me) {
								dialog.content.firstChild.innerHTML = "等待<span style='color:red;'>红方</span>选择Ban";
							}
						}
					};
					
					game.broadcastAll(createDialog, event.list, event.videoId, event.choosing);
					
					_status.side = event.choosing.side;
					_status.onreconnect = [
						createDialog,
						event.list,
						event.videoId,
						event.red_ban,
						event.blue_ban
					];

					'step 3'
					var next = event.choosing.chooseButton(event.videoId, 1, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					'step 4'
					game.broadcastAll(
						function (links, choosing, first, id) {
							var dialog = get.idDialog(id);
							if (dialog) {
								if (choosing.side == true) {
									choosing = "<span style='color:red;'>红方</span>";
								} else {
									choosing = "<span style='color:blue;'>蓝方</span>";
								}
								dialog.content.firstChild.innerHTML =
									choosing + "Ban了" + get.translation(links);
								for (var i = 0; i < dialog.buttons.length; i++) {
									if ((dialog.buttons[i].link == links[0])||(dialog.buttons[i].link == links[1])) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links,
						event.choosing,
						event.choosing.side == _status.side,
						event.videoId
					);
					event.selected.addArray(result.links);
					if(event.choosing.side==true){
						event.red_ban.addArray(result.links);
					}else{
						event.blue_ban.addArray(result.links);
					}

					for(var i=0;i<result.links.length;i++){
						var index=event.list.indexOf(result.links[i]);
						if(index!=-1) event.list.splice(index,1);
					}

					//因仅循环两次，故不在进行判断，直接对当前选择者进行赋值
					event.choosing=event.blue_list[0];

					event.num++;
					if (event.num<=2) {
						event.goto(3);
					}
					'step 5'
					game.delay(2);
					'step 6'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);

					'step 7'
					//为各方选择角色
					//设置第一次提示
					//console.log(event.choosed.node.name.innerHTML);
					event.choosing=event.choose_list[0];
					event.red_chooseList = [];
					event.blue_chooseList = [];
					event.selected = [];
					_status.side=event.choosing.side;

					event.videoId = lib.status.videoId++;
					var createDialog = function (choosing,list, id,list1, list2) {
						var dialog = ui.create.dialog(`<span style="color:red;">${choosing}</span>选择角色`, [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list2 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me) {
								dialog.content.firstChild.innerHTML = `等待<span style='color:red;'>${choosing}</span>选择`;
							}
						}
					};
					game.broadcastAll(createDialog,event.choosing.node.name.innerHTML, event.list, event.videoId, event.choosing);
					
					_status.onreconnect = [
						createDialog,
						event.choosing.node.name.innerHTML,
						event.list,
						event.videoId,
						event.red_chooseList,
						event.blue_chooseList
					];
					"step 8"
					//console.log('选择角色');
					game.delay(1);
					event.choosing=event.choose_list.shift();
					var next = event.choosing.chooseButton(event.videoId, 1, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					"step 9";
					event.selected.push(result.links[0]);
					if(event.choosing.side==true){
						event.red_chooseList.push(result.links[0]);
						var id=event.red_list.shift().playerid;
					}else{
						event.blue_chooseList.push(result.links[0]);
						var id=event.blue_list.shift().playerid;
					}

					var name=event.choosing.node.name.innerHTML;

					game.broadcastAll(function(id,link){
							if(!lib.playerOL[id].name1){
								lib.playerOL[id].init(link);
								lib.playerOL[id].update();
							}
					},id,result.links[0]);
					if(event.choose_list.length>0){
						var next_name=event.choose_list[0].node.name.innerHTML;
						var next_side=event.choose_list[0].side;
					}else{
						var next_name='';
						var next_side=false;
					}

					game.broadcastAll(
						function (link, choosing, first, id,name,next_name,next_side) {
							var dialog = get.idDialog(id);
							if (dialog) {
								var next='';
								if(next_name){
									if(next_side==true){
										next=`，<span style="color:red;">${next_name}</span>选择角色`
									}else{
										next=`，<span style="color:blue;">${next_name}</span>选择角色`
									}
								}

								if (choosing.side == true) {
									choosing = `<span style="color:red;">${name}</span>`;
								} else {
									choosing = `<span style="color:blue;">${name}</span>`;
								}
								var str=choosing + "选择了" + get.translation(link)+next;
								dialog.content.firstChild.innerHTML =str;

								for (var i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == link) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links[0],
						event.choosing,
						event.choosing.side == _status.side,
						event.videoId,
						name,
						next_name,
						next_side
					);
					if (event.choose_list.length>0) {
						event.goto(8);
					}
					game.delay(1);
					'step 10'
					game.delay(3);
					'step 11'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);
					
					'step 12'
					var viewHandcard=lib.configOL.viewHandcard;
					if(viewHandcard==true){
						game.addGlobalSkill('viewHandcard');
					}
					
				});
			},

			chooseCharacterOLBP02:function(){
				var next=game.createEvent('chooseCharacterOL');
				next.setContent(function(){
					'step 0'
					//console.log('chooseCharacterOLCM02');
					//var ref=game.players[0];
					event.number=lib.configOL.number;
					event.choose_number=parseInt(lib.configOL.BPchoose_number);

					event.list=game.teamSequenceList();

					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){//自由选择队伍
						game.chooseSide();
					}
					'step 1'
					var team_sequence=lib.configOL.team_sequence;
					var chooseSide=lib.configOL.chooseSide;
					if(chooseSide){
						var ref=game.getFirstRed();
						if(team_sequence!='random') game.moveSeat(event.list,ref);
					}else{ 
						var ref=game.players.randomGet();
						for(var i=0;i<event.number;i++){
							ref.side=event.list[i];
							ref=ref.next;
						}
					}

					event.red_list=[];
					event.blue_list=[];
					event.choose_list=[];

					var firstChoose=ref;

					_status.firstAct=firstChoose;
					for(var i=0;i<event.number;i++){
						firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
						if(firstChoose.side==true){
							event.red_list.push(firstChoose);
						}else{
							event.blue_list.push(firstChoose);
						}
						firstChoose=firstChoose.next;
					}
					//选角顺序
					if(event.number==4){
						event.choose_list=[event.red_list[0],event.blue_list[0],event.blue_list[1],event.red_list[1]];
					}else{
						event.choose_list=[event.red_list[0],event.blue_list[0],event.red_list[1],event.blue_list[1],event.blue_list[2],event.red_list[2]];
					}

					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==true){
							game.players[i].node.identity.firstChild.innerHTML='红';
						}
						else if(game.players[i].side==false){
							game.players[i].node.identity.firstChild.innerHTML='蓝';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}

					
					var map={};
					for(var i=0;i<event.number;i++){
						map[game.players[i].playerid]=[game.players[i].side,game.players[i].node.identity.firstChild.innerHTML,game.players[i].node.name.innerHTML];
					}

					var func=function(map){
						for(var i in map){
							var player=lib.playerOL[i];
							if(player){
								player.side=map[i][0];
								player.node.identity.firstChild.innerHTML=map[i][1];
								player.node.name.innerHTML=map[i][2];
								player.node.identity.dataset.color=player.side+'zhu';
							}
						}
					}


					game.broadcastAll(func,map);


					'step 2'
					//ban角色
					//角色列表
					var list = get.charactersOL();
					event.list = get.characterGets(list,event.choose_number);
					event.choosing=event.red_list[0];
					event.videoId = lib.status.videoId++;
					event.red_ban=[];
					event.blue_ban=[];
					event.selected = [];
					event.num=1;
					
					var createDialog = function (list, id, list1, list2) {
						var dialog = ui.create.dialog("Ban角色", [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list1 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me) {
								dialog.content.firstChild.innerHTML = "等待<span style='color:red;'>红方</span>选择Ban";
							}
						}
					};
					
					game.broadcastAll(createDialog, event.list, event.videoId, event.choosing);
					
					_status.side = event.choosing.side;
					_status.onreconnect = [
						createDialog,
						event.list,
						event.videoId,
						event.red_ban,
						event.blue_ban
					];

					'step 3'
					var next = event.choosing.chooseButton(event.videoId, 1, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					'step 4'
					game.broadcastAll(
						function (links, choosing, first, id) {
							var dialog = get.idDialog(id);
							if (dialog) {
								if (choosing.side == true) {
									choosing = "<span style='color:red;'>红方</span>";
								} else {
									choosing = "<span style='color:blue;'>蓝方</span>";
								}
								dialog.content.firstChild.innerHTML =
									choosing + "Ban了" + get.translation(links);
								for (var i = 0; i < dialog.buttons.length; i++) {
									if ((dialog.buttons[i].link == links[0])||(dialog.buttons[i].link == links[1])) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links,
						event.choosing,
						event.choosing.side == _status.side,
						event.videoId
					);
					event.selected.addArray(result.links);
					if(event.choosing.side==true){
						event.red_ban.addArray(result.links);
					}else{
						event.blue_ban.addArray(result.links);
					}

					for(var i=0;i<result.links.length;i++){
						var index=event.list.indexOf(result.links[i]);
						if(index!=-1) event.list.splice(index,1);
					}

					//因仅循环两次，故不在进行判断，直接对当前选择者进行赋值
					event.choosing=event.blue_list[0];

					event.num++;
					if (event.num<=2) {
						event.goto(3);
					}
					'step 5'
					game.delay(2);
					'step 6'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);

					'step 7'
					//为各方选择角色
					//设置第一次提示
					//console.log(event.choosed.node.name.innerHTML);
					event.choosing=event.choose_list[0];
					event.red_chooseList = [];
					event.blue_chooseList = [];
					event.selected = [];
					_status.side=event.choosing.side;

					event.videoId = lib.status.videoId++;
					var createDialog = function (choosing,list, id,list1, list2) {
						var dialog = ui.create.dialog(`<span style="color:red;">${choosing}</span>选择角色`, [list, "character"]);
						dialog.classList.add("fullwidth");
						dialog.classList.add("fullheight");
						dialog.classList.add("noslide");
						dialog.classList.add("fixed");
						dialog.videoId = id;
						if (list2 && list2) {
							ui.arena.classList.add("playerhidden");
							for (var i = 0; i < dialog.buttons.length; i++) {
								var button = dialog.buttons[i];
								if (list1.includes(button.link)) {
									button.classList.add("selectedx");
								} else if (list2.includes(button.link)) {
									button.classList.add("glow");
								}
							}
						} else {
							if (list1 != game.me) {
								dialog.content.firstChild.innerHTML = `等待<span style='color:red;'>${choosing}</span>选择`;
							}
						}
					};
					game.broadcastAll(createDialog,event.choosing.node.name.innerHTML, event.list, event.videoId, event.choosing);
					
					_status.onreconnect = [
						createDialog,
						event.choosing.node.name.innerHTML,
						event.list,
						event.videoId,
						event.red_chooseList,
						event.blue_chooseList
					];
					"step 8"
					//console.log('选择角色');
					game.delay(1);
					event.choosing=event.choose_list.shift();
					var next = event.choosing.chooseButton(event.videoId, 1, true);
					next.set("filterButton", function (button) {
						if (_status.event.selected.includes(button.link)) return false;
						return true;
					});
					next.set("selected", event.selected);
					next.set("ai", function () {
						return Math.random();
					});
					"step 9";
					event.selected.push(result.links[0]);
					if(event.choosing.side==true){
						event.red_chooseList.push(result.links[0]);
						var id=event.red_list.shift().playerid;
					}else{
						event.blue_chooseList.push(result.links[0]);
						var id=event.blue_list.shift().playerid;
					}

					var name=event.choosing.node.name.innerHTML;

					game.broadcastAll(function(id,link){
							if(!lib.playerOL[id].name1){
								lib.playerOL[id].init(link);
								lib.playerOL[id].update();
							}
					},id,result.links[0]);
					if(event.choose_list.length>0){
						var next_name=event.choose_list[0].node.name.innerHTML;
						var next_side=event.choose_list[0].side;
					}else{
						var next_name='';
						var next_side=false;
					}

					game.broadcastAll(
						function (link, choosing, first, id,name,next_name,next_side) {
							var dialog = get.idDialog(id);
							if (dialog) {
								var next='';
								if(next_name){
									if(next_side==true){
										next=`，<span style="color:red;">${next_name}</span>选择角色`
									}else{
										next=`，<span style="color:blue;">${next_name}</span>选择角色`
									}
								}

								if (choosing.side == true) {
									choosing = `<span style="color:red;">${name}</span>`;
								} else {
									choosing = `<span style="color:blue;">${name}</span>`;
								}
								var str=choosing + "选择了" + get.translation(link)+next;
								dialog.content.firstChild.innerHTML =str;

								for (var i = 0; i < dialog.buttons.length; i++) {
									if (dialog.buttons[i].link == link) {
										if (first) {
											dialog.buttons[i].classList.add("selectedx");
										} else {
											dialog.buttons[i].classList.add("glow");
										}
									}
								}
							}
						},
						result.links[0],
						event.choosing,
						event.choosing.side == _status.side,
						event.videoId,
						name,
						next_name,
						next_side
					);
					if (event.choose_list.length>0) {
						event.goto(8);
					}
					game.delay(1);
					'step 10'
					game.delay(3);
					'step 11'
					game.broadcastAll(function (id) {
						ui.arena.classList.remove("playerhidden");
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
						}
					}, event.videoId);
					
					'step 12'
					var viewHandcard=lib.configOL.viewHandcard;
					if(viewHandcard==true){
						game.addGlobalSkill('viewHandcard');
					}
					
				});
			},

			onSwapControl:function(){
				game.addVideo('onSwapControl');
				var name=game.me.name;
				if(ui.fakeme&&ui.fakeme.current!=name){
					ui.fakeme.current=name;
					if(ui.versushighlight&&ui.versushighlight!=game.me){
						ui.versushighlight.classList.remove('current_action');
					}
					ui.versushighlight=game.me;
					game.me.classList.add('current_action');

					ui.fakeme.style.backgroundImage=game.me.node.avatar.style.backgroundImage;
				}
			},
			modeSwapPlayer:function(player){
				if((_status.mode=='standard'&&lib.storage.single_control)){
					game.swapControl(player);
					game.onSwapControl();
				}
				else{
					game.swapPlayer(player);
				}
			},

			//星杯增加设置系别用
			setXiBie:(item,xiBie)=>{
				item.xiBie=xiBie;
				return item.xiBie;
			},
			setMingGe:(item,mingGe)=>{
				item.mingGe=mingGe;
				return item.mingGe;
			},

			changeShiQi:function(num,side,log){
				var numx=num;
				if(side==true){
					game.hongShiQi+=num;
					if(log!=false){
						if(num>0){
							game.log('<span style="color:red;">红方</span>士气增加',num);
						}else if(num<0){
							num=-num;
							game.log('<span style="color:red;">红方</span>士气减少',num);
						}
					}
					
				}else if(side==false){
					game.lanShiQi+=num;
					if(log!=false){
						if(num>0){
							game.log('<span style="color:blue;">蓝方</span>士气增加',num);
						}else if(num<0){
							num=-num;
							game.log('<span style="color:blue;">蓝方</span>士气减少',num);
						}
					}
				}

				if(game.zhanJiList){
					game.zhanJiList['hongShiQi']=game.hongShiQi;
					game.zhanJiList['lanShiQi']=game.lanShiQi;
				}

				ui.updateShiQiInfo();
				game.broadcast(function(hongShiQi,lanShiQi){
					game.hongShiQi=hongShiQi;
					game.lanShiQi=lanShiQi;
					ui.updateShiQiInfo();
				},game.hongShiQi,game.lanShiQi);
				game.addVideo('changeShiQi',null,[numx,side]);
			},
			changeZhanJi:function(xingShi,num,side,log){
				var numx=num;
				var name=get.translation(xingShi);
				if(num>0){
					if(side==true){
						for(let i=0;i<num;i++){
							game.hongZhanJi.push(xingShi);
							if(log!=false){
								game.log('<span style="color:red;">红方</span>战绩区增加',name);
							}
						}
					}else if(side==false){
						for(let i=0;i<num;i++){
							game.lanZhanJi.push(xingShi);
							if(log!=false){
								game.log('<span style="color:blue;">蓝方</span>战绩区增加',name);
							}
						}
					}
				}else if(num<0){
					num=-num;
					if(side==true){
						for(let i=0;i<num;i++){
							let index = game.hongZhanJi.indexOf(xingShi);  
							if (index !== -1) {  
								game.hongZhanJi.splice(index, 1);
								if(log!=false){
									game.log('<span style="color:red;">红方</span>战绩区移除',name);
								}
							}
						}
					}else if(side==false){
						for(let i=0;i<num;i++){
							let index = game.lanZhanJi.indexOf(xingShi);  
							if (index !== -1) {  
								game.lanZhanJi.splice(index, 1);
								if(log!=false){
									game.log('<span style="color:blue;">蓝方</span>战绩区移除',name);
								}
							}
						}
					}
				}
				game.hongZhanJi.sort();
				game.lanZhanJi.sort();

				if(game.zhanJiList){
					game.zhanJiList['hongZhanJi']=game.hongZhanJi;
					game.zhanJiList['lanZhanJi']=game.lanZhanJi;
				}

				ui.updateShiQiInfo();
				game.broadcast(function(hongZhanJi,lanZhanJi){
					game.hongZhanJi=hongZhanJi;
					game.lanZhanJi=lanZhanJi;
					ui.updateShiQiInfo();
				},game.hongZhanJi,game.lanZhanJi);
				game.addVideo('changeZhanJi',null,[numx,xingShi,side]);
			},
			changeXingBei:function(num,side,log){
				var numx=num;
				if(side==true){
					game.hongXingBei+=num;
					if(log!=false){
						if(num>0){
							game.log('<span style="color:red;">红方</span>星杯数量增加',num);
						}else{
							num=-num;
							game.log('<span style="color:red;">红方</span>星杯数量减少',num);
						}
					}
					
				}else if(side==false){
					game.lanXingBei+=num;
					if(log!=false){
						if(num>0){
							game.log('<span style="color:blue;">蓝方</span>星杯数量增加',num);
						}else{
							num=-num;
							game.log('<span style="color:blue;">蓝方</span>星杯数量减少',num);
						}
					}
				}

				if(game.zhanJiList){
					game.zhanJiList['hongXingBei']=game.hongXingBei;
					game.zhanJiList['lanXingBei']=game.lanXingBei;
				}

				ui.updateShiQiInfo();
				game.broadcast(function(hongXingBei,lanXingBei){
					game.hongXingBei=hongXingBei;
					game.lanXingBei=lanXingBei;
					ui.updateShiQiInfo();
				},game.hongXingBei,game.lanXingBei);
				game.addVideo('changeXingBei',null,[numx,side]);
			},
			resetMoDan:function(){
				//结算后重置数据
				game.moDan=2;
				game.moDanFangXiang='you';
				game.broadcast(function(){
					game.moDanFangXiang='you';
				})
			},
		},
		

		translate:{
			trueColor:"zhu",
			falseColor:"wei",
			versus_single_control_config:'单人控制',

			_wuFaXingDong:'无法行动',
			_wuFaXingDong_qiDongQian:'无法行动 启动前',
			_wuFaXingDong_qiDongHou:'无法行动 启动后',
			
			//公共技能
            _xuRuo:"虚弱",
            _zhongDu:"中毒",
            _shengDun:"圣盾",
            //_shengGuang:"圣光",
            //_yingZhan:"应战",
            //_moDan:"魔弹",
            _heCheng:"合成",
            _gouMai:"购买",
            _tiLian:"提炼",
            //_gongJiXingShi:"攻击星石",
            //_quXiao:'取消',

			_tiLian_backup:'提炼',
			_heCheng_backup:'合成',
			baoShi:'宝石',
            shuiJing:'水晶',
		},
		skill:{
			_gongJiRiZhi:{
				trigger:{player:'gongJiSheZhi'},
				direct:true,
				lastDo:true,
				filter:function(event,player){
					return event.canYingZhan==false||event.canShengGuang==false||event.canShengDun==false;
				},
				content:function(){
					var canYingZhan=trigger.canYingZhan;
					var canShengGuang=trigger.canShengGuang;
					var canShengDun=trigger.canShengDun;

					var str='本次攻击';
					if(canYingZhan==false&&canShengGuang==false&&canShengDun==false){
						str+='强制命中';
					}else{
						var list=[canYingZhan,canShengGuang,canShengDun];
						for(var i=0;i<list.length;i++){
							if(i==0){
								if(list[i]==false) str+='无法应战';
							}else if(i==1){
								if(list[i]==false) str+='无法被圣光抵消';
							}else{
								if(list[i]==false) str+='无法被圣盾抵消';
							}
							if(i<list.length-1){
								if(list[i+1]==false) str+='，';
							}
						}
					}
					game.log(str);
				}
			},
		
			viewHandcard:{
				ai:{
					viewHandcard:true,
					skillTagFilter:function(player,tag,target){
						return player.side==target.side;
					},
				},
			},

			_wuFaXingDong:{
				filterx:function(event,player){
					//console.log('--------------------------------');
					//拥有挑衅直接false
					if(player.hasZhiShiWu('tiaoXinX')) return false;
					//无可启动技跳过启动前后无法行动
					if(event.name=='phaseUse'){
						if(event.canQiDong==false) return false;
					}
					//获取所有技能
					var skills = game.expandSkills(player.getSkills("invisible").concat(lib.skill.global));
					//判断是否有可触发的技能
					for(var i=0;i<skills.length;i++){
						//排除提炼和无法行动（避免判断可触发时循环嵌套）
						if(skills[i]=='_tiLian' || skills[i]=='_wuFaXingDong') continue;
						var enable=lib.filter.filterEnable(event, player, skills[i]);
						if(enable) return false;
					}

					//判断是否有可使用手牌
					var cards=player.getCards('h').concat(player.getCards('e'));
					for(var i=0;i<cards.length;i++){
						if(player.hasUseTarget(cards[i])) return false;
					}
					return true;
				},
				enable:'wuFaXingDong',
				type:'wuFaXingDong',
				filter:function(event,player){
					return lib.skill._wuFaXingDong.filterx(event,player);
				},
				content:function(){
					"step 0"
					player.wuFaXingDong();
					player.storage.gongJiOrFaShu++;
				},
				contentx:function(){
					"step 0"
					event.dict={'认可':0,'否认':0};
					event.targetsx=game.filterPlayer(i=>i!=player).sortBySeat(_status.currentPhase);
					var name=get.translation(player.name);
					event.contentx=[name+'宣言无法行动',player.getCards('h').slice()];
					event.listx=['认可','否认'];
					"step 1"
					event.target=event.targetsx.shift();
					if(event.contentx[1].length==0){
						event.target.chooseControl(event.listx).set('dialog',[event.contentx[0]]).set('ai',function(){
							return 1;
						});
					}else{
						event.target.chooseControl(event.listx).set('dialog',event.contentx).set('ai',function(){
							if(_status.event.dialog[1].length==0){
								return 1;
							}
							return 0;
						});
					}
					"step 2"
					if(result.control=='认可'){
						event.target.popup('认可');
						game.log(event.target,'认可');
						event.dict[result.control]++;
					}else if(result.control=='否认'){
						event.target.popup('否认');
						game.log(event.target,'否认');
						event.dict[result.control]++;
					}
					if(event.targetsx.length>0) event.goto(1);
					"step 3"
					if(event.dict['认可']>=event.dict['否认']){
						event.getParent('phaseUse').canTeShu=false;
						event.getParent('phaseUse').firstAction=true;
						player.storage.gongJiOrFaShu++;
						var num=player.getCards('h').length;
						player.discard(player.getCards('h'));
						player.draw(num);
					}else{
						if(game.players[0].side==player.side){
							game.over(false);
						}else{
							game.over(true);
						}
					}
				},
				ai:{
					order:1,
					result:{
						player:1,
					},
				},
				group:['_wuFaXingDong_qiDongQian','_wuFaXingDong_qiDongHou'],
				subSkill:{
					qiDongQian:{
						trigger:{player:'phaseUseBegin'},
						priority:2,
						filter:function(event,player){
							return lib.skill._wuFaXingDong.filterx(event,player);
						},
						content:function(){
							"step 0"
							player.wuFaXingDong();
						}
					},
					qiDongHou:{
						trigger:{player:'phaseUseBegin'},
						filter:function(event,player){
							return lib.skill._wuFaXingDong.filterx(event,player);
						},
						priority:-1,
						content:function(){
							"step 0"
							player.wuFaXingDong();
						}
					}
				}
			},
			/*
			_chongZhiAction:{
				trigger:{player:'phaseBegin'},
				direct:true,
				firstDo:true,
				content:function(){
					player.storage.gongJiOrFaShu=1;
					player.storage.faShu=0;
					player.storage.gongJi=0;
					//player.storage.canTeShu=true;
					//判断是否有可启动技
					var skills=player.skills;
					for(var i=0;i<skills.length;i++){
						var info=get.info(skills[i]);
						var flag=false;
						if(info.type=='qiDong'){
							if(info.filter(event,player)) flag=true;
							if(flag) break;
						}
					}
					player.storage.qiDong=flag;

				}
			},
			*/
            _zhiLiao:{
                trigger:{player:"zhiLiao"},
                forced:true,
                priority:1,
                init:function(player){
                    player.storage.zhongDu=[];
                },
                filter:function(event,player){
                    if(player.zhiLiao<=0) return false;
                    return true;
                },
                content:function(){
                    "step 0"
                    var num=trigger.getParent().num;
                    var list=[];
                    for(var i=0;i<=player.zhiLiao;i++){
                        if(i>num) break;
                        list.push(i);
                    }
                    player.chooseControl(list).set('prompt','使用的[治疗]数量，目前伤害量'+num).set('ai',function(){return _status.event.num;}).set('num',list.length-1);
					"step 1"
					var zhiLiaonum=result.control;
					if(zhiLiaonum>0){
						trigger.getParent().num-=zhiLiaonum;
						game.log(player,'的','[治疗]','抵挡了'+zhiLiaonum+'点伤害');
						player.changeZhiLiao(-zhiLiaonum).type='damage';
					}
                }
            },
            _faShuXianZhi:{
                mod:{
                    cardEnabled:function(card){
                        if(_status.event.name=='faShu'){
                            if(get.type(card)!='faShu') return false;
                        }
                    }
                },
            },
            _gongJiXianZhi:{
                mod:{
                    cardEnabled:function(card){
                        if(_status.event.name=='gongJi'){
                            if(get.type(card)!='gongJi') return false;
                        }
                    }    
                }
            },
			/*
            _qiDong:{
                forced:true,
                trigger:{player:'useSkillAfter'},
                filter:function(event){
                    var info=get.info(event.skill);
                    return info.qiDong;
                },
                content:function(){
                    player.chooseToUse(true);
                }
            },*/

            _xuRuo:{
                priority:1,//优先级大的先执行
                trigger:{player:'phaseUseBefore'},
                forced:true,
                //marktext:"虚",
                markimage:'image/card/xuRuo.png',
                intro:{
					content:'expansion',
				},
                filter:function(event,player){
                    return player.hasExpansions('_xuRuo');
                },
                content:function(){
                    'step 0'
                    var list=['摸三张牌','跳过行动阶段'];
                    player.chooseControl().set('choiceList',list).set('prompt','虚弱：选择一项').set('ai',function(){
						var player=_status.event.player;
                        if(player.countCards('h')+3<=player.getHandcardLimit()) return 0;
                        return 1;
                    });
                    'step 1'
					if(result.control=='选项二'){
						player.addTempSkill('xuRuo_xiaoGuo');
					}else if(result.control=="选项一"){
						player.draw(3);
					}
                    player.loseToDiscardpile(player.getExpansions('_xuRuo'));
                },
            },
			xuRuo_xiaoGuo:{
				direct:true,
                priority:-1,
				lastDo:true,
				trigger:{player:'phaseUseBefore'},
				content:function(){
					trigger.cancel();
				}
			},
            _zhongDu:{
                priority:3,
                //marktext:"毒",
                markimage:'image/card/zhongDu.png',
                intro:{
					content:'expansion',
					markcount:'expansion',
				},
                trigger:{player:'phaseUseBefore'},
                forced:true,
                filter:function(event,player){
                    return player.hasExpansions('_zhongDu');
                },
                content:function(){
                    var target;
                    while(player.storage.zhongDu.length){
                        target=player.storage.zhongDu.pop();
                        var next=player.damage(target);
                        next.faShu=true;
                    }
                    player.loseToDiscardpile(player.getExpansions('_zhongDu'));
                }
            },
            _shengDun:{
                //marktext:"盾",
                markimage:'image/card/shengDun.png',
                intro:{
					content:'expansion',
				},
                trigger:{target:['shouDaoGongJi','shouDaoMoDan']},
				direct:true,
                lastDo:true,
                filter:function(event,player){
                    if(event.canShengDun==false) return false;
					return player.hasExpansions('_shengDun')&&event.targets.includes(player);
                },
                content:function(){
					'step 0'
                    player.loseToDiscardpile(player.getExpansions('_shengDun'));
                    trigger.targets.remove(player);
					'step 1'
                    if(get.type(trigger.card)=='gongJi'){
						event.source=trigger.player;
						event.yingZhan=trigger.yingZhan;
						event.sourceCard=trigger.card;
                        event.trigger('gongJiWeiMingZhong');
                    }else if(trigger.card.name=='moDan') game.resetMoDan();
                    //trigger.cancel();
                }
            },
            _yingZhan:{
                trigger:{target:'shouDaoGongJi'},
                direct:true,
                filter:function(event,player){
                    if(event.canYingZhan==false&&event.canShengGuang==false) return false;
					return event.targets.includes(player);
                },
                content:function(){
					'step 0'
					event.source=trigger.player;
					event.yingZhan=trigger.yingZhan;
					event.sourceCard=trigger.card;
					var name=get.translation(event.source);
					var propmt=`受到${name}的`;
					propmt+=get.translation(get.xiBie(event.sourceCard))+'系';
					if(event.yingZhan){
						propmt+='应战攻击，';
					}else{
						propmt+='主动攻击，';
					}
					var next=player.yingZhan(propmt);
                    next.set('filterCard',function(card,player,event){
						if(get.type(card)=='gongJi'){
							if(_status.event.canYingZhan==false) return false;//不能应战设置
							if(card.name!='anMie'&&get.xiBie(card)!=get.xiBie(_status.event.sourceCard)) return false;
						}else if(get.type(card)=='faShu'){
							if(_status.event.canShengGuang==false) return false;
							if(get.name(card)!='shengGuang') return false;
						}
						return lib.filter.cardEnabled(card,player,'forceEnable');
					});
					next.set('filterTarget',function(card,player,target){
						return target!=_status.event.source&&target.side!=player.side;
                    });
					next.set('sourceCard',event.sourceCard);
                    next.set('source',event.source);
                    next.set('yingZhan',true);
					next.set('canYingZhan',trigger.canYingZhan);
					next.set('canShengGuang',trigger.canShengGuang);
					next.set('yingZhan',event.yingZhan);
					'step 1'
                    if(result.bool){
                        trigger.targets.remove(player);
                    }
                },
				ai:{
					yingZhan:true,
				}
            },
            _yingZhan_weiMingZhong:{
                trigger:{player:'gongJiQian'},
                direct:true,
				firstDo:true,
                filter:function(event,player){
                    return event.getParent().name=='yingZhan'&&event.card.name!='shengGuang';
                },
                content:function(){
					'step 0'
					trigger.yingZhan=true;//设置本次攻击为应战攻击

                    event.source=trigger.getParent().source;//攻击来源
                    event.player=trigger.getParent().player;//应战者
					event.yingZhan=trigger.getParent().yingZhan;//判断未命中的攻击是否为应战攻击
					event.sourceCard=trigger.getParent().sourceCard;//攻击来源牌
					'step 1'
                    event.trigger('gongJiWeiMingZhong');
                }
            },
			_shengGuang:{
				trigger:{player:'shengGuang'},
				direct:true,
				firstDo:true,
                filter:function(event,player){
                    return event.getParent().name=='yingZhan'&&event.card.name=='shengGuang';
                },
				content:function(){
					'step 0'
					event.source=trigger.getParent().source;//攻击来源
                    event.player=trigger.getParent().player;//应战者
					event.yingZhan=trigger.getParent().yingZhan;//判断未命中的攻击是否为应战攻击
					event.sourceCard=trigger.getParent().sourceCard;//攻击来源牌
					'step 1'
                    event.trigger('gongJiWeiMingZhong');
				}
			},

            _moDan:{
                trigger:{target:'shouDaoMoDan'},
                direct:true,
                init:function(player){
                    player.storage.moDan=false;
                },
				content:function(){
					"step 0"
                    player.storage.moDan=true;//是否已经被魔弹
					
					//所有玩家有魔弹标记重置标记
					var num=0;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].storage.moDan==true){
							num++;
						}
					}
					if(num>=game.players.length){
						for(var i=0;i<game.players.length;i++){
							game.players[i].storage.moDan=false;
						}
					}
					
					var name=get.translation(trigger.player);
					var str='受到'+name+'的魔弹';
					var next=player.moDan(str,function(card,player,event){
						if(!(card.name=='moDan'||card.name=='shengGuang')) return false;
                        return lib.filter.cardEnabled(card,player,'forceEnable');
					});
					next.autodelay=true; 
					game.moDan++;

					"step 1"
					if(result.bool){
                        trigger.targets.remove(player);
						game.resetMoDan();
					}else{
						game.moDan--;
                    }
					
                    player.storage.moDan=false;
				},
				ai:{
					result:{
						player:2,
					},
				}
			},
            _moDan1:{//第一个使用魔弹的角色增加魔弹标记
                trigger:{player:'faShuQian'},
				direct:true,
                filter:function(event,player){
                    if(player.storage.moDan!=true&&event.card.name=='moDan'){
                        return true;
                    }else{
                        return false;
                    }
                },
                content:function(){
                    player.storage.moDan=true;
                }
            },
            _moDan2:{//第一个使用魔弹的角色删除魔弹标记
                trigger:{player:'faShuHou'},
				direct:true,
                filter:function(event,player){
                    if(player.storage.moDan!=false&&event.card.name=='moDan'){
                        return true;
                    }else{
                        return false;
                    }
                },
                content:function(){
                    player.storage.moDan=false;
                }
            },

            _gouMai:{
				enable:'phaseUse',
				type:'teShu',
				filter:function(event,player){
					if(event.getParent('phaseUse').canTeShu==false) return false;
					return player.countCards('h')+3<=player.getHandcardLimit();
				},
				content:function(){
					'step 0'
					player.draw(3).set('yuanYin','teShuXingDong');
					event.trigger('gouMai');
					'step 1'
					var side=player.side;
					var num=0;
					var emptyZhanJi=get.emptyZhanJi(player.side);
					if(emptyZhanJi>=2){
						num=2;
					}else if(emptyZhanJi>=1){
						num=1;
					}

					if(num==0){
						event.finish();
					}else if(num==2){
						player.addZhanJi('baoShi',1);
						player.addZhanJi('shuiJing',1);
						event.finish();
					}else if(num==1){
						var list=['baoShi','shuiJing'];
						player.chooseControl(list).set('prompt','选择获得的星石').set('ai',function(){return 0;});
					}
					'step 2'
					if(result.control=='宝石'){
						player.addZhanJi('baoShi',1);
					}else if(result.control=='水晶'){
						player.addZhanJi('shuiJing',1);
					}
				},
				ai:{
					order:function(item,player){
						var num=3;
						num+=(0.15*get.emptyZhanJi(player.side));
						return num;
					},
					result:{
						player:function(player){
							if(get.emptyZhanJi(player.side)<2) return 0;
							if(player.countCards('h')==0) return 1;
							var num=0.1;
							num+=(0.2*(player.countEmptyCards()));
							var numx=Math.random();
							if(numx<=num) return 1;
							else return 0;
						},
					},
					maixie:true,
				}
			},
			_heCheng:{
				enable:'phaseUse',
				type:'teShu',
				filter:function(event,player){
					if(event.getParent('phaseUse').canTeShu==false) return false;
					if(player.side==true){
						return game.hongZhanJi.length>=3&&player.countCards('h')+3<=player.getHandcardLimit();
					}else if(player.side==false){
						return game.lanZhanJi.length>=3&&player.countCards('h')+3<=player.getHandcardLimit();
					}
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('合成：选择星石','hidden');
						if(player.side==true){
							var list=game.hongZhanJi;
						}else if(player.side==false){
							var list=game.lanZhanJi;
						}
						var listx=[];
						for(var i=0;i<list.length;i++){
							listx.push([list[i],get.translation(list[i])]);
						}
						dialog.add([
							listx,'tdnodes'
						]);
						return dialog;
					},
					backup:function(links,player){
						return{
							links:links,
							type:'teShu',
							content:function(){
								'step 0'
								event.links=lib.skill._heCheng_backup.links;
								event.trigger('heCheng');
								'step 1'
								player.draw(3).set('yuanYin','teShuXingDong');
								'step 2'
								var dict={};
								for(var i=0;i<event.links.length;i++){
									if(event.links[i]=='baoShi'){
										dict['baoShi']=(dict['baoShi']||0)+1;
									}else if(event.links[i]=='shuiJing'){
										dict['shuiJing']=(dict['shuiJing']||0)+1;
									}
								}
								if(dict['baoShi']>0){
									var next=player.removeZhanJi('baoShi',dict['baoShi']);
								}
								if(dict['shuiJing']>0){
									var next=player.removeZhanJi('shuiJing',dict['shuiJing']);
								}
								'step 3'
								player.changeXingBei(1);
								'step 4'
								player.changeShiQi(-1,!player.side);
							},
						}
					},
					select:3,
					check:function(button,player){
						switch(button.link){
							case 'shuiJing':{
								return 2;
							}
							case 'baoShi':{
								return 1;
							}
						}
					}
				},
				ai:{
					order:function(item,player){
						var num=3.5;
						var shiQi=get.shiQi(!player.side);
						if(shiQi<=5){
							num+=(0.4*(5-shiQi));
							if(shiQi<=1) num+=10;
						}
						var xingBei=get.xingBei(player.side);
						if(xingBei+1>=game.xingBeiMax) num+=10;
						num+=(0.1*(get.zhanJi(player.side).length)-3);
						return num;
					},
					result:{
						player:function(player){
							if(player.countCards('h')==0) return 1;

                            var zhanJi=get.zhanJi(player.side);
							if(zhanJi.length>=4) return 1;
							if(!zhanJi.includes('水晶')) return 0;

							var num=0.3;
							num+=(0.2*(player.countEmptyCards()));

							var numx=Math.random();
							if(numx<=num) return 1;
							else return 0;
                        },
					},
					maixie:true,
				}
			},
			_tiLian:{
				subSkill:{
					baoShi:{
						intro:{
							name:'宝石',
							content:'mark',
						},
                        markimage:'image/card/xingShi/baoShi.png',
					},
					shuiJing:{
						intro:{
							name:'水晶',
							content:'mark',
						},
                        markimage:'image/card/xingShi/shuiJing.png',
					},
				},
				enable:'phaseUse',
				type:'teShu',
				filter:function(event,player){
					if(event.getParent('phaseUse').canTeShu==false) return false;
                    var nengLiang_num=player.countMark('_tiLian_baoShi')+player.countMark('_tiLian_shuiJing');
                    var empty_nengliang=player.getNengLiangLimit()-nengLiang_num;
					if(player.side==true){
						return game.hongZhanJi.length>=1&&empty_nengliang>=1;
					}else if(player.side==false){
						return game.lanZhanJi.length>=1&&empty_nengliang>=1;
					}
				},
				chooseButton:{
					dialog:function(event,player){
						var dialog=ui.create.dialog('提炼：选择星石','hidden');
						if(player.side==true){
							var list=game.hongZhanJi;
						}else if(player.side==false){
							var list=game.lanZhanJi;
						}
						var listx=[];
						for(var i=0;i<list.length;i++){
							listx.push([list[i],get.translation(list[i])]);
						}
						dialog.add([listx,'tdnodes']);
						return dialog;
						
					},
					backup:function(links,player){
						return{
							links:links,
							type:'teShu',
							content:function(){
								'step 0'
								event.links=lib.skill._tiLian_backup.links;
								event.trigger('tiLian');
								'step 1'
								for(var i=0;i<event.links.length;i++){
									if(event.links[i]=='baoShi'){
										player.addMark('_tiLian_baoShi');
										player.changeZhanJi('baoShi',-1);
									}else if(event.links[i]=='shuiJing'){
										player.addMark('_tiLian_shuiJing');
										player.changeZhanJi('shuiJing',-1);
									}
								}
							},
						}
					},
					select:function(){
						var player=_status.event.player;
						var nengLiang_num=player.countMark('_tiLian_baoShi')+player.countMark('_tiLian_shuiJing');
						if(player.getNengLiangLimit()-nengLiang_num==1){
							var range=[1,1];
						}else if(player.getNengLiangLimit()-nengLiang_num>=2){
							var range=[1,2];
						}
						return range;
					},
					check:function(button){
						var player=_status.event.player;
						if(player.hasSkillTag('baoShi')&&!player.hasSkillTag('shuiJing')){
							if(button.link=='baoShi') return 5;
							else return -1;
						}
						if(player.hasSkillTag('shuiJing')&&!player.hasSkillTag('baoShi')){
							if(button.link=='shuiJing') return 5;
							else return 2;
						}
						//既有水晶也有宝石
						return 2;

					}
				},
				ai:{
					order:function(item,player){
						var num=3.15;
						num+=(0.05*(player.getNengLiangLimit()-player.countNengLiangAll()));
						num+=(0.1*get.zhanJi(player.side).length);
						return num;
					},
					result:{
						player:function(player){
							if(!(player.hasSkillTag('baoShi')||player.hasSkillTag('shuiJing'))) return -1;
							
							var zhanJi=get.zhanJi(player.side);
							if(zhanJi.length<=1) return 0;

							if(player.hasSkillTag('shuiJing')&&!player.hasSkillTag('baoShi')){
								if(!zhanJi.includes('shuiJing')) return 0;
							}

							var num=player.getNengLiangLimit()-player.countNengLiangAll();
							if(num<=1) return 0;

							var numx=Math.random();
							if(numx<=0.5) return 1;
							else return 0;
						},
					},
				}
			},
			_gongJiXingShi:{//攻击获得星石
				trigger:{player:'gongJiMingZhong'},
				direct:true,
				firstDo:true,
				filter:function(event,player){
					var zhanJi=get.zhanJi(player.side);
					return zhanJi.length<game.zhanJiMax;
				},
				content:function(){
					if(trigger.yingZhan==true){
						player.changeZhanJi('shuiJing',1)
					}else{
						player.changeZhanJi('baoShi',1)
                    }
				},
			},
		},
		element:{
			content:{
				link: function () {
					const isLinked = player.isLinked();
					game.log(player, (isLinked ? "重置" : "横置"));
					game.broadcastAll(
						(player, isLinked) => {
							if (lib.config.background_audio) game.playAudio("effect", "link" + (isLinked ? "_clear" : ""));
							player.classList.remove("target");
							player.classList.toggle(get.is.linked2(player) ? "linked2" : "linked");
							ui.updatej(player);
							ui.updatem(player);
						},
						player,
						isLinked
					);
					game.addVideo("link", player, player.isLinked());
				},

				createTrigger: function () {
					"step 0";
					// console.log('triggering: ' + player.name+ ' \'s skill: ' + event.skill+' in ' + event.triggername)
					if (game.expandSkills(player.getSkills().concat(lib.skill.global)).includes(event.skill)) return;
					var info = get.info(event.skill);
					let hidden = player.hiddenSkills.slice(0);
					let invisible = player.invisibleSkills.slice(0);
					game.expandSkills(hidden);
					game.expandSkills(invisible);
					if (hidden.includes(event.skill)) {
						if (!info.silent && player.hasSkillTag("nomingzhi", false, null, true)) event.finish();
						else if (!info.direct && typeof info.cost !== "function") event.trigger("triggerHidden");
						else event.skillHidden = true;
					} else if (invisible.includes(event.skill)) event.trigger("triggerInvisible");
					else if (
						Object.keys(player.additionalSkills).every(i => {
							if (i.startsWith("hidden:")) return true;
							return !game.expandSkills(player.additionalSkills[i]).includes(event.skill);
						})
					) event.finish();
					"step 1";
					event.trigger("triggerSkill");//技能条件需要判断不是自身，既不是自身时返回false，避免嵌套
					"step 2";
					if (event.cancelled) return event.finish();
					var info = get.info(event.skill);
					if (event.revealed || info.forced) {
						event._result = { bool: true };
						return;
					}
					const checkFrequent = function (info) {
						if (player.hasSkillTag("nofrequent", false, event.skill)) return false;
						if (typeof info.frequent == "boolean") return info.frequent;
						if (typeof info.frequent == "function") return info.frequent(trigger, player, event.triggername, event.indexedData);
						if (info.frequent == "check" && typeof info.check == "function") return info.check(trigger, player);
						return false;
					};
					if (info.direct) {
						if (player.isUnderControl()) game.swapPlayerAuto(player);
						if (player.isOnline()) void 0;
						event._result = { bool: true };
						event._direct = true;
					} else if (typeof info.cost === "function") {
						if (checkFrequent(info)) event.frequentSkill = true;
						if (player.isUnderControl()) game.swapPlayerAuto(player);
						//创建cost事件
						var next = game.createEvent(`${event.skill}_cost`);
						next.player = player;
						if (event.frequentSkill) next.set("frequentSkill", event.skill);
						next.set("forceDie", true);
						next.set("includeOut", true);
						next._trigger = trigger;
						next.triggername = event.triggername;
						next.skillHidden = event.skillHidden;
						next.indexedData = event.indexedData;
						if (info.forceDie) next.forceDie = true;
						if (info.forceOut) next.includeOut = true;
						next.skill = event.skill;
						next.setContent(info.cost);
					} else {
						if (checkFrequent(info)) event.frequentSkill = true;
						var str;
						var check = info.check;
						if (info.prompt) str = info.prompt;
						else if (typeof info.logTarget == "string") str = get.prompt(event.skill, trigger[info.logTarget], player);
						else if (typeof info.logTarget == "function") {
							const logTarget = info.logTarget(trigger, player, event.triggername, event.indexedData);
							if (get.itemtype(logTarget).startsWith("player")) str = get.prompt(event.skill, logTarget, player);
						} else str = get.prompt(event.skill, null, player);
						if (typeof str == "function") str = str(trigger, player, event.triggername, event.indexedData);
			
						var next = player.chooseBool(str);
						if (event.frequentSkill) next.set("frequentSkill", event.skill);
						next.set("forceDie", true);
						next.set("includeOut", true);
						next.ai = () => !check || check(trigger, player, event.triggername, event.indexedData);
			
						if (typeof info.prompt2 == "function") next.set("prompt2", info.prompt2(trigger, player, event.triggername, event.indexedData));
						else if (typeof info.prompt2 == "string") next.set("prompt2", info.prompt2);
						else if (info.prompt2 != false) {
							if (lib.dynamicTranslate[event.skill]) next.set("prompt2", lib.dynamicTranslate[event.skill](player, event.skill));
							else if (lib.translate[event.skill + "_info"]) next.set("prompt2", lib.translate[event.skill + "_info"]);
						}
			
						if (trigger.skillwarn) {
							if (next.prompt2) next.set("prompt2", '<span class="thundertext">' + trigger.skillwarn + "。</span>" + next.prompt2);
							else next.set("prompt2", trigger.skillwarn);
						}
					}
					"step 3";
					var info = get.info(event.skill);
					if (result && result.control) result.bool = !result.control.includes("cancel");
					if (!result || !result.bool) return;
					var autodelay = info.autodelay;
					if (typeof autodelay == "function") autodelay = autodelay(trigger, player);
					if (autodelay && (info.forced || !event.isMine())) {
						if (typeof autodelay == "number") game.delayx(autodelay);
						else game.delayx();
					}
					"step 4";
					var info = get.info(event.skill);
					if (!result || !result.bool) {
						if (info.oncancel) info.oncancel(trigger, player);
						if (event.indexedData === true) {
							event.result = "cancelled";
						}
						return event.finish();
					}
					let targets = null;
					if (result.targets && result.targets.length > 0) {
						targets = result.targets.slice(0);
					} else if (info.logTarget) {
						if (typeof info.logTarget === "string") targets = trigger[info.logTarget];
						else if (typeof info.logTarget === "function") targets = info.logTarget(trigger, player, event.triggername, event.indexedData);
					}
					if (get.itemtype(targets) === "player") {
						targets = [targets];
					}
					if (info.popup != false && !info.direct && !("skill_popup" in result && !Boolean(result["skill_popup"]))) {
						const popup_info = typeof info.popup === "string" ? [event.skill, info.popup] : event.skill;
						const args = [trigger, player, event.triggername, event.indexedData, result];
						player.logSkill(popup_info, info.logLine === false ? false : targets, info.line, null, args);
					}
					var next = game.createEvent(event.skill);
					if (info.usable !== undefined) {
						player.addSkill("counttrigger");
						if (!player.storage.counttrigger) player.storage.counttrigger = {};
						if (!player.storage.counttrigger[event.skill]) player.storage.counttrigger[event.skill] = 1;
						else player.storage.counttrigger[event.skill]++;
					}
					next.player = player;
					next._trigger = trigger;
					next.triggername = event.triggername;
					next.setContent(info.content);
			
					next.skillHidden = event.skillHidden;
					if (info.forceDie) next.forceDie = true;
					if (info.forceOut) next.includeOut = true;
					//传入数据
					if (get.itemtype(targets) == "players") next.targets = targets.slice(0);
					if (get.itemtype(result.cards) === "cards") next.cards = result.cards.slice(0);
					//语法糖部分
					if ("cost_data" in result) next.cost_data = result.cost_data;
					next.indexedData = event.indexedData;
					"step 5";
					if (event.skill.startsWith("player_when_")) {
						player.removeSkill(event.skill);
						delete lib.skill[event.skill];
						delete lib.translate[event.skill];
					}
					if (!player._hookTrigger) return;
					if (
						player._hookTrigger.some(i => {
							const info = lib.skill[i].hookTrigger;
							return info && info.after && info.after(event, player, event.triggername);
						})
					)
						event.trigger("triggerAfter");
				},

				phase: function () {
					"step 0";
					//规则集中的“回合开始后③（处理“游戏开始时”的时机）”
					//提前phaseBefore时机解决“游戏开始时”时机和“一轮开始时”先后
					event.trigger("phaseBefore");
					"step 1";
					game.phaseNumber++;
					//初始化阶段列表
					if (!event.phaseList) {
						event.phaseList = [ "phaseUse"];
					}
					if (typeof event.num != "number") {
						event.num = 0;
					}
					//规则集中的“回合开始后①”，更新游戏轮数，触发“一轮游戏开始时”
					var isRound = false;
					if (lib.onround.every(i => i(event, player))) {
						isRound = _status.roundSkipped;
						if (_status.isRoundFilter) {
							isRound = _status.isRoundFilter(event, player);
						} else if (_status.seatNumSettled) {
							var seatNum = player.getSeatNum();
							if (seatNum != 0) {
								if (get.itemtype(_status.lastPhasedPlayer) != "player" || seatNum < _status.lastPhasedPlayer.getSeatNum()) isRound = true;
								_status.lastPhasedPlayer = player;
							}
						} else if (player == _status.roundStart) isRound = true;
						if (isRound) {
							delete _status.roundSkipped;
							game.roundNumber++;
							event._roundStart = true;
							game.updateRoundNumber();
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i].isOut() && game.players[i].outCount > 0) {
									game.players[i].outCount--;
									if (game.players[i].outCount == 0 && !game.players[i].outSkills) {
										game.players[i].in();
									}
								}
							}
							event.trigger("roundStart");
						}
					}
					_status.globalHistory.push({
						cardMove: [],
						custom: [],
						useCard: [],
						changeHp: [],
						everything: [],
					});
			
					var players = game.players.slice(0).concat(game.dead);
					for (var i = 0; i < players.length; i++) {
						var current = players[i];
						current.actionHistory.push({
							useCard: [],
							respond: [],
							skipped: [],
							lose: [],
							gain: [],
							sourceDamage: [],
							damage: [],
							custom: [],
							useSkill: [],
						});
						current.stat.push({ card: {}, skill: {} ,gongJi: {all:0,zhuDong:0,yingZhan:0} });
						if (isRound) {
							current.getHistory().isRound = true;
							current.getStat().isRound = true;
						}
					}
					if (isRound) {
						game.getGlobalHistory().isRound = true;
					}
					"step 2";
					//规则集中的“回合开始后②（1v1武将登场专用）”
					event.trigger("phaseBeforeStart");
					"step 3";
					//规则集中的“回合开始后④（卑弥呼〖纵傀〗的时机）”
					event.trigger("phaseBeforeEnd");
					"step 4";
					//规则集中的“回合开始后⑤”，进行翻面检测
					if (player.isTurnedOver() && !event._noTurnOver) {
						player.turnOver();
						player.phaseSkipped = true;
						var players = game.players.slice(0).concat(game.dead);
						for (var i = 0; i < players.length; i++) {
							var current = players[i];
							current.getHistory().isSkipped = true;
							current.getStat().isSkipped = true;
						}
						event.cancel();
					} else {
						player.phaseSkipped = false;
						player.getHistory().isMe = true;
						player.getStat().isMe = true;
					}
					"step 5";
					//规则集中的“回合开始后⑥”，更新“当前回合角色”
					while (ui.dialogs.length) {
						ui.dialogs[0].close();
					}
					player.phaseNumber++;
					game.broadcastAll(
						function (player, num, popup) {
							if (lib.config.glow_phase) {
								player.classList.add("glow_phase");
							}
							player.phaseNumber = num;
							_status.currentPhase = player;
							if (popup && lib.config.show_phase_prompt) player.popup("回合开始", null, false);
						},
						player,
						player.phaseNumber,
						!player.noPhaseDelay
					);
					_status.currentPhase = player;
					_status.discarded = [];
					game.syncState();
					game.addVideo("phaseChange", player);
					if (game.phaseNumber == 1) {
						if (lib.configOL.observe) {
							lib.configOL.observeReady = true;
							game.send("server", "config", lib.configOL);
						}
					}
					game.log('————————————————————');
					game.log(player, "的回合开始");
					player._noVibrate = true;
					player.ai.tempIgnore = [];
					if (ui.land && ui.land.player == player) {
						game.addVideo("destroyLand");
						ui.land.destroy();
					}
					"step 6";
					//规则集中的“回合开始后⑦”，国战武将明置武将牌
					event.trigger("phaseBeginStart");
					"step 7";
					//规则集中的“回合开始后⑨”，进行当先，化身等操作
					//没有⑧ 因为⑧用不到
					event.trigger("phaseBegin");
					//阶段部分
					"step 8";
					if (num < event.phaseList.length) {
						//规则集中没有的新时机 可以用来插入额外阶段啥的
						if (player.isIn()) event.trigger("phaseChange");
					} else event.goto(11);
					"step 9";
					if (player.isIn() && num < event.phaseList.length) {
						var phase = event.phaseList[num].split("|");
						event.currentPhase = phase[0];
						var next = player[event.currentPhase]();
						next.phaseIndex = num;
						if (phase.length > 1) {
							next._extraPhaseReason = phase[1];
						}
						if (event.currentPhase == "phaseDraw" || event.currentPhase == "phaseDiscard") {
							if (!player.noPhaseDelay) {
								if (player == game.me) {
									game.delay();
								} else {
									game.delayx();
								}
							}
						}
					}
					"step 10";
					if (event.currentPhase == "phaseUse") {
						game.broadcastAll(function () {
							if (ui.tempnowuxie) {
								ui.tempnowuxie.close();
								delete ui.tempnowuxie;
							}
						});
						delete player._noSkill;
					}
					event.num++;
					"step 11";
					if (event.num < event.phaseList.length) {
						event.goto(8);
					} else if (!event._phaseEndTriggered) {
						event._phaseEndTriggered = true;
						event.trigger("phaseEnd");
						event.redo();
					}
					"step 12";
					event.trigger("phaseAfter");
					"step 13";
					//删除当前回合角色 此时处于“不属于任何角色的回合”的阶段
					game.broadcastAll(function (player) {
						player.classList.remove("glow_phase");
						delete _status.currentPhase;
					}, player);
				},
				phaseUse:function(){
					"step 0";
					//xingBei设置
					player.storage.gongJiOrFaShu=1;
					player.storage.faShu=0;
					player.storage.gongJi=0;
					//判断是否有可启动技
					var skills=player.skills;
					for(var i=0;i<skills.length;i++){
						var info=get.info(skills[i]);
						var flag=false;
						if(info.type=='qiDong'){
							if(info.filter(event,player)) flag=true;
							if(flag) break;
						}
					}
					event.canQiDong=flag;

					event.firstAction=true;//首次行动

					const stat = player.getStat();
					for (let i in stat.skill) {
						let bool = false;
						const info = lib.skill[i];
						if (!info) continue;
						if (info.enable != undefined) {
							if (typeof info.enable == "string" && info.enable == "phaseUse") bool = true;
							else if (typeof info.enable == "object" && info.enable.includes("phaseUse")) bool = true;
						}
						if (bool) stat.skill[i] = 0;
					}
					for (let i in stat.card) {
						let bool = false;
						const info = lib.card[i];
						if (!info) continue;
						if (info.updateUsable == "phaseUse") stat.card[i] = 0;
					}
					"step 1";
					event.trigger("phaseUseBefore");
					"step 2";
					event.trigger("phaseUseBegin");
					"step 3";
					if (!event.logged) {
						game.log(player, "进入了出牌阶段");
						event.logged = true;
					}

					if(player.storage.gongJiOrFaShu>0){
						event.xingDong='gongJiOrFaShu';
						var next=player.gongJiOrFaShu().set('action',true).set('prompt','[攻击行动]或者[法术行动]');
					}else if(player.storage.faShu>0){
						event.xingDong='faShu';
						var next=player.faShu().set('action',true).set('prompt','法术行动');
					}else if(player.storage.gongJi>0){
						event.xingDong='gongJi';
						var next=player.gongJi().set('action',true).set('prompt','攻击行动');
					}
					if(next){
						if(!lib.config.show_phaseuse_prompt){
							next.set('prompt',false);
						}
						if(event.firstAction){
							next.set('type','phase');
							next.set('firstAction',event.firstAction);
							event.firstAction=false;
						}
					}

					"step 4";
					if(event.xingDong=='gongJiOrFaShu'){
						player.storage.gongJiOrFaShu--;
					}else if(event.xingDong=='faShu'){
						player.storage.faShu--;
					}else if(event.xingDong=='gongJi'){
						player.storage.gongJi--;
					}
					if(!event.skipped&&(player.storage.gongJiOrFaShu>0||player.storage.gongJi>0||player.storage.faShu>0)){
						event.goto(3);
					}
					"step 5";
					event.trigger("phaseUseEnd");
					"step 6";
					event.trigger("phaseUseAfter");
				},
				chooseToDiscard:function(){
					"step 0"
					if(event.autochoose()){
						event.result={
							bool:true,
							autochoose:true,
							cards:player.getCards(event.position),
							rawcards:player.getCards(event.position),
						}
						for(var i=0;i<event.result.cards.length;i++){
							if(!lib.filter.cardDiscardable(event.result.cards[i],player,event)){
								event.result.cards.splice(i--,1);
							}
						}
					}
					else{
						// &&!lib.filter.wuxieSwap(trigger)
						if(game.modeSwapPlayer&&!_status.auto&&player.isUnderControl()){
							game.modeSwapPlayer(player);
						}
						event.rangecards=player.getCards(event.position);
						for(var i=0;i<event.rangecards.length;i++){
							if(lib.filter.cardDiscardable(event.rangecards[i],player,event)){
								event.rangecards.splice(i--,1);
							}
							else{
								event.rangecards[i].uncheck('chooseToDiscard');
							}
						}
						var range=get.select(event.selectCard);
						if(event.isMine()){
							game.check();
							if(event.hsskill&&!event.forced&&_status.prehidden_skills.includes(event.hsskill)){
								ui.click.cancel();
								return;
							}
							game.pause();
							if(range[1]>1&&typeof event.selectCard!='function'){
								event.promptdiscard=ui.create.control('AI代选',function(){
									ai.basic.chooseCard(event.ai);
									if(_status.event.custom&&_status.event.custom.add.card){
										_status.event.custom.add.card();
									}
									for(var i=0;i<ui.selected.cards.length;i++){
										ui.selected.cards[i].updateTransform(true);
									}
								});
							}
							if(Array.isArray(event.dialog)){
								event.dialog=ui.create.dialog.apply(this,event.dialog);
								event.dialog.open();
								event.dialog.classList.add('noselect');
							}
							else if(event.prompt!=false){
								var str;
								if(typeof(event.prompt)=='string') str=event.prompt;
								else{
									str='请弃置';
									if(range[0]==range[1]) str+=get.cnNumber(range[0]);
									else if(range[1]==Infinity) str+='至少'+get.cnNumber(range[0]);
									else str+=get.cnNumber(range[0])+'至'+get.cnNumber(range[1]);
									str+='张';
									if(event.position=='h'||event.position==undefined) str+='手';
									if(event.position=='e') str+='装备';
									str+='牌';
								}
								event.dialog=ui.create.dialog(str);
								if(event.prompt2){
									event.dialog.addText(event.prompt2,event.prompt2.length<=20);
								}
								if(Array.isArray(event.selectCard)){
									event.promptbar=event.dialog.add('0/'+get.numStr(event.selectCard[1],'card'));
									event.custom.add.card=function(){
										_status.event.promptbar.innerHTML=
										ui.selected.cards.length+'/'+get.numStr(_status.event.selectCard[1],'card');
									}
								}
							}
							else if(get.itemtype(event.dialog)=='dialog'){
								event.dialog.style.display='';
								event.dialog.open();
							}
						}
						else if(event.isOnline()){
							event.send();
						}
						else{
							event.result='ai';
						}
					}
					"step 1"
					if(event.result=='ai'){
						game.check();
						if((ai.basic.chooseCard(event.ai)||forced)&&(!event.filterOk||event.filterOk())){
							ui.click.ok();
						}
						else if(event.skill){
							var skill=event.skill;
							ui.click.cancel();
							event._aiexclude.add(skill);
							event.redo();
							game.resume();
						}
						else{
							ui.click.cancel();
						}
					}
					if(event.rangecards){
						for(var i=0;i<event.rangecards.length;i++){
							event.rangecards[i].recheck('chooseToDiscard');
						}
					}
					"step 2"
					event.resume();
					if(event.promptdiscard){
						event.promptdiscard.close();
					}
					"step 3"
					if(event.result.bool&&event.result.cards&&event.result.cards.length&&
						!game.online&&event.autodelay&&!event.isMine()){
						if(typeof event.autodelay=='number'){
							game.delayx(event.autodelay);
						}
						else{
							game.delayx();
						}
					}
					"step 4"
					if(event.logSkill&&event.result.bool&&!game.online){
						if(typeof event.logSkill=='string'){
							player.logSkill(event.logSkill);
						}
						else if(Array.isArray(event.logSkill)){
							player.logSkill.apply(player,event.logSkill);
						}
					}
					if(!game.online){
						event.done=player.discard(event.result.cards);
						if(typeof event.delay=='boolean'){
							event.done.set('delay',event.delay);
						}
						if(event.baoPai==true){
							if(event.shiQiXiaJiang!=false){
								event.done.set('baoPai',true);
								if(event.yuanYin=='damage'){
									event.done.set('yuanYin','damage');
								}
								if(event.faShu){
									event.done.set('faShu',true);
								}else{
									event.done.set('faShu',false);
								}
								//传递士气最大变动值
								if(typeof event.shiQiMax=='number'){
									event.done.set('shiQiMax',event.shiQiMax);
								}
								if(event.source){
									event.done.set('source',event.source);
								}
							}
						}
						event.done.discarder=player;
					}
					if(event.dialog&&event.dialog.close) event.dialog.close();
				},
				useCard:function(){
					"step 0";
					if (!card) {
						console.log("err: no card", get.translation(event.player));
						event.finish();
						return;
					}
					if (!get.info(card, false).noForceDie) event.forceDie = true;
					if (cards.length) {
						var owner = get.owner(cards[0]) || player;
						var next = owner.lose(cards, "visible", ui.ordering).set("type", "use");
						var directDiscard = [];
						for (var i = 0; i < cards.length; i++) {
							if (!next.cards.includes(cards[i])) {
								directDiscard.push(cards[i]);
							}
						}
						if (directDiscard.length) game.cardsGotoOrdering(directDiscard);
					}
					//player.using=cards;
					var cardaudio = true;
					if (event.skill) {
						if (lib.skill[event.skill].audio) {
							cardaudio = false;
						}
						if (lib.skill[event.skill].log != false) {
							player.logSkill(event.skill, false, null, null, [event, event.player]);
						}
						if (get.info(event.skill).popname) {
							player.tryCardAnimate(card, event.card.name, "metal", true);
						}
					} else if (!event.nopopup) {
						if (lib.translate[event.card.name + "_pop"]) {
							player.tryCardAnimate(card, lib.translate[event.card.name + "_pop"], "metal");
						} else {
							player.tryCardAnimate(card, event.card.name, "metal");
						}
					}
					if (event.audio === false) {
						cardaudio = false;
					}
					if (cardaudio)
						game.broadcastAll(
							(player, card) => {
								game.playCardAudio(card, player);
							},
							player,
							card
						);
					event.id = get.id();
					if (!Array.isArray(event.excluded)) event.excluded = [];
					if (!Array.isArray(event.directHit)) event.directHit = [];
					if (typeof event.customArgs != "object" || typeof event.customArgs.default != "object") event.customArgs = { default: {} };
					if (typeof event.damageNum != "number") event.damageNum = get.info(card, false).damageNum || 2;
					if (typeof event.effectCount != "number") event.effectCount = get.info(card, false).effectCount || 1;
					event.effectedCount = 0;
					if (event.oncard) {
						event.oncard(event.card, event.player);
					}
					

					player.actionHistory[player.actionHistory.length - 1].useCard.push(event);
					game.getGlobalHistory().useCard.push(event);
					if (event.addCount !== false) {
						if (player.stat[player.stat.length - 1].card[card.name] == undefined) {
							player.stat[player.stat.length - 1].card[card.name] = 1;
						} else {
							player.stat[player.stat.length - 1].card[card.name]++;
						}
					}
					if (event.skill) {
						if (player.stat[player.stat.length - 1].skill[event.skill] == undefined) {
							player.stat[player.stat.length - 1].skill[event.skill] = 1;
						} else {
							player.stat[player.stat.length - 1].skill[event.skill]++;
						}
						var sourceSkill = get.info(event.skill).sourceSkill;
						if (sourceSkill) {
							if (player.stat[player.stat.length - 1].skill[sourceSkill] == undefined) {
								player.stat[player.stat.length - 1].skill[sourceSkill] = 1;
							} else {
								player.stat[player.stat.length - 1].skill[sourceSkill]++;
							}
						}
					}

					if (event.animate != false) {
						if (event.throw !== false) {
							player.$throw(cards);
							if (lib.config.sync_speed && cards[0] && cards[0].clone) {
								var waitingForTransition = get.time();
								event.waitingForTransition = waitingForTransition;
								cards[0].clone.listenTransition(function () {
									if (_status.waitingForTransition == waitingForTransition && _status.paused) {
										game.resume();
									}
									delete event.waitingForTransition;
								});
							}
						}
					}

					//记录原始目标，用于后面判断
					event.oriTargets = targets.slice(0);
					"step 1";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						event.canYingZhan=true;
						event.canShengGuang=true;
						event.canShengDun=true;
						event.trigger("gongJiQian");
					}else if(type=='faShu' && event.oriTargets.length>0){
						event.trigger("faShuQian");
					}else if(card.name=='shengGuang'){
						event.trigger("shengGuang");
					}
					'step 2';
					if (event.animate != false && event.line != false && !event.hideTargets) {
						var config = {};
						var nature = get.duYouList(card)[0];
						if (nature || (card.classList && card.classList.contains(nature))) config.color = nature;
						if (event.addedTarget) {
							player.line2(targets.concat(event.addedTargets), config);
						} else if (get.info(card, false).multitarget && targets.length > 1 && !get.info(card, false).multiline) {
							player.line2(targets, config);
						} else {
							player.line(targets, config);
						}
					}
					if (targets.length && !event.hideTargets) {
						//xingbei
						var yingZhan_str='';
						if(get.type(card)=='gongJi'){
							if(event.yingZhan==true){
								yingZhan_str='，应战攻击';
							}else{
								event.yingZhan=false;
								yingZhan_str='，主动攻击';
							}
							//记录攻击次数
							player.stat[player.stat.length - 1].gongJi.all++;
							if (event.yingZhan==true) {
								player.stat[player.stat.length - 1].gongJi.yingZhan++;
							} else {
								player.stat[player.stat.length - 1].gongJi.zhuDong++;
							}
						}

						var str=targets;
						if (cards.length && !card.isCard) {
							if (event.addedTarget) {
								game.log(player, "对", str, "使用了", card, "（", cards, "，指向", event.addedTargets, "）");
							} else {
								game.log(player, "对", str, "使用了", card, "（", cards, "）");
							}
						} else {
							if (event.addedTarget) {
								game.log(player, "对", str, "使用了", card, "（指向", event.addedTargets, "）");
							} else {
								game.log(player, "对", str, "使用了", card,yingZhan_str);
							}
						}
					} else {
						if (cards.length && !card.isCard) {
							if (event.addedTarget) {
								game.log(player, "使用了", card, "（", cards, "，指向", event.addedTargets, "）");
							} else {
								game.log(player, "使用了", card, "（", cards, "）");
							}
						} else {
							if (event.addedTarget) {
								game.log(player, "使用了", card, "（指向", event.addedTargets, "）");
							} else {
								game.log(player, "使用了", card);
							}
						}
					}

					game.logv(player, [card, cards], targets);
					"step 3";
					event.trigger("daChuPai");
					"step 4";
					event.sortTarget = function (animate, sort) {
						var info = get.info(card, false);
						if (num == 0 && targets.length > 1) {
							if (!info.multitarget) {
								if (!event.fixedSeat && !sort) {
									targets.sortBySeat(_status.currentPhase || player);
								}
								if (animate)
									for (var i = 0; i < targets.length; i++) {
										targets[i].addTempClass("target");
									}
							} else if (animate) {
								for (var i = 0; i < targets.length; i++) {
									targets[i].addTempClass("target");
								}
							}
						}
					};
					event.sortTarget();
					event.getTriggerTarget = function (list1, list2) {
						var listx = list1.slice(0).sortBySeat(_status.currentPhase || player);
						for (var i = 0; i < listx.length; i++) {
							if (get.numOf(list2, listx[i]) < get.numOf(listx, listx[i])) return listx[i];
						}
						return null;
					};
					"step 5";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						if(!event.gongJiShiTargets) event.gongJiShiTargets=[];
						var target=event.getTriggerTarget(targets,event.gongJiShiTargets);
						if(target){
							event.gongJiShiTargets.push(target);
							var next=game.createEvent('gongJiShi',false);
							next.setContent('emptyEvent');
							next.targets=targets;
							next.target=target;
							next.card=card;
							next.cards=cards;
							next.player=player;
							next.skill=event.skill;
							next.excluded=event.excluded;
							next.directHit=event.directHit;
							next.customArgs=event.customArgs;
							if(event.forceDie) next.forceDie=true;
							//xingBie
							next.yingZhan=event.yingZhan;
							event.redo();
						}
					}
					"step 6";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						if(get.xiBie(card)=='an') event.canYingZhan=false;//暗灭无法应战
						event.trigger("gongJiSheZhi");
					}
					"step 7";
					var type=get.type(card);
					var name=get.name(card);
					if((type=='gongJi' || name=='moDan') && event.oriTargets.length>0){
						if(!event.shouDaoGongJiTargets) event.shouDaoGongJiTargets=[];
						var target=event.getTriggerTarget(targets,event.shouDaoGongJiTargets);
						if(target){
							event.shouDaoGongJiTargets.push(target);
							if(type=='gongJi'){
								var next=game.createEvent('shouDaoGongJi',false);
							}else if(name=='moDan'){
								var next=game.createEvent('shouDaoMoDan',false);
							}
							next.setContent('emptyEvent');
							next.targets=targets;
							next.target=target;
							next.card=card;
							next.cards=cards;
							next.player=player;
							next.skill=event.skill;
							next.excluded=event.excluded;
							next.directHit=event.directHit;
							next.customArgs=event.customArgs;
							if(event.forceDie) next.forceDie=true;
							//xingBie
							if(type=='gongJi'){
								next.yingZhan=event.yingZhan;
								next.canYingZhan=event.canYingZhan;
								next.canShengGuang=event.canShengGuang;
								next.canShengDun=event.canShengDun;
							}
							event.redo();
						}
					}
					"step 8";
					var info = get.info(card, false);
					if (!info.nodelay && event.animate != false) {
						if (event.delayx !== false) {
							if (event.waitingForTransition) {
								_status.waitingForTransition = event.waitingForTransition;
								game.pause();
							} else {
								game.delayx();
							}
						}
					}
					"step 9";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						if(!event.gongJiMingZhongTargets) event.gongJiMingZhongTargets=[];
						var target=event.getTriggerTarget(targets,event.gongJiMingZhongTargets);
						if(target){
							event.gongJiMingZhongTargets.push(target);
							var next=game.createEvent('gongJiMingZhong',false);
							next.setContent('emptyEvent');
							next.targets=targets;
							next.target=target;
							next.card=card;
							next.cards=cards;
							next.player=player;
							next.skill=event.skill;
							next.excluded=event.excluded;
							next.directHit=event.directHit;
							next.customArgs=event.customArgs;
							if(event.forceDie) next.forceDie=true;
							//xingBie
							next.yingZhan=event.yingZhan;
							event.redo();
						}
					}
					"step 10";
					
					"step 11";
					if (event.all_excluded) return;
					event.effectedCount++;
					event.num = 0;
					var info = get.info(card, false);
					if (info.contentBefore) {
						var next = game.createEvent(card.name + "ContentBefore");
						next.setContent(info.contentBefore);
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = event.skill;
						next.type = "precard";
						if (event.forceDie) next.forceDie = true;
					} else if (info.reverseOrder && get.is.versus() && targets.length > 1) {
						var next = game.createEvent(card.name + "ContentBefore");
						next.setContent("reverseOrder");
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = event.skill;
						next.type = "precard";
						if (event.forceDie) next.forceDie = true;
					} else if (info.singleCard && info.filterAddedTarget && event.addedTargets && event.addedTargets.length < targets.length) {
						var next = game.createEvent(card.name + "ContentBefore");
						next.setContent("addExtraTarget");
						next.target = target;
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = event.skill;
						next.type = "precard";
						next.addedTarget = event.addedTarget;
						next.addedTargets = event.addedTargets;
						if (event.forceDie) next.forceDie = true;
					}
					"step 12";
					if (event.all_excluded) return;
					var info = get.info(card, false);
					if (num == 0 && targets.length > 1) {
						event.sortTarget(true, true);
					}
					if (targets[num] && targets[num].isDead()) return;
					if (targets[num] && targets[num].isOut()) return;
					if (targets[num] && targets[num].removed) return;
					if (targets[num] && info.ignoreTarget && info.ignoreTarget(card, player, targets[num])) {
						var next = game.createEvent("useCardToIgnored", false);
						next.setContent("emptyEvent");
						next.targets = targets;
						next.target = targets[num];
						next.num = num;
						next.card = card;
						next.cards = cards;
						next.player = player;
						return;
					}
					if (targets.length == 0 && !info.notarget) return;
					if (targets[num] && event.excluded.includes(targets[num])) {
						var next = game.createEvent("useCardToExcluded", false);
						next.setContent("emptyEvent");
						next.targets = targets;
						next.target = targets[num];
						next.num = num;
						next.card = card;
						next.cards = cards;
						next.player = player;
						return;
					}
					var next = game.createEvent(card.name);
					next.setContent(info.content);
					next.targets = targets;
					next.card = card;
					next.cards = cards;
					next.player = player;
					next.num = num;
					next.type = "card";
					next.skill = event.skill;
					next.multitarget = info.multitarget;
					next.preResult = event.preResult;
					next.damageNum = event.damageNum;
					if (event.forceDie) next.forceDie = true;
					if (event.addedTargets) {
						next.addedTargets = event.addedTargets;
						next.addedTarget = event.addedTargets[num];
						next._targets = event._targets;
					}
					if (info.targetDelay === false) {
						event.targetDelay = false;
					}
					next.target = targets[num];
					for (var i in event.customArgs.default) next[i] = event.customArgs.default[i];
					if (next.target && event.customArgs[next.target.playerid]) {
						var customArgs = event.customArgs[next.target.playerid];
						for (var i in customArgs) next[i] = customArgs[i];
					}
					if (next.target && event.directHit.includes(next.target)) next.directHit = true;
					if (next.target && !info.multitarget) {
						if (num == 0 && targets.length > 1) {
							// var ttt=next.target;
							// setTimeout(function(){ttt.addTempClass('target');},0.5*lib.config.duration);
						} else {
							next.target.addTempClass("target");
						}
					}
					if (!info.nodelay && num > 0) {
						if (event.targetDelay !== false) {
							game.delayx(0.5);
						}
					}
					"step 13";
					if (event.all_excluded) return;
					if (!get.info(event.card, false).multitarget && num < targets.length - 1 && !event.cancelled) {
						event.num++;
						event.goto(12);
					}
					"step 14";
					if (event.all_excluded) return;
					if (get.info(card, false).contentAfter) {
						var next = game.createEvent(card.name + "ContentAfter");
						next.setContent(get.info(card, false).contentAfter);
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = event.skill;
						next.preResult = event.preResult;
						next.type = "postcard";
						if (event.forceDie) next.forceDie = true;
					}
					"step 15";
					if (event.all_excluded) return;
					if (event.effectedCount < event.effectCount) {
						if (document.getElementsByClassName("thrown").length) {
							if (event.delayx !== false && get.info(event.card, false).finalDelay !== false) game.delayx();
						}
						event.goto(11);
					}
					"step 16";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						event.trigger("gongJiJieShu");
					}else if(type=='faShu' && event.oriTargets.length>0){
						event.trigger("faShuJieShu");
					}
					"step 17";
					var type=get.type(card);
					if(type=='gongJi' && event.oriTargets.length>0){
						event.trigger("gongJiHou");
					}else if(type=='faShu' && event.oriTargets.length>0){
						event.trigger("faShuHou");
					}
					"step 18";
					if (event.postAi) {
						event.player.logAi(event.targets, event.card);
					}
					if (event._result) {
						event.result = event._result;
					}
					//delete player.using;
					if (document.getElementsByClassName("thrown").length) {
						if (event.delayx !== false && get.info(event.card, false).finalDelay !== false) game.delayx();
					} else {
						event.finish();
					}
				},
				useSkill:function(){
					"step 0"
					var info=get.info(event.skill);
					if(!info.noForceDie) event.forceDie=true;
					if(!info.noForceOut) event.includeOut=true;
					event._skill=event.skill;
					game.trySkillAudio(event.skill,player);
					var checkShow=player.checkShow(event.skill);
					if(info.useCard&&!info.viewAs){
						player.useCard(cards);
					}else if(info.discard!=false&&info.lose!=false&&!info.viewAs){
						player.discard(cards).delay=false;
						if(lib.config.low_performance){
							event.discardTransition=true;
						}
					}
					else{
						if(info.lose!=false){
							if(info.losetrigger==false){
								var losecard=player.lose(cards,ui.special)._triggered=null;
							}
							else{
								var losecard=player.lose(cards,ui.special);
								if(info.visible) losecard.visible=true;
								if(info.loseTo) losecard.position=ui[info.loseTo];
								if(info.insert) losecard.insert_card=true;
								if(losecard.position==ui.special&&info.toStorage) losecard.toStorage=true;
							}
						}
						if(!info.prepare&&info.viewAs){
							player.$throw(cards);
							if(losecard) losecard.visible=true;
							if(lib.config.sync_speed&&cards[0]&&cards[0].clone){
								var waitingForTransition=get.time();
								event.waitingForTransition=waitingForTransition;
								cards[0].clone.listenTransition(function(){
									if(_status.waitingForTransition==waitingForTransition&&_status.paused){
										game.resume();
									}
									delete event.waitingForTransition;
								});
							}
						}
					}
					if(info.line!=false&&targets.length){
						var config={};
						if(get.is.object(info.line)) config=info.line;
						else if(info.line=='fire'){
							config.color='fire';
						}
						else if(info.line=='thunder'){
							config.color='thunder';
						}
						else if(info.line===undefined||info.line=='green'){
							config.color='green';
						}
						if(info.multitarget&&!info.multiline&&targets.length>1){
							player.line2(targets,config);
						}
						else{
							player.line(targets,config);
						}
					}
					/*
					var str='';
					if(targets&&targets.length&&info.log!='notarget'){
						str+='对<span class="bluetext">'+(targets[0]==player?'自己':get.translation(targets[0]));
						for(var i=1;i<targets.length;i++){
							str+='、'+(targets[i]==player?'自己':get.translation(targets[i]));
						}
						str+='</span>'
					}
					str+='发动了';
					*/
					if(!info.direct&&info.log!==false){
						if(targets.length){
							game.log(player,'对',targets,'发动了','【'+get.skillTranslation(skill,player)+'】');
						}else{
							game.log(player,'发动了','【'+get.skillTranslation(skill,player)+'】');
						}
						if(info.logv!==false) game.logv(player,skill,targets);
						player.trySkillAnimate(skill,skill,checkShow);
					}
					if(event.addCount!=false){
						if(player.stat[player.stat.length-1].skill[skill]==undefined){
							player.stat[player.stat.length-1].skill[skill]=1;
						}
						else{
							player.stat[player.stat.length-1].skill[skill]++;
						}
						var sourceSkill=get.info(skill).sourceSkill;
						if(sourceSkill){
							if(player.stat[player.stat.length-1].skill[sourceSkill]==undefined){
								player.stat[player.stat.length-1].skill[sourceSkill]=1;
							}
							else{
								player.stat[player.stat.length-1].skill[sourceSkill]++;
							}
						}
					}
					if(player.stat[player.stat.length-1].allSkills==undefined){
						player.stat[player.stat.length-1].allSkills=1;
					}
					else{
						player.stat[player.stat.length-1].allSkills++;
					}


					if(info.prepare){
						switch(info.prepare){
							case 'give':if(losecard) losecard.visible=true;player.$give(cards,targets[0]);break;
							case 'give2':player.$give(cards.length,targets[0]);break;
							case 'throw':if(losecard) losecard.visible=true;player.$throw(cards);break;
							case 'throw2':player.$throw(cards.length);break;
							case 'useCard':player.useCard(cards);break;
							case 'showCards':player.showCards(cards);break;
							default:info.prepare(cards,player,targets);
						}
					}
					if(info.round){
						var roundname=skill+'_roundcount';
						player.storage[roundname]=game.roundNumber;
						player.syncStorage(roundname);
						player.markSkill(roundname);
					}
					var name=event.skill;
					var players=player.getSkills(false,false,false);
					var equips=player.getSkills('e');
					var global=lib.skill.global.slice(0);
					var logInfo={
						skill:name,
						targets:targets,
						event:_status.event,
					};
					if(info.sourceSkill){
						logInfo.sourceSkill=info.sourceSkill;
						if(global.includes(info.sourceSkill)){
							logInfo.type='global';
						}
						else if(players.includes(info.sourceSkill)){
							logInfo.type='player';
						}
						else if(equips.includes(info.sourceSkill)){
							logInfo.type='equip';
						}
					}
					else{
						if(global.includes(name)){
							logInfo.sourceSkill=name;
							logInfo.type='global';
						}
						else if(players.includes(name)){
							logInfo.sourceSkill=name;
							logInfo.type='player';
						}
						else if(equips.includes(name)){
							logInfo.sourceSkill=name;
							logInfo.type='equip';
						}
						else{
							var bool=false;
							for(var i of players){
								var expand=[i];
								game.expandSkills(expand);
								if(expand.includes(name)){
									bool=true;
									logInfo.sourceSkill=i;
									logInfo.type='player';
									break;
								}
							}
							if(!bool){
								for(var i of players){
									var expand=[i];
									game.expandSkills(expand);
									if(expand.includes(name)){
										logInfo.sourceSkill=i;
										logInfo.type='equip';
										break;
									}
								}
							}
						}
					}
					event.sourceSkill=logInfo.sourceSkill;
					event.type=logInfo.type;
					player.getHistory('useSkill').push(logInfo);
					event.trigger('useSkill');
					"step 1"
					var info=get.info(event.skill);
					if(info&&info.contentBefore){
						var next=game.createEvent(event.skill+'ContentBefore');
						next.setContent(info.contentBefore);
						next.targets=targets;
						next.cards=cards;
						next.player=player;
						if(event.forceDie) next.forceDie=true;
						if(event.includeOut) next.includeOut=true;
					}
					"step 2"
					if(!event.skill){
						console.log('error: no skill',get.translation(event.player),event.player.getSkills());
						if(event._skill){
							event.skill=event._skill;
							console.log(event._skill);
						}
						else{
							event.finish();
							return;
						}
					}
					var info=get.info(event.skill);
					if(targets[num]&&targets[num].isDead()||
						targets[num]&&targets[num].isOut()||
						targets[num]&&targets[num].removed){
						if(!info.multitarget&&num<targets.length-1){
							event.num++;
							event.redo();
						}
						return;
					}
					var next=game.createEvent(event.skill);
					next.setContent(info.content);
					next.targets=targets;
					next.cards=cards;
					next.player=player;
					next.num=num;
					next.multitarget=info.multitarget;
					if(num==0&&next.targets.length>1){
						if(!info.multitarget){
							lib.tempSortSeat=player;
							targets.sort(lib.sort.seat);
							delete lib.tempSortSeat;
						}
						for(var i=0;i<targets.length;i++){
							targets[i].addTempClass('target');
						}
					}
					next.target=targets[num];
					if(event.forceDie) next.forceDie=true;
					if(event.includeOut) next.includeOut=true;
					if(next.target&&!info.multitarget){
						if(num==0&&targets.length>1){
							// var ttt=next.target;
							// setTimeout(function(){ttt.animate('target');},0.5*lib.config.duration);
						}
						else{
							next.target.addTempClass('target');
						}
					}
					if(num==0){
						if(typeof info.delay=='number') game.delay(info.delay);
						else if(info.delay!==false&&info.delay!==0){
							if(event.waitingForTransition){
								_status.waitingForTransition=event.waitingForTransition;
								game.pause();
							}
							else{
								game.delayx()
							}
						}
					}
					else game.delayx(0.5);
					if(!info.multitarget&&num<targets.length-1){
						event.num++;
						event.redo();
					}
					"step 3"
					var info=get.info(event.skill);
					if(info&&info.contentAfter){
						var next=game.createEvent(event.skill+'ContentAfter');
						next.setContent(info.contentAfter);
						next.targets=targets;
						next.cards=cards;
						next.player=player;
						if(event.forceDie) next.forceDie=true;
						if(event.includeOut) next.includeOut=true;
					}
					"step 4"
					if(player.getStat().allSkills>200){
						player._noSkill=true;
						console.log(player.name,event.skill);
					}
					if(document.getElementsByClassName('thrown').length){
						if(event.skill&&get.info(event.skill).delay!==false&&get.info(event.skill).delay!==0) game.delayx();
					}
					else{
						event.finish();
					}
					"step 5"
					ui.clear();
				},
				draw:function(){
					'step 0'
					event.trigger('moPaiQian');
					'step 1'
					if(typeof event.minnum=='number'&&num<event.minnum){
						num=event.minnum;
					}
					if(event.drawDeck){
						if(event.drawDeck>num){
							event.drawDeck=num;
						}
						num-=event.drawDeck;
					}
					if(event.log!=false){
						if(num>0){
							if(event.bottom) game.log(player,'从牌堆底摸了'+num+'张牌');
							else game.log(player,'摸了'+num+'张牌');
						}
						if(event.drawDeck){
							game.log(player,'从牌库中获得了'+event.drawDeck+'张牌');
						}
					}
					var cards;
					if(num>0){
						if(event.bottom) cards=get.bottomCards(num);
						else if(player.getTopCards) cards=player.getTopCards(num);
						else cards=get.cards(num);
					}
					else{
						cards=[];
					}
					if(event.drawDeck){
						cards=cards.concat(player.getDeckCards(event.drawDeck));
					}
					if(event.animate!=false){
						if(event.visible){
							var next=player.gain(cards,'gain2');
							if(event.bottom) game.log(player,'从牌堆底摸了'+num+'张牌（',cards,'）');
							else game.log(player,'摸了'+num+'张牌（',cards,'）');
						}
						else{
							var next=player.gain(cards,'draw');
							if(event.yuanYin=='damage'){
								next.set('yuanYin','damage')
								if(event.faShu===true){
									next.set('faShu',true);
								}else{
									next.set('faShu',false)
								}
							}
							if(event.shiQiXiaJiang==false){
								next.set('shiQiXiaJiang',false);
							}else{
								next.set('shiQiXiaJiang',true);
							}
							//传递士气最大变动值
							if(typeof event.shiQiMax=='number'){
								next.set('shiQiMax',event.shiQiMax);
							}
							
						}
					}
					else{
						var next=player.gain(cards);
						if(event.$draw){
							player.$draw(cards.length);
						}
					}
					//如果有来源，则传递来源
					if(source){
						next.set('source',source);
					}
					if(event.gaintag) next.gaintag.addArray(event.gaintag);
					event.result=cards;
					'step 2'
					event.trigger('moPaiJiShu');
					'step 3'
					event.trigger('moPaiHou');
				},
				discard:function(){
					"step 0"
					//game.log(player,'弃置了',cards);
					if(event.gaiPai){//移除了盖牌日志
						let name=get.translation(event.gaiPai);
						game.log(player,'移除了',cards.length,'张','【'+name+'】');
					}else{
						game.log(player,'弃置了',cards.length,'张牌');//星杯暗置弃牌日志
					}
					//event.done=player.lose(cards,event.position,'visible');
					event.done=player.lose(cards,event.position);
					event.done.type='discard';
					if(event.discarder) event.done.discarder=event.discarder;
					"step 1"
					event.trigger('discard');
					'step 2'
					if(event.baoPai==true){
						if(event.shiQiXiaJiang!=false){
							var next=player.changeShiQi(-cards.length).set('baoPai',true).set('cards',cards);
							if(event.yuanYin=='damage'){
								next.set('yuanYin','damage');
								if(event.faShu){
									next.set('faShu',true);
								}else{
									next.set('faShu',false)
								}
							}
							//传递士气最大变动值
							if(typeof event.shiQiMax=='number'){
								next.set('shiQiMax',event.shiQiMax);
							}
							if(event.source){
								next.set('source',event.source);
							}
						}
					}
				},
				loseToDiscardpile:function(){
					"step 0"
					if(event.log!=false) game.log(player,'将',cards,'置入了弃牌堆');
					var next=player.lose(cards,event.position);
					if(event.insert_index) next.insert_index=event.insert_index;
					if(event.insert_card) next.insert_card=true;
					if(!event.blank) next.visible=true;
					next.type='loseToDiscardpile';
					event.done=next;
					"step 1"
					event.trigger('loseToDiscardpile');
				},
				damage:function(){
					"step 0"
					event.forceDie=true;
					event.trigger('zaoChengShangHai');
					'step 1'
					event.trigger('shouDaoShangHai');
					var str=`${num}点${event.faShu?'法术':'攻击'}伤害`;
					game.log(player,'受到',source,str);
					"step 2"
					//检测治疗触发器是否能触发
					if(event.canZhiLiao!=false&&event.diXiao!=false){
						event.canZhiLiao=true;
					}
					if(event.canZhiLiao&&player.zhiLiao>0){
						var next=game.createEvent('zhiLiao',false);
						next.setContent('emptyEvent');
						next.source=source;
						next.card=card;
						next.cards=cards;
						next.player=player;
						next.faShu=event.faShu;
						next.num=num;
					}
					"step 3"
					event.trigger('chanShengShangHai');
					"step 4"
					event.trigger('chengShouShangHai');
					"step 5"
					game.broadcastAll(function(num){
                        if(lib.config.background_audio) game.playAudio('effect','damage'+(num>2?'2':''));
                    },num);

					var str=`${num}点${event.faShu?'法术':'攻击'}伤害`;
					game.log(player,'承受',source,str);
					if(player.stat[player.stat.length-1].damaged==undefined){
						player.stat[player.stat.length-1].damaged=num;
					}
					else{
						player.stat[player.stat.length-1].damaged+=num;
					}
					if(source){
						source.getHistory('sourceDamage').push(event);
						if(source.stat[source.stat.length-1].damage==undefined){
							source.stat[source.stat.length-1].damage=num;
						}
						else{
							source.stat[source.stat.length-1].damage+=num;
						}
					}
					player.getHistory('damage').push(event);

					if(!event.unreal){
						var next=player.draw(num,source).set('yuanYin','damage');
						if(event.faShu){
							next.set('faShu',true);
						}else{
							next.set('faShu',false);
						}

						if(event.shiQiXiaJiang==false){
							next.set('shiQiXiaJiang',false);
						}else{
							next.set('shiQiXiaJiang',true);
						}
						//传递士气最大变动值
						if(typeof event.shiQiMax=='number'){
							next.set('shiQiMax',event.shiQiMax);
						}
					}
					if(event.animate!==false){
						player.$damage(source);
					}
					"step 6"
					if(source&&lib.config.border_style=='auto'){
						var dnum=0;
						for(var j=0;j<source.stat.length;j++){
							if(source.stat[j].damage!=undefined) dnum+=source.stat[j].damage;
						}
						if(dnum>=2){
							if(lib.config.autoborder_start=='silver'){
								dnum+=4;
							}
							else if(lib.config.autoborder_start=='gold'){
								dnum+=8;
							}
						}
						if(lib.config.autoborder_count=='damage'){
							source.node.framebg.dataset.decoration='';
							if(dnum>=10){
								source.node.framebg.dataset.auto='gold';
								if(dnum>=12) source.node.framebg.dataset.decoration='gold';
							}
							else if(dnum>=6){
								source.node.framebg.dataset.auto='silver';
								if(dnum>=8) source.node.framebg.dataset.decoration='silver';
							}
							else if(dnum>=2){
								source.node.framebg.dataset.auto='bronze';
								if(dnum>=4) source.node.framebg.dataset.decoration='bronze';
							}
							if(dnum>=2){
								source.classList.add('topcount');
							}
						}
						else if(lib.config.autoborder_count=='mix'){
							source.node.framebg.dataset.decoration='';
							switch(source.node.framebg.dataset.auto){
								case 'bronze':if(dnum>=4) source.node.framebg.dataset.decoration='bronze';break;
								case 'silver':if(dnum>=8) source.node.framebg.dataset.decoration='silver';break;
								case 'gold':if(dnum>=12) source.node.framebg.dataset.decoration='gold';break;
							}
						}
					}
					"step 7"
					event.trigger('chengShouShangHaiHou');
					'step 8'
					event.trigger('shouDaoShangHaiHou');
					'step 9'
					event.trigger('shangHaiJieSuanHou');
				},
				gain:function(){
					"step 0"
					if(event.animate=='give') event.visible=true;
					if(cards){
						var map={};
						for(var i of cards){
							var owner=get.owner(i,'judge');
							if(owner&&(owner!=player||get.position(i)!='h')){
								var id=owner.playerid;
								if(!map[id]) map[id]=[[],[],[]];
								map[id][0].push(i);
								var position=get.position(i);
								if(position=='h') map[id][1].push(i);
								else map[id][2].push(i);
							}
							else if(!event.updatePile&&get.position(i)=='c') event.updatePile=true;
						}
						event.losing_map=map;
						for(var i in map){
							var owner=(_status.connectMode?lib.playerOL:game.playerMap)[i];
							var next=owner.lose(map[i][0],ui.special).set('type','gain').set('forceDie',true).set('getlx',false);
							if(event.visible==true) next.visible=true;
							event.relatedLose=next;
						}
					}
					else{
						event.goto(4);
					}
					"step 1"
					for(var i=0;i<cards.length;i++){
						if(cards[i].destroyed){
							if(player.hasSkill(cards[i].destroyed)){
								delete cards[i].destroyed;
							}
							else{
								cards.splice(i--,1);
							}
						}
						else if(event.losing_map){
							for(var id in event.losing_map){
								if(event.losing_map[id][0].includes(cards[i])){
									var source=(_status.connectMode?lib.playerOL:game.playerMap)[id];
									var hs=source.getCards('hejsx');
									if(hs.includes(cards[i])){
										cards.splice(i--,1);
									}
								}
							}
						}
					}
					if(cards.length==0){
						event.finish();
						return;
					}
					player.getHistory('gain').push(event);
					//if(event.source&&event.delay!==false) game.delayx();
					"step 2"
					if(player.getStat().gain==undefined){
						player.getStat().gain=cards.length;
					}
					else{
						player.getStat().gain+=cards.length;
					}
					"step 3"
					var sort;
					var frag1=document.createDocumentFragment();
					var frag2=document.createDocumentFragment();
					var hs=player.getCards('hs');
					for(var i=0;i<cards.length;i++){
						if(hs.includes(cards[i])){
							cards.splice(i--,1);
						}
					}
					for(var num=0;num<cards.length;num++){
						sort=lib.config.sort_card(cards[num]);
						if(lib.config.reverse_sort) sort=-sort;
						cards[num].fix();
						cards[num].style.transform='';
						cards[num].addGaintag(event.gaintag);
						if(_status.discarded){
							_status.discarded.remove(cards[num]);
						}
						// cards[num].vanishtag.length=0;
						for(var num2=0;num2<cards[num].vanishtag.length;num2++){
							if(cards[num].vanishtag[num2][0]!='_'){
								cards[num].vanishtag.splice(num2--,1);
							}
						}
						if(player==game.me){
							cards[num].classList.add('drawinghidden');
						}
						if(get.is.singleHandcard()||sort>1) frag1.appendChild(cards[num]);
						else frag2.appendChild(cards[num]);
					}
					var addv=function(){
						if(player==game.me){
							game.addVideo('gain12',player,[get.cardsInfo(frag1.childNodes),get.cardsInfo(frag2.childNodes),event.gaintag]);
						}
					};
					var broadcast=function(){
						game.broadcast(function(player,cards,num,gaintag){
							player.directgain(cards,null,gaintag);
							_status.cardPileNum=num;
						},player,cards,ui.cardPile.childNodes.length,event.gaintag);
					};
					if(event.animate=='draw'){
						player.$draw(cards.length);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(500,500));
					}
					else if(event.animate=='gain'){
						player.$gain(cards.length,event.log);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(700,700));
					}
					else if(event.animate=='gain2'||event.animate=='draw2'){
						var gain2t=300;
						if(player.$gain2(cards,event.log)&&player==game.me){
							gain2t=500;
						}
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(gain2t,gain2t));
					}
					else if(event.animate=='give'||event.animate=='giveAuto'){
						var evtmap=event.losing_map;
						if(event.animate=='give'){
							for(var i in evtmap){
								var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
								//source.$give(evtmap[i][0],player,event.log)
								source.$give(cards.length,player,event.log)
							}
						}
						else{
							for(var i in evtmap){
								var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
								if(evtmap[i][1].length) source.$giveAuto(evtmap[i][1],player,event.log);
								if(evtmap[i][2].length) source.$give(evtmap[i][2],player,event.log);
							}
						}
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(500,500));
					}
					else if(typeof event.animate=='function'){
						var time=event.animate(event);
						game.pause();
						setTimeout(function(){
							addv();
							player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
							player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
							player.update();
							if(player==game.me) ui.updatehl();
							broadcast();
							game.resume();
						},get.delayx(time,time));
					}
					else{
						addv();
						player.node.handcards1.insertBefore(frag1,player.node.handcards1.firstChild);
						player.node.handcards2.insertBefore(frag2,player.node.handcards2.firstChild);
						player.update();
						if(player==game.me) ui.updatehl();
						broadcast();
						event.goto(4);
					}
					"step 4"
					game.delayx();
					var num=player.needsToDiscard();
					if(num>0){
						var next=player.chooseToDiscard(num,true).set('baoPai',true);
						if(event.yuanYin=='damage'){
							next.set('yuanYin','damage');
							if(event.faShu===true){
								next.set('faShu',true);
							}else{
								next.set('faShu',false);
							}
						}
						if(event.shiQiXiaJiang==false){
							next.set('shiQiXiaJiang',false);
						}else{
							next.set('shiQiXiaJiang',true);
						}
						//传递士气最大变动值
						if(typeof event.shiQiMax=='number'){
							next.set('shiQiMax',event.shiQiMax);
						}
						if(source){
							next.set('source',source);
						}
					}
					if(event.updatePile) game.updateRoundNumber();
				},
				//xingbei
				changeXingBei:function(){
					num=event.num;
					side=event.side;
					var numx=num;
					if(side==true){
						game.hongXingBei+=num;
						if(num>0){
							game.log('<span style="color:red;">红方</span>星杯数量增加',num);
						}else{
							num=-num;
							game.log('<span style="color:red;">红方</span>星杯数量减少',num);
						}
					}else if(side==false){
						game.lanXingBei+=num;
						if(num>0){
							game.log('<span style="color:blue;">蓝方</span>星杯数量增加',num);
						}else{
							num=-num;
							game.log('<span style="color:blue;">蓝方</span>星杯数量减少',num);
						}
					}

					if(game.zhanJiList){
						game.zhanJiList['hongXingBei']=game.hongXingBei;
						game.zhanJiList['lanXingBei']=game.lanXingBei;
					}

					ui.updateShiQiInfo();
					game.broadcast(function(hongXingBei,lanXingBei){
						game.hongXingBei=hongXingBei;
						game.lanXingBei=lanXingBei;
						ui.updateShiQiInfo();
					},game.hongXingBei,game.lanXingBei);

					game.addVideo('changeXingBei',null,[numx,side]);
					game.checkResult();
					

				},
				changeShiQi:function(){
					'step 0'
					event.trigger('changeShiQiPanDuan');
					'step 1'
					event.trigger('changeShiQiQian');
					'step 2'
					num=event.num;
					side=event.side;
					//增加参数是否存在最大变动值，如果存在则进行限制
					if(typeof event.shiQiMax=='number'){
						if(num<0&&num<event.shiQiMax){
							num=event.shiQiMax;
						}
						if(num>0&&num>event.shiQiMax){
							num=event.shiQiMax;
						}
						
					}
					var numx=num;
					if(side==true){
						game.hongShiQi+=num;
						if(num>0){
							game.log('<span style="color:red;">红方</span>士气增加',num);
						}else if(num<0){
							num=-num;
							game.log('<span style="color:red;">红方</span>士气减少',num);
						}
					}else if(side==false){
						game.lanShiQi+=num;
						if(num>0){
							game.log('<span style="color:blue;">蓝方</span>士气增加',num);
						}else if(num<0){
							num=-num;
							game.log('<span style="color:blue;">蓝方</span>士气减少',num);
						}
					}

					if(game.zhanJiList){
						game.zhanJiList['hongShiQi']=game.hongShiQi;
						game.zhanJiList['lanShiQi']=game.lanShiQi;
					}

					ui.updateShiQiInfo();
					game.broadcast(function(hongShiQi,lanShiQi){
						game.lanShiQi=lanShiQi;
						game.hongShiQi=hongShiQi;
						ui.updateShiQiInfo();
					},game.hongShiQi,game.lanShiQi);

					game.addVideo('changeShiQi',null,[numx,side]);
					'step 3'
					game.checkResult();
					'step 4'
					event.trigger('changeShiQiJieShu');
					'step 5'
					event.trigger('changeShiQiHou');
				},
				changeZhanJi:function(){
					'step 0'
					num=event.num;
					xingShi=event.xingShi;
					side=event.side;
					var numx=num;
                    var name=get.translation(xingShi);
					if(num>0){
						if(side==true){
							for(let i=0;i<num;i++){
								game.hongZhanJi.push(xingShi);
							}
							game.log(`<span style="color:red;">红方</span>战绩区增加了${num}个`,name);
						}else if(side==false){
							for(let i=0;i<num;i++){
								game.lanZhanJi.push(xingShi);
							}
							game.log(`<span style="color:blue;">蓝方</span>战绩区增加了${num}个`,name);
						}
					}else if(num<0){
						num=-num;
						if(side==true){
							for(let i=0;i<num;i++){
								let index = game.hongZhanJi.indexOf(xingShi);  
								if (index !== -1) {  
									game.hongZhanJi.splice(index, 1);  
								}
							}
							game.log(`<span style="color:red;">红方</span>战绩区移除了${num}个`,name);
						}else if(side==false){
							for(let i=0;i<num;i++){
								let index = game.lanZhanJi.indexOf(xingShi);  
								if (index !== -1) {  
									game.lanZhanJi.splice(index, 1);  
								}
							}
							game.log(`<span style="color:blue;">蓝方</span>战绩区移除了${num}个`,name);
						}	
					}
					game.hongZhanJi.sort();
					game.lanZhanJi.sort();

					if(game.zhanJiList){
						game.zhanJiList['hongZhanJi']=game.hongZhanJi;
						game.zhanJiList['lanZhanJi']=game.lanZhanJi;
					}

					ui.updateShiQiInfo();
					game.broadcast(function(hongZhanJi,lanZhanJi){
						game.lanZhanJi=lanZhanJi;
						game.hongZhanJi=hongZhanJi;
						ui.updateShiQiInfo();
					},game.hongZhanJi,game.lanZhanJi);
				
					game.addVideo('changeZhanJi',null,[numx,xingShi,side]);
					//game.checkResult();
				},


				removeBiShaShuiJing:function(){
					'step 0'
                    if(player.hasMark('_tiLian_shuiJing')&&player.hasMark('_tiLian_baoShi')){
                        var list=['baoShi','shuiJing'];
                        player.chooseControl(list).set('prompt','选择要移除的星石').set('ai',function(){
							return 1;
						});
                    }else if(player.hasMark('_tiLian_shuiJing')){
                        player.removeMark('_tiLian_shuiJing');
                        return;
                    }else if(player.hasMark('_tiLian_baoShi')){
                        player.removeMark('_tiLian_baoShi');
                        return;
                    }
                    'step 1'
                    if(result.control=='宝石'){
                        player.removeMark('_tiLian_baoShi');
                    }else if(result.control=='水晶'){
                        player.removeMark('_tiLian_shuiJing');
                    }
				},
				
				addZhiShiWu:function(){
					'step 0'
					event.trigger('addZhiShiWuQian');
					'step 1'
					player.addMark(event.zhiShiWu,event.num);
					'step 2'
					event.trigger('addZhiShiWuJieShu');
					'step 3'
					event.trigger('addZhiShiWuHou');
				},
				removeZhiShiWu:function(){
					'step 0'
					event.trigger('removeZhiShiWuQian');
					'step 1'
					player.removeMark(event.zhiShiWu,event.num);
					'step 2'
					event.trigger('removeZhiShiWuJieShu');
					'step 3'
					event.trigger('removeZhiShiWuHou');
				},

			},
			player:{
				//xingbei
				wuFaXingDong:function(){
					var next=game.createEvent('wuFaXingDong');
					next.player = this;
					next.setContent(lib.skill._wuFaXingDong.contentx);
				},
				moDan:function(use){
					var next=game.createEvent('moDan');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},

				yingZhan:function(use){
					var next=game.createEvent('yingZhan');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},
				gongJiOrFaShu:function(use){
					var next=game.createEvent('gongJiOrFaShu');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},
				gongJi:function(use){
					var next=game.createEvent('gongJi');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},
				faShu:function(use){
					var next=game.createEvent('faShu');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},
				qiTa:function(use){
					var next=game.createEvent('qiTa');
					next.player = this;
					if (arguments.length == 1 && get.objtype(arguments[0]) == "object") {
						for (var i in use) {
							next[i] = use[i];
						}
					} else {
						for (var i = 0; i < arguments.length; i++) {
							if (typeof arguments[i] == "number" || get.itemtype(arguments[i]) == "select") {
								next.selectTarget = arguments[i];
							} else if ((typeof arguments[i] == "object" && arguments[i]) || typeof arguments[i] == "function") {
								if (get.itemtype(arguments[i]) == "player" || next.filterCard) {
									next.filterTarget = arguments[i];
								} else next.filterCard = arguments[i];
							} else if (typeof arguments[i] == "boolean") {
								next.forced = arguments[i];
							} else if (typeof arguments[i] == "string") {
								next.prompt = arguments[i];
							}
						}
					}
					if (typeof next.filterCard == "object") {
						next.filterCard = get.filter(next.filterCard);
					}
					if (typeof next.filterTarget == "object") {
						next.filterTarget = get.filter(next.filterTarget, 2);
					}
					if (next.filterCard == undefined) {
						next.filterCard = lib.filter.filterCard;
					}
					if (next.selectCard == undefined) {
						next.selectCard = [1, 1];
					}
					if (next.filterTarget == undefined) {
						next.filterTarget = lib.filter.filterTarget;
					}
					if (next.selectTarget == undefined) {
						next.selectTarget = lib.filter.selectTarget;
					}
					if (next.position == undefined) {
						next.position = "hs";
					}
					if (next.ai1 == undefined) next.ai1 = get.cacheOrder;
					if (next.ai2 == undefined) next.ai2 = get.cacheEffectUse;
					next.setContent("chooseToUse");
					next._args = Array.from(arguments);
					return next;
				},

				changeShiQi:function(num,side){//xingbei
					var next=game.createEvent('changeShiQi');
					next.player=this;
					if(side==undefined){
						next.side=this.side;
					}else{
						next.side=side;
					}

					var shiQi;
					switch(next.side){
						case true:
							shiQi=game.hongShiQi;break;
						case false:
							shiQi=game.lanShiQi;break;
					}
					if(num>0&&(shiQi+num>game.shiQiMax)){
						num=Math.max(0,game.shiQiMax-shiQi);
					}
					next.num=num;

					next.setContent('changeShiQi');
					return next;
				},
				changeZhanJi:function(xingShi,num,side){//xingbei
					var next=game.createEvent('changeZhanJi');
					if(typeof num!='number'||!num) num=1;
					next.player=this;
					next.xingShi=xingShi;
					var sidex;
					if(side==undefined){
						sidex=this.side;
					}else{
						sidex=side;
					}
					next.side=sidex;
					var zhanJi=get.zhanJi(sidex).length;
					if(num>0&&(zhanJi+num>game.zhanJiMax)){
						num=Math.max(0,game.zhanJiMax-zhanJi);
					}
					next.num=num;
					next.setContent('changeZhanJi');
					return next;
				},
				changeXingBei:function(num,side){//xingbei
					var next=game.createEvent('changeXingBei');
					next.num=num;
					next.player=this;
					if(side==undefined){
						next.side=this.side;
					}else{
						next.side=side;
					}
					next.setContent('changeXingBei');
					return next;
				},
				showGaiPai:function(cards,str){
					var next=game.createEvent('showGaiPai');
					next.player=this;
					next.str=str;
					if(typeof cards=='string'){
						str=cards;
						cards=next.str;
						next.str=str;
					}
					if(get.itemtype(cards)=='card') next.cards=[cards];
					else if(get.itemtype(cards)=='cards') next.cards=cards.slice(0);
					else _status.event.next.remove(next);
					next.setContent('showCards');
					next._args=Array.from(arguments);
					return next;
				},
				getZhiLiaoLimit:function(){
					var num=game.zhiLiaoMax;
					num=game.checkMod(this,num,'maxZhiLiao',this);
					return Math.max(0,num);
				},
				getNengLiangLimit:function(){
					var num=game.nengLiangMax;
					num=game.checkMod(this,num,'maxNengLiang',this);
					return Math.max(0,num);
				},


				canBiShaShuiJing:function(){//能够使用必杀星石
					if(this.hasMark('_tiLian_shuiJing')||this.hasMark('_tiLian_baoShi')){
                        return true;
                    }else{
						return false;
					}
				},
				canBiShaBaoShi:function(){//能否使用必杀宝石
					if(this.hasMark('_tiLian_baoShi')){
                        return true;
                    }else{
						return false;
					}
				},
				removeBiShaShuiJing:function(){//移除星石
					var next=game.createEvent('removeBiShaShuiJing',false);
					next.player=this;
					next.setContent('removeBiShaShuiJing');
					return next;
				},
				removeBiShaBaoShi:function(){//移除宝石
					this.removeMark('_tiLian_baoShi');
				},
				changeNengLiang:function(color,num){//改变能量
					if(typeof num!='number'||!num) num=1;
					if(num>0){
						this.addMark('_tiLian_'+color,num)
					}else if(num<0){
						this.removeMark('_tiLian_'+color,-num)
					}
				},
				addNengLiang:function(color,num){//添加能量
					if(typeof num!='number'||!num) num=1;
					var max=this.getNengLiangLimit();
					var current=this.countNengLiang('r')+this.countNengLiang('b');
					if(current+num>max){
						num=max-current;
					}
					if(num>0){
						this.addMark('_tiLian_'+color,num)
					}
				},
				removeNengLiang:function(color,num){//移除能量
					if(typeof num!='number'||!num) num=-1;
					if(num>0) num=-num;
					var current=this.countNengLiang(color);
					if(current+num<0){
						num=-current;
					}
					if(num<0){
						this.removeMark('_tiLian_'+color,-num)
					}
				},
				countNengLiang:function(color){//统计某个能量数
					return this.countMark('_tiLian_'+color);
				},
				countNengLiangAll:function(){//统计所有能量数
					return this.countMark('_tiLian_baoShi')+this.countMark('_tiLian_shuiJing');
				},
				faShuDamage:function(){//法术伤害
					const next = game.createEvent("damage");
					next.faShu = true;
					next.player = this;
					let noCard, noSource;
					const event = _status.event;
					for (const argument of arguments) {
						if (get.itemtype(argument) == "cards") next.cards = argument.slice();
						else if (get.itemtype(argument) == "card") next.card = argument;
						else if (typeof argument == "number") next.num = argument;
						else if (get.itemtype(argument) == "player") next.source = argument;
						else if (argument && typeof argument == "object" && argument.name) next.card = argument;
						else if (argument == "nocard") noCard = true;
						else if (argument == "nosource") noSource = true;
						else if (argument == "notrigger") {
							next._triggered = null;
							next.notrigger = true;
						} else if (argument == "unreal") next.unreal = true;
					}
					if (!next.card && !noCard) next.card = event.card;
					if (!next.cards && !noCard) next.cards = event.cards;
					if (!next.source && !noSource) {
						const source = event.customSource || event.player;
						if (source && !source.isDead()) next.source = source;
					}
					if (typeof next.num != "number") next.num = (event.baseDamage || 1) + (event.extraDamage || 0);
					next.original_num = next.num;
					next.change_history = [];
					if (next.unreal) next._triggered = 2;
					next.setContent("damage");
					next.filterStop = function () {
						if (this.source && this.source.isDead()) delete this.source;
						var num = this.original_num;
						for (var i of this.change_history) num += i;
						if (num != this.num) this.change_history.push(this.num - num);
						if (this.num <= 0) {
							delete this.filterStop;
							this.trigger("damageZero");
							this.finish();
							this._triggered = null;
							return true;
						}
					};
					return next;
				},
				/**
				 * 
				 * @param {*} zhiShiWu 指示物名
				 * @param {*} num 数量
				 * @param {*} max 临时最大值
				 * @param {*} forced 是否强制
				 * @returns 
				 */
				addZhiShiWu:function(zhiShiWu,num,max,forced){//添加指示物
					if(!this.hasSkill(zhiShiWu)&&!forced) return;

					if(typeof num!='number'||!num) num=1;
					var info=get.info(zhiShiWu);
					if(typeof max=='number'){
						var max=max;
					}else if(info&&info.intro&&info.intro.max){
						var max=info.intro.max;
					}else{
						var max=Infinity;
					}
					var current=this.countMark(zhiShiWu);
					if(current+num>max){
						num=max-current;
					}
					if(num<=0) return;
					var next=game.createEvent('addZhiShiWu');
					next.player=this;
					next.zhiShiWu=zhiShiWu;
					next.num=num;
					next.setContent('addZhiShiWu');
					return next;
				},
				countZhiShiWu:function(zhiShiWu){//统计指示物
					return this.countMark(zhiShiWu);
				},
				removeZhiShiWu:function(zhiShiWu,num){//移除指示物
					if(typeof num!='number'||!num) num=1;
					var current=this.countMark(zhiShiWu);
					if(num>current) num=current;
					if(num<=0) return;
					var next=game.createEvent('removeZhiShiWu');
					next.player=this;
					next.zhiShiWu=zhiShiWu;
					next.num=num;
					next.setContent('removeZhiShiWu');
					return next;
				},
				hasZhiShiWu:function(zhiShiWu){//是否拥有指示物
					return this.hasMark(zhiShiWu);
				},
				addZhanJi:function(xingShi,num){//增加战绩
					if(typeof num!='number'||!num) num=1;
					this.changeZhanJi(xingShi,num);
				},
				removeZhanJi:function(xingShi,num){//移除战绩
					if(typeof num!='number'||!num) num=-1;
					if(num>0) num=-num;
					this.changeZhanJi(xingShi,num);
				},
				chongZhi:function(){//重置
					if(this.isLinked()){
						var next=game.createEvent('chongZhi');
						next.player=this;
						next.setContent('link');
						return next;
					}
				},
				hengZhi:function(){//横置
					if(!this.isLinked()){
						var next=game.createEvent('hengZhi');
						next.player=this;
						next.setContent('link');
						return next;
					}
				},
				qiPai:function(){//执行一次超出手牌上限的弃牌
					var num=this.needsToDiscard();
                    if(num>0){
						this.chooseToDiscard(num,true).set('useCache',true).set('baoPai',true);
					}
				},
				countTongXiPai:function(){//统计同系牌数
					var h=this.getCards('h');
					var dict={};
                    for(var i=0;i<h.length;i++){
                        var xiBie=get.xiBie(h[i]);
                        if(!dict[xiBie]) dict[xiBie]=0;
                        dict[xiBie]++;
                    }
    				let maxValue=-Infinity;  
                    for(let key in dict) {  
						if (dict[key] > maxValue) {  
							maxValue = dict[key];  
						}     
					}
					return maxValue;  
				},
				countYiXiPai:function(){//统计异系牌数
					var h=this.getCards('h');
					var dict={};
                    for(var i=0;i<h.length;i++){
                        var xiBie=get.xiBie(h[i]);
                        if(!dict[xiBie]) dict[xiBie]=0;
                        dict[xiBie]++;
                    }
					return Object.keys(dict).length;
				},
				usedSkill:function(skill){//是否使用过技能
					if(!skill) return false;
					return this.countSkill(skill)>0;
				},

				changeHong:function(num){//改变红点
					if(typeof num!='number'||!num) num=1;
					var skills=this.getSkills();
					for(var i=0;i<skills.length;i++){
						var skill=skills[i];
						var info=get.info(skill);
						if(info.intro&&info.markimage=='image/card/hong.png'){
							if(num>0) this.addZhiShiWu(skill,num);
							if(num<0) this.removeZhiShiWu(skill,-num);
							break;
						}
					}
				},
				changeLan:function(num){//改变蓝点
					if(typeof num!='number'||!num) num=1;
					var skills=this.getSkills();
					for(var i=0;i<skills.length;i++){
						var skill=skills[i];
						var info=get.info(skill);
						if(info.intro&&info.markimage=='image/card/lan.png'){
							if(num>0) this.addZhiShiWu(skill,num);
							if(num<0) this.removeZhiShiWu(skill,-num);
							break;
						}
					}
				},
				countEmptyCards:function(){
					return this.getHandcardLimit()-this.countCards('h');
				},
				
			},
			event:{
				/**
				 * @param {num} num 伤害改变量 
				 */
				changeDamageNum(num){
					if(typeof num != 'number') return;
					if(typeof this.damageNum == 'number'){
						this.damageNum += num;
						if(this.damageNum < 0) this.damageNum = 0;
					}else if(this.getParent().damageNum){
						this.getParent().damageNum += num;
						if(this.getParent().damageNum < 0) this.getParent().damageNum = 0;
					}
				},
				/** 
				 * 设置攻击效果 在攻击设置/攻击前时机调用
				*/
				qingZhiMingZhong:function(){
					event.canYingZhan=false;
					event.canShengGuang=false;
					event.canShengDun=false;
				},
				wuFaYingZhan:function(){
					event.canYingZhan=false;
				},
				wuFaShengGuang:function(){
					event.canShengGuang=false;
				},
				wuFaShengDun:function(){
					event.canShengDun=false;
				},
			},
		},
		get:{
			characterGets:function(list,num){
				var result=[];
				if(!num){
					return list;
				}else{
					result=list.randomRemove(num);
				}
				if(result.includes('hongLianQiShi')&&result.includes('shengDianQiShi')){
					var num=Math.random();
					if(num<0.5){
						result=result.filter(item=>item!='hongLianQiShi');
					}else{
						result=result.filter(item=>item!='shengDianQiShi');
					}
					result.push(list.randomRemove());
				}
				if(result.includes('shengNv')&&result.includes('jinGuiZhiNv')){
					var num=Math.random();
					if(num<0.5){
						result=result.filter(item=>item!='shengNv');
					}else{
						result=result.filter(item=>item!='jinGuiZhiNv');
					}
					result.push(list.randomRemove());
				}
				return result;
			},

			rawAttitude:function(from,to){
				if(from.side==to.side){
					if(to.identity=='zhu'){
						if(_status.connectMode){
							if(_status.mode=='4v4'||_status.mode=='guandu') return 7;
						}
						else{
							if(lib.storage.main_zhu||_status.mode=='four'||_status.mode=='guandu') return 7;
						}
					}
					return 6;
				}
				else{
					if(_status.mode=='siguo'){
						var list=['wei','shu','wu','qun'];
						var map={wei:0,shu:0,wu:0,qun:0};
						var map2={wei:0,shu:0,wu:0,qun:0};
						for(var i=0;i<game.players.length;i++){
							var current=game.players[i];
							map[current.side]+=get.condition(current)*get.threaten(current,false,false);
							map2[current.side]+=current.storage.longchuanzhibao;
						}
						var allin=false;
						for(var i in map){
							if(get.population(i)==1){
								map[i]/=1.5;
							}
							if(map2[i]>=4){
								allin=i;
								break;
							}
							else if(map2[i]==3){
								map[i]+=10;
							}
							else if(map2[i]==2){
								map[i]++;
							}
						}
						if(allin) return to.side==allin?-20:0;
						list.sort(function(a,b){
							return map[b]-map[a];
						});
						var id1=list.indexOf(from.side);
						var id2=list.indexOf(to.side);
						var att=-1;
						switch(id1){
							case 0:att=_status.siguoai[id2+2];break;
							case 1:
								switch(id2){
									case 0:att=_status.siguoai[0];break;
									case 2:att=_status.siguoai[1];break;
									case 3:att=_status.siguoai[2];break;
								}
								break;
							case 2:
								switch(id2){
									case 0:att=_status.siguoai[0];break;
									case 1:att=_status.siguoai[1];break;
									case 3:att=_status.siguoai[2];break;
								}
								break;
							case 3:{
								if(id2==0){
									att=_status.siguoai[1];break;
								}
								else{
									att=_status.siguoai[2];break;
								}
							}
						}
						if(map2[to.side]>=4){
							att-=10;
						}
						else if(map2[to.side]==3){
							att-=3;
						}
						else if(map2[to.side]==2){
							att-=0.5;
						}
						if(to.storage.longchuanzhibao){
							return att*1.2;
						}
						return att;
					}
					else{
						if(to.identity=='zhu'){
							if(_status.connectMode){
								if(_status.mode=='4v4'||_status.mode=='guandu') return -10;
							}
							else{
								if(lib.storage.main_zhu||_status.mode=='four'||_status.mode=='guandu') return -10;
							}
						}
						return -6;
					}
				}
			},

			//xingbei
			zhiLiaoEffect:function(target,num){
				if(target.hasSkillTag('noZhiLiao')) return 0;
				if(target.getZhiLiaoLimit()-target.zhiLiao<=0) return 0.1;
				if(!num){
					num=1;
				}
				var chaZhi=target.getZhiLiaoLimit()-target.zhiLiao-num;
				if(chaZhi>0){
					return chaZhi;
				}else{
					return target.getZhiLiaoLimit()-target.zhiLiao
				}
			},
			zhiLiaoEffect2:function(target,player,num){
				if(target.side!=player.side) return -1;
				if(target.hasSkillTag('noZhiLiao')) return 0;
				if(target.getZhiLiaoLimit()-target.zhiLiao<=0) return 0.1;
				if(!num){
					num=1;
				}
				var chaZhi=target.getZhiLiaoLimit()-target.zhiLiao-num;
				if(chaZhi>0){
					return chaZhi;
				}else{
					return target.getZhiLiaoLimit()-target.zhiLiao
				}
			},
			damageEffect:function(target,num){
				if(!target) return 0;
				if(!num) num=2;
				var chaZhi=target.getHandcardLimit()-target.countCards('h');
				if(target.hasSkillTag('one_damage')) return 0;
				if(chaZhi<num) return -2;
				else if(chaZhi-3<num) return -1;
				else return -0.5;
			},
			damageEffect2:function(target,player,num){
				if(!target) return 0;
				if(!num) num=2;
				if(target.side==player.side){
					return -1;
				}else{
					return -get.damageEffect(target,num);
				}
			},
			countTongXiPai:function(cards){
				var dict={};
				for(var i=0;i<cards.length;i++){
					var xiBie=get.xiBie(cards[i]);
					if(!dict[xiBie]) dict[xiBie]=0;
					dict[xiBie]++;
				}
				let maxValue=-Infinity;  
				for(let key in dict) {  
					if (dict[key] > maxValue) {  
						maxValue = dict[key];  
					}     
				}
				return maxValue;
			},
			countYiXiPai:function(cards){
				var dict={};
				for(var i=0;i<cards.length;i++){
					var xiBie=get.xiBie(cards[i]);
					if(!dict[xiBie]) dict[xiBie]=0;
					dict[xiBie]++;
				}
				return Object.keys(dict).length;
			},
			jiChuXiaoGuoEffect:function(target){
				if(target.hasExpansions('_shengDun')){
					return -1;
				}
				if(target.hasExpansions('_zhongDu')&&!target.hasSkillTag('one_damage')){
					return 1;
				}
				if(target.hasExpansions('_xuRuo')){
					return 2;
				}
				//封印师
				for(var xiaoGuo of game.jiChuXiaoGuo['fengYinShi']){
					if(target.hasExpansions(xiaoGuo)){
						return 1;
					}
				}
				//赐福
				for(var xiaoGuo of game.jiChuXiaoGuo['qiDaoShi']){
					if(target.hasExpansions(xiaoGuo)){
						return -1;
					}
				}
				return 0;
			},

			shiQi:function(side){
				if(side==true){
					return game.hongShiQi;
				}else if(side==false){
					return game.lanShiQi;
				}
			},
			zhanJi:function(side){
				if(side==true){
					return game.hongZhanJi;
				}else if(side==false){
					return game.lanZhanJi;
				}
			},
			xingBei:function(side){
				if(side==true){
					return game.hongXingBei;
				}else if(side==false){
					return game.lanXingBei;
				}
			},
			emptyZhanJi:function(side){
				if(side==true){
					return game.zhanJiMax-game.hongZhanJi.length;
				}else if(side==false){
					return game.zhanJiMax-game.lanZhanJi.length;
				}
			},
		},
		help:{
			
		}
	};
};
