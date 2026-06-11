require("dotenv").config();
const Log=require("./logger");

async function run(){
const r=await Log(
"backend",
"info",
"service",
"test log",
process.env.TOKEN
);

console.log(r);
}

run();