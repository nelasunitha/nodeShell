module.exports = function () {
	//process.stdout.write("prompt> ");
	//process.stdin.on("data", (data) => {
		// const pwd = data.process.cwd();
		//let pwd = data.toString().trim();
		//let cwd;
		//if (pwd === "pwd") {
	//	let cwd = process.cwd();
		process.stdout.write(`current directory:${process.cwd()}`)
			//process.stdout.write("Your current directory: " + cwd);


		process.stdout.write("\nprompt >");
	//});
};
