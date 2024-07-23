import { useState } from "react"

const SignUpForm= ({ message, success, token })=> {
  const [userName, setUserName]= useState("");
  const [passWord, setPassWord]= useState("");
  const [error, setError]= useState(null);
  
  const handleSubmit= async(event)=> {
    event.preventDefault();
        try {
          const response= await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: userName,
              password: passWord})
            
          });
          const data = await response.json();
          console.log(data);
          }catch(error) {
            setError(error.message);
          }
        };
  return <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input value={userName} onChange={(e)=> setUserName(event.target.value)}/> 
      </label>
      <label>
        Password: <input type="password" value={passWord} onChange={(e)=> setPassWord(event.target.value)}/>
      </label>
      <button>Submit</button>
    </form>
    </>
    
      }

export default SignUpForm