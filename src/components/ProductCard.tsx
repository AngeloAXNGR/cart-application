import React from 'react'
import { CartContext } from '../contexts/CartContext'
import { CartType } from '../contexts/CartContext'

type CardProps = {
	id:number
	title: string
	price:number
	image:string
}

const ProductCard = ({id, title, price, image} : CardProps) => {

  const product = {
    id:id,
    title:title,
    price:price,
    image:image,
    quantity:1
  }

  const {cart, addToCart} = React.useContext(CartContext);
	return (
    <div className="card">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <p id="product-title">{title}</p>
        <div className="pricing">
          <p id="product-price">${price}</p>
          <button id="add-product" onClick={(e) =>addToCart(e, product)}>Add to Cart</button>
        </div>
      </div>
    </div>
	)
}

export default ProductCard