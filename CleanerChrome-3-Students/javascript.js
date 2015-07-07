chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://google.com/";
  chrome.tabs.create({ url: newURL });
});


var myDate = new Date();
var hours = myDate.getHours();
//	hours = 60;
if(hours >=23) {
	chrome.webRequest.onBeforeRequest.addListener(
			function(details) {
				return {cancel: true}; 
			}, 
			{ urls: ["http://*/*", "https://*/*"] }, ["blocking"]
	);
}