import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import"../assets/Styles/Form.css"
export default function Register() {
    const navi = useNavigate()
  const [formdata,setformdata] = useState({
  name:"",
    email:"",
password:""})
const [err,seterr] = useState({})

const handelFormdata = (e)=>{
    const {name,value} = e.target
    setformdata((prev)=>({
        ...prev,[name]:value
    }))
}

const validate = ()=>{
   const  newerr = {}
    if(!formdata.name.trim()) newerr.name = "Name field are required"
    if(!formdata.password.trim()) newerr.password = "Password Field Required"
    seterr(newerr)
    return Object.keys(newerr).length===0 
}

const handelSubmit =(e)=>{
e.preventDefault()
if(validate()){
    localStorage.setItem("register",JSON.stringify(formdata))
    alert("Form Submitted SuccesFully")
    setformdata({
        name:"",
        password:"",
        email:""
    })
}
}

  return (
<>
<div className="container" style={{marginTop:"200px"}}>
    <form  onSubmit={handelSubmit} className="row">
<div className="col-8">
<div className="row">
<div class="col-12 custominput ">
    <label for="inputAddress" className="form-label ">FullName</label>
    <input type="text" className="form-control" id="inputAddress" name='name' onChange={handelFormdata} value={formdata.name}  />
  </div>
  <div class="col-12 custominput mt-3">
    <label for="inputAddress" className="form-label"   >Email Address</label>
    <input type="text" className="form-control" id="inputAddress" name='email'  onChange={handelFormdata}  value={formdata.email}/>
  </div>
  <div class="col-12 custominput  mt-3">
    <label for="inputAddress" className="form-label"  >PassWord</label>
    <input type="text" className="form-control" id="inputAddress" name='password'  onChange={handelFormdata}  value={formdata.password}/>
  </div>
  <div className="col-12 ">
  <button className='custom-button3' type='submit'>Register</button>
  </div>
</div>
</div>
<div className="col-3 custominput2  mt-5">

<div className="card"style={{width:"300px"}}>
  <div className="card-body" >
    <h5 className="card-title">log in</h5>
    <p className="card-text">I you alredy have an account</p>
    <button className='custom-button2' onClick={()=>navi("/Log")}>Go somewhere</button>
  </div>
</div>
</div>
        
    </form>
</div>




</>
  )
}
