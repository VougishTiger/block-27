import {useState} from "react"

const Authenticate= ({token})=> {
  const [error, setError]= useState(null);
  const [successMessage, setSuccessMessage]= useState(null)
  const handleClick= async() => {
    try {
      const newCall= await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "GET",
        headers: {
          "Content-type": "application/json", 
          Authorization: `Bearer ${token}`
        },
      })
      const newCallJson= await newCall.json();
      console.log(newCallJson)
    } catch (error) {
      setError(error.message)
    }
  } 

  return (
    <>
    <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authentication token!</button>
    </>
  );
}
export default Authenticate