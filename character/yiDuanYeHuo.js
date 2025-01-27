import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'yiDuanYeHuo',
		connect:true,
        characterSort:{
            yiDuanYeHuo:{
                "3xing":['zhanDouFaShi'],
                "3.5xing":['lieWuRen'],
                "4xing":['shengTingJianChaShi','shengDianQiShi'],
                "4.5xing":['xingZhuiNvWu'],
            }
        },
		character:{
            zhanDouFaShi:['路尔莉嘉','yongGroup',3,[],],
            xingZhuiNvWu:['蕾娜','yongGroup','4/5',[],],
            shengTingJianChaShi:['克里斯玛','shengGroup',4,[],],
            lieWuRen:['白狼卡拉马','jiGroup','3/4',[],],
            shengDianQiShi:['斯卡雷特','shengGroup',4,[],],
		},
        characterIntro:{
            zhanDouFaShi:`为寻找魔法的真理，带着符文之石辗转来到昔日好友（真CP）蕾娜所在的村庄，一场风暴即将来临。原住址详见“世界地图”<br>
            在学院都市中学习，人称吊车尾法师——路尔莉嘉；但吊车尾法师，虽然吊车尾，但却是属于首席与学霸层次的吊车尾。对于普通的法师来说，她还是一流的，但对于那些天才来说，她只是稍微有点天赋的秀才。周围的人都笑话说，如果不是因为符文法术的理论论文被符文学院的长老相中并收为直系弟子，她就是个不入流的法师而已
            与蕾娜是同一个老师<br>
            路尔莉嘉出生在大陆中部的地区，整个家族主要从事东西王国之间的贸易生意（包含走私和奴隶贸易等），经常居无定所。家族中除去长辈外，就只有尚在襁褓中的弟妹，基本上没有能一起玩耍的朋友。所以当那天她见到一个跟她差不多年纪，但头顶着毛绒绒耳朵的奴隶女孩时，她决定让这名女孩成自己的好友，于是鼓起勇气请求父亲为自己从家族里买下这个奴隶。<br>
            奴隶贸易是残酷的，她曾经目睹者一名少女跟着一名男子来到家族，少女明明面带情愫，然而男子却透过家族无情的将女子卖给了教会。因此奴隶贸易，也是会受到袭击，一日，一群精灵族族人冲进了绿洲小城，杀害了当地领主，自己家族也因此覆灭。其中，有一个蓝头发带眼镜的精灵在这次冲突中被家族卫兵和当地卫兵围困时，天降陨石火球，夹着雷击冰霜，轰炸了围困的卫兵。此刻对什么事都觉得无聊的战法，感受到魔法的有趣。
            当然，对于路尔莉嘉来说，家族对她来说也是可有可无，没有感情联系的存在，但是这次事件后，她被迫承担起了家族重兴的重担。之前家族覆灭的教训让家族经商的范围谨慎了许多，而路尔莉嘉为了学习魔法，经常跟自己的好友兼顾奴隶的少女，偷偷练习。<br>
            后来这位奴隶少女一直在家族里成为战法代理担任了各种要务，家族总算安稳了些许，但好景不长，这位好友在某次贸易因为一场沙尘暴失去联络，商队带回来的只有这位少女跟战法儿时经常玩的符文吊坠。`,
            xingZhuiNvWu:`为探寻星空的秘密，一直居住在偏远的小山村，自由自在的做着研究。偶尔也会帮助求助于她的山下村民。最近求助的村民多了起来。。。。。。<br>
            某日，她收到昔日好友路尔莉嘉即将到访的来信；然而紧接着，猎巫行动突然爆发，一切的一切如同涟漪一般~
            曾经在学院都市学习，用那天然透切的双眸注视着星空，看着单纯呆钝，实际上经常语出惊人直击核心，人称整天望天看星星的天才。天才?笨蛋?不，她单纯是天才的异类。<br>
            与路尔莉嘉是一个老师，同时与路尔莉嘉为CP`,
            shengTingJianChaShi:`坚定的神圣教廷的信徒，甚至已经达到了疯狂的地步，只要是教廷的都是正确的。
            此次她作为圣殿骑士的副官出征讨伐异教徒，审判一切违反教廷的东西；同时也作为教廷安插在圣殿骑士团内的监视之眼<br>
            从斯卡雷特的屠杀中唯一幸存者，腹黑`,
            lieWuRen:`曾经在“罪恶都市”混日子，整天沉浸在酒馆里混日子，曾经梦想成为出色的魔法师但实在没有这方面的天赋。每当施展魔法，总是换来围观者的讪笑声。某天在酒馆里因为陪酒小姐的事情，与隔壁醉酒闹事的魔法师大打出手，因此发现了自己独有的优秀的应付法术的能力；于是他努力训练自己，以便更好的掌控这股力量。数年后，教廷推动的“猎巫行动”开始，白狼卡拉玛因此声名鹊起`,
            shengDianQiShi:`详见“红莲事件”<br>
            带着星痕出生，被颂为神之子。自小就在教会里长大的斯卡雷特，不单是一个虔诚的信徒，也因为其出色的战斗能力成为教廷惩戒部队的首席圣殿骑士。<br>
            作为教廷的形象之一，她拥有不少追随者与崇拜者。<br>
            自征讨开始，一股抵触的想法在斯卡雷特脑海中挥之不去。未曾怀疑过教廷敕令的她陷入了迷茫和烦躁，最终那一夜过后，教廷的惩戒部队燃起了大火，火势如同红莲般绚烂绽放`,
        },
		
		skill:{},
		
		translate:{
            zhanDouFaShi:"战斗法师",
            xingZhuiNvWu:"星坠女巫",
            shengTingJianChaShi:"圣庭检察士",
            lieWuRen:"猎巫人",
            shengDianQiShi:"圣殿骑士",


            //圣殿骑士
            shenXuanZhe:"[被动]神选者",
            shenWei:"[响应]神威",
            shengCai:"[响应]圣裁",
            shengYu:"[法术]圣愈",
            shengYu_backup:"圣愈",
            shenZhiZi:"[被动]神之子",
            shenLinShengQi:"[法术]神临圣启",
            shengYanQiFu:"[响应]圣炎祈愿",
            shengYin:'圣印',
            shenXuanZhe_info:"你的[治疗]上限-1。 <span class='tiaoJian'>(主动攻击命中后②)</span>你+1[治疗]。 <span class='tiaoJian'>(当你获得[治疗]并溢出时)</span>你+1【圣印】。",
            shenWei_info:"<span class='tiaoJian'>(主动攻击前①，移除2点【圣印】)</span>本次攻击对手无法应战；<span class='tiaoJian'>(若攻击牌为圣类命格)</span>本次攻击伤害额外+1。本回合你与攻击目标无法获得[治疗]。",
            shengCai_info:"<span class='tiaoJian'>(主动攻击前①，移除X点【圣印】)</span>对攻击目标造成1点法术伤害③。本次攻击伤害额外+(X-1)。",
            shengYu_info:"<span class='tiaoJian'>(移除X点【圣印】)</span>目标队友+X[治疗]，你弃1张牌，额外+1[攻击行动]。",
            shenZhiZi_info:"<span class='tiaoJian'>(当你【圣印】增加时)</span>[横置]移除你的所有[治疗]，持续到你的下个回合结束时，你都处于【圣炎形态】，此形态下我方士气最少为1[强制]。 【神之子】的效果结束时[重置]，脱离【圣炎形态】，然后对目标对手造成1点法术伤害③。 <span class='tiaoJian'>(当【圣炎形态】下你受到伤害时③)</span>抵御本次伤害，改为承受1点来自自身的法术伤害⑥，然后[重置]脱离【圣炎形态】。",
            shenLinShengQi_info:"[水晶]无视你的【圣印】上限为你+2【圣印】，但你的【圣印】最高为4，额外+1[攻击行动]；本回合你不能发动[神威]。",
            shengYanQiFu_info:"[水晶]<span class='tiaoJian'>([重置]脱离【圣炎形态】时)</span>目标角色+2[治疗]。",
            shengYin_info:'【圣印】为圣殿骑士专有指示物，上限为2。',
            
            //圣庭监察士
            kuangXinTu:"[被动]狂信徒",
            caiJueLunDing:"[响应]裁决论定[回合限定]",
            enDianShenShou:"[响应]恩典神授",
            jingHuaZhiShu:"[响应]净化之术",
            biHuLingYu:"(专)[响应]庇护领域",
            caiJueZhe:"[启动]裁决者",
            shenShengBianCe:"[法术]神圣鞭策",
            shenShengBianCe_backup:"[法术]神圣鞭策",
            yiDuanCaiJueSuo:"异端裁决所",
            caiJue:"裁决",

            kuangXinTu_info:"游戏初始时你拥有【异端裁决所】。 <span class='tiaoJian'>(我方队友存在圣类命格时)</span>你的[治疗]上限+1。 <span class='tiaoJian'>(你的[攻击行动]结束时)</span>目标角色+1[治疗]。",
            caiJueLunDing_info:"<span class='tiaoJian'>(我方目标角色[治疗]溢出时)</span>【异端裁决所】+1[治疗]；<span class='tiaoJian'>(若因此【异端裁决所】[治疗]增加)</span>你+1[水晶]。",
            enDianShenShou_info:"<span class='tiaoJian'>(你执行[提炼]时，移除我方角色合计2[治疗]或【异端裁决所】3[治疗])</span>将提炼出的[宝石]和[水晶]全部交给目标队友，你弃1张牌；<span class='tiaoJian'>(若该弃牌为圣类命格，可展示之[展示])</span>对目标对手造成1点法术伤害③。",
            jingHuaZhiShu_info:"<span class='tiaoJian'>(你承受伤害⑥并结算完成后，弃1张法术牌[展示])</span>你+1[治疗]，摸1张牌[强制]，然后移除【异端裁决所】上1[治疗]。",
            biHuLingYu_info:"<span class='tiaoJian'>(我方目标角色受到伤害时③，移除【异端裁决所】3[治疗])</span>本次伤害-1，你+1【裁决】。",
            caiJueZhe_info:"[水晶]你+1【裁决】，【异端裁决所】+2[治疗]。",
            shenShengBianCe_info:"[水晶]<span class='tiaoJian'>(移除X点【裁决】)</span>X名目标角色各摸1张牌[强制]，你弃X张牌。",
            yiDuanCaiJueSuo_info:"【异端裁决所】的[治疗]上限为4。",
            caiJue_info:"【裁决】为圣庭监察士专有指示物，上限为3。",

            //战斗法师
            fuWenZhiHuan:"[法术]符文置换[回合限定]",
            fuWenZhiHuan_info:"<span class='tiaoJian'>(弃2张同系牌[展示])</span>摸1张牌[强制]；<span class='tiaoJian'>(若弃牌包含咏类命格或法术牌)</span>额外+1[攻击行动]。",
            fuMoDaJi:"[响应]附魔打击[回合限定]",
            fuMoDaJi_info:"<span class='tiaoJian'>(主动攻击命中时②)</span>额外+1[法术行动]。 <span class='tiaoJian'>(主动攻击未命中②且攻击牌为咏类命格)</span>额外+1[法术行动]。",
            shangBian:"[响应]熵变",
            shangBian_info:"<span class='tiaoJian'>(本回合第三次行动结束时，消耗我方【战绩区】1[宝石]或队友【能量区】1【能量】)</span>对2名目标对手各造成1点法术伤害③。",
            moLiShangZeng:"[响应]魔力熵增",
            moLiShangZeng_info:"[水晶]<span class='tiaoJian'>(每次额外行动结束时)</span>对目标对手造成1点法术伤害③。",
            
            //星坠巫女
            mingDingZhiLi:"[被动]命定之理",
            mingDingZhiLi_info:"你手牌上限+(1-X)[恒定]，X为你拥有的【律法】数。游戏初始时你拥有【律法：繁星】。",
            xingHuan:"[法术]星环[回合限定]",
            xingHuan_info:"<span class='tiaoJian'>(弃X张地系牌[展示])</span>指定(X-1)名角色与你各+1[治疗]并各摸1张牌[强制]，你+1[法术行动]。",
            xingKe:"[响应]星刻",
            xingKe_info:"<span class='tiaoJian'>([攻击行动]或[法术行动]结束时)</span>将牌库顶1张牌面朝下放置在你角色旁，作为【卢恩】。",
            qunXingQiShi:"[启动]群星启示",
            qunXingQiShi_info:"你选择以下一项发动:<br>·<span class='tiaoJian'>(将1张手牌面朝下放置在你角色旁，作为【卢恩】。选择1个【律法】放置于你面前)</span>你摸0-1张牌。<br>·<span class='tiaoJian'>(移除X个【卢恩】[展示])</span>发动任意符合条件的【律法】，然后移除1个【律法】。",
            huangJinLv:"[响应]黄金律",
            huangJinLv_info:"<span class='tiaoJian'>(当【群星启示】发动后，你的手牌数<2时)</span>摸1张牌[强制]，并可将1张手牌与1个【卢恩】交换。",
            fanXing:"(专)[响应]繁星",
            fanXing_info:"<span class='tiaoJian'>(当移除的【卢恩】包含4个不同系别或4个不同命格)</span>对所有对手各造成1点法术伤害③；<span class='tiaoJian'>(若移除的【卢恩】包含4个不同系别与4个不同命格)</span>目标队友额外+1[宝石]。",
            yingYue:"(专)[响应]影月",
            yingYue_info:"<span class='tiaoJian'>(当移除的【卢恩】包含X对相同系别的【卢恩】，X>1)</span>对目标角色造成X点法术伤害③。<span class='tiaoJian'>(当移除的【卢恩】包含X对相同命格的【卢恩】，X>1)</span>任意分配X点[治疗]给1~2位我方角色。",
            shiRi:"(专)[响应]蚀日",
            shiRi_info:"<span class='tiaoJian'>(当移除的【卢恩】包含每3个相同系别的【卢恩】)</span>你+1[宝石]。<span class='tiaoJian'>(当移除的【卢恩】包含每3个相同命格的【卢恩】)</span>我方【战绩区】+1[宝石]。",
            chuangKeLvDong:"[法术]创刻律动",
            chuangKeLvDong_info:"[宝石]<span class='tiaoJian'>(无视你的手牌上限摸0-1张牌)</span>将最多(1+X)张手牌面朝下放置在你角色旁，作为【卢恩】，X为你拥有的【律法】数。",
            luEn:"卢恩",
            luEn_info:"【卢恩】为星坠巫女专有改盖牌，上限为6。",

            //猎巫人
            zhuanHuan:"[响应]转换",
            zhuanHuan_info:"除[圣光]外，你的法术牌都可作为对应系别攻击牌使用。",
            shouMoCi:"[响应]狩魔刺",
            shouMoCi_info:"<span class='tiaoJian'>(主动攻击手牌<4的目标对手时①，该目标弃1张牌)</span>将弃牌面朝下放置于你的角色旁，作为【魔力瓶】。",
            faShuBoLi:"[响应]法术剥离",
            faShuBoLi_info:"<span class='tiaoJian'>(主动攻击命中时②发动)</span>目标角色弃1张牌，将弃牌面朝下放置于你的角色旁，作为【魔力瓶】。",
            guanYinDuRen:"[响应]灌银毒刃",
            guanYinDuRen_info:"<span class='tiaoJian'>(目标角色将要承受你造成的伤害时⑥发动，移除1个【魔力瓶】)</span>本次伤害-1，将移除的【魔力瓶】加入他手牌[强制]，你+1[治疗]。",
            touXi:"[响应]偷袭[回合限定]",
            touXi_info:"[水晶]<span class='tiaoJian'>([攻击行动]结束时，移除2个【魔力瓶】[展示])</span>每有X张法术牌，对X名目标对手造成1点法术伤害③；<span class='tiaoJian'>(若有2张攻击牌)</span>额外+1[攻击行动]。 <span class='tiaoJian'>(若为同系牌)</span>对目标角色造成1点法术伤害③。",
            moLiPing:"魔力瓶",
            moLiPing_info:"【魔力瓶】为猎巫人专有盖牌，上限为4；若【魔力瓶】达到上限，则不能发动【狩魔刺】、【法术剥离】",
        },
	};
});
