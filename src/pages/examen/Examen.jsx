import React from 'react'
import "./examen.css";
import withAdmin from "../../withAdmin";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const Examen= () => {
    const params = useParams();
    const [examen, setExamen] = useState(null);
  return (
   
      <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Text Question</label>
                  <input type="text" placeholder="Text Question"  />
                  
                  <label>Level</label>
                  <input type="text" placeholder="Hard"  />

                  <label>Time</label>
                  <input type="text" placeholder="time with sec" />

                  <label>Type</label>
                  <input type="text" placeholder="text"/>

                  <label>Etat</label>
                  <input type="text" placeholder="Active" />
                  
              </div>
              
          </form>
      </div>
      
  );
}
export default withAdmin(Examen);