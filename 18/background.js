chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.command) {
        case "start":
        	console.log("message recieved by background.js");
        	chrome.tabs.query({ active: true,currentWindow: true }, function(tabs) {
             	chrome.tabs.remove(tabs[0].id);
       		 });
        	console.log("removed");

            openTab();
            break;
    }

    return true;
});

// var closeCurrentTab=function()
// 	{
// 		{
// 			var activeTabId;
// 			doInCurrentTab( function(tab){ activeTabId = tab.id } );
// 			function doInCurrentTab(tabCallback) {
// 		   		chrome.tabs.query(
// 				        { 
// 				        	currentWindow: true, active: true 
// 				        },
// 				        	function (tabArray) { tabCallback(tabArray[0]); }
// 		    		);
// 			}
// 		}
		
// 		console.log("Removing current tab");
// 	    chrome.tabs.remove(activeTabId);

		
// 	}


var openTab=function()
	{


	chrome.windows.create(
		{
			url:"https://www.google.co.in/search?q=porn",
			incognito:true
		}
		// , function(tab){
	  // chrome.windows.update(tab.windowId, {focused: true})
	// }
			)
	};
// function new_tab(url){
//   // trying to create a tab
//   chrome.tabs.create({url:url}, incognito:true, function(tab){
//     if(!tab) {
//       // probably no window available
//       chrome.windows.create({url:url},function(win){
//         // better to focus after window creation callback
//         chrome.windows.update(win.id, {focused: true}) 
//       })
//     } else {
//       // better to focus after tab creation callback
//       chrome.windows.update(tab.windowId, {focused: true})
//     }
//   })
// }