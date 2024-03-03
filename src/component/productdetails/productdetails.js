import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addTocart,remTocart } from "../../cartSlice";
import './productdetails.css' 
const ProductDetails = () => {  
    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state.allcart);
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result));
        setLoading(false);
    }, [])
    const getItemQuantity=(itemId)=>{ 
        const cartItem=cart.find((item)=>item.id===itemId);
        return cartItem?cartItem.quantity:0;
  
      }
    return (
        <>


            {loading ? (
                <div>Loading...</div>
            ) : product ? (
                <div className="container main">
                    <div className="row">
                        <div className="col-6">
                            <img src={product.image} className="product_img" alt="Product" />
                        </div>
                        <div className="col-6">
                            <h3>Price: <span>₹ </span> {product.price}</h3>
                            <p>{product.description}</p>
                            <p>{product.title}</p>
                            <p>Category: {product.category}</p>

                            {getItemQuantity(product.id) === 0 ? (
           <button className="addbutton" onClick={()=>dispatch(addTocart(product))}>
             Add to Cart
           </button>
         ) : (
           <button className='mainbutton' >
             <button className='sub'onClick={()=>dispatch(remTocart(product.id))} >-</button>
             <span style={{color:'black'}}>{getItemQuantity(product.id)}</span>
             <button onClick={()=>dispatch(addTocart(product))} className='addb'>+</button>
           </button> 

           )}
             {/* <button className='addbutton' on >Add To Cart</button> */}


                        </div>
                    </div>
                </div>
            ) : (
                <div>Product not found.</div>
            )}

        </>
    )
}
export default ProductDetails;