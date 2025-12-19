//版本1
let num=0;
let cityCount=0;
const sleeptime="50s"
const countryList = [
  "爱尔兰", "英国", "法国", "西班牙", "葡萄牙", "阿尔及利亚", "突尼斯", "意大利", "瑞士",
  "比利时", "荷兰", "德国", "捷克","斯洛伐克", "波兰", "苏联", "罗马尼亚", "匈牙利", "奥地利",
  "南斯拉夫", "阿尔巴尼亚", "保加利亚", "希腊", "土耳其", "丹麦", "瑞典"
];
const colorList = [
  "#FF0000", "#FF7F00", "#FFFF00", "#7FFF00", "#00FF00", "#00FF7F",
  "#00FFFF", "#007FFF", "#0000FF", "#7F00FF", "#FF00FF", "#FF007F",
  "#B22222", "#FF4500", "#FFD700", "#ADFF2F", "#32CD32", "#40E0D0",
  "#00CED1", "#1E90FF", "#4169E1", "#8A2BE2", "#C71585", "#DC143C",
  "#708090", "#A0522D"
];



const cityList = [
    "都柏林",     // 爱尔兰 Dublin  
  "伦敦",       // 英国 London  
  "巴黎",       // 法国 Paris  
  "马德里",     // 西班牙 Madrid  
  "里斯本",     // 葡萄牙 Lisbon  
  "阿尔及尔",   // 阿尔及利亚 Algiers  
  "突尼斯市",   // 突尼斯 Tunis  
  "罗马",       // 意大利 Rome  
  "伯尔尼",     // 瑞士 Bern  
  "布鲁塞尔",   // 比利时 Brussels  
  "阿姆斯特丹", // 荷兰 Amsterdam  
  "柏林",       // 德国 Berlin  
  "布拉格",//捷克
  "布拉迪斯拉发", // 斯洛伐克 
  "华沙",       // 波兰 Warsaw  
  "莫斯科",     // 苏联 Moscow  
  "布加勒斯特", // 罗马尼亚 Bucharest  
  "布达佩斯",   // 匈牙利 Budapest  
  "维也纳",     // 奥地利 Vienna  
  "贝尔格莱德", // 南斯拉夫 Belgrade  
  "地拉那",     // 阿尔巴尼亚 Tirana  
  "索菲亚",     // 保加利亚 Sofia  
  "雅典",       // 希腊 Athens  
  "安卡拉",     // 土耳其 Ankara  
  "哥本哈根",   // 丹麦 Copenhagen  
  "斯德哥尔摩",     // 瑞典 Oslo
  "科克", "贝尔法斯特",
  "爱丁堡", "曼彻斯特",
  "朴茨茅斯", "普利茅斯", "里尔", "勒阿弗尔", "布勒斯特", "勒芒", "里莫日",
  "日内瓦", "马赛", "图卢兹",
  "巴塞罗那", "塞维利亚", "希洪", "韦哥", "波尔图",
  "拉巴特", "乌里达", "君士但丁",
  "西西里", "撒丁岛", "科西嘉岛", "巴里", "那不勒斯", "佛罗伦萨", "都灵", "米兰", "威尼斯",
  "斯特拉斯堡", "科隆", "法兰克福", "汉堡", "莱比锡", "纽约堡", "慕尼黑",
  "布尔诺", "波兹南", "格但斯克", "克拉科夫",
  "基辅", "列宁格勒", "明斯克", "加里宁格勒", "敖德萨",
  "雅西", "康斯坦撒", "不勒森", "赛格德", "拉哥兹",
  "列支敦士登", "萨格勒布", "撒拉热窝", "斯科普里",
  "普罗夫迪夫", "瓦尔那",
  "萨洛尼卡", "克里特岛",
  "伊斯坦布尔", "伊兹密尔",
  "基尔", "马尔默",
  "奥斯陆", "赫尔辛基"
];

