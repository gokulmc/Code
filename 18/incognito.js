
if(document.getElementById('lst-ib').value=="porn"){
// 	chrome.tabs.getSelected(function(tab) {
//     chrome.tabs.remove(tab.id, function() { });
// });
    chrome.extension.sendMessage({command:"start"});
	console.log("caught the query properly, sending message to background.js");
}