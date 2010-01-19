//alert("1.21 gigawatts");

var customEvent = document.createEvent('Event');
customEvent.initEvent('PreviewTunnelEvent', true, true);

function PreviewTrack(id, element) {
	//alert(document.getElementById(element));
	hiddenDiv = document.getElementById('persistentpreviewtunnel');
	hiddenDiv.innerText = id;
	hiddenDiv.dispatchEvent(customEvent);
}