import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'shenZiChuangLin',
		connect:true,
        characterSort:{
            shenZiChuangLin:{
                "3xing":['jinGuiZhiNv'],
                "3.5xing":[],
                "4xing":['shenMiXueZhe','ranWuZhe'],
                "4.5xing":[],
                '5xing':['nvPuZhang','jieJieShi'],
            }
        },
		character:{
            jinGuiZhiNv:['female','yongGroup',3,[],],
            nvPuZhang:['female','jiGroup',5,[],],
            jieJieShi:['female','huanGroup',5,[],],
            shenMiXueZhe:['female','yongGroup',4,[],],
            ranWuZhe:['female','xueGroup',4,[],],
		},
        characterIntro:{
            jinGuiZhiNv:`\u662f\u4e00\u4e2a\u8fd8\u5728\u5b66\u4e60\u9b54\u6cd5\u7684\u8d35\u65cf\u5927\u5c0f\u59d0~\u3002\u5e73\u65f6\u4eba\u7f18\u8fd8\u4e0d\u9519\uff0c\u4f46\u8fc7\u4e8e\u5355\u7eaf\uff0c\u5f88\u5bb9\u6613\u88ab\u5229\u7528\uff1b\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u50bb\u767d\u751c\uff0c\u53ea\u6709\u5355\u7eaf\u7684\u540c\u60c5\u4e4b\u5fc3<br>            \u7ea2\u83b2\u4e8b\u4ef6\u4e4b\u540e\uff0c\u827e\u4e3d\u5361\u7684\u7236\u4eb2\u4e0e\u5c3c\u5415\u514b\u6d3e\uff0c\u4e3a\u4e86\u6269\u5f20\u81ea\u5df1\u7684\u6d3e\u7cfb\u4e0e\u5f71\u54cd\u529b\uff0c\u5229\u7528\u4e86\u5979\u7684\u5355\u7eaf\u4e0e\u540c\u60c5\u5fc3\uff0c\u5c06\u5979\u63a8\u4e0a\u4e86\u201c\u5723\u5973\u201d\u8fd9\u6837\u4e00\u4e2a\u6559\u5ef7\u5076\u50cf\u822c\u7684\u4f4d\u7f6e\uff1b\u7b56\u5212\u4e86\u4e00\u51fa\u7ed1\u67b6\u6848\u4f5c\u4e3a\u63a9\u62a4\uff0c\u5b9e\u9645\u4e0a\u662f\u5b9e\u65bd\u865a\u5047\u7684\u661f\u75d5\u70d9\u5370\u4eea\u5f0f\uff0c\u76ee\u7684\u5c31\u662f\u5bf9\u5979\u5b9e\u65bd\u4eba\u5de5\u661f\u75d5\u7684\u5f3a\u884c\u70d9\u5370\u3002<br>            \u56e0\u4e3a\u827e\u4e3d\u5361\u7684\u5355\u7eaf\uff0c\u4e0d\u80fd\u8ba9\u5979\u77e5\u9053\u81ea\u5df1\u53ea\u662f\u4e2a\u5047\u7684\u795e\u4e4b\u5b50\uff0c\u9700\u8981\u5236\u9020\u4e00\u4e2a\u620f\u5267\u6027\u7684\u4e8b\u4ef6\u8ba9\u5979\u81ea\u5df1\u53d1\u73b0\u81ea\u5df1\u5f97\u5230\u201c\u795e\u7684\u8d4b\u4e88\u201d\uff0c\u6240\u4ee5\u6b64\u65f6\u9664\u4e86\u5979\u7236\u4eb2\u548c\u7ea2\u8863\u4e3b\u6559\u77e5\u9053\u4ee5\u5916\uff0c\u5e76\u672a\u5bf9\u5916\u516c\u5f00\uff0c\u4e5f\u6ca1\u6709\u8ba9\u5176\u4ed6\u4eba\u77e5\u9053\u3002\u7531\u6b64\u5f15\u53d1\u4e86\u4e00\u573a\u201c\u95f9\u5267\u201d
            `,
            nvPuZhang:`\u662f\u827e\u4e3d\u5361\u7684\u4e13\u5c5e\u4f8d\u4ece\u5973\u4ec6\uff0c\u7531\u4e8e\u4e0d\u77e5\u9053\u201c\u7ed1\u67b6\u6848\u201d\u7684\u771f\u5b9e\u60c5\u51b5\uff0c\u4e3a\u4e86\u89e3\u6551\u5979\uff0c\u627e\u6765\u4e86\u5728\u6597\u517d\u573a\u4e2d\u51e0\u4e2a\u827e\u4e3d\u5361\u66fe\u7ecf\u201c\u5e2e\u52a9\u201d\u8fc7\u7684\u6218\u58eb\uff0c\u4f17\u4eba\u4e00\u8d77\u51fa\u53d1\u53bb\u6551\u827e\u4e3d\u5361<br>            \u5b9e\u9645\u8fd8\u6709\u53e6\u5916\u4e00\u4e2a\u8eab\u4efd\u2014\u53db\u5fcd\uff0c\u56e0\u6b64\u53d7\u5230\u4e86\u65e0\u5ff5\u7684\u8ffd\u6740`,
            jieJieShi:`\u7531\u7ea2\u8863\u4e3b\u6559\u96c7\u4f63\uff0c\u5e03\u7f6e\u7ed3\u754c\u62d6\u5ef6\u4e86\u627e\u827e\u4e3d\u5361\u961f\u4f0d\u7684\u65f6\u95f4\u3002\u80fd\u591f\u7528\u7ed3\u754c\u4f7f\u7684\u5728\u539f\u5730\u7684\u4eba\u770b\u8d77\u6765\u8ddf\u6d88\u5931\u4e86\u4e00\u6837\u3002\u539f\u5728\u4e1c\u65b9\u7687\u671d\u67d0\u95e8\u6d3e\u4e0b\u5b66\u4e60\uff0c\u540e\u6e38\u5386\u81f3\u897f\u65b9\u5b66\u4e60\u4e86\u65b0\u7684\u6cd5\u672f\uff0c\u63a5\u89e6\u5230\u4e86\u79d8\u8f9b\u3002\u540c\u65f6\u4e5f\u4e3a\u4e86\u65b9\u4fbf\u5b66\u4e60\u897f\u65b9\u7684\u9b54\u6cd5\u800c\u5b89\u88c5\u4e86\u56db\u6839\u89e6\u624b\u9b54\u6cd5\u589e\u5e45\u88c5\u7f6e`,
            shenMiXueZhe:`\u827e\u4e3d\u5361\u7684\u79c1\u4eba\u5bb6\u5ead\u6559\u5e08\uff0c\u53d7\u8058\u6559\u6388\u827e\u4e3d\u5361\u9b54\u6cd5\uff0c\u4e0e\u7d22\u5c14\u65af\u6709\u5173\uff1b\u827e\u4e3d\u5361\u5931\u8e2a\u65f6\uff0c\u4e0e\u5973\u4ec6\u4e4b\u957f\u7b49\u4eba\u4e00\u8d77\u53bb\u5bfb\u627e\uff0c\u867d\u7136\u51ed\u501f\u7cbe\u7075\u654f\u9510\u7684\u9b54\u6cd5\u611f\u5e94\u627e\u5230\u4e86\u7ed3\u754c\uff0c\u4f46\u7531\u4e8e\u4e0d\u6e05\u695a\u539f\u7406\uff0c\u65e0\u6cd5\u7b2c\u4e00\u65f6\u95f4\u7834\u9664\u7ed3\u754c<br>            \u8a00\u7075\u662f\u4e00\u79cd\u901a\u8fc7\u5492\u8bed\u9b54\u6cd5\u83b7\u5f97\u751f\u547d\u7279\u5f81\u7684\u5143\u7d20\u7c7b\u751f\u547d\u4f53\uff0c\u5c5e\u4e8e\u65e0\u673a\u7269\u7269\u7ea7\u522b\uff0c\u8a00\u662f\u6307\u5492\u8bed\u64cd\u4f5c\uff0c\u7075\u5219\u662f\u7c7b\u751f\u547d\u7684\u5143\u7d20\u4f53`,
            wuRanZhe:`\u6597\u517d\u573a\u91cc\u7684\u6218\u58eb\uff0c\u8981\u4e0e\u522b\u4eba\u6216\u731b\u517d\u640f\u6597\u4f9b\u8fbe\u5b98\u8d35\u65cf\u53d6\u4e50\uff0c\u8eab\u5f62\u53cd\u800c\u6bd4\u8f83\u7626\u5c0f\uff0c\u8eab\u8fb9\u7ecf\u5e38\u8513\u5ef6\u7740\u4e0d\u660e\u7684\u623e\u6c14\u3002\u56e0\u53d7\u8fc7\u827e\u4e3d\u5361\u7684\u201c\u5e2e\u52a9\u201d\u800c\u5fc3\u5b58\u611f\u6fc0\uff0c\u4e3a\u6b64\u6b21\u201c\u8425\u6551\u201d\u827e\u4e3d\u5361\u800c\u51fa\u529b\u3002\u672c\u6765\u56e0\u827e\u4e3d\u5361\u7684\u201c\u5e2e\u52a9\u201d\u800c\u6446\u8131\u4e86\u5974\u96b6\u7684\u8eab\u4efd\uff0c\u4e0d\u8fc7\u540e\u56e0\u957f\u65f6\u95f4\u4f5c\u4e3a\u6218\u58eb\uff0c\u65e0\u6cd5\u7ee7\u7eed\u878d\u5165\u793e\u4f1a\u800c\u9009\u62e9\u91cd\u65b0\u56de\u5230\u6597\u517d\u573a\u4f5c\u4e3a\u81ea\u7531\u4eba\u6218\u58eb\u6765\u751f\u6d3b\uff0c\u7ecf\u5e38\u4e0e\u566c\u795e\u8005\u7ec4\u961f`,
        },
		
		skill:{},
		
		translate:{
            jinGuiZhiNv:'矜贵之女',
            nvPuZhang:'女仆长',
            jieJieShi:'结界师',
            shenMiXueZhe:'神秘学者',
            ranWuZhe:'染污者',

            //矜贵之女
            gaoLingZhiHua:"[被动]高岭之花",
            gaoLingZhiHua_info:"<span class='tiaoJian'>(你执行[提炼]时，若至少包含1[宝石])</span>你+1[水晶]。",
            moFaRuMen:"[法术]魔法入门",
            moFaRuMen_info:"你摸1张牌[强制][展示]，根据所展示的牌依序触发相应效果：<span class='tiaoJian'>(若有法术牌)</span>对2名目标对手各造成1点法术伤害③，<span class='tiaoJian'>(若有X张咏类命格)</span>你对X名目标角色各造成1点法术伤害③，<span class='tiaoJian'>(若有X张水系牌)</span>指定X名目标角色各+1[治疗]。",
            Magic:"[响应]Magic!",
            Magic_info:"<span class='tiaoJian'>([魔法入门]展示牌触发效果时发动)</span>你弃2张牌；<span class='tiaoJian'>([魔法入门]展示牌未触发任何效果时发动)</span>你额外+1[法术行动]。 <span class='tiaoJian'>(本回合第3次[魔法入门]结算时发动)</span>我方[战绩区]+2[宝石]。",
            qiangYuYuanXing:"[启动]强予愿行",
            qiangYuYuanXing_info:"[水晶]将你的手牌调整为4张[强制]；<span class='tiaoJian'>(若你额外移除我方[战绩区]1星石)</span>将一名其他角色手牌调整为4张[强制]。",
            youQingJiBan:"[响应]友情羁绊[回合限定]",
            youQingJiBan_info:"[宝石]<span class='tiaoJian'>(发动[魔法入门]时发动)</span>将“你摸1张牌[强制][展示]”改为“我方2名角色各弃1张牌[强制][展示]，然后各摸1张牌[强制]”。",

            //女仆长
            yingZhiXue:"[启动]影之穴",
            yingZhiXue_info:"<span class='tiaoJian'>(移除1点【糸】)</span>将【风穴】转移或放置于目标对手前，他弃1张牌。",
            miShuMuYing:"[响应]秘术·摹影",
            miShuMuYing_info:"<span class='tiaoJian'>(主动攻击命中时发动②)</span>将本次攻击牌面朝下放置在你角色旁作为【影】。",
            shun:"[响应]瞬·影·杀[回合限定]",
            shun_info:"<span class='tiaoJian'>(主动攻击未命中时发动②，移除1个【影】)</span>额外+1[攻击行动]，本回合你的主动攻击无法应战但无法发动【秘术·摹影】。",
            yingFeng:"[响应]影缝",
            yingFeng_info:"<span class='tiaoJian'>(持有【风穴】的目标对手回合开始时发动，移除X点【糸】，X<4)</span>他弃X张牌，你观看并将其中1张弃牌面朝下放置在你角色旁作为【影】；<span class='tiaoJian'>(若因此弃牌数小于X)</span>对方士气-1。",
            shiFengZhiDao:"[响应]侍奉之道",
            shiFengZhiDao_info:"<span class='tiaoJian'>(你的回合结束时发动，移除2个【影】[展示])</span>你+1【糸】；<span class='tiaoJian'>(若移除的【影】系别相同)</span>将其中1个【影】交给目标角色[强制]，然后你[横置][持续]。",
            jinShu:"[响应]禁术·影牢",
            jinShu_info:"<span class='tiaoJian'>(其他角色[特殊行动]结束时发动)</span>你+1【糸】；<span class='tiaoJian'>(若你已[横置]，额外移除3点【糸】)</span>[重置]，对目标对手造成2点法术伤害③或指定目标队友弃1张牌。",
            fengXue:"(专)风穴",
            fengXue_info:`
            <span class="greentext">[被动]影之风</span><br>
            <span class='tiaoJian'>(若你拥有【风穴】，当你主动攻击命中的攻击牌置入弃牌堆时)</span>将该牌面朝下放置在女仆长角色旁作为【影】。 <span class='tiaoJian'>(你每次[攻击行动]结束时)</span>女仆长+1【糸】。<br>
            <span class="greentext">[响应]风止</span><br>
            <span class='tiaoJian'>(若你拥有【风穴】，你的回合结束时发动)</span>将手牌补到上限[强制]，弃2张牌，将弃牌面朝下放置在女仆长角色旁作为【影】，然后移除【风穴】。
            `,
            zhen:"[启动]真·摹影",
            zhen_info:"[宝石]将2张手牌面朝下放置在你角色旁作为【影】。",
            ying:"影",
            ying_info:"【影】为女仆长专有盖牌，上限为3。",
            mi:"糸",
            mi_info:"【糸】为女仆长专有指示物，上限为4。",
            fengXueX_yingZhiFeng1:"影之风",
            fengXueX_yingZhiFeng2:"影之风",
            fengXueX_fengZhi:"风止",



            //结界师
            jieJieYiShi:"[法术]结界仪式",
            jieJieYiShi_info:"<span class='tiaoJian'>(将2张手牌面朝上放置在你角色旁[展示]作为【结界】)</span>你+1【祭】。",
            huangShenZhiLi:"[被动]荒神之力",
            huangShenZhiLi_info:"<span class='tiaoJian'>(当【结界】在场时)</span>所有与【结界】系别相同的攻击伤害额外+1。",
            huangShenJiYi:"[响应]\u8352\u795e\u796d\u4eea",
            huangShenJiYi_info:"<span class='tiaoJian'>(目标角色主动攻击时①，若攻击的系别与【结界】相同)</span>你+1【祭】；<span class='tiaoJian'>(若你额外移除3点【祭】)</span>你弃1张牌，移除1个【结界】并[横置][持续]。",
            jinMoJing:"[法术]禁魔境",
            jinMoJing_info:"<span class='tiaoJian'>(移除1点【祭】)</span>将【绝界】转移或放置在目标角色前，你弃1张牌。",
            liuLiJing:"[响应]琉璃境",
            liuLiJing_info:"<span class='tiaoJian'>(我方士气下降时，若你已[横置])</span>[重置]，我方【战绩区】+1[宝石]，指定1名目标角色弃1张牌[展示]，你可将弃牌面朝上放置在你角色旁作为【结界】。",
            jueJie:"(专属)绝界",
            jueJie_info:`
            <span class="greentext">[被动]灭界破散</span><br>
            <span class='tiaoJian'>(结界师的【结界】为0时)</span>结界师[横置]，移除【绝界】。 <span class='tiaoJian'>(拥有此卡的角色回合结束前)</span>结界师移除1个【结界】。<br>
            <span class="greentext">[响应]白二羯磨</span><br>
            <span class='tiaoJian'>(若你拥有【绝界】，你的[攻击行动]结束时发动)</span>结界师+1【祭】，你将1个【结界】加入手牌[强制]。<br>
            <span class="greentext">[被动]虚空境</span><br>
            <span class='tiaoJian'>(若你拥有【绝界】)</span>你拥有的基础效果无法触发。`,
            jueJieX_zero:"[响应]灭界破散",
            jueJieX_remove:"[响应]灭界破散",
            jueJieX_attack:"[响应]白二羯磨",
            fuMoJing:"[响应]伏魔境",
            fuMoJing_info:"[水晶]<span class='tiaoJian'>(每当你【祭】增加时发动)</span>对目标对手造成1点法术伤害③；<span class='tiaoJian'>(若因此造成对方士气下降，移除我方【战绩区】1星石)</span>你+1[水晶]。",
            jieJie:"结界",
            jieJie_info:"【结界】为结界师专有展示盖牌，上限为2，不可替换；若【结界】>0，则不能发动【结界仪式】",
            jiX:"祭",
            jiX_info:"【祭】为结界师专有指示物，上限为3。",

            //神秘学者
            yanLingShu:"[法术]言灵术",
            yanLingShu_info:"<span class='tiaoJian'>(将1-2张手牌面朝上放置在你角色旁[展示]作为【言灵】)</span>你摸1张牌[强制]︔<span class='tiaoJian'>(摸牌后，若你额外弃1张与现存【言灵】系别相同的牌[展示])</span>你+1【秘术】。",
            shouHuLing:"[被动]守护灵",
            shouHuLing_info:"<span class='tiaoJian'>(你被主动攻击命中时②，其他角色结算效果前)</span>移除1个【言灵】；<span class='tiaoJian'>(若你额外移除1点【秘术】)</span>将1张手牌面朝上放置在你角色旁[展示]作为【言灵】。",
            zhenYanShu:"[法术]真言术",
            zhenYanShu_backup:'[法术]真言术',
            zhenYanShu_info:"<span class='tiaoJian'>(将1个除光系外的【言灵】视为手牌使用)</span>执行相应的行动；<span class='tiaoJian'>(若使用的【言灵】为咏类命格或法术牌，或你额外移除1点【秘术】)</span>本次相应行动执行完成后，对目标对手造成1点法术伤害③。",
            jinJiMiFa:"[响应]禁忌秘法",
            jinJiMiFa_info:"<span class='tiaoJian'>(你的回合开始前，移除3点【秘术】发动)</span>指定2名目标角色各弃1张牌，你将弃牌面朝上放置在你角色旁[展示]作为【言灵】。",
            yaoJingMiShu:"[响应]妖精秘术[回合限定]",
            yaoJingMiShu_info:"<span class='tiaoJian'>(【真言术】或【真言压制】结算后发动)</span>立即执行一次[攻击行动]︔<span class='tiaoJian'>(若本次执行的攻击命中②)</span>你+2【秘术】。",
            zhenYanYaZhi:"[响应]真言压制",
            zhenYanYaZhi_info:"[水晶]<span class='tiaoJian'>(【真言术】结算后发动)</span>对目标角色造成1点法术伤害③，你可立即执行一次【真言术】。",
            yanLing:"言灵",
            yanLing_info:"【言灵】为神秘学者专有展示盖牌，上限为3。",
            miShu:"秘术",
            miShu_info:"【秘术】为神秘学者专有指示物，上限为4。",

            //染污者
            shenQiZhiYi:"[被动]神弃之裔",
            shenQiZhiYi_info:"游戏初始时，你+1[水晶]。你的[治疗]上限为0[恒定]，你始终无法获得或使用[治疗]，你对拥有[治疗]的角色伤害额外+1。",
            liRuQuanYong:"[响应]戾如泉涌[回合限定]",
            liRuQuanYong_info:"<span class='tiaoJian'>(仅【普通形态】下且你【戾气】数<2，[攻击行动]或[法术行动]结束后发动)</span>你+1【戾气】，额外+1[攻击行动]。",
            kuangLiZhiXin:"[被动]狂戾之心[持续]",
            kuangLiZhiXin_info:"<span class='tiaoJian'>(你的回合开始时或承受伤害时⑥，且【戾气】达到上限时)</span>你弃1张牌，指定目标角色移除2[治疗]，[横置]转为【狂戾形态】，此形态下你无法使用[圣光]，你造成的伤害额外+1。 <span class='tiaoJian'>(你的回合结束时若【戾气】数为0)</span>[转正]脱离【狂戾形态】，将你的1[水晶]转换为1[宝石]。",
            kuangLiZhiTi:"[被动]狂戾之体",
            kuangLiZhiTi_info:"<span class='tiaoJian'>(仅【狂戾形态】下且你【戾气】数>0，目标角色对你造成伤害时③)</span>移除1点【戾气】，本次伤害额外+1，但伤害最高为4。",
            shenZhiWuRan:"[响应]神智污染",
            shenZhiWuRan_info:"<span class='tiaoJian'>(仅【狂戾形态】下，你对目标角色造成伤害时发动③，移除1点【戾气】)</span>本次伤害额外+1，本次你造成的伤害无法以[治疗]抵御。",
            niuQuZhiAi:"[启动]扭曲之爱",
            niuQuZhiAi_info:"[宝石]调整你的形态为【普通形态】或【狂戾形态】，你弃2张牌或摸2张牌[强制]，并任意调整你的【戾气】数。",
            liQi:"戾气",
            liQi_info:"【戾气】为污染者专有指示物，上限为2。",
        },
	};
});
