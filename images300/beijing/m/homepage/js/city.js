(function($){

	//栏目导航1
	$(".fen_nav>ul>li").mouseover(function(){$(this).css("position","relative");$(this).find(".downmenu").show();$("select").hide();})
	$(".fen_nav>ul>li").mouseleave(function(event){$(this).css("position","static");$(this).find(".downmenu").hide();$("select").show();event.stopPropagation();})
  
	//全国服务网络
	$("#companys").mouseover(function(){$(this).find(".xiala_box").show();})
	$("#companys").mouseleave(function(event){$(this).find(".xiala_box").hide();event.stopPropagation();})
	$(".xiala_box").prepend('<div class="earcap1"><p class="ear_cl">北京市</p><p class="ear_c2_s"><a target="_blank" href="http://beijing.300.cn/">北京</a></p><p class="ear_c2_s"><a target="_blank" href="http://beijing2.300.cn/">北京二分</a></p><p class="ear_cl">天津市</p><p class="ear_c2_s"><a target="_blank" href="http://tianjin.300.cn/">天津</a></p><p class="ear_cl">上海市</p><p class="ear_c2_s"><a target="_blank" href="http://shanghaipx.300.cn/">浦西</a></p><p class="ear_c2_s"><a target="_blank" href="http://shanghaipd.300.cn/">浦东</a></p><p class="ear_cl">重庆市</p><p class="ear_c2_s"><a target="_blank" href="http://chongqing.300.cn/">重庆</a></p><p class="ear_cl"> 黑龙江省</p><p class="ear_c2_s"><a target="_blank" href="http://haerbin.300.cn/">哈尔滨</a></p><p class="ear_c2_s"><a target="_blank" href="http://mudanjiang.300.cn/">牡丹江</a></p></div><div class="earcap1"><p class="ear_cl">辽宁省</p><p class="ear_c2_s"><a target="_blank" href="http://dalian.300.cn/">大连</a></p><p class="ear_c2_s"><a target="_blank" href="http://shenyang.300.cn/">沈阳</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinzhou.300.cn/">锦州</a></p><p class="ear_c2_s"><a target="_blank" href="http://yingkou.300.cn/">营口</a></p><p class="ear_cl">吉林省</p><p class="ear_c2_s"><a target="_blank" href="http://changchun.300.cn/">长春</a></p><p class="ear_cl">河北省</p><p class="ear_c2_s"><a target="_blank" href="http://shijiazhuang.300.cn/">石家庄</a></p><p class="ear_c2_s"><a target="_blank" href="http://tangshan.300.cn/">唐山</a></p><p class="ear_c2_s"><a target="_blank" href="http://baoding.300.cn/">保定</a></p><p class="ear_cl">山西省</p><p class="ear_c2_s"><a target="_blank" href="http://taiyuan.300.cn/">太原</a></p></div><div class="earcap1"><p class="ear_cl">内蒙古</p><p class="ear_c2_s"><a target="_blank" href="http://baotou.300.cn/">包头</a></p><p class="ear_cl">山东省</p><p class="ear_c2_s"><a target="_blank" href="http://qingdao.300.cn/">青岛</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinan.300.cn/">济南</a></p><p class="ear_c2_s"><a target="_blank" href="http://yantai.300.cn/">烟台</a></p><p class="ear_c2_s"><a target="_blank" href="http://weihai.300.cn/">威海</a></p><p class="ear_c2_s"><a target="_blank" href="http://zibo.300.cn/">淄博</a></p><p class="ear_c2_s"><a target="_blank" href="http://weifang.300.cn/">潍坊</a></p><p class="ear_c2_s"><a target="_blank" href="http://linyi.300.cn/">临沂</a></p><p class="ear_c2_s"><a target="_blank" href="http://dongying.300.cn/">东营</a></p></div><div class="earcap1"><p class="ear_cl">湖北省</p><p class="ear_c2_s"><a target="_blank" href="http://wuhan.300.cn/">武汉</a></p><p class="ear_c2_s"><a target="_blank" href="http://wuhan2.300.cn/">武汉二分</a></p><p class="ear_c2_s"><a target="_blank" href="http://yichang.300.cn/">宜昌</a></p><p class="ear_cl">湖南省</p><p class="ear_c2_s"><a target="_blank" href="http://changsha.300.cn/">长沙</a></p><p class="ear_cl">江西省</p><p class="ear_c2_s"><a target="_blank" href="http://nanchang.300.cn/">南昌</a></p><p class="ear_cl">河南省</p><p class="ear_c2_s"><a target="_blank" href="http://zhengzhou.300.cn/">郑州</a></p><p class="ear_c2_s"><a target="_blank" href="http://luoyang.300.cn/">洛阳</a></p></div><div class="earcap1"><p class="ear_cl">江苏省</p><p class="ear_c2_s"><a target="_blank" href="http://nanjing.300.cn/">南京</a></p><p class="ear_c2_s"><a target="_blank" href="http://changzhou.300.cn/">常州</a></p><p class="ear_c2_s"><a target="_blank" href="http://wuxi.300.cn/">无锡</a></p><p class="ear_c2_s"><a target="_blank" href="http://nantong.300.cn/">南通</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiangyin.300.cn/">江阴</a></p><p class="ear_c2_s"><a target="_blank" href="http://yangzhou.300.cn/">扬州</a></p><p class="ear_c2_s"><a target="_blank" href="http://suzhou.300.cn/">苏州</a></p><p class="ear_c2_s"><a target="_blank" href="http://kunshan.300.cn/">昆山</a></p><p class="ear_c2_s"><a target="_blank" href="http://changshu.300.cn/">常熟</p><p class="ear_c2_s"><a target="_blank" href="http://jstaizhou.300.cn/">泰州</a></p><p class="ear_cl">安徽省</p><p class="ear_c2_s"><a target="_blank" href="http://hefei.300.cn/">合肥</a></p></div><div class="earcap1"><p class="ear_cl">浙江省</p><p class="ear_c2_s"><a target="_blank" href="http://hangzhou.300.cn/">杭州</a></p><p class="ear_c2_s"><a target="_blank" href="http://ningbo.300.cn/">宁波</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinhua.300.cn/">金华</a></p><p class="ear_c2_s"><a target="_blank" href="http://yiwu.300.cn/">义乌</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiaxing.300.cn/">嘉兴</a></p><p class="ear_c2_s"><a target="_blank" href="http://shaoxing.300.cn/">绍兴</a></p><p class="ear_c2_s"><a target="_blank" href="http://wenzhou.300.cn/">温州</a></p><p class="ear_c2_s"><a target="_blank" href="http://taizhou.300.cn/">台州</a></p><p class="ear_cl">福建省</p><p class="ear_c2_s"><a target="_blank" href="http://xiamen.300.cn/">厦门</a></p><p class="ear_c2_s"><a target="_blank" href="http://fuzhou.300.cn/">福州</a></p><p class="ear_c2_s"><a target="_blank" href="http://quanzhou.300.cn/">泉州</a></p></div><div class="earcap1"><p class="ear_cl">广东省</p><p class="ear_c2_s"><a target="_blank" href="http://guangzhou.300.cn/">广州</a></p><p class="ear_c2_s"><a target="_blank" href="http://shenzhen.300.cn/">深圳</a></p><p class="ear_c2_s"><a target="_blank" href="http://huizhou.300.cn/">惠州</a></p><p class="ear_c2_s"><a target="_blank" href="http://shantou.300.cn/">汕头</a></p><p class="ear_c2_s"><a target="_blank" href="http://longgang.300.cn/">龙岗</a></p><p class="ear_c2_s"><a target="_blank" href="http://baoan.300.cn/">宝安</a></p><p class="ear_c2_s"><a target="_blank" href="http://dongguan.300.cn/">东莞</a></p><p class="ear_c2_s"><a target="_blank" href="http://humen.300.cn/">虎门</a></p><p class="ear_c2_s"><a target="_blank" href="http://foshan.300.cn/">佛山</a></p><p class="ear_c2_s"><a target="_blank" href="http://shunde.300.cn/">顺德</a></p><p class="ear_c2_s"><a target="_blank" href="http://zhongshan.300.cn/">中山</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiangmen.300.cn/">江门</a></p><p class="ear_c2_s"><a target="_blank" href="http://zhuhai.300.cn/">珠海</a></p></div><div class="earcap1"><p class="ear_cl">广西</p><p class="ear_c2_s"><a target="_blank" href="http://nanning.300.cn/">南宁</a></p><p class="ear_c2_s"><a target="_blank" href="http://liuzhou.300.cn/">柳州</a></p><p class="ear_cl">四川省</p><p class="ear_c2_s"><a target="_blank" href="http://chengdu.300.cn/">成都</a></p><p class="ear_c2_s"><a target="_blank" href="http://chengdu2.300.cn/">成都二分</a></p><p class="ear_c2_s"><a href="http://mianyang.300.cn/" target="_blank">绵阳</a></p><p class="ear_cl">陕西省</p><p class="ear_c2_s"><a target="_blank" href="http://xian.300.cn/">西安</a></p><p class="ear_cl">贵州省</p><p class="ear_c2_s"><a target="_blank" href="http://guiyang.300.cn/">贵阳</a></p><p class="ear_cl">云南省</p><p class="ear_c2_s"><a target="_blank" href="http://kunming.300.cn/">昆明</a></p></div>');



	//分公司首页折叠显示
	$(".zhanshi_tow li:eq(0)").addClass("now");
	$(".zhanshi_tow>ul>li").css('cursor','pointer').click(function(event){
		if(this==event.target){
			$(".zhanshi_tow>ul>li").removeClass("now");
			if($(".zhanshi_tow>ul>li.now").text()!=$(this).text()){$(this).addClass("now");}else{$(".zhanshi_tow>ul>li").removeClass("now")}
		}
	})

	//列表页无详情隐藏
	for(i=0;i<$(".textlist li blockquote").size();i++){if(trim($(".textlist li blockquote:eq("+i+")").text())!="[详情]"){$(".textlist li blockquote:eq("+i+")").show();}}

	//正文文字大小
	$(".xiao").click(function(){$(".textbox").css({ "font-size": "12px","line-height":"20px"});});
	$(".da").click(function(){$(".textbox").css({ "font-size": "14px","line-height":"24px"});});
	
	//当前栏目
	var mynav='您当前位置：<a href="../../../../../www.300.cn/index.htm"/*tpa=http://www.300.cn/*/>首页</a>';		//面包屑导航
	$(".subnav .subnavlist li").removeClass("over");
	$("#sortname").text(trim($("#sortname").text()))
	$(".subnav *").not("a").each(function(i){
		if(trim($(this).text())==$("#sortname").text()){
		if($("h2.title").text()=="常见问题"+$("#sortname").text() && i<30){return true;}
		if($(this).parents(".subnav").find(".subnavtit")){mynav+=" &gt; "+$(this).parents(".subnav").find(".subnavtit").html()};
		if($(this).parents(".secnav").find("h3")){mynav+=" &gt; "+$(this).parents(".secnav").find("h3").html();}
		if($(this).parent("ul")){$(this).addClass("over").parents(".subnav").show();mynav+=" &gt; "+$(this).html();}
		var sitesort=trim($(this).parents(".subnav").find(".subnavtit").text());
		$(".fen_nav>ul>li").each(function(){if($(this).find("a:eq(0)").text()==sitesort){$(this).addClass("checked");}})
		if($("h2.title").text()!="常见问题"+$("#sortname").text()){return false;}
		}
	})
	if(mynav=='您当前位置：<a href="../../../../../www.300.cn/index.htm"/*tpa=http://www.300.cn/*/>首页</a>'){mynav+=" &gt; "+$("#sortname").text();}
	//  $("#mynav").html(mynav);
	if($("#sortname").text()=="成功故事"){$(".tosearch form").attr("action","../../../../../www.300.cn/cgi/search/story.php.htm"/*tpa=http://www.300.cn/cgi/search/story.php*/)}
	
	//正文作者没有隐藏
	if($(".author").text()=="作者："){$(".author").hide()}
	$.fn.scrol=function(o){var defaults={prevs:'Previous',nexts:'Next',sctype:false,controls:"none",contid:"scro1",direct:"top",speed:10,auto:false,pause:0,tospeed:0,w:0,s:0,t:0,pages:0};var o=$.extend(defaults,o);this.each(function(){var obj=$(this);var ul=$(".scul",obj);var lis=$("li",obj);obj.css("overflow","hidden");if(o.direct=="left"){o.w=(lis.width()*lis.length);o.s=obj.width();o.t="margin-left";ul.css({"margin-left":"0","width":o.w*2});}else{o.w=ul.height();o.s=obj.height();o.t="margin-top";ul.css(o.t,"0");}o.pages=Math.ceil(o.w/o.s);if(!o.sctype){ul.append(ul.html());}if(o.controls=="number"){var html="<div id='page"+o.contid+"'>";for(var i=1;i<=o.pages;i++){html=html+"<span";if(i==1){html=html+" class='now'";}html=html+">"+i+"</span> ";}html=html+"</div>";$(obj).after(html);}if(o.controls=="next"){$(obj).before("<span id='prev"+o.contid+"'>"+o.prevs+"</span>");$(obj).after("<span id='next"+o.contid+"'>"+o.nexts+"</span>");}$("span#prev"+o.contid).css("cursor","pointer").click(function(){scro("prev",true);});$("span#next"+o.contid).css("cursor","pointer").click(function(){scro("next",true);});$("#page"+o.contid).find("span").css("cursor","pointer").click(function(){scro($(this).html(),true);});ul.mouseover(function(){if(o.pause==0){clearInterval(a);}});ul.mouseout(function(){if(o.pause==0){ascro();}});function scro(dir,clicked){if(!dir){dir="next";}if(ul.css(o.t)>=o.w){ul.css(o.t)=0;}o.tospeed=o.speed;if(dir=="prev"){if(!o.sctype&&parseInt(ul.css(o.t))==0){ul.css(t,"-"+o.w+"px");}tleft=parseInt(ul.css(o.t))+o.s;if(o.sctype&&tleft>0){tleft=0};}if(dir=="next"){if(!o.sctype&&parseInt(ul.css(o.t))==-o.w){ul.css(o.t,"0");}tleft=parseInt(ul.css(o.t))-o.s;if(o.sctype&&tleft<=-o.w){tleft=0;};if(tleft<=-o.w+o.s&&tleft>-o.w){tleft=-o.w+o.s;}}if(parseInt(dir)>0&&parseInt(dir)>0<=o.pages){tleft=-((parseInt(dir)-1)*o.s);}if(o.direct=="left"){ul.animate({marginLeft:tleft},o.tospeed);}else{ul.animate({marginTop:tleft},o.tospeed);}if(o.controls=="number"){$("#page"+o.contid+" span").removeClass("now");$("#page"+o.contid+" span:eq("+(-Math.ceil(tleft/o.s))+")").addClass("now");}if(tleft==0&&o.controls=="next"){$("span#prev"+o.contid+" *").hide()}else{$("span#prev"+o.contid+" *").show();}if(tleft==o.s-o.w&&o.controls=="next"){$("span#next"+o.contid+" *").hide()}else{$("span#next"+o.contid+" *").show();}if(clicked)clearTimeout(timeout);if(o.auto&&!clicked){timeout=setTimeout(function(){scro("next",false);},o.tospeed+o.pause);};}function ascro(){a=setInterval(function(){if(parseInt(ul.css(o.t))<=-o.w){ul.css(o.t,"0");}ul.css(o.t,parseInt(ul.css(o.t))-1+"px");},o.speed);}var timeout;if(o.auto){if(o.pause==0){timeout=setTimeout(function(){var a;ascro();});}else{timeout=setTimeout(function(){scro("next",false);},o.pause);}};});};
	$.fn.marquee=function(options){var opts=$.extend({},$.fn.marquee.defaults,options);return this.each(function(){var $marquee=$(this);var _scrollObj=$marquee.get(0);var scrollW=$marquee.width();var scrollH=$marquee.height();var $element=$marquee.children();var $kids=$element.children();var scrollSize=0;var _type=(opts.direction=='left'||opts.direction=='right')?1:0;$element.css(_type?'width':'height',10000);if(opts.isEqual){scrollSize=$kids[_type?'outerWidth':'outerHeight']()*$kids.length;}else{$kids.each(function(){scrollSize+=$(this)[_type?'outerWidth':'outerHeight']();});}if(scrollSize<(_type?scrollW:scrollH))return;$element.append($kids.clone()).css(_type?'width':'height',scrollSize*2);var numMoved=0;function scrollFunc(){var _dir=(opts.direction=='left'||opts.direction=='right')?'scrollLeft':'scrollTop';if(opts.loop>0){numMoved+=opts.scrollAmount;if(numMoved>scrollSize*opts.loop){_scrollObj[_dir]=0;return clearInterval(moveId);}}if(opts.direction=='left'||opts.direction=='up'){var newPos=_scrollObj[_dir]+opts.scrollAmount;if(newPos>=scrollSize){newPos-=scrollSize;}_scrollObj[_dir]=newPos;}else{var newPos=_scrollObj[_dir]-opts.scrollAmount;if(newPos<=0){newPos+=scrollSize;}_scrollObj[_dir]=newPos;}}var moveId=setInterval(scrollFunc,opts.scrollDelay);$marquee.hover(function(){clearInterval(moveId);},function(){clearInterval(moveId);moveId=setInterval(scrollFunc,opts.scrollDelay);});});};$.fn.marquee.defaults={isEqual:true,loop:0,direction:'left',scrollAmount:1,scrollDelay:20};$.fn.marquee.setDefaults=function(settings){$.extend($.fn.marquee.defaults,settings);};

	$(".colink").scrol({
		prevs:		'&nbsp;',
		nexts:		'&nbsp;',
		sctype:		true,		//true 往复 false 循环
		controls:	"next",		//none 按钮无 number 数字 next 前后
		contid:		"coop",		//控制按钮的id
		direct:		"left",
		speed:		2000,
		auto:		true,		//是否自动滚动
		pause:		5000		//翻页停顿时间，0不翻页
	});
	$(".mars").marquee({direction:'up',isEqual:false});
})(jQuery);

//字符处理;
//去左右空格; 
function trim(s){return rtrim(ltrim(s));}
//去左空格; 
function ltrim(s){return s.replace( /^\s*/, "");} 
//去右空格; 
function rtrim(s){return s.replace( /\s*$/, "");}

function opops(layer,pwidth){
//遮罩边框层 html代码
$("body").append('<div class="mask"></div><div class="floa"><div class="poplay"><b class="b1"><b class="b"></b></b><b class="b2"><b class="b"></b></b><b class="b3"></b><b class="b4"></b><b class="b5"></b><div class="popcont"></div><b class="b5"></b><b class="b4"></b><b class="b3"></b><b class="b2"><b class="b"></b></b><b class="b1"><b class="b"></b></b></div></div>')
$(".popcont").append($("#"+layer).html())
//^^^^添加弹出层html代码
$(".mask").css({"display":"block","height":document.documentElement.scrollHeight+"px"});
$(".floa").css({"display":"block","top":(document.documentElement.scrollTop+40)+"px"});
$(".poplay").width(pwidth); $(".mask").show();$(".floa").show();$(".floa .poptxt").show();
}
function popclose(){$(".mask").remove();$(".floa").remove();}