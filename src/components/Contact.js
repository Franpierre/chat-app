import React from "react";
import "./Contact.css";

const Contact = props => (
 <div className="Contact">
   <img className="avatar" src={props.avatar} alt={`pict of ${props.name}`} />
   <div>
     <p className="name"> {props.name}</p>
     <div className="status">
       <p className="status-text">
        {props.status ? "online" : "offline"}
       </p>
       <div className={props.status ? "status-online" : "status-offline"} />
     </div>
   </div>
 </div>
 );

export default Contact;