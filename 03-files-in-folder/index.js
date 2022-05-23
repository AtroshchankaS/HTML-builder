const fs = require("fs");
const path = require("path");
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, data) => {
  if (err) throw err;
  data.forEach((files) => {
    const filePath = path.join(__dirname, "secret-folder", files);
    const ext = path.extname(filePath);
    const name = path.basename(filePath, ext);

    fs.stat(filePath, (err, file) => {
      if (err) throw err;
      if (file.isFile()) {
        console.log(`${name} - ${ext} - ${Math.floor(file.size/1024 * 1000) / 1000}kb`);
      }
    });
  });
});