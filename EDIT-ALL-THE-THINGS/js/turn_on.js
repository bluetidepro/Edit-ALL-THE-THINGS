document.body.contentEditable = true;
var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
	anchors[i].href="javascript:return false";
    anchors[i].onclick = function() {return(false);};
}