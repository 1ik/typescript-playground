function getString(arg1: string|number, arg2: string|number) {
	return arg1 + arg2;
}

console.log(getString(1, "2")); //12
console.log(getString("1", "2")); //12
console.log(getString(1, 2)); //3


