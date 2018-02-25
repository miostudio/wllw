var icebolt={};

icebolt._Method = {
	Array :	function(){
		this.indexOf = function(){
			for (i=0; i<this.length; i++){
				if (this[i]==arguments[0])
					return i;
			}
			return -1;
 	    };
		this.each = function(fn){
			for (var i=0,len=this.length; i<len; i++){
				fn(this[i],i);
			}
			return this;
		};
		this.sortByValue = function(t){
			for (var i=this.length; i>0; i>>=1){
				for(var j=0; j<i; j++){
					for (var x = i+j; x<this.length; x=x+i){
						var v = this[x];
						var y = x;
						while( y>=i && t?this[y-1]<v:this[y-i]>v){
							this[y] = this[y-i];
							y = y-i;
						}
						this[y] = v;
					}
				}		
			}
			return this;
		};
	},
	String : function(){
		this.trim = function(){
			var _argument = arguments[0]==undefined ? " ":arguments[0];
			if(typeof(_argument)=="string"){
				return this.replace(_argument == " "?/(^\s*)|(\s*$)/g : new RegExp("(^"+_argument+"*)|("+_argument+"*$)","g"),"");
			}else if(typeof(_argument)=="object"){
				return this.replace(_argument,"")
			}else if(typeof(_argument)=="number" && arguments.length>=1){
				return arguments.length==1? this.substring(arguments[0]) : this.substring(arguments[0],this.length-arguments[1]);
			}
		};
		this.stripTags = function(){
			return this.replace(/<\/?[^>]+>/gi, '');
		};
		this.cint = function(){
		    return this.replace(/\D/g,"")*1;
		};
		this.camelize = function(){
			return this.replace(/(-\S)/g,function($1){return $1.toUpperCase().substring(1,2)});
		};
		this.hasSubString = function(s,f){
			if(!f) f="";
			return (f+this+f).indexOf(f+s+f)==-1?false:true;
	    };
		this.hasSubStrInArr = function(){
			for(var i=0; i<arguments[0].length; i++){
				if(this.hasSubString(arguments[0][i])){return true;}
			}
			return false;
		};
		this.toXMLString = function(){
			var arr = this.split("&");
			var str = new StringBuffer();
			for (var i=0,len=arr.length; i<len; i++){
				var item = arr[i].split("=");
				str.append("<"+item[0]+"><![CDATA["+item[1]+"]]></"+item[0]+">");
			}
			var rootStr = arguments[0]?arguments[0]:"root";
			return "<"+rootStr+">"+str.toString()+"</"+rootStr+">";
		};
		this.format = function(){
			var p = arguments;
			return this.replace(/(\{\d+\})/g,function(){
				return p[arguments[0].replace(/\D/g,"")];
			});		
		};
		this.uniq = function(){			
			var arr = this.split("");
			var obj = {};
			for(var i=0,j; j=arr[i]; i++){
				obj[j] = i;
			}
			var s = [];
			for(var key in obj){
				s[obj[key]]=key;
			}
			return s.join("");
		};
	}
};

icebolt._Method.Array.apply(Array.prototype);
icebolt._Method.String.apply(String.prototype);

icebolt.Request = function(paras){
	var url = location.search;
	if(!url.hasSubString("?")){return "";}else{url=url.substring(1);};
	var obj = {};
	url.split("&").each(function(p){
		var k = p.split("=");
		var n = k[0].toLowerCase();		
		obj[n] = k[1] || "";
	});
	return obj[paras.toLowerCase()] || "";
};