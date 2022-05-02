var n1=document.getElementById("n1");
var n2=document.getElementById("n2");
var n3=document.getElementById("n3");
var n=[n1,n2,n3];
var clickNum=0;
n[0].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=0) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	if (clickNum==0){
		alert('我这里没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum==1||clickNum==2){
		alert('我这里也没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum>=3&&clickNum<=6){
		alert('我不是说过没有视频了吗，别再点这里了');
		clickNum+=1;
	}else if (clickNum>6&&clickNum<=9){
		alert('你是不是有什么大病');
		clickNum+=1;
	}else{
		alert("彳亍，我走");
		n[0].innerHTML="　"
	};
};
n[1].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=1) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	if (clickNum==0){
		alert('我这里没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum==1||clickNum==2){
		alert('我这里也没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum>=3&&clickNum<=6){
		alert('我不是说过没有视频了吗，别再点这里了');
		clickNum+=1;
	}else if (clickNum>6&&clickNum<=9){
		alert('你是不是有什么大病');
		clickNum+=1;
	}else{
		alert("彳亍，我走");
		n[1].innerHTML="　"
	};
};
n[2].onclick=function(){
	for (var i=0; i < n.length; i++) {
	  if (i!=2) {
	  	n[i].style.textDecoration="none";
	  } else{n[i].style.textDecoration="underline skyblue";};
	};
	if (clickNum==0){
		alert('我这里没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum==1||clickNum==2){
		alert('我这里也没有视频，别点这里');
		clickNum+=1;
	}else if (clickNum>=3&&clickNum<=6){
		alert('我不是说过没有视频了吗，别再点这里了');
		clickNum+=1;
	}else if (clickNum>6&&clickNum<=9){
		alert('你是不是有什么大病');
		clickNum+=1;
	}else{
		alert("彳亍，我走");
		n[2].innerHTML="　"
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
		saoma.style.backgroundImage="url(../static/img/ri.png)";
		s.innerHTML="不";
		m.innerHTML="要";
		xiazai.style.backgroundImage="url()";
		xiazai.style.width="0px";
		xiazai.style.height="0px";
	} else{
		saoma.style.backgroundImage="url(../static/img/erweima.png)";
		s.innerHTML="不";
		m.innerHTML="用";
		xiazai.style.backgroundImage="url(../static/img/xiazai.png)";
		xiazai.style.width="250px";
		xiazai.style.height="123px";
	};
};
var pg=document.getElementsByClassName("pg");
var pgList=["首页","公告","档案","萌娘百科","鸣谢"];
var pN=document.getElementById("pN");
var pG=document.getElementById("pG");
var left=document.getElementsByClassName("left");
pg[0].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.color="black";
  	};
  	pg[0].innerHTML+="▎";
	pg[0].style.color="red";
	pN.innerHTML="1";
	pG.innerHTML="/";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	left[0].style.zIndex="4444";
};
pg[1].onclick=function(){
	for (var j=0; j < pg.length; j++){ 
		pg[j].innerHTML=pgList[j];
		pg[j].style.color="black";
  	};
  	pg[1].innerHTML+=" ▎";
	pg[1].style.color="red";
	pN.innerHTML="2";
	pG.innerHTML="//";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	left[1].style.zIndex="4444";
};
pg[2].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.color="black";
  	};
	pg[2].innerHTML+=" ▎";
	pg[2].style.color="red";
	pN.innerHTML="3";
	pG.innerHTML="///";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	left[2].style.zIndex="4444";
};
pg[3].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.color="black";
  	};
  	pg[3].innerHTML+=" ▎";
	pg[3].style.color="red";
	pN.innerHTML="4";
	pG.innerHTML="////";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	left[3].style.zIndex="4444";
};
pg[4].onclick=function(){
	for (var j=0; j < pg.length; j++) {
		pg[j].innerHTML=pgList[j];
		pg[j].style.color="black";
  	};
  	pg[4].innerHTML+=" ▎";
	pg[4].style.color="red";
	pN.innerHTML="5";
	pG.innerHTML="/////";
	for (var j=0; j < left.length; j++){
		left[j].style.zIndex="0";
	};
	left[4].style.zIndex="4444";
};
var infmt=document.getElementsByClassName("infmt");
infmt[0].onclick=function(){
	for (var i=0; i < infmt.length; i++) {
	  infmt[i].style.color="black"
	};
	infmt[0].style.color="red"
};
infmt[1].onclick=function(){
	for (var i=0; i < infmt.length; i++) {
	  infmt[i].style.color="black"
	};
	infmt[1].style.color="red"
};
infmt[2].onclick=function(){
	for (var i=0; i < infmt.length; i++) {
	  infmt[i].style.color="black"
	};
	infmt[2].style.color="red"
};
infmt[3].onclick=function(){
	for (var i=0; i < infmt.length; i++) {
	  infmt[i].style.color="black"
	};
	infmt[3].style.color="red"
};


var photo1=document.getElementById("p1");
var photo2=document.getElementById("p2");
var photo3=document.getElementById("p3");
var photo4=document.getElementById("p4");
var photos=[photo1,photo2,photo3,photo4];
var photoNum=0;
var time=1;

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

var eve=document.getElementsByClassName("event");
var rm=document.getElementsByClassName("readMore");
eve[0].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[0].style.color="black";
	  	rm[0].style.left="0px";
	};
};
eve[1].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[1].style.color="black";
	  	rm[1].style.left="0px";
	};
};
eve[2].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[2].style.color="black";
	  	rm[2].style.left="0px";
	};
};
eve[3].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[3].style.color="black";
	  	rm[3].style.left="0px";
	};
};
eve[4].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[4].style.color="black";
	  	rm[4].style.left="0px";
	};
};
eve[5].onmouseover=function(){
	for (var i=0; i < 10; i++) {
	  	rm[5].style.color="black";
	  	rm[5].style.left="0px";
	};
};
eve[0].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[0].style.color="#5191c1";
	  	rm[0].style.left="-500px";
	};
};
eve[1].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[1].style.color="#5191c1";
	  	rm[1].style.left="-500px";
	};
};
eve[2].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[2].style.color="#5191c1";
	  	rm[2].style.left="-500px";
	};
};
eve[3].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[3].style.color="#5191c1";
	  	rm[3].style.left="-500px";
	};
};
eve[4].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[4].style.color="#5191c1";
	  	rm[4].style.left="-500px";
	};
};
eve[5].onmouseout=function(){
	for (var i=9; i >= 0; i-=1) {
	  	rm[5].style.color="#5191c1";
	  	rm[5].style.left="-500px";
	};
};