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
            zhanDouFaShi:['female','yongGroup',3,[],],
            xingZhuiNvWu:['female','yongGroup','4/5',[],],
            shengTingJianChaShi:['female','shengGroup',4,[],],
            lieWuRen:['male','jiGroup','3/4',[],],
            shengDianQiShi:['female','shengGroup',4,[],],
		},
        characterIntro:{
            zhanDouFaShi:`\u4E3A\u5BFB\u627E\u9B54\u6CD5\u7684\u771F\u7406\uFF0C\u5E26\u7740\u7B26\u6587\u4E4B\u77F3\u8F97\u8F6C\u6765\u5230\u6614\u65E5\u597D\u53CB\uFF08\u771FCP\uFF09\u857E\u5A1C\u6240\u5728\u7684\u6751\u5E84\uFF0C\u4E00\u573A\u98CE\u66B4\u5373\u5C06\u6765\u4E34\u3002\u539F\u4F4F\u5740\u8BE6\u89C1\u201C\u4E16\u754C\u5730\u56FE\u201D
            \u5728\u5B66\u9662\u90FD\u5E02\u4E2D\u5B66\u4E60\uFF0C\u4EBA\u79F0\u540A\u8F66\u5C3E\u6CD5\u5E08\u2014\u2014\u8DEF\u5C14\u8389\u5609\uFF1B\u4F46\u540A\u8F66\u5C3E\u6CD5\u5E08\uFF0C\u867D\u7136\u540A\u8F66\u5C3E\uFF0C\u4F46\u5374\u662F\u5C5E\u4E8E\u9996\u5E2D\u4E0E\u5B66\u9738\u5C42\u6B21\u7684\u540A\u8F66\u5C3E\u3002\u5BF9\u4E8E\u666E\u901A\u7684\u6CD5\u5E08\u6765\u8BF4\uFF0C\u5979\u8FD8\u662F\u4E00\u6D41\u7684\uFF0C\u4F46\u5BF9\u4E8E\u90A3\u4E9B\u5929\u624D\u6765\u8BF4\uFF0C\u5979\u53EA\u662F\u7A0D\u5FAE\u6709\u70B9\u5929\u8D4B\u7684\u79C0\u624D\u3002\u5468\u56F4\u7684\u4EBA\u90FD\u7B11\u8BDD\u8BF4\uFF0C\u5982\u679C\u4E0D\u662F\u56E0\u4E3A\u7B26\u6587\u6CD5\u672F\u7684\u7406\u8BBA\u8BBA\u6587\u88AB\u7B26\u6587\u5B66\u9662\u7684\u957F\u8001\u76F8\u4E2D\u5E76\u6536\u4E3A\u76F4\u7CFB\u5F1F\u5B50\uFF0C\u5979\u5C31\u662F\u4E2A\u4E0D\u5165\u6D41\u7684\u6CD5\u5E08\u800C\u5DF2
            \u4E0E\u857E\u5A1C\u662F\u540C\u4E00\u4E2A\u8001\u5E08
            
            \u8DEF\u5C14\u8389\u5609\u51FA\u751F\u5728\u5927\u9646\u4E2D\u90E8\u7684\u5730\u533A\uFF0C\u6574\u4E2A\u5BB6\u65CF\u4E3B\u8981\u4ECE\u4E8B\u4E1C\u897F\u738B\u56FD\u4E4B\u95F4\u7684\u8D38\u6613\u751F\u610F\uFF08\u5305\u542B\u8D70\u79C1\u548C\u5974\u96B6\u8D38\u6613\u7B49\uFF09\uFF0C\u7ECF\u5E38\u5C45\u65E0\u5B9A\u6240\u3002\u5BB6\u65CF\u4E2D\u9664\u53BB\u957F\u8F88\u5916\uFF0C\u5C31\u53EA\u6709\u5C1A\u5728\u8941\u8913\u4E2D\u7684\u5F1F\u59B9\uFF0C\u57FA\u672C\u4E0A\u6CA1\u6709\u80FD\u4E00\u8D77\u73A9\u800D\u7684\u670B\u53CB\u3002\u6240\u4EE5\u5F53\u90A3\u5929\u5979\u89C1\u5230\u4E00\u4E2A\u8DDF\u5979\u5DEE\u4E0D\u591A\u5E74\u7EAA\uFF0C\u4F46\u5934\u9876\u7740\u6BDB\u7ED2\u7ED2\u8033\u6735\u7684\u5974\u96B6\u5973\u5B69\u65F6\uFF0C\u5979\u51B3\u5B9A\u8BA9\u8FD9\u540D\u5973\u5B69\u6210\u81EA\u5DF1\u7684\u597D\u53CB\uFF0C\u4E8E\u662F\u9F13\u8D77\u52C7\u6C14\u8BF7\u6C42\u7236\u4EB2\u4E3A\u81EA\u5DF1\u4ECE\u5BB6\u65CF\u91CC\u4E70\u4E0B\u8FD9\u4E2A\u5974\u96B6\u3002
            \u5974\u96B6\u8D38\u6613\u662F\u6B8B\u9177\u7684\uFF0C\u5979\u66FE\u7ECF\u76EE\u7779\u8005\u4E00\u540D\u5C11\u5973\u8DDF\u7740\u4E00\u540D\u7537\u5B50\u6765\u5230\u5BB6\u65CF\uFF0C\u5C11\u5973\u660E\u660E\u9762\u5E26\u60C5\u612B\uFF0C\u7136\u800C\u7537\u5B50\u5374\u900F\u8FC7\u5BB6\u65CF\u65E0\u60C5\u7684\u5C06\u5973\u5B50\u5356\u7ED9\u4E86\u6559\u4F1A\u3002\u56E0\u6B64\u5974\u96B6\u8D38\u6613\uFF0C\u4E5F\u662F\u4F1A\u53D7\u5230\u88AD\u51FB\uFF0C\u4E00\u65E5\uFF0C\u4E00\u7FA4\u7CBE\u7075\u65CF\u65CF\u4EBA\u51B2\u8FDB\u4E86\u7EFF\u6D32\u5C0F\u57CE\uFF0C\u6740\u5BB3\u4E86\u5F53\u5730\u9886\u4E3B\uFF0C\u81EA\u5DF1\u5BB6\u65CF\u4E5F\u56E0\u6B64\u8986\u706D\u3002\u5176\u4E2D\uFF0C\u6709\u4E00\u4E2A\u84DD\u5934\u53D1\u5E26\u773C\u955C\u7684\u7CBE\u7075\u5728\u8FD9\u6B21\u51B2\u7A81\u4E2D\u88AB\u5BB6\u65CF\u536B\u5175\u548C\u5F53\u5730\u536B\u5175\u56F4\u56F0\u65F6\uFF0C\u5929\u964D\u9668\u77F3\u706B\u7403\uFF0C\u5939\u7740\u96F7\u51FB\u51B0\u971C\uFF0C\u8F70\u70B8\u4E86\u56F4\u56F0\u7684\u536B\u5175\u3002\u6B64\u523B\u5BF9\u4EC0\u4E48\u4E8B\u90FD\u89C9\u5F97\u65E0\u804A\u7684\u6218\u6CD5\uFF0C\u611F\u53D7\u5230\u9B54\u6CD5\u7684\u6709\u8DA3\u3002
            \u5F53\u7136\uFF0C\u5BF9\u4E8E\u8DEF\u5C14\u8389\u5609\u6765\u8BF4\uFF0C\u5BB6\u65CF\u5BF9\u5979\u6765\u8BF4\u4E5F\u662F\u53EF\u6709\u53EF\u65E0\uFF0C\u6CA1\u6709\u611F\u60C5\u8054\u7CFB\u7684\u5B58\u5728\uFF0C\u4F46\u662F\u8FD9\u6B21\u4E8B\u4EF6\u540E\uFF0C\u5979\u88AB\u8FEB\u627F\u62C5\u8D77\u4E86\u5BB6\u65CF\u91CD\u5174\u7684\u91CD\u62C5\u3002\u4E4B\u524D\u5BB6\u65CF\u8986\u706D\u7684\u6559\u8BAD\u8BA9\u5BB6\u65CF\u7ECF\u5546\u7684\u8303\u56F4\u8C28\u614E\u4E86\u8BB8\u591A\uFF0C\u800C\u8DEF\u5C14\u8389\u5609\u4E3A\u4E86\u5B66\u4E60\u9B54\u6CD5\uFF0C\u7ECF\u5E38\u8DDF\u81EA\u5DF1\u7684\u597D\u53CB\u517C\u987E\u5974\u96B6\u7684\u5C11\u5973\uFF0C\u5077\u5077\u7EC3\u4E60\u3002
            \u540E\u6765\u8FD9\u4F4D\u5974\u96B6\u5C11\u5973\u4E00\u76F4\u5728\u5BB6\u65CF\u91CC\u6210\u4E3A\u6218\u6CD5\u4EE3\u7406\u62C5\u4EFB\u4E86\u5404\u79CD\u8981\u52A1\uFF0C\u5BB6\u65CF\u603B\u7B97\u5B89\u7A33\u4E86\u4E9B\u8BB8\uFF0C\u4F46\u597D\u666F\u4E0D\u957F\uFF0C\u8FD9\u4F4D\u597D\u53CB\u5728\u67D0\u6B21\u8D38\u6613\u56E0\u4E3A\u4E00\u573A\u6C99\u5C18\u66B4\u5931\u53BB\u8054\u7EDC\uFF0C\u5546\u961F\u5E26\u56DE\u6765\u7684\u53EA\u6709\u8FD9\u4F4D\u5C11\u5973\u8DDF\u6218\u6CD5\u513F\u65F6\u7ECF\u5E38\u73A9\u7684\u7B26\u6587\u540A\u5760\u3002`,
            xingZhuiNvWu:`\u4E3A\u63A2\u5BFB\u661F\u7A7A\u7684\u79D8\u5BC6\uFF0C\u4E00\u76F4\u5C45\u4F4F\u5728\u504F\u8FDC\u7684\u5C0F\u5C71\u6751\uFF0C\u81EA\u7531\u81EA\u5728\u7684\u505A\u7740\u7814\u7A76\u3002\u5076\u5C14\u4E5F\u4F1A\u5E2E\u52A9\u6C42\u52A9\u4E8E\u5979\u7684\u5C71\u4E0B\u6751\u6C11\u3002\u6700\u8FD1\u6C42\u52A9\u7684\u6751\u6C11\u591A\u4E86\u8D77\u6765\u3002\u3002\u3002\u3002\u3002\u3002
            \u67D0\u65E5\uFF0C\u5979\u6536\u5230\u6614\u65E5\u597D\u53CB\u8DEF\u5C14\u8389\u5609\u5373\u5C06\u5230\u8BBF\u7684\u6765\u4FE1\uFF1B\u7136\u800C\u7D27\u63A5\u7740\uFF0C\u730E\u5DEB\u884C\u52A8\u7A81\u7136\u7206\u53D1\uFF0C\u4E00\u5207\u7684\u4E00\u5207\u5982\u540C\u6D9F\u6F2A\u4E00\u822C~
            \u66FE\u7ECF\u5728\u5B66\u9662\u90FD\u5E02\u5B66\u4E60\uFF0C\u7528\u90A3\u5929\u7136\u900F\u5207\u7684\u53CC\u7738\u6CE8\u89C6\u7740\u661F\u7A7A\uFF0C\u770B\u7740\u5355\u7EAF\u5446\u949D\uFF0C\u5B9E\u9645\u4E0A\u7ECF\u5E38\u8BED\u51FA\u60CA\u4EBA\u76F4\u51FB\u6838\u5FC3\uFF0C\u4EBA\u79F0\u6574\u5929\u671B\u5929\u770B\u661F\u661F\u7684\u5929\u624D\u3002\u5929\u624D?\u7B28\u86CB?\u4E0D\uFF0C\u5979\u5355\u7EAF\u662F\u5929\u624D\u7684\u5F02\u7C7B\u3002
            \u4E0E\u8DEF\u5C14\u8389\u5609\u662F\u4E00\u4E2A\u8001\u5E08\uFF0C\u540C\u65F6\u4E0E\u8DEF\u5C14\u8389\u5609\u4E3ACP`,
            shengTingJianChaShi:`\u575A\u5B9A\u7684\u795E\u5723\u6559\u5EF7\u7684\u4FE1\u5F92\uFF0C\u751A\u81F3\u5DF2\u7ECF\u8FBE\u5230\u4E86\u75AF\u72C2\u7684\u5730\u6B65\uFF0C\u53EA\u8981\u662F\u6559\u5EF7\u7684\u90FD\u662F\u6B63\u786E\u7684\u3002
            \u6B64\u6B21\u5979\u4F5C\u4E3A\u5723\u6BBF\u9A91\u58EB\u7684\u526F\u5B98\u51FA\u5F81\u8BA8\u4F10\u5F02\u6559\u5F92\uFF0C\u5BA1\u5224\u4E00\u5207\u8FDD\u53CD\u6559\u5EF7\u7684\u4E1C\u897F\uFF1B\u540C\u65F6\u4E5F\u4F5C\u4E3A\u6559\u5EF7\u5B89\u63D2\u5728\u5723\u6BBF\u9A91\u58EB\u56E2\u5185\u7684\u76D1\u89C6\u4E4B\u773C
            \u4ECE\u65AF\u5361\u96F7\u7279\u7684\u5C60\u6740\u4E2D\u552F\u4E00\u5E78\u5B58\u8005\uFF0C\u8179\u9ED1`,
            lieWuRen:`\u66FE\u7ECF\u5728\u201C\u7F6A\u6076\u90FD\u5E02\u201D\u6DF7\u65E5\u5B50\uFF0C\u6574\u5929\u6C89\u6D78\u5728\u9152\u9986\u91CC\u6DF7\u65E5\u5B50\uFF0C\u66FE\u7ECF\u68A6\u60F3\u6210\u4E3A\u51FA\u8272\u7684\u9B54\u6CD5\u5E08\u4F46\u5B9E\u5728\u6CA1\u6709\u8FD9\u65B9\u9762\u7684\u5929\u8D4B\u3002\u6BCF\u5F53\u65BD\u5C55\u9B54\u6CD5\uFF0C\u603B\u662F\u6362\u6765\u56F4\u89C2\u8005\u7684\u8BAA\u7B11\u58F0\u3002\u67D0\u5929\u5728\u9152\u9986\u91CC\u56E0\u4E3A\u966A\u9152\u5C0F\u59D0\u7684\u4E8B\u60C5\uFF0C\u4E0E\u9694\u58C1\u9189\u9152\u95F9\u4E8B\u7684\u9B54\u6CD5\u5E08\u5927\u6253\u51FA\u624B\uFF0C\u56E0\u6B64\u53D1\u73B0\u4E86\u81EA\u5DF1\u72EC\u6709\u7684\u4F18\u79C0\u7684\u5E94\u4ED8\u6CD5\u672F\u7684\u80FD\u529B\uFF1B\u4E8E\u662F\u4ED6\u52AA\u529B\u8BAD\u7EC3\u81EA\u5DF1\uFF0C\u4EE5\u4FBF\u66F4\u597D\u7684\u638C\u63A7\u8FD9\u80A1\u529B\u91CF\u3002\u6570\u5E74\u540E\uFF0C\u6559\u5EF7\u63A8\u52A8\u7684\u201C\u730E\u5DEB\u884C\u52A8\u201D\u5F00\u59CB\uFF0C\u767D\u72FC\u5361\u62C9\u739B\u56E0\u6B64\u58F0\u540D\u9E4A\u8D77`,
            shengDianQiShi:`\u8BE6\u89C1\u201C\u7EA2\u83B2\u4E8B\u4EF6\u201D
            \u5E26\u7740\u661F\u75D5\u51FA\u751F\uFF0C\u88AB\u9882\u4E3A\u795E\u4E4B\u5B50\u3002\u81EA\u5C0F\u5C31\u5728\u6559\u4F1A\u91CC\u957F\u5927\u7684\u65AF\u5361\u96F7\u7279\uFF0C\u4E0D\u5355\u662F\u4E00\u4E2A\u8654\u8BDA\u7684\u4FE1\u5F92\uFF0C\u4E5F\u56E0\u4E3A\u5176\u51FA\u8272\u7684\u6218\u6597\u80FD\u529B\u6210\u4E3A\u6559\u5EF7\u60E9\u6212\u90E8\u961F\u7684\u9996\u5E2D\u5723\u6BBF\u9A91\u58EB\u3002
            \u4F5C\u4E3A\u6559\u5EF7\u7684\u5F62\u8C61\u4E4B\u4E00\uFF0C\u5979\u62E5\u6709\u4E0D\u5C11\u8FFD\u968F\u8005\u4E0E\u5D07\u62DC\u8005\u3002
            \u81EA\u5F81\u8BA8\u5F00\u59CB\uFF0C\u4E00\u80A1\u62B5\u89E6\u7684\u60F3\u6CD5\u5728\u65AF\u5361\u96F7\u7279\u8111\u6D77\u4E2D\u6325\u4E4B\u4E0D\u53BB\u3002\u672A\u66FE\u6000\u7591\u8FC7\u6559\u5EF7\u6555\u4EE4\u7684\u5979\u9677\u5165\u4E86\u8FF7\u832B\u548C\u70E6\u8E81\uFF0C\u6700\u7EC8\u90A3\u4E00\u591C\u8FC7\u540E\uFF0C\u6559\u5EF7\u7684\u60E9\u6212\u90E8\u961F\u71C3\u8D77\u4E86\u5927\u706B\uFF0C\u706B\u52BF\u5982\u540C\u7EA2\u83B2\u822C\u7EDA\u70C2\u7EFD\u653E`,
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
