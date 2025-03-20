import { lib, game, ui, get, ai, _status } from "../noname.js";
export const type = "mode";
/**
 * @type { () => importModeConfig }
 */
export default () => {
	return {
		name:'tutorial',
		start:function(){
			"step 0"
			if (!lib.config.new_tutorial) {
				ui.arena.classList.add("only_dialog");
			}
			"step 1"
            game.prepareArena(4);
            if (!lib.config.new_tutorial) {
                game.delay();
            }
			"step 2"
            if (!lib.config.new_tutorial) {
				_status.new_tutorial = true;
				lib.init.onfree();
				game.saveConfig("version", lib.version);
				var clear = function () {
					ui.dialog.close();
					while (ui.controls.length) ui.controls[0].close();
				};
				var clear2 = function () {
					ui.auto.show();
					ui.arena.classList.remove("only_dialog");
				};
				var step1 = function () {
					ui.create.dialog("欢迎来到无名星杯，是否进入新手向导？");
					game.saveConfig("new_tutorial", true);
					ui.dialog.add('<div class="text center">跳过后，你可以在选项-其它中重置新手向导');
					ui.auto.hide();
					ui.create.control("跳过向导", function () {
						clear();
						clear2();
						game.resume();
					});
					ui.create.control("继续", step2);
				};
				var step2 = function () {
					if (lib.config.touchscreen) {
						clear();
						ui.create.dialog("触屏模式中，下划可以显示菜单，上划可以切换托管，双指单击可以暂停");
						ui.dialog.add('<div class="text center">你可以在选项-通用-中更改手势设置');
						ui.create.control("继续", step4);
					} else {
						step3();
					}
				};
				var step3 = lib.genAsync(function* () {
					clear();
					ui.window.classList.add("noclick_important");
					ui.click.configMenu();
					ui.control.classList.add("noclick_click_important");
					ui.control.style.top = "calc(100% - 105px)";
					yield new Promise(resolve => ui.create.control("在菜单中，可以进行各项设置", resolve));
					ui.click.menuTab("选项");
					yield new Promise(resolve => ui.controls[0].replace("如果你感到游戏较卡，可以开启流畅模式", resolve));
					ui.click.menuTab("角色");
					yield new Promise(resolve => ui.controls[0].replace("在角色或卡牌一栏中，单击角色/卡牌可以将其禁用", resolve));
					ui.click.menuTab("扩展");
                    yield new Promise(resolve => ui.controls[0].replace("在扩展中，可以下载和导入扩展", resolve));
                    ui.click.menuTab("其它");
					yield new Promise(resolve => ui.controls[0].replace("在其它中可以更新游戏，或者管理录像，查看帮助", resolve));
					ui.click.configMenu();
					ui.window.classList.remove("noclick_important");
					ui.control.classList.remove("noclick_click_important");
					ui.control.style.top = "";
					step4();
				});
				var step4 = function () {
					clear();
					ui.create.dialog("如果还有其它问题，欢迎来到QQ群966951007进行交流");
					ui.create.control("完成", function () {
						clear();
						clear2();
						game.resume();
					});
				};
				game.pause();
				step1();
			} else {
				game.showChangeLog();
			}
			"step 3"
            for(var i=0;i<game.players.length;i++){
                game.players[i].getId();
            }
            game.chooseCharacter();


			event.trigger('gameStart');
            'step 4'
			var firstChoose=(_status.firstAct||game.players.randomGet());
            game.phaseLoop(firstChoose);
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
			
			chooseCharacter:function(){
                
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
		},
        skill:{
            viewHandcard:{
                ai:{
                    viewHandcard:true,
                    skillTagFilter:function(player,tag,target){
                        return true;
                    },
                },
            },
        },
		translate:{
			
		},
		help:{
			'教学模式':`<div style="margin:10px">教学模式</div><br>一个教学模式<br>使对方士气降至0或者我方合成5个星杯即可获得胜利。对局中，右下角查看相关信息。`
		}
	};
};
