var juti=document.getElementsByClassName("jutidejieshao");
var renwu=document.getElementsByClassName("renwu");
var guanbi=document.getElementsByClassName("guanbi");
window.onclick=function(e){
	var element=document.elementFromPoint(e.clientX,e.clientY);
	var eI=element.id;
	var eC=element.classList;
	if (eI[0]=="r"&&eI[1]=="e"&&eI[2]=="n") {
		var eIS="";
		for (var i=0; i < eI.length; i++) {
			if (i>=5) {
				eIS+=eI[i]
			};
		};
		var eNum=Number(eIS)-1;
		var xhao=document.getElementsByClassName("hao");
		xhao[eNum].style.display="block";
	}else if (eI[0]=="d"&&eI[1]=="a"&&eI[2]=="n") {
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
	}else if (eC[0]=="guanbi"){
		for (var i=0; i < juti.length; i++) {
			if (juti[i].style.display="block") {
				juti[i].style.display="none";
			};
		};
};