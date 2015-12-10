

function calculate(text){

	console.log('String: ' +text)

var counter = 0

	if (typeof text === "string") {
		console.log('is string')
		for (var i = 0; i < text.length; i++) {
			if (text.charAt(i) == "e") {
				console.log('E found')
				counter ++
			};
		};

	
}
return counter;

}