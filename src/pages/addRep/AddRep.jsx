import React from 'react'
import withAdmin from '../../withAdmin';

const AddRep= () => {
  return (
    <div className='productList'>
         <h1 className="productTitle">New Reponce Question Id :</h1>
      <div className="productBottom">
     
      
          <form className="productForm">
          
                <div className="productFormLeft">
                  <label>Text Reponce</label>
                  <input type="text" placeholder="Text Reponce" />
                  
                  <label>Type</label>
                  <select name="inStock" id="idStock">
                      <option value="1">Text</option>
                      <option value="2">Image</option>
                      
                  </select>

                  <label>nature</label>
                  <input type="text" placeholder="Vrai , Faux" />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Add Reponce</button>
                  <button className="productButton">question list</button>
              </div>
          </form>
      </div>
    </div>
  )
}
export default withAdmin(AddRep);