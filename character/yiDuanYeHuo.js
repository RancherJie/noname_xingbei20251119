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
            zhanDouFaShi:['zhanDouFaShi_name','yongGroup',3,[],],
            xingZhuiNvWu:['xingZhuiNvWu_name','yongGroup','4/5',[],],
            shengTingJianChaShi:['shengTingJianChaShi_name','shengGroup',4,[],],
            lieWuRen:['lieWuRen_name','jiGroup','3/4',[],],
            shengDianQiShi:['shengDianQiShi_name','shengGroup',4,[],],
		},
        characterIntro:{
            zhanDouFaShi:`路尔莉嘉不擅长高深莫测的魔法，归因于她对战斗的直觉和创造性。但你如果因此小看她，则她会用符文法术的小把戏让你吃尽苦头`,
            xingZhuiNvWu:`窥探星辰之秘的天才，将看似平平无奇的符文编织重组，却产生出了惊人的效果。其流转犹如日月盈亏之形，使得对手都赞叹其华丽之形，而沉醉其中忘记自己的败北`,
            shengTingJianChaShi:`圣庭检查士积累神圣之力为队友提供庇护。她拥有者强大的防御能力，却表现得不擅长攻击。作为副官，她默默的隐藏在强者的光芒之后，然而若要轻视她，等待你的将是异端审判`,
            lieWuRen:`魔法？不，巫术是猎巫人最喜欢的目标，巫师在猎巫人的面前只能被剥离自己亲近的元素而束手就擒。可能今晚猎巫人的酒钱有着落了~`,
            shengDianQiShi:`作为神之子，斯卡雷特有着能够凭借虔诚将承受的伤痛尽数无视的特殊能力。她可以精准的讨伐对手，亦可以稳定的对对手造成伤害。然而不知道是由于教廷的过度保护还是她自身的原因，她显然没有将自身潜力完全发挥出来`,
        },
		
		skill:{},
		
		translate:{
            zhanDouFaShi:"战斗法师",
            xingZhuiNvWu:"星坠女巫",
            shengTingJianChaShi:"圣庭检察士",
            lieWuRen:"猎巫人",
            shengDianQiShi:"圣殿骑士",

            zhanDouFaShi_name:"路尔莉嘉",
            xingZhuiNvWu_name:"蕾娜",
            shengTingJianChaShi_name:"克里斯玛",
            lieWuRen_name:"白狼卡拉马",
            shengDianQiShi_name:"斯卡雷特",


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
