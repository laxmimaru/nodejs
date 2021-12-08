
util = require("util");
txt = "This is demo of %d st class of %s edureka's %s program";

console.log("The formatted text is " + util.format(txt,1,"node js","FSE"));