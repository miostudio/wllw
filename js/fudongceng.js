/*2013.07.15*/
function DlnewsTitBold(oParent,oTarget,oTextCon)	//米欧新闻标题加粗
{
	var oNewsId=document.getElementById(oParent);
	var aLiA=oNewsId.getElementsByTagName(oTarget);
	for(var i=0; i<aLiA.length; i++)
	{
		if(aLiA[i].innerHTML.replace(/\s+/g,"")==oTextCon.replace(/\s+/g,""))
		{
			aLiA[i].className='newTitBold';
		}
	}
}



function homePageBoxOver()		//300首页鼠标经过各业务模块时鼠标效果
{
	var oNew_top_image=document.getElementById('new_top_image');
	var aNtiLi=oNew_top_image.getElementsByTagName('li');
	//var oNew_endright=document.getElementById('new_endright');
	//var aNerDiv=oNew_endright.getElementsByTagName('div');
	
	for(var i=0; i<aNtiLi.length; i++)
	{
		aNtiLi[i].onmouseover=function()
		{
			for(var i=0; i<aNtiLi.length; i++)
			{
				aNtiLi[i].className='';
				this.className='cur';
			};
		};
	};
	
	/*
						for(var i=0; i<aNerDiv.length; i++)
						{
							aNerDiv[i].onmouseover=function()
							{
								for(var i=0; i<aNerDiv.length; i++)
								{
									aNerDiv[i].className='new_endright_ul';
									this.className='new_endright_ul cur';
								};
							};
						};
	*/
						
};


function DLnewsSoroll()	//首页米欧新闻横向滚动
{
	var oNew_scul=document.getElementById('new_scul');
	var oNsul=oNew_scul.getElementsByTagName('ul')[0];
	var aNsLi=oNsul.getElementsByTagName('li');
	var timer=null;
	
	oNsul.innerHTML+=oNsul.innerHTML;
	oNsul.style.width=aNsLi[0].offsetWidth*aNsLi.length+'px';
	
	function move(){
		if(oNsul.offsetLeft<-oNsul.offsetWidth/2)
		{
			oNsul.style.left='0';
		};
		oNsul.style.left=oNsul.offsetLeft-20+'px';
	};
	
	timer=setInterval(move,1000);
	
	oNsul.onmouseover=function()
	{
		clearInterval(timer);
	};
	oNsul.onmouseout=function()
	{
		timer=setInterval(move,1000);
	};
	
};
