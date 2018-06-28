#!/usr/bin/env node

const args = process.argv;
console.log(args);

console.log("Spawn bash shell to exec predev scanner command")


console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/opt/cocoon_predev');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

console.log('Arguments:', process.argv[2]);
if (!process.argv[2]) {
    console.log('Exiting Program - Input a URL to continue execution !');
    process.exit(1);
} else {
    var myurl = process.argv[2];
    console.log("URL Var - ", myurl );
}
    


const exec = require('child_process').exec;
console.log(`Current directory: ${process.cwd()}`);

const testscript = exec('echo "CURRENT DIR: " && pwd && bash /opt/cocoon_predev/0_runpredev.sh ' + myurl );

testscript.stdout.on('data', function(data){
    console.log(data); 
    // sendBackInfo();
});

testscript.stderr.on('data', function(data){
    console.log(data);
    // triggerErrorStuff(); 
});

