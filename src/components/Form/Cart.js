import { useContext } from "react"
import CartContext from "../context/CartContext"


const Cart = (props) =>{
    const ctx = useContext(CartContext)
    const cartitem = ctx.items.map((item)=>{
        return(<li>{`Candy Name : ${item.Name} Price : ${item.Price} Amount : ${item.Amount}`}</li>)
    })
    return(
        <div>
            {cartitem}
        </div>
    )
}



export default Cart