import React from "react";
import Cookies from "js-cookie";


function Tabtitle(props) {
  const epc_name = Cookies.get("EPC_Name");
  const site_name = Cookies.get("Site_Name");

  document.title = `Dataphone - ${props.title}`;
  // document.title = `${epc_name ? epc_name : site_name} - ${props.title}`;
  return <div>{props.children}</div>;
}


export default Tabtitle;
