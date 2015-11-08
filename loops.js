
// explore a simple data structure to use instead of registering each sound by hand.  
// I'll figure it out eventually I guess. 

var cM = ["C","d","e","F","G","a","bD"];
var gM = ["G","a","b","C","D","e","f#D"];
var dM = ["D","e","f#","G","A","b","c#D"];
var aM = ["A","b","c#","D","E","f#","gD"];
var eM = ["E","f#","g#","A","B","c#","d#D"];
var bM = ["B","c#","d#","E","F#","g#","a#D"];

var arrScales = [cM,gM,dM,aM,eM,bM];
	
var arrKey = ["KeyC","KeyG","KeyD","KeyA","KeyE","KeyB"]
var path = [];
var result;
for(var i = 0; i < arrKey.length; i++){
	 path.push("./audio/" + arrKey[i]);
	 for(var j = 0; j <= arrScales.length; j++){
	 result = path[i] + ": " + arrScales[i][j];
	 console.log(result);
		 
	 }
	}
	 
	 
	





