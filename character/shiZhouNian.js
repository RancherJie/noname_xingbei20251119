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
			fengZhiJianSheng:['male','jiGroup',3,['fengNuZhuiJi','shengJian','lieFengJi','jiFengJi','jianYing'],],
            kuangZhanShi:['male','xueGroup',3,[],],
            shenJianShou:['female','jiGroup',3,[],],
            fengYinShi:['female','huanGroup',3,[],],
            anShaZhe:['male','jiGroup',3,[],],
            shengNv:['female','shengGroup',3,[],],
            tianShi:['female','shengGroup',3,[],],
            moFaShaoNv:['female','yongGroup',3,[],],
            moJianShi:['female','huanGroup','3/4',[],],
            shengQiangQiShi:['female','shengGroup','3/4',[],],
            yuanSuShi:['male','yongGroup','3/4',[],],
            maoXianJia:['female','huanGroup','3/4',[],],
            wenYiFaShi:['male','huanGroup','3/4',[],],
            zhongCaiZhe:['female','xueGroup','3/4',[],],
            shenGuan:['female','shengGroup',4,[],],
            qiDaoShi:['female','yongGroup',4,[],],
            xianZhe:['male','yongGroup',4,[],],
            lingFuShi:['female','yongGroup',4,[],],
            jianDi:['female','jiGroup','4/5',[],],
            geDouJia:['female','jiGroup','4/5',[],],
            yongZhe:['male','xueGroup','4/5',[],],
            lingHunShuShi:['female','huanGroup','4/5',[],],
            xueZhiWuNv:['female','xueGroup',5,[],],
            dieWuZhe:['female','yongGroup',5,[],],
            nvWuShen:['female','shengGroup','3/4',[],],
            moGong:['female','huanGroup',4,[],],
            hongLianQiShi:['female','xueGroup',4,[],],
            yingLingRenXing:['female','yongGroup',4,[],],
            moQiang:['female','huanGroup',4,[],],
            cangYanMoNv:['female','xueGroup',4,[],],
            yinYouShiRen:['male','huanGroup','4/5',[],],
            jingLingSheShou:['female','jiGroup','3/4',[],],
            yinYangShi:['female','huanGroup',4,[],],
            xueSeJianLing:['female','xueGroup',4,[],],
            yueZhiNvShen:['female','shengGroup',5,[],],
            shouLingWuShi:['female','jiGroup','4/5',[],],
            shengGong:['female','shengGroup','4/5',[],],
		},

        characterIntro: {
			fengZhiJianSheng:"\u5c0f\u65f6\u5019\u88ab\u5251\u4e4b\u9b54\u5973\u6536\u517b\uff0c\u4f5c\u4e3a\u4ea6\u5e08\u4ea6\u957f\u7684\u5b58\u5728\u800c\u9010\u6e10\u5bf9\u5251\u4e4b\u9b54\u5973\u4ea7\u751f\u7231\u6155\u4e4b\u60c5\uff1b\u6700\u540e\u5374\u53ea\u542c\u95fb\u5230\u4e86\u5251\u4e4b\u9b54\u5973\u81ea\u6740\u7684\u6d88\u606f\u3002\u65e0\u6cd5\u63a5\u53d7\u8fd9\u4e2a\u6d88\u606f\u7684\u4ed6\u7ee7\u627f\u4e86\u5251\u4e4b\u9b54\u5973\u7684\u5723\u5251\uff0c\u968f\u540e\u524d\u5f80\u5251\u4e4b\u9b54\u5973\u751f\u524d\u6700\u540e\u4e00\u4e2a\u5730\u65b9\u63a2\u5bfb\u5251\u4e4b\u9b54\u5973\u81ea\u6740\u7684\u771f\u76f8\uff0c\u7136\u800c\u9664\u4e86\u6253\u542c\u5230\u6b64\u5730\u6709\u8fc7\u4e00\u6b21\u5927\u7206\u70b8\u522b\u65e0\u5176\u4ed6\u6d88\u606f\u3002\u5c31\u5728\u8fd9\u65f6\uff0c\u4ed6\u770b\u5230\u4e86\u4e00\u4e2a\u8eab\u7a7f\u94e0\u7532\uff0c\u624b\u62ff\u4e00\u628a\u5251\uff0c\u5934\u4e0a\u6234\u7740\u5c0f\u84dd\u82b1\u7684\u5973\u5b50\uff0c\u4f46\u662f\u8be5\u5973\u5b50\u4f3c\u4e4e\u5931\u53bb\u4e86\u8bb0\u5fc6\uff0c\u4e00\u8138\u7684\u8ff7\u832b~",
            kuangZhanShi:"\u72c2\u6218\u58eb\u66fe\u7ecf\u4ece\u5730\u4e0b\u9ed1\u5e02\u4e2d\u4f5c\u4e3a\u64c2\u4e3b\u800c\u83b7\u5f97\u81ea\u7531\u8d70\u51fa\uff0c\u88ab\u7ea2\u8863\u4e3b\u6559\u96c7\u4f63\u6210\u4e3a\u96c7\u4f63\u5175\uff0c\u5728\u96c7\u4f63\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7ecf\u5386\u4e86\u975e\u5e38\u591a\u7684\u6218\u6597\u3002\u7136\u800c\u5728\u4e00\u6b21\u5931\u8d25\u7684\u6218\u6597\u540e\uff0c\u88ab\u65e0\u60c5\u7684\u629b\u5f03\uff0c\u8d70\u6295\u65e0\u8def\u7684\u4ed6\uff0c\u8003\u8651\u662f\u5426\u53c8\u8981\u91cd\u65b0\u56de\u5230\u5730\u4e0b\u9ed1\u5e02\uff0c\u8fc7\u7740\u6697\u65e0\u5929\u65e5\u9760\u7740\u51fb\u5012\u5bf9\u65b9\u800c\u6d3b\u4e0b\u53bb\u7684\u65e5\u5b50\uff0c\u6700\u540e\u4f9d\u7136\u4f5c\u4e3a\u4e86\u6597\u517d\u573a\u4e2d\u7684\u64c2\u4e3b\uff0c\u662f\u4f20\u8bf4\u4e2d\u4e00\u4ee3\u7684\u4e0d\u8d25\u795e\u8bdd",
            shenJianShou:"\u4e0e\u6cf0\u7f57\u838e\u662f\u8fdc\u4eb2\uff0c\u8be6\u89c1\u201c\u5f13\u795e\u4e00\u65cf\u7ec4\u7ec7\u67b6\u6784\u56fe\u201d\uff0c\u5728\u90e8\u843d\u88ab\u795e\u5723\u6559\u5ef7\u4e1c\u5f81\u65f6\u5e26\u9886\u65cf\u4eba\u524d\u5f80\u6ce2\u963f\u72c4\u897f\u4e9a\u5904\u907f\u96be",
            fengYinShi:"\u80f8\u53e3\u62e5\u6709\u4e00\u9762\u955c\u5b50\u4ee5\u53ca6\u6839\u89e6\u624b\u72b6\u7684\u9b54\u6cd5\u589e\u5e45\u88c5\u7f6e\uff0c\u80fd\u591f\u5e2e\u52a9\u5979\u66f4\u5feb\u7684\u65bd\u5c55\u5c01\u5370\u6cd5\u672f\uff1b\u80fd\u591f\u5c06\u5c01\u5370\u6cd5\u672f\u9644\u52a0\u5728\u7269\u4f53\u4e0a\uff0c\u56e0\u6b64\u5e2e\u52a9\u8fc7\u4e00\u4f4d\u4eba\u538b\u5236\u9b54\u529b\u66b4\u8d70\uff0c\u73b0\u5728\u8ddf\u7740\u8389\u8389\u5b89\u5a1c\u5728\u4e00\u8d77\u5192\u9669\u5c01\u5370\u5e08",
            anShaZhe:"\u4e3a\u4e86\u8ffd\u6740\u7ec4\u7ec7\u4e2d\u7684\u53db\u5fcd\u800c\u6765",
            shengNv:"\u4f5c\u4e3a\u727a\u7272\u54c1\u88ab\u5f3a\u5236\u8d4b\u4e88\u4eba\u5de5\u661f\u75d5\u4f5c\u4e3a\u795e\u4e4b\u5b50\uff1b\u88ab\u8d4b\u4e88\u7684\u7279\u6b8a\u80fd\u529b\u662f\u5feb\u901f\u6cbb\u7597\u3002\u96b6\u5c5e\u4e8e\u666e\u6d4e\u4f1a\u3002\u201c\u7ea2\u83b2\u4e4b\u52ab\u201d\u540e\uff0c\u795e\u4e4b\u5b50\u4f4d\u7f6e\u7a7a\u7f3a\uff0c\u795e\u5723\u6559\u5ef7\u4e0b\u4e00\u4e2a\u9644\u5c5e\u56fd\u7684\u56fd\u4e3b\u4e3a\u4e86\u81ea\u8eab\u56fd\u5bb6\u5229\u76ca\uff0c\u8ddf\u795e\u5723\u6559\u5ef7\u5185\u90e8\u67d0\u4e9b\u4eba\u4e00\u8d77\u5bc6\u8c0b\uff0c\u7136\u540e\u5728\u81ea\u5df1\u7684\u5973\u513f\u8eab\u4e0a\u5370\u4e0a\u4eba\u9020\u201c\u661f\u75d5\u201d\uff0c\u5ba3\u79f0\u5176\u5973\u513f\u4e3a\u65b0\u7684\u795e\u4e4b\u5b50\u3002\u827e\u4e3d\u5361\u7ecf\u5386\u4e86\u201c\u7ed1\u67b6\u6848\u201d\u88ab\u89e3\u6551\u540e\uff0c\u53d8\u5f97\u66f4\u52a0\u5723\u6bcd\u4e86\uff0c\u800c\u4e14\u6b64\u65f6\u661f\u75d5\u7684\u5370\u8bb0\u4e5f\u51fa\u73b0\u4e86",
            tianShi:"\u65e7\u65e5\u4e4b\u6c11\u6587\u660e\u7684\u4ea7\u7269\u3002\u65e7\u65e5\u4e4b\u6c11\u6587\u660e\u6bc1\u706d\u540e\uff0c\u627e\u5230\u4e86\u7406\u60f3\u4e61\u963f\u74e6\u9686\uff0c\u5c06\u65e7\u65e5\u4e4b\u6c11\u57fa\u56e0\u4e0e\u7cbe\u7075\u65cf\u6216\u5996\u7cbe\u65cf\u7ed3\u5408\u521b\u9020\u51fa\u65b0\u79cd\u65cf\u2014\u2014\u517d\u7075\u3002\u540e\u4e0e\u7cbe\u7075\u65cf\u3001\u5996\u7cbe\u65cf\u5927\u6218\u3002\u8fd9\u4e2a\u6ca1\u843d\u7684\u9ad8\u7b49\u79cd\u65cf\u4e3a\u4e86\u751f\u5b58\u4e0e\u795e\u5723\u6559\u5ef7\u5185\u90e8\u9ad8\u5c42\u8fdb\u884c\u79c1\u4e0b\u4ea4\u6613\uff0c\u7fbd\u65cf\u7531\u5f02\u6559\u5f92\u6210\u4e3a\u4e86\u795e\u5723\u6559\u5ef7\u6559\u4e49\u4e2d\u7684\u795e\u4e4b\u4f7f\u8005\u2014\u2014\u5929\u4f7f\u3002\u6559\u5ef7\u5219\u83b7\u5f97\u4e86\u7fbd\u65cf\u76f8\u5173\u7684\u4e00\u4e9b\u79d1\u6280\u4e0e\u5973\u6b66\u795e\u7c73\u6d85\u74e6\u7684\u4f20\u8bf4\u3002\u7531\u6b64\u542f\u52a8\u4e86\u201c\u5973\u6b66\u795e\u8ba1\u5212\u201d\u5929\u4f7f\u5c06\u5973\u6b66\u795e\u7684\u4f20\u8bf4\u4ea4\u4ed8\u4e0e\u795e\u5723\u6559\u5ef7\u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u6b63\u662f\u56e0\u4e3a\u201c\u590d\u5174\u7fbd\u65cf\u6587\u660e\u201d\u8fd9\u4e2a\u51fa\u53d1\u70b9\u3002\u4e8e\u662f\u201c\u5973\u6b66\u795e\u8ba1\u5212\u201d\u56e0\u5e94\u800c\u751f\u3002\u6559\u5ef7\u5e0c\u671b\u5f97\u5230\u4f20\u8bf4\u4e2d\u7684\u795e\u529b\uff0c\u5929\u4f7f\u4eec\u4e5f\u5e0c\u671b\u901a\u8fc7\u201c\u5973\u6b66\u795e\u8ba1\u5212\u201d\u83b7\u5f97\u6587\u660e\u590d\u5174\u3002",
            moFaShaoNv:"\u539f\u672c\u662f\u5996\u7cbe\u56fd\u7684\u5c0f\u516c\u4e3b\uff0c\u5996\u7cbe\u4e3a\u4e86\u89e3\u51b3\u8352\u6f20\u5316\u7684\u73af\u5883\uff0c\u4f01\u56fe\u5229\u7528\u7fbd\u65cf\u7559\u4e0b\u7684\u79d1\u6280\u7ed3\u5408\u7cbe\u7075\u65cf\u7684\u79d8\u672f\u5408\u6210\u661f\u676f\uff0c\u4f46\u662f\u6700\u7ec8\u5931\u8d25\u5e76\u5bfc\u81f4\u5996\u7cbe\u56fd\u706d\u56fd\u3002\u4ec5\u59ae\u5a05\u548c\u90e8\u5206\u5996\u7cbe\u56fd\u7684\u5996\u7cbe\u5e26\u7740\u8bbe\u8ba1\u56fe\u9003\u79bb\u539f\u706d\u56fd\u7684\u533a\u57df\uff0c\u5979\u4eec\u7a7f\u8fc7\u4e86\u8352\u6f20\u5357\u4e0b\u6765\u5230\u795e\u5723\u6559\u5ef7\u7b49\u56fd\u5bb6\uff0c\u5bfc\u81f4\u8fd9\u4e9b\u56fd\u5bb6\u7684\u661f\u77f3\u5408\u6210\u6280\u672f\u5f97\u5230\u4e86\u53d1\u5c55\u4ee5\u53ca\u666e\u53ca\u3002\u662f\u5b66\u9662\u90fd\u5e02\u7684\u521b\u59cb\u4eba\u4e4b\u4e00\uff0c\u4f5c\u4e3a\u7cbe\u7075\u65cf\u51e0\u4e4e\u62e5\u6709\u8005\u6f2b\u957f\u7684\u751f\u547d\uff0c\u4f7f\u5f97\u770b\u8d77\u6765\u5979\u53ea\u662f\u4e2a\u5c0f\u5b69\u5b50\uff0c\u4f46\u5b9e\u9645\u5979\u7684\u5e74\u9f84\u5df2\u7ecf\u3002\u3002\u3002\u3002\uff08\u88ab\u9b54\u5f39\u6253\u98de~\uff09\u5996\u7cbe\u638c\u63e1\u7740\u4e00\u4e9b\u5947\u5947\u602a\u602a\u7684\u6cd5\u672f\uff0c\u5176\u4e2d\u59ae\u5a05\u5728\u65e0\u804a\u7684\u65f6\u5019\u5c31\u5bf9\u81ea\u5df1\u65bd\u5c55\u4e86\u4e00\u4e2a\u5c0f\u5c0f\u5b9e\u9a8c~ \u800c\u5979\u7684\u597d\u53cb\uff0c\u53e6\u4e00\u4e2a\u5927\u9646\u9003\u4ea1\u5230\u53e6\u4e00\u4e2a\u5927\u9646\uff0c\u5728\u90a3\u8fb9\u53d1\u5c55\u8d77\u6765\uff0c\u901a\u8fc7\u79d1\u6280\u80fd\u529b\u5236\u4f5c\u4e86\u9b54\u5bfc\u5668-\u4fe1\u6807\uff0c\u6765\u5230\u4e86\u59ae\u5a05\u73b0\u5728\u6240\u5728\u7684\u5927\u9646\uff0c\u5979\u4eec\u4e4b\u95f4\u4f1a\u53d1\u751f\u600e\u4e48\u6837\u7684\u6545\u4e8b\u5462\uff1f",
            moJianShi:"\u59d0\u59d0\u6210\u4e3a\u4eba\u5de5\u661f\u676f\u8005\uff0c\u4f46\u9b54\u529b\u4e0d\u65ad\u589e\u52a0\uff0c\u6700\u540e\u6ea2\u51fa\u7206\u70b8\u6b7b\u4ea1\uff1b\u6545\u63a5\u4efb\u59d0\u59d0\u6210\u4e3a\u4eba\u5de5\u661f\u676f\u8005\uff0c\u7ee7\u627f\u9b54\u5251\u58eb\u3002\u8eab\u4e0a\u7a7f\u7684\u662f\u7531\u81ea\u5df1\u6253\u9020\u80fd\u591f\u538b\u5236\u9b54\u529b\u7684\u9b54\u88c5\u94e0\u7532\u3002\u5931\u53bb\u8fc7\u4e00\u6bb5\u8bb0\u5fc6\uff0c\u4e3a\u6b64\u8ff7\u832b\u4e2d~\u3002\u540e\u6765\u9047\u89c1\u4e86\u4e24\u4f4d\u547d\u8fd0\u4e4b\u4eba~",
            shengQiangQiShi:"\u65af\u5361\u96f7\u7279\u540e\u8f88\uff0c\u76f8\u7231\u76f8\u6740\u8ffd\u6740\u65af\u5361\u96f7\u7279\uff0c\u5929\u7136\u9ed1\u3002\u539f\u672c\u662f\u56e0\u4e3a\u4ef0\u6155\u4f5c\u4e3a\u795e\u4e4b\u5b50\u7684\u65af\u5361\u96f7\u7279\u800c\u52a0\u5165\u6559\u5ef7\u7684\u60e9\u6212\u90e8\u961f\u3002\u4f46\u5723\u67aa\u8fd8\u5728\u60e9\u6212\u90e8\u961f\u8bad\u7ec3\u8425\u4e2d\u7684\u65f6\u5019\uff0c\u5374\u53d1\u751f\u4e86\u201c\u7ea2\u83b2\u4e4b\u52ab\u201d\u8fd9\u6837\u7684\u4e8b\u4ef6\u3002\u5bf9\u6b64\u65af\u5e87\u5c14\u5b8c\u5168\u4e0d\u6e05\u695a\u4ef0\u6155\u4e4b\u4eba\u4e3a\u4ec0\u4e48\u4f1a\u53d8\u6210\u4e00\u4e2a\u5815\u843d\u7684\u6559\u5ef7\u80cc\u53db\u8005\uff0c\u56e0\u6b64\u5979\u5e0c\u671b\u901a\u8fc7\u4eb2\u624b\u8ffd\u6355\u65af\u5361\u96f7\u7279\uff0c\u95ee\u6e05\u4e8b\u4ef6\u7f18\u7531\u3002\u4e8e\u662f\u5979\u52aa\u529b\u5730\u6210\u4e3a\u4e86\u65b0\u7684\u5723\u67aa\u9a91\u58eb\u56e2\u7684\u961f\u957f\uff0c\u5e76\u4e14\u4e00\u76f4\u5730\u8ffd\u5bfb\u7740\u90a3\u4f4d\u5979\u7684\u6614\u65e5\u7684\u4ef0\u6155\u4e4b\u4eba\u3002",
            yuanSuShi:`\u6536\u517b\u4e86\u6218\u6597\u6cd5\u5e08\uff08\u7269\u8bed\u7684\u6218\u6597\u6cd5\u5e08\uff09\uff0c\u4e0e\u5b89\u5a1c\u7684\u7236\u4eb2\u662f\u65e7\u53cb\uff0c\u6ce2\u963f\u72c4\u897f\u4e9a\u7684\u6069\u4eba\u3002\u5728\u4e0a\u53e4\u4e4b\u6218\u540e\uff0c\u5927\u9646\u53d8\u5f97\u56db\u5206\u4e94\u88c2\uff0c\u7cbe\u7075\u65cf\u4e5f\u4e0d\u518d\u957f\u751f\u4e14\u4e0d\u518d\u80fd\u968f\u610f\u7684\u4f7f\u7528\u9b54\u6cd5\uff0c\u4e5f\u5bfc\u81f4\u4e86\u65cf\u7fa4\u56db\u5206\u4e94\u88c2\uff0c\u7cbe\u7075\u4eba\u53e3\u6570\u91cf\u9510\u51cf\uff0c\u540c\u65f6\u8fd8\u6709\u88ab\u5974\u5f79\u6216\u88ab\u6293\u53bb\u7528\u4f5c\u5339\u914d\u51fa\u517d\u7075\u6216\u65b0\u4eba\u7c7b\u7684\u5b9e\u9a8c\u98ce\u9669\u3002
            \u4e8e\u662f\u7d22\u5c14\u65af\u9ed8\u9ed8\u5730\u6210\u7acb\u4e86\u4e00\u4e2a\u7ec4\u7ec7\uff0c\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u62ef\u6551\u90a3\u4e9b\u88ab\u5974\u5f79\u7684\u7cbe\u7075\u65cf\u4eba\u3002\u968f\u7740\u7ec4\u7ec7\u8d8a\u6765\u8d8a\u5e9e\u5927\uff0c\u5176\u4e2d\u4ed6\u7684\u670b\u53cb\u4e0e\u4ed6\u7684\u60f3\u6cd5\u4ea7\u751f\u4e86\u5206\u6b67\uff1a\u7d22\u5c14\u65af\u8ba4\u4e3a\u5e94\u8be5\u6448\u5f03\u79cd\u65cf\u4e4b\u95f4\u7684\u9694\u9602\uff0c\u5e94\u8be5\u8981\u8054\u5408\u4e00\u5207\u80fd\u8054\u5408\u7684\u529b\u91cf\uff0c\u5305\u62ec\u517d\u7075\u8fd8\u6709\u5f00\u660e\u7684\u65b0\u4eba\u7c7b\uff0c\u5efa\u7acb\u4e00\u4e2a\u79cd\u65cf\u5e73\u7b49\u7684\u4e16\u754c\uff1b\u800c\u4ed6\u7684\u670b\u53cb\u5219\u8ba4\u4e3a\u5e94\u8be5\u91cd\u65b0\u56de\u5230\u65e7\u65e5\u4e4b\u6c11\u672a\u6765\u5230\u963f\u74e6\u9686\u65f6\u90a3\u6837\u53ea\u6709\u7cbe\u7075\u7684\u4e16\u754c\uff0c\u5e94\u8be5\u56de\u5f52\u5230\u4e0a\u53e4\u65f6\u4ee3\uff0c\u7cbe\u7075\u8fd8\u80fd\u957f\u751f\u4e0d\u8001\uff0c\u8ddf\u81ea\u7136\u878d\u6d3d\u3002
            \u6709\u4e86\u5206\u6b67\u540e\uff0c\u6469\u64e6\u4e0e\u77db\u76fe\u5c31\u5f00\u59cb\u589e\u52a0\u4e86\uff0c\u4f46\u7d22\u5c14\u65af\u89c9\u5f97\u4e0d\u8bba\u4ec0\u4e48\u76ee\u6807\uff0c\u76ee\u524d\u5e94\u8be5\u4f18\u5148\u4fdd\u8bc1\u56e2\u7ed3\uff0c\u6551\u52a9\u88ab\u5974\u5f79\u7684\u7cbe\u7075\u662f\u4e00\u81f4\u7684\u3002\u4e8e\u662f\u5c31\u5e26\u9886\u4e00\u90e8\u5206\u7cbe\u7075\u65cf\uff0c\u53d1\u52a8\u4e86\u4e00\u6b21\u9769\u547d\uff0c\u6700\u540e\u60e8\u88ab\u9547\u538b
            \u9769\u547d\u7684\u5931\u8d25\u9020\u6210\u4e86\u539f\u672c\u53d1\u5c55\u8d77\u6765\u7684\u7ec4\u7ec7\u9677\u5165\u4e86\u5d29\u574f\u7684\u5730\u6b65\uff0c\u5185\u90e8\u5f00\u59cb\u51fa\u73b0\u6d3e\u7cfb\u6597\u4e89\uff0c\u5206\u88c2\u5df2\u7ecf\u65e0\u6cd5\u907f\u514d\uff0c\u8fd9\u4e2a\u65f6\u5019\u4ed6\u7684\u670b\u53cb\u4e5f\u56e0\u4e3a\u8fd9\u6b21\u7684\u9769\u547d\u800c\u5931\u660e\u4e86\u3002\u6574\u4e2a\u4eba\u9677\u5165\u4e86EMO\u72b6\u6001
            
            \u81ea\u4ece\u7d22\u5c14\u65af\u4e0e\u5176\u631a\u53cb\u76f8\u8bc6\u540e\uff0c\u7d22\u5c14\u65af\u5e0c\u671b\u805a\u96c6\u4e00\u7fa4\u5fd7\u5411\u76f8\u540c\u7684\u540c\u80de\u4e00\u8d77\u7ec4\u5efa\u7cbe\u7075\u89e3\u653e\u7ec4\u7ec7\uff0c\u4e8e\u662f\u631a\u53cb\u63a8\u8350\u4e86\u81ea\u5df1\u7684\u9752\u6885\u2014\u2014\u6885\u4e3d\u73ca\u5353\u3002
            \u6700\u521d\u65f6\u6885\u4e3d\u73ca\u5353\u8ddf\u7d22\u5c14\u65af\u5e76\u4e0d\u5f85\u89c1\uff0c\u7ecf\u5e38\u610f\u89c1\u4e0d\u5408\uff0c\u6885\u4e3d\u73ca\u5353\u5bf9\u7d22\u5c14\u65af\u7684\u521d\u5370\u8c61\u5e76\u6ca1\u6709\u592a\u5927\u7684\u597d\u611f\u3002
            \u7ec4\u7ec7\u521d\u671f\u56e0\u4e3a\u6ca1\u6709\u4ec0\u4e48\u5b9e\u9645\u6210\u679c\uff0c\u6240\u4ee5\u52a0\u5165\u7684\u4eba\u4e5f\u5f88\u5c11\uff0c\u4e0d\u8fc7\u5728\u7d22\u5c14\u65af\u7684\u52aa\u529b\u4e0b\uff0c\u9010\u6e10\u5730\u6885\u4e3d\u73ca\u5353\u5bf9\u7d22\u5c14\u65af\u7684\u5370\u8c61\u6539\u53d8\uff0c\u67d0\u6b21\u62ef\u6551\u7cbe\u7075\u884c\u52a8\u4e2d\u7d22\u5c14\u65af\u66f4\u662f\u8868\u73b0\u6d3b\u8dc3\uff0c\u5e76\u4e8e\u6885\u4e3d\u73ca\u5353\u9677\u5165\u9669\u5883\u65f6\u62ef\u6551\u4e86\u6885\u4e3d\u73ca\u5353\uff0c\u540c\u65f6\u9010\u6e10\u7684\u63a5\u89e6\u4ee5\u53ca\u89c6\u91ce\u7684\u5f00\u62d3\uff0c\u8ba9\u6885\u4e3d\u73ca\u5353\u9010\u6e10\u7231\u4e0a\u7d22\u5c14\u65af\u3002
            \u67d0\u65e5\u631a\u53cb\u6536\u5230\u4e86\u4e00\u4e2a\u8ddf\u4e0a\u53e4\u7cbe\u7075\u65cf\u76f8\u5173\u7684\u6d88\u606f\u2014\u2014\u7cbe\u7075\u516c\u4e3b\u88ab\u56f4\u56f0\u5728\u5317\u65b9\u7684\u67d0\u4e2a\u9886\u5730\u91cc\uff0c\u4e8e\u662f\u5e0c\u671b\u7ec4\u7ec7\u51fa\u53bb\u8425\u6551\u3002
            \u631a\u53cb\u5728\u8fd9\u6b21\u884c\u52a8\u91cc\u6551\u4e86\u7cbe\u7075\u516c\u4e3b\uff0c\u4f7f\u5f97\u7cbe\u7075\u516c\u4e3b\u8ff7\u4e0a\u4e86\u631a\u53cb\u3002\u7cbe\u7075\u516c\u4e3b\u66fe\u7ecf\u4e0e\u7d22\u5c14\u65af\u6709\u4e00\u9762\u4e4b\u7f18\uff0c\u800c\u5979\u5219\u662f\u7d22\u5c14\u65af\u5e74\u5c11\u65f6\u7684\u5fc3\u4e2d\u5973\u795e\uff0c\u5c31\u6b64\u7cbe\u7075\u516c\u4e3b\u591a\u6b21\u59d4\u6258\u7d22\u5c14\u65af\u642d\u7ebf\u53bb\u627e\u631a\u53cb\u3002`,
            maoXianJia:"\u56db\u5904\u6e38\u5386\uff0c\u5bfb\u627e\u7740\u8fdc\u53e4\u7684\u9057\u8ff9\u3002\u5728\u9047\u5230\u7075\u9b42\u672f\u58eb\u4e4b\u524d\uff0c\u662f\u5e1d\u56fd\u5317\u65b9\u90e8\u843d\u4e00\u4e2a\u504f\u4e1c\u53d1\u8fbe\u5730\u533a\u57ce\u5e02\u9886\u5bfc\u8005\u7684\u7ee7\u627f\u4eba\uff0c\u8be5\u57ce\u5e02\u56e0\u4e3a\u4ee5\u5b9e\u529b\u4e3a\u5c0a\u88ab\u79f0\u4e3a\u201c\u7f6a\u6076\u90fd\u5e02\u201d\uff0c\u91cc\u9762\u5145\u65a5\u7740\u5404\u79cd\u201c\u72af\u7f6a\u5408\u7406\u5316\u201d\u7b49\u3002\u201c\u7f6a\u6076\u90fd\u5e02\u201d\u5730\u7406\u4e0a\u79bb\u827e\u4e3d\u5361\u66fe\u7ecf\u7684\u56fd\u5bb6\u6709\u7740\u4e00\u9053\u5c71\u8109\u5206\u5272\uff0c\u56e0\u6b64\u201c\u7f6a\u6076\u90fd\u5e02\u201d\u7684\u201c\u7f6a\u6076\u201d\u6ca1\u6709\u5f25\u6563\u5f00\u6765\u3002\u7531\u4e8e\u5317\u65b9\u90e8\u843d\u9996\u9886\u53bb\u4e16\u5bfc\u81f4\u5176\u4e2d\u5185\u4e71\uff0c\u7f6a\u6076\u90fd\u5e02\u4e5f\u7f3a\u4e4f\u7ba1\u7406\u3002\u5192\u9669\u5bb6\u4e5f\u4e0d\u5f97\u4e0d\u79bb\u5f00\u8fd9\u5ea7\u90fd\u5e02\uff0c\u671f\u95f4\u7ecf\u5386\u4e86\u5f88\u591a\u4e8b\u60c5\uff0c\u4ee4\u5979\u83b7\u5f97\u4e86\u7075\u9b42\u672f\u58eb\u3001\u5c01\u5370\u5e08\u3001\u4ef2\u88c1\u8005\u7b49\u8bf8\u591a\u597d\u53cb\uff0c\u5979\u4eec\u5728\u5927\u9646\u5192\u9669\u7684\u5c0f\u961f\u65e0\u5f80\u4e0d\u5229~",
            wenYiFaShi:"\u96b6\u5c5e\u4e8e\u7075\u8c37\u9690\u4fee\u4f1a\uff1b\u88ab\u6559\u5ef7\u4ee5\u624b\u6bb5\u9547\u538b\u540e\u5f3a\u884c\u6536\u7f16\uff0c\u5bf9\u6b64\u9887\u6709\u5f02\u8a00\uff0c\u4e0d\u65ad\u7684\u5367\u85aa\u5c1d\u80c6\uff0c\u540e\u7ec8\u4e8e\u5728\u67d0\u4f4d\u89d2\u8272\u8eab\u4e0a\u627e\u5230\u4e86\u7a81\u7834\u53e3\uff0c\u544a\u8bc9\u5979\u6240\u6709\u4e8b\u60c5\u7684\u771f\u76f8\uff0c\u5bfc\u81f4\u4e86\u795e\u5723\u6559\u5ef7\u5de8\u5927\u5206\u88c2\u53d8\u6545\u7684\u201c\u7f6a\u9b41\u7978\u9996\u201d\uff0c\u540c\u65f6\u5c06\u7075\u8c37\u9690\u4fee\u4f1a\u8f6c\u5165\u4e86\u65b0\u6d3e\u522b",
            zhongCaiZhe:"\u662f\u5e1d\u56fd\u504f\u4e1c\u5357\u5730\u533a\u7684\u539f\u4f4f\u5c45\u6c11\uff0c\u5728\u63a2\u9669\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9047\u5230\u4e86\u5192\u9669\u5bb6\u3001\u7075\u9b42\u672f\u58eb\u3001\u5c01\u5370\u5e08\u7b49\u7ec4\u6210\u7684\u961f\u4f0d\u3002\u5728\u7ecf\u5386\u4e86\u4e8b\u4ef6\u4e4b\u540e\uff0c\u4e0e\u7075\u9b42\u672f\u58eb\u4ea4\u597d\uff0c\u52a0\u5165\u4e86\u5979\u4eec\u7684\u63a2\u9669\u961f\u4f0d\uff0c\u4e00\u540c\u5bfb\u627e\u5927\u9646\u4e0a\u7684\u9057\u8ff9",
            shenGuan:"\u4e0e\u65af\u5361\u96f7\u7279\u6709\u5173\uff1b\u9886\u5bfc\u7740\u666e\u6d4e\u4f1a&\u6c34\u795e\u4fee\u9053\u4f1a&\u6e05\u6d01\u6d3e&\u6e05\u7075\u5b97\uff1b\u5728\u5251\u5e1d\u7edf\u4e00\u56fd\u5bb6\u7684\u884c\u52a8\u4e2d\uff0c\u4e0e\u5251\u5e1d\u8fbe\u6210\u534f\u8bae",
            qiDaoShi:"\u4e3b\u8981\u5c45\u4f4f\u5728\u4e1c\u65b9\u7687\u671d\u504f\u897f\u5357\u5730\u533a\uff0c\u8be5\u5730\u533a\u56db\u5b63\u5982\u590f\uff0c\u9177\u70ed\u6f6e\u6e7f\uff0c\u6545\u5e73\u65f6\u4e00\u822c\u559c\u6b22\u6e05\u51c9\u7740\u88c5\u3002\u8fd9\u6b21\u4e0e\u534e\u80e5\u4e00\u540c\u524d\u884c\uff0c\u5e0c\u671b\u53bb\u7687\u671d\u7684\u4e2d\u5fc3\u63a2\u5bfb\u201c\u672f\u201d\u7684\u771f\u6b63\u5965\u79d8",
            xianZhe:`\u5b66\u9662\u90fd\u5e02\u771f\u5b66\u9738\u4e4b\u4e00\uff0c\u65c1\u4eba\u773c\u91cc\u4e2d\u4e0e\u8389\u8389\u4e1d\u4e3a\u5929\u9020\u5730\u8d50\u7684\u4e00\u5bf9\uff0c\u5b9e\u9645\u5e76\u4e0d\u662f
            \u4e00\u4e2a\u7ee7\u627f\u4e86\u8d24\u8005\u79f0\u53f7\u7684\u52aa\u529b\u5929\u624d\uff0c\u5bb3\u6015\u53d7\u4f24\u4f46\u4e0d\u5f97\u4e0d\u53d7\u4f24\u7684\u80c6\u5c0f\u9b3c`,
            lingFuShi:"\u96b6\u5c5e\u4e8e\u4e1c\u65b9\u7687\u671d\uff0c\u4e0e\u9634\u9633\u5e08\u4e3a\u540c\u6e90\uff0c\u800c\u5e08\u95e8\u5219\u5728\u4e1c\u65b9\u7687\u671d\u4e00\u5904\u798f\u6cfd\u6d1e\u5929\u4e4b\u4e2d\uff0c\u8be6\u89c1\u201c\u9634\u9633\u5e08\u201d",
            jianDi:`\u5e1d\u56fd\u897f\u90e8\u4e00\u5757\u5730\u533a\u7684\u9886\u5bfc\u8005\u3002\u4f5c\u4e3a\u975e\u672c\u5730\u7684\u5916\u6765\u4eba\u5458\uff0c\u5251\u5e1d\u5c06\u8fd9\u4e9b\u7ec4\u7ec7\u805a\u62e2\u5728\u4e00\u8d77\u5e76\u5efa\u7acb\u8d77\u5c5e\u4e8e\u81ea\u5df1\u7684\u5c0f\u56fd\u5ea6\u8d39\u5c3d\u5468\u6298\uff0c\u65e0\u8bba\u662f\u6b66\u529b\u4e0a\u8fd8\u662f\u8111\u529b\u4e0a\uff0c\u4f60\u4e0d\u5f97\u4e0d\u4f69\u670d\u5979\u7684\u6218\u529b\u548c\u8c0b\u7565
            \u8be6\u89c1\u201c\u5e1d\u56fd\u897f\u90e8\u7684\u5386\u53f2\u201d`,
            geDouJia:`\u539f\u662f\u4e1c\u65b9\u7687\u671d\u6e38\u5386\u81f3\u897f\u65b9\u5e1d\u56fd\u7684\u4f7f\u8005\u56e2\u6210\u5458\u7684\u540e\u4ee3\uff0c\u5728\u5e1d\u56fd\u897f\u90e8\u5730\u533a\u5f00\u8bbe\u4e86\u4e00\u4e2a\u5c0f\u6b66\u9986\uff0c\u5411\u5f02\u4e61\u4eba\u5c55\u793a\u4e1c\u65b9\u795e\u79d8\u7684\u201c\u6c14\u201d
            \u8be6\u89c1\u201c\u5e1d\u56fd\u897f\u90e8\u7684\u5386\u53f2\u201d`,
            yongZhe:"\u4ece\u5c0f\u5728\u9694\u58c1\u6751\u6709\u4e00\u4e2a\u9752\u6885\u7af9\u9a6c\uff0c\u7136\u800c\u9752\u6885\u7af9\u9a6c\u5f88\u5c0f\u5c31\u88ab\u62d0\u5356\u8d70\u4e86\uff0c\u4e3a\u6b64\u800c\u5468\u6e38\u5404\u56fd\u5bfb\u627e\u5979\u7684\u7ebf\u7d22\u5e76\u9047\u5230\u4e86\u5f88\u591a\u4eba\u3002\u5076\u7136\u4e00\u4e2a\u673a\u4f1a\uff0c\u4ed6\u5728\u4e00\u4e2a\u6597\u517d\u573a\u770b\u5230\u4e86\u4e00\u4e2a\u5f88\u50cf\u5979\u7684\u80cc\u5f71\uff0c\u4e3a\u4e86\u786e\u5b9a\u662f\u4e0d\u662f\u5979\uff0c\u4ed6\u9690\u59d3\u57cb\u540d\u52a0\u5165\u4e86\u6597\u517d\u573a",
            lingHunShuShi:"\u66fe\u7ecf\u662f\u5b66\u9662\u90fd\u5e02\u7684\u7814\u7a76\u751f\u52a9\u6559\uff0c\u9010\u6e10\u5bf9\u751f\u547d\u8fd9\u4e00\u9879\u7981\u5fcc\u7684\u79d8\u672f\u4ea7\u751f\u4e86\u6d53\u539a\u7684\u5174\u8da3\u5e76\u4f5c\u4e3a\u81ea\u5df1\u7684\u7814\u7a76\u8bfe\u9898\u3002\u5728\u5b8c\u6210\u81ea\u5df1\u5f3a\u5927\u7684\u672f\u5f0f\u3010\u7075\u9b42\u94fe\u63a5\u3011\u540e\uff0c\u542c\u8bf4\u5317\u65b9\u57cb\u85cf\u7740\u53e4\u8001\u7684\u751f\u547d\u7981\u5fcc\u79d8\u672f\uff0c\u4e8e\u662f\u79bb\u5f00\u5b66\u9662\u90fd\u5e02\u524d\u5f80\u5927\u9646\u7684\u5317\u65b9\u8fdb\u884c\u63a2\u7d22\u3002\u5728\u63a2\u7d22\u7684\u671f\u95f4\u9047\u89c1\u4e86\u5192\u9669\u5bb6\uff0c\u5728\u7ecf\u5386\u4e86\u5f88\u591a\u4e8b\u60c5\u540e\u53cc\u65b9\u7ed3\u4e3a\u597d\u53cb\uff0c\u4e00\u540c\u6e38\u5386\uff0c\u7a7f\u8d8a\u5e1d\u56fd\uff0c\u7ed3\u8bc6\u4e86\u597d\u53cb\u5c01\u5370\u5e08\uff0c\u6700\u540e\u5728\u5e1d\u56fd\u5357\u4e0b\u90e8\u5206\u5b9a\u5c45\uff0c\u53c8\u9047\u5230\u4e86\u597d\u53cb\u4ef2\u88c1\u8005",
            xueZhiWuNv:`\u88ab\u505a\u6210\u4eba\u5f62\u5175\u5668\u6295\u5165\u81f3\u6218\u573a\uff0c\u5728\u6218\u573a\u4e0a\u7206\u53d1\uff0c\u968f\u540e\u88ab\u4e1c\u65b9\u7687\u671d\u6d3e\u51fa\u7684\u5927\u80fd\u9547\u538b\u66b4\u8d70\uff0c\u6700\u540e\u7591\u4f3c\u4e0e\u4e00\u540d\u4eba\u7c7b\u5c11\u5e74\u9690\u5c45\uff1b\u96b6\u5c5e\u4e8e\u7687\u671d\u4e1c\u65b9\u7684\u4e00\u4e2a\u5c0f\u56fd\u5bb6\uff0c\u8fd9\u4e2a\u5c0f\u56fd\u5bb6\u8fd8\u8981\u7ed9\u7687\u671d\u671d\u8d21\u3002
            \u5728\u5deb\u5973\u673a\u5173\u4e2d\u5c5e\u4e8e\u4e0a\u7ea7\u5deb\u5973\uff08\u8be6\u89c1\u201c\u5deb\u5973\u673a\u5173\u7ec4\u7ec7\u67b6\u6784\u56fe\u201d\uff09\uff0c\u4fee\u70bc\u7a0b\u5ea6\u6700\u9760\u8fd1\u5927\u5deb\u5973\uff0c\u4f46\u56e0\u4e3a\u5fc3\u4e2d\u4fdd\u6301\u7740\u5f53\u5e74\u7684\u4e00\u4e2a\u4eba\u7c7b\u5c11\u5e74\uff0c\u800c\u8fdf\u8fdf\u65e0\u6cd5\u8e0f\u5165\u6210\u4e3a\u5927\u5deb\u5973\u7684\u6700\u7ec8\u9636\u6bb5\u3002`,
            dieWuZhe:"\u4e3b\u8981\u5c45\u4f4f\u5728\u4e1c\u65b9\u7687\u671d\u504f\u897f\u5730\u533a\uff0c\u8be5\u5730\u533a\u5145\u6ee1\u4e86\u5f02\u57df\u98ce\u60c5\u3002\u8fd9\u6b21\u4e0e\u73d0\u73de\u4e00\u540c\u524d\u884c\uff0c\u5e0c\u671b\u53bb\u7687\u671d\u7684\u4e2d\u5fc3\u63a2\u5bfb\u201c\u672f\u201d\u7684\u771f\u6b63\u5965\u79d8",
            nvWuShen:"\u7fbd\u65cf\u5d07\u62dc\u7684\u6218\u6597\u795e\uff0c\u662f\u5c06\u8981\u6ca1\u843d\u7684\u7fbd\u65cf\u4fe1\u4ef0\u4e2d\u7684\u795e\u7075\u3002\u7531\u5723\u5149\u6559\u4f1a\u63a8\u52a8\uff0c\u7fbd\u65cf\u4e0e\u795e\u5723\u6559\u5ef7\u4e2d\u4e00\u4e9b\u6559\u6d3e\u5e0c\u671b\u5408\u4f5c\u4f7f\u5973\u6b66\u795e\u7c73\u6d85\u74e6\u518d\u73b0\u4e16\u95f4\u7edf\u4e00\u4e16\u754c\u5b97\u6559\uff0c\u8be5\u8ba1\u5212\u88ab\u79f0\u4e3a\u201c\u5973\u6b66\u795e\u8ba1\u5212\u201d",
            moGong:`\u4e0e\u5b89\u5a1c\u4e3a\u8fdc\u4eb2\uff0c\u5728\u5b89\u5a1c\u5e26\u7740\u90e8\u843d\u65cf\u4eba\u524d\u53bb\u5bfb\u627e\u6ce2\u963f\u72c4\u897f\u4e9a\u907f\u96be\u65f6\uff0c\u79bb\u5f00\u5b89\u5a1c\u53bb\u5bfb\u627e\u4e0d\u8fde\u7d2f\u65cf\u4eba\u800c\u5077\u5077\u51fa\u8d70\u7684\u7236\u4eb2\u3002
            \u6b64\u65f6\u6cf0\u7f57\u838e\u5df2\u7ecf\u901a\u8fc7\u7236\u4eb2\u7559\u4e0b\u7684\u9b54\u6cd5\u672f\u5f0f\u5b8c\u6210\u4e86\u5411\u9b54\u5f13\u8f6c\u53d8\u7684\u4e0b\u4e00\u4e2a\u9636\u6bb5\uff0c\u5728\u627e\u7236\u4eb2\u7684\u671f\u95f4\u9047\u5230\u4e86\u540c\u662f\u5728\u627e\u4eba\u7684\u83f2\u6b27\u5a1c`,
            hongLianQiShi:"\u8be6\u89c1\u201c\u7ea2\u83b2\u4e8b\u4ef6\u201d\uff1b\u88ab\u8d4b\u4e88\u7684\u7279\u6b8a\u80fd\u529b\u662f\u9738\u4f53\uff08\u4f24\u5bb3\u65e0\u6548\u5316\uff09\uff1b\u8ba4\u4e3a\u88ab\u8ffd\u6355\u662f\u81ea\u5df1\u6700\u597d\u7684\u8d4e\u7f6a\u9053\u8def",
            yingLingRenXing:"\u96f6\u662f\u5b8c\u5168\u7528\u673a\u68b0\u624b\u6bb5\u5236\u9020\u51fa\u6765\u7684\u4eba\u5f62\u673a\u68b0\u4f53\uff0c\u800c\u64cd\u4f5c\u5979\u7684\u5219\u662f\u5df2\u7ecf\u88ab\u79d8\u672f\u7ed1\u5b9a\u7684\u7075\u9b42",
            moQiang:`\u5973\u6b66\u795e\u8ba1\u5212\uff08\u9020\u795e\u8ba1\u5212\uff09\u7684\u5b9e\u9a8c\u4f53\uff0c\u4f46\u662f\u5931\u8d25\u540e\u7684\u4ea7\u7269
            \u81ea\u5c0f\u5c31\u662f\u5b64\u513f\u7684\u83f2\u6b27\u5a1c\u88ab\u4e00\u4e2a\u4eba\u8d29\u5b50\u6536\u7559\uff0c\u4eba\u8d29\u5b50\u7ed9\u5979\u8d77\u4e86\u4e2a\u540d\u5b57\u53eb\u83f2\u6b27\u5a1c\u3002\u7136\u800c\u7b49\u83f2\u6b27\u5a1c\u957f\u5927\u540e\uff0c\u90a3\u4e2a\u4eba\u8d29\u5b50\u5bf9\u5979\u5b9e\u65bd\u4e86\u4fb5\u72af\uff0c\u7136\u540e\u5c06\u5979\u5356\u7ed9\u4e86\u4e00\u4e2a\u795e\u79d8\u7ec4\u7ec7\u7684\u5b9e\u9a8c\u5ba4\u4f5c\u4e3a\u8bd5\u9a8c\u54c1\uff0c\u8fd9\u7a81\u7136\u5176\u6765\u7684\u4e8b\u4ef6\u8ba9\u83f2\u6b27\u5a1c\u7684\u4e09\u89c2\u5d29\u584c\uff0c\u53d8\u5f97\u4e0d\u4fe1\u4eba\u548c\u51b7\u9177\u3002
            \u6700\u540e\u4f5c\u4e3a\u5b9e\u9a8c\u5931\u8d25\u54c1\u88ab\u6254\u5230\u4e86\u795e\u79d8\u7ec4\u7ec7\u5b9e\u9a8c\u5ba4\u7684\u5e9f\u54c1\u5904\u7406\u573a\u81ea\u751f\u81ea\u706d\uff0c\u5904\u7406\u573a\u4e2d\u53ea\u6709\u5145\u6ee1\u8150\u81ed\u6c14\u5473\u7684\u5b9e\u4f53\u548c\u5b9e\u9a8c\u540e\u5f03\u7f6e\u7684\u661f\u77f3\u6b8b\u6e23\uff1b\u83f2\u6b27\u5a1c\u5728\u5176\u4e2d\u610f\u5916\u7684\u4e0e\u5e7b\u4e4b\u661f\u77f3\u5171\u751f\u5e76\u83b7\u5f97\u4e86\u5e7b\u4e4b\u661f\u77f3\u7684\u80fd\u529b\u3002\u6700\u7ec8\u5979\u901a\u8fc7\u8fd9\u4e2a\u80fd\u529b\u7834\u574f\u4e86\u795e\u79d8\u7ec4\u7ec7\u5b9e\u9a8c\u5ba4\u5e76\u9003\u79bb\u51fa\u53bb\uff0c\u76ee\u524d\u88ab\u8fd9\u4e2a\u795e\u79d8\u7ec4\u7ec7\u8ffd\u6355\u4e2d\u3002
            \u9003\u79bb\u51fa\u6765\u540e\u7684\u83f2\u6b27\u5a1c\u76ee\u524d\u6210\u4e3a\u4e86\u9b54\u88c5\u5c11\u5973\uff0c\u5230\u5904\u6d41\u6d6a\uff0c\u5bfb\u627e\u6614\u65e5\u90a3\u4e2a\u65e2\u662f\u6069\u4eba\u53c8\u662f\u4ec7\u4eba\uff0c\u540c\u65f6\u4e5f\u662f\u66fe\u7ecf\u6240\u7231\u4e4b\u4eba\uff0c\u4f46\u5c11\u5973\u5bf9\u8fd9\u884c\u4e3a\u5145\u6ee1\u8ff7\u60d8\u4e0e\u82e6\u607c\u3002\u4e8e\u662f\u88ab\u661f\u77f3\u6307\u5f15\u7740\u7684\u5979\u5f00\u59cb\u5bfb\u627e\u80fd\u89e3\u51b3\u81ea\u5df1\u4e00\u5207\u82e6\u607c\u7684\u661f\u676f\u3002
            \u6b63\u5f53\u6cf0\u7f57\u838e\u88ab\u9b54\u6cd5\u541e\u566c\uff0c\u8ff7\u5931\u4e8e\u4e16\u754c\u7684\u4e00\u89d2\u65f6\uff0c\u83f2\u6b27\u5a1c\u4e0e\u6cf0\u7f57\u838e\u76f8\u9047\u4e86\uff0c\u4f46\u6b64\u6b21\u7684\u76f8\u9047\u5e76\u975e\u5076\u7136\u3002\u88ab\u661f\u77f3\u6240\u7737\u604b\uff0c\u6240\u6307\u5f15\uff0c\u540c\u6837\u662f\u5931\u53bb\u81ea\u6211\u7684\u4e8c\u4eba\uff0c\u76f8\u4e92\u4f9d\u9760\uff0c\u5728\u5979\u4eec\u4e8c\u4eba\u7684\u672a\u6765\u524d\u65b9\u5219\u662f\u53e6\u4e00\u540d\u547d\u8fd0\u4e4b\u4eba\u3002`,
            cangYanMoNv:`\u5077\u770b\u4e86\u8bfa\u96f7\u6770\u7684\u8d24\u8005\u4e4b\u4e66\uff0c\u7ed3\u5408\u4e86\u81ea\u5df1\u6240\u5b66\uff0c\u5b8c\u6210\u4e86\u5c5e\u4e8e\u81ea\u5df1\u7684\u672f\u5f0f\uff1b\u5b66\u9662\u90fd\u5e02\u771f\u5b66\u9738\u4e4b\u4e00\uff0c\u65c1\u4eba\u773c\u91cc\u4e2d\u4e0e\u8bfa\u96f7\u6770\u4e3a\u5929\u9020\u5730\u8d50\u7684\u4e00\u5bf9\uff0c\u5b9e\u9645\u5e76\u4e0d\u662f
            \u4e00\u4e2a\u4e3a\u4e86\u7ee7\u627f\u7237\u7237\u9057\u4ea7\u7684\u5929\u624d\u5c11\u5973\uff0c\u4e3a\u4e86\u7ee7\u627f\u90a3\u4e2a\u5bb6\u65cf\u610f\u5fd7\u7684\u5c11\u5973\uff0c\u7ec8\u5c06\u8d70\u4e0a\u4e86\u4e0d\u62e9\u624b\u6bb5\u7684\u9053\u8def`,
            yinYouShiRen:`\u56db\u5904\u6e38\u5386\uff0c\u8046\u542c\u6545\u4e8b\uff0c\u5bfb\u627e\u7075\u611f\uff0c\u4ee5\u6b64\u6765\u5b8c\u6210\u81ea\u5df1\u7684\u8457\u4f5c\u300a\u6c38\u6052\u4e50\u7ae0\u300b\u3002\u5728\u6e38\u5386\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ed6\u78b0\u5230\u4e86\u4e00\u4e2a\u53ef\u7231\u7684\u5c0f\u7cbe\u7075\uff0c\u5e76\u5ea6\u8fc7\u4e86\u4e00\u6bb5\u6109\u5feb\u7684\u65f6\u5149
            \u5b9e\u9645\u662f\u4f5c\u4e3a\u7b2c\u4e00\u6279\u65e7\u65e5\u4e4b\u6c11\u548c\u539f\u59cb\u7cbe\u7075\u65cf\u901a\u8fc7\u57fa\u56e0\u6df7\u5408\u540e\u7684\u4ea7\u7269\uff0c\u867d\u7136\u56e0\u4e3a\u6df7\u5165\u4e86\u65e7\u65e5\u4e4b\u6c11\u7684\u57fa\u56e0\u800c\u88ab\u5224\u5b9a\u79cd\u65cf\u4e3a\u4eba\u7c7b\uff0c\u5b9e\u9645\u4e0a\u4f53\u5185\u7cbe\u7075\u65cf\u7684\u57fa\u56e0\u56e0\u4e3a\u7b2c\u4e00\u4ee3\u7684\u7f18\u6545\u5360\u6bd4\u8fd8\u662f\u975e\u5e38\u9ad8\u7684\u3002\u56e0\u6b64\u4ed6\u4e5f\u83b7\u5f97\u4e86\u51e0\u4e4e\u6c38\u6052\u7684\u751f\u547d\u3002\u6f2b\u957f\u7684\u751f\u547d\u5bf9\u4ed6\u6765\u8bf4\uff0c\u4e0d\u50cf\u662f\u6069\u8d50\uff0c\u53cd\u800c\u662f\u4e00\u79cd\u60e9\u7f5a\uff0c\u4e00\u79cd\u540d\u53eb\u201c\u6c38\u6052\u56da\u5f92\u201d\u7684\u60e9\u7f5a\u3002
            \u4e3a\u4e86\u4e86\u7ed3\u81ea\u8eab\uff0c\u6216\u8005\u8bf4\u6253\u53d1\u65f6\u95f4\uff0c\u4ed6\u6e38\u5386\u4e86\u8fd9\u5757\u5927\u9646\u7684\u5404\u4e2a\u5730\u65b9\uff0c\u751a\u81f3\u60f3\u8981\u95ef\u5165\u5927\u9646\u8fb9\u7f18\u7684\u865a\u65e0\u6df7\u6c8c\u6765\u5c1d\u8bd5\u795e\u9690\u8fdb\u884c\u89e3\u8131\uff0c\u4f46\u90fd\u6ca1\u6709\u6210\u529f\u3002\u56e0\u4e3a\u4ed6\u4e0d\u77e5\u9053\u7684\u662f\uff0c\u50cf\u4ed6\u8fd9\u6837\u7684\u7cbe\u7075\uff0c\u53ea\u6709\u901a\u8fc7\u732e\u796d\u624d\u80fd\u8ba9\u81ea\u5df1\u9b42\u5f52\u6545\u571f\uff0c\u7136\u800c\u4ed6\u73b0\u5728\u5e76\u6ca1\u6709\u627e\u5230\u4f1a\u8fd9\u79cd\u4eea\u5f0f\u7684\u4eba\uff0c\u4e5f\u4e0d\u77e5\u9053\u8fd9\u5757\u5927\u9646\u4e0a\u8fd8\u6709\u6ca1\u6709\u4f1a\u8fd9\u79cd\u4eea\u5f0f\u7684\u4eba\u3002\u76f4\u5230\u67d0\u4e2a\u5c0f\u7cbe\u7075\u7a7f\u8d8a\u8fc7\u6765\u65f6~`,
            jingLingSheShou:"\u5b89\u5a1c\u5e26\u9886\u65cf\u4eba\u524d\u5f80\u5979\u6240\u5728\u7684\u5730\u65b9\u82f1\u5409\u5229\u4e9a\u68ee\u6797\u907f\u96be\uff1b\u64c5\u957f\u9690\u533f\u4e8e\u4e1b\u6797\u4e4b\u4e2d\uff0c\u7a7f\u63d2\u4e8e\u6218\u573a\uff0c\u6839\u636e\u573a\u4e0a\u5c40\u52bf\uff0c\u7275\u5236\u654c\u4eba\uff0c\u7cbe\u51c6\u6253\u51fb\u5bf9\u624b\u4ee5\u53ca\u8ffd\u51fb\u6e83\u8d25\u4e4b\u654c\uff0c\u5979\u76f8\u4fe1\u79d8\u4eea\u7684\u795d\u798f\u529b\u91cf\u4ee5\u53ca\u68ee\u4e4b\u4f19\u4f34\u80fd\u4e3a\u5979\u5e26\u6765\u80dc\u5229\u7684\u51ef\u65cb",
            yinYangShi:`\u9634\u9633\u5e08\u901a\u8fc7\u9634\u9633\u672f\uff0c\u5c06\u81ea\u8eab\u7075\u9b42\u5206\u5272\u51fa2\u90e8\u5206\uff0c\u5206\u522b\u547d\u540d\u4e3a\u8f6e\u548c\u73af\uff1b\u5176\u4e2d\u4e00\u90e8\u5206\u5229\u7528\u51ed\u4f9d\u9644\u4f53\u7684\u65b9\u5f0f\u53d8\u6210\u53e6\u4e00\u90e8\u5206\u7684\u5f0f\u795e\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u5c31\u53ef\u4ee5\u8fbe\u52302\u4e2a\u7075\u9b42\u540c\u65f6\u5b66\u4e60\u4e0d\u540c\u7684\u77e5\u8bc6\uff0c\u5e76\u57f9\u517b\u6210\u65b0\u7684\u7075\u9b42\u4e2a\u4f53\u548c\u5f62\u6210\u4e0d\u540c\u7684\u6027\u683c\u3002\u800c\u5f53\u5206\u5272\u7684\u7075\u9b42\u518d\u6b21\u5408\u5230\u4e00\u4f53\u65f6\uff0c\u9634\u9633\u5e08\u5c31\u80fd\u83b7\u5f97\u66f4\u591a\u66f4\u5f3a\u7684\u529b\u91cf\u3002\u76ee\u524d\u6b63\u52aa\u529b\u5c1d\u8bd5\u8ffd\u6c42\u5206\u5272\u62104\u4efd\u7075\u9b42\uff0c8\u4efd\u7075\u9b42\u7b49\u7b49\u3002
            \u9634\u9633\u5e08\u4e0e\u98ce\u97f3\u672c\u662f\u540c\u6e90\uff0c\u4f46\u5bf9\u672c\u6e90\u7684\u7406\u89e3\u65b9\u5f0f\u4e0d\u540c\uff0c\u5404\u81ea\u4ea6\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u5f0f\u8fdb\u884c\u4fee\u884c\uff1a\u9634\u9633\u5e08\u5728\u4e1c\u65b9\u5c9b\u56fd\u7ed3\u5408\u4e86\u5f53\u5730\u7684\u5fa1\u9b42\u672f\u3001\u51ed\u4f9d\u672f\u3001\u5492\u672f\u8fdb\u884c\u53d1\u5c55\uff1b\u800c\u98ce\u97f3\u5219\u5728\u4e1c\u65b9\u7fa4\u5c71\u4e2d\u4ee5\u4fee\u8eab\u3001\u517b\u795e\u3001\u7b26\u7b93\u8fdb\u884c\u53d1\u5c55\u3002\u67d0\u5929\u5979\u4eec\u5404\u81ea\u5f97\u5230\u5e08\u5085\u7684\u6388\u547d\uff0c\u524d\u5f80\u540c\u4e00\u4e2a\u5730\u65b9\u6267\u884c\u5de5\u4f5c\uff0c\u6b64\u523b\u547d\u8fd0\u5f15\u5bfc\u81f3\u6b64~
            \u7b97\u51fa\u4e1c\u65b9\u6709\u4e00\u573a\u80fd\u91cf\u5927\u66b4\u8d70\uff0c\u4f46\u611f\u89c9\u65e0\u6cd5\u4ee5\u4e00\u5df1\u4e4b\u529b\u9547\u538b\uff0c\u6545\u62a5\u544a\u5e08\u95e8\uff0c\u5f97\u5230\u4e86\u5e08\u95e8\u7684\u6388\u547d`,
            xueSeJianLing:`\u5e1d\u56fd\u897f\u90e8\u4e00\u5757\u5730\u533a\u7684\u539f\u4f4f\u6c11\uff0c\u5bf9\u4e8e\u67d0\u4f4d\u4eba\u58eb\u7684\u7edf\u4e00\u4e00\u76f4\u4e0d\u670d\u6c14\uff0c\u4e0e\u6b64\u6597\u4e89\u4e86\u8bb8\u4e45\uff0c\u6700\u540e\u88ab\u5176\u5251\u9053\u5b9e\u529b\u548c\u9886\u8896\u6c14\u8d28\u6240\u6298\u670d
            \u8be6\u89c1\u201c\u5e1d\u56fd\u897f\u90e8\u7684\u5386\u53f2\u201d`,
            yueZhiNvShen:`\u6708\u795e\u4fe1\u4ef0\u662f\u88ab\u6559\u5ef7\u56fd\u541e\u5e76\u540e\u878d\u5408\u5230\u6559\u5ef7\u4f53\u7cfb\u91cc\u7684\u5f02\u65cf\u795e\u4fe1\u4ef0\u3002\u6559\u5ef7\u4e3a\u4e86\u7ef4\u7cfb\u7edf\u6cbb\uff0c\u5c06\u6708\u795e\u7684\u795e\u6743\u5206\u62c6\u51fa\u6765\u53d8\u62103\u4efd\uff0c\u5206\u522b\u7531\u4e0d\u540c\u7684\u796d\u5e08\u7ee7\u627f\u3002
            \u81ea\u5c0f\u4f5c\u4e3a\u6708\u795e\u796d\u5e08\u7684\u7ee7\u627f\u8005\u4e4b\u4e00\u7684\u5c24\u745e\u827e\u8389\uff0c\u5f88\u65e9\u5c31\u89c9\u9192\u4e86\u5f3a\u5927\u7684\u795e\u529b\uff1b\u88ab\u62c6\u5206\u76843\u4efd\u795e\u6743\u9010\u6e10\u805a\u5408\u5230\u4e00\u8d77\uff0c\u8fd9\u4e5f\u8bb8\u662f\u547d\u8fd0\u7684\u65b0\u542f\u793a
            \u96b6\u5c5e\u4e8e\u6708\u795e\u4fee\u9053\u4f1a`,
            shouLingWuShi:`\u662f\u4f5c\u4e3a\u7d2b\u82d1\u7684\u5b88\u62a4\u59ec\u6b66\u58eb\uff0c\u540c\u65f6\u4e5f\u662f\u88ab\u56fd\u5bb6\u6307\u6d3e\u7528\u6765\u76d1\u89c6\u7d2b\u82d1\uff0c\u538b\u5236\u7d2b\u82d1\u66b4\u8d70\u7684\u5de5\u5177\u3002\u5fa1\u9b42\u6d41\u662f\u83d6\u84b2\u6240\u4fee\u7684\u5251\u9053\u6d41\u6d3e\uff0c\u4ee5\u6fc0\u53d1\u64cd\u7eb5\u4f53\u5185\u517d\u9b42\u6765\u63d0\u5347\u81ea\u8eab\u80fd\u529b\uff0c\u4ece\u800c\u538b\u5236\u654c\u4eba\u3002\u4f5c\u4e3a\u7d2b\u82d1\u7684\u4eb2\u5c5e\uff0c\u540c\u65f6\u4e5f\u80a9\u8d1f\u56fd\u5bb6\u5de5\u5177\u547d\u8fd0\u7684\u83d6\u84b2\uff0c\u4e0e\u7d2b\u82d1\u4e4b\u95f4\u7684\u5173\u7cfb\u5341\u5206\u5fae\u5999\u3002
            \u83d6\u84b2\u559c\u597d\u559d\u9152\u548c\u6ce1\u6fa1\uff0c\u8fd9\u662f\u5979\u8ba4\u4e3a\u6700\u65e0\u62d8\u65e0\u675f\u7684\u65f6\u95f4\u4e86\uff1b\u4e14\u5979\u8ba4\u4e3a\u8fd9\u4e2a\u65f6\u95f4\u6240\u6709\u4eba\u7684\u5173\u7cfb\u5e94\u8be5\u90fd\u653e\u4e0b\u6765\uff0c\u597d\u597d\u4eab\u53d7\u8fd9\u6bb5\u7f8e\u597d\u65f6\u5149
            \u83d6\u84b2\u5728\u62c5\u4efb\u59ec\u6b66\u58eb\u4e4b\u524d\uff0c\u66fe\u7ecf\u5728\u5fa1\u9b42\u6d41\u7684\u9053\u573a\u5185\u5b66\u4e60\uff0c\u5fa1\u9b42\u6d41\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u7edf\u5fa1\u4f53\u5185\u517d\u9b42\u3002\u83d6\u84b2\u5728\u9053\u573a\u4e2d\u5b66\u4f1a\u4e86\u6700\u7ec8\u5965\u4e49\uff0c\u4e8e\u662f\u79bb\u5f00\u9053\u573a\u6e38\u5386\u56db\u65b9\u3002\u5728\u6e38\u5386\u56db\u65b9\u7684\u4e00\u4e24\u5e74\u4e2d\uff0c\u5979\u6536\u5230\u4e86\u5927\u5e08\u5144\u7684\u6765\u4fe1\uff0c\u4fe1\u4e2d\u5219\u5199\u5230\u201c\u83d6\u84b2\u6e38\u5386\u56db\u65b9\u540e\uff0c\u5e08\u5085\u6536\u4e86\u4e00\u540d\u6709\u5929\u8d4b\u7684\u5173\u95e8\u5f1f\u5b50\uff0c\u5173\u95e8\u5f1f\u5b50\u4e0d\u8d1f\u4f17\u671b\uff0c\u5b66\u4f1a\u4e86\u5e08\u5085\u7684\u6700\u7ec8\u5965\u4e49\uff0c\u7136\u800c\u5979\u5374\u6700\u540e\u5f11\u5e08\uff0c\u7559\u4e0b\u4e86\u201c\u79d8\u6280\u5df2\u4f1a\u201d\u7684\u5b57\u6837\u540e\u6d88\u5931\u4e0d\u89c1\u3002\u201d\u3002\u4e8e\u662f\u83d6\u84b2\u4e3a\u4e86\u590d\u5174\u5fa1\u9b42\u6d41\uff0c\u540c\u65f6\u4e5f\u662f\u4e3a\u4e86\u66ff\u5e08\u5085\u62a5\u4ec7\uff0c\u5728\u8d76\u56de\u53bb\u7684\u8def\u4e0a\uff0c\u8c03\u67e5\u53d1\u73b0\u8be5\u5173\u95e8\u5f1f\u5b50\u53bb\u5deb\u5973\u673a\u5173\u62c5\u4efb\u4e86\u59ec\u6b66\u58eb\u3002\u4e8e\u662f\u5979\u8d76\u56de\u53bb\u9053\u573a\uff0c\u82b1\u4e86\u534a\u5e74\u65f6\u95f4\u5c06\u5fa1\u9b42\u6d41\u6700\u7ec8\u7684\u5965\u4e49\u4f20\u6388\u7ed9\u9053\u573a\u7684\u5e08\u5144\u5f1f\u540e\uff0c\u5367\u5e95\u5deb\u5973\u673a\u5173\u62c5\u4efb\u4e86\u59ec\u6b66\u58eb\uff0c\u7ed9\u5979\u5206\u914d\u7684\u5deb\u5973\u5219\u662f\u7d2b\u82d1\u3002
            \u5728\u62c5\u4efb\u59ec\u6b66\u58eb\u671f\u95f4\uff0c\u83d6\u84b2\u8c03\u67e5\u5173\u95e8\u5f1f\u5b50\u7684\u8e2a\u8ff9\uff0c\u4f46\u4e00\u76f4\u90fd\u6ca1\u6709\u6d88\u606f\u3002\u76f4\u5230\u5979\u5e26\u7740\u7d2b\u82d1\u53bb\u67d0\u5730\u201c\u7948\u798f\u201d\u65f6\uff0c\u53d1\u73b0\u5bf9\u65b9\u9635\u8425\u4e2d\u5c45\u7136\u4e5f\u51fa\u73b0\u4e86\u5deb\u5973\u7684\u5b58\u5728\u3002\u5deb\u5973\u673a\u5173\u5927\u6012\uff0c\u6000\u7591\u662f\u5185\u90e8\u6709\u4eba\u7a83\u53d6\u4e86\u673a\u5bc6\u6280\u672f\u6216\u8005\u6709\u59ec\u6b66\u58eb\u53db\u53d8\uff0c\u5e26\u8d70\u4e86\u4f8d\u5949\u5deb\u5973\u6216\u8005\u4e0b\u7ea7\u5deb\u5973\u3002\u7ec8\u4e8e\u5deb\u5973\u673a\u5173\u8c03\u67e5\u51fa\u4e86\u8fd9\u4e8b\u7684\u59cb\u4f5c\u4fd1\u8005\uff0c\u5c45\u7136\u5c31\u662f\u5173\u95e8\u5f1f\u5b50\u3002\u4e8e\u662f\u4e00\u573a\u5927\u6218\u4e0d\u53ef\u907f\u514d\u7684\u7206\u53d1\u4e86\uff0c\u5728\u6218\u6597\u8fc7\u7a0b\u4e2d\uff0c\u7d2b\u82d1\u758f\u4e8e\u770b\u7ba1\uff0c\u6700\u540e\u66b4\u8d70\u3002\u83d6\u84b2\u4ee5\u635f\u5931\u4e86\u4e00\u53ea\u624b\u7684\u4ee3\u4ef7\uff0c\u548c\u5176\u4ed6\u5927\u80fd\u9547\u538b\u4e86\u5979\u7684\u66b4\u8d70\u3002\u6218\u4e89\u7684\u6700\u540e\uff0c\u83d6\u84b2\u5728\u539f\u6218\u4e89\u9057\u5740\u9644\u8fd1\uff0c\u7acb\u4e86\u4e00\u5757\u65e0\u5b57\u7891\uff0c\u5728\u90a3\u8fb9\u5b64\u72ec\u7ec8\u8001\u3002`,
            shengGong:"\u5929\u4e4b\u4f7f\u5f92\uff0c\u4f46\u56e0\u4e3a\u662f\u4eba\u9020\u7684\u6545\u6ca1\u6709\u7fbd\u65cf\u7684\u7fc5\u8180\uff0c\u4e8e\u662f\u5236\u4f5c\u4e86\u4e00\u5bf9\u7fc5\u8180\uff08\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u6b66\u5668\u4f7f\u7528\uff09",
		},
		
		skill:{
            //风之剑圣
            fengNuZhuiJi:{
                usable:1,
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
                    trigger.shengJian=true;
                },
                subSkill:{
                    drawAndDiscard:{
                        direct:true,
                        trigger:{player:'gongJiJieShu'},
                        filter:function(event,player){
                            return event.shengJian==true;
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
                    tag:{
                        shuiJing:true,
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

            //封印师
            faShuJiDang:"[响应]法术激荡",
            faShuJiDang_info:"<span class='tiaoJian'>([法术行动]结束后发动)</span>额外+1[攻击行动]。",
            diZhiFengYin:"(独)[法术]地之封印",
            diZhiFengYin_info:"<span class='tiaoJian'>(将【地之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出地系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            shuiZhiFengYin:"(独)[法术]水之封印",
            shuiZhiFengYin_info:"<span class='tiaoJian'>(将【水之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出水系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            huoZhiFengYin:"(独)[法术]火之封印",
            huoZhiFengYin_info:"<span class='tiaoJian'>(将【火之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出火系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            fengZhiFengYin:"(独)[法术]风之封印",
            fengZhiFengYin_info:"<span class='tiaoJian'>(将【风之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出风系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            leiZhiFengYin:"(独)[法术]雷之封印",
            leiZhiFengYin_info:"<span class='tiaoJian'>(将【雷之封印】放置于目标对手面前)</span>该对手获得(直到他从手中打出或展示出雷系牌时强制触发)：对他造成3点法术伤害③，触发后移除此牌。",
            wuXiShuFu:"(专)[法术]五系束缚",
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
