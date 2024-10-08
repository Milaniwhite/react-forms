import Authenticate from "./componets/Authenicate";
import SignUpForm from "./componets/SignUpForm";
import { useState } from "react";
export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
            
      <SignUpForm token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />
          
    </>
  );
}