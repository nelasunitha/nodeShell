const fs = require('fs');
module.exports = function (filename) {
  fs.readFile(filename, "utf8", (err, files) => {
		if (err) {
			throw err;
		} else {
      process.stdout.write(files)
    }
  })
}