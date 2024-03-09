// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>test</h2>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}