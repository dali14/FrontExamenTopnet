import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import withAdmin from '../../withAdmin';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { red } from '@material-ui/core/colors';


const AddRep= () => {
  const notify = () => toast("Reponce added successfully");
  const params = useParams();
  const [reponce, setReponce] = useState("");
  const [type, setType] = useState("");
  const [nature, setNature] = useState("");
  const [questions_id, setQuestions_id] = useState(params.id);
  const [question, setQuestion] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:8000/api/question/${params.id}`)
    .then(res => res.json())
    .then(res => setQuestion({...res.questions, reponce: res.reponce.map(item => ({id: item.id, answerText: item.reponce, isCorrect: item.nature}))}))
},[params.id])


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8000/api/reponce", {
      method: 'post',
      headers: { 
       "Content-Type": "application/json",
       'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        reponce: reponce,
        type: type,
        nature: nature,
        questions_id
        
      }
      )
    }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setQuestion({...question, reponce: [...question.reponce, {id: res.id, answerText: res.reponce, isCorrect: res.nature}]}) //changement de state temp reel 
        
        notify()
        // window.location = "/addRep/"+ res.id
      });



  }
  return (
    <div className='productList'>
         <h1 className="productTitle">New Reponce Question Id :{params.id}</h1>
      <div className="productBottom">
     
      
          <form className="productForm" onSubmit={handleSubmit}>
          
                <div className="productFormLeft">
                  <label>Text Reponce</label>
                  <input type="text" placeholder="Text Reponce"  onChange={e => setReponce(e.target.value)}/>
                  
                  <label>Type</label>
                  <select name="inStock" id="idStock" onChange={e => setType(e.target.value)}>
                      <option value="Text">Text</option>
                      <option value="Image">Image</option>
                      
                  </select>

                  <label>nature</label>
                  <select name="inStock" id="idStock" onChange={e => setNature(e.target.value)}>
                      <option value="1">Vrai</option>
                      <option value="0">Faux</option>
                      
                  </select>
              </div>
              <div className="productFormRight">
                  <button className="productButton">Add Reponce</button>
                  <ToastContainer />
                  <Link to="/questions"><button className="productButton">question list</button>
                  </Link>  
              </div>
          </form>
          <h1 className="productTitle">Reponse Listes</h1>
      {
          question?.reponce?.map(reponce=>
            <div className="productTop">
          <div className="">
              
          </div>
          <div className="productTopRight">
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{reponce.id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Text</span>
                      <span className="productInfoValue">{reponce.answerText}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Nature</span>
                      <span className="productInfoValue">{reponce.isCorrect}</span>
                  </div>
                  
              </div>
          </div>
      </div>
            )
          }
      </div>
    </div>
  )
}
export default withAdmin(AddRep);