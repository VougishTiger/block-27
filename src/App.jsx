import SignUpForm from "./components/SignUpForm"
import Authenticate from "./components/Authenticate"
import { useState } from "react"

function App() {
  const [token, seToken]= useState("null")

  return (
    <>
      <Authenticate token={token}/>
      <SignUpForm setToken={seToken}/>
    </>
  );
}

export default App
