module.exports = function check(str, bracketsConfig) {
	let arr = [];
	let obj = {};
	for (let i = 0; i < bracketsConfig.length; i++) {
    		obj[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}
	for (let i = 0; i < str.length; i++) {
		if (obj[arr[arr.length - 1]] == str[i]) {
			arr.pop();
		} else {
			arr.push(str[i]);
		}
	}
	return arr == 0;
}