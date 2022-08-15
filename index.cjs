const { PythonShell } = require("python-shell");
let pyshell = new PythonShell("main.py");

function abc() {
  pyshell.send("hello");
  pyshell.on("message", function (message) {
    console.log(message);
  });
};
module.exports =  abc();
// setTimeout(() => {
//   pyshell.send("Another Hello");
// }, 3000);
// const end = () => {
//   pyshell.end(function (err, code, signal) {
//     if (err) throw err;
//     console.log("finished");
//   });
// };
// module.exports.pyshell = pyshell;
// abc();