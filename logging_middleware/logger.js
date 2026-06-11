const axios=require("axios");

async function Log(stack,level,pkg,message,token){
 try{
  const res=await axios.post(
   "http://4.224.186.213/evaluation-service/logs",
   {
    stack,
    level,
    package:pkg,
    message
   },
   {
    headers:{
     Authorization:`Bearer ${token}`
    }
   }
  );
  return res.data;
 }catch(err){
  console.log(err.response?.data||err.message);
 }
}

module.exports=Log;