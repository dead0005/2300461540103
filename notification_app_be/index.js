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

const notifications=res.data.notifications;

const priority={
Placement:3,
Result:2,
Event:1
};

notifications.sort((a,b)=>{

if(priority[b.Type]!==priority[a.Type]){
return priority[b.Type]-priority[a.Type];
}

return new Date(b.Timestamp)-new Date(a.Timestamp);

});

const top10=notifications.slice(0,10);

console.log("TOP 10 NOTIFICATIONS\n");

top10.forEach((n,i)=>{
console.log(
`${i+1}. [${n.Type}] ${n.Message} (${n.Timestamp})`
);
});

}catch(err){
console.log(err.response?.data||err.message);
}
}

main();