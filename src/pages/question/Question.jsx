import { Link } from "react-router-dom";
import "./question.css";
//import Chart from "../components/chart/Chart"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Publish } from "@material-ui/icons";
import withAdmin from "../../withAdmin";

const  Question= () => {
    const questionRows = [
        {
          id: '',
          question: '',
          niveau: '',
          time: '',
          type: '',
        },]
        const repRows = [
            {
              id: '',
              reponce: '',
              type: '',
              nature: '',
              questions_id: '',
            },]
    const params = useParams();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/question/${params.id}`)
        .then(res => res.json())
        .then(res => setQuestion({...res.questions, reponce: res.reponce.map(item => ({id: item.id, answerText: item.reponce, isCorrect: item.nature}))}))
    },[params.id])
    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Question</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Text Question</label>
                  <input type="text" placeholder="Text Question" value={question?.question} />
                  
                  <label>Level</label>
                  <input type="text" placeholder="Hard" value={question?.niveau} />

                  <label>Time</label>
                  <input type="text" placeholder="time with sec" value={question?.time} />

                  <label>Type</label>
                  <input type="text" placeholder="text" value={question?.type} />

                  <label>Etat</label>
                  <input type="text" placeholder="Active" />
                  
              </div>
              
          </form>
      </div>
      <h1 className="productTitle">Update Question</h1>
      <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Time</label>
                  <input type="text" placeholder="time with sec" />

                  <label>Etat</label>
                  <select name="active" id="active">
                      <option value="text">Active</option>
                      <option value="image">deactive</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      
                      
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
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
  );
}
export default withAdmin(Question);