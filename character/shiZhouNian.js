import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'shiZhouNian',
		connect:true,
        characterSort:{
            shiZhouNian:{
                "3xing":['fengZhiJianSheng','kuangZhanShi','shenJianShou','fengYinShi','anShaZhe','shengNv','tianShi','moFaShaoNv'],
                "3.5xing":['moJianShi','shengQiangQiShi','yuanSuShi','maoXianJia','wenYiFaShi','zhongCaiZhe','jingLingSheShou','nvWuShen'],
                "4xing":['shenGuan','yingLingRenXing','yinYangShi','moGong','xianZhe','lingFuShi','cangYanMoNv','moQiang','xueSeJianLing','qiDaoShi','hongLianQiShi'],
                "4.5xing":['lingHunShuShi','yongZhe','yinYouShiRen','geDouJia','shengGong','shouLingWuShi',"jianDi"],
                "5xing":["yueZhiNvShen",'xueZhiWuNv','dieWuZhe'],
            }
        },
		character:{
			fengZhiJianSheng:['fengZhiJianSheng_name','jiGroup',3,['fengNuZhuiJi','shengJian','lieFengJi','jiFengJi','jianYing'],],
            kuangZhanShi:['kuangZhanShi_name','xueGroup',3,['kuangHua','xueYingKuangDao','xueXingPaoXiao','siLie'],],
            shenJianShou:['shenJianShou_name','jiGroup',3,['shanDianJian','guanChuanSheJi','shanGuangXianJing','jingZhunSheJi','juJi'],],
            fengYinShi:['fengYinShi_name','huanGroup',3,['faShuJiDang','diZhiFengYin','shuiZhiFengYin','huoZhiFengYin','fengZhiFengYin','leiZhiFengYin','wuXiShuFu','fengYinPoSui'],],
            anShaZhe:['anShaZhe_name','jiGroup',3,['fanShi','shuiYing','qianXing'],],
            shengNv:['shengNv_name','shengGroup',3,['bingShuangDaoYan','zhiLiaoShu','zhiYuZhiGuang','lianMin','shengLiao'],],
            tianShi:['tianShi_name','shengGroup',3,['fengZhiJieJing','tianShiZhuFu','tianShiJiBan','tianShiZhiQiang','tianShiZhiGe','shenZhiBiHu'],],
            moFaShaoNv:['moFaShaoNv_name','yongGroup',3,['moBaoChongJi','moDanZhangWo','moDanRongHe','huiMieFengBao'],],
            moJianShi:['moJianShi_name','huanGroup','3/4',[],],
            shengQiangQiShi:['shengQiangQiShi_name','shengGroup','3/4',[],],
            yuanSuShi:['yuanSuShi_name','yongGroup','3/4',['yuanSuXiShou','yuanSuDianRan','yunShi','bingDong','huoQou','fengRen','leiJi','yueGuang','yuanSu'],],
            maoXianJia:['maoXianJia_name','huanGroup','3/4',['qiZha','qiangYun','diXiaFaZe','maoXianJiaTianTang','touTianHuanRi'],],
            wenYiFaShi:['wenYiFaShi_name','huanGroup','3/4',[],],
            zhongCaiZhe:['zhongCaiZhe_name','xueGroup','3/4',['zhongCaiFaZe','yiShiZhongDuan','moRiShenPan','shenPanLangChao','zhongCaiYiShi','panJueTianPing','shenPan'],],
            shenGuan:['shenGuan_name','shengGroup',4,[],],
            qiDaoShi:['qiDaoShi_name','yongGroup',4,[],],
            xianZhe:['xianZhe_name','yongGroup',4,[],],
            lingFuShi:['lingFuShi_name','yongGroup',4,[],],
            jianDi:['jianDi_name','jiGroup','4/5',[],],
            geDouJia:['geDouJia_name','jiGroup','4/5',[],],
            yongZhe:['yongZhe_name','xueGroup','4/5',[],],
            lingHunShuShi:['lingHunShuShi_name','huanGroup','4/5',[],],
            xueZhiWuNv:['xueZhiWuNv_name','xueGroup',5,[],],
            dieWuZhe:['dieWuZhe_name','yongGroup',5,[],],
            nvWuShen:['nvWuShen_name','shengGroup','3/4',['shenShengZhuiJi','zhiXuZhiYin','hePingXingZhe','junShenWeiGuan','yingLingZhaoHuan'],],
            moGong:['moGong_name','huanGroup',4,[],],
            hongLianQiShi:['hongLianQiShi_name','xueGroup',4,[],],
            yingLingRenXing:['yingLingRenXing_name','yongGroup',4,[],],
            moQiang:['moQiang_name','huanGroup',4,[],],
            cangYanMoNv:['cangYanMoNv_name','xueGroup',4,[],],
            yinYouShiRen:['yinYouShiRen_name','huanGroup','4/5',[],],
            jingLingSheShou:['jingLingSheShou_name','jiGroup','3/4',[],],
            yinYangShi:['yinYangShi_name','huanGroup',4,[],],
            xueSeJianLing:['xueSeJianLing_name','xueGroup',4,[],],
            yueZhiNvShen:['yueZhiNvShen_name','shengGroup',5,['xinYueBiHu','anYueZuZhou','meiDuShaZhiYan','yueZhiLunHui','yueDu','anYueZhan','cangBaiZhiYue','xinYue','shiHua','anYue'],],
            shouLingWuShi:['shouLingWuShi_name','jiGroup','4/5',[],],
            shengGong:['shengGong_name','shengGroup','4/5',[],],
		},

        characterIntro: {
			fengZhiJianSheng:"风之剑圣有着极高的攻击频率，一旦得到了风的强力赐福，更可以让他打出无数绚丽的连击和伤害。再加上其本身拥有的“圣剑”，在伤害输出上不容小觑，更是团队【宝石】获得的得力助手",
            kuangZhanShi:"狂战士毋庸置疑的拥有本作最强大的物理攻击输出能力，特别是对于防御力弱和拥有治疗的角色更是能制造出绝对的碾压和毁灭伤害。其唯一的弱点就是命中率，因此由队友掩护攻击或攻击防御薄弱的角色是狂战取胜之道",
            shenJianShou:"其精准的射击总是能令对手防不胜防。作为本作命中数一数二的职业，神箭手往往是团队攻击链最后致命一击的缔造者。她的必杀技更是控场神技，总是能令对方的如意算盘全部落空",
            fengYinShi:"封印师是唯一一个能将法术和攻击如此完美结合在一起的职业，再加上她强有力的五种封印和“五系束缚”，相信所有与她敌对的角色都会痛苦不堪",
            anShaZhe:"没有人会去主动惹暗杀者的麻烦，因为他的反击总是会让你后悔刚才做出的决定；也没有人会把他当做一个默默无闻的路人甲，因为当他亮出匕首的时候，你就再也无法闪躲了",
            shengNv:`外表弱小的圣女有着极强的防御和治疗能力。在她的保护下，很多需要厚积薄发的职业能得到全面的呵护成长，更是许多爆发性职业的全职奶妈`,
            tianShi:`守护天使的治疗能力虽不是圣类职业中最强的，但是她对于团队的辅助作用却是全职业中效果最为显著的。“天使之墙”和“风之洁净”能大大的提高团队的防御能力，而在其强大的必杀技“神之庇护”面前，法术系职业往往无可奈何`,
            moFaShaoNv:`小范围的区域伤害是魔法少女的特长，她更可以把魔弹随意的使用和施放。在积累了一定的能量之后，强大的“毁灭风暴”更是可以让所有对手都品尝到何为魔法的洗礼和冲击`,
            moJianShi:"借助暗影之力的魔剑士，既无法使用法术，更是会受到黑暗的侵蚀。但这种双刃剑施放在对手身上的时候，又是无比的震撼和爽快，在烈火永生的黄泉面前，生与死只在一念之间",
            shengQiangQiShi:`治疗对于圣枪骑士而言，既是优秀的防御源泉，也是攻击的伤害利器。强大的圣枪骑士总是能运用场上的所有治疗为她所用，狠狠地发泄到她的对手身上。她的天枪和地枪总是让每个对手都胆战心惊`,
            yuanSuShi:`元素师对于元素有着近乎疯狂的挚爱，他能从每种元素中提炼出独特的能力并加以使用，在积累一定的元素能量后还能额外释放出强大的追加效果`,
            maoXianJia:"在这样一个危险的大陆还敢冒险的人一定具备着以下三种素质：近乎难以置信的运气、让大家都有利可图的能力、遇到危险时跑的足够快",
            wenYiFaShi:"拥有者不死之躯的瘟疫法师对于法术有着近乎免疫的强大抵抗能力，对人类意味着重生和保护的治疗能在瘟疫法师的手里转变为死亡和毁灭的邪恶力量",
            zhongCaiZhe:"以眼还眼以牙还牙，仲裁者会把所有对她造成的伤害转化为强大的审判力量，通过末日审判来裁决这一切。每一个她的敌人都设法逃脱，但审判终将到来",
            shenGuan:"神官作为一个拥有坚定信念的神职人员拥有者几乎可以让人起死回生的强大复生能力。在其坚定的神圣信仰下，她的敌人都终将被消灭而她的队友一个都不会倒下",
            qiDaoShi:"祈祷师能激发出她队友内心强大的力量和惊人的速度。此外，在她的祈祷之下，连光明与黑暗的力量都将为她所用",
            xianZhe:`睿智博学的贤者拥有能改变命运的三本魔法法典：智慧、圣洁和魔道。每一本都积攒着前人对奥术能量的深厚研究，而贤者是唯一一个能够完全利用它们的人`,
            lingFuShi:"风与雷之中总是蕴含着能被灵符师利用的强大能量，甚至是在灵符使用完毕之后还能抽取其中的妖力为自己所用，在特定的情形下再度爆发",
            jianDi:`传说中剑帝有一把可以相互转化的符文剑：在帮助善良人的时候它会透出圣洁的光芒；而在斩杀恶魔时，那把剑会散发出比恶魔更邪恶的力量来`,
            geDouJia:`格斗家天生的念气体魄让其拥有足以击碎岩石的巨大力量，但其唯一的弱点就是需要积攒的时间和落空时对自己巨大的反噬伤害，不过幸好她还有强大的念气力场来保护自己`,
            yongZhe:"怒气与知性这一对仿佛不可调和的矛盾却在勇者身上被炼化为一致。拥有怒气时的超强爆发与使用知性时的百发百中让勇者成为星杯传说中的强者",
            lingHunShuShi:"控制并利用灵魂是灵魂术士一族所独具的强大能力，错综多样的灵魂类别会使得很多学徒级的灵魂术士手忙脚乱。而对于精通利用灵魂的大师级灵魂术士而言，却能把每一个灵魂都发挥出最大的利用价值和使用效率",
            xueZhiWuNv:`被鲜血诅咒的血之巫女原本是一个试验品，现在她带着充满毁灭的鲜血能力来进行她的复仇计划。流淌在她全身的每一滴鲜血都是武器，这种武器有时候连她都完全没法控制`,
            dieWuZhe:"蝶舞者是一位能够操纵灵蝶的幻术师，从灵蝶身上散布的毒粉会慢慢渗透到敌人的肌肤里产生剧毒，它们有着强大的繁衍能力，随着其数量的不断增加，所有人都会被其吞噬殆尽",
            nvWuShen:`米涅瓦：力量对于她来说是一种艺术，每一种技巧和武艺对于她来说同样是一种艺术，将各种各样的艺术融会贯通，铸就了女武神不败的威名<br>
            栞蒂：作为“女武神计划”的最终产物，她拥有的技巧和实力几乎完美再现了当年女武神的威风`,
            moGong:`魔弓为了超越她的姐姐，舍弃了原本应当追寻技巧与速度的弓之奥义，而将所有的箭术魔化为强大的充能能量，力求在爆发力与AOE上做到极致与完美`,
            hongLianQiShi:"背弃原初信仰的红莲骑士，在被神诅咒着的同时也掌握了破坏力更为强大的堕落力量，让敌人溺毙在自己的鲜血之中是令她最为愉悦的杀戮手段",
            yingLingRenXing:"纯粹为战斗而生的人形，自诞生之日便掌握神秘的纹章力量，并运用这种力量将前进道路上的障碍统统粉碎",
            moQiang:`被幻之星尘同化的魔枪在获得了新的意志和形态后，体内涌出一股无与伦比的力量。这种力量极大地提高了她的打击能力和爆发力，但也使得她再也无法使用那些基本的法术了`,
            cangYanMoNv:`拥有千奇百怪魔法道具的她总是让敌人无可奈何，然而苍炎魔女真正的杀招，是隐藏于血脉之中的苍炎之力<br>
            将身躯奉献给苍炎之力的苍炎魔女，觉醒其体内完全的魔力。烈炎之痕烙印在她的身躯上，为了心中的执念，她已不顾任何毁灭性的后果。是什么让她如此奋不顾身？也许答案已不言而喻。。。`,
            yinYouShiRen:`阴阳师通过式神的帮助，于虚实之间转移对手注意力并造成伤害。由于阴阳师与式神之间捉摸不定的特性，往往使得对手疲于奔命`,
            jingLingSheShou:"穿梭于丛林之中，游走于动物伙伴之间，精灵秘仪的力量祝福者她和她的动物伙伴在战场上战无不胜",
            yinYangShi:`吟游诗人不仅仅依凭自己的直觉和灵感进行着战斗，他弹奏的一个个音符能大幅增强自身和队友的实力，同样也能对敌人造成极大的伤害`,
            xueSeJianLing:`将鲜血之力与剑技完美融合，血色剑灵拥有着匹敌于魔剑的爆发性和机动性。任何敌人若踏进她的鲜血领域，那么他将必死无疑”`,
            yueZhiNvShen:`月之女神以新月庇佑队友，吸纳队友伤痛作为自己的力量。她是相信“力量即为一切”的对手的梦魇，会在积累足够的伤痛后进行反击。然而对于另一种不擅长以伤害取胜的对手，她还是疲于应付`,
            shouLingWuShi:`御魂流是一种奇妙的剑道，通过兽魂的不同，可以一击必中，也可以卸掉对手的攻势让其无处使劲。最为奇妙的当属其中奥义【逆反居合斩】，还没有人能准确描述中了此招后的感受。。。因为。。。`,
            shengGong:"因尚未充填完毕，圣弓的伤害仍然受到束缚。然而即使如此，也能隐隐约约感受到其作为能量炮的恐怖之处。若给她足够的时间积蓄力量，她能够一瞬间重置战场甚至逆转战局，是不可忽视的因素",
		},
		
		skill:{
            //风之剑圣
            fengNuZhuiJi:{
                usable:1,
                frequent:true,
                trigger:{player:"gongJiHou"},
                filter:function(event,player){
                    return event.yingZhan!=true;
                },
                content:function(){
                    "step 0"
                    trigger.getParent().insertAfter(function(){
                        var str='风怒追击：风系[攻击行动]';
                        var next=player.gongJi(function(card,player,event){
                            if(get.xiBie(card)!='feng') return false;
                            return lib.filter.cardEnabled(card,player,'forceEnable');
                        },str);
                        next.autodelay=true;
                    },{
                        player:player,
                    });
					
                },
                check:function(event,player){
                    var num=player.countCards('h',card=>get.xiBie(card)=='feng'&&get.type(card)=='gongJi');
                    return num>0
                },
                mod:{
                    aiOrder:function(player,card,num){
                        if(get.type(card)!='gongJi') return;
                        if(get.xiBie(card)=='feng') return num-0.3;
                    }
                }
            },
            shengJian:{
                forced:true,
                trigger:{player:"gongJiSheZhi"},
                group:['shengJian_drawAndDiscard'],
                priority:1,
                filter:function(event,player){
                    return event.yingZhan!=true&&player.getStat('gongJi').zhuDong==3;
                },
                content:function(){
                    trigger.qiangZhiMingZhong();
                    trigger.customArgs.shengJian=true;
                },
                subSkill:{
                    drawAndDiscard:{
                        direct:true,
                        trigger:{player:'gongJiJieShu'},
                        filter:function(event,player){
                            return event.customArgs.shengJian==true;
                        },
                        content:function(){
                            "step 0"
                            var list=[0,1,2,3];
                            player.chooseControl(list).set('prompt','圣剑：摸X张牌并弃置X张牌').set('ai',function(){
                                var player=_status.event.player;
                                var num=player.getHandcardLimit()-player.countCards('h');
                                if(num>3) num=3;
                                return num;
                            });
                            "step 1"
                            if(result.control==0){
                                event.finish();
                            }else{
                                event.number=result.control;
                            }
                            "step 2"
                            player.draw(event.number);
                            "step 3"
                            player.chooseToDiscard(event.number,true);
                        }
                    }
                },
            },
            lieFengJi:{
                trigger:{player:'gongJiShi'},
                frequent:true,
                filter:function(event,player){
                    return event.card.hasDuYou('lieFengJi')&&event.target.hasExpansions('_shengDun');
                },
                content:function(){
                    'step 0'
                    trigger.wuFaShengDun();
                    trigger.wuFaYingZhan();
                },
            },
            jiFengJi:{
                trigger:{player:'gongJiShi'},
                frequent:true,
                filter:function(event,player){
                    return event.card.hasDuYou('jiFengJi')&&event.yingZhan!=true;
                },
                content:function(){
                    'step 0'
                    player.addGongJi();
                },
            },
            jianYing:{
                trigger:{player:'gongJiHou'},
                filter:function(event,player){
                    return event.yingZhan!=true&&player.canBiShaShuiJing();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    player.addGongJi();
                },
                check:function(event,player){
                    if(player.storage.gongJi.zhuDong>=3) return false;
                    var num=player.countCards('h',card=>get.type(card)=='gongJi');
                    return num>0
                },
                ai:{
                    shuiJing:true,
                }
            },
            //狂战士
            kuangHua:{
                trigger:{player:'gongJiSheZhi'},
                forced:true,
                group:['kuangHua_gongJiMingZhong'],
                content:function(){
                    'step 0'
                    trigger.changeDamageNum(1);
                },
                subSkill:{
                    gongJiMingZhong:{
                        trigger:{player:'gongJiMingZhong'},
                        forced:true,
                        filter:function(event,player){
                            return player.countCards('h')>3;
                        },
                        content:function(){
                            'step 0'
                            trigger.changeDamageNum(1);
                        }
                    }
                }
            },
            xueYingKuangDao:{
                trigger:{player:'gongJiShi'},
                frequent:true,
                group:['xueYingKuangDao_gongJiMingZhong'],
                filter:function(event,player){
                    return event.yingZhan!=true&&event.card.hasDuYou('xueYingKuangDao');
                },
                content:function(){
                    'step 0'
                    trigger.customArgs.xueYingKuangDao=true;
                },
                subSkill:{
                    gongJiMingZhong:{
                        trigger:{player:'gongJiMingZhong'},
                        forced:true,
                        filter:function(event,player){
                            return event.customArgs.xueYingKuangDao==true&&(event.target.countCards('h')==2||event.target.countCards('h')==3);
                        },
                        content:function(){
                            'step 0'
                            if(trigger.target.countCards('h')==2){
                                trigger.changeDamageNum(2);
                            }else if(trigger.target.countCards('h')==3){
                                trigger.changeDamageNum(1);
                            }
                        }
                    }
                },
            },
            xueXingPaoXiao:{
                trigger:{player:'gongJiShi'},
                frequent:true,
                filter:function(event,player){
                    return event.card.hasDuYou('xueXingPaoXiao')&&event.yingZhan!=true&&event.target.zhiLiao==2;
                },
                content:function(){
                    'step 0'
                    trigger.qiangZhiMingZhong();
                }
            },
            siLie:{
                trigger:{player:'gongJiMingZhong'},
                frequent:true,
                priority:-1,
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaBaoShi();
                    'step 1'
                    trigger.changeDamageNum(2);
                }
            },
            //圣女
            bingShuangDaoYan:{
                trigger:{player:'daChuPai'},
                forced:true,
                filter:function(event,player){
                    return get.xiBie(event.card)=='shui' || event.card.name=='shengGuang';
                },
                content:function(){
                    'step 0'
                    var next=player.chooseTarget(true,'目标角色+1[治疗]').set('ai',function(target){
                        var player=_status.event.player;
						return get.zhiLiaoEffect2(player,target,1);
					});
                    'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'blue');
						target.changeZhiLiao(1,player);
					}
                }
            },
            zhiLiaoShu:{
                enable:'faShu',
                type:'faShu',
                filterTarget:true,
                prompt:'目标角色+2[治疗]',
                position:'h',
                filterCard:function(card){
                    return card.hasDuYou('zhiLiaoShu');
                },
                filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.zhiLiaoShu.filterCard(card);
                    });
				},
                content:function(){
                    return target.changeZhiLiao(2,player);
                },
                ai: {
					result: {
						target:function(player,target){
                            return get.zhiLiaoEffect(target,2);
                        },
					},
					order: 3.2,
				},
            },
            zhiYuZhiGuang:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('zhiYuZhiGuang');
				},
				position:'h',
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.zhiYuZhiGuang.filterCard(card);
                    });
				},
				prompt:'指定最多3名角色各+1[治疗]。',
                filterTarget:true,
                selectTarget:[0,3],
                useCard:true,
                content:function(){
                    if(target){
                        target.changeZhiLiao(1,player);
                    }
                },
                ai: {
					result: {
						target:function(player,target){
                            return get.zhiLiaoEffect(target,1);
                        },
					},
					order: 3.2,
				},
            },
            lianMin:{
                type:'qiDong',
                trigger:{player:'qiDong'},
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaBaoShi();
                    'step 1'
                    player.hengZhi();
                    'step 2'
                    player.addNengLiang('shuiJing');
                },
                mod:{
                    maxHandcardFinal:function(player,num){
                        if(player.isHengZhi()) return 7
                    }
                },
                check:function(event,player){
                    return !player.isHengZhi();
                },
                ai:{
                    baoShi:true,
                    draw:false,
                }
            },
            shengLiao:{
                type:'faShu',
                usable:1,
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaShuiJing();
                },
                selectTarget:[1,3],
                filterTarget:true,
                contentBefore:function(){
                    player.removeBiShaShuiJing();
                },
                content:function(){
                    'step 0'
                    if(targets.length==1){
                        target.changeZhiLiao(3,player);
                        event.finish();
                    }else if(targets.length==3||player.storage.shengLiao==2){
                        target.changeZhiLiao(1,player);
                        event.finish();
                    }else if(player.storage.shengLiao==1){
                        target.changeZhiLiao(2,player);
                        event.finish();
                    }else{
                        var list=[1,2];
                        var name=get.translation(target)
                        var next=player.chooseControl(list).set('prompt',name+'获得X点[治疗]');
                        var chaZhi=target.getZhiLiaoLimit()-target.zhiLiao;
                        if(chaZhi<=1) var num=0;
                        else var num=1;
                        next.set('num',num);
                        next.set('ai',function(){
                            return _status.event.num;
                        });
                    }
                    'step 1'
                    var num=result.control;
                    target.changeZhiLiao(num,player);
                    player.storage.shengLiao=num;
                },
                contentAfter:function(){
                    player.storage.shengLiao=0;
                    player.addGongJiOrFaShu();
                },
                ai: {
                    shuiJing:true,
					result: {
						target:function(player,target){
                            return get.zhiLiaoEffect(target,1);
                        },
					},
					order: 3.5,
				},
            },
            //暗杀者
            fanShi:{
                trigger:{player:"chengShouShangHai"},
                forced:true,
                filter:function(event){
                    return event.faShu!=true;
                },
                content:function(){
                    trigger.source.draw(player);
                }
            },
            shuiYing:{
                trigger:{player:'drawBefore'},
                filter:function(event,player){
                    return event.yuanYin!="teShuXingDong"&&player.countCards('h')>0;
                },
                async cost(event, trigger, player) {
					event.result = await player
						.chooseCard("水影：弃X张水系牌",[1,Infinity],function(card){
                            return get.xiBie(card)=='shui';
                        })
						.set("ai",function(card){
							return 6 - get.value(card);
						})
                        .set('showCards',true)
						.forResult();
				},
                content:function(){
                    'step 0'
                    player.discard(event.cards).set('showCards',true);
                    'step 2'
                    if(!player.isHengZhi()) event.finish();
                    'step 3'
                    var next=player.chooseToDiscard(1,'水影：选择要弃置的法术牌',function(card){
                        return get.type(card)=='faShu';
                    });
                    next.set('ai',function(card){
                        return 6 - get.value(card);
                    });
                    next.set('showCards',true);
                }
            },
            qianXing:{
                type:'qiDong',
                trigger:{player:'qiDong'},
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaBaoShi();
                    'step 1'
                    player.chooseDraw(1);
                    'step 3'
                    player.hengZhi();
                },
                mod:{
                    maxHandcardBase:function(player,num){
                        if(player.isHengZhi()) return num-1;
                    },
                    targetEnabled:function(card,player,target){
                        if(get.type(card)=='gongJi'&&target.isHengZhi()){
                            if(_status.event.yingZhan!=true) return false;
                        }
                    }
                },
                group:['qianXing_chongZhi','qianXing_xiaoGuo'],
                subSkill:{
                    chongZhi:{
                        direct:true,
                        trigger:{player:'xingDongKaiShi'},
                        filter:function(event,player){
                            return player.isHengZhi();
                        },
                        content:function(){
                            'step 0'
                            player.chongZhi();
                        }
                    },
                    xiaoGuo:{
                        forced:true,
                        trigger:{player:"gongJiSheZhi"},
                        filter:function(event,player){
                            return event.yingZhan!=true&&player.isHengZhi();
                        },
                        content:function(){
                            var num=player.countNengLiangAll();
                            trigger.changeDamageNum(num);
                            trigger.wuFaYingZhan();
                        }
                    }
                },
                ai:{
                    baoShi:true,
                },
                check:function(event,player){
                    if(!player.hasCard(function(card){
                        return get.type(card)=='gongJi';
                    })) return false;
                    if(player.countNengLiangAll()<=1) return false;
                    return true;
                },
            },
            //封印师
            faShuJiDang:{
                trigger:{player:'faShuHou'},
                frequent:true,
                content:function(){
                    player.addGongJi();
                }
            },
            diZhiFengYin:{
                type:'faShu',
                enable:'faShu',
				position:'h',
				filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.diZhiFengYin.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.diZhiFengYin.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
				},
                filterCard:function(card){
                    return card.hasDuYou('diZhiFengYin');
				},
                filterTarget:function(card,player,target){
                    if(target.hasSkillTag('noJiChuXiaoGuo')) return false;
                    return target.side!=player.side&&!target.hasExpansions('diZhiFengYin_xiaoGuo')
                },
                useCard:true,
                content:function(){
                    'step 0'
                    if(!target.hasSkill('diZhiFengYin_xiaoGuo')){
                        target.addSkill('diZhiFengYin_xiaoGuo');
                    }
                    'step 1'
                    target.storage.fengYin=player;
                    target.addToExpansion(cards,'gain2',player).gaintag.add('diZhiFengYin_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        marktext:"地",
                        intro:{
                            content:'expansion',
                        },
                        onremove:function(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        trigger:{player:['daChuPai','showCardsEnd']},
                        forced:true,
                        firstDo:true,
                        priority:1,
                        filter:function(event,player){
                            if(!player.hasExpansions('diZhiFengYin_xiaoGuo')){
                                return false
                            }
                            for(var card of event.cards){
                                if(event.name!='showCards'){
                                    if(card.original != "h") continue;
                                }
                                if(get.xiBie(card)=='di'){
                                    return true;
                                }
                            }
                            return false;
                        },
                        content:function(){
                            'step 0'
                            player.faShuDamage(player.storage.fengYin,3);
                            'step 1'
                            player.loseToDiscardpile(player.getExpansions('diZhiFengYin_xiaoGuo'));
                            'step 2'
                            player.removeSkill('diZhiFengYin_xiaoGuo')
                        }
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>3) return -3;
                            return -1;
                        }
                    }
                }
            },
            shuiZhiFengYin:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('shuiZhiFengYin');
				},
				position:'h',
				filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.shuiZhiFengYin.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.shuiZhiFengYin.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
				},
                filterTarget:function(card,player,target){
                    if(target.hasSkillTag('noJiChuXiaoGuo')) return false;
                    return target.side!=player.side&&!target.hasExpansions('shuiZhiFengYin_xiaoGuo')
                },
                useCard:true,
                content:function(){
                    'step 0'
                    if(!target.hasSkill('shuiZhiFengYin_xiaoGuo')){
                        target.addSkill('shuiZhiFengYin_xiaoGuo');
                    }
                    'step 1'
                    target.storage.fengYin=player;
                    target.addToExpansion(cards,'gain2',player).gaintag.add('shuiZhiFengYin_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        marktext:"水",
                        intro:{
                            content:'expansion',
                        },
                        onremove:function(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        trigger:{player:['daChuPai','showCardsEnd']},
                        forced:true,
                        priority:1,
                        filter:function(event,player){
                            if(!player.hasExpansions('shuiZhiFengYin_xiaoGuo')){
                                return false
                            }
                            for(var card of event.cards){
                                if(event.name!='showCards'){
                                    if(card.original != "h") continue;
                                }
                                if(get.xiBie(card)=='shui'){
                                    return true;
                                };
                            }
                            return false;
                        },
                        content:function(){
                            'step 0'
                            player.faShuDamage(player.storage.fengYin,3);
                            'step 1'
                            player.loseToDiscardpile(player.getExpansions('shuiZhiFengYin_xiaoGuo'));
                            'step 2'
                            player.removeSkill('shuiZhiFengYin_xiaoGuo')
                        }
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>3) return -3;
                            return -1;
                        }
                    }
                }
            },
            huoZhiFengYin:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('huoZhiFengYin');
				},
				position:'h',
				filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.huoZhiFengYin.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.huoZhiFengYin.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
				},
                filterTarget:function(card,player,target){
                    if(target.hasSkillTag('noJiChuXiaoGuo')) return false;
                    return target.side!=player.side&&!target.hasExpansions('huoZhiFengYin_xiaoGuo')
                },
                useCard:true,
                content:function(){
                    'step 0'
                    if(!target.hasSkill('huoZhiFengYin_xiaoGuo')){
                        target.addSkill('huoZhiFengYin_xiaoGuo');
                    }
                    'step 1'
                    target.storage.fengYin=player;
                    target.addToExpansion(cards,'gain2',player).gaintag.add('huoZhiFengYin_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        marktext:"火",
                        intro:{
                            content:'expansion',
                        },
                        trigger:{player:['daChuPai','showCardsEnd']},
                        forced:true,
                        priority:1,
                        filter:function(event,player){
                            if(!player.hasExpansions('huoZhiFengYin_xiaoGuo')){
                                return false
                            }

                            for(var card of event.cards){
                                if(event.name!='showCards'){
                                    if(card.original != "h") continue;
                                }
                                if(get.xiBie(card)=='huo'){
                                    return true;
                                };
                            }
                            return false;
                        },
                        content:function(){
                            'step 0'
                            player.faShuDamage(player.storage.fengYin,3);
                            'step 1'
                            player.loseToDiscardpile(player.getExpansions('huoZhiFengYin_xiaoGuo'));
                            'step 2'
                            player.removeSkill('huoZhiFengYin_xiaoGuo')
                        }
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>3) return -3;
                            return -1;
                        }
                    }
                }
            },
            fengZhiFengYin:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('fengZhiFengYin');
				},
				position:'h',
				filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.fengZhiFengYin.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.fengZhiFengYin.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
				},
                filterTarget:function(card,player,target){
                    if(target.hasSkillTag('noJiChuXiaoGuo')) return false;
                    return target.side!=player.side&&!target.hasExpansions('fengZhiFengYin_xiaoGuo')
                },
                useCard:true,
                content:function(){
                    'step 0'
                    if(!target.hasSkill('fengZhiFengYin_xiaoGuo')){
                        target.addSkill('fengZhiFengYin_xiaoGuo');
                    }
                    'step 1'
                    target.storage.fengYin=player;
                    target.addToExpansion(cards,'gain2',player).gaintag.add('fengZhiFengYin_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        marktext:"风",
                        intro:{
                            content:'expansion',
                        },
                        onremove:function(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        trigger:{player:['daChuPai','showCardsEnd']},
                        forced:true,
                        priority:1,
                        filter:function(event,player){
                            if(!player.hasExpansions('fengZhiFengYin_xiaoGuo')){
                                return false
                            }
   
                            for(var card of event.cards){
                                if(event.name!='showCards'){
                                    if(card.original != "h") continue;
                                }
                                if(get.xiBie(card)=='feng'){
                                    return true;
                                };
                            }
                            return false;
                        },
                        content:function(){
                            'step 0'
                            player.faShuDamage(player.storage.fengYin,3);
                            'step 1'
                            player.loseToDiscardpile(player.getExpansions('fengZhiFengYin_xiaoGuo'));
                            'step 2'
                            player.removeSkill('fengZhiFengYin_xiaoGuo')
                        }
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>3) return -3;
                            return -1;
                        }
                    }
                }
            },
            leiZhiFengYin:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('leiZhiFengYin');
				},
				position:'h',
				filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.leiZhiFengYin.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.leiZhiFengYin.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
				},
                filterTarget:function(card,player,target){
                    if(target.hasSkillTag('noJiChuXiaoGuo')) return false;
                    return target.side!=player.side&&!target.hasExpansions('leiZhiFengYin_xiaoGuo')
                },
                prepare:'useCard',
                discard:false,
                content:function(){
                    'step 0'
                    if(!target.hasSkill('leiZhiFengYin_xiaoGuo')){
                        target.addSkill('leiZhiFengYin_xiaoGuo');
                    }
                    'step 1'
                    target.storage.fengYin=player;
                    target.addToExpansion(cards,'gain2',player).gaintag.add('leiZhiFengYin_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        marktext:"雷",
                        intro:{
                            content:'expansion',
                        },
                        onremove:function(player, skill) {
                            const cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        trigger:{player:['daChuPai','showCardsEnd']},
                        forced:true,
                        priority:1,
                        filter:function(event,player){
                            if(!player.hasExpansions('leiZhiFengYin_xiaoGuo')){
                                return false
                            }

                            for(var card of event.cards){
                                if(event.name!='showCards'){
                                    if(card.original != "h") continue;
                                }
                                if(get.xiBie(card)=='lei'){
                                    return true;
                                };
                            }
                            return false;
                        },
                        content:function(){
                            'stpe 0'
                            player.faShuDamage(player.storage.fengYin,3);
                            'step 1'
                            player.loseToDiscardpile(player.getExpansions('leiZhiFengYin_xiaoGuo'));
                            'step 2'
                            player.removeSkill('leiZhiFengYin_xiaoGuo')
                        }
                    },
                },
                ai:{
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>3) return -3;
                            return -1;
                        }
                    }
                }
            },
            wuXiShuFu:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    var bool1=player.canBiShaShuiJing();
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.wuXiShuFu.filterTarget('',player,current);
                    }).length>0;
                    return bool1&&bool2
                },
                filterTarget:function(card,player,target){
                    return target.side!=player.side;
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    target.addSkill('wuXiShuFu_xiaoGuo')
                    'step 2'
					target.addMark('wuXiShuFu_xiaoGuo');
                },
                subSkill:{
                    xiaoGuo:{
                        priority:2,
                        trigger:{player:'xingDongQian'},
                        forced:true,
                        markimage:'image/card/zhuanShu/wuXiShuFu.png',
                        intro:{
                            content:'(将【五系束缚】放置于目标对手面前)该对手跳过其下个行动阶段。在其下个行动阶段开始前他可以选择摸(2+X)张牌来取消【五系束缚】的效果。X为场上封印的数量，X最高为2。无论效果是否发动，触发后移除此牌。',
                            nocount:true,
                        },
                        onremove:'storage',
                        filter:function(event,player){
                            return player.hasZhiShiWu('wuXiShuFu_xiaoGuo');
                        },
                        content:function(){
                            'step 0'
                            var x=0;
                            for(var p of game.players){
                                for(var xiaoGuo of game.jiChuXiaoGuo.fengYinShi){
                                    if(p.hasExpansions(xiaoGuo)){
                                        x++;
                                    }
                                }
                                if(x>=2){
                                    x=2;
                                    break;
                                }
                            }
                            event.num;
                            event.num=2+x;

                            var list=[`摸2+${x}张牌`,'跳过行动阶段'];
                            if(player.hasExpansions('_xuRuo')){
                                list[0]=`摸2+3+${x}张牌`;
                                event.num+=3;
                            }
                            player.chooseControl().set('choiceList',list).set('prompt','五系束缚：选择一项').set('ai',function(){
                                var player=_status.event.player;
                                var num=_status.event.num;
                                if(player.countCards('h')+num>player.getHandcardLimit()){
                                    return 1;
                                }else{
                                    return 0;
                                }
                            }).set('num',event.num);
                            'step 1'
                            if(result.index==1){
                                trigger.xuRuo=true;
                            }else if(result.index==0){
                                player.draw(event.num); 
                            }
                            'step 2'
                            player.removeZhiShiWu('wuXiShuFu_xiaoGuo');
                            'step 3'
                            if(player.hasExpansions('_xuRuo')){
                                player.loseToDiscardpile(player.getExpansions('_xuRuo')); 
                            }
                            'step 4'
                            player.removeSkill('wuXiShuFu_xiaoGuo');
                        },
                    }
                },
                ai:{
                    shuiJing:true,
                    order:4,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')>4) return -3;
                            return -1;
                        }
                    }
                }
            },
            fengYinPoSui:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    var bool1=player.canBiShaShuiJing();
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.fengYinPoSui.filterTarget('','',current)
                    }).length>0;
                    return bool1&&bool2;
                },
                filterTarget:function(card,player,target){
                    for(var xiaoGuoList in game.jiChuXiaoGuo){
                        for(var xiaoGuo of game.jiChuXiaoGuo[xiaoGuoList]){
                            if(target.hasExpansions(xiaoGuo)){
                                return true;
                            }
                        }
                    }
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    player.gainJiChuXiaoGuo(target);
                },
                ai:{
                    shuiJing:true,
                    order:3.5,
                    result:{
                        target:function(player,target){
                            var shiQi=get.shiQi(player.side);
                            if(shiQi<=5&&player.countEmptyCards<=0) return false; 

                            return get.jiChuXiaoGuoEffect(target);
                        }
                    }
                }
            },
            //天使
            fengZhiJieJing:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    var bool1=player.hasCard(function(card){
                        return lib.skill.fengZhiJieJing.filterCard(card);
                    });
                    var bool2=game.filterPlayer(function(current){
                        return lib.skill.fengZhiJieJing.filterTarget('','',current);
                    }).length>0;
                    return bool1&&bool2;
                },
                filterCard:function(card){
                    return get.xiBie(card)=='feng';
                },
                discard:true,
                showCards:true,
                filterTarget:function(card,player,target){
                    for(var xiaoGuoList in game.jiChuXiaoGuo){
                        for(var xiaoGuo of game.jiChuXiaoGuo[xiaoGuoList]){
                            if(target.hasExpansions(xiaoGuo)){
                                return true;
                            }
                        }
                    }
                },
                content:function(){
                    'step 0'
                    player.removeJiChuXiaoGuo(target);
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.jiChuXiaoGuoEffect(target);
                        }
                    }
                }
            },
            tianShiZhuFu:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.tianShiZhuFu.filterCard(card);
                    });
                },
                filterCard:function(card){
                    return get.xiBie(card)=='shui';
                },
                discard:true,
                showCards:true,
                selectTarget:[1,2],
                filterTarget:true,
                content:function(){
                    'step 0'
                    if(targets.length==1){
                        if(target.countCards('h')>=2){
                            target.chooseToGive('交给守护天使2张牌',true,2,player).set('visibleMove',true);
                        }else if(target.countCards('h')==1){
                            target.chooseToGive('交给守护天使1张牌',true,1,player).set('visibleMove',true);
                        }else if(target.countCards('h')==0){
                            event.finish();
                        }
                    }else if(targets.length==2){
                        if(target.countCards('h')>=1){
                            target.chooseToGive('交给守护天使1张牌',true,1,player).set('visibleMove',true);
                        }else{
                            event.finish();
                        }
                    }
                },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                            return 1;
                        },
                        player:0,
                    }
                }
            },
            tianShiJiBan:{
                trigger:{player:['removeJiChuXiaoGuo','daChuPai']},
                forced:true,
                filter:function(event,player){
                    if(event.name == 'useCard') return event.card.name=='shengDun';
                    else return true;
                },
                content:function(){
                    'step 0'
                    player.chooseTarget('天使羁绊：选择一名角色+1[治疗]',true).set('ai',function(target){
                        var player=_status.event.player;
                        return get.zhiLiaoEffect2(target,player,1);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        target.changeZhiLiao(1,player);
                    }
                },
            },
            tianShiZhiQiang:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('tianShiZhiQiang');
				},
				position:'h',
				viewAs:{name:'shengDun'},
				viewAsFilter:function(player){
                    return player.hasCard(function(card){
                        return lib.skill.tianShiZhiQiang.filterCard(card);
                    });
				},
                ai:{
                    order:3.8,
                }
            },
            tianShiZhiGe:{
                trigger:{player:'huiHeQian'},
                filter:function(event,player){
                    if(!player.canBiShaShuiJing()){
                        return false;
                    }
                    for(var p of game.players){
                        for(var xiaoGuoList in game.jiChuXiaoGuo){
                            for(var xiaoGuo of game.jiChuXiaoGuo[xiaoGuoList]){
                                if(p.hasExpansions(xiaoGuo)){
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                async cost(event, trigger, player) {
                    event.result = await player.chooseTarget(function(card,player,target){
                        for(var xiaoGuoList in game.jiChuXiaoGuo){
                            for(var xiaoGuo of game.jiChuXiaoGuo[xiaoGuoList]){
                                if(target.hasExpansions(xiaoGuo)){
                                    return true;
                                }
                            }
                        }
                    })
                    .set('ai',function(target){
                        var player=_status.event.player;
                        if(target.side==player.side){
                            return get.jiChuXiaoGuoEffect(target);
                        }else{
                            return -get.jiChuXiaoGuoEffect(target);
                        }
                    })
                    .set('prompt',get.prompt('tianShiZhiGe'))
                    .set('prompt2',lib.translate.tianShiZhiGe_info)
                    .forResult();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    player.removeJiChuXiaoGuo(event.targets[0]);
                },
                check:function(event,player){
                    var players=game.filterPlayer(function(current){
                        if(player.side==current.side) return get.jiChuXiaoGuoEffect(target)>0;
                        else return -get.jiChuXiaoGuoEffect()>0;
                    });
                    return players.length>0;
                },
                ai:{
                    shuiJing:true,
                }
            },
            shenZhiBiHu:{
                trigger:{global:'changeShiQiQian'},
                filter:function(event,player){
                    if(event.side!=player.side) return false;
                    return player.canBiShaShuiJing()&&event.num<0&&event.yuanYin=='damage'&&event.faShu==true;
                },
                async cost(event, trigger, player) {
                    var list=[];
                    for(var i=0;i<player.countNengLiang('baoShi');i++){
                        list.push(['baoShi','宝石']);
                    }
                    for(var i=0;i<player.countNengLiang('shuiJing');i++){
                        list.push('shuiJing','水晶');
                    }
                    var result = await player.chooseButton(['是否发动【神之庇护】<br>'+lib.translate.shenZhiBiHu_info,[list,'tdnodes']])
                    .set('selectButton',[1,-trigger.num])
                    .forResult();
                    event.result = {
						bool: result.bool,
						cost_data: result.links,
					};
                },
                content:function(){
                    'step 0'
                    var links=event.cost_data;
                    var num=links.length;
                    if(num>0){
                        trigger.num+=num;
                        var dict={baoShi:0,shuiJing:0};
                        for(var i=0;i<links.length;i++){
                            if(links[i]=='baoShi'){
                                dict['baoShi']++;
                            }else if(links[i]=='shuiJing'){
                                dict['shuiJing']++;
                            }
                        }
                        if(dict['baoShi']>0) player.changeNengLiang('baoShi',-dict['baoShi']);
                        if(dict['shuiJing']>0) player.changeNengLiang('shuiJing',-dict['shuiJing']);
                    }
                },
                ai:{
                    shuiJing:true,
                }
            },
            //神箭手
            shanDianJian:{
                forced:true,
                trigger:{player:"gongJiSheZhi"},
                filter:function(event){
                    return get.xiBie(event.card)=='lei';
                },
                content:function(){
                    trigger.wuFaYingZhan();
                }
            },
            guanChuanSheJi:{
                trigger:{source:"gongJiWeiMingZhong"},
                filter:function(event,player){
                    if(event.yingZhan==true) return false;
                    return player.countCards('h')>0;
                },
                async cost(event, trigger, player) {
                    event.result=await player.chooseCard('h',1,function(card){
                        return get.type(card)=='faShu';
                    })
                    .set('prompt',get.prompt('guanChuanSheJi'))
                    .set('prompt2',lib.translate.guanChuanSheJi_info)
                    .set('ai',function(card){
                        return 6-get.value(card);
                    })
                    .forResult();
                },
                content:function(){
                    'step 0'
                    player.discard(event.cards).set('showCards',true);
                    'step 1'
                    trigger.player.faShuDamage(2,player);
                }
            },
            shanGuangXianJing:{
                type:'faShu',
                enable:'faShu',
				filterCard:function(card){
                    return card.hasDuYou('shanGuangXianJing');
				},
				position:'h',
				filter:function(event,player){
                    return player.countCards('h',function(card){
                        return lib.skill.shanGuangXianJing.filterCard(card);
                    });
				},
                filterTarget:true,
                useCard:true,
                content:function(){
                    target.faShuDamage(2,player);
                },
                ai:{
                    order:3.6,
                    result:{
                        target:function(player,target){
                            if(target.countCards('h')+2>target.getHandcardLimit()) return -1;
                            return -0.1;
                        }
                    }
                }
            },
            jingZhunSheJi:{
                trigger:{player:'gongJiShi'},
                filter:function(event,player){
                    return event.card.hasDuYou('jingZhunSheJi');
                },
                content:function(){
                    trigger.qiangZhiMingZhong();
                    trigger.changeDamageNum(-1);
                },
                check:function(event,player){
                    return event.targets[0].countCards('h')>3;
                }
            },
            juJi:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaShuiJing();
                },
                filterTarget:true,
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    target.drawTo(5);
                    player.addGongJi();
                },
                ai:{
                    shuiJing:true,
                    order:3.8,
                    result:{
                        target:function(player,target){
                            var num=target.countCards('h');
                            if(target.getHandcardLimit()<5) return -5;
                            else return 0;
                        }
                    }
                }
            },
            //魔法少女
            moBaoChongJi:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.hasCard(card=>lib.skill.moBaoChongJi.filterCard(card));
                },
                selectTarget:2,
                filterTarget:function(card,player,target){
                    return target.side!=player.side;
                },
                filterCard:function(card){
                    return get.type(card)=='faShu';
                },
                discard:true,
                showCards:true,
                contentBefore:function(){
                    player.changeZhanJi('baoShi',1);
                },
                content:function(){
                    'step 0'
                    var name=get.translation(player);
                    target.chooseToDiscard(`弃置1张法术牌，否则${name}对你造成2点法术伤害③、${name}弃一张牌`,1,function(card){
                        return get.type(card)=='faShu';
                    })
                    .set('showCards',true)
                    .set('ai',function(){
                        return 1;
                    });
                    'step 1'
                    if(!result.bool){
                        target.faShuDamage(2,player);
                        if(player.countCards('h')>=1){
                            player.chooseToDiscard(1,true);
                        }
                    }
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            var chaZhi=target.getHandcardLimit()-target.countCards('h');
                            if(chaZhi<=1) return -2;
                            else return -0.1;
                        }
                    }
                }
            },
            moDanZhangWo:{
                trigger:{player:'useCardBefore'},
                forced:true,
                filter:function(event,player){
                    if(player.storage.moDan==true) return false;
                    if(get.name(event.card)!='moDan') return false;
                    var range_l=0,range_r=0;
                    var target=player;
                    while(target!=event.targets[0]){
                        target=target.getPrevious();
                        range_l++;
                    }
                    target=player;
                    while(target!=event.targets[0]){
                        target=target.getNext();
                        range_r++;
                    }
                    if(range_l==range_r){
                        return !(player.side==player.getNext().side);
                    }
                    return range_l<range_r;
                },
                content:function(){
                    game.broadcastAll(function(){
                        game.moDanFangXiang='zuo';
                    });
                    if(game.zhanJiList) game.zhanJiList['moDanFangXiang']='zuo';
                },
                mod:{
                    playerEnabled:function(card,player,target){
                        if(player.storage.moDan==true) return;
                        if(get.name(card)=='moDan'){
                            var mubiao=player.getPrevious();
                            while(mubiao.side==player.side){
                                mubiao=mubiao.getPrevious();
                                while(mubiao.storage.moDan==true){
                                    mubiao=mubiao.getPrevious();
                                }
                            }
						    if(target==mubiao) return true;
                        }
                    }
                }
            },
            moDanRongHe:{
                enable:['faShu','moDan'],
				filterCard:function(card){
                    return get.xiBie(card)=='di'||get.xiBie(card)=='huo';
				},
				position:'h',
				viewAs:{name:'moDan'},
				viewAsFilter:function(player){
                    return player.hasCard(function(card){
                        return lib.skill.moDanRongHe.filterCard(card);
                    });
				},
                ai:{
                    order:3.5,
                }
            },
            huiMieFengBao:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                selectTarget:2,
                filterTarget:function(card,player,target){
                    return target.side!=player.side;
                },
                contentBefore:function(){
                    player.removeBiShaBaoShi();
                },
                content:function(){
                    target.faShuDamage(2,player);
                },
                ai:{
                    baoShi:true,
                    order:3.8,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target,player,2);
                        }
                    }
                }
            },
            //女武神
            shenShengZhuiJi:{
                trigger:{player:['gongJiHou','faShuHou']},
                filter:function(event,player){
                    return player.zhiLiao>0&&event.yingZhan!=true;
                },
                content:function(){
                    player.changeZhiLiao(-1);
                    player.addGongJi();
                }
            },
            zhiXuZhiYin:{
                type:'faShu',
                enable:'faShu',
                content:function(){
                    'step 0'
                    player.draw(2);
                    'step 1'
                    player.changeZhiLiao(1);
                    player.addNengLiang('shuiJing');
                },
                ai:{
                    order:4,
                    result:{
                        player:function(player, target){
                            if(player.isHengZhi()) return -1;
                            if(player.countCards('h')+2>player.getHandcardLimit()) return -1;
                            else return 1;
                        },
                    }
                }
            },
            hePingXingZhe:{
                group:'hePingXingZhe_chongZhi',
                forced:true,
                trigger:{player:"yingLingZhaoHuan"},
                filter:function(event,player){
                    if(_status.currentPhase!=player) return false;
                    return !player.isHengZhi();
                },
                content:function(){
                    player.hengZhi();
                },
                subSkill:{
                    chongZhi:{
                        forced:true,
                        trigger:{player:'gongJiShi'},
                        filter:function(event,player){
                            if(!player.isHengZhi()) return false;
                            if(event.yingZhan==true) return false;
                            return true;
                        },
                        content:function(){
                            player.chongZhi();
                            
                        }
                    }
                }
            },
            junShenWeiGuan:{
                forced:true,
                trigger:{player:'huiHeKaiShi'},
                filter:function(event,player){
                    return player.isLinked();
                },
                content:function(){
                    'step 0'
                    var choiceList=['你+1[治疗]，[重置]脱离【英灵形态】','(移除我方【战绩区】X个星石，X<3)目标角色+X[治疗]'];
                    var choices=['选项一'];
                    var list=get.zhanJi(player.side);
                    if(list.length>=1){
                        choices.push('选项二');
                    }
                    player.chooseControl(choices).set('prompt','军光神威：选择一项').set('choiceList',choiceList);
                    'step 1'
                    if(result.index==0){
                        player.changeZhiLiao(1);
                        player.chongZhi();
                        event.finish();
                    }else if(result.index==1){
                        var list=get.zhanJi(player.side);
                        var listx=[];
                        for(var i=0;i<list.length;i++){
                            listx.push([list[i],get.translation(list[i])]);
                        }
                        var next=player.chooseButton([
                            '移除X个星石，X<3',
                            [listx,'tdnodes'],
                        ]);
                        next.set('forced',true);
                        next.set('selectButton',[1,2]);
                    }
                    'step 2'
                    event.number=result.links.length;
                    var number=event.number;
                    var dict={baoShi:0,shuiJing:0};
                    for(var i=0;i<result.links.length;i++){
						if(result.links[i]=='baoShi'){
                            dict['baoShi']++;
						}else if(result.links[i]=='shuiJing'){
                            dict['shuiJing']++;
						}
					}
                    if(dict['baoShi']>0){
                        var next=player.removeZhanJi('baoShi',dict['baoShi']);
                    }
                    if(dict['shuiJing']>0){
                        var next=player.removeZhanJi('shuiJing',dict['shuiJing']);
                    }
                    'step 3'
                    var number=event.number;
                    player.chooseTarget(1,true,'选择一个目标角色+'+number+'点[治疗]').set('ai',function(target){
                        var player=_status.event.player;
                        var number=_status.event.number;
                        return get.zhiLiaoEffect2(target,player,number);
                    }).set('number',number);
                    'step 4'
                    result.targets[0].changeZhiLiao(event.number,player);
                }
            },
            yingLingZhaoHuan:{
                trigger:{player:'gongJiMingZhong'},
                filter:function(event,player){
                    return player.canBiShaShuiJing();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    trigger.changeDamageNum(1);
                    'step 2'
                    player.chooseCardTarget({
                        filterCard:function(card){
                            return get.type(card)=='faShu';
                        },
                        filterTarget:true,
                        prompt:"<span class='tiaoJian'>(若你额外弃置1张法术牌[展示])</span>目标角色+1[治疗]",
                        ai1(card) {
                            return 6- get.value(card);
                        },
                        ai2(target) {
                            return get.zhiLiaoEffect2(target,player,1);
                        },
                    });
                    'step 3'
                    if(result.bool){
                        player.discard(result.cards).set('showCards',true);
                        event.target=result.targets[0];
                    }else{
                        event.goto(5);
                    }
                    'step 4'
                    event.target.changeZhiLiao(1);
                    'step 5'
                    event.trigger('yingLingZhaoHuan')
                },
                ai:{
                    shuiJing:true,

                }
            },
            //元素师
            yuanSuXiShou:{
                trigger:{source:'zaoChengShangHai'},
                frequent:true,
                filter:function(event,player){
                    if(event.faShu!=true) return false;
                    if(event.yuanSuDianRan==true) return false;
                    return true;
                },
                content:function(){
                    player.addZhiShiWu('yuanSu');
                }
            },
            yuanSuDianRan:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.countMark('yuanSu')>=3
                },
                filterTarget:true,
                content:function(){
                    'step 0'
                    player.removeZhiShiWu('yuanSu',3);
                    'step 1'
                    target.damage(2,player).set('faShu',true).set('yuanSuDianRan',true);
                    'step 2'
                    player.addFaShu();
                },
                ai:{
                    order:3.7,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target,2);
                        }
                    }
                }
            },
            yunShi:{
                type:'faShu',
                enable:'faShu',
                selectCard:[1,2],
                filterCard:function(card){
                    if(ui.selected.cards.length==0){
                        return card.hasDuYou('yunShi');
                    }else{
                        return get.xiBie(card)=='di'
                    }
                },
                discard:false,
                filterOk:function(){
                    return ui.selected.cards[0].hasDuYou('yunShi')
                },
                complexCard:true,
                prepare:function(cards,player,targets){
                    if(cards.length==1){
                        player.useCard(cards);
                    }else{
                        player.useCard(cards[0]);
                        player.discard(cards[1]).set('showCards',true);
                    }
                },
				position:'h',
                filterTarget:true,
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.yunShi.filterCard(card);
                    });
				},
                content:function(){
                    'step 0'
                    event.num=1;
                    if(cards.length==2){
                        event.num++;
                    }
                    'step 1'
                    target.faShuDamage(event.num,player);
                    'step 2'
                    player.addFaShu();
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target);
                        }
                    }
                }
            },
            bingDong:{
                type:'faShu',
                enable:'faShu',
                selectCard:[1,2],
                filterCard:function(card){
                    if(ui.selected.cards.length==0){
                        return card.hasDuYou('bingDong');
                    }else{
                        return get.xiBie(card)=='shui'
                    }
                },
                filterOk:function(){
                    return ui.selected.cards[0].hasDuYou('bingDong');
                },
                complexCard:true,
                discard:false,
                prepare:function(cards,player,targets){
                    if(cards.length==1){
                        player.useCard(cards);
                    }else{
                        player.useCard(cards[0]);
                        player.discard(cards[1]).set('showCards',true);
                    }
                },
				position:'h',
                filterTarget:true,
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.bingDong.filterCard(card);
                    });
				},
                content:function(){
                    'step 0'
                    event.num=1;
                    if(cards.length==2){
                        event.num++;
                    }
                    'step 1'
                    target.faShuDamage(event.num,player);
                    'step 2'
                    player.chooseTarget(1,'冰冻：选择1名角色+1点[治疗]',true).set('ai',function(target){
                        var player=_status.event.player;
                        return get.zhiLiaoEffect2(target,player,1);
                    });
                    'step 3'
                    if(result.bool){
                        result.targets[0].changeZhiLiao(1,player);
                    }
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target);
                        }
                    }
                }
            },
            huoQou:{
                type:'faShu',
                enable:'faShu',
				selectCard:[1,2],
                filterCard:function(card){
                    if(ui.selected.cards.length==0){
                        return card.hasDuYou('huoQou');
                    }else{
                        return get.xiBie(card)=='huo'
                    }
                },
                filterOk:function(){
                    if(ui.selected.cards[0].hasDuYou('huoQou')){
                        return true;
                    }else{
                        return false;
                    }
                },
                complexCard:true,
                discard:false,
                prepare:function(cards,player,targets){
                    if(cards.length==1){
                        player.useCard(cards);
                    }else{
                        player.useCard(cards[0]);
                        player.discard(cards[1]).set('showCards',true);
                    }
                },
				position:'h',
                filterTarget:true,
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.huoQou.filterCard(card);
                    });
				},
                content:function(){
                    'step 0'
                    event.num=2;
                    if(cards.length==2){
                        event.num++;
                    }
                    'step 1'
                    target.faShuDamage(event.num,player);
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target,2);
                        }
                    }
                }
            },
            fengRen:{
                type:'faShu',
                enable:'faShu',
				selectCard:[1,2],
                filterCard:function(card){
                    if(ui.selected.cards.length==0){
                        return card.hasDuYou('fengRen');
                    }else{
                        return get.xiBie(card)=='feng'
                    }
                },
                filterOk:function(){
                    return ui.selected.cards[0].hasDuYou('fengRen')
                },
                complexCard:true,
                discard:false,
                prepare:function(cards,player,targets){
                    if(cards.length==1){
                        player.useCard(cards);
                    }else{
                        player.useCard(cards[0]);
                        player.discard(cards[1]).set('showCards',true);
                    }
                },
				position:'h',
                filterTarget:true,
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.fengRen.filterCard(card);
                    });
				},
                content:function(){
                    'step 0'
                    event.num=1;
                    if(cards.length==2){
                        event.num++;
                    }
                    'step 1'
                    target.faShuDamage(event.num,player);
                    'step 2'
                    player.addGongJi();
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target);
                        }
                    }
                }
            },
            leiJi:{
                type:'faShu',
                enable:'faShu',
				selectCard:[1,2],
                filterCard:function(card){
                    if(ui.selected.cards.length==0){
                        return card.hasDuYou('leiJi');
                    }else{
                        return get.xiBie(card)=='lei'
                    }
                },
                filterOk:function(){
                    return ui.selected.cards[0].hasDuYou('leiJi')
                },
                complexCard:true,
                discard:false,
                prepare:function(cards,player,targets){
                    if(cards.length==1){
                        player.useCard(cards);
                    }else{
                        player.useCard(cards[0]);
                        player.discard(cards[1]).set('showCards',true);;
                    }
                },
				position:'h',
                filterTarget:true,
				filter:function(event,player){
                    return player.hasCard(function(card){
                        return lib.skill.leiJi.filterCard(card);
                    });
				},
                content:function(){
                    'step 0'
                    event.num=1;
                    if(cards.length==2){
                        event.num++;
                    }
                    'step 1'
                    target.faShuDamage(event.num,player);
                    'step 2'
                    player.changeZhanJi('r',1);
                },
                ai:{
                    order:3.5,
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target);
                        }
                    }
                }
            },
            yueGuang:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                filterTarget:true,
                content:function(){
                    'step 0'
                    player.removeBiShaBaoShi();
                    'step 1'
                    var num=player.countNengLiangAll()+1;
                    event.num=num;
                    'step 2'
                    target.faShuDamage(event.num,player);
                },
                ai:{
                    baoShi:true,
                    order:function(item,player){
                        return 3.4+(player.countNengLiangAll()-1)*0.1;
                    },
                    result:{
                        target:function(player,target){
                            return get.damageEffect(target,2);
                        }
                    }
                }
            },
            yuanSu:{
                intro:{
                    name:'元素',
                    content:'mark',
                    max:3,
                },
                onremove:'storage',
                markimage:'image/card/zhiShiWu/hong.png',
            },
            //月之女神
            xinYueBiHu:{
                trigger:{global:'changeShiQiQian'},
                filter:function(event,player){
                    if(player.isLinked()) return false;
                    if(event.side!=player.side) return false;
                    if(event.num>=0) return false;
                    if(event.yuanYin!='damage') return false;
                    if(!event.cards) return false;
                    return true;
                },
                content:function(){
                    'step 0'
                    player.hengZhi();
                    'step 1'
                    var cards=trigger.cards;
                    if(cards){
                        player.addToExpansion('draw',trigger.cards,'log').gaintag.add('anYue');
                    }
                    'step 2'
                    trigger.cancel();
                }
            },
            anYueZuZhou:{
                trigger:{player:'discard'},
                forced:true,
                filter:function(event,player){
                    return event.cards.length>0&&event.gaiPai=='anYue';
                },
                content:function(){
                    'step 0'
                    player.changeShiQi(-1);
                    'step 1'
                    if(player.getExpansions('anYue').length==0){
                        player.chongZhi();
                    }
                }
            },
            meiDuShaZhiYan:{
                trigger:{global:'gongJiShi'},
                filter:function(event,player){
                    if(event.player.side==player.side) return false;
                    var anYue=player.getExpansions('anYue');
                    return anYue.length>0;
                },
                async cost(event, trigger, player) {
                    var result = await player.chooseCardButton(player.getExpansions('anYue'),'是否发动【美杜莎之眼】<br>'+lib.translate.meiDuShaZhiYan_info)
                    .set('filterButton',function(button){
                        return get.xiBie(button.link)==_status.event.xiBie;
                    })
                    .set('xiBie',get.xiBie(trigger.card)).forResult();
                    event.result = {
                        bool: result.bool,
                        cost_data: result.links,
                    }
                },
                content:function(){
                    'step 0'
                    var card=event.cost_data[0];
                    event.card=card;
                    player.discard(card,'anYue').set('showHiddenCards',true);
                    'step 1'
                    player.changeZhiLiao(1);
                    'step 2'
                    player.addZhiShiWu('shiHua');
                    'step 3'
                    if(get.type(event.card)=='faShu'){
                        if(player.countCards('h')>0){
                            player.chooseToDiscard('h',true);
                        }
                    }else event.finish();
                    'step 4'
                    var next=player.chooseTarget(1,'美杜莎之眼：目标对手造成1点法术伤害③',true,function(card,player,target){
                        return target.side!=player.side;
                    });
                    next.set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect2(target,player,1);
                    });
                    'step 5'
                    if(result.bool){
                        result.targets[0].damage(1,player).set('faShu',true);
                    }
                }

            },
            yueZhiLunHui:{
                trigger:{player:'huiHeJieShu'},
                priority:1,
                filter:function(event,player){
                    return player.zhiLiao>0||player.getExpansions('anYue').length>0;
                },
                async cost(event, trigger, player) {
                    var choices=[];
                    var choiceList=['<span class="tiaoJian">(移除1个【暗月】)</span>目标角色+1[治疗]',"<span class='tiaoJian'>(移除你的1[治疗])</span>你+1<span class='hong'>【</span>新月<span class='hong'>】</span>"];
                    if(player.getExpansions('anYue').length>0){
                        choices.push('选项一');
                    }
                    if(player.zhiLiao>0){
                        choices.push("选项二");
                    }
                    choices.push('cancel2');
                    var result=await player.chooseControl(choices).set('prompt',"月之轮回：选择以下一项发动").set('choiceList',choiceList).set('ai',function(){
                        var player=_status.event.player;
                        if(player.zhiLiao>0) return "选项二";
                        if(player.getExpansions('anYue').length>0) return "选项一";
                        return 'cancel2';
                    }).forResult();
                    event.result = {
                        bool: result.control!='cancel2',
                        cost_data: result.control,
                    };
                },
                content:async function(event, trigger, player){
                    if(event.cost_data=='选项一'){
                        var anYue=player.getExpansions('anYue');
                        var links=await player.chooseCardButton(anYue,true,'移除1个【暗月】目标角色+1[治疗]').forResult('links');
                        await player.discard(links,'anYue');
                        var targets=await player.chooseTarget(1,'月之轮回：选择1名目标角色+1[治疗]',true).forResult('targets');
                        targets[0].changeZhiLiao(1,player);
                    }else if(event.cost_data=="选项二"){
                        await player.changeZhiLiao(-1);
                        await player.addZhiShiWu('xinYue');
                    }
                }
            },
            yueDu:{
                usable:1,
                trigger:{source:'chengShouShangHai'},
                filter:function(event,player){
                    return event.faShu==true&&player.zhiLiao>0;
                },
                content:function(){
                    'step 0'
                    player.changeZhiLiao(-1);
                    'step 1'
                    player.chooseTarget(1,true,'对目标对手造成1点法术伤害③',function(card,player,target){
                        return target.side!=player.side;
                    });
                    'step 2'
                    if(result.bool){
                        result.targets[0].faShuDamage(1,player);
                    }
                }
            },
            anYueZhan:{
                trigger:{player:'gongJiMingZhong'},
                filter:function(event,player){
                    if(event.yingZhan==true) return false;
                    return player.isLinked()&&player.canBiShaShuiJing()&&player.getExpansions('anYue').length>0;
                },
                async cost(event, trigger, player) {
                    var result=await player.chooseCardButton(player.getExpansions('anYue'),true,'是否发动【暗月斩】<br>'+lib.translate.anYueZhan_info).forResult();
                    event.result = {
                        bool: result.bool,
                        cost_data: result.links,
                    };
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 2'
                    event.num=event.cost_data.length;
                    player.discard(event.cost_data,'anYue');
                    'step 3'
                    trigger.changeDamageNum(event.num);
                },
                ai:{
                    shuiJing:true,
                }
            },
            cangBaiZhiYue:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaBaoShi();
                },
                content:async function(event, trigger, player){
                    await player.removeBiShaBaoShi();

                    var choiceList=["<span class='tiaoJian'>(移除3个</span><span class='lan'>【石化】</span><span class='tiaoJian'>)</span>你的下次主动攻击对手无法应战，额外+1[攻击行动]。你额外获得一个回合","移除X点<span class='hong'>【新月】</span>，你+1点<span class='lan'>【石化】</span>，弃1张牌，对目标对手造成(X+1)点法术伤害③"];
                    var choices=['选项二']
                    if(player.countZhiShiWu('shiHua')>=3){
                        choices.unshift('选项一');
                    }
                    var control=await player.chooseControl(choices).set('prompt','苍白之月：选择以下一项发动').set('choiceList',choiceList).set('ai',function(){
                        var player=_status.event.player;
                        if(player.countZhiShiWu('shiHua')>=3) return "选项一";
                        return "选项二";
                    }).forResult('control');
                    if(control=='选项一'){
                        await player.removeZhiShiWu('shiHua',3);
                        player.addSkill('cangBaiZhiYue_wuFaYingZhan');
                        player.addGongJi();
                        player.insertPhase();
                    }else if(control=="选项二"){
                        var list=[];
                        var xinYue=player.countZhiShiWu('xinYue');
                        for(var i=0;i<=xinYue;i++){
                            list.push(i);
                        }
                        var num=await player.chooseControl(list).set('prompt',"移除X点<span class='hong'>【</span>新月<span class='hong'>】</span>，你+1点<span class='lan'>【</span>石化<span class='lan'>】</span>，弃1张牌，对目标对手造成(X+1)点法术伤害③").set('ai',function(){return _status.event.num;}).set('num',list.length-1).forResult('control');
                        if(num>0){
                            await player.removeMark('xinYue',num);
                        }
                        await player.addZhiShiWu('shiHua');
                        if(player.countCards('h')>0){
                            await player.chooseToDiscard(1,'h',true);
                        }
                        var targets=await player.chooseTarget(1,`对目标对手造成${num+1}点法术伤害③`,true,function(card,player,target){
                            return target.side!=player.side;
                        }).forResult('targets');
                        await targets[0].faShuDamage(num+1,player);
                    }
                },
                subSkill:{
                    wuFaYingZhan:{
                        trigger:{player:'gongJiSheZhi'},
                        direct:true,
                        filter:function(event,player){
                            return event.yingZhan!=true;
                        },
                        content:function(){
                            'step 0'
                            player.canYingZhan=true;
                            'step 1'
                            player.removeSkill('cangBaiZhiYue_wuFaYingZhan');
                        }
                    }
                },
                ai:{
                    baoShi:true,
                    order:4,
                    result:{
                        player:1,
                    }
                }
            },
            xinYue:{
                intro:{
                    name:'新月',
                    content:'mark',
                    max:2,
                },
                onremove:'storage',
                markimage:'image/card/zhiShiWu/hong.png',
            },
            shiHua:{
                intro:{
                    name:'石化',
                    content:'mark',
                    max:3,
                },
                onremove:'storage',
                markimage:'image/card/zhiShiWu/lan.png',
            },
            anYue:{
                intro:{
                    name:'暗月',
                    markcount:'expansion',
                    mark:function(dialog,storage,player){
						var cards=player.getExpansions('anYue');
						if(player.isUnderControl(true)) dialog.addAuto(cards);
						else return '共有'+cards.length+'张牌';
					},
                },
                onremove:function(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            //仲裁者
            zhongCaiFaZe:{
                trigger:{global:"gameStart"},
                forced:true,
                content:function(){
                    player.changeNengLiang('shuiJing',2);
                }
            },
            yiShiZhongDuan:{
                type:'qiDong',
                trigger:{player:'qiDong'},
                filter:function(event,player){
                    return player.isLinked();
                },
                content:function(){
                    'step 0'
                    player.chongZhi();
                    'step 1'
                    player.addZhanJi('baoShi',1)
                },
                check:function(event,player){
                    return player.countZhiShiWu('shenPan')>=3;
                }
            },
            moRiShenPan:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.countZhiShiWu('shenPan')>0;
                },
                filterTarget:true,
                content:function(){
                    'step 0'
                    event.num=player.countZhiShiWu('shenPan');
                    player.removeZhiShiWu('shenPan',event.num);
                    'step 1'
                    target.faShuDamage(event.num,player);
                },
                group:'moRiShenPan_sheZhi',
                subSkill:{
                    sheZhi:{
                        trigger:{player:'xingDongKaiShi'},
                        direct:true,
                        priority:1,
                        filter:function(event,player){
                            return player.countZhiShiWu('shenPan')>=get.info('shenPan').intro.max;
                        },
                        content:function(){
                            trigger.canTeShu=false;
                            player.addTempSkill('moRiShenPan_biXu',{player:'useSkill'});
                        }
                    },
                    biXu:{
                        init:function(player,skill){
                            player.addSkillBlocker(skill);
                        },
                        onremove:function(player,skill){
                            player.removeSkillBlocker(skill);
                        },
                        skillBlocker:function(skill,player){
                            var info=get.info(skill);
                            return skill!='moRiShenPan'&&info.type=='faShu';
                        },
                        mod:{
                            cardEnabled:function(card,player){
                                return false;
                            }
                        },

                    }
                },
                ai:{
					order:function(item,player){
						return 1.5+player.countZhiShiWu('shenPan');
					},
					result:{
						target:function(player,target){
							return get.damageEffect(target,player.countZhiShiWu('shenPan'));
						}
					},
				},
            },
            shenPanLangChao:{
                forced:true,
                trigger:{player:'chengShouShangHai'},
                content:function(){
                    player.addZhiShiWu('shenPan',1);
                },
            },
            zhongCaiYiShi:{
                type:'qiDong',
                trigger:{player:'qiDong'},
                filter:function(event,player){
                    if(event.qiDong==true) return false;
                    return player.canBiShaBaoShi()&&!player.isLinked();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaBaoShi();
                    'step 1'
                    player.hengZhi();
                },
                mod:{
                    maxHandcardFinal:function(player,num){
                        if(player.isLinked()) return 5;
                    }
                },
                group:'zhongCaiYiShi_shenPan',
                subSkill:{
                    shenPan:{
                        trigger:{player:'huiHeKaiShi'},
                        forced:true,
                        filter:function(event,player){
                            return player.isLinked();
                        },
                        content:function(){
                            player.addZhiShiWu('shenPan',1);
                        }
                    }
                },
                ai:{
                    baoShi:true,
                }
            },
            panJueTianPing:{
                type:'faShu',
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaShuiJing();
                },
                content:function(){
                    'step 0'
                    player.removeBiShaShuiJing();
                    'step 1'
                    player.addZhiShiWu('shenPan',1);
                    var list=['弃掉所有手牌','将你的手牌补到上限[强制]，我方【战绩区】+1[宝石]'];
                    player.chooseControl().set('prompt','判决天平：选择一项').set('choiceList',list).set('ai',function(){
                        var player=_status.event.player;
                        if(player.countCards('h')>3) return '选项一';
                        return '选项二';
                    });
                    'step 2'
                    if(result.control=='选项一'){
                        player.discard(player.getCards('h'));
                    }
                    else if(result.control=='选项二'){
                        var num=player.getHandcardLimit();
                        player.drawTo(num);
                        player.addZhanJi('baoShi',1);
                    }
                },
                ai:{
                    shuiJing:true,
                    order:3.6,
                    result:{
                        player:1,
                    }
                }
            },
            shenPan:{
                intro:{
                    name:'审判',
                    content:'mark',
                    max:4,
                },
                onremove:'storage',
                markimage:'image/card/zhiShiWu/hong.png',
            },
            //冒险家
            qiZha:{
                enable:'gongJi',
                filter:function(event,player){
                    var bool1=player.countTongXiPai(player.getCards('h'))>=2;
                    var bool2=game.filterPlayer(current=>lib.skill.qiZha.filterTarget('',player,current)).length>1;
                    return bool1&&bool2;
                },
                selectCard:[2,3],
                showCards:true,
                discard:true,
                filterCard:function(card){
                    return get.xuanZeTongXiPai(card);
                },
                complexCard:true,
                filterTarget:function(card,player,target){
                    var cardx={name:'anMie'};
                    return player.canUse(cardx,target);
                },
                content:async function(event, trigger, player){
                    await event.trigger('qiZha');
                    var length=event.cards.length;
                    var xiBie,name;
                    if(length==2){
                        var list=['shui','huo','feng','lei','di'];
                        var random=list.randomGet();
                        var control=await player.chooseControl(list).set('prompt','选择攻击系别').set('ai',function(){
                            return _status.event.random;
                        }).set('random',random).forResult('control');
                        xiBie=control;
                        switch(xiBie){
                            case'shui':name='shuiLianZhan';break;
                            case 'huo':name='huoYanZhan';break;
                            case 'feng':name='fengShenZhan';break;
                            case 'lei':name='leiGuangZhan';break;
                            case 'di':name='diLieZhan';break;
                        }
                    }else if(length==3){
                        xiBie='an';
                        name='anMie';
                    }
                    var card={name:name,xiBie:xiBie};
                    await player.useCard(card,event.target);
                },
                ai:{
                    order:3.7,
                    result:{
                        target:-1,
                    }
                },
                check: function (card) {
					return 6 - get.value(card);
				},
            },
            qiangYun:{
                trigger:{player:'qiZha'},
                forced:true,
                content:function(){
                    player.addNengLiang('shuiJing');
                }
            },
            diXiaFaZe:{
                trigger:{player:'gouMai'},
                forced:true,
                content:function(){
                    player.addZhanJi('baoShi',2);
                    trigger.finish();
                }
            },
            maoXianJiaTianTang:{
                enable:'phaseUse',
                type:'teShu',
                filter:function(event,player){
                    var side=player.side;
                    var zhanJi=get.zhanJi(side);
                    if(zhanJi.length==0) return false;
                    for(var i=0;i<game.players.length;i++){
                        if(side!=game.players[i].side) continue;
                        if(game.players[i].countNengLiangAll()<game.players[i].getNengLiangLimit()){
                            return true;
                        }
                    }
                },
                filterTarget:function(card,player,target){
                    if(target==player) return false;
                    return player.side==target.side&&target.countNengLiangAll()<target.getNengLiangLimit();
                },
                content:function(){
                    'step 0'
                    var num=target.getNengLiangLimit()-target.countNengLiangAll();
                    num=Math.min(num,2);
                    var list=get.zhanJi(player.side);
                    var listx=[];
                    for(var i=0;i<list.length;i++){
                        listx.push([list[i],get.translation(list[i])]);
                    };
					var next=player.chooseButton([
                        '选择提炼的星石',
                        [listx,'tdnodes'],
                    ]);
                    next.set('forced',true);
                    next.set('selectButton',[1,num]);
                    next.set('ai',function(button){
                        var player=_status.event.target;
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
                    });
                    next.set('target',target);
                    'step 1'
                    event.dict={baoShi:0,shuiJing:0};
                    for(var i=0;i<result.links.length;i++){
                        if(result.links[i]=='baoShi') event.dict.baoShi++;
                        else if(result.links[i]=='shuiJing') event.dict.shuiJing++;
                    }
                    if(event.dict.baoShi>0) player.changeZhanJi('baoShi',-event.dict.baoShi);
                    if(event.dict.shuiJing>0) player.changeZhanJi('shuiJing',-event.dict.shuiJing);
                    'step 2'
                    if(event.dict.baoShi>0) target.addNengLiang('baoShi',event.dict.baoShi);
                    if(event.dict.shuiJing>0) target.addNengLiang('shuiJing',event.dict.shuiJing);
                    'step 3'
                    if(player.countNengLiangAll()>0){
                        player.removeBiShaShuiJing();
                    }
                },
                ai:{
                    order:3.6,
                    result:{
                        target:function(player,target){
                            if(!(target.hasSkillTag('baoShi')||target.hasSkillTag('shuiJing'))) return 0;
                            var list=get.zhanJi(player.side);
                            if(target.hasSkillTag('baoShi')&&!target.hasSkillTag('shuiJing')&&!list.includes('baoShi')){
                                return 0;
                            }
							var num=target.getNengLiangLimit()-target.countNengLiangAll();
							if(num>=2) return 2;
							return 0;
                        },
                    }
                }
            },
            touTianHuanRi:{
                type:'faShu',
                usable:1,
                enable:'faShu',
                filter:function(event,player){
                    return player.canBiShaShuiJing();
                },
                chooseButton:{
                    dialog:function(event,player){
                        var dialog=ui.create.dialog('偷天换日','hidden');
                        var list=[['tou','将对方【战绩区】的1[宝石]转移到我方【战绩区】'],['huan','将我方【战绩区】的[水晶]全部转换为[宝石]']]
						dialog.add([list,'textbutton']);
						return dialog;
                    },
                    filter:function(button,player){
                        var link=button.link;
                        if(link=='tou'){
                            var zhanJi=get.zhanJi(!player.side);
                            return zhanJi.includes('baoShi');
                        }
                        if(link=='huan'){
                            return true;
                        }
                    },
                    backup:function(links,player){
                        if(links[0]=='tou'){
                            var next=get.copy(lib.skill['touTianHuanRi_tou']);
                        }else if(links[0]=='huan'){
                            var next=get.copy(lib.skill['touTianHuanRi_huan']);
                        }
						return next;
					},
                    check:function(button){
                        var player=_status.event.player;
                        if(button.link=='tou'){
                            var zhanJi=get.zhanJi(!player.side);
                            return zhanJi.includes('baoShi');
                        }
                        if(button.link=='huan'){
                            return Math.random()*3;
                        }
                    }
                },
                subSkill:{
                    tou:{
                        type:'faShu',
                        content:function(){
                            'step 0'
                            player.removeBiShaShuiJing();
                            'step 1'
                            var side=player.side;
                            player.changeZhanJi('baoShi',-1,!side)
                            player.addZhanJi('baoShi',1);
                            'step 2'
                            player.addGongJiOrFaShu();
                        }
                    },
                    huan:{
                        type:'faShu',
                        content:function(){
                            'step 0'
                            player.removeBiShaShuiJing();
                            'step 1'
                            var zhanJi=get.zhanJi(player.side).slice();
                            event.num=0;
                            for(var i=0;i<zhanJi.length;i++){
                                event.num++;
                            }
                            'step 2'
                            if(event.num>0){
                                player.changeZhanJi('shuiJing',-event.num);
                            }
                            'step 3'
                            if(event.num>0){
                                player.changeZhanJi('baoShi',event.num);
                            }
                            'step 4'
                            player.addGongJiOrFaShu();
                        }
                    }
                },
                ai:{
                    shuiJing:true,
                    order:3.8,
                    result:{
                        player:function(player){
                            if(player.side==true){
                                if(game.hongZhanJi.includes('shuiJing')||game.lanZhanJi.includes('baoShi')) return 1;
                                else return 0;
                            }else{
                                if(game.lanZhanJi.includes('shuiJing')||game.hongZhanJi.includes('baoShi')) return 1;
                                else return 0;
                            }
                        },
                    }
                }

            },
        },
		
		translate:{
            //角色名字
			fengZhiJianSheng:"风之剑圣",
            kuangZhanShi:"狂战士",
            shenJianShou:"神箭手",
            fengYinShi:"封印师",
            anShaZhe:"暗杀者",
            shengNv:"圣女",
            tianShi:"天使",
            moFaShaoNv:"魔法少女",
            moJianShi:"魔剑士",
            shengQiangQiShi:"圣枪骑士",
            yuanSuShi:"元素师",
            maoXianJia:"冒险家",
            wenYiFaShi:"瘟疫法师",
            zhongCaiZhe:"仲裁者",
            shenGuan:"神官",
            qiDaoShi:"祈祷师",
            xianZhe:"贤者",
            lingFuShi:"灵符师",
            jianDi:"剑帝",
            geDouJia:"格斗家",
            yongZhe:"勇者",
            lingHunShuShi:"灵魂术士",
            xueZhiWuNv:"血之巫女",
            dieWuZhe:"蝶舞者",
            nvWuShen:"女武神",
            moGong:"魔弓",
            hongLianQiShi:"红莲骑士",
            yingLingRenXing:"英灵人形",
            moQiang:"魔枪",
            cangYanMoNv:"苍炎魔女",
            yinYouShiRen:"吟游诗人",
            jingLingSheShou:"精灵射手",
            yinYangShi:"阴阳师",
            xueSeJianLing:"血色剑灵",
            yueZhiNvShen:"月之女神",
            shouLingWuShi:"兽灵武士",
            shengGong:"圣弓",

            fengZhiJianSheng_name:"威斯特姆",
            kuangZhanShi_name:"阿基特",
            shenJianShou_name:"安娜",
            fengYinShi_name:"帕蒂",
            anShaZhe_name:"无念",
            shengNv_name:"艾丽卡",
            tianShi_name:"玛利亚",
            moFaShaoNv_name:"妮娅",
            moJianShi_name:"美狄亚",
            shengQiangQiShi_name:"斯庇尔",
            yuanSuShi_name:"索尔斯",
            maoXianJia_name:"莉莉安娜",
            wenYiFaShi_name:"塔格奥",
            zhongCaiZhe_name:"赛尔娜",
            shenGuan_name:"丽格蕾朵",
            qiDaoShi_name:"珐珞",
            xianZhe_name:"诺雷杰",
            lingFuShi_name:"风音",
            jianDi_name:"卡特琳娜",
            geDouJia_name:"凌薇",
            yongZhe_name:"尤里乌斯",
            lingHunShuShi_name:"狄亚娜",
            xueZhiWuNv_name:"紫苑",
            dieWuZhe_name:"华胥",
            nvWuShen_name:"米涅瓦/栞蒂",
            moGong_name:"泰罗莎",
            hongLianQiShi_name:"斯卡雷特",
            yingLingRenXing_name:"零",
            moQiang_name:"菲欧娜",
            cangYanMoNv_name:"莉莉丝",
            yinYouShiRen_name:"詹姆",
            jingLingSheShou_name:"波阿狄西亚",
            yinYangShi_name:"轮&环",
            xueSeJianLing_name:"罗丝菲莉",
            yueZhiNvShen_name:"尤瑞艾莉",
            shouLingWuShi_name:"菖蒲",
            shengGong_name:"萨哈魁尔",

            
            
            //风之剑圣
            fengNuZhuiJi:'[响应]风怒追击[回合限定]',
            fengNuZhuiJi_info:"<span class='tiaoJian'>([攻击行动]结束后发动)</span>额外+1风系[攻击行动]",
            shengJian:'[被动]圣剑',
            shengJian_info:"若你的主动攻击为本次行动阶段的第3次[攻击行动]，则此攻击强制命中。本次[攻击行动]结束时，你摸X张牌，弃X张牌(X<4)。",
            lieFengJi:"(独)[响应]烈风技",
            lieFengJi_info:"<span class='tiaoJian'>(攻击的目标拥有圣盾时发动)</span>无视对手圣盾的效果,且此攻击对手无法应战。",
            jiFengJi:"(独)[响应]疾风技",
            jiFengJi_info:"<span class='tiaoJian'>(作为主动攻击打出后发动)</span>额外+1[攻击行动]。",
            jianYing:"[响应]剑影[回合限定]",
            jianYing_info:"[水晶]<span class='tiaoJian'>([攻击行动]结束后发动)</span>额外+1[攻击行动]。",

            //狂战士
            kuangHua:"[被动]狂化",
            kuangHua_info:"你发动的所有攻击伤害额外+1；<span class='tiaoJian'>(攻击命中时②，若你的手牌数>3)</span>本次攻击伤害额外+1。",
            xueYingKuangDao:"(独)[响应]血影狂刀",
            xueYingKuangDao_info:"<span class='tiaoJian'>(作为主动攻击打出时发动)</span><br>·若命中手牌为2的对手②，本次攻击伤害额外+2；<br>·若命中手牌为3的对手②，本次攻击伤害额外+1。",
            xueXingPaoXiao:"(独)[响应]血腥咆哮",
            xueXingPaoXiao_info:'<span class="tiaoJian">(作为主动攻击打出时发动)</span>若攻击的目标拥有的[治疗]为2，则本次攻击强制命中。',
            siLie:"[响应]撕裂",
            siLie_info:"[宝石]<span class='tiaoJian'>(攻击命中后发动②)</span>本次攻击伤害额外+2。",

            //圣女
            bingShuangDaoYan:"[被动]冰霜祷言",
            bingShuangDaoYan_info:"<span class='tiaoJian'>(每当你使用水系牌或【圣光】时发动)</span>目标角色+1[治疗]。",
            zhiLiaoShu:"(独)[法术]治疗术",
            zhiLiaoShu_info:"目标角色+2[治疗]。",
            zhiYuZhiGuang:"(独)[法术]治愈之光",
            zhiYuZhiGuang_info:"指定最多3名角色各+1[治疗]。",
            lianMin:"[启动]怜悯[持续]",
            lianMin_info:"[宝石][横置]你的手牌上限恒定为7[持续]，你+1[水晶]。",
            shengLiao:"[法术]圣疗[回合限定]",
            shengLiao_info:"[水晶]任意分配3[治疗]给1~3名角色，额外+1[攻击行动]或[法术行动]。",

            //暗杀者
            fanShi:"[被动]反噬",
            fanShi_info:"<span class='tiaoJian'>(承受攻击伤害时发动⑥)</span>攻击你的对手摸1张牌[强制]。",
            shuiYing:"[响应]水影",
            shuiYing_info:"<span class='tiaoJian'>(除【特殊行动】外，当你摸牌前发动)</span>弃X张水系牌[展示]；<span class='tiaoJian'>(若你处于【潜行】效果下)</span>你可额外弃1张法术牌[展示]。",
            qianXing:"[启动]潜行",
            qianXing_info:"[宝石]你可选择摸1张牌，[横置]持续到你的下个行动阶段开始，你的手牌上限-1；你不能成为主动攻击的目标；你的主动攻击对手无法应战且伤害额外+X，X为你剩余的【能量】数。【潜行】的效果结束时[重置]。",
            qianXing_xiaoGuo:'潜行',

            //封印师
            faShuJiDang:"[响应]法术激荡",
            faShuJiDang_info:"<span class='tiaoJian'>([法术行动]结束后发动)</span>额外+1[攻击行动]。",
            diZhiFengYin:"(独)[法术]地之封印",
            diZhiFengYin_xiaoGuo:'地之封印',
            diZhiFengYin_info:"<span class='tiaoJian'>(将【地之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出地系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            shuiZhiFengYin:"(独)[法术]水之封印",
            shuiZhiFengYin_xiaoGuo:"水之封印",
            shuiZhiFengYin_info:"<span class='tiaoJian'>(将【水之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出水系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            huoZhiFengYin:"(独)[法术]火之封印",
            huoZhiFengYin_xiaoGuo:"火之封印",
            huoZhiFengYin_info:"<span class='tiaoJian'>(将【火之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出火系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            fengZhiFengYin:"(独)[法术]风之封印",
            fengZhiFengYin_xiaoGuo:'风之封印',
            fengZhiFengYin_info:"<span class='tiaoJian'>(将【风之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出风系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            leiZhiFengYin:"(独)[法术]雷之封印",
            leiZhiFengYin_xiaoGuo:'雷之封印',
            leiZhiFengYin_info:"<span class='tiaoJian'>(将【雷之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出雷系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            wuXiShuFu:"(专)[法术]五系束缚",
            wuXiShuFu_xiaoGuo:"五系束缚",
            wuXiShuFu_info:"[水晶]<span class='tiaoJian'>(将【五系束缚】放置于目标对手面前)</span>该对手跳过其下个行动阶段。在其下个行动阶段开始前他可以选择摸(2+X)张牌来取消【五系束缚】的效果。X为场上封印的数量，X最高为2。无论效果是否发动，触发后移除此牌。",
            fengYinPoSui:"[法术]封印破碎",
            fengYinPoSui_info:"[水晶]将场上任意一张基础效果牌收入自己手中。",

            
            //天使
            fengZhiJieJing:'[法术]风之洁净',
            fengZhiJieJing_info:"<span class='tiaoJian'>(弃1张风系牌[展示])</span>移除场上任意一个基础效果。",
            tianShiZhuFu:"[法术]天使祝福",
            tianShiZhuFu_info:"<span class='tiaoJian'>(弃1张水系牌[展示])</span>目标角色给你2张牌或指定2名角色各给你1张牌。",
            tianShiJiBan:"[被动]天使羁绊",
            tianShiJiBan_info:"<span class='tiaoJian'>(每当你移除场上任意一个基础效果或使用【圣盾】时)</span>目标角色+1[治疗]。",
            tianShiZhiQiang:"(独)[法术]天使之墙",
            tianShiZhiQiang_info:"可作为【圣盾】使用。",
            tianShiZhiGe:"[响应]天使之歌(回合限定)",
            tianShiZhiGe_info:"[水晶]<span class='tiaoJian'>(在你的回合开始前发动)</span>移除场上任意一个基础效果。",
            shenZhiBiHu:"[响应]神之庇护",
            shenZhiBiHu_info:"X[水晶]为我方抵御X点因法术伤害而造成的士气下降。",

            //神箭手
            shanDianJian:"[被动]闪电箭",
            shanDianJian_info:"你的雷系攻击对手无法应战。",
            guanChuanSheJi:"[响应]贯穿射击",
            guanChuanSheJi_info:"<span class='tiaoJian'>(主动攻击未命中时发动①，弃1张法术牌[展示])</span>对你所攻击的目标造成2点法术伤害③。",
            shanGuangXianJing:'(独)[法术]闪光陷阱',
            shanGuangXianJing_info:"对目标角色造成2点法术伤害③。",
            jingZhunSheJi:"(独)[响应]精准射击",
            jingZhunSheJi_info:"此攻击强制命中，但本次攻击伤害-1。",
            juJi:"[法术]狙击",
            juJi_info:"[水晶]目标角色手牌补到5张[强制]，额外+1[攻击行动]",

            //魔法少女
            moBaoChongJi:'[法术]魔爆冲击',
            moBaoChongJi_info:'<span class="tiaoJian">(弃1张法术牌[展示])</span>我方【战绩区】+1[宝石]。2名目标对手各弃一张法术牌[展示]，每有人不如此做，你对他造成2点法术伤害③、你弃一张牌。',
            moDanZhangWo:'[响应]魔弹掌握',
            moDanZhangWo_info:'你主动使用【魔弹】时可以选择逆向传递。',
            moDanRongHe:'[响应]魔弹融合',
            moDanRongHe_info:'你的地系或火系牌可以当【魔弹】使用。',
            huiMieFengBao:'[法术]毁灭风暴',
            huiMieFengBao_info:'[宝石]对2名目标对手各造成2点法术伤害③。',

            //女武神
            shenShengZhuiJi:"[响应]神圣追击",
            shenShengZhuiJi_info:"<span class='tiaoJian'>([攻击行动]或[法术行动]结束后，移除你的1[治疗])</span>额外+1[攻击行动]。",
            zhiXuZhiYin:"[法术]秩序之印",
            zhiXuZhiYin_info:"<span class='tiaoJian'>(摸2张牌[强制])</span>你加+1[治疗]并+1[水晶]。",
            hePingXingZhe:"[被动]和平行者",
            hePingXingZhe_info:"<span class='tiaoJian'>(你的回合内，发动【英灵召唤】后强制触发[强制])</span>[横置]，转入【英灵形态】；<span class='tiaoJian'>(每当你执行主动攻击时发动①)</span>[重置]脱离【英灵形态】。",
            junShenWeiGuan:"[被动]军神威光",
            junShenWeiGuan_info:"<span class='tiaoJian'>(回合开始时，若你处于【英灵形态】)</span>选择以下1项发动：<br>·你+1[治疗]，[重置]脱离【英灵形态】；<br>·<span class='tiaoJian'>(移除我方【战绩区】X个星石，X<3)</span>目标角色+X[治疗]。",
            yingLingZhaoHuan:"[响应]英灵召唤",
            yingLingZhaoHuan_info:"[水晶]<span class='tiaoJian'>(攻击命中时发动②)</span>本次攻击伤害额外+1，<span class='tiaoJian'>(若你额外弃置1张法术牌[展示])</span>目标角色+1[治疗]",   

            //元素师
            yuanSuXiShou:'[响应]元素吸收',
            yuanSuXiShou_info:'<span class="tiaoJian">(对目标角色造成法术伤害时发动③)</span>你+1<span class="hong">【元素】</span>。',
            yuanSuDianRan:'[法术]元素点燃',
            yuanSuDianRan_info:'<span class="tiaoJian">(移除3点</span><span class="hong">【元素】</span><span class="tiaoJian">)</span>对目标角色造成2点法术伤害③，额外+1[法术行动]；不能与【元素吸收】同时发动。',
            yunShi:'(独)[法术]陨石',
            yunShi_info:'对目标角色造成1点法术伤害③，额外+1[法术行动]；<span class="tiaoJian">(若你额外弃1张地系牌[展示]①)</span>本次伤害额外+1。',
            bingDong:'(独)[法术]冰冻',
            bingDong_info:'对目标角色造成1点法术伤害③，并指定1名角色+1[治疗]<span class="tiaoJian">(若你额外弃1张水系牌[展示]①)</span>本次伤害额外+1。',
            huoQou:'(独)[法术]火球',
            huoQou_info:'对目标角色造成2点法术伤害③，<span class="tiaoJian">(若你额外弃1张火系牌[展示]①)</span>本次伤害额外+1。',
            fengRen:'(独)[法术]风刃',
            fengRen_info:'对目标角色造成1点法术伤害③，额外+1[攻击行动]；<span class="tiaoJian">(若你额外弃1张风系牌[展示]①)</span>本次伤害额外+1。',
            leiJi:'(独)[法术]雷击',
            leiJi_info:'对目标角色造成1点法术伤害③，我方【战绩区】+1[宝石]；<span class="tiaoJian">(若你额外弃1张雷系牌[展示]①)</span>本次伤害额外+1。',
            yueGuang:'[法术]月光',
            yueGuang_info:'[宝石]对目标角色造成(X+1)点法术伤害③，X为你剩余的【能量】数。',
            yuanSu:'元素',
            yuanSu_info:'</span><span class="hong">【元素】</span>为元素师专有指示物，上限为3。',

            //月之女神
            xinYueBiHu:"[响应]新月庇护[持续]",
            xinYueBiHu_info:"<span class='tiaoJian'>(我方角色因承受伤害造成手牌数超过手牌上限，导致士气即将下降时)</span>[横置]转为【暗月形态】，将因此而造成的弃牌面朝下放置于角色旁，作为【暗月】。本次士气不会下降。",
            anYueZuZhou:"[被动]暗月诅咒",
            anYueZuZhou_info:"<span class='tiaoJian'>(你每次移除【暗月】)</span>我方士气-1；<span class='tiaoJian'>(你的【暗月】数为0时)</span>[重置]脱离【暗月形态】。",
            meiDuShaZhiYan:"[响应]美杜莎之眼",
            meiDuShaZhiYan_info:"<span class='tiaoJian'>(目标对手攻击时①，移除1个与攻击牌系别相应的系别的【暗月】[展示])</span>你+1[治疗]，你+1<span class='lan'>【石化】</span>。<span class='tiaoJian'>(若该【暗月】为法术牌)</span>你弃1张牌，对目标对手造成1点法术伤害③。",
            yueZhiLunHui:"[响应]月之轮回",
            yueZhiLunHui_info:"<span class='tiaoJian'>(你的回合结束时)</span>选择以下一项发动：<br>·<span class='tiaoJian'>(移除1个【暗月】)</span>目标角色+1[治疗]；<br>·<span class='tiaoJian'>(移除你的1[治疗])</span>你+1<span class='hong'>【新月】</span>。",
            yueDu:"[响应]月渎[回合限定]",
            yueDu_info:"<span class='tiaoJian'>(目标角色承受你造成的法术伤害⑥后，移除你的1[治疗])</span>对目标对手造成1点法术伤害③。",
            anYueZhan:"[响应]暗月斩",
            anYueZhan_info:"[水晶]<span class='tiaoJian'>(仅【暗月形态】下可发动，主动攻击命中时②，移除X个【暗月】(x<3))</span>本次攻击伤害额外+X。",
            cangBaiZhiYue:"[法术]苍白之月",
            cangBaiZhiYue_info:"[宝石]选择以下一项发动：<br>·<span class='tiaoJian'>(移除3点</span><span class='lan'>【石化】</span><span class='tiaoJian'>)</span>你的下次主动攻击对手无法应战，额外+1[攻击行动]。你额外获得一个回合；<br>·移除X点<span class='hong'>【新月】</span>，你+1点<span class='lan'>【石化】</span>，弃1张牌，对目标对手造成(X+1)点法术伤害③。",
            xinYue:"新月",
            xinYue_info:"<span class='hong'>【新月】</span>为月之女神专有指示物，上限为2。",
            shiHua:"石化",
            shiHua_info:"<span class='lan'>【石化】</span>为月之女神专有指示物，上限为3。",
            anYue:"暗月",
            anYue_info:"【暗月】为月之女神专用盖牌，无上限。",
            
            //仲裁者
            zhongCaiFaZe:"[被动]仲裁法则",
            zhongCaiFaZe_info:"游戏初始时。你加+2[水晶]。",
            yiShiZhongDuan:"[启动]仪式中断",
            yiShiZhongDuan_info:"<span class='tiaoJian'>(仅【审判形态】下发动)</span>[重置]脱离【审判形态】，我方【战绩区】+1[宝石]。",
            moRiShenPan:"[法术]末日审判",
            moRiShenPan_info:"<span class='tiaojian'>(移除所有</span><span class='hong'>【审判】</span><span class='tiaojian'>)</span>对目标角色造成等量的法术伤害③；在你的行动阶段开始时，若<span class='hong'>【审判】</span>已达到上限，该行动阶段你必须发动【末日审判】。",
            shenPanLangChao:"[被动]审判浪潮",
            shenPanLangChao_info:"<span class='tiaoJian'>(你每承受一次伤害⑥)</span>你+1<span class='hong'>【审判】</span>。",
            zhongCaiYiShi:"[启动]仲裁仪式[持续]",
            zhongCaiYiShi_info:"[宝石][横置]转为【审判形态】，你的手牌上限恒定为5[恒定]；每次你的回合开始时，你+1<span class='hong'>【审判】</span>。",
            panJueTianPing:"[法术]判决天平",
            panJueTianPing_info:"[水晶]你+1<span class='hong'>【审判】</span>，再选择一下一项发动：<br>·弃掉所有手牌。<br>·将你的手牌补到上限[强制]，我方【战绩区】+1[宝石]。",
            shenPan:"审判",
            shenPan_info:"<span class='hong'>【审判】</span>为仲裁者专有指示物，上限为4。",

            //冒险家
            qiZha:"[响应]欺诈",
            qiZha_info:"<span class='tiaoJian'>(弃2张同系牌[展示])</span>视为一次除暗系以外的任意系的主动攻击，该系由你决定；或<span class='tiaoJian'>(弃3张同系牌[展示])</span>视为一次暗系的主动攻击。",
            qiangYun:"[被动]强运",
            qiangYun_info:"<span class='tiaoJian'>(当你发动【欺诈】时)</span>你+1[水晶]。",
            diXiaFaZe:"[被动]地下法则",
            diXiaFaZe_info:"<span class='tiaoJian'>(你执行【购买】时)</span>改为【战绩区】+2[宝石]。",
            maoXianJiaTianTang:"[响应]冒险者天堂",
            maoXianJiaTianTang_info:"你执行【提炼】时，将提炼出的[宝石]和[水晶]全部交给目标队友。然后移除你的1[能量]",
            touTianHuanRi:"[法术]偷天换日[回合限定]",
            touTianHuanRi_backup:"[法术]偷天换日[回合限定]",
            touTianHuanRi_info:"[水晶]将对方【战绩区】的1[宝石]转移到我方【战绩区】，或将我方【战绩区】的[水晶]全部转换为[宝石]。额外+1[攻击行动]或[法术行动]。",

            //圣枪骑士
            shenShengXinYang:"[被动]神圣信仰",
            shenShengXinYang_info:"<span class='tiaoJian'>(我方[星杯区]的[星杯]数不小于对方时)</span>你的[治疗]上限+1。",
            huiYao:"[法术]辉耀",
            huiYao_info:"<span class='tiaoJian'>(弃1张水系牌[展示])</span>所有角色各+1[治疗]，额外+1[攻击行动]。",
            chengJie:"[法术]惩戒",
            chengJie_info:"<span class='tiaoJian'>(弃1张法术牌[展示])</span>将其他角色的1[治疗]转移给你，额外+1[攻击行动]。",
            shengJi:"[被动]圣击",
            shengJi_info:"<span class='tiaoJian'>(攻击命中后发动②)</span>你+1[治疗]。",
            tianQiang:"[响应]天枪",
            tianQiang_info:"<span class='tiaoJian'>(主动攻击前发动①，移除你的2[治疗])</span>本次攻击对手无法应战，不能和【圣击】同时发动。",
            diQiang:"[响应]地枪",
            diQiang_info:"<span class='tiaoJian'>(主动攻击命中后发动②，移除你的X[治疗])</span>本次攻击伤害额外+X，X最高为4；不能和【圣击】同时发动。",
            shengGuangQiYu:"[法术]圣光祈愈",
            shengGuangQiYu_info:"[宝石]无视你的[治疗]上限为你+2[治疗]，但你的[治疗]最高为5，额外+1[攻击行动]；本回合你不能再发动天枪。",
            
            //精灵射手
            yuanSuSheJi:"[响应]元素射击[回合限定]",
            yuanSuSheJi_info:"<span class='tiaoJian'>(主动攻击时①，若攻击牌非暗系，弃1张法术牌[展示]或移除1个【祝福】)</span>根据攻击牌类别附加以下【元素箭】效果：<br>【火之矢】：本次攻击伤害额外+1。<br>【水之矢】：<span class='tiaoJian'>(主动攻击命中时)</span>目标角色+1[治疗]。<br>【风之矢】：<span class='tiaoJian'>([攻击行动]结束后)</span>额外+1[攻击行动]。<br>【雷之矢】：本次攻击无法应战。<br>【地之矢】：<span class='tiaoJian'>(主动攻击命中时②)</span>对目标角色造成1点法术伤害③。",
            dongWuHuoBan:"[响应]动物伙伴",
            dongWuHuoBan_info:"<span class='tiaoJian'>(你的回合内，目标角色承受你造成的伤害⑥后)</span>你摸1张牌[强制]，你弃1张牌。",
            jingLingMiYi:"[启动]精灵秘仪[持续]",
            jingLingMiYi_info:"[宝石][横置]转为【精灵祝福形态】，将牌堆顶的3张牌面朝下放置于角色旁作为【祝福】。此形态下你的【祝福】可视为手牌使用或打出。<span class='tiaoJian'>(你的回合结束时，若你未拥有【祝福】)</span>[重置]脱离【精灵祝福形态】，对目标角色造成2点法术伤害。",
            chongWuQiangHua:"[响应]宠物强化",
            chongWuQiangHua_info:"[水晶]<span class='tiaoJian'>(触发【动物伙伴】时)</span>效果改为“目标角色摸1张牌[强制]，弃1张牌”。",
            zhuFu:"祝福",
            zhuFu_info:"【祝福】为精灵射手专有盖牌，上限为3。",

            //瘟疫法师
            buXiu:"[响应]不朽",
            buXiu_info:"<span class='tiaoJian'>([法术行动]结束时发动)</span>你+1[治疗]。",
            shengDu:"[被动]圣渎",
            shengDu_info:"你的[治疗]不能抵御攻击伤害，你的[治疗]上限+3。",
            wenYi:"[法术]瘟疫",
            wenYi_info:"<span class='tiaoJian'>(弃1张地系牌[展示])</span>对所有其他角色各造成1点法术伤害③。",
            siWangZhiChu:"[法术]死亡之触",
            siWangZhiChu_info:"<span class='tiaoJian'>(移除你的a[治疗]并弃b张同系牌，a，b的数值由你决定，但每项最少为2)</span>对目标角色造成(a+b-3)点伤害③，不能和【不朽】同时发动。",
            siWangZhiChu_backup:"[法术]死亡之触",
            juDuXinXing:"[法术]剧毒新星",
            juDuXinXing_info:"[宝石]对其他角色各造成2点法术伤害③，你+1[治疗]。",

            //魔剑士
            xiuLuoLianZhan:"[响应]修罗连斩[回合限定]",
            xiuLuoLianZhan_info:"<span class='tiaoJian'>([攻击行动]结束后发动)</span>额外+1火系[攻击行动]。",
            anYingNingJu:"[启动]暗影凝聚",
            anYingNingJu_info:"<span class='tiaoJian'>(对自己造成1点法术伤害③)</span>[横置]持续到你的下个行动阶段开始，你都处于【暗影形态】，脱离【暗影形态】时[重置]。",
            anYingZhiLi:"[被动]暗影之力",
            anYingZhiLi_info:"<span class='tiaoJian'>(仅【暗影形态】下发动)</span>你发动的所有攻击伤害额外+1。",
            anYingKangJu:"[被动]暗影抗拒",
            anYingKangJu_info:"在你的行动阶段你始终不能使用法术牌。",
            anYingLiuXing:"[法术]暗影流星",
            anYingLiuXing_info:"<span class='tiaoJian'>(仅【暗影形态】下发动，弃2张法术牌[展示])</span>对目标角色造成2点法术伤害③；<span class='tiaoJian'>(若你额外移除我方【战绩区】2星石)</span>[重置]脱离【暗影形态】，你+1[宝石]。",
            huangQaunZhenChan:"[响应]黄泉震颤[回合限定]",
            huangQaunZhenChan_info:"[宝石]<span class='tiaoJian'>(主动攻击前发动①)</span>本次攻击对手不能应战，<span class='tiaoJian'>(若命中②)</span>你将手牌补至上限，然后弃2张牌。",

            //血色剑灵
            xueSeJingJi:"[被动]血色荆棘",
            xueSeJingJi_info:"<span class='tiaoJian'>(攻击命中时②)你+1</span><span class='hong'>【</span>鲜血<span class='hong'>】</span>。",
            chiSeYiShan:"[响应]赤色一闪",
            chiSeYiShan_info:"<span class='tiaoJian'>([攻击行动]结束后，移除1点</span><span class='hong'>【</span>鲜血<span class='hong'>】</span><span class='tiaoJian'>，对自己造成2点法术伤害③)</span>额外+1[攻击行动]。",
            xueRanQiangWei:"[法术]血染蔷薇",
            xueRanQiangWei_info:"<span class='tiaoJian'>(移除2点</span><span class='hong'>【</span>鲜血<span class='hong'>】</span><span class='tiaoJian'>)</span>移除目标角色2[治疗]，将我方角色[能量区]的1[水晶]翻面为[宝石]。<span class='tiaoJian'>(若【血蔷薇庭院】在场)</span>额外对所有角色造成1点法术伤害。",
            xueQiPingZhang:"[响应]血气屏障",
            xueQiPingZhang_info:"<span class='tiaoJian'>(目标角色对你造成法术伤害③时，移除1点</span><span class='hong'>【</span>鲜血<span class='hong'>】</span><span class='tiaoJian'>)</span>本次法术伤害-1③，对目标对手造成1点法术伤害③。",
            xueQiangWeiTingYuan:"(专)[被动]血蔷薇庭院",
            xueQiangWeiTingYuan_info:"<span class='tiaoJian'>(此卡在场时)</span>所有角色的[治疗]无法用于抵御伤害；<span class='tiaoJian'>(血色剑灵的回合结束时)</span>移除此卡。",
            sanHuaLunWu:"[启动]散华轮舞",
            sanHuaLunWu_info:"你选择以下一项发动：<br>·[水晶]将【血蔷薇庭院】放置于场上，你+2<span class='hong'>【</span>鲜血<span class='hong'>】</span>；<br>·[宝石]将【血蔷薇庭院】放置于场上，无视你的<span class='hong'>【</span>鲜血<span class='hong'>】</span>上限为你+2<span class='hong'>【</span>鲜血<span class='hong'>】</span>但你的<span class='hong'>【</span>鲜血<span class='hong'>】</span>数最高为4，你弃到4张牌。",
            xianXue:"鲜血",
            xianXue_info:"<span class='hong'>【</span>鲜血<span class='hong'>】</span>为血色剑灵专有指示物，上限为3。",

            //祈祷师
            guangHuiXinYang:"[法术]光辉信仰",
            guangHuiXinYang_info:"<span class='tiaoJian'>(仅在【祈祷形态】下发动，移除1点</span><span class='hong'>【</span>祈祷符文<span class='hong'>】</span><span class='tiaoJian'>)</span>你弃2张牌，我方【战绩区】+1[宝石]，目标队友+1[治疗]。",
            heiAnZuZhou:"[法术]黑暗诅咒",
            heiAnZuZhou_info:"<span class='tiaoJian'>(仅在【祈祷形态】下发动，移除1点</span><span class='hong'>【</span>祈祷符文<span class='hong'>】</span><span class='tiaoJian'>)</span>对目标角色和自己各造成2点法术伤害③。",
            weiLiCiFu:"(独)[法术]威力赐福",
            weiLiCiFu_info:"<span class='tiaoJian'>(将威力赐福放置于目标队友面前)</span>该队友获得<span class='tiaoJian'>(攻击命中后可以移除此牌发动②)</span>本次攻击伤害额外+2。",
            xunJieCiFu:"(独)[法术]迅捷赐福",
            xunJieCiFu_info:"<span class='tiaoJian'>(将迅捷赐福放置于目标队友面前)</span>该队友获得<span class='tiaoJian'>([法术行动]或[攻击行动]结束时可以移除此牌发动)</span>额外+1[攻击行动]。",
            qiDao:"[启动]祈祷[持续]",
            qiDao_info:"[宝石][横置]转为【祈祷形态】，在此形态下，你每发动一次主动攻击①，你+2<span class='hong'>【</span>祈祷符文<span class='hong'>】</span>。",
            faLiChaoXi:"[响应]法力潮汐[回合限定]",
            faLiChaoXi_info:"[水晶]<span class='tiaoJian'>([法术行动]结束时发动)</span>额外+1[法术行动]。",
            qiDaoFuWen:"祈祷符文",
            qiDaoFuWen_info:"<span class='hong'>【</span>祈祷符文<span class='hong'>】</span>为祈祷师专有指示物，其上限为3。",
            
            //红莲骑士
            xingHongShengYue:"[响应]腥红圣约[回合限定]",
            xingHongShengYue_info:"<span class='tiaoJian'>(主动攻击时发动①)</span>你+1[治疗]。",
            xingHongXinYang:"[被动]猩红信仰",
            xingHongXinYang_info:"你的[治疗]只能抵御自己造成的伤害，你的[治疗]上限+2。",
            xueXingDaoYan:"[启动]血腥祷言",
            xueXingDaoYan_info:"<span class='tiaoJian'>(移除你的X[治疗]，对自己造成X点法术伤害③)</span>任意分配X[治疗]给1~2名队友，你+1<span class='hong'>【</span>血印<span class='hong'>】</span>。",
            shaLuShengYan:"[响应]杀戮盛宴",
            shaLuShengYan_info:"<span class='tiaoJian'>(主动攻击命中后发动②，移除1点</span><span class='hong'>【</span>血印<span class='hong'>】</span><span class='tiaoJian'>对自己造成4点法术伤害③)</span>本次攻击伤害额外+2。",
            reXueFeiTeng:"[被动]热血沸腾",
            reXueFeiTeng_info:"<span class='tiaoJian'>(当你因承受伤害而导致我方士气下降时强制发动[强制])</span>[横置]转发【热血沸腾状态】，该形态你因承受伤害不会导致我方士气下降[强制]。在你的回合结束阶段，若你处于此形态，[重置]并脱离此形态[强制],你+2[治疗]。",
            jieJiaoJieZao:"[响应]戒骄戒躁",
            jieJiaoJieZao_info:"[水晶]<span class='tiaoJian'>(仅【热血沸腾状态】下，[攻击行动]或[法术行动]结束时发动)</span>[重置]并脱离此形态，额外+1[攻击行动]或[法术行动]。",
            xingHongShiZi:"[法术]猩红十字",
            xingHongShiZi_info:"[水晶]<span class='tiaoJian'>(移除1点</span><span class='hong'>【</span>血印<span class='hong'>】</span><span class='tiaoJian'>弃2张法术牌[展示]，对自己造成4点法术伤害)</span>对目标角色造成3点法术伤害③。",
            xueYin:"血印",
            xueYin_info:"<span class='hong'>【</span>血印<span class='hong'>】</span>为红莲骑士专有指示物，其上限为2。",

            //英灵人形
            zhanWenZhangWo:"[被动]战纹掌握",
            zhanWenZhangWo_info:"游戏初始时，你拥有3个【战纹】。【战纹】和【魔纹】是英灵人性的专属指示物，上限之和为3。",
            nuHuoYaZhi:"[响应]怒火压制",
            nuHuoYaZhi_info:"<span class='tiaoJian'>(主动攻击未命中时②)</span>翻转1个【战纹】，不能与【魔纹融合】同时发动。",
            zhanWenSuiJi:"[响应]战纹碎击",
            zhanWenSuiJi_info:"<span class='tiaoJian'>(主动攻击命中时②，翻转1个【战纹】，弃X张同系牌[展示](X>1))</span>本次攻击伤害额外+(X-1)，<span class='tiaoJian'>(若你处于【蓄势迸发形态】下，额外翻转Y个【战纹】)</span>本次攻击伤害额外+Y。",
            moWenRongHe:"[响应]魔纹融合",
            moWenRongHe_info:"<span class='tiaoJian'>(主动攻击未命中时②，翻转1个【魔纹】，弃X张异系牌[展示](X>1))</span>对本次攻击的角色造成(X-1)点法术伤害③，<span class='tiaoJian'>(若你处于【蓄势迸发形态】下，额外翻转Y个【魔纹】)</span>本次法术伤害额外+Y。",
            fuWenGaiZao:"[启动]符文改造",
            fuWenGaiZao_info:"[宝石][横置]转为【蓄势迸发形态】，在此形态下你的手牌上限+1；摸1张牌[强制]并任意调整你的【战纹】和【魔纹】，在你回合结束阶段，[重置]并脱离此形态。",
            shuangChongHuiXiang:"[响应]双重回响[回合限定]",
            shuangChongHuiXiang_info:"[水晶]<span class='tiaoJian'>(对目标角色造成攻击或法术伤害时发动③)</span>对另一目标角色造成X点法术伤害③，X与本次伤害相同但最高为3。【双重回响】的伤害不会造成士气下降。",
            
            //神官
            shenShengQiShi:"[响应]神圣启示",
            shenShengQiShi_info:"<span class='tiaoJian'>(【特殊行动】结束时发动)</span>你+1[治疗]。",
            shenShengQiFu:"[法术]神圣祈福",
            shenShengQiFu_info:"<span class='tiaoJian'>(弃2张法术牌[展示])</span>你+2[治疗]。",
            shuiZhiShenLi:"[法术]水之神力",
            shuiZhiShenLi_info:"<span class='tiaoJian'>(弃1张水系牌[展示])</span>将手中的1张牌交给目标队友[强制]，你和他各加+1[治疗]。",
            shengShiShouHu:"[被动]圣使守护",
            shengShiShouHu_info:"你的[治疗]上限+4，每当你用[治疗]抵挡伤害时，最多只能使用1点。",
            shenShengQiYue:"[启动]神圣契约",
            shenShengQiYue_info:"[水晶]将你的X[治疗]转移给目标队友，以此法所转移的[治疗]无视他的[治疗]上限，但他的[治疗]最高为4。",
            shenShengLingYu:"[法术]神圣领域",
            shenShengLingYu_info:"[水晶]你弃2张牌，再选择以下一项发动：<br>·<span class='tiaoJian'>(移除你的1[治疗])</span>对目标角色造成2点法术伤害③。<br>·你+2[治疗]，目标队友+1[治疗]。",
            
            //阴阳师
            shiShenJiangLin:"[法术]式神降临[持续]",
            shiShenJiangLin_info:"<span class='tiaoJian'>(弃2张命格相同的手牌[展示])</span>[横置]转为【式神形态】，你+1<span class='hong'>【</span>鬼火<span class='hong'>】</span>，额外+1[攻击行动]。",
            yinYangZhanHuan:"[响应]阴阳转换",
            yinYangZhanHuan_info:"<span class='tiaoJian'>(应战攻击时①，打出1张与攻击牌命格相同的攻击牌[展示])</span>你应战此次攻击，并将本次攻击系别转为与此牌相同，你+1<span class='hong'>【</span>鬼火<span class='hong'>】</span>。<span class='tiaoJian'>(若处于【式神形态】，[重置]脱离【式神形态】)</span>本次攻击伤害为X，X为你的<span class='hong'>【</span>鬼火<span class='hong'>】</span>数。",
            shiShenZhuanHuan:"[响应]式神转换",
            shiShenZhuanHuan_info:"<span class='tiaoJian'>(与【阴阳转换】同时发动)</span>你摸1张牌[强制]，你+1<span class='hong'>【</span>鬼火<span class='hong'>】</span>。",
            heiAnJiLi:"[被动]黑暗祭礼",
            heiAnJiLi_info:"<span class='tiaoJian'>(你的回合结束时，若</span><span class='hong'>【</span>鬼火<span class='hong'>】</span><span class='tiaoJian'>达到上限)</span>移除所有<span class='hong'>【</span>鬼火<span class='hong'>】</span>，对目标角色造成2点法术伤害③。",
            shiShenZhouShu:"[响应]式神咒束",
            shiShenZhouShu_info:"<span class='tiaoJian'>(目标队友受到主动攻击时①，若此攻击可应战且你处于【式神形态】，打出1张合理的应战攻击牌[展示]，移除我方【战绩区】1[宝石]1[水晶])</span>将本次攻击目标变更为你，且视为你使用此牌执行应战攻击。",
            shengMingJieJie:"[法术]生命结界",
            shengMingJieJie_backup:"[法术]生命结界",
            shengMingJieJie_info:"[水晶]你+1<span class='hong'>【</span>鬼火<span class='hong'>】</span>，选择以下一项发动：<br>·目标队友+1[宝石]并+1[治疗]；然后对自己造成X点法术伤害③，X为你的<span class='hong'>【</span>鬼火<span class='hong'>】</span>数。(若X为3)本次法术伤害③不会造成我方士气下降。<br>·<span class='tiaoJian'>(仅【式神形态】下，弃2张命格相同的手牌[展示])</span>[重置]脱离【式神形态】目标队友弃1张牌。",
            guiHuo:"鬼火",
            guiHuo_info:"<span class='hong'>【</span>鬼火<span class='hong'>】</span>为阴阳师专有指示物，上限为3。",
            
            //苍炎魔女
            cangYanFaDian:"[法术]苍炎法典",
            cangYanFaDian_info:"<span class='tiaoJian'>(弃1张火系牌[展示])</span>对目标角色和自己造成2点法术伤害③。",
            tianHuoDianKong:"[法术]天火断空",
            tianHuoDianKong_info:"<span class='tiaoJian'>(弃2张火系牌[展示]，移除1点【重生】)</span>对目标角色和自己造成3点火焰伤害③，<span class='tiaoJian'>(若我方士气落后于该目标)</span>本次法术伤害额外+1[强制]。",
            moNvZhiNu:"[启动]魔女之怒",
            moNvZhiNu_info:"<span class='tiaoJian'>(手牌<4张时)</span>[横置]摸0-2张牌，数值由你决定，持续到你的下个行动阶段开始前，你都处于【烈焰形态】，在此形态下你的所有除水系和暗系外的攻击牌均视为火系[强制]，你释放【天火断空】时无需消耗【重生】，你的手牌上限+(X-2)(X为你的【重生】数量)；脱离【烈焰形态】时[重置]。",
            tiShenWanOu:"[响应]替身玩偶",
            tiShenWanOu_info:"<span class='tiaoJian'>(任何人对你造成攻击伤害时③，弃1张法术牌[展示])</span>，目标队友摸1张牌[强制]。",
            yongShengYinShiJi:"[被动]永生银时计",
            yongShengYinShiJi_info:"<span class='tiaoJian'>(当你因承受法术伤害而造成士气下降时)</span>，你+1【重生】",
            tongKuLianJie:"[法术]痛苦链接",
            tongKuLianJie_info:"[水晶]对目标对手和自己各造成1点法术伤害③，然后你弃到3张牌。",
            moNengFanZhuan:"[响应]魔能反转",
            moNengFanZhuan_info:"[水晶]<span class='tiaoJian'>(任何人对你造成法术伤害时③，弃X张法术牌[展示](X>1))</span>，对目标对手造成(X-1)点法术伤害。",
            chongSheng:"重生",
            chongSheng_info:"<span class='hong'>【</span>重生<span class='hong'>】</span>为苍炎魔女专有指示物，上限为4。",

            //贤者
            zhiHuiFaDian:"[被动]智慧法典",
            zhiHuiFaDian_info:"你的【能量】上限+1；<span class='tiaoJian'>(你每次承受法术伤害时⑥，若该伤害>3)</span>你+2[宝石]并弃1张牌。",
            faShuFanTan:"[响应]法术反弹",
            faShuFanTan_info:"<span class='tiaoJian'>(你每次承受法术伤害时⑥，若该伤害仅为1点，则可以弃X张同系牌[展示](X>1))</span>对目标角色造成(X-1)点法术伤害③，并对自己造成X点法术伤害③。",
            moDaoFaDian:"[法术]魔道法典",
            moDaoFaDian_info:"[宝石]<span class='tiaoJian'>(弃X张异系牌[展示](X>1))</span>对目标角色和自己各造成(X-1)点法术伤害③。",
            shengJieFaDian:"[法术]圣洁法典",
            shengJieFaDian_info:"[宝石]<span class='tiaoJian'>(弃X张异系牌[展示](X>2))</span>最多(X-2)名角色各+2[治疗]，并对自己造成(X-1)点法术伤害③。",

            //魔弓
            moGuanChongJi:"[响应]魔贯冲击",
            moGuanChongJi_info:"<span class='tiaoJian'>(主动攻击前发动①，移除1个火系【充能】[展示])</span>本次攻击伤害额外+1，不能攻击手牌达到上限的对手；<span class='tiaoJian'>(若命中②，额外移除1个火系【充能】[展示])</span>，本次攻击伤害额外+1；<span class='tiaoJian'>(若未命中②)</span>对对手造成3点法术伤害③，本回合你不能发动【多重射击】。",
            leiGuangSanShe:"[法术]雷光散射",
            leiGuangSanShe_backup:"[法术]雷光散射",
            leiGuangSanShe_info:"<span class='tiaoJian'>(移除1个雷系【充能】[展示])</span>对所有对手造成1点法术伤害③；<span class='tiaoJian'>(若你额外移除X个雷系【充能】[展示])</span>指定一名对手，本次对其攻击伤害额外+X③。",
            duoChongSheJi:"[响应]多重射击",
            duoChongSheJi_info:"<span class='tiaoJian'>([攻击行动]结束时发动，移除1个风系【充能】[展示])</span>视为一次暗系的主动攻击，但不能攻击上次的目标且本次攻击伤害-1；本回合你不能发动【魔贯冲击】。",
            chongNeng:"[启动]充能",
            chongNeng_info:"[水晶]你弃到4张牌，摸X张牌[强制]，可将自己至多X张手牌面朝下放置在你的角色旁，作为【充能】(X<5)；本回合你不能发动【魔贯冲击】和【雷光散射】。",
            moYan:"[启动]魔眼",
            moYan_info:"[宝石]目标角色弃1张牌或你摸3张牌[强制]，将自己1张手牌作为【充能】，你+1[水晶]。",
            chongNengPai:"充能",
            chongNengPai_info:"【充能】为魔弓专有盖牌，上限为8",

            //魔枪
            anZhiJieFang:"[启动]暗之解放",
            anZhiJieFang_info:"[横置]转为【幻影形态】，你的手牌上限恒定为5[恒定]；本回合你的下次主动攻击伤害额外+1，但不能发动【漆黑之枪】和【充盈】。",
            huanYingXingChen:"[启动]幻影星辰",
            huanYingXingChen_info:"<span class='tiaoJian'>(仅【幻影形态】下发动，对自己造成2点法术伤害③)</span>[重置]脱离【幻影形态】；若没有因此造成我方士气下降，则对目标角色造成2点法术伤害③。",
            heiAnShuFu:"[被动]黑暗束缚",
            heiAnShuFu_info:"你始终不能使用法术牌。",
            anZhiZhangBi:"[响应]暗之障壁",
            anZhiZhangBi_info:"<span class='tiaoJian'>(任何人对你造成伤害时发动③)</span>弃X张法术牌或雷系牌[展示]。",
            chongYing:"[法术]充盈",
            chongYing_info:"<span class='tiaoJian'>(弃1张法术牌或雷系牌[展示])</span>所有人各弃1张牌[展示]，我方角色可选择不如此做，除你以外每以此法弃1张法术牌或雷系牌，本回合你的下次主动攻击伤害额外+1；额外+1[攻击行动]。",
            qiHeiZhiQiang:"[响应]漆黑之枪",
            qiHeiZhiQiang_info:"X[水晶]<span class='tiaoJian'>(仅【幻影形态】下，主动攻击手牌为1或2的对手并命中后发动②)</span>本次攻击伤害额外+(X+2)。",

            //灵符师
            lingFu_leiMing:"[法术]灵符-雷鸣",
            lingFu_leiMing_info:"<span class='tiaoJian'>(弃1张雷系牌[展示])</span>对任意2名角色各造成1点法术伤害③。",
            lingFu_fengXing:"[法术]灵符-风行",
            lingFu_fengXing_info:"<span class='tiaoJian'>(弃1张风系牌[展示])</span>指定2名角色各弃1张牌。",
            nianZhou:"[响应]念咒",
            nianZhou_info:"每当你发动【灵符】，可将自己的1张手牌面朝下放置在你的角色旁，作为【妖力】。",
            baiGuiYeXing:"[响应]百鬼夜行",
            baiGuiYeXing_info:"<span class='tiaoJian'>(主动攻击命中后发动②，移除1个【妖力】)</span>对目标角色造成1点法术伤害③；<span class='tiaoJian'>(若【妖力】为火系牌，可展示之[展示])</span>改为指定2名角色，对除他们以外的其他所有角色各造成1点法术伤害③。",
            lingLiBengJie:"[响应]灵力崩解",
            lingLiBengJie_info:"[水晶]<span class='tiaoJian'>(和【灵符-雷鸣】或【百鬼夜行】同时发动)</span>你的本次【灵符-雷鸣】或【百鬼夜行】每次造成的伤害额外+1。",
            yaoLi:"妖力",
            yaoLi_info:"【妖力】为灵符师专有盖牌，上限为2；若【妖力】达到上限，则不能发动【念咒】。",

            //吟游诗人
            chenLunXieZouQu:"[响应]沉沦协奏曲[回合限定]",
            chenLunXieZouQu_info:"<span class='tiaoJian'>(仅【普通形态】下，一回合内我方对至少2名对手造成法术伤害③且结算之后，弃2张同系牌[展示])</span>你+1【灵感】。<span class='tiaoJian'>(若弃牌中有法术牌)</span>对目标对手造成1点法术伤害③。",
            buXieHeXian:"[法术]不谐和弦",
            buXieHeXian_backup:"[法术]不谐和弦",
            buXieHeXian_info:"<span class='tiaoJian'>(移除X点【灵感】，X>1)(若你处于【永恒囚徒形态】，[重置]脱离【永恒囚徒形态】)</span>你选择以下一项发动：<br>·你和目标角色各摸(X-1)张牌[强制]。<br>·你和目标角色各弃(X-1)张牌。",
            jinJiShiPian:"[被动]禁忌诗篇",
            jinJiShiPian_info:"<span class='tiaoJian'>(【激昂狂想曲】或【胜利交响诗】的效果结算完后)</span>根据【灵感】数量：<br>·(【灵感】未达上限)你+1【灵感】，移除【永恒乐章】。<br> ·(【灵感】已达上限)对自己造成3点法术伤害③。<span class='tiaoJian'>(若你处于【普通形态】)</span>[横置]转为【永恒囚徒形态】。",
            jiAngKuangXiangQu:"(专)[响应]激昂狂想曲",
            jiAngKuangXiangQu_info:"<span class='tiaoJian'>(回合开始时若你拥有【永恒乐章】)</span>选择以下一项执行：<br>·吟游诗人对2名目标对手各造成1点法术伤害③。 <br>·你弃2张牌。",
            shengLiJiaoXiangShi:"(专)[响应]胜利交响诗",
            shengLiJiaoXiangShi_info:"<span class='tiaoJian'>(回合结束时若你拥有【永恒乐章】)</span>选择以下一项执行<br>·将我方【战绩区】的1个星石提炼成为你的能量。<br>·为我方【战绩区】+1[宝石]，你+1[治疗]。",
            xiWangFuGeQu:"[启动]希望赋格曲",
            xiWangFuGeQu_info:"[水晶]你可以选择摸1张牌，如果【永恒乐章】不在场，则将【永恒乐章】放置于目标队友面前；否则将【永恒乐章】转移给我方另一名目标角色，你弃1张牌，+1[治疗]或+1【灵感】。",
            lingGan:"灵感",
            lingGan_info:"【灵感】为吟游诗人的专有指示物，上限为3。",
            yongHengYueZhang_jiAngKuangXiangQu:"(专)[响应]激昂狂想曲",
            yongHengYueZhang_shengLiJiaoXiangShi:"(专)[响应]胜利交响诗",

            //勇者
            yongZheZhiXin:"[被动]勇者之心",
            nuHou:"[响应]怒吼",
            jinPiLiJin:"[被动]精疲力竭",
            mingJingZhiShui:"[响应]明镜止水",
            tiaoXin:"(专)[法术]挑衅",
            tiaoXinX:"挑衅-结束回合",
            tiaoXinX_kaiShi:"挑衅-开始",
            tiaoXinX_qiDongQian:"挑衅-启动前",
            tiaoXinX_qiDongHou:"挑衅-启动后",
            jinDuanZhiLi:"[响应]禁断之力",
            siDou:"[响应]死斗",
            nuQi:"怒气",
            zhiXing:"知性",
            yongZheZhiXin_info:"游戏初始时，你+2[水晶]。",
            nuHou_info:"<span class='tiaoJian'>(主动攻击前发动①，移除1点【怒气】)</span>你可以摸1张牌，本次攻击伤害额外+2；<span class='tiaoJian'>(若未命中②)</span>你+1【知性】。",
            jinPiLiJin_info:"<span class='tiaoJian'>(发动【禁断之力】后强制触发[强制])</span>[横置]额外+1[攻击行动]；持续到你的下个行动阶段开始，你的手牌上限恒定为4[恒定]。 【精疲力竭】的效果结束时[重置]，并对自己造成3点法术伤害③。",
            mingJingZhiShui_info:"<span class='tiaoJian'>(主动攻击前发动①，移除4点【知性】)</span>本次攻击对手无法应战。<span class='tiaoJian'>(本次攻击结束时)</span>你+1[水晶]",
            tiaoXin_info:"<span class='tiaoJian'>(移除1点【怒气】)</span>将【挑衅】放置于目标对手面前，你+1【知性】；该对手在其下个行动阶段必须且只能主动攻击你，否则他跳过该行动阶段，触发后移除此牌。",
            jinDuanZhiLi_info:"[水晶]<span class='tiaoJian'>(主动攻击命中或未命中后发动②)</span>弃掉你所有手牌[展示]，其中每有1张法术牌，你+1【怒气】；<span class='tiaoJian'>(若未命中②)</span>其中每有1张水系牌，你+1【知性】；<span class='tiaoJian'>(若命中②)</span>其中每有1张火系牌，本次攻击伤害额外+1，并对自己造成等同于火系牌数量的法术伤害③。",
            siDou_info:"[宝石](每当你承受法术伤害时发动⑥)你+3【怒气】；<span class='tiaoJian'>(若此伤害造成士气实际下降)</span>本次的士气下降值恒定为1[强制]。",
            nuQi_info:"【怒气】为勇者专有指示物，上限为4。",
            zhiXing_info:"【知性】为勇者专有指示物，上限为4。",

            //格斗家
            nianQiLiChang:"[被动]念气立场",
            xuLiYiji:"[响应]蓄力一击",
            nianDan:"[响应]念弹",
            baiShiHuanLongQuan:"[启动]百式幻龙拳",
            qiJueBengJi:"[响应]气绝崩击",
            douShenTianQu:"[启动]斗神天驱",
            douQi:"斗气",
            nianQiLiChang_info:"所有对你造成的伤害每次最高为4点③。",
            xuLiYiji_info:"<span class='tiaoJian'>(主动攻击前发动①，+1【斗气】)</span>本次攻击伤害额外+1；<span class='tiaoJian'>(若未命中②)</span>对自己造成X点法术伤害③，X为你所拥有的【斗气】数；<span class='tiaoJian'>(若【斗气】已经达到上限)</span>你不能发动【蓄力一击】。",
            nianDan_info:"<span class='tiaoJian'>([法术行动]结束时发动，+1【斗气】)</span>，对目标对手造成1点法术伤害③，<span class='tiaoJian'>(若发动前对方的[治疗]为0)</span>对自己造成X点法术伤害③，X为你拥有的【斗气】数；<span class='tiaoJian'>(若【斗气】已达到上限)</span>你不能发动【念弹】。",
            baiShiHuanLongQuan_info:"[持续]<span class='tiaoJian'>(移除3点【斗气】)</span>[横置]你的所有主动攻击伤害额外+2，所有应战攻击伤害额外+1 ；在你接下来的行动阶段，你不能执行[法术行动]和[特殊行动]；你的主动攻击必须以同一名角色为目标，并且不能发动【蓄力一击】；若不如此做，则取消【百式幻龙拳】的效果并[重置]。",
            qiJueBengJi_info:"<span class='tiaoJian'>(主动攻击前发动①，移除1点【斗气】)</span>本次攻击对方无法应战，然后对自己造成X点法术伤害③，X为你的【斗气】数；不能和蓄力一击同时发动。",
            douShenTianQu_info:"[水晶]你弃到3张牌，+2[治疗]。",
            douQi_info:"【斗气】为格斗家专有指示物，上限为6",

            //圣弓
            tianZhiGong:"[被动]天之弓",
            shengXieJuBao:"[法术]圣屑飓暴",
            shengHuangJiangLin:"[法术]圣煌降临[持续]",
            shengHuangJiangLin_backup:"[法术]圣煌降临[持续]",
            shengGuangBaoLie:"[法术]圣光爆裂",
            shengGuangBaoLie_backup:"[法术]圣光爆裂",
            liuXingShengDan:"[响应]流星圣弹",
            shengHuangHuiGuangPao:"[法术]圣煌辉光炮",
            ziDongTianChong:"[被动]自动填充",
            xinYang:"信仰",
            shengHuangHuiGuangPaoX:"圣煌辉光炮",
            
            tianZhiGong_info:"游戏初始时，你+2[水晶]，你+1【圣煌辉光炮】。你的[治疗]上限+1。 <span class='tiaoJian'>(主动攻击时，若攻击牌不为圣类命格)</span>本次攻击伤害-1；<span class='tiaoJian'>(主动攻击命中时，若攻击牌为圣类命格)</span>你+1【信仰】。",
            shengXieJuBao_info:"<span class='tiaoJian'>(弃2张同系攻击牌[展示])</span>视为一次圣类命格的该系主动攻击。 <span class='tiaoJian'>(若攻击未命中②，移除X点[治疗]，X最高为2)</span>目标队友弃X张牌。",
            shengHuangJiangLin_info:"<span class='tiaoJian'>(移除你的2个[治疗]或2点【信仰】)</span>[横置]，转为【圣煌形态】，额外+1[法术行动]。此形态下，你若执行【特殊行动】，则[重置]脱离【圣煌形态】并+1[治疗]或+1【信仰】。",
            shengGuangBaoLie_info:"<span class='tiaoJian'>(仅【圣煌形态】下可发动)</span>你选择以下一项发动：<br>·摸1张牌[强制]，移除你的1点[治疗]，你+1【信仰】，目标队友+1[治疗]。 <br>·<span class='tiaoJian'>(移除你的X[治疗]，选择最多X名手牌数不大于你手牌数-X的对手)</span>你弃X张牌，然后对他们各造成(Y+2)点攻击伤害。 Y为目标数中拥有[治疗]的人数。",
            liuXingShengDan_info:"<span class='tiaoJian'>(仅【圣煌形态】下，主动攻击前①，移除你的1点[治疗]或是1点【信仰】)</span>我方目标角色+1[治疗]。",
            shengHuangHuiGuangPao_info:"<span class='tiaoJian'>(仅【圣煌形态】下可发动，移除1点【圣煌辉光炮】，移除4点【信仰】，并额外移除等同我方落后士气的【信仰】数)</span>所有角色将手牌调整为4张，我方[星杯区]+1[星杯]，然后将一方[士气]调整与另一方相同。",
            ziDongTianChong_info:"<span class='tiaoJian'>(你的回合结束时，若你未执行【特殊行动】)</span>你选择以下一项发动：<br>·[水晶]你+1【信仰】或+1[治疗]。 <br>·[宝石]你+1[水晶]，+2【信仰】或+2[治疗]。",
            xinYang_info:"【信仰】为圣弓专有指示物，上限为10。",
            shengHuangHuiGuangPaoX_info:"【圣煌辉光炮】为圣弓专有指示物，上限为1。",

            //剑帝
            jianHunShouHu:"[被动]剑魂守护",
            yangGong:"[被动]佯攻",
            jianQiZhan:"[响应]剑气斩",
            tianShiZhiHun:"[响应]天使之魂",
            eMoZhiHun:"[响应]恶魔之魂",
            buQuYiZhi:"[响应]不屈意志",
            jianHun:"剑魂",
            jianQi:"剑气",
            jianHunShouHu_info:"<span class='tiaoJian'>(主动攻击未命中时发动②)</span>将本次打出的攻击牌作为面朝下放置在你的角色旁，作为【剑魂】。若你现有能量为单数，你的所有【剑魂】视为【天使之魂】；若为双数，视为【恶魔之魂】；若没有能量，则不属于任何一种。 <span class='tiaoJian'>(若【剑魂】达到上限)</span>你不能发动[剑魂守护]。",
            yangGong_info:"<span class='tiaoJian'>(主动攻击未命中时发动②)</span>你+1【剑气】。",
            jianQiZhan_info:"<span class='tiaoJian'>(主动攻击命中后发动②，移除X点【剑气】，X最高为3)</span>对除你所攻击的目标以外的任意一名角色造成X点法术伤害③。",
            tianShiZhiHun_info:"<span class='tiaoJian'>(主动攻击前发动①，移除1张【天使之魂】)</span>本次攻击若命中②，你+2[治疗]；若未命中②，我方+1士气；不能和【剑魂守护】同时发动。",
            eMoZhiHun_info:"<span class='tiaoJian'>(主动攻击前发动①，移除1张【恶魔之魂】)</span>本次攻击伤害额外+1；若未命中②，你+2【剑气】；不能和【剑魂守护】同时发动。",
            buQuYiZhi_info:"[水晶]<span class='tiaoJian'>([攻击行动]结束时发动)</span>你摸1张[强制]，+1【剑气】，额外+1[攻击行动]。",
            jianHun_info:"【剑魂】为剑帝专有盖牌，上限为3。",
            jianQi_info:"【剑气】为剑帝专有指示物，上限为5。",
          
            //兽灵武士
            wuZheCanXin:"[响应]武者残心[回合限定]",
            yiJiWuNian:"[响应]一击无念",
            shouHunYiNian:"[被动]兽魂意念",
            shouHunJingJie:"[响应]兽魂警戒[持续]",
            shouFan:"[响应]兽反",
            yuHunLiuJuHeXingTai:"[被动]御魂流居合形态",
            niFanJuHeZhan:"[响应]逆反居合斩",
            yuHunLiuJuHeShi:"[启动]御魂流居合形态[持续]",
            shouHun:"兽魂",
            canXin:"残心",
            
            wuZheCanXin_info:"<span class='tiaoJian'>([攻击行动]结束时)</span>你+1【残心】。",
            yiJiWuNian_info:"<span class='tiaoJian'>([攻击行动]结束后，移除4点【残心】)</span>额外+1[攻击行动]，本次攻击无视【圣盾】且无法用【圣光】抵挡。 <span class='tiaoJian'>(若攻击牌为技类命格)</span>本次攻击强制命中。",
            shouHunYiNian_info:"<span class='tiaoJian'>(你每移除1点【兽魂】)</span>你+1【残心】；<span class='tiaoJian'>(仅【普通形态】下，主动攻击命中时②)</span>你+1【兽魂】。",
            shouHunJingJie_info:"<span class='tiaoJian'>(其他角色的[横置]效果结算完成后，移除1点【兽魂】，[横置]转为【御魂流居合形态】)</span>目标角色弃1张牌[展示]； <span class='tiaoJian'>(若弃牌为法术牌)</span>你+1【兽魂】。",
            shouFan_info:"<span class='tiaoJian'>(目标角色对你造成法术伤害③时，移除X点【兽魂】)</span>你弃X张牌，他弃1张牌；<span class='tiaoJian'>(若他的弃牌为法术牌)</span>你+1【兽魂】。",
            yuHunLiuJuHeXingTai_info:"在此形态下，你对[横置]的目标角色攻击伤害+1。你回合结束前-1【兽魂】。 <span class='tiaoJian'>(你造成伤害⑥，或你的回合结束时【兽魂】为0)</span>[转正]脱离御魂流居合形态。",
            niFanJuHeZhan_info:"<span class='tiaoJian'>(仅【御魂流居合形态】下，攻击手牌<4的对手前①发动)</span>移除X点【兽魂】。本次攻击命中时②，改为攻击目标弃置<span class='tiaoJian'>(X+2)</span>张手牌。 <span class='tiaoJian'>(若因此弃牌数小于X+2)</span>对方士气-1。",
            yuHunLiuJuHeShi_info:"[宝石]无视你的【兽魂】上限+1【兽魂】，你可选择摸或弃1张牌；<span class='tiaoJian'>(若你处于【御魂流居合形态】)</span>你+1【残心】 ；<span class='tiaoJian'>(若你处于[普通型态])</span>[横置]转为【御魂流居合形态】。",
            shouHun_info:"【兽魂】为兽灵武士专有指示物，上限为2。",
            canXin_info:"【残心】为兽灵武士专有指示物，上限为4。",

            //灵魂术士
            lingHunTunShi:"[被动]灵魂吞噬",
            lingHunZhaoHuan:"[法术]灵魂召还",
            lingHunZhuanHuan:"[响应]灵魂转换",
            lingHunJingXiang:"[法术]灵魂镜像",
            lingHunZhenBao:"(独)[法术]灵魂震爆",
            lingHunFuYu:"(独)[法术]灵魂赋予",
            lingHunLianJie:"(专)[启动]灵魂链接",
            lingHunZengFu:"[启动]灵魂增幅",
            huangSeLingHun:"黄色灵魂",
            lanSeLingHun:"蓝色灵魂",

            lingHunTunShi_info:"<span class='tiaoJian'>(我方每有1点士气下降)</span>你+1【黄色灵魂】。",
            lingHunZhaoHuan_info:"<span class='tiaoJian'>(弃X张法术牌[展示])</span>你+X点【蓝色灵魂】。",
            lingHunZhuanHuan_info:"<span class='tiaoJian'>(你每发动1次主动攻击①)</span>可转换1点你拥有的[灵魂]的颜色。",
            lingHunJingXiang_info:"<span class='tiaoJian'>(移除2点【黄色灵魂】)</span>你弃2张牌，目标角色摸2张牌[强制]，但最多补到其手牌上限。",
            lingHunZhenBao_info:"<span class='tiaoJian'>(移除3点【黄色灵魂】)</span>对目标角色造成3点法术伤害③，若他手牌<3且手牌上限>5，则本次伤害额外+2。",
            lingHunFuYu_info:"<span class='tiaoJian'>(移除3点【蓝色灵魂】)</span>目标角色+2[宝石]。",
            lingHunLianJie_info:"(2v2禁用)<span class='tiaoJian'>(移除1点【黄色灵魂】和1点【蓝色灵魂】)</span>将【灵魂链接】放置于一名队友面前，<span class='tiaoJian'>(每当你们之间有人承受伤害时⑥，移除X点【蓝色灵魂】)</span>将X点伤害转移给另1人，转移后的伤害为法术伤害⑥。",
            lingHunZengFu_info:"[宝石]你+2【黄色灵魂】和2【蓝色灵魂】。",
            huangSeLingHun_info:"【黄色灵魂】为灵魂术士专有指示物，上限为6。",
            lanSeLingHun_info:"【蓝色灵魂】为灵魂术士专有指示物，上限为6。",
            
            //血之巫女
            xueZhiAiShang:"[启动]血之哀伤",
            liuXue:"[被动]流血[持续]",
            niLiu:"[法术]逆流",
            xueZhiBeiMing:"(独)[法术]血之悲鸣",
            tongShengGongSi:"(专)[法术]同生共死",
            xueZhiZuZhou:"[法术]血之诅咒",

            xueZhiAiShang_info:"<span class='tiaoJian'>(对自己造成2点法术伤害③)</span>转移同生共死的目标或是移除【同生共死】。",
            liuXue_info:"[持续]<span class='tiaoJian'>(当你在【普通形态】下，因承受伤害而导致我方士气减少时强制发动[强制])</span>[横置]转为【流血形态】，你+1[治疗]。此形态下在你的每次回合开始时，对自己造成1点法术伤害③。 <span class='tiaoJian'>(自身手牌<3时强制发动[强制])</span>[重置]脱离【流血形态】。",
            niLiu_info:"<span class='tiaoJian'>(仅【流血形态】下发动)</span>你弃2张牌，你+1[治疗]。",
            xueZhiBeiMing_info:"<span class='tiaoJian'>(仅【流血形态】下发动)</span>对目标角色和自己各造成(X+1)点法术伤害③，X<3。",
            tongShengGongSi_info:"<span class='tiaoJian'>(你摸2张牌[强制])</span>将【同生共死】放置于目标角色面前。<span class='tiaoJian'>(在【普通形态】下)</span>你和他手牌上限各-2。<span class='tiaoJian'>(在【流血形态】下)</span>你和他手牌上限各+1。",
            xueZhiZuZhou_info:"[宝石]对目标角色造成2点法术伤害③，你弃3张牌。",

            //蝶舞者
            shengMingZhiHuo:"[被动]生命之火",
            wuDong:"[法术]舞动",
            duFen:"[响应]毒粉",
            chaoSheng:"[响应]朝圣",
            jingHuaShuiYue:"[响应]镜花水月",
            diaoLing:"[响应]凋零",
            diaoLing2:"[响应]凋零",
            yongHua:"[法术]蛹化",
            daoNiZhiDie:"[法术]倒逆之蝶",
            jian:"茧",
            DWZyong:"蛹",

            shengMingZhiHuo_info:"你的手牌上限-X，X为你拥有的【蛹】的数量，但你的手牌上限最少为3。",
            wuDong_info:"<span class='tiaoJian'>(摸1张牌[强制]或弃 1 张牌[强制])</span>将牌库顶的1张牌面朝下放置在你角色旁，作为【茧】。(选中牌发动即为弃牌)",
            duFen_info:"<span class='tiaoJian'>(每当有角色产生1点实际法术伤害时发动⑤，移除1个【茧】)</span>该次伤害额外+1。",
            chaoSheng_info:"<span class='tiaoJian'>(每当你承受伤害时发动⑥，移除1个【茧】)</span>抵御1点该来源的伤害。",
            jingHuaShuiYue_info:"<span class='tiaoJian'>(每当有角色承受2点实际法术伤害时发动⑤，移除2张同系【茧】[展示])</span>抵御该次伤害，你对他造成2次法术伤害③，每次伤害为1点。",
            diaoLing_info:"<span class='tiaoJian'>(你每次移除【茧】时，若为法术牌，可展示之[展示])</span>你对目标角色造成1点法术伤害③，再对自己造成2点法术伤害③；此技能发动后，直到你下个回合开始前，对方的士气最少为1[强制]。",
            yongHua_info:"[宝石]<span class='tiaoJian'>(你+1【蛹】)</span>将牌库顶的4张牌面朝下放置在你角色旁，作为【茧】。",
            daoNiZhiDie_info:"[水晶]你弃2张牌，再选择以下1项发动：<br>·对目标角色造成1点法术伤害③，该伤害不能用[治疗]抵御。<br> ·<span class='tiaoJian'>(移除2个【茧】或对自己造成4点法术伤害③)</span>移除1个【蛹】。",
            jian_info:"【茧】为蝶舞者专有盖牌，上限为8。",
            DWZyong_info:"【蛹】为蝶舞者专有指示物，无上限。",

		},
	};
});
