const Log=require("./logger")

async function run(){
const r=await Log(
"backend",
"info",
"service",
"middleware test successful"
)

console.log(r.data)
}

run()