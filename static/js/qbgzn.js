var loading=document.getElementById("loading");
var start=document.getElementById("start");
var all=document.getElementsByTagName("*");
var drag=document.getElementById("drag");
var loadingWidth=0;
loadingTime=setInterval(function(){
	if (loading.style.width!='534px') {
		loadingWidth+=6;
		loading.style.width=loadingWidth+"px";
		loading.innerHTML=loadingWidth/534*100+'%';
	}else if(loading.style.width=='534px'){
		clearInterval(loadingTime);
		start.id=' ';
		loading.id=' ';
		loading.innerHTML=' ';
	};
},10);


setInterval(function(){
	drag.style.background="url(static/img/spiderClose.png) no-repeat";
	setInterval(function(){
		drag.style.background="url(static/img/spider.png) no-repeat";
	},2200);
},3000);

drag.onmouseover=function(){
	drag.style.background="url(static/img/spiderClose.png) no-repeat";
	drag.innerHTML="你干嘛，嗯哼哼~";
};
drag.onmouseout=function(){
	drag.innerHTML="";
};

var n1=document.getElementById("n1");
var n2=document.getElementById("n2");
var n3=document.getElementById("n3");
var nY=document.getElementById("happyNewYear");
var n=[n1,n2,n3];
var clickNum1=0;
var clickNum2=0;
var clickNum3=0;
n[0].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=0) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	nY.style.display="block"
};
n[1].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=1) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	if (clickNum2==0){
		alert('我这里没有视频，别点这里');
		clickNum2+=1;
	}else if (clickNum2==1){
		alert('我不是说过没有视频了吗，别再点这里了');
		clickNum2+=1;
	}else if (clickNum2==3){
		alert('你是不是有什么大病');
		clickNum2+=1;
	}else{
		alert("彳亍，我走");
		n[1].innerHTML=""
	};
};
n[2].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=2) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	if (clickNum3==0){
		alert('我这里没有视频，别点这里');
		clickNum3+=1;
	}else if (clickNum3==1){
		alert('我不是说过没有视频了吗，别再点这里了');
		clickNum3+=1;
	}else if (clickNum3==3){
		alert('你是不是有什么大病');
		clickNum3+=1;
	}else{
		alert("彳亍，我走");
		n[2].innerHTML=""
	};
};

var saoma=document.getElementById("saoma");
var s=document.getElementById("s");
var m=document.getElementById("m");
var xiazai=document.getElementById("xiazai");
var num=0;
saoma.onclick=function(){
	num+=1;
	if (num%2==1) {
		saoma.style.backgroundImage="url(static/img/ri.png)";
		s.innerHTML="不";
		m.innerHTML="要";
		xiazai.style.backgroundImage="url()";
		xiazai.style.width="0px";
		xiazai.style.height="0px";
	} else{
		saoma.style.backgroundImage="url(static/img/erweima.png)";
		s.innerHTML="不";
		m.innerHTML="用";
		xiazai.style.backgroundImage="url(static/img/xiazai.png)";
		xiazai.style.width="250px";
		xiazai.style.height="123px";
	};
};
var pg=document.getElementsByClassName("pg");
var pgList=["首页","公告","档案","萌娘百科","鸣谢"];
var pN=document.getElementById("pN");
var pG=document.getElementById("pG");
var left=document.getElementsByClassName("left");
pg[0].onmouseover=function(){
	pg[0].style.removeProperty('color');
}
pg[0].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.removeProperty('color');
  	};
  	pg[0].innerHTML+="▎";
	pg[0].style.color="red";
	pN.innerHTML="1";
	pG.innerHTML="/";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	zk.style.zIndex="0";
	left[0].style.zIndex="4444";
};
pg[1].onclick=function(){
	for (var j=0; j < pg.length; j++){ 
		pg[j].innerHTML=pgList[j];
		pg[j].style.removeProperty('color');
		pg[0].style.color='black';
  	};
  	pg[1].innerHTML+=" ▎";
	pg[1].style.color="red";
	pN.innerHTML="2";
	pG.innerHTML="//";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	zk.style.zIndex="0";
	left[1].style.zIndex="4444";
};
pg[2].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.removeProperty('color');
		pg[0].style.color='black';
  	};
	pg[2].innerHTML+=" ▎";
	pg[2].style.color="red";
	pN.innerHTML="3";
	pG.innerHTML="///";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	zk.style.zIndex="0";
	left[2].style.zIndex="4444";
};
pg[3].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.removeProperty('color');
		pg[0].style.color='black';
  	};
  	pg[3].innerHTML+=" ▎";
	pg[3].style.color="red";
	pN.innerHTML="4";
	pG.innerHTML="////";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	zk.style.zIndex="0";
	left[3].style.zIndex="4444";
};
pg[4].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.removeProperty('color');
		pg[0].style.color='black';
  	};
  	pg[4].innerHTML+=" ▎";
	pg[4].style.color="red";
	pN.innerHTML="5";
	pG.innerHTML="/////";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	zk.style.zIndex="0";
	left[4].style.zIndex="4444";
};

