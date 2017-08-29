var fs = require("fs");

fs.readFile('rainbow_word_list.txt', function (err, data) {	
   if (err) { return console.error(err);}
   var  text = data.toString();
   var uniqueWordsArray = text.split(/\s+/)
	findPassword(uniqueWordsArray)
});

var findPassword = function (dataToSearch) {
	var searchPasswordMD5 = 'c8e095e2a26f8540afabb36dcdaee3b1', searchPassword, searchingIndex;
	for (var i = 0; i < dataToSearch.length; i++ ){
		if (dataToSearch[i] == searchPasswordMD5) {
			 searchingIndex = i - 1
	   }
	}
	searchPassword = dataToSearch[searchingIndex];
	searchPassword = searchPassword.substr(1, (searchPassword.length - 1));	
	saveFile(searchPassword);
}

function saveFile(dataToSave) {
	fs.writeFile('result.txt', dataToSave, function (err) {
    if (err) return console.log(err);
    console.log('result.txt is ready');
	})
}
