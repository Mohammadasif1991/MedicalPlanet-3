import React from "react";
import AccountApp from "./account/accountapp";
import DashBoard from "./account/DashBoard";
// import Login from "./account/login";
function App() {
//   if (localStorage.getItem("id") == null) {
   // return <AccountApp />
//   } else {
//     if (localStorage.getItem("type") == "company") {
//       return (
//       <DashBoard />
//       )
//     }
//   }
return(
   <>
      <AccountApp/>
   </>
)
}

export default App;