var infmt=document.getElementsByClassName("infmt");


var photo1=document.getElementById("p1");
var photo2=document.getElementById("p2");
var photo3=document.getElementById("p3");
var photo4=document.getElementById("p4");
var photos=[photo1,photo2,photo3,photo4];
var photoNum=0;
var time=1;
//动图
setInterval(function(){
	if (photoNum<3) {
		timer=setInterval(function(){
			if (time%3==1 && time!=1) {
				clearInterval(timer);
			};
			if (photoNum==1) {
				photos[0].style.left="-597px";
				photos[1].style.left="40px";
				photos[2].style.left="637px";
				photos[3].style.left="1234px";
			}else if (photoNum==2) {
				photos[0].style.left="-1194px";
				photos[1].style.left="-597px";
				photos[2].style.left="40px";
				photos[3].style.left="637px";
			}else if (photoNum==3) {
				photos[0].style.left="-1791px";
				photos[1].style.left="-1194px";
				photos[2].style.left="-597px";
				photos[3].style.left="40px";
			}else if (photoNum==0) {
				photos[0].style.left="40px";
				photos[1].style.left="637px";
				photos[2].style.left="1234px";
				photos[3].style.left="1831px";
			}else
			time++;
		},1000);
		photoNum++;
	}else if(photoNum==3){
		timer;
		photoNum=0;
		time=1;
		for (var i=0; i < photos.length; i++) {
			photos[i].style.left="0px"
		};
	};
},5000);

//获取公告栏元素
var eve=document.getElementsByClassName("event");
var rm=document.getElementsByClassName("readMore");
//获取档案元素
var juti=document.getElementsByClassName("jutidejieshao");
var dangan=document.getElementsByClassName("dangan");
var renwu=document.getElementsByClassName("renwu");
var guanbi=document.getElementsByClassName("guanbi");

var zk=document.getElementById("zk");
var subject=document.getElementsByClassName("subject");
var Chinese=document.getElementById("Chinese");
var math=document.getElementById("math");
var English=document.getElementById("English");
var physics=document.getElementById("physics");
var chemistry=document.getElementById("chemistry");
var sizheng=document.getElementById("sizheng");
var nCS=document.getElementsByClassName("notChosenSubject");

var right=document.getElementById("right");

var event1=document.getElementById("event1");
var event2=document.getElementById("event2");
var event3=document.getElementById("event3");
var event4=document.getElementById("event4");

var door=document.getElementById("door");

