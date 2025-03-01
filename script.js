function convertToRoman(num) {
  	const arr = {
      ['M',1000], 
	['CM',900],
      ['D', 500], 
		['CD',400],
      ['C', 100], 
		['XC',90],
      ['L', 50], 
		['XL',40],
      ['X', 10], 
		['IX',9],
      ['V', 5], 
		['IV',4],
      ['I', 1]
    };

let roman="";
	for (let i= 0; i<arr.length; i++) {
		let symbol = arr[i][0];
		let value = arr[i][1];

		while (num>=value) {
			num=num-value;
			roman=roman+value;
		}
	}
	return roman;
}



// do not edit below this line
module.exports = convertToRoman
