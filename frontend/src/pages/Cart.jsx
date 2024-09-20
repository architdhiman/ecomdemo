import React from 'react'
import { useCart } from '../context/cart'

const Cart = () => {
    const [cart,setCard] = useCart()
    console.log("cart content is =",cart)

    const total = () =>{
        var sum=0;
        cart.map((product) =>{
            sum = sum + product.price 
        })
        return sum;
    }
  return (
    <div>
        cart
      {cart.length} <br />
      {cart.map((product)=>{
        return(
            <>
            <ul>
            <li>{product.name}</li>
            <li>{product.color}</li>
            <li>{product.size}</li>
            <li>{product.price}</li>
            </ul>            
            </>
            
        )
      })}
      <hr />
      {total()}
    </div>
  )
}

export default Cart
