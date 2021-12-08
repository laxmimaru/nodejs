
file_system = require('fs');
file_system.writeFileSync("file_sys_demo.text","This example is for showing the file system demo");

setTimeout(
(error)=>{
    file_system.writeFileSync("file_sys_demo4.text","This example is for showing the file system demo");
    if (error){
        console.log("file creation failed because of errpr " );
    }
    else{
        console.log("file creation failed" + error);
    }

    }
);
