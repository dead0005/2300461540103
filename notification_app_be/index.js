require("dotenv").config();
const axios=require("axios");

async function main(){
try{

const res=await axios.get(
"http://4.224.186.213/evaluation-service/notifications",
{
headers:{
Authorization:`Bearer ${process.env.TOKEN}`
}
}
);

console.log(res.data);

}catch(err){
console.log("ERROR:");
console.log(err.response?.status);
console.log(err.response?.data);
}
}

main();