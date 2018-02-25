(function($){
	
	//栏目导航
	$(".fen_nav>ul>li").mouseover(function(){$(this).css("position","relative");$(this).find(".downmenu").show();$("select").hide();});
	$(".fen_nav>ul>li").mouseleave(function(event){$(this).css("position","static");$(this).find(".downmenu").hide();$("select").show();event.stopPropagation();});
	
	

  //当前位置
  /*
  var mynav='您当前位置：<a href="../index.htm">首页</a>'; //面包屑导航
  $(".subnav .subnavlist li").removeClass("over");
  $("#sortname").text(trim($("#sortname").text()));
  $(".subnav *").not("a").each(function(i){
	if(trim($(this).text())==$("#sortname").text()){
		if($("h2.title").text()=="常见问题"+$("#sortname").text() && i<30){return true;}
		if($(this).parents(".subnav").find(".subnavtit").text()){mynav+=" &gt; "+$(this).parents(".subnav").find(".subnavtit").html()};
		if($(this).parents(".secnav").find("h3").text()){mynav+=" &gt; "+$(this).parents(".secnav").find("h3").html();}
		if($(this).parent("ul").text()){$(this).addClass("over");mynav+=" &gt; "+$(this).html();}
		$(this).parents(".subnav").show();
		var sitesort=trim($(this).parents(".subnav").find(".subnavtit").text());
		$(".fen_nav>ul>li").each(function(){if($(this).find("a:eq(0)").text()==sitesort){$(this).addClass("checked");}});
		if($("#sortname").text()=="首页"){$(".fen_nav>ul>li:eq(1)").addClass("checked");};
		if($("h2.title").text()!="常见问题"+$("#sortname").text()){return false;}
	}
  });
  
  if(mynav=='您当前位置：<a href="../index.htm">首页</a>'){
	mynav+=" &gt; "+$("#sortname").text();
	$(".fen_nav>ul>li").each(function(){if($(this).find("a:eq(0)").text()==$("#sortname").text()){$(this).addClass("checked");}});
  }
  $("#mynav").html(mynav);
  
  var needrss = /信息化讲堂/i;
  if(needrss.test(mynav)){$(".left .c_banner").show();}
  */
  
  //页签效果
  $(".tab .tabcont:first").show();
  $(".tab .tabnav li").css("cursor","pointer").mouseover(function(){
	$(this).parent(".tabnav").find("li").removeClass("now");
	$(this).addClass("now");
	$(this).parents(".tab").find(".tabcont").hide();
	$(this).parents(".tab").find(".tabcont:eq("+$(this).parent(".tabnav").find("li").index($(this))+")").show();
  });
  
  //图片滚动
  $.fn.scrol=function(o){var defaults={prevs:'Previous',nexts:'Next',sctype:false,controls:"none",contid:"scro1",direct:"top",speed:10,auto:false,pause:0,tospeed:0,w:0,s:0,t:0,pages:0};var o=$.extend(defaults,o);this.each(function(){var obj=$(this);var ul=$(".scul",obj);var lis=$("li",obj);obj.css("overflow","hidden");if(o.direct=="left"){o.w=(lis.width()*lis.length);o.s=obj.width();o.t="margin-left";ul.css({"margin-left":"0","width":o.w*2});}else{o.w=ul.height();o.s=obj.height();o.t="margin-top";ul.css(o.t,"0");}o.pages=Math.ceil(o.w/o.s);if(!o.sctype){ul.append(ul.html());}if(o.controls=="number"){var html="<div id='page"+o.contid+"'>";for(var i=1;i<=o.pages;i++){html=html+"<span";if(i==1){html=html+" class='now'";}html=html+">"+i+"</span> ";}html=html+"</div>";$(obj).after(html);}if(o.controls=="next"){$(obj).before("<span id='prev"+o.contid+"'>"+o.prevs+"</span>");$(obj).after("<span id='next"+o.contid+"'>"+o.nexts+"</span>");}$("span#prev"+o.contid).css("cursor","pointer").click(function(){scro("prev",true);});$("span#next"+o.contid).css("cursor","pointer").click(function(){scro("next",true);});$("#page"+o.contid).find("span").css("cursor","pointer").click(function(){scro($(this).html(),true);});ul.mouseover(function(){if(o.pause==0){clearInterval(a);}});ul.mouseout(function(){if(o.pause==0){ascro();}});function scro(dir,clicked){if(!dir){dir="next";}if(ul.css(o.t)>=o.w){ul.css(o.t)=0;}o.tospeed=o.speed;if(dir=="prev"){if(!o.sctype&&parseInt(ul.css(o.t))==0){ul.css(t,"-"+o.w+"px");}tleft=parseInt(ul.css(o.t))+o.s;if(o.sctype&&tleft>0){tleft=0};}if(dir=="next"){if(!o.sctype&&parseInt(ul.css(o.t))==-o.w){ul.css(o.t,"0");}tleft=parseInt(ul.css(o.t))-o.s;if(o.sctype&&tleft<=-o.w){tleft=0;};if(tleft<=-o.w+o.s&&tleft>-o.w){tleft=-o.w+o.s;}}if(parseInt(dir)>0&&parseInt(dir)>0<=o.pages){tleft=-((parseInt(dir)-1)*o.s);}if(o.direct=="left"){ul.animate({marginLeft:tleft},o.tospeed);}else{ul.animate({marginTop:tleft},o.tospeed);}if(o.controls=="number"){$("#page"+o.contid+" span").removeClass("now");$("#page"+o.contid+" span:eq("+(-Math.ceil(tleft/o.s))+")").addClass("now");}if(tleft==0&&o.controls=="next"){$("span#prev"+o.contid+" *").hide()}else{$("span#prev"+o.contid+" *").show();}if(tleft==o.s-o.w&&o.controls=="next"){$("span#next"+o.contid+" *").hide()}else{$("span#next"+o.contid+" *").show();}if(clicked)clearTimeout(timeout);if(o.auto&&!clicked){timeout=setTimeout(function(){scro("next",false);},o.tospeed+o.pause);};}function ascro(){a=setInterval(function(){if(parseInt(ul.css(o.t))<=-o.w){ul.css(o.t,"0");}ul.css(o.t,parseInt(ul.css(o.t))-1+"px");},o.speed);}var timeout;if(o.auto){if(o.pause==0){timeout=setTimeout(function(){var a;ascro();});}else{timeout=setTimeout(function(){scro("next",false);},o.pause);}};});};
$(".colink").scrol({
	prevs:		'&nbsp;',
	nexts:		'&nbsp;',
	sctype:		true,		//true 往复 false 循环
	controls:	"next",		//none 按钮无 number 数字 next 前后
	contid:		"coop",		//控制按钮的id
	direct:		"left",
	speed:		2000,
	auto:		false,		//是否自动滚动
	pause:		5000		//翻页停顿时间，0不翻页
  });
})(jQuery);


