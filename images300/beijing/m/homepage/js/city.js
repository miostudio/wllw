(function($){

	//��Ŀ����1
	$(".fen_nav>ul>li").mouseover(function(){$(this).css("position","relative");$(this).find(".downmenu").show();$("select").hide();})
	$(".fen_nav>ul>li").mouseleave(function(event){$(this).css("position","static");$(this).find(".downmenu").hide();$("select").show();event.stopPropagation();})
  
	//ȫ����������
	$("#companys").mouseover(function(){$(this).find(".xiala_box").show();})
	$("#companys").mouseleave(function(event){$(this).find(".xiala_box").hide();event.stopPropagation();})
	$(".xiala_box").prepend('<div class="earcap1"><p class="ear_cl">������</p><p class="ear_c2_s"><a target="_blank" href="http://beijing.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://beijing2.300.cn/">��������</a></p><p class="ear_cl">�����</p><p class="ear_c2_s"><a target="_blank" href="http://tianjin.300.cn/">���</a></p><p class="ear_cl">�Ϻ���</p><p class="ear_c2_s"><a target="_blank" href="http://shanghaipx.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://shanghaipd.300.cn/">�ֶ�</a></p><p class="ear_cl">������</p><p class="ear_c2_s"><a target="_blank" href="http://chongqing.300.cn/">����</a></p><p class="ear_cl"> ������ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://haerbin.300.cn/">������</a></p><p class="ear_c2_s"><a target="_blank" href="http://mudanjiang.300.cn/">ĵ����</a></p></div><div class="earcap1"><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://dalian.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://shenyang.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://yingkou.300.cn/">Ӫ��</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://changchun.300.cn/">����</a></p><p class="ear_cl">�ӱ�ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://shijiazhuang.300.cn/">ʯ��ׯ</a></p><p class="ear_c2_s"><a target="_blank" href="http://tangshan.300.cn/">��ɽ</a></p><p class="ear_c2_s"><a target="_blank" href="http://baoding.300.cn/">����</a></p><p class="ear_cl">ɽ��ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://taiyuan.300.cn/">̫ԭ</a></p></div><div class="earcap1"><p class="ear_cl">���ɹ�</p><p class="ear_c2_s"><a target="_blank" href="http://baotou.300.cn/">��ͷ</a></p><p class="ear_cl">ɽ��ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://qingdao.300.cn/">�ൺ</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinan.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://yantai.300.cn/">��̨</a></p><p class="ear_c2_s"><a target="_blank" href="http://weihai.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://zibo.300.cn/">�Ͳ�</a></p><p class="ear_c2_s"><a target="_blank" href="http://weifang.300.cn/">Ϋ��</a></p><p class="ear_c2_s"><a target="_blank" href="http://linyi.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://dongying.300.cn/">��Ӫ</a></p></div><div class="earcap1"><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://wuhan.300.cn/">�人</a></p><p class="ear_c2_s"><a target="_blank" href="http://wuhan2.300.cn/">�人����</a></p><p class="ear_c2_s"><a target="_blank" href="http://yichang.300.cn/">�˲�</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://changsha.300.cn/">��ɳ</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://nanchang.300.cn/">�ϲ�</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://zhengzhou.300.cn/">֣��</a></p><p class="ear_c2_s"><a target="_blank" href="http://luoyang.300.cn/">����</a></p></div><div class="earcap1"><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://nanjing.300.cn/">�Ͼ�</a></p><p class="ear_c2_s"><a target="_blank" href="http://changzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://wuxi.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://nantong.300.cn/">��ͨ</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiangyin.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://yangzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://suzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://kunshan.300.cn/">��ɽ</a></p><p class="ear_c2_s"><a target="_blank" href="http://changshu.300.cn/">����</p><p class="ear_c2_s"><a target="_blank" href="http://jstaizhou.300.cn/">̩��</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://hefei.300.cn/">�Ϸ�</a></p></div><div class="earcap1"><p class="ear_cl">�㽭ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://hangzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://ningbo.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://jinhua.300.cn/">��</a></p><p class="ear_c2_s"><a target="_blank" href="http://yiwu.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiaxing.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://shaoxing.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://wenzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://taizhou.300.cn/">̨��</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://xiamen.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://fuzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://quanzhou.300.cn/">Ȫ��</a></p></div><div class="earcap1"><p class="ear_cl">�㶫ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://guangzhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://shenzhen.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://huizhou.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://shantou.300.cn/">��ͷ</a></p><p class="ear_c2_s"><a target="_blank" href="http://longgang.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://baoan.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://dongguan.300.cn/">��ݸ</a></p><p class="ear_c2_s"><a target="_blank" href="http://humen.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://foshan.300.cn/">��ɽ</a></p><p class="ear_c2_s"><a target="_blank" href="http://shunde.300.cn/">˳��</a></p><p class="ear_c2_s"><a target="_blank" href="http://zhongshan.300.cn/">��ɽ</a></p><p class="ear_c2_s"><a target="_blank" href="http://jiangmen.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://zhuhai.300.cn/">�麣</a></p></div><div class="earcap1"><p class="ear_cl">����</p><p class="ear_c2_s"><a target="_blank" href="http://nanning.300.cn/">����</a></p><p class="ear_c2_s"><a target="_blank" href="http://liuzhou.300.cn/">����</a></p><p class="ear_cl">�Ĵ�ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://chengdu.300.cn/">�ɶ�</a></p><p class="ear_c2_s"><a target="_blank" href="http://chengdu2.300.cn/">�ɶ�����</a></p><p class="ear_c2_s"><a href="http://mianyang.300.cn/" target="_blank">����</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://xian.300.cn/">����</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://guiyang.300.cn/">����</a></p><p class="ear_cl">����ʡ</p><p class="ear_c2_s"><a target="_blank" href="http://kunming.300.cn/">����</a></p></div>');



	//�ֹ�˾��ҳ�۵���ʾ
	$(".zhanshi_tow li:eq(0)").addClass("now");
	$(".zhanshi_tow>ul>li").css('cursor','pointer').click(function(event){
		if(this==event.target){
			$(".zhanshi_tow>ul>li").removeClass("now");
			if($(".zhanshi_tow>ul>li.now").text()!=$(this).text()){$(this).addClass("now");}else{$(".zhanshi_tow>ul>li").removeClass("now")}
		}
	})

	//�б�ҳ����������
	for(i=0;i<$(".textlist li blockquote").size();i++){if(trim($(".textlist li blockquote:eq("+i+")").text())!="[����]"){$(".textlist li blockquote:eq("+i+")").show();}}

	//�������ִ�С
	$(".xiao").click(function(){$(".textbox").css({ "font-size": "12px","line-height":"20px"});});
	$(".da").click(function(){$(".textbox").css({ "font-size": "14px","line-height":"24px"});});
	
	//��ǰ��Ŀ
	var mynav='����ǰλ�ã�<a href="../../../../../www.300.cn/index.htm"/*tpa=http://www.300.cn/*/>��ҳ</a>';		//���м����
	$(".subnav .subnavlist li").removeClass("over");
	$("#sortname").text(trim($("#sortname").text()))
	$(".subnav *").not("a").each(function(i){
		if(trim($(this).text())==$("#sortname").text()){
		if($("h2.title").text()=="��������"+$("#sortname").text() && i<30){return true;}
		if($(this).parents(".subnav").find(".subnavtit")){mynav+=" &gt; "+$(this).parents(".subnav").find(".subnavtit").html()};
		if($(this).parents(".secnav").find("h3")){mynav+=" &gt; "+$(this).parents(".secnav").find("h3").html();}
		if($(this).parent("ul")){$(this).addClass("over").parents(".subnav").show();mynav+=" &gt; "+$(this).html();}
		var sitesort=trim($(this).parents(".subnav").find(".subnavtit").text());
		$(".fen_nav>ul>li").each(function(){if($(this).find("a:eq(0)").text()==sitesort){$(this).addClass("checked");}})
		if($("h2.title").text()!="��������"+$("#sortname").text()){return false;}
		}
	})
	if(mynav=='����ǰλ�ã�<a href="../../../../../www.300.cn/index.htm"/*tpa=http://www.300.cn/*/>��ҳ</a>'){mynav+=" &gt; "+$("#sortname").text();}
	//  $("#mynav").html(mynav);
	if($("#sortname").text()=="�ɹ�����"){$(".tosearch form").attr("action","../../../../../www.300.cn/cgi/search/story.php.htm"/*tpa=http://www.300.cn/cgi/search/story.php*/)}
	
	//��������û������
	if($(".author").text()=="���ߣ�"){$(".author").hide()}
	$.fn.scrol=function(o){var defaults={prevs:'Previous',nexts:'Next',sctype:false,controls:"none",contid:"scro1",direct:"top",speed:10,auto:false,pause:0,tospeed:0,w:0,s:0,t:0,pages:0};var o=$.extend(defaults,o);this.each(function(){var obj=$(this);var ul=$(".scul",obj);var lis=$("li",obj);obj.css("overflow","hidden");if(o.direct=="left"){o.w=(lis.width()*lis.length);o.s=obj.width();o.t="margin-left";ul.css({"margin-left":"0","width":o.w*2});}else{o.w=ul.height();o.s=obj.height();o.t="margin-top";ul.css(o.t,"0");}o.pages=Math.ceil(o.w/o.s);if(!o.sctype){ul.append(ul.html());}if(o.controls=="number"){var html="<div id='page"+o.contid+"'>";for(var i=1;i<=o.pages;i++){html=html+"<span";if(i==1){html=html+" class='now'";}html=html+">"+i+"</span> ";}html=html+"</div>";$(obj).after(html);}if(o.controls=="next"){$(obj).before("<span id='prev"+o.contid+"'>"+o.prevs+"</span>");$(obj).after("<span id='next"+o.contid+"'>"+o.nexts+"</span>");}$("span#prev"+o.contid).css("cursor","pointer").click(function(){scro("prev",true);});$("span#next"+o.contid).css("cursor","pointer").click(function(){scro("next",true);});$("#page"+o.contid).find("span").css("cursor","pointer").click(function(){scro($(this).html(),true);});ul.mouseover(function(){if(o.pause==0){clearInterval(a);}});ul.mouseout(function(){if(o.pause==0){ascro();}});function scro(dir,clicked){if(!dir){dir="next";}if(ul.css(o.t)>=o.w){ul.css(o.t)=0;}o.tospeed=o.speed;if(dir=="prev"){if(!o.sctype&&parseInt(ul.css(o.t))==0){ul.css(t,"-"+o.w+"px");}tleft=parseInt(ul.css(o.t))+o.s;if(o.sctype&&tleft>0){tleft=0};}if(dir=="next"){if(!o.sctype&&parseInt(ul.css(o.t))==-o.w){ul.css(o.t,"0");}tleft=parseInt(ul.css(o.t))-o.s;if(o.sctype&&tleft<=-o.w){tleft=0;};if(tleft<=-o.w+o.s&&tleft>-o.w){tleft=-o.w+o.s;}}if(parseInt(dir)>0&&parseInt(dir)>0<=o.pages){tleft=-((parseInt(dir)-1)*o.s);}if(o.direct=="left"){ul.animate({marginLeft:tleft},o.tospeed);}else{ul.animate({marginTop:tleft},o.tospeed);}if(o.controls=="number"){$("#page"+o.contid+" span").removeClass("now");$("#page"+o.contid+" span:eq("+(-Math.ceil(tleft/o.s))+")").addClass("now");}if(tleft==0&&o.controls=="next"){$("span#prev"+o.contid+" *").hide()}else{$("span#prev"+o.contid+" *").show();}if(tleft==o.s-o.w&&o.controls=="next"){$("span#next"+o.contid+" *").hide()}else{$("span#next"+o.contid+" *").show();}if(clicked)clearTimeout(timeout);if(o.auto&&!clicked){timeout=setTimeout(function(){scro("next",false);},o.tospeed+o.pause);};}function ascro(){a=setInterval(function(){if(parseInt(ul.css(o.t))<=-o.w){ul.css(o.t,"0");}ul.css(o.t,parseInt(ul.css(o.t))-1+"px");},o.speed);}var timeout;if(o.auto){if(o.pause==0){timeout=setTimeout(function(){var a;ascro();});}else{timeout=setTimeout(function(){scro("next",false);},o.pause);}};});};
	$.fn.marquee=function(options){var opts=$.extend({},$.fn.marquee.defaults,options);return this.each(function(){var $marquee=$(this);var _scrollObj=$marquee.get(0);var scrollW=$marquee.width();var scrollH=$marquee.height();var $element=$marquee.children();var $kids=$element.children();var scrollSize=0;var _type=(opts.direction=='left'||opts.direction=='right')?1:0;$element.css(_type?'width':'height',10000);if(opts.isEqual){scrollSize=$kids[_type?'outerWidth':'outerHeight']()*$kids.length;}else{$kids.each(function(){scrollSize+=$(this)[_type?'outerWidth':'outerHeight']();});}if(scrollSize<(_type?scrollW:scrollH))return;$element.append($kids.clone()).css(_type?'width':'height',scrollSize*2);var numMoved=0;function scrollFunc(){var _dir=(opts.direction=='left'||opts.direction=='right')?'scrollLeft':'scrollTop';if(opts.loop>0){numMoved+=opts.scrollAmount;if(numMoved>scrollSize*opts.loop){_scrollObj[_dir]=0;return clearInterval(moveId);}}if(opts.direction=='left'||opts.direction=='up'){var newPos=_scrollObj[_dir]+opts.scrollAmount;if(newPos>=scrollSize){newPos-=scrollSize;}_scrollObj[_dir]=newPos;}else{var newPos=_scrollObj[_dir]-opts.scrollAmount;if(newPos<=0){newPos+=scrollSize;}_scrollObj[_dir]=newPos;}}var moveId=setInterval(scrollFunc,opts.scrollDelay);$marquee.hover(function(){clearInterval(moveId);},function(){clearInterval(moveId);moveId=setInterval(scrollFunc,opts.scrollDelay);});});};$.fn.marquee.defaults={isEqual:true,loop:0,direction:'left',scrollAmount:1,scrollDelay:20};$.fn.marquee.setDefaults=function(settings){$.extend($.fn.marquee.defaults,settings);};

	$(".colink").scrol({
		prevs:		'&nbsp;',
		nexts:		'&nbsp;',
		sctype:		true,		//true ���� false ѭ��
		controls:	"next",		//none ��ť�� number ���� next ǰ��
		contid:		"coop",		//���ư�ť��id
		direct:		"left",
		speed:		2000,
		auto:		true,		//�Ƿ��Զ�����
		pause:		5000		//��ҳͣ��ʱ�䣬0����ҳ
	});
	$(".mars").marquee({direction:'up',isEqual:false});
})(jQuery);

//�ַ�����;
//ȥ���ҿո�; 
function trim(s){return rtrim(ltrim(s));}
//ȥ��ո�; 
function ltrim(s){return s.replace( /^\s*/, "");} 
//ȥ�ҿո�; 
function rtrim(s){return s.replace( /\s*$/, "");}

function opops(layer,pwidth){
//���ֱ߿�� html����
$("body").append('<div class="mask"></div><div class="floa"><div class="poplay"><b class="b1"><b class="b"></b></b><b class="b2"><b class="b"></b></b><b class="b3"></b><b class="b4"></b><b class="b5"></b><div class="popcont"></div><b class="b5"></b><b class="b4"></b><b class="b3"></b><b class="b2"><b class="b"></b></b><b class="b1"><b class="b"></b></b></div></div>')
$(".popcont").append($("#"+layer).html())
//^^^^��ӵ�����html����
$(".mask").css({"display":"block","height":document.documentElement.scrollHeight+"px"});
$(".floa").css({"display":"block","top":(document.documentElement.scrollTop+40)+"px"});
$(".poplay").width(pwidth); $(".mask").show();$(".floa").show();$(".floa .poptxt").show();
}
function popclose(){$(".mask").remove();$(".floa").remove();}