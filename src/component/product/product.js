import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTocart, remTocart } from '../../cartSlice';
import './product.css'
const Product=()=>{

const{cart}=useSelector((state)=>state.allcart)
const dispatch=useDispatch();
 

    const[Data,setData]=useState([]);
  
 useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(result=>setData(result));
 },[])
 const getItemQuantity=(itemId)=>{
  const cartItem=cart.find((item)=>item.id===itemId)
  return cartItem?cartItem.quantity:0
 }

  return(
    <>
    
   {Data.map(item=>(
    <>
    <div className="card">
    <Link to ={`/productdetails/${item.id}`} ><img src={item.image} className="card_img" alt="image"/></Link>
  <div className="card-body">
    <p>price :<span>₹</span>{ item.price}</p>
    <p>rating : {item.rating.rate}</p>
    
    
    {getItemQuantity(item.id) === 0 ? (
              <button className="addbutton" onClick={() => dispatch(addTocart(item))}>
                Add to Cart
              </button>
            ) : (
              <button className='mainbutton' >
                <button className='sub'onClick={()=>dispatch(remTocart(item.id))} >-</button>
                <span>{getItemQuantity(item.id)}</span>
                <button onClick={() =>dispatch(addTocart(item))} className='addb'>+</button>
              </button>
            )}
   
  {/* <button className='addbutton'onClick={()=>dispatch(addTocart(item))}>Add to Cart</button> */}
  </div>
</div>
    </>
   ))}

    </>
  )

    
}
export default Product;