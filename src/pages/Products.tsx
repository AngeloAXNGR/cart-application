import React from 'react'
import ProductCard from '../components/ProductCard';

import '../styles/products.css';

type CardType = {
	id: number
	title: string
	price: number
	image: string
}

const Products = () => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		const getProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
		}

		getProducts();
	}, [])

	const productCards = products.map((product: CardType) => {
		return(
			<ProductCard
				key={product.id}
				id={product.id}
				title={product.title}
				price={product.price}
				image={product.image}
			/>
		)
	})

	return (
		<div className="catalog">
			{productCards}
		</div>
	)
}
export default Products;