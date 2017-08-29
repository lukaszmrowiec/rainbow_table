var fs = require("fs");
var md5 = require('js-md5');

fs.readFile('panTadeusz.txt', function (err, data) {	
   if (err) { return console.error(err);}  
   var  text = data.toString();
   var uniqueWordsArray = text.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];} ) ;
	var uniqueWordsTxt = '';
	for (var i = 0; i < uniqueWordsArray.length; i ++) {
		uniqueWordsTxt += uniqueWordsArray[i] + '\n';
	}
	saveFile(uniqueWordsTxt);
});

function saveFile(dataToSave) {
	fs.writeFile('word_list.txt',  dataToSave, function (err) {
    if (err) return console.log(err);
    console.log('helloworld.txt is ready');
	})
}