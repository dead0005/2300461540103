import {useEffect,useState} from "react";
import {fetchNotifications} from "./services/api";
import NotificationCard from "./components/NotificationCard";

function App(){

const [notifications,setNotifications]=useState([]);

useEffect(()=>{
loadData();
},[]);

async function loadData(){

console.log("LOADDATA CALLED");

try{

const data=await fetchNotifications();

console.log("DATA:",data);

setNotifications(data);

}catch(err){

console.log("ERROR:",err);

}

}

return(

<div style={{padding:"20px"}}>

<h1>Campus Notification System</h1>

<h2>All Notifications</h2>

{
notifications.map((n)=>(
<NotificationCard
key={n.ID}
notification={n}
/>
))
}

</div>

);

}

export default App;