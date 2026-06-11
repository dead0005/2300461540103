const axios=require("axios")
require("dotenv").config()

async function Log(stack,level,pkg,message){
return axios.post(
"http://4.224.186.213/evaluation-service/logs",
{
stack,
level,
package:pkg,
message
},
{
headers:{
Authorization:`Bearer ${process.env.TOKEN}`
}
}
)
}

module.exports=Log