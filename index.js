


let {PythonShell} =require('python-shell')

PythonShell.run("main.py",null,function(err,results){
    console.log(results);
    console.log("printed result");
})

