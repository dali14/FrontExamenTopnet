import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import withAdmin from "../../withAdmin";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import "./user.css";
  
  const User = (props) => {
    const params = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const notify = () => toast("user modifier avec succes");

    const handleSubmit = (e) => {
      e.preventDefault()
  
  
      fetch(`http://localhost:8000/api/updateuser/${props.user?.id}`,{
        method: 'put', headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          name: name,
          email: email,
          
        }
        )
      }
      )
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setName("")
          setEmail("")
          props.updateUser();
          
          notify()
        });
  
  
  
    }

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton" onClick={()=>{localStorage.removeItem("token");window.location="/login"}}>Log Out</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{props.user?.name}</span>
                
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.name}</span>
                
              </div>
              <span className="userShowTitle">Create at</span>
              <div className="userShowInfo">
              
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.created_at.slice(0,10)}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
             
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{props.user?.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Tunis | TN</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                
               
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton" type="submit">Update</button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default withAdmin(User);