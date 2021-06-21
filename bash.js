const pwd = require("./pwd");
const ls = require("./ls")
const cat = require("./cat")
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();
	const [command, arg] = cmd.split(' ');
  if(cmd === "pwd") {
		pwd();
	} else {
		if(cmd === 'ls') {
			ls();
		} else if (command === 'cat') {
			cat(arg);
		}
	}
	process.stdout.write("You typed: " + cmd);
	process.stdout.write("\nprompt >");
});
