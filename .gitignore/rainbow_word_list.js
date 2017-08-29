var fs = require("fs");
var md5 = require('js-md5');

fs.readFile('word_list.txt', function (err, data) {
   if (err) { return console.error(err);}
   var  text = data.toString();
   var uniqueWordsArray = text.split('\n')
	createRainbowTable(uniqueWordsArray)
});

function createRainbowTable(wordsList) {
	var rainbowArr = [];
	for (var i = 0; i < wordsList.length; i++ ) {
		md5(wordsList[i]);
		var hash = md5.create();
		hash.update(wordsList[i]);
		hash.hex();
		rainbowArr.push(wordsList[i] + ' ' + hash + '\n');	
	}
	var rainbowString = rainbowArr.toString();
	saveFile(rainbowString);
}

function saveFile(dataToSave) {
	fs.writeFile('rainbow_word_list.txt', dataToSave, function (err) {
    if (err) return console.log(err);
    console.log('rainbow_word_list.txt is ready');
	})
}