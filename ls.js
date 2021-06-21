const fs = require("fs");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
	let ls = data.toString().trim();
	let list;
	if (ls === "ls") {
		list = fs.readdir("./", "utf8", (err, files) => {
			if (err) {
				throw err;
			} else {
				process.stdout.write(files.join("\n"));

				process.stdout.write("Your list of files are: " + list);
			}

			process.stdout.write("\nprompt >");
		});
	}
});
