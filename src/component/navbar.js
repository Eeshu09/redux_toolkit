import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';


const Navbar=()=>{
  // const [data,setData]=useState([])
  // const handle=()=>{
  //   ApiServices.getProduct()
  //  .then((data)=>setData(data))
  //   .catch((error) => console.error(error));

  // }
  // console.log(data);
  const {cart}=useSelector((state)=>state.allcart);
  console.log(cart);
 
  const navigate=useNavigate();
    return (
        <>
        <nav className="navbar navbar-expand-lg  bg-dark color">
  <div class="container">
    <a className="navbar-brand"style={{color:'white'}} onClick={()=>navigate('/')} >New Collections</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent " >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
    <a class="nav-link active" aria-current="page"  style={{color:'white'}}>Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color:'white'}}>Login</a>
        </li>
       
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    
    <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" style={{ color: 'white' }}onClick={()=>navigate('/cart')}>
                Cart({cart.length})
              </a>
            </li>
          </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;