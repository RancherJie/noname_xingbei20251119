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
			fengZhiJianSheng:['威斯特姆','jiGroup',3,['fengNuZhuiJi','shengJian','lieFengJi','jiFengJi','jianYing'],],
            kuangZhanShi:['阿基特','xueGroup',3,['kuangHua','xueYingKuangDao','xueXingPaoXiao','siLie'],],
            shenJianShou:['安娜','jiGroup',3,[],],
            fengYinShi:['帕蒂','huanGroup',3,['faShuJiDang','diZhiFengYin','shuiZhiFengYin','huoZhiFengYin','fengZhiFengYin','leiZhiFengYin','wuXiShuFu','fengYinPoSui'],],
            anShaZhe:['无念','jiGroup',3,['fanShi','shuiYing','qianXing'],],
            shengNv:['艾丽卡','shengGroup',3,['bingShuangDaoYan','zhiLiaoShu','zhiYuZhiGuang','lianMin','shengLiao'],],
            tianShi:['玛利亚','shengGroup',3,['fengZhiJieJing','tianShiZhuFu','tianShiJiBan','tianShiZhiQiang','tianShiZhiGe','shenZhiBiHu'],],
            moFaShaoNv:['妮娅','yongGroup',3,[],],
            moJianShi:['美狄亚','huanGroup','3/4',[],],
            shengQiangQiShi:['斯庇尔','shengGroup','3/4',[],],
            yuanSuShi:['索尔斯','yongGroup','3/4',[],],
            maoXianJia:['莉莉安娜','huanGroup','3/4',[],],
            wenYiFaShi:['塔格奥','huanGroup','3/4',[],],
            zhongCaiZhe:['赛尔娜','xueGroup','3/4',[],],
            shenGuan:['丽格蕾朵','shengGroup',4,[],],
            qiDaoShi:['珐珞','yongGroup',4,[],],
            xianZhe:['诺雷杰','yongGroup',4,[],],
            lingFuShi:['风音','yongGroup',4,[],],
            jianDi:['卡特琳娜','jiGroup','4/5',[],],
            geDouJia:['凌薇','jiGroup','4/5',[],],
            yongZhe:['尤里乌斯','xueGroup','4/5',[],],
            lingHunShuShi:['狄亚娜','huanGroup','4/5',[],],
            xueZhiWuNv:['紫苑','xueGroup',5,[],],
            dieWuZhe:['华胥','yongGroup',5,[],],
            nvWuShen:['米涅瓦/栞蒂','shengGroup','3/4',[],],
            moGong:['泰罗莎','huanGroup',4,[],],
            hongLianQiShi:['斯卡雷特','xueGroup',4,[],],
            yingLingRenXing:['零','yongGroup',4,[],],
            moQiang:['菲欧娜','huanGroup',4,[],],
            cangYanMoNv:['莉莉丝','xueGroup',4,[],],
            yinYouShiRen:['詹姆','huanGroup','4/5',[],],
            jingLingSheShou:['波阿狄西亚','jiGroup','3/4',[],],
            yinYangShi:['轮&环','huanGroup',4,[],],
            xueSeJianLing:['罗丝菲莉','xueGroup',4,[],],
            yueZhiNvShen:['尤瑞艾莉','shengGroup',5,[],],
            shouLingWuShi:['菖蒲','jiGroup','4/5',[],],
            shengGong:['萨哈魁尔','shengGroup','4/5',[],],
		},

        characterIntro: {
			fengZhiJianSheng:"小时候被剑之魔女收养，作为亦师亦长的存在而逐渐对剑之魔女产生爱慕之情；最后却只听闻到了剑之魔女自杀的消息。无法接受这个消息的他继承了剑之魔女的圣剑，随后前往剑之魔女生前最后一个地方探寻剑之魔女自杀的真相，然而除了打听到此地有过一次大爆炸别无其他消息。就在这时，他看到了一个身穿铠甲，手拿一把剑，头上戴着小蓝花的女子，但是该女子似乎失去了记忆，一脸的迷茫~",
            kuangZhanShi:"曾经从地下黑市中作为擂主而获得自由走出，被红衣主教雇佣成为雇佣兵，在雇佣的过程中，经历了非常多的战斗。然而在一次失败的战斗后，被无情的抛弃，走投无路的他，考虑是否又要重新回到地下黑市，过着暗无天日靠着击倒对方而活下去的日子，最后依然作为了斗兽场中的擂主，是传说中一代的不败神话",
            shenJianShou:"与泰罗莎是远亲，详见“弓神一族组织架构图”，在部落被神圣教廷东征时带领族人前往波阿狄西亚处避难",
            fengYinShi:"胸口拥有一面镜子以及6根触手状的魔法增幅装置，能够帮助她更快的施展封印法术；能够将封印法术附加在物体上，因此帮助过一位人压制魔力暴走，现在跟着莉莉安娜在一起冒险",
            anShaZhe:"为了追杀组织中的叛忍而来",
            shengNv:`作为牺牲品被强制赋予人工星痕作为神之子；被赋予的特殊能力是快速治疗。隶属于普济会<br>
            “红莲之劫”后，神之子位置空缺，神圣教廷下一个附属国的国主为了自身国家利益，跟神圣教廷内部某些人一起密谋，然后在自己的女儿身上印上人造“星痕”，宣称其女儿为新的神之子。<br>
            艾丽卡经历了“绑架案”被解救后，变得更加圣母了，而且此时星痕的印记也出现了`,
            tianShi:`旧日之民文明的产物。旧日之民文明毁灭后，找到了理想乡阿瓦隆，将旧日之民基因与精灵族或妖精族结合创造出新种族——兽灵。后与精灵族、妖精族大战。<br>
            这个没落的高等种族为了生存与神圣教廷内部高层进行私下交易，羽族由异教徒成为了神圣教廷教义中的神之使者——天使。教廷则获得了羽族相关的一些科技与女武神米涅瓦的传说。由此启动了“女武神计划”
            天使将女武神的传说交付与神圣教廷的另一个原因正是因为“复兴羽族文明”这个出发点。于是“女武神计划”因应而生。教廷希望得到传说中的神力，天使们也希望通过“女武神计划”获得文明复兴。`,
            moFaShaoNv:`原本是妖精国的小公主，妖精为了解决荒漠化的环境，企图利用羽族留下的科技结合精灵族的秘术合成星杯，但是最终失败并导致妖精国灭国。仅妮娅和部分妖精国的妖精带着设计图逃离原灭国的区域，她们穿过了荒漠南下来到神圣教廷等国家，导致这些国家的星石合成技术得到了发展以及普及<br>
            是学院都市的创始人之一，作为精灵族几乎拥有者漫长的生命，使得看起来她只是个小孩子，但实际她的年龄已经。。。。（被魔弹打飞~）<br>
            妖精掌握着一些奇奇怪怪的法术，其中妮娅在无聊的时候就对自己施展了一个小小实验~<br>
            而她的好友，另一个大陆逃亡到另一个大陆，在那边发展起来，通过科技能力制作了魔导器-信标，来到了妮娅现在所在的大陆，她们之间会发生怎么样的故事呢？`,
            moJianShi:"姐姐成为人工星杯者，但魔力不断增加，最后溢出爆炸死亡；故接任姐姐成为人工星杯者，继承魔剑士。身上穿的是由自己打造能够压制魔力的魔装铠甲。失去过一段记忆，为此迷茫中~。后来遇见了两位命运之人~",
            shengQiangQiShi:`斯卡雷特后辈，相爱相杀追杀斯卡雷特，天然黑<br>
            原本是因为仰慕作为神之子的斯卡雷特而加入教廷的惩戒部队。但圣枪还在惩戒部队训练营中的时候，却发生了“红莲之劫”这样的事件。对此斯庇尔完全不清楚仰慕之人为什么会变成一个堕落的教廷背叛者，因此她希望通过亲手追捕斯卡雷特，问清事件缘由。于是她努力地成为了新的圣枪骑士团的队长，并且一直地追寻着那位她的昔日的仰慕之人。`,
            yuanSuShi:`收养了战斗法师（物语的战斗法师），与安娜的父亲是旧友，波阿狄西亚的恩人。在上古之战后，大陆变得四分五裂，精灵族也不再长生且不再能随意的使用魔法，也导致了族群四分五裂，精灵人口数量锐减，同时还有被奴役或被抓去用作匹配出兽灵或新人类的实验风险。<br>
            于是索尔斯默默地成立了一个组织，目的就是为了拯救那些被奴役的精灵族人。随着组织越来越庞大，其中他的朋友与他的想法产生了分歧：索尔斯认为应该摈弃种族之间的隔阂，应该要联合一切能联合的力量，包括兽灵还有开明的新人类，建立一个种族平等的世界；而他的朋友则认为应该重新回到旧日之民未来到阿瓦隆时那样只有精灵的世界，应该回归到上古时代，精灵还能长生不老，跟自然融洽。<br>
            有了分歧后，摩擦与矛盾就开始增加了，但索尔斯觉得不论什么目标，目前应该优先保证团结，救助被奴役的精灵是一致的。于是就带领一部分精灵族，发动了一次革命，最后惨被镇压<br>
            革命的失败造成了原本发展起来的组织陷入了崩坏的地步，内部开始出现派系斗争，分裂已经无法避免，这个时候他的朋友也因为这次的革命而失明了。整个人陷入了EMO状态<br>
            自从索尔斯与其挚友相识后，索尔斯希望聚集一群志向相同的同胞一起组建精灵解放组织，于是挚友推荐了自己的青梅——梅丽珊卓。<br>
            最初时梅丽珊卓跟索尔斯并不待见，经常意见不合，梅丽珊卓对索尔斯的初印象并没有太大的好感。
            组织初期因为没有什么实际成果，所以加入的人也很少，不过在索尔斯的努力下，逐渐地梅丽珊卓对索尔斯的印象改变，某次拯救精灵行动中索尔斯更是表现活跃，并于梅丽珊卓陷入险境时拯救了梅丽珊卓，同时逐渐的接触以及视野的开拓，让梅丽珊卓逐渐爱上索尔斯。<br>
            某日挚友收到了一个跟上古精灵族相关的消息——精灵公主被围困在北方的某个领地里，于是希望组织出去营救。<br>
            挚友在这次行动里救了精灵公主，使得精灵公主迷上了挚友。精灵公主曾经与索尔斯有一面之缘，而她则是索尔斯年少时的心中女神，就此精灵公主多次委托索尔斯搭线去找挚友。`,
            maoXianJia:"四处游历，寻找着远古的遗迹。在遇到灵魂术士之前，是帝国北方部落一个偏东发达地区城市领导者的继承人，该城市因为以实力为尊被称为“罪恶都市”，里面充斥着各种“犯罪合理化”等。“罪恶都市”地理上离艾丽卡曾经的国家有着一道山脉分割，因此“罪恶都市”的“罪恶”没有弥散开来。由于北方部落首领去世导致其中内乱，罪恶都市也缺乏管理。冒险家也不得不离开这座都市，期间经历了很多事情，令她获得了灵魂术士、封印师、仲裁者等诸多好友，她们在大陆冒险的小队无往不利~",
            wenYiFaShi:"隶属于灵谷隐修会；被教廷以手段镇压后强行收编，对此颇有异言，不断的卧薪尝胆，后终于在某位角色身上找到了突破口，告诉她所有事情的真相，导致了神圣教廷巨大分裂变故的“罪魁祸首”，同时将灵谷隐修会转入了新派别",
            zhongCaiZhe:"是帝国偏东南地区的原住居民，在探险的过程中，遇到了冒险家、灵魂术士、封印师等组成的队伍。在经历了事件之后，与灵魂术士交好，加入了她们的探险队伍，一同寻找大陆上的遗迹",
            shenGuan:"与斯卡雷特有关；领导着普济会&水神修道会&清洁派&清灵宗；在剑帝统一国家的行动中，与剑帝达成协议",
            qiDaoShi:"主要居住在东方皇朝偏西南地区，该地区四季如夏，酷热潮湿，故平时一般喜欢清凉着装。这次与华胥一同前行，希望去皇朝的中心探寻“术”的真正奥秘",
            xianZhe:`学院都市真学霸之一，旁人眼里中与莉莉丝为天造地赐的一对，实际并不是<br>
            一个继承了贤者称号的努力天才，害怕受伤但不得不受伤的胆小鬼`,
            lingFuShi:"隶属于东方皇朝，与阴阳师为同源，而师门则在东方皇朝一处福泽洞天之中，详见“阴阳师”",
            jianDi:`帝国西部一块地区的领导者。作为非本地的外来人员，剑帝将这些组织聚拢在一起并建立起属于自己的小国度费尽周折，无论是武力上还是脑力上，你不得不佩服她的战力和谋略<br>
            详见“帝国西部的历史”`,
            geDouJia:`原是东方皇朝游历至西方帝国的使者团成员的后代，在帝国西部地区开设了一个小武馆，向异乡人展示东方神秘的“气”<br>
            详见“帝国西部的历史”`,
            yongZhe:"从小在隔壁村有一个青梅竹马，然而青梅竹马很小就被拐卖走了，为此而周游各国寻找她的线索并遇到了很多人。偶然一个机会，他在一个斗兽场看到了一个很像她的背影，为了确定是不是她，他隐姓埋名加入了斗兽场",
            lingHunShuShi:"曾经是学院都市的研究生助教，逐渐对生命这一项禁忌的秘术产生了浓厚的兴趣并作为自己的研究课题。在完成自己强大的术式【灵魂链接】后，听说北方埋藏着古老的生命禁忌秘术，于是离开学院都市前往大陆的北方进行探索。在探索的期间遇见了冒险家，在经历了很多事情后双方结为好友，一同游历，穿越帝国，结识了好友封印师，最后在帝国南下部分定居，又遇到了好友仲裁者",
            xueZhiWuNv:`被做成人形兵器投入至战场，在战场上爆发，随后被东方皇朝派出的大能镇压暴走，最后疑似与一名人类少年隐居；隶属于皇朝东方的一个小国家，这个小国家还要给皇朝朝贡。<br>
            在巫女机关中属于上级巫女（详见“巫女机关组织架构图”），修炼程度最靠近大巫女，但因为心中保持着当年的一个人类少年，而迟迟无法踏入成为大巫女的最终阶段。`,
            dieWuZhe:"主要居住在东方皇朝偏西地区，该地区充满了异域风情。这次与珐珞一同前行，希望去皇朝的中心探寻“术”的真正奥秘",
            nvWuShen:"羽族崇拜的战斗神，是将要没落的羽族信仰中的神灵。由圣光教会推动，羽族与神圣教廷中一些教派希望合作使女武神米涅瓦再现世间统一世界宗教，该计划被称为“女武神计划”",
            moGong:`与安娜为远亲，在安娜带着部落族人前去寻找波阿狄西亚避难时，离开安娜去寻找不连累族人而偷偷出走的父亲。<br>
            此时泰罗莎已经通过父亲留下的魔法术式完成了向魔弓转变的下一个阶段，在找父亲的期间遇到了同是在找人的菲欧娜`,
            hongLianQiShi:"详见“红莲事件”；被赋予的特殊能力是霸体（伤害无效化）；认为被追捕是自己最好的赎罪道路",
            yingLingRenXing:"零是完全用机械手段制造出来的人形机械体，而操作她的则是已经被秘术绑定的灵魂",
            moQiang:`女武神计划（造神计划）的实验体，但是失败后的产物<br>
            自小就是孤儿的菲欧娜被一个人贩子收留，人贩子给她起了个名字叫菲欧娜。然而等菲欧娜长大后，那个人贩子对她实施了侵犯，然后将她卖给了一个神秘组织的实验室作为试验品，这突然其来的事件让菲欧娜的三观崩塌，变得不信人和冷酷。<br>
            最后作为实验失败品被扔到了神秘组织实验室的废品处理场自生自灭，处理场中只有充满腐臭气味的实体和实验后弃置的星石残渣；菲欧娜在其中意外的与幻之星石共生并获得了幻之星石的能力。最终她通过这个能力破坏了神秘组织实验室并逃离出去，目前被这个神秘组织追捕中。<br>
            逃离出来后的菲欧娜目前成为了魔装少女，到处流浪，寻找昔日那个既是恩人又是仇人，同时也是曾经所爱之人，但少女对这行为充满迷惘与苦恼。于是被星石指引着的她开始寻找能解决自己一切苦恼的星杯。<br>
            正当泰罗莎被魔法吞噬，迷失于世界的一角时，菲欧娜与泰罗莎相遇了，但此次的相遇并非偶然。被星石所眷恋，所指引，同样是失去自我的二人，相互依靠，在她们二人的未来前方则是另一名命运之人。`,
            cangYanMoNv:`偷看了诺雷杰的贤者之书，结合了自己所学，完成了属于自己的术式；学院都市真学霸之一，旁人眼里中与诺雷杰为天造地赐的一对，实际并不是<br>
            一个为了继承爷爷遗产的天才少女，为了继承那个家族意志的少女，终将走上了不择手段的道路`,
            yinYouShiRen:`阴阳师通过阴阳术，将自身灵魂分割出2部分，分别命名为轮和环；其中一部分利用凭依附体的方式变成另一部分的式神。通过这种方式就可以达到2个灵魂同时学习不同的知识，并培养成新的灵魂个体和形成不同的性格。而当分割的灵魂再次合到一体时，阴阳师就能获得更多更强的力量。目前正努力尝试追求分割成4份灵魂，8份灵魂等等。<br>
            阴阳师与风音本是同源，但对本源的理解方式不同，各自亦使用不同的方式进行修行：阴阳师在东方岛国结合了当地的御魂术、凭依术、咒术进行发展；而风音则在东方群山中以修身、养神、符箓进行发展。某天她们各自得到师傅的授命，前往同一个地方执行工作，此刻命运引导至此~<br>
            算出东方有一场能量大暴走，但感觉无法以一己之力镇压，故报告师门，得到了师门的授命`,
            jingLingSheShou:"安娜带领族人前往她所在的地方英吉利亚森林避难；擅长隐匿于丛林之中，穿插于战场，根据场上局势，牵制敌人，精准打击对手以及追击溃败之敌，她相信秘仪的祝福力量以及森之伙伴能为她带来胜利的凯旋",
            yinYangShi:`四处游历，聆听故事，寻找灵感，以此来完成自己的著作《永恒乐章》。在游历的过程中，他碰到了一个可爱的小精灵，并度过了一段愉快的时光<br>
            实际是作为第一批旧日之民和原始精灵族通过基因混合后的产物，虽然因为混入了旧日之民的基因而被判定种族为人类，实际上体内精灵族的基因因为第一代的缘故占比还是非常高的。因此他也获得了几乎永恒的生命。漫长的生命对他来说，不像是恩赐，反而是一种惩罚，一种名叫“永恒囚徒”的惩罚。<br>
            为了了结自身，或者说打发时间，他游历了这块大陆的各个地方，甚至想要闯入大陆边缘的虚无混沌来尝试神隐进行解脱，但都没有成功。因为他不知道的是，像他这样的精灵，只有通过献祭才能让自己魂归故土，然而他现在并没有找到会这种仪式的人，也不知道这块大陆上还有没有会这种仪式的人。直到某个小精灵穿越过来时~`,
            xueSeJianLing:`帝国西部一块地区的原住民，对于某位人士的统一一直不服气，与此斗争了许久，最后被其剑道实力和领袖气质所折服<br>
            详见“帝国西部的历史”`,
            yueZhiNvShen:`月神信仰是被教廷国吞并后融合到教廷体系里的异族神信仰。教廷为了维系统治，将月神的神权分拆出来变成3份，分别由不同的祭师继承。<br>
            自小作为月神祭师的继承者之一的尤瑞艾莉，很早就觉醒了强大的神力；被拆分的3份神权逐渐聚合到一起，这也许是命运的新启示<br>
            隶属于月神修道会`,
            shouLingWuShi:`是作为紫苑的守护姬武士，同时也是被国家指派用来监视紫苑，压制紫苑暴走的工具。御魂流是菖蒲所修的剑道流派，以激发操纵体内兽魂来提升自身能力，从而压制敌人。作为紫苑的亲属，同时也肩负国家工具命运的菖蒲，与紫苑之间的关系十分微妙。<br>
            菖蒲喜好喝酒和泡澡，这是她认为最无拘无束的时间了；且她认为这个时间所有人的关系应该都放下来，好好享受这段美好时光<br>
            菖蒲在担任姬武士之前，曾经在御魂流的道场内学习，御魂流顾名思义，就是统御体内兽魂。菖蒲在道场中学会了最终奥义，于是离开道场游历四方。在游历四方的一两年中，她收到了大师兄的来信，信中则写到“菖蒲游历四方后，师傅收了一名有天赋的关门弟子，关门弟子不负众望，学会了师傅的最终奥义，然而她却最后弑师，留下了“秘技已会”的字样后消失不见。”。于是菖蒲为了复兴御魂流，同时也是为了替师傅报仇，在赶回去的路上，调查发现该关门弟子去巫女机关担任了姬武士。于是她赶回去道场，花了半年时间将御魂流最终的奥义传授给道场的师兄弟后，卧底巫女机关担任了姬武士，给她分配的巫女则是紫苑。<br>
            在担任姬武士期间，菖蒲调查关门弟子的踪迹，但一直都没有消息。直到她带着紫苑去某地“祈福”时，发现对方阵营中居然也出现了巫女的存在。巫女机关大怒，怀疑是内部有人窃取了机密技术或者有姬武士叛变，带走了侍奉巫女或者下级巫女。终于巫女机关调查出了这事的始作俑者，居然就是关门弟子。于是一场大战不可避免的爆发了，在战斗过程中，紫苑疏于看管，最后暴走。菖蒲以损失了一只手的代价，和其他大能镇压了她的暴走。战争的最后，菖蒲在原战争遗址附近，立了一块无字碑，在那边孤独终老。`,
            shengGong:"天之使徒，但因为是人造的故没有羽族的翅膀，于是制作了一对翅膀（也可以作为武器使用）",
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
                    var num=player.countCards('h',card=>get.xiBie(card)=='feng'&&get.type(card)=='gongJi');
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
                frequent:true,
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
                        .set('zhanShi',true)
						.forResult();
				},
                content:function(){
                    'step 0'
                    player.discard(event.cards).set('zhanShi',true);
                    'step 2'
                    if(!player.isHengZhi()) event.finish();
                    'step 3'
                    var next=player.chooseToDiscard(1,'水影：选择要弃置的法术牌',function(card){
                        return get.type(card)=='faShu';
                    });
                    next.set('ai',function(card){
                        return 6 - get.value(card);
                    });
                    next.set('zhanShi',true);
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
            moBaoChongJi_info:'<span class="tiaoJian">(弃1张法术牌[展示])</span>我方【战绩区】+1[宝石]。2名目标对手各弃一张法术牌[展示]，每有人不如此做，你对他造成2点法术伤害③，你弃一张牌。',
            moDanZhangWo:'[响应]魔弹掌握',
            moDanZhangWo_info:'你主动使用【魔弹】时可以选择逆向传递。',
            moDanRongHe:'[响应]魔弹融合',
            moDanRongHe_info:'你的地系或火系牌可以当【魔弹】使用。',
            huiMieFengBao:'[法术]毁灭风暴',
            huiMieFengBao_info:'[宝石]对2名目标对手各造成2点法术伤害③。',

            //女武神
            shenShengZhuiJi:"[响应]神圣追击",
            shenShengZhuiJi_info:"<span class='tiaoJian'>(攻击或[法术行动]结束后，移除你的1[治疗])</span>额外+1[攻击行动]。",
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
            yuanSuXiShou_info:'<span class="tiaoJian">(对目标角色造成法术伤害时发动③)</span>你+1<span class="hong">【</span>元素<span class="hong">】</span>。',
            yuanSuDianRan:'[法术]元素点燃',
            yuanSuDianRan_info:'<span class="tiaoJian">(移除3点</span><span class="hong">【</span>元素<span class="hong">】</span><span class="tiaoJian">)</span>对目标角色造成2点法术伤害③，额外+1[法术行动]；不能与【元素吸收】同时发动。',
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
            yuanSu_info:'</span><span class="hong">【</span>元素<span class="hong">】</span>为元素师专有指示物，上限为3。',

            //月之女神
            xinYueBiHu:"[响应]新月庇护[持续]",
            xinYueBiHu_info:"<span class='tiaoJian'>(我方角色因承受伤害造成手牌数超过手牌上限，导致士气即将下降时)</span>[横置]转为【暗月形态】，将因此而造成的弃牌面朝下放置于角色旁，作为【暗月】。本次士气不会下降。",
            anYueZuZhou:"[被动]暗月诅咒",
            anYueZuZhou_info:"<span class='tiaoJian'>(你每次移除【暗月】)</span>我方士气-1；<span class='tiaoJian'>(你的【暗月】数为0时)</span>[重置]脱离【暗月形态】。",
            meiDuShaZhiYan:"[响应]美杜莎之眼",
            meiDuShaZhiYan_info:"<span class='tiaoJian'>(目标对手攻击时①，移除1个与攻击牌系别相应的系别的【暗月】[展示])</span>你+1[治疗]，你+1<span class='lan'>【</span>石化<span class='lan'>】</span>。<span class='tiaoJian'>(若该【暗月】为法术牌)</span>你弃1张牌，对目标对手造成1点法术伤害③。",
            yueZhiLunHui:"[响应]月之轮回",
            yueZhiLunHui_info:"<span class='tiaoJian'>(你的回合结束时)</span>选择以下一项发动：<br>·<span class='tiaoJian'>(移除1个【暗月】)</span>目标角色+1[治疗]；<br>·<span class='tiaoJian'>(移除你的1[治疗])</span>你+1<span class='hong'>【</span>新月<span class='hong'>】</span>。",
            yueDu:"[响应]月渎[回合限定]",
            yueDu_info:"<span class='tiaoJian'>(目标角色承受你造成的法术伤害⑥后，移除你的1[治疗])</span>对目标对手造成1点法术伤害③。",
            anYueZhan:"[响应]暗月斩",
            anYueZhan_info:"[水晶]<span class='tiaoJian'>(仅【暗月形态】下可发动，主动攻击命中时②，移除X个【暗月】(x<3))</span>本次攻击伤害额外+X。",
            cangBaiZhiYue:"[法术]苍白之月",
            cangBaiZhiYue_info:"[宝石]选择以下一项发动：<br>·<span class='tiaoJian'>(移除3点</span><span class='lan'>【</span>石化<span class='lan'>】</span><span class='tiaoJian'>)</span>你的下次主动攻击对手无法应战，额外+1[攻击行动]。你额外获得一个回合；<br>·移除X点<span class='hong'>【</span>新月<span class='hong'>】</span>，你+1点<span class='lan'>【</span>石化<span class='lan'>】</span>，弃1张牌，对目标对手造成(X+1)点法术伤害③。",
            xinYue:"新月",
            xinYue_info:"<span class='hong'>【</span>新月<span class='hong'>】</span>为月之女神专有指示物，上限为2。",
            shiHua:"石化",
            shiHua_info:"<span class='lan'>【</span>石化<span class='lan'>】</span>为月之女神专有指示物，上限为3。",
            anYue:"暗月",
            anYue_info:"【暗月】为月之女神专用盖牌，无上限。",
            
            //仲裁者
            zhongCaiFaZe:"[被动]仲裁法则",
            zhongCaiFaZe_info:"游戏初始时。你加+2[水晶]。",
            yiShiZhongDuan:"[启动]仪式中断",
            yiShiZhongDuan_info:"<span class='tiaoJian'>(仅【审判形态】下发动)</span>[重置]脱离【审判形态】，我方【战绩区】+1[宝石]。",
            moRiShenPan:"[\u6cd5\u672f]\u672b\u65e5\u5ba1\u5224",
            moRiShenPan_info:"<span class='tiaojian'>(\u79fb\u9664\u6240\u6709</span><span class='hong'>\u3010</span>\u5ba1\u5224<span class='hong'>\u3011</span><span class='tiaojian'>)</span>\u5bf9\u76ee\u6807\u89d2\u8272\u9020\u6210\u7b49\u91cf\u7684\u6cd5\u672f\u4f24\u5bb3\u2462\uff1b\u5728\u8bb0\u5f97\u884c\u52a8\u9636\u6bb5\u5f00\u59cb\u65f6\uff0c\u82e5\u4f60\u7684<span class='hong'>\u3010</span>\u5ba1\u5224<span class='hong'>\u3011</span>\u5df2\u8fbe\u5230\u4e0a\u9650\uff0c\u8be5\u884c\u52a8\u9636\u6bb5\u4f60\u5fc5\u987b\u53d1\u52a8\u3010\u672b\u65e5\u5ba1\u5224\u3011\u3002",
            shenPanLangChao:"[被动]审判浪潮",
            shenPanLangChao_info:"<span class='tiaoJian'>(你每承受一次伤害⑥)</span>你+1<span class='hong'>【</span>审判<span class='hong'>】</span>。",
            zhongCaiYiShi:"[启动]仲裁仪式[持续]",
            zhongCaiYiShi_info:"[宝石][横置]转为【审判形态】，你的手牌上限恒定为5[恒定]；每次你的回合开始时，你+1<span class='hong'>【</span>审判<span class='hong'>】</span>。",
            panJueTianPing:"[法术]判决天平",
            panJueTianPing_info:"[水晶]你+1<span class='hong'>【</span>审判<span class='hong'>】</span>，再选择一下一项发动：<br>·弃掉所有手牌。<br>·将你的手牌补到上限[强制]，我方【战绩区】+1[宝石]。",
            shenPan:"审判",
            shenPan_info:"<span class='hong'>【</span>审判<span class='hong'>】</span>为仲裁者专有指示物，上限为4。",

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
