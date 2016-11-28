window.onload=function(){
// 头部
 var wx=$(".wx1")[0];
 var weixin=$(".weixin")[0];
  wx.onmouseover=function(){
    weixin.style.display="block";
    wx.style.background="white";
  }
  wx.onmouseout=function(){
    weixin.style.display="none";
    wx.style.background="";
  }



var sjyt=$(".sjyt");
 var sj1=$(".sj1");
  for(var i=0;i<sjyt.length;i++){
    sjyt[i].index=i;
    sjyt[i].onmouseover=function(){
    sj1[this.index].style.display="block";
    sjyt[0].style.background="white";
    }
  }
  for(var i=0;i<sjyt.length;i++){
    sjyt[i].index=i;
    sjyt[i].onmouseout=function(){
    sj1[this.index].style.display="none";
    sjyt[0].style.background="";
    }
  }

var yt1=$(".yt1");
 var yt2=$(".yt2");
 console.log(yt1,yt2)
  for(var i=0;i<sjyt.length;i++){
    yt1[i].index=i;
    yt1[i].onmouseover=function(){
    yt2[this.index].style.display="block";
    yt1[0].style.background="white";
    }
  }
  for(var i=0;i<yt1.length;i++){
    yt1[i].index=i;
    yt1[i].onmouseout=function(){
    yt2[this.index].style.display="none";
    yt1[0].style.background="";
    }
  }


  //选项卡 
 var item=$(".one");
 var list=$(".one1");
  for(var i=0;i<item.length;i++){
    item[i].index1=i;
  item[i].onmouseover=function(){
   list[this.index1].style.display="block";
  }
  }
  for(var i=0;i<item.length;i++){
    item[i].index1=i;
  item[i].onmouseout=function(){
  list[this.index1].style.display="none";
   }
  }
  // banner
  var bgimgs=$(".bng")
  var btn=$(".b44");
  var banner=$(".banner")[0];
  var left=$(".left")[0];
  var right=$(".right")[0];
  var flag=true;
  bgimgs[0].style.opacity=1;
  btn[0].style.background="#e5004f";
  var t=setInterval(move,2000);
  var now=0;
  var next=0;
  function move(){
  	next++
  	if(next==bgimgs.length)
  	{
  		next=0
  	}
  	animate(bgimgs[now],{opacity:0})
  	animate(bgimgs[next],{opacity:1},function(){flag=true})
  	btn[now].style.background="#666";
  	btn[next].style.background="#e5004f";
  	now=next;
  }
  function movel(){
  	next--
  	if(next<0)
  	{
  		next=bgimgs.length-1;
  	}
  	animate(bgimgs[now],{opacity:0})
  	animate(bgimgs[next],{opacity:1},function(){flag=true})
  	btn[now].style.background="#666";
  	btn[next].style.background="#e5004f";
  	now=next;
  }
  banner.onmouseover=function(){
  	clearInterval(t);
  	left.style.display="block";
  	right.style.display="block";
  }
  banner.onmouseout=function(){
  	t=setInterval(move,2000);
  	left.style.display="none";
  	right.style.display="none";
  }
  for(var i=0;i<btn.length;i++){
  	btn[i].index=i;
  	btn[i].onclick=function(){
  		animate(bgimgs[now],{opacity:0});
  		animate(bgimgs[this.index],{opacity:1})
  		btn[now].style.background="#666";
  	    this.style.background="#e5004f";
  	    now=this.index;
  	    next=this.index;
  	}
  }
  right.onclick=function(){
  	 if(flag){
  	 	move();
  	 }
  	 flag=false;    
  }
  left.onclick=function(){
     if(flag){
  	 	movel();
  	 }
  	 flag=false;  
  }

  // tk

 var tkimgs=$(".zxLBottom1");
 tkimgs[0].style.display="block";
 // var tkhx=$(".two",$(".zxLTop")[0]);
 // var tka=$("a",$(".zxLTop")[0]);
 // tkhx[0].style.borderColor="#e5004f";
 // tka[0].style.cssText="color:black;
 //  fontWeight:bold;"
 var tktwo=$(".two1");
 for(var i=0;i<tktwo.length;i++){
      tktwo[i].index=i;
      tktwo[i].onmouseover=function(){
      	for(var i=0;i<tktwo.length;i++){
            tkimgs[i].style.display="none";
      	}
      	tkimgs[this.index].style.display="block";
      }
 }
 
// 品牌

 var pp=$(".tiyanRBottom");
 pp[0].style.display="block"; 
 var three=$(".three");
 for(var i=0;i<three.length;i++){
 	three[i].index=i;
 	three[i].onmouseover=function(){
 		for(var i=0;i<three.length;i++){
 			pp[i].style.display="none";
 		}
 	pp[this.index].style.display="block";
 	}
 }



// 时尚名品
 var ssmiddle=$(".rr2");
 console.log(ssmiddle)
 for(var i=0;i<ssmiddle.length;i++){
  play(ssmiddle[i]);
 }
 function play(obj1){
 var ss=$(".mpMiddle",obj1)[0];
 var imgs=$("img",ss)
 var ssbtn=$(".button1",obj1);
 var ssleft=$(".rrLeft",obj1)[0];
 var ssright=$(".rrRight",obj1)[0];
 var now1=0;
 var next1=0;
 var flag1=true;
 ssbtn[0].style.background="#e5004f";
 var sswidth=parseInt(getStyle(imgs[0],"width"));
 for(var i=0;i<imgs.length;i++){
  if(i==0){
      continue;
  }
    imgs[i].style.left=sswidth+"px";
 }
  function aa(){
    next1=now1+1;
    if(next1>=imgs.length){
      next1=0;
    }
    imgs[next1].style.left=sswidth+"px";
    animate(imgs[now1],{left:-sswidth});
    animate(imgs[next1],{left:0},function(){flag1=true});   
    ssbtn[now1].style.background="#666";
    ssbtn[next1].style.background="#e5004f";
    now1=next1;
  }
  function aal(){
    next1=now1-1;
    if(next1<0){
      next1=imgs.length-1;
    }
    imgs[next1].style.left=-sswidth+"px";
    animate(imgs[now1],{left:sswidth});
    animate(imgs[next1],{left:0},function(){flag1=true});   
    ssbtn[now1].style.background="#666";
    ssbtn[next1].style.background="#e5004f";
    now1=next1;
  }
  obj1.onmouseover=function(){
    ssleft.style.display="block";
    ssright.style.display="block";
  }
  obj1.onmouseout=function(){
    ssleft.style.display="none";
    ssright.style.display="none";
  }
  ssright.onclick=function(){
    if(flag1){
      aa();  
    }
    flag1=false;
  }
  ssleft.onclick=function(){
    if(flag1){
      aal();  
    }
    flag1=false;
  }
  for(var i=0;i<ssbtn.length;i++){
    ssbtn[i].index=i;
    ssbtn[i].onclick=function(){
      if(now1==this.index){
        return;
      }
        else if(now1<this.index){
        imgs[this.index].style.left=sswidth+"px";
        animate(imgs[now1],{left:-sswidth});
        animate(imgs[this.index],{left:0});    
        ssbtn[now1].style.background="#666";
        ssbtn[this.index].style.background="#e5004f";
            }
        else if(now1>this.index){
        imgs[this.index].style.left=-sswidth+"px";
        animate(imgs[now1],{left:sswidth});
        animate(imgs[this.index],{left:0});    
        ssbtn[now1].style.background="#666";
        ssbtn[this.index].style.background="#e5004f";
      }
      now1=this.index;
      next1=this.index;
    }
  }
 } 

// 轮播图

var gds=$(".mpLBottom");
 for(var i=0;i<gds.length;i++){
  gundong(gds[i]);
 }
function gundong(gd){  
var mpl=$(".mpl",gd)[0];
var gdleft=$(".mpll1",gd)[0];
var gdright=$(".mpll2",gd)[0];
var gdimgs=$(".mpll",gd);
var width=mpl.offsetWidth;
var wnow=0;
var wnext=0;
var wflag=true;
for(var i=0;i<gdimgs.length;i++){
  if(i==0){
    continue;
  }
  gdimgs[i].style.left=width+"px";
}
function wmove(){
  wnext++;
  if(wnext==gdimgs.length){
    wnext=0;
  }
  gdimgs[wnext].style.left=width+"px";
  animate(gdimgs[wnow],{left:-width},function(){wflag=true});
  animate(gdimgs[wnext],{left:0});
  wnow=wnext;
}
function wmovel(){
  wnext--;
  if(wnext<0){
    wnext=gdimgs.length-1;
  }
  gdimgs[wnext].style.left=-width+"px";
  animate(gdimgs[wnow],{left:width},function(){wflag=true});
  animate(gdimgs[wnext],{left:0});
  wnow=wnext;
}
gdright.onclick=function(){
  if(wflag){
    wmove();
  }
  wflag=false; 
}
gdleft.onclick=function(){
 if(wflag){
    wmovel();
  }
  wflag=false; 
}
}




// 楼层跳转

var dw=$(".dw")[0];
var dw1s=$(".dw1")
var hz=$(".hz")[0];
var ssmps=$(".ssmp");
var hz1s=$(".hz1")
var dwimgs=$("img",dw);
var lflag=true;
for(var i=0;i<ssmps.length;i++){
  ssmps[i].h=ssmps[i].offsetTop;
}
window.onscroll=function(){
  if(lflag){
  var obj=document.body.scrollTop?document.body:document.documentElement;
  if(ssmps[0].h<=obj.scrollTop+1200){
    //楼层出现
    dw.style.display="block";
    hz.style.display="block";

  }else{
    dw.style.display="none";
    hz.style.display="none";
  }
  for(var i=0;i<ssmps.length;i++){
    if(ssmps[i].h<=obj.scrollTop+200){
      for(var j=0;j<ssmps.length;j++){
         dwimgs[j].style.opacity=1;
      }
      dwimgs[i].style.opacity=0;
    }
  }
}
}
for(var i=0;i<dw1s.length;i++){
  dw1s[i].index=i;
  if(i==9){
    dw1s[i].onclick=function(){
      animate(document.body,{scrollTop:0})
      animate(document.documentElement,{scrollTop:0})
    }
  }
  else if(i<=8){
    dw1s[i].onclick=function(){
      animate(document.body,{scrollTop:ssmps[this.index].h-200},function(){lflag=true})
      animate(document.documentElement,{scrollTop:ssmps[this.index].h-200},function(){lflag=true})
      lflag=false;
    }
  }
}
// 移动线条

var tupian=$(".tupian");
for(var i=0;i<8;i++){
  ydhx(tupian[i])
}
function ydhx(obj1){
var qr1=$(".qr1",obj1)[0];
var qr2=$(".qr2",obj1)[0];
var qr3=$(".qr3",obj1)[0];
var qr4=$(".qr4",obj1)[0];
obj1.onmouseover=function(){
  animate(qr1,{width:222})
  animate(qr2,{height:262})
  animate(qr3,{height:262})
  animate(qr4,{width:222})
}
obj1.onmouseout=function(){
  animate(qr1,{width:0})
  animate(qr2,{height:0})
  animate(qr3,{height:0})
  animate(qr4,{width:0})
}
}





var zfr=$(".zfr");
for(var i=0;i<8;i++){
  bztj(zfr[i])
}
function bztj(obj1){
var x1=$(".x1",obj1)[0];
var x2=$(".x2",obj1)[0];
var x3=$(".x3",obj1)[0];
var x4=$(".x4",obj1)[0];
obj1.onmouseover=function(){
  animate(x1,{width:197})
  animate(x2,{height:247})
  animate(x3,{height:247})
  animate(x4,{width:197})
}
obj1.onmouseout=function(){
  animate(x1,{width:0})
  animate(x2,{height:0})
  animate(x3,{height:0})
  animate(x4,{width:0})
}
}


var yy=$(".yy");
for(var i=0;i<yy.length;i++){
 shmp(yy[i])
}
function shmp(obj1){
var y1=$(".y1",obj1)[0];
var y2=$(".y2",obj1)[0];
var y3=$(".y3",obj1)[0];
var y4=$(".y4",obj1)[0];
obj1.onmouseover=function(){
  animate(y1,{width:272})
  animate(y2,{height:182})
  animate(y3,{height:182})
  animate(y4,{width:272})
}
obj1.onmouseout=function(){
  animate(y1,{width:0})
  animate(y2,{height:0})
  animate(y3,{height:0})
  animate(y4,{width:0})
}
}








}