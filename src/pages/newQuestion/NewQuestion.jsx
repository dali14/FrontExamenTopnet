import withAdmin from '../../withAdmin';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const NewQuestion= () => {
  const token = localStorage.getItem('token');
  const notify = () => toast("Question added successfully");
  const [question, setQuestion] = useState("");
  const [niveau, setNiveau] = useState(["Easy", "medium","hard"]);
  const [time, setTime] = useState("");
  const [type, setType] = useState(["Text", "image"]);
  const [etat, setEtat] = useState(["Active", "Deactive"]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(token)
    
    fetch("http://localhost:8000/api/question", {
      method: 'post',
      headers: { 
       "Content-Type": "application/json",
       'Access-Control-Allow-Origin': '*',
       'Authorization' : `Bearer ${token}` },
      body: JSON.stringify({
        question: niveau,
        niveau: niveau,
        time: time,
        type: type,
        etat: etat,
      }
      )
    }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // setName("")
        // setEmail("")
        // setPassword("")
        // setPasswordConfirmation("")
        notify()
        window.location = "/addRep/"+ res.id
      });



  }
  return (
    <div className='productList'>
         <h1 className="productTitle">New Question</h1>
      <div className="productBottom">
     
      
          <form className="productForm" onSubmit={handleSubmit}>
          
                <div className="productFormLeft">
                  <label></label>
                  <input type="text" placeholder="Text Question"  value={question} onChange={(e) => setQuestion(e.target.value)}/>
                  
                  <label>Level</label>
                  <select name="inStock" id="idStock" onChange={(e) => setNiveau(e.target.value)}>
                      <option value="1">Easy</option>
                      <option value="2">Medium</option>
                      <option value="3">Hard</option>
                  </select>

                  <label>Time</label>
                  <input type="text" placeholder="time with sec" value={time} onChange={(e) => setTime(e.target.value)} />

                  <label>Type</label>
                  <select name="active" id="active" onChange={(e) => setType(e.target.value)}>
                      <option value="text">text</option>
                      <option value="image">image</option>
                  </select>
                  <label>Etat</label>
                  <select name="active" id="active" onChange={(e) => setEtat(e.target.value)}>
                      <option value="text">Active</option>
                      <option value="image">Deactive</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" type="submit" >Add Question</button>
                  <ToastContainer />
              </div>
          </form>
      </div>
    </div>
  )
}
export default withAdmin(NewQuestion);