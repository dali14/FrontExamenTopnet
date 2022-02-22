import React from 'react'
import { Link } from 'react-router-dom';

export default function PreExamen() {
    const niveau =['1er','2em','pfe','master']
  return (
    <div>
      <form>
    <h3> Login </h3>
    <div className="form-group">
                   <label>
                       CIN
                   </label>
                   <input type="text" className='form-control' placeholder='Cin'></input>
               </div>
               <label>
                       Niveau
                   </label>
               
    <select className='form-control'>
    <option value="grapefruit">{niveau[0]}</option>
    <option value="lime">{niveau[1]}</option>
    <option value="coconut">{niveau[2]}</option>
    <option value="mango">{niveau[3]}</option>
  </select>
  <br></br>
  <div className="form-group" align="center">
  <Link  className="nav-link" to={'/ex'}>
  <button className="btn btn-primary btn-block">Passer L examen </button></Link>
  </div>
  </form>
    </div>
  )
}
