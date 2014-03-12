$(function() {
  if (typeof window.ichicolo === 'undefined') {
    window.ichicolo = {};
  }

  if (typeof window.ichicolo.index === 'undefined') {
    window.ichicolo.index = {};
  }

  if (typeof window.ichicolo.index.animations === 'undefined') {
    window.ichicolo.index.animations = {};
  }

  i = window.ichicolo.index.animations;
  
  i.dots = function () {
jQuery(function(f){
	var x=10
	  , v=0
	  , b=document.getElementById("main")
	  , u=f(document).width()
	  , o=f(document).height()
	  , q=Processing(b)
	  , l=10000
	  , k=0
	  , t=0
	  , s=0
	  , g=0
	  , e=0
	  , a=0
	  , c
	  , d=0
	  , h=[]
    ;

h = 0.8;

	h[0]=0;
	for(m=1;m<30;m++){h[m]=8000*m;}
	var w=false;components=[];
	var n=[];
	for(v=0;v<x;v++){n[v]={x:Math.random()*u,y:Math.random()*o,toX:u/2,toY:o,color:0,angle:Math.random()*Math.PI*2,size:1000,toSize:Math.random()*5+1,r:0,g:0,b:0,toR:Math.random()*0,toG:Math.random()*0,toB:Math.random()*0,flightMode:0};
	n[v].toX=n[v].x;
	n[v].toY=n[v].y;
	n[v].speedX=0;
	n[v].speedY=0;}
	var y=[function(){for(v=0;v<n.length;v++){var i=n[v];
	i.speedX=Math.cos(i.angle)*Math.random()*3;
	i.speedY=Math.sin(i.angle)*Math.random()*3;}}];
	var r=function j(){return{framecount:0,update:function(){t=t+(g-t)/100;s=s+(e-s)/100;
	for(v=0;v<n.length;v++){n[v].x=n[v].x+(n[v].toX-n[v].x)/100;n[v].y=n[v].y+(n[v].toY-n[v].y)/100;
	n[v].size=n[v].size+(n[v].toSize-n[v].size)/10;
	n[v].r=n[v].r+(n[v].toR-n[v].r)/1;
	n[v].g=n[v].g+(n[v].toG-n[v].g)/255;
	n[v].b=n[v].b+(n[v].toB-n[v].b)/1;}
	for(v=0;v<n.length;v++){var A=Math.abs(n[v].toX-l)*Math.abs(n[v].toX-l);
	var i=Math.abs(n[v].toY-k)*Math.abs(n[v].toY-k);
	var D=Math.sqrt(A+i);
	if(D<2000){if(n[v].flightMode===0){var C=Math.atan2(n[v].y-k,n[v].x-l)*180/Math.PI+Math.random()*180-90;n[v].degree=C;n[v].degreeSpeed=Math.random()*100+0.5;n[v].frame=0;}
	n[v].flightMode=1;}
	else{n[v].flightMode=0;}
	if(n[v].flightMode===0){n[v].toX+=n[v].speedX;n[v].toY+=n[v].speedY;
	if(n[v].x<0){n[v].x=u;n[v].toX=u;}if(n[v].x>u){n[v].x=0;n[v].toX=0;}
	if(n[v].y<0){n[v].y=o;n[v].toY=o;}if(n[v].y>o){n[v].y=0;n[v].toY=0;}}
	if(n[v].flightMode===1){n[v].toX=l+Math.cos((n[v].degree+n[v].frame)*90*Math.PI/180)*D;n[v].toY=k+Math.sin((n[v].degree+n[v].frame)*90*Math.PI/180)*D;
	n[v].frame+=n[v].degreeSpeed;
	n[v].degreeSpeed+=0.05;}n[v].toX+=Math.floor(t*n[v].size/30);n[v].toY+=Math.floor(s*n[v].size/30);}
	var B=Math.floor(Math.random()*n.length);
	var z=Math.floor(Math.random()*n.length);
	if(n[B].flightMode!=2){n[B].size=Math.random()*70;}
	if(n[z].flightMode!=2){n[z].size=Math.random()*10;}
	this.framecount++;
	if(d>=h.length){a=new Date();d=0;}c=new Date();
	if(c.getTime()-a.getTime()>=h[d]){d++;t=-Math.random()*100-50;s=-Math.random()*600-300;
	var p=Math.floor(Math.random()*y.length);
	y[p]();}},draw:function(){for(v=0;v<n.length;v++){q.fill(Math.floor(n[v].r),Math.floor(n[v].g),Math.floor(n[v].b));
	q.ellipse(n[v].x,n[v].y,n[v].size,n[v].size);}}};};
	components.push(new r());
	q.setup=function(){q.size(u,o);
	q.noStroke();q.frameRate(30);
	q.fill(0,0,0);a=new Date();};
	q.mouseMoved=function(){l=q.mouseX;k=q.mouseY;};
	q.draw=function(){if(w){for(var z=0;z<components.length;z++){components[z].update();}
	q.background(255,255,255,100);
	for(var p=0;p<components.length;p++){components[p].draw();}}};
	q.init();w=true;f(window).resize(function(){u=f(document).width();o=f(document).height();
	q.size(u,o);});});


(function(){this.Processing=function Processing(aElement,aCode){if(typeof aElement=="string")
aElement=document.getElementById(aElement);
var p=buildProcessing(aElement);
if(aCode)
p.init(aCode);
return p;};
function log(){try{console.log.apply(console,arguments);}
catch(e){try{opera.postError.apply(opera,arguments);}
catch(e){}}}
var parse=Processing.parse=function parse(aCode,p){aCode=aCode.replace(/\/\/ .*\n/g,"\n");
aCode=aCode.replace(/([^\s])%([^\s])/g,"$1 % $2");aCode=aCode.replace(/(?:static )?(\w+ )(\w+)\s*(\([^\)]*\)\s*{)/g,function(all,type,name,args){if(name=="if"||name=="for"||name=="while"){return all;}
else{return"Processing."+name+" = function "+name+args;}});
var intFloat=/(\n\s*(?:int|float)(?:\[\])?(?:\s*|[^\(]*?,\s*))([a-z]\w*)(;|,)/i;
while(intFloat.test(aCode)){aCode=aCode.replace(new RegExp(intFloat),function(all,type,name,sep){return type+" "+name+" = 0"+sep;});}
aCode=aCode.replace(/(?:static )?(\w+)((?:\[\])+| ) *(\w+)\[?\]?(\s*[=,;])/g,function(all,type,arr,name,sep){if(type=="return")
return all;else
return"var "+name+sep;});aCode=aCode.replace(/=\s*{((.|\s)*?)};/g,function(all,data){return"= ["+data.replace(/{/g,"[").replace(/}/g,"]")+"]";});
aCode=aCode.replace(/static\s*{((.|\n)*?)}/g,function(all,init){return init;});
aCode=aCode.replace(/super\(/g,"superMethod(");
var classes=["int","float","boolean","string"];
function ClassReplace(all,name,extend,vars,last){classes.push(name);
return"function "+name+"() {with(this){\n "+
(extend?"var __self=this;function superMethod(){extendClass(__self,arguments,"+extend+");}\n":"")+
vars.replace(/,\s?/g,";\n this.").replace(/\b(var |final |public )+\s*/g,"this.").replace(/\b(var |final |public )+\s*/g,"this.").replace(/this.(\w+);/g,"this.$1 = null;")+
(extend?"extendClass(this, "+extend+");\n":"")+"<CLASS "+name+" "+static+">"+(typeof last=="string"?last:name+"(");}
var matchClass=/<CLASS (\w+) (.*?)>/,m;
function toNumbers(str){var ret=[];str.replace(/(..)/g,function(str){ret.push(parseInt(str,16));});return ret;}
return aCode;};
function buildProcessing(curElement){var p={};
p.PI=Math.PI;
p.TWO_PI=2*p.PI;p.HALF_PI=p.PI/2;p.P3D=3;
p.CORNER=0;
p.RADIUS=1;
p.CENTER_RADIUS=1;
p.CENTER=2;
p.POLYGON=2;
p.QUADS=5;
p.TRIANGLES=6;
p.POINTS=7;
p.LINES=8;
p.TRIANGLE_STRIP=9;
p.TRIANGLE_FAN=4;
p.QUAD_STRIP=3;
p.CORNERS=10;
p.CLOSE=true;
p.RGB=1;
p.HSB=2;
p.CENTER=88888880;
p.CODED=88888888;
p.UP=88888870;
p.RIGHT=88888871;
p.DOWN=88888872;
p.LEFT=88888869;
p.codedKeys=[69,70,71,72];
var curContext=curElement.getContext("2d");
var doFill=true;
var doStroke=true;
var loopStarted=false;
var hasBackground=false;
var doLoop=true;
var looping=0;
var curRectMode=p.CORNER;
var curEllipseMode=p.CENTER;
var inSetup=false;
var inDraw=false;
var curBackground="rgba(0)";
var curFrameRate=1000;
var curShape=p.POLYGON;
var curShapeCount=0;
var curvePoints=[];
var curTightness=0;
var opacityRange=115;
var redRange=255;
var greenRange=255;
var blueRange=255;
var pathOpen=false;
var mousePressed=false;
var keyPressed=false;
var firstX,firstY,secondX,secondY,prevX,prevY;var curColorMode=p.RGB;
var curTint=-1;
var curTextSize=12;
var curTextFont="Arial";
var getLoaded=false;
var start=(new Date).getTime();
p.ln="";
p.glyphTable={};
p.pmouseX=0;
p.pmouseY=0;
p.mouseX=0;
p.mouseY=0;
p.mouseButton=0;
p.mouseDown=false;
p.mouseClicked=undefined;
p.mouseDragged=undefined;
p.mouseMoved=undefined;
p.mousePressed=undefined;
p.mouseReleased=undefined;
p.keyPressed=undefined;
p.keyReleased=undefined;
p.draw=undefined;
p.setup=undefined;
p.width=curElement.width-0;
p.height=curElement.height-0;
p.frameCount=0;
p.DefaultColor=function(aValue1,aValue2,aValue3){var tmpColorMode=curColorMode;
curColorMode=p.RGB;var c=p.color(((aValue1/255)*redRange),
((aValue2/255)*greenRange),
((aValue3/255)*blueRange));
curColorMode=tmpColorMode;return c;}
p.color=function color(aValue1,aValue2,aValue3,aValue4){var aColor="";
if(arguments.length==3){aColor=p.color(aValue1,aValue2,aValue3,opacityRange);}else if(arguments.length==4){var a=aValue4/opacityRange;a=isNaN(a)?1:a;
if(curColorMode==p.HSB){var rgb=HSBtoRGB(aValue1,aValue2,aValue3);
var r=rgb[0],g=rgb[1],b=rgb[2];}
else{var r=getColor(aValue1,redRange);
var g=getColor(aValue2,greenRange);
var b=getColor(aValue3,blueRange);}
aColor="rgba("+r+","+g+","+b+","+a+")";}
else if(typeof aValue1=="string"){aColor=aValue1;
if(arguments.length==2){var c=aColor.split(",");
c[3]=(aValue2/opacityRange)+")";aColor=c.join(",");}}
else if(arguments.length==2){aColor=p.color(aValue1,aValue1,aValue1,aValue2);}
else if(typeof aValue1=="number"){aColor=p.color(aValue1,aValue1,aValue1,opacityRange);}
else{aColor=p.color(redRange,greenRange,blueRange,opacityRange);}
function HSBtoRGB(h,s,b){h=(h/redRange)*360;s=(s/greenRange)*100;
b=(b/blueRange)*100;var br=Math.round(b/100*255);
if(s==0){return[br,br,br];}
else{var hue=h%360;var f=hue%60;
var p=Math.round((b*(100-s))/10000*255);var q=Math.round((b*(6000-s*f))/600000*255);
var t=Math.round((b*(6000-s*(60-f)))/600000*255);switch(Math.floor(hue/60)){case 0:return[br,t,p];case 1:return[q,br,p];
case 2:return[p,br,t];
case 3:return[p,q,br];
case 4:return[t,p,br];
case 5:return[br,p,q];}}}
function getColor(aValue,range){return Math.round(255*(aValue/range));}
return aColor;}
p.lerpColor=function lerpColor(c1,c2,amt){var colors1=p.color(c1).split(",");
aColor="rgba("+r+","+g+","+b+","+a+")";
return aColor;}
p.nf=function(num,pad){var str=""+num;while(pad-str.length)
str="0"+str;
return str;};
p.AniSprite=function(prefix,frames){this.images=[];
for(var i=0;i<frames;i++){this.images.push(prefix+p.nf(i,(""+frames).length)+".gif");}
this.display=function(x,y){p.image(this.images[this.pos],x,y);
if(++this.pos>=frames)
this.pos=0;};
this.getWidth=function(){return getImage(this.images[0]).width;};
this.getHeight=function(){return getImage(this.images[0]).height;};};
function buildImageObject(obj){var pixels=obj.data;
var data=p.createImage(obj.width,obj.height);
if(data.__defineGetter__&&data.__lookupGetter__&&!data.__lookupGetter__("pixels")){var pixelsDone;data.__defineGetter__("pixels",function(){if(pixelsDone)
return pixelsDone;pixelsDone=[];
for(var i=0;i<pixels.length;i+=4){pixelsDone.push(p.color(pixels[i],pixels[i+1],pixels[i+2],pixels[i+3]));}
return pixelsDone;});}
else{data.pixels=[];
for(var i=0;i<pixels.length;i+=4){data.pixels.push(p.color(pixels[i],pixels[i+1],pixels[i+2],pixels[i+3]));}}
return data;}
p.createGraphics=function createGraphics(w,h){var canvas=document.createElement("canvas");
var data=buildImageObject(context.getImageData(0,0,w,h));
data.img=img;return data;};
p.loadFont=function loadFont(name){if(name.indexOf(".svg")==-1){return{name:name,width:function(str){if(curContext.mozMeasureText)
return curContext.mozMeasureText(typeof str=="number"?String.fromCharCode(str):str)/curTextSize;
else
return 0;}};}else{var font=p.loadGlyphs(name);
return{name:name,glyph:true,units_per_em:font.units_per_em,horiz_adv_x:1/font.units_per_em*font.horiz_adv_x,ascent:font.ascent,descent:font.descent,width:function(str){var width=0;var len=str.length;for(var i=0;i<len;i++){try{width+=parseFloat(p.glyphLook(p.glyphTable[name],str[i]).horiz_adv_x);}
catch(e){;}}
return width/p.glyphTable[name].units_per_em;}}}};
p.textFont=function textFont(name,size){curTextFont=name;p.textSize(size);};
p.textSize=function textSize(size){if(size){curTextSize=size;}};
p.textAlign=function textAlign(){};
p.glyphLook=function glyphLook(font,chr){try{switch(chr){case"1":return font["one"];
default:return font[chr];break;}}catch(e){;}}
p.text=function text(str,x,y){if(!curTextFont.glyph){if(str&&curContext.mozDrawText){curContext.save();curContext.mozTextStyle=curTextSize+"px "+curTextFont.name;curContext.translate(x,y);
curContext.mozDrawText(typeof str=="number"?String.fromCharCode(str):str);
curContext.restore();}}else{var font=p.glyphTable[curTextFont.name];
curContext.save();
curContext.translate(x,y+curTextSize);
var upem=font["units_per_em"];
var newScale=1/upem*curTextSize;curContext.scale(newScale,newScale);
var len=str.length;for(var i=0;i<len;i++){try{p.glyphLook(font,str[i]).draw();}
catch(e){;}}
curContext.restore();}};
p.loadGlyphs=function loadGlyph(url){var loadXML=function loadXML(){try{var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");}
catch(e){try{xmlDoc=document.implementation.createDocument("","",null);}
catch(e){p.println(e.message);return;}}
try{xmlDoc.async=false;
xmlDoc.load(url);
parse(xmlDoc.getElementsByTagName("svg")[0]);}
catch(e){try{try{console.log(e)}catch(e){alert(e);}
var xmlhttp=new window.XMLHttpRequest();
xmlhttp.open("GET",url,false);
xmlhttp.send(null);
parse(xmlhttp.responseXML.documentElement);}catch(e){}}}
var regex=function regex(needle,hay){var regexp=new RegExp(needle,"g");
var i=0;var results=[];
while(results[i]=regexp.exec(hay)){i++;}
return results;}
var parse=function parse(svg){var font=svg.getElementsByTagName("font");
p.glyphTable[url]["horiz_adv_x"]=font[0].getAttribute("horiz-adv-x");
var font_face=svg.getElementsByTagName("font-face")[0];
p.glyphTable[url]["units_per_em"]=parseFloat(font_face.getAttribute("units-per-em"));
p.glyphTable[url]["ascent"]=parseFloat(font_face.getAttribute("ascent"));
p.glyphTable[url]["descent"]=parseFloat(font_face.getAttribute("descent"));
var getXY="[0-9\-]+";
var glyph=svg.getElementsByTagName("glyph");
var len=glyph.length;
for(var i=0;i<len;i++){var unicode=glyph[i].getAttribute("unicode");
var name=glyph[i].getAttribute("glyph-name");
var horiz_adv_x=glyph[i].getAttribute("horiz-adv-x");
if(horiz_adv_x==null){var horiz_adv_x=p.glyphTable[url]['horiz_adv_x'];}
var buildPath=function buildPath(d){var c=regex("[A-Za-z][0-9\- ]+|Z",d);
var path="var path={draw:function(){curContext.beginPath();";
var x=0,y=0,cx=0,cy=0,nx=0,ny=0,d=0,a=0,lastCom="";
var lenC=c.length-1;
for(var j=0;j<lenC;j++){var com=c[j][0];
var xy=regex(getXY,com);
switch(com[0]){case"M":x=parseFloat(xy[0][0]);
y=parseFloat(xy[1][0]);
path+="curContext.moveTo("+(x)+","+(-y)+");";
break;
case"L":x=parseFloat(xy[0][0]);
y=parseFloat(xy[1][0]);
path+="curContext.lineTo("+(x)+","+(-y)+");";
break;
case"H":x=parseFloat(xy[0][0]);
path+="curContext.lineTo("+(x)+","+(-y)+");";
break;
case"V":y=parseFloat(xy[0][0]);
path+="curContext.lineTo("+(x)+","+(-y)+");";
break;
case"T":nx=parseFloat(xy[0][0]);
ny=parseFloat(xy[1][0]);
if(lastCom=="Q"||lastCom=="T"){d=Math.sqrt(Math.pow(x-cx,2)+Math.pow(cy-y,2));
a=Math.PI+Math.atan2(cx-x,cy-y);
cx=x+(Math.sin(a)*(d));
cy=y+(Math.cos(a)*(d));}else{cx=x;cy=y;}
path+="curContext.quadraticCurveTo("+(cx)+","+(-cy)+","+(nx)+","+(-ny)+");";
x=nx;
y=ny;
break;
case"Z":path+="curContext.closePath();";break;}
lastCom=com[0];}
path+="curContext.translate("+(horiz_adv_x)+",0);";
path+="doStroke?curContext.stroke():0;";
path+="doFill?curContext.fill():0;";
path+="}}";return path;}
var d=glyph[i].getAttribute("d");
if(d!==undefined){var path=buildPath(d);
eval(path);
p.glyphTable[url][name]={name:name,unicode:unicode,horiz_adv_x:horiz_adv_x,draw:path.draw}}}}
p.glyphTable[url]={};
loadXML(url);
return p.glyphTable[url];}
p.lnPrinted=function lnPrinted(){};
p.printed=function printed(){};
p.println=function println(){var Caller=arguments.callee.caller.name.toString();
if(arguments.length>1){Caller!="print"?p.ln=arguments:p.ln=arguments[0];}else{p.ln=arguments[0];}
Caller=="print"?p.printed(arguments):p.lnPrinted();};
p.print=function print(){p.println(arguments[0])};
p.char=function char(key){return key;};
p.map=function map(value,istart,istop,ostart,ostop){return ostart+(ostop-ostart)*((value-istart)/(istop-istart));};
String.prototype.replaceAll=function(re,replace){return this.replace(new RegExp(re,"g"),replace);};
p.Point=function Point(x,y){this.x=x;
this.y=y;
this.copy=function(){return new Point(x,y);}};
p.Random=function(){var haveNextNextGaussian=false;
var nextNextGaussian;this.nextGaussian=function(){if(haveNextNextGaussian){haveNextNextGaussian=false;
return nextNextGaussian;}
else{var v1,v2,s;
do{v1=2*p.random(1)-1;v2=2*p.random(1)-1;s=v1*v1+v2*v2;}
while(s>=1||s==0);
var multiplier=Math.sqrt(-2*Math.log(s)/s);
nextNextGaussian=v2*multiplier;haveNextNextGaussian=true;return v1*multiplier;}};};
p.ArrayList=function ArrayList(size,size2,size3){var array=new Array(0|size);
if(size2){for(var i=0;i<size;i++){array[i]=[];
for(var j=0;j<size2;j++){var a=array[i][j]=size3?new Array(size3):0;
for(var k=0;k<size3;k++){a[k]=0;}}}}else{for(var i=0;i<size;i++){array[i]=0;}}
array.size=function(){return this.length;};
array.get=function(i){return this[i];};
array.remove=function(i){return this.splice(i,1);};
array.add=function(item){return this.push(item);};
array.clone=function(){var a=new ArrayList(size);
for(var i=0;i<size;i++){a[i]=this[i];}
return a;};
array.isEmpty=function(){return!this.length;};
array.clear=function(){this.length=0;};return array;};
p.colorMode=function colorMode(mode,range1,range2,range3,range4){curColorMode=mode;
if(arguments.length>=4){redRange=range1;greenRange=range2;blueRange=range3;}
if(arguments.length==5){opacityRange=range4;}
if(arguments.length==2){p.colorMode(mode,range1,range1,range1,range1);}};
p.beginShape=function beginShape(type){curShape=type;curShapeCount=0;curvePoints=[];};
p.endShape=function endShape(close){if(curShapeCount!=0){if(close||doFill)
curContext.lineTo(firstX,firstY);
if(doStroke)
curContext.stroke();
curContext.closePath();
curShapeCount=0;pathOpen=false;}
if(pathOpen){if(doFill)
curContext.fill();
if(doStroke)
curContext.stroke();
curContext.closePath();
curShapeCount=0;
pathOpen=false;}};
p.vertex=function vertex(x,y,x2,y2,x3,y3){if(curShapeCount==0&&curShape!=p.POINTS){pathOpen=true;curContext.beginPath();
curContext.moveTo(x,y);
firstX=x;firstY=y;}
else{if(curShape==p.POINTS){p.point(x,y);}
else if(arguments.length==2){if(curShape!=p.QUAD_STRIP||curShapeCount!=2)
if(curShape==p.QUAD_STRIP){firstX=secondX;
firstY=secondY;secondX=prevX;secondY=prevY;}}else if(arguments.length==4){if(curShapeCount>1){curContext.moveTo(prevX,prevY);
curContext.quadraticCurveTo(firstX,firstY,x,y);
curShapeCount=1;}}else if(arguments.length==6){curContext.bezierCurveTo(x,y,x2,y2,x3,y3);}}
prevX=x;
prevY=y;
curShapeCount++;
if(curShape==p.LINES&&curShapeCount==2||(curShape==p.TRIANGLES)&&curShapeCount==3||(curShape==p.QUADS)&&curShapeCount==4){p.endShape(p.CLOSE);}};
p.imageMode=function(){};
p.ellipseMode=function ellipseMode(aEllipseMode){curEllipseMode=aEllipseMode;};
p.dist=function dist(x1,y1,x2,y2){return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));};
p.year=function year(){return(new Date).getYear()+1900;};
p.month=function month(){return(new Date).getMonth();};
p.day=function day(){return(new Date).getDay();};
p.hour=function hour(){return(new Date).getHours();};
p.minute=function minute(){return(new Date).getMinutes();};
p.second=function second(){return(new Date).getSeconds();};
p.millis=function millis(){return(new Date).getTime()-start;};
p.ortho=function ortho(){};
p.translate=function translate(x,y){curContext.translate(x,y);};
p.scale=function scale(x,y){curContext.scale(x,y||x);};
p.rotate=function rotate(aAngle){curContext.rotate(aAngle);};
p.pushMatrix=function pushMatrix(){curContext.save();};
p.popMatrix=function popMatrix(){curContext.restore();};
p.redraw=function redraw(){if(hasBackground){p.background();}
p.frameCount++;
inDraw=true;
p.pushMatrix();
p.draw();
p.popMatrix();
inDraw=false;};
p.loop=function loop(){if(loopStarted)
return;
looping=setInterval(function(){try{p.redraw();}
catch(e){clearInterval(looping);throw e;}},1000/curFrameRate);
loopStarted=true;};
p.frameRate=function frameRate(aRate){curFrameRate=aRate;};
p.background=function background(img){if(arguments.length){if(img&&img.img){curBackground=img;}
else{curBackground=p.color.apply(this,arguments);}}
if(curBackground.img){p.image(curBackground,0,0);}
else{var oldFill=curContext.fillStyle;
curContext.fillStyle=curBackground+"";
curContext.fillRect(0,0,p.width,p.height);
curContext.fillStyle=oldFill;}};
p.clear=function clear(x,y,width,height){arguments.length==0?curContext.clearRect(0,0,p.width,p.height):curContext.clearRect(x,y,width,height);}
p.str=function str(aNumber){return aNumber+'';}
p.sq=function sq(aNumber){return aNumber*aNumber;};
p.sqrt=function sqrt(aNumber){return Math.sqrt(aNumber);};
p.ngsqrt=function ngsqrt(aNumber){if(aNumber<=0){return Math.sqrt(-aNumber);}
else{return Math.sqrt(aNumber);}};
p.int=function int(aNumber){return Math.floor(aNumber);};
p.min=function min(aNumber,aNumber2){return Math.min(aNumber,aNumber2);};
p.max=function max(aNumber,aNumber2){return Math.max(aNumber,aNumber2);};
p.ceil=function ceil(aNumber){return Math.ceil(aNumber);};
p.round=function round(aNumber){return Math.round(aNumber);};
p.norm=function norm(aNumber,low,high){var range=high-low;
return((1/range)*aNumber)-((1/range)*low);};
p.lerp=function lerp(value1,value2,amt){var range=value2-value1;return(range*amt)+value1;}
p.floor=function floor(aNumber){return Math.floor(aNumber);};
p.float=function float(aNumber){return parseFloat(aNumber);};
p.byte=function byte(aNumber){return aNumber||0;};
p.random=function random(aMin,aMax){return arguments.length==2?aMin+(Math.random()*(aMax-aMin)):Math.random()*aMin;};
p.noise=function(x,y,z){return arguments.length>=2?PerlinNoise_2D(x,y):PerlinNoise_2D(x,x);};
function Noise(x,y){var n=x+y*57;n=(n<<13)^n;return Math.abs(1.0-(((n*((n*n*15731)+789221)+1376312589)&0x7fffffff)/1073741824.0));};function SmoothedNoise(x,y){var corners=(Noise(x-1,y-1)+Noise(x+1,y-1)+Noise(x-1,y+1)+Noise(x+1,y+1))/16;
var sides=(Noise(x-1,y)+Noise(x+1,y)+Noise(x,y-1)+Noise(x,y+1))/8;var center=Noise(x,y)/4;
return corners+sides+center;};
function InterpolatedNoise(x,y){var integer_X=Math.floor(x);
var fractional_X=x-integer_X;
var integer_Y=Math.floor(y);
var fractional_Y=y-integer_Y;
var v1=SmoothedNoise(integer_X,integer_Y);
var v2=SmoothedNoise(integer_X+1,integer_Y);
var v3=SmoothedNoise(integer_X,integer_Y+1);
var v4=SmoothedNoise(integer_X+1,integer_Y+1);
var i1=Interpolate(v1,v2,fractional_X);
var i2=Interpolate(v3,v4,fractional_X);
return Interpolate(i1,i2,fractional_Y);}
function PerlinNoise_2D(x,y){var total=0;
var p=0.25;
var n=3;
for(var i=0;i<=n;i++){var frequency=Math.pow(2,i);
var amplitude=Math.pow(p,i);
total=total+InterpolatedNoise(x*frequency,y*frequency)*amplitude;}
return total;}
function Interpolate(a,b,x){var ft=x*p.PI;var f=(1-p.cos(ft))*.5;return a*(1-f)+b*f;}
p.abs=function abs(aNumber){return Math.abs(aNumber);};
p.cos=function cos(aNumber){return Math.cos(aNumber);};
p.sin=function sin(aNumber){return Math.sin(aNumber);};
p.pow=function pow(aNumber,aExponent){return Math.pow(aNumber,aExponent);};
p.constrain=function constrain(aNumber,aMin,aMax){return Math.min(Math.max(aNumber,aMin),aMax);};
p.sqrt=function sqrt(aNumber){return Math.sqrt(aNumber);};
p.atan2=function atan2(aNumber,aNumber2){return Math.atan2(aNumber,aNumber2);};
p.radians=function radians(aAngle){return(aAngle/180)*p.PI;};p.degrees=function degrees(aAngle){aAngle=(aAngle*180)/p.PI;
if(aAngle<0){aAngle=360+aAngle}
return aAngle;};
p.size=function size(aWidth,aHeight){var fillStyle=curContext.fillStyle;
var strokeStyle=curContext.strokeStyle;
curElement.width=p.width=aWidth;
curElement.height=p.height=aHeight;      <!--消すと画面が拡大される-->
curContext.fillStyle=fillStyle;
curContext.strokeStyle=strokeStyle;};
p.noStroke=function noStroke(){doStroke=false;};
p.noFill=function noFill(){doFill=false;};
p.smooth=function smooth(){};
p.noSmooth=function noSmooth(){};
p.noLoop=function noLoop(){doLoop=false;};
p.fill=function fill(){doFill=true;curContext.fillStyle=p.color.apply(this,arguments);};
p.stroke=function stroke(){doStroke=true;
curContext.strokeStyle=p.color.apply(this,arguments);};
p.strokeWeight=function strokeWeight(w){curContext.lineWidth=w;};
p.point=function point(x,y){var oldFill=curContext.fillStyle;
curContext.fillStyle=curContext.strokeStyle;
curContext.fillRect(Math.round(x),Math.round(y),1,1);curContext.fillStyle=oldFill;};
p.get=function get(x,y){if(arguments.length==0){var c=p.createGraphics(p.width,p.height);
c.image(curContext,0,0);return c;}
if(!getLoaded){getLoaded=buildImageObject(curContext.getImageData(0,0,p.width,p.height));}
return getLoaded.get(x,y);};
p.set=function set(x,y,obj){if(obj&&obj.img){p.image(obj,x,y);}
else{var oldFill=curContext.fillStyle;
var color=obj;curContext.fillStyle=color;
curContext.fillRect(Math.round(x),Math.round(y),1,1);
curContext.fillStyle=oldFill;}};
p.arc=function arc(x,y,width,height,start,stop){if(width<=0)
return;
if(curEllipseMode==p.CORNER){x+=width/2;y+=height/2;}
curContext.moveTo(x,y);
curContext.beginPath();
curContext.arc(x,y,curEllipseMode==p.CENTER_RADIUS?width:width/2,start,stop,false);
};
p.line=function line(x1,y1,x2,y2){curContext.lineCap="round";
curContext.beginPath();
curContext.moveTo(x1||0,y1||0);
curContext.lineTo(x2||0,y2||0);
curContext.stroke();
curContext.closePath();};
p.bezier=function bezier(x1,y1,x2,y2,x3,y3,x4,y4){curContext.lineCap="butt";curContext.beginPath();curContext.moveTo(x1,y1);
curContext.bezierCurveTo(x2,y2,x3,y3,x4,y4);
curContext.stroke();
curContext.closePath();};
p.triangle=function triangle(x1,y1,x2,y2,x3,y3){p.beginShape();
p.vertex(x1,y1);
p.vertex(x2,y2);
p.vertex(x3,y3);
p.endShape();};
p.quad=function quad(x1,y1,x2,y2,x3,y3,x4,y4){curContext.lineCap="square";p.beginShape();
p.vertex(x1,y1);
p.vertex(x2,y2);
p.vertex(x3,y3);
p.vertex(x4,y4);
p.endShape();};
p.rect=function rect(x,y,width,height){if(width==0&&height==0)
return;
curContext.beginPath();
var offsetStart=0;
var offsetEnd=0;
if(doStroke)
curContext.stroke();
curContext.closePath();};
p.ellipse=function ellipse(x,y,width,height){x=x||0;y=y||0;
if(width<=0&&height<=0)
return;
curContext.beginPath();
if(curEllipseMode==p.RADIUS){width*=2;height*=2;}
var offsetStart=0;
if(width==height){curContext.arc(x-offsetStart,y-offsetStart,width/2,0,Math.PI*2,false);}else{var w=width/2;
curContext.moveTo(x+w,y);
curContext.bezierCurveTo(x+w,y-c_y,x+c_x,y-h,x,y-h);
curContext.bezierCurveTo(x-c_x,y-h,x-w,y-c_y,x-w,y);
curContext.bezierCurveTo(x-w,y+c_y,x-c_x,y+h,x,y+h);
curContext.bezierCurveTo(x+c_x,y+h,x+w,y+c_y,x+w,y);}
if(doFill)
curContext.fill();
if(doStroke)
curContext.stroke();
curContext.closePath();};
p.cursor=function(mode){document.body.style.cursor=mode;}
p.link=function(href,target){window.location=href;};
p.loadPixels=function(){p.pixels=buildImageObject(curContext.getImageData(0,0,p.width,p.height)).pixels;};
p.updatePixels=function(){var colors=/(\d+),(\d+),(\d+),(\d+)/;
var data=pixels.data;
var pos=0;
for(var i=0,l=p.pixels.length;i<l;i++){var c=(p.pixels[i]||"rgba(0,0,0,1)").match(colors);
data[pos]=parseInt(c[1]);
data[pos+1]=parseInt(c[2]);
data[pos+2]=parseInt(c[3]);
data[pos+3]=parseFloat(c[4])*255;pos+=4;}
curContext.putImageData(pixels,0,0);};
p.extendClass=function extendClass(obj,args,fn){if(arguments.length==3){fn.apply(obj,args);}
else{args.call(obj);}};
p.addMethod=function addMethod(object,name,fn){if(object[name]){var args=fn.length;
var oldfn=object[name];
object[name]=function(){if(arguments.length==args)
return fn.apply(this,arguments);
else
return oldfn.apply(this,arguments);};}else{object[name]=fn;}};
p.init=function init(code){p.stroke(0);
p.fill(255);curContext.translate(0.5,0.5);
if(code){(function(Processing){with(p){eval(parse(code,p));}})(p);}
if(p.setup){inSetup=true;p.setup();}
inSetup=false;
if(p.draw){if(!doLoop){p.redraw();}else{p.loop();}}
attach(curElement,"mousedown",function(e){var scrollX=window.scrollX!=null?window.scrollX:window.pageXOffset;
var scrollY=window.scrollY!=null?window.scrollY:window.pageYOffset;
p.pmouseX=p.mouseX;
p.pmouseY=p.mouseY;
p.mouseX=e.clientX-curElement.offsetLeft+scrollX;
p.mouseY=e.clientY-curElement.offsetTop+scrollY;
if(p.mouseMoved){p.mouseMoved();}                               <!--マウスポイントの制御-->
if(mousePressed&&p.mouseDragged){p.mouseDragged();}});
attach(curElement,"mouseout",function(e){p.cursor("auto");});
attach(curElement,"mousedown",function(e){mousePressed=true;switch(e.which){case 1:p.mouseButton=p.LEFT;
break;
case 2:p.mouseButton=p.CENTER;
break;
case 3:p.mouseButton=p.RIGHT;
break;}
p.mouseDown=true;if(typeof p.mousePressed=="function"){p.mousePressed();}
else{p.mousePressed=true;}});
attach(curElement,"contextmenu",function(e){e.preventDefault();
e.stopPropagation();});
attach(curElement,"mousedown",function(e){mousePressed=false;
if(p.mouseClicked){p.mouseClicked();}
if(typeof p.mousePressed!="function"){p.mousePressed=false;}
if(p.mouseReleased){p.mouseReleased();}});
attach(document,"keydown",function(e){keyPressed=true;
p.key=e.keyCode+32;
if(e.shiftKey){p.key=String.fromCharCode(p.key).toUpperCase().charCodeAt(0);}
if(typeof p.keyPressed=="function"){p.keyPressed();}
else{p.keyPressed=true;}});
attach(document,"keyup",function(e){keyPressed=false;
if(typeof p.keyPressed!="function"){p.keyPressed=false;}
if(p.keyReleased){p.keyReleased();}});
function attach(elem,type,fn){if(elem.addEventListener)
elem.addEventListener(type,fn,false);else
elem.attachEvent("on"+type,fn);}};return p;}})();
  };

  i.dots();

  i.top = function () {
    $.ajax({
      url: '/htmls/top.html',
      cache: false,
      success: function(html){
        $('.contents').prepend(html);
        $('.container.top').show();
        i.start = function () {
          var key = $('.key-visual');
          
          key.animate(
            {
              margin: '-144px 0 0 -124px'
            },
            {
              duration: 1500,
              easing: 'easeInOutQuad',
              complete: function () {
                key.animate(
                  {
                    margin: '-104px 0 0 -124px'
                  },
                  {
                    duration: 1500,
                    easing: 'easeInOutQuad',
                  }
                );
                i.start();
              }
            }
          );
        };

        i.start();
        i.dots();
        setTimeout(function () {
        $('.container.members').remove();
        $('.container.works').remove();
        $('.container.contacts').remove();
        }, 1000);
        $('.container.top .inner').css(
          {
            width: $(window).width(),
            height: $(window).height()
          }
        );
        $('.links').powerTip({mouseOnToPopup: 'true'});
      }
    });
  };

  i.members = function () {
    var container = $('.container.top');

    $.ajax({
      url: '/htmls/members.html',
      cache: false,
      success: function(html){
        $('.contents').append(html);
        $('.container.members .inner').css(
          {
            width: $(window).width(),
            height: $(window).height()
          }
        );
        $('.container.members').show().css(
          {
            left: - $('.container.members').width()
          }
        ).animate(
          {
            left: 0
          },
          {
            duration: 1400,
            easing: 'easeOutExpo',
            complete: function () {
              $('.container.members').css(
                {
                  position: 'relative'
                }
              );
              setTimeout(function () {
                $('.container.members .inner h2').animate(
                  {
                    left: '28%'
                  },
                  {
                    duration: 1000,
                    easing: 'easeInOutQuad',
                  }
                );
              }, 1800);
              $('.container.members .inner .ishikawa').animate(
                {
                  top: '50%'
                },
                {
                  duration: 2500,
                  easing: 'easeOutBounce',
                }
              );
              $('.container.members .inner .ino').animate(
                {
                  top: '50%'
                },
                {
                  duration: 1500,
                  easing: 'easeOutBounce',
                }
              );
              setTimeout(function () {
                $('.container.members .inner ul.description').fadeIn();
              }, 2500);
              $('.container.top').remove();
              $('.container.works').remove();
              $('.container.contacts').remove();
            }
          }
        ); 
      }
    });
  };

  i.works = function () {

    $.ajax({
      url: '/htmls/works.html',
      cache: false,
      success: function(html){
        $('.contents').append(html);
        $('.container.works .inner').css(
          {
            width: $(window).width(),
            height: $(window).height()
          }
        );
        $('.container.works').show().css(
          {
            left: - $('.container.works').width()
          }
        ).animate(
          {
            left: 0
          },
          {
            duration: 1400,
            easing: 'easeOutExpo',
            complete: function () {
              $('.container.works').css(
                {
                  position: 'relative'
                }
              );
              $('.container.top').remove();
              $('.container.members').remove();
              $('.container.contacts').remove();
            }
          }
        ); 
      }
    });
  };

  i.slide = function (tag) {
    var unripe = $('.shots.unripe')
      , aoyama = $('.shots.aoyama')
      , unripeBtn = $('.btn.unripe')
      , aoyamaBtn = $('.btn.aoyama')
      , unripeName = $('.name.unripe')
      , aoyamaName = $('.name.aoyama')
      , unripeDescription = $('ul.unripe')
      , aoyamaDescription = $('ul.aoyama')
      ;

    if ($(tag).hasClass('selected')) {
      return;
    }
    else if ($(tag).hasClass('aoyama')) {
      unripe.animate(
        {
          margin: '-576px 0 0 0'
        },
        {
          duration: 2000,
          easing: 'easeInBounce',
          complete: function () {
            unripeBtn.removeClass('selected');
            aoyamaBtn.addClass('selected');
          }
        }
      );
      unripeName.hide();
      aoyamaName.show('fade');
      unripeDescription.hide();
      aoyamaDescription.show('fade');
    }
    else {
      unripe.animate(
        {
          margin: '0'
        },
        {
          duration: 2000,
          easing: 'easeOutBounce',
          complete: function () {
            aoyamaBtn.removeClass('selected');
            unripeBtn.addClass('selected');
          }
        }
      );
      aoyamaName.hide();
      unripeName.show('fade');
      aoyamaDescription.hide();
      unripeDescription.show('fade');
    }
  };

  i.contacts = function () {
    var container = $('.container.top');

    $.ajax({
      url: '/htmls/contacts.html',
      cache: false,
      success: function(html){
        $('.contents').append(html);
        $('.container.contacts .inner').css(
          {
            width: $(window).width(),
            height: $(window).height()
          }
        );
        $('.container.contacts').show().css(
          {
            left: - $('.container.contacts').width()
          }
        ).animate(
          {
            left: 0
          },
          {
            duration: 1400,
            easing: 'easeOutExpo',
            complete: function () {
              $('.container.contacts').css(
                {
                  position: 'relative'
                }
              );
              $('.container.top').remove();
              $('.container.members').remove();
              $('.container.works').remove();
            }
          }
        ); 
      }
    });
  };

  i.close = function (tag) {
    var container = $('.container.top')
      , members = $('.container.members')
      , works = $('.container.works')
      , contacts = $('.container.contacts')
      ;
    
    if ($(tag).hasClass('members')) {
      members.css(
        {
          position: 'absolute'
        }
      ).animate(
        {
          left: members.width()
        },
        {
          duration: 1000,
          easing: 'easeInBack',
          complete: function () {
            members.remove();
          }
        }
      );
    }
    else if ($(tag).hasClass('works')) {
      works.css(
        {
          position: 'absolute'
        }
      ).animate(
        {
          left: works.width()
        },
        {
          duration: 1000,
          easing: 'easeInBack',
          complete: function () {
            works.remove();
          }
        }
      );
    }
    else if ($(tag).hasClass('contacts')) {
      contacts.css(
        {
          position: 'absolute'
        }
      ).animate(
        {
          left: contacts.width()
        },
        {
          duration: 1000,
          easing: 'easeInBack',
          complete: function () {
            contacts.remove();
          }
        }
      );
    }
  };

});

$(function() {
  var w = $(window).width()
    , h = $(window).height()
    , container = $('.container.top')
    , containerInner = container.children('.inner')
    , members = $('.container.members')
    , membersInner = members.children('.inner')
    , works = $('.container.works')
    , worksInner = works.children('.inner')
    , contacts = $('.container.contacts')
    , contactsInner = contacts.children('.inner')
    ;
  containerInner.css(
    {
      width: w,
      height: h
    }
  );
  membersInner.css(
    {
      width: w,
      height: h
    }
  );
  worksInner.css(
    {
      width: w,
      height: h
    }
  );
  contactsInner.css(
    {
      width: w,
      height: h
    }
  );
  $(window).resize(function () {
    var w = $(window).width()
      , h = $(window).height()
      , container = $('.container.top')
      , containerInner = container.children('.inner')
      , members = $('.container.members')
      , membersInner = members.children('.inner')
      , works = $('.container.works')
      , worksInner = works.children('.inner')
      , contacts = $('.container.contacts')
      , contactsInner = contacts.children('.inner')
      ;
    containerInner.css(
      {
        width: w,
        height: h
      }
    );
    membersInner.css(
      {
        width: w,
        height: h
      }
    );
    worksInner.css(
      {
        width: w,
        height: h
      }
    );
    contactsInner.css(
      {
        width: w,
        height: h
      }
    );
  });
});
