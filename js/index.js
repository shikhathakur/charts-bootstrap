document.getElementById('backgrnd').setAttribute("style", "background:#087D8A;color:white");
document.getElementById('dashboard').setAttribute("style", "background:#FAEBD7;color:black");
var aBoxBorder = document.getElementsByClassName('box');
for (var i = 0; i < aBoxBorder.length; i++) {
	aBoxBorder[i].
  	setAttribute("style", "height:180px;border:2px solid grey;box-shadow: 5px 5px rgba(0,0,0,.5);box-sizing: border-box");
}
var aImageAlign = document.getElementsByTagName('img');
for (var i = 0; i < aImageAlign.length; i++) {
  	aImageAlign[i].setAttribute("style", "height:120px;width:150px");
}
var aMargin = document.getElementsByClassName('align');
for (var i = 0; i < aMargin.length; i++) {
  	aMargin[i].setAttribute("style", "margin-top: 15px");
}
var aLine = document.getElementsByTagName('hr');
aLine[0].setAttribute("style", "border-top: 1px solid #333");
document.getElementById('srch').setAttribute("style", "background:#087D8A;border-top:0px;border-left:0px;border-right:0px;border-bottom:5px,");
document.getElementById('footr').setAttribute("style", "background:#D3D3D3;bottom:0px;position:fixed");