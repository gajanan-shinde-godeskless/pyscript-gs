const { PythonShell } = require("python-shell");
let pyshell = new PythonShell("main.py");
pyshell.send("hello");
pyshell.on("message", function (message) {
  console.log(message);
});
setTimeout(() => {
  pyshell.send("Another Hello");
}, 3000);
const end = () => {
  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    console.log("finished");
  });
};
module.exports.pyshell =pyshell;