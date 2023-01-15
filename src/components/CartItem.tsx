import React from 'react'
import AddIcon from '../assets/plus.svg'
import SubtractIcon from '../assets/minus.svg'
import { CartContext } from '../contexts/CartContext'

type CartItemProps = {
  id:number
	image: string
	title: string
	total: number
	quantity: number
}

const CartItem = ({id,image, title, total, quantity}:CartItemProps) => {
  const {addQuantity, subtractQuantity} = React.useContext(CartContext)

	return (
    <div className="cart-item">
      <div className="item-left-section">
        <img src={image} alt="" />
      </div>
      <div className="item-right-section">
        <p className="cart-item-title">{title}</p>
        <p>${total}</p>

        <div className="quantity">
          <img id="subtract" src={SubtractIcon} alt="" onClick={(e) => subtractQuantity(e, id)}/>
          <p>{quantity}</p>
          <img id="add" src={AddIcon} alt="" onClick={(e) => addQuantity(e, id)}/>
        </div>
      </div>
    </div>
	)
}


export default CartItem