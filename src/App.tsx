import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App(){
  const[alertVisible, setAlertVisibility]= useState(false);
 
  return( 
  <div>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Sampath Bank PLC</Alert>}
   <button color="secondary" onClick={()=> setAlertVisibility(true)}>Withdraw</button>
  </div>
    
    );
} 
export default App;