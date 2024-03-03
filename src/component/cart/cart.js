import { useSelector,useDispatch } from "react-redux";
import { addTocart,remTocart,remove } from "../../cartSlice";
const Cart=()=>{  
    const {cart,totalQuantity,totalPrice}=useSelector((state)=>state.allcart)
    console.log(cart.length,"l");
    console.log(totalQuantity);
    console.log(totalPrice)
// console.log(items)
    const dispatch=useDispatch();
    return (
        <>
        {totalQuantity==0?<h1>Empty Card</h1>:
        // <h1>{totalPrice}</h1>
        <>
        <div className="container" style={{marginTop:'40px'}}>
         <div className="row">
             <div className="col-8">
                 <table>
                     <thead>
                         <tr >
                             <td className="table-cell"><h4>Image</h4> </td>
                             <td className="table-cell"> <h4>Product Details</h4></td>
                         </tr>
 
                     </thead>
                     <tbody>
                         {cart.map((item)=>{
                             return (
                                 <tr key={item.id} style={{justifyContent:'center'}}>
                                     <td  className="table-cell" ><img src={item.image} style={{width:'100px'}}/></td>
                                     <td className="table-cell"><p> price : {item.price*item.quantity}</p>
                                     <button style={{width:'40px'}}onClick={()=>dispatch(remTocart(item.id))} >-</button><span style={{width:'100px'}}>{item.quantity}</span><button style={{width:'40px'}}onClick={()=>dispatch(addTocart(item))}  >+</button>
                                     </td>
                                     <button  onClick={()=>dispatch(remove(item.id))}>Remove</button>
                                 </tr>
                             )
                         })}
                     </tbody>
                 </table>
             </div>
             <div className="col-4">
                 <>
                 <h2>Order Summay</h2>
                 <h4>totalPrice :{totalPrice}</h4>
                 </>
             </div>
         </div>
        </div>
         </>
        
        
        }
        </>
    )
}
export default Cart;