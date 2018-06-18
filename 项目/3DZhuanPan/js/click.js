//转
function showDiv(e) {
   	document.getElementById("shade").style.display="block";
	document.getElementById("chage").style.display="block"
}

function showButs(){
	document.getElementById("share").style.display="block";
	document.getElementById("chage").style.display="none"
}

//活动规则
function showBut(){
	document.getElementById("shad3").style.display="block";
	document.getElementById("activity").style.display="block";
}
//关闭规则
function closeRule (){
	document.getElementById('activity').style.display="none";
    document.getElementById('shad3').style.display="none";
    
    document.getElementById("nullde").style.display="none";
	document.getElementById("nulldes").style.display="none";
	
	document.getElementById("shade").style.display="none";
	document.getElementById("chage").style.display="none"
}

//我的奖品
function showButNull(){
	document.getElementById("nullde").style.display="block";
	document.getElementById("nulldes").style.display="block";
}