const teamList = ["0","1","2","3","4","5","6"];
const tool = tiled.registerTool("批量城占对象生成", {
    name: "批量城占对象生成",
    icon: "cursor",
    key: "M", // 快捷键 M

    mousePressed: function (button, x, y) 
    {
        tiled.log(cityList[cityCount+1]);
        
        const map = tiled.activeAsset;
        if (!map || !map.isTileMap) {
            tiled.alert("请打开一个地图！");
            return;
        }

        const layer = map.currentLayer;
        if (!layer || !layer.isObjectLayer) {
            tiled.alert("还没选中一个对象图层！");
            return;
        }
        let b="0";
        if(num>countryList.length-1){
            b="-2";
        }
        if(num<=countryList.length-1){
            b=String(num)
        }
        num++;
        const 开局敌方生成 = new MapObject();
        开局敌方生成.name="开局敌方生成";
        开局敌方生成.type = "unitAdd";
        开局敌方生成.x = x;
        开局敌方生成.y = y;
        开局敌方生成.width = 20;
        开局敌方生成.height = 20;
        开局敌方生成.setProperty("team",b);
        开局敌方生成.setProperty("spawnUnits","commandCenter*1");
        layer.addObject(开局敌方生成);

        const 敌方检测 = new MapObject();
        敌方检测.name=cityList[cityCount]+"敌方DE";
        敌方检测.type = "unitDetect";
        敌方检测.x = x;
        敌方检测.y = y;
        敌方检测.width = 20;
        敌方检测.height = 20;
        敌方检测.setProperty("id",cityList[cityCount]+"敌方DE");
        敌方检测.setProperty("resetActivationAfter", "1s");
        敌方检测.setProperty("team","-2");
        敌方检测.setProperty("unitType", "commandCenter");
        layer.addObject(敌方检测);

        const 敌方文字=new MapObject();
        敌方文字.name=cityList[cityCount]+"敌方";
        敌方文字.type="mapText";
        敌方文字.x = x;
        敌方文字.y = y;
        敌方文字.width = 20;
        敌方文字.height = 20;
        敌方文字.setProperty("activatedBy",cityList[cityCount]+"敌方DE");
        敌方文字.setProperty("id",cityList[cityCount]+"敌方");
        敌方文字.setProperty("resetActivationAfter","1s");
        敌方文字.setProperty("text",cityList[cityCount]+"敌方");
        敌方文字.setProperty("textColor","#ffffff");
        敌方文字.setProperty("textSize","12");
        layer.addObject(敌方文字);

        const 中立检测 = new MapObject();
        中立检测.name=cityList[cityCount]+"中立DE";
        中立检测.type = "unitDetect";
        中立检测.x = x;
        中立检测.y = y;
        中立检测.width = 20;
        中立检测.height = 20;
        中立检测.setProperty("id",cityList[cityCount]+"中立DE");
        中立检测.setProperty("resetActivationAfter", "1s");
        中立检测.setProperty("team","-1");
        中立检测.setProperty("unitType", "commandCenter");
        layer.addObject(中立检测);

        const 中立文字=new MapObject();
        中立文字.name=cityList[cityCount]+"中立";
        中立文字.type="mapText";
        中立文字.x = x;
        中立文字.y = y;
        中立文字.width = 20;
        中立文字.height = 20;
        中立文字.setProperty("activatedBy",cityList[cityCount]+"中立DE");
        中立文字.setProperty("id",cityList[cityCount]+"中立");
        中立文字.setProperty("resetActivationAfter","1s");
        中立文字.setProperty("text",cityList[cityCount]+"中立");
        中立文字.setProperty("textColor","#ffffff");
        中立文字.setProperty("textSize","12");
        layer.addObject(中立文字);

        const 城市检测 = new MapObject();
        城市检测.name=cityList[cityCount]+"DE";
        城市检测.type = "unitDetect";
        城市检测.x = x;
        城市检测.y = y;
        城市检测.width = 20;
        城市检测.height = 20;
        城市检测.setProperty("id",cityList[cityCount]+"DE");
        城市检测.setProperty("resetActivationAfter", sleeptime);
        城市检测.setProperty("unitType", "commandCenter");
        城市检测.setProperty("maxUnits", "0");
        layer.addObject(城市检测);

        const 城市生成=new MapObject();
        城市生成.name=cityList[cityCount]+"生成";
        城市生成.type="unitAdd";
        城市生成.x = x;
        城市生成.y = y;
        城市生成.width = 20;
        城市生成.height = 20;
        城市生成.setProperty("activatedBy",cityList[cityCount]+"DE");
        城市生成.setProperty("id",cityList[cityCount]+"生成");
        城市生成.setProperty("resetActivationAfter","50s");
        城市生成.setProperty("spawnUnits","commandCenter*1");
        城市生成.setProperty("team","-1");
        layer.addObject(城市生成);

        for(let i=0;i<countryList.length;i++)
        {
        let countryCount=i;
        
        const 国家检测 = new MapObject();
        国家检测.name=cityList[cityCount]+countryList[countryCount]+"DE";
        国家检测.type = "unitDetect";
        国家检测.x = x;
        国家检测.y = y;
        国家检测.width = 20;
        国家检测.height = 20;
        国家检测.setProperty("id",cityList[cityCount]+countryList[countryCount]+"DE");
        国家检测.setProperty("resetActivationAfter", "1s");
        国家检测.setProperty("unitType", "commandCenter");
        国家检测.setProperty("team", countryCount);
        layer.addObject(国家检测);

        const 国家文字=new MapObject();
        国家文字.name=cityList[cityCount]+countryList[countryCount];
        国家文字.type="mapText";
        国家文字.x = x;
        国家文字.y = y;
        国家文字.width = 20;
        国家文字.height = 20;
        国家文字.setProperty("activatedBy",cityList[cityCount]+countryList[countryCount]+"DE");
        国家文字.setProperty("id",cityList[cityCount]+countryList[countryCount]);
        国家文字.setProperty("resetActivationAfter","1s");
        国家文字.setProperty("text",cityList[cityCount]+countryList[countryCount]);
        国家文字.setProperty("textColor",colorList[countryCount]);
        国家文字.setProperty("textSize","12");
        layer.addObject(国家文字);
        }
        cityCount++;
        if (cityCount >= cityList.length) 
        {
        cityCount=0;
        }
    }
});
