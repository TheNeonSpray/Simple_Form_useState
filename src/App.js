//import the state from react library
import { useState } from "react";

function App() {
  //set state variables, this is where you store the changed data and the function(setter) that update that data.
  //Destructuring
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //This function handles the value of the email input and pass it to the setter
  //Destructuring of target and value, both are objects
  const handleEmail = ({ target: { value } }) => setEmail(value);
  //You don't need the braces when there's only one value
  const handlePassword = ({ target: { value } }) => setPassword(value);
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`User: ${email}\npassword:${password}`)
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h1>Login User</h1>
        <label>
          Email
          {/* value is a state attribute */}
          {/* onChange receives the data on real time */}
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default App;
