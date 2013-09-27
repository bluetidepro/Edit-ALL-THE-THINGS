// Called when the user clicks on the browser action.
var edit = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    if(edit == false){
        edit = true;
        enableBrowserAction(tab);
    } else {
        edit = false;
        disableBrowserAction(tab);
    }
});

// Not editing
function disableBrowserAction(tab){
    chrome.browserAction.setIcon({path:"images/edit_allthethings_19x19.png"});
	chrome.tabs.executeScript(tab.id, {file: 'js/turn_off.js'});
}

// Editing
function enableBrowserAction(tab){
    chrome.browserAction.setIcon({path:"images/edit_allthethings_19x19_active.png"});
	chrome.tabs.executeScript(tab.id, {file: 'js/turn_on.js'});
}


var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
    anchors[i].onclick = function() {return(false);};
}