//字符处理; 
function trim(s){return rtrim(ltrim(s));}//去左右空格; 
function ltrim(s){return s.replace( /^\s*/, "");} //去左空格; 
function rtrim(s){return s.replace( /\s*$/, "");}//去右空格; 


function opops(layer,pwidth){
//遮罩边框层 html代码
$("body").append('<div class="mask"></div><div class="floa"><div class="poplay"><b class="b1"></b><div class="popcont"></div><b class="b1"></b></div></div>')
$(".popcont").append($("#"+layer).html())
//^^^^添加弹出层html代码
$(".mask").css({"display":"block","height":document.documentElement.scrollHeight+"px"});
$(".floa").css({"display":"block","top":(document.documentElement.scrollTop+40)+"px"});
$(".poplay").width(pwidth); $(".mask").show();$(".floa").show();$(".floa .poptxt").show();
}
function popclose(){$(".mask").remove();$(".floa").remove();$("select").show();}





//左右边浮动层：左电话，右QQ
function W(s){ document.write(s);}

if(   typeof(shouye)=='undefined'  ){
	W('		<!--左侧悬浮窗 开始-->		');
	W("		<div id=\"zleft\" style=\"width: 90px;height: 300px;position: fixed;_position: absolute;top: 25%;left: 1%; z-index:2;\"> <a href=\"http://www.wllwzl.com/fangan/\" target=\"_blank\"><img src=\"../images/ad_left.gif\" width=\"90\" border=\"0\"></a></div>		");
	W('		<!--左侧悬浮窗 end-->		');


	W('		<!--右侧QQ -->		');
	W('		<div id=\"qq\" style=\"position: fixed;right: 0;top: 200px;border: none; z-index:2;\"><a target=\"_blank\" href=\"tencent://message/?uin=531455554&amp;Site=http://www.wllwzl.com&amp;Menu=yes\"><img border=\"0\" src=\"../images/kf/QQon.jpg\" alt=\"点击这里给我发消息\" title=\"点击这里给我发消息\"></a></div>		');
	W('		<!--右侧QQ end -->		');
}