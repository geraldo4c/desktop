var api= "https://api.giphy.com/v1/gifs/search?"
var api_key= "&api_key=iTlvZpbbbb0DNvuOLxnUD92Y8VIBEBIE"
var q= "&q=desktop"

function setup (){
noCanvas();
var url = api + api_key + q;
loadJSON(url, gotData)
}
function gotData(gif){
	for (var i = 0; i < gif.data.length; i++){
		createImg(gif.data[i].images.original.url);
	}
		
}