//鼠标点击事件
window.onclick=function(e){
	var element=document.elementFromPoint(e.clientX,e.clientY);
	var eI=element.id;
	var eC=element.classList;
	var eT=element.tagName;
	//人物档案弹窗
	if (eI[0]=="r"&&eI[1]=="e"&&eI[2]=="n") {
		right.style.zIndex="0";
		var eIS="";
		for (var i=0; i < eI.length; i++) {
			if (i>=5) {
				eIS+=eI[i]
			};
		};
		var eNum=Number(eIS)-1;
		var xhao=document.getElementsByClassName("hao");
		xhao[eNum].style.display="block";
	}//事件档案弹窗
	else if (eI[0]=="d"&&eI[1]=="a"&&eI[2]=="n") {
		right.style.zIndex="0";
		var eIS="";
		for (var i=0; i < eI.length; i++) {
			if (i>=6) {
				eIS+=eI[i]
			};
		};
		var eNum=Number(eIS)-1;
		var sji=document.getElementsByClassName("shi");
		sji[eNum].style.display="block";
	}//关闭弹窗
	else if (eC[0]=="guanbi"){
		right.style.zIndex="9996";
		for (var i=0; i < juti.length; i++) {
			if (juti[i].style.display="block") {
				juti[i].style.display="none";
			};
		};
	}//公告栏点击
	else if (eC[0]=="event"){
		alert("点什么点，我懒得做了，这里不会有东西的");
	}//公告栏选择
	else if (eC[0]=='infmt'){
		var eventBlock=document.getElementsByClassName("eventBlock");
	  	infmt[0].onclick=function(){
	  		for (var i=0; i < infmt.length; i++) {
			  infmt[i].style.color="black"
			};
			infmt[0].style.color="red";
			for (var i=0; i < infmt.length; i++) {
			  eventBlock[i].className="eventNone eventBlock"
			};
			eventBlock[0].className="eventBlock"
		};
		infmt[1].onclick=function(){
			for (var i=0; i < infmt.length; i++) {
			  infmt[i].style.color="black"
			};
			infmt[1].style.color="red";
			for (var i=0; i < infmt.length; i++) {
			  eventBlock[i].className="eventNone eventBlock"
			};
			eventBlock[1].className="eventBlock"
		};
		infmt[2].onclick=function(){
			for (var i=0; i < infmt.length; i++) {
			  infmt[i].style.color="black"
			};
			infmt[2].style.color="red";
			for (var i=0; i < infmt.length; i++) {
			  eventBlock[i].className="eventNone eventBlock"
			};
			eventBlock[2].className="eventBlock"
		};
		infmt[3].onclick=function(){
			for (var i=0; i < infmt.length; i++) {
			  infmt[i].style.color="black"
			};
			infmt[3].style.color="red";
			for (var i=0; i < infmt.length; i++) {
			  eventBlock[i].className="eventNone eventBlock"
			};
			eventBlock[3].className="eventBlock"
		};
	}//复习资料
	else if(eC[0]=="subject"){
		var chosen=document.getElementById("chosen");
		var cS=document.getElementsByClassName("chosenSubject");
		subject[0].onclick=function(){
			chosen.id="";
			subject[0].id="chosen";
			cS[0].className="notChosenSubject";
			Chinese.className="chosenSubject";
		};
		subject[1].onclick=function(){
			chosen.id="";
			subject[1].id="chosen";
			cS[0].className="notChosenSubject";
			math.className="chosenSubject";
		};
		subject[2].onclick=function(){
			chosen.id="";
			subject[2].id="chosen";
			cS[0].className="notChosenSubject";
			English.className="chosenSubject";
		};
		subject[3].onclick=function(){
			chosen.id="";
			subject[3].id="chosen";
			cS[0].className="notChosenSubject";
			physics.className="chosenSubject";
		};
		subject[4].onclick=function(){
			chosen.id="";
			subject[4].id="chosen";
			cS[0].className="notChosenSubject";
			chemistry.className="chosenSubject";
		};
		subject[5].onclick=function(){
			chosen.id="";
			subject[5].id="chosen";
			cS[0].className="notChosenSubject";
			sizheng.className="chosenSubject";
		};
	}//复习资料入口
	else if (eI=="door") {
		for (var i=0; i < pg.length; i++) {
			pg[i].style.zIndex="0";
		};
		zk.style.zIndex="4444";
		for (var j=0; j < pg.length; j++) {
			pg[j].innerHTML=pgList[j];
			pg[j].style.removeProperty('color');
			pg[0].style.color='black';
	  	};
	}
	else if (true) {
        var x=e.clientX+'px';
        var y=e.clientY+'px';
        drag.style.left=x;
        drag.style.top=y;
	};
};
//查找元素在列表中位置
function findIndex(list, item) {
	for (let i in list) {
		if (list[i] == item) {
			return i;
	    };
	};
	// 没有找到元素返回-1
	return -1;
};
var eveTime=document.getElementsByClassName("eventTime");
var eveType=document.getElementsByClassName("eventType");
var eveThing=document.getElementsByClassName("eventThing");
//鼠标悬停事件
window.onmouseover=function(ee){
	var element=document.elementFromPoint(ee.clientX,ee.clientY);
	var eI=element.id;
	var eC=element.classList;
	if(eC[0]=='event'){
		var index = findIndex(eve, element);
		rm[index].style.left='0px';
		eve[index].onmouseout=function(){
			rm[index].style.left='-500px';
		};
	}else if (eC[0]=='eventTime') {
		var index = findIndex(eveTime, element);
		rm[index].style.left='0px';
		eveTime[index].onmouseout=function(){
			rm[index].style.left='-500px';
		};
	}else if (eC[0]=='eventType') {
		var index = findIndex(eveType, element);
		rm[index].style.left='0px';
		eveType[index].onmouseout=function(){
			rm[index].style.left='-500px';
		};
	}else if (eC[0]=='eventThing') {
		var index = findIndex(eveThing, element);
		rm[index].style.left='0px';
		eveThing[index].onmouseout=function(){
			rm[index].style.left='-500px';
		};
	}else if (true) {
        var x=ee.clientX+'px';
        var y=ee.clientY+'px';
        drag.style.left=x;
        drag.style.top=y;
	};
};
//门开关
door.onmouseover=function(){
	door.style.backgroundImage="url(static/img/opendoor.png)"
}
door.onmouseout=function(){
	door.style.backgroundImage="url(static/img/door.png)"
};
//七班春晚关闭
var cY=document.getElementById("closeNew");
var nV=document.getElementById("newYearVideo");
cY.onclick=function(){
	nY.style.display="none";
	nV.pause();
};
