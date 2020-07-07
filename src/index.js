function charIndexOf (string, symbol) {
	if (symbol.length == 1) {
		for (i=0; i<string.length; i++) {
			if (string[i] == symbol) return i;
		} 
		return -1;
	} 
	throw new Error ('Symbol has to be only one.');
	
}

console.log(charIndexOf('This is summer', 'i'));

module.exports = { charIndexOf }