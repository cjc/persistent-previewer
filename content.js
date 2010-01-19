//alert("replacing");
var tunnel = document.createElement("DIV");
tunnel.id = "persistentpreviewtunnel";
document.body.appendChild(tunnel);

tunnel.addEventListener('PreviewTunnelEvent', function() {
	var eventData = tunnel.innerText;
	//alert("content script has data " + eventData);
	chrome.extension.sendRequest({message: "Preview", values: eventData});
});

var scr = document.createElement("SCRIPT");
scr.src = chrome.extension.getURL("inject.js");
document.body.appendChild(scr);