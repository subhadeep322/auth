import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify';
const Home = () => {
const [loggedInUser,setLoggedInUser] = useState('');
const [products,setProducts] = useState([]);
const navigate = useNavigate();
useEffect(()=>{
  setLoggedInUser(localStorage.getItem('loggedInUser'));
},[]);


const handleLogout =(e) =>{
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
  handleSuccess('User Loggedout');
  setTimeout(()=>{
   navigate('/login');
  },1000)
}
const fetchProducts = async () => {
  try{
  const url = "http://localhost:8080/products";
  const headers  = { 
 headers : {
  'Authorization': localStorage.getItem('token')
 }
  }
  const response = await fetch(url,headers);
  const result = response.json();
  console.log(result);
  setProducts(result);
  }
  catch(err){
    handleError(err);
  }
}

useEffect(()=>{
  fetchProducts()
},[])

  return (
    <div>
      <h1>
        porte bosh Suor er bacha,
        <br/>
        {loggedInUser}
      </h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
       
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Home