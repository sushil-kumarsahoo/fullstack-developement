const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const filedir = path.join(__dirname, "files");


if (!fs.existsSync(filedir)) {
  fs.mkdirSync(filedir);
}


app.get("/files", function (req, res) {
  fs.readdir(filedir, function (err, files) {
    if (err) {
      return res.status(500).json({ msg: "Cannot read directory" });
    }

    res.json({
      count: files.length,
      files: files,
    });
  });
});


app.get("/files/:filename", function (req, res) {
  const filename = req.params.filename;
  const filepath = path.join(filedir, filename);

  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ msg: "File not found" });
  }

  fs.readFile(filepath, "utf8", function (err, data) {
    if (err) {
      return res.status(500).json({ msg: "Unable to read file" });
    }

    res.send(data);
  });
});


app.post("/files", function (req, res) {
  const name = req.body.filename;
  const content = req.body.content;

  if (!name || !content) {
    return res.status(400).json({ msg: "filename & content required" });
  }

  const filepath = path.join(filedir, name);

  fs.writeFile(filepath, content, function (err) {
    if (err) {
      return res.status(500).json({ msg: "Error creating file" });
    }

    res.json({ msg: "File created" });
  });
});

app.listen(3000)
