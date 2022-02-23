import "./newUser.css";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withAdmin from "../../withAdmin";

const NewUser = () => {
  const notify = () => toast("user added successfully");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()


    fetch("http://localhost:8000/api/register", {
      method: 'post', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }
      )
    }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setName("")
        setEmail("")
        setPassword("")
        setPasswordConfirmation("")
        notify()
      });



  }


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="john" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="newUserItem">
          <label>Confirm Password</label>
          <input type="password" placeholder="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
        <div className="newUserItem">
          <button className="newUserButton" type="submit">Create</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
export default withAdmin(NewUser);