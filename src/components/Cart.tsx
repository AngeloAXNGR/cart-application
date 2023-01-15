import React from 'react'
import '../styles/cart.css'
import { CartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

const Cart = () => {
	const {cart, showCart,setShowCart} = React.useContext(CartContext);

	const [runningTotal, setRunningTotal] = React.useState(0);

	React.useEffect(() => {
		let total = 0;
		for(let i = 0; i < cart.length; i++){
			// setRunningTotal(cart[i])
			total += (cart[i].quantity * cart[i].price)
		}

		setRunningTotal(total);
	}, [cart])

	const cartItemElements = cart.map((item, index) => {
		return(
			<CartItem
				key={index}
				id={cart[index].id}
				image={cart[index].image}
				title={cart[index].title}
				quantity={cart[index].quantity}
				total={(cart[index].quantity * cart[index].price)}
			/>
		);
	})
	

	return (
		<div className="cart-component">
			<div onClick={() => setShowCart(false)} className="filler" style={showCart ? {transform:'translateX(0)'} : {transform:'translateX(-100%)'}}></div>

			<div className="sidebar" style={showCart ? {transform:'translateX(0)'} : {transform:'translateX(100%)'}}>
				<h1>Cart Summary</h1>
				<div className="cart-items">
					{cartItemElements}
				</div>
				<h2>Running Total: {runningTotal.toFixed(2)}</h2>
				<button id="checkout">Check Out</button>
				<button id="close-cart" onClick={() => setShowCart(false)}>Close</button>
			</div>
		</div>
	)
}

export default Cart