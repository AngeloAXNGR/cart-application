import React from "react"


export type CartType = {
	image:string
	id: number
	title: string
	price: number
	quantity: number
}

type CartContextType = {
	cart: CartType[] | []
	addToCart: (event:React.MouseEvent<HTMLButtonElement>, product:CartType) => void
	showCart:boolean
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
	addQuantity:(event:React.MouseEvent<HTMLImageElement>, id:number) => void
	subtractQuantity:(event:React.MouseEvent<HTMLImageElement>, id:number) => void
}

type CartContextProviderProps = {
	children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextType);

export const CartContextProvider = ({children}: CartContextProviderProps) => {
	const [cart, setCart] = React.useState<CartType[]>([]);
	const [showCart, setShowCart] = React.useState(false);

	React.useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart))
	},[cart])

	const addToCart = (event:any, product:CartType) =>{
    setCart(prevCart => {
      const notAdded = prevCart.every(item =>{
        return item.id !== product.id
      })
      if(notAdded){
        return [...prevCart, product]
      }else{
        return prevCart.map(item => {
          return item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
        })
      }
    })
	}

	const addQuantity = (event:any, id:number) =>{
    setCart(prevCart => {
      return prevCart.map(item =>{
        return item.id === id ? {...item, quantity: item.quantity + 1} : item;
      })
    })
  }

  const subtractQuantity = (event:any, id:number) =>{
    const selectedCartItem = cart.find(item => item.id === id);

    // Check if quantity of current item is less than 2
    // If it is, remove cart item after clicking subtract button again 
		if(selectedCartItem === undefined){
			return
		}else{
			if(selectedCartItem.quantity < 2){
				setCart(prevCart => {
					return prevCart.filter(item => item.id !== id);
				})
			}else{
				setCart(prevCart => {
					return prevCart.map(item =>{
						return item.id === id ? {...item, quantity: item.quantity - 1} : item;
					})
				})
			}
		}
  }
	
	
	return(
		<CartContext.Provider value={{cart, addToCart, showCart, setShowCart, addQuantity, subtractQuantity}}>
			{children}
		</CartContext.Provider>
	)
}


