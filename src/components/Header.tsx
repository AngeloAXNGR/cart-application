import React from 'react'
import '../styles/header.css'
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
// import CartIcon from '../assets/cart.svg'
import CartIcon from '../assets/shop.svg';
import Cart from './Cart';

const Header = () => {
	const {cart, setShowCart} = React.useContext(CartContext);

	const [itemCount, setItemCount] = React.useState(0);
	React.useEffect(() => {
		let count = 0;
		for(let i = 0; i < cart.length; i++){
			count += cart[i].quantity
		}

		setItemCount(count);
	},[cart])

	return (
		<header>
			<Cart/>
			<h1 id="application-title">RifeCart</h1>
			<div className="header-links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/products">Products</NavLink>
			</div>
			<div id="cart">
				<img src={CartIcon} alt="" id="cart-button" onClick={() => {setShowCart(true)}}/>
				<p>{itemCount}</p>
			</div>
		</header>
	)
}
export default Header
