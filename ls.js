const fs = require("fs");
module.exports = function (filename) {
	fs.readdir(filename, "utf8", (err, files) => {
		if (err) {
			throw err;
		} else {
			process.stdout.write(files.join("\n"));

		//	process.stdout.write("Your list of files are: " + filename);
		}
	});

}
