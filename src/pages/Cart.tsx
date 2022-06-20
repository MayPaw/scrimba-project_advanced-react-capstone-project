import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import CartItem from "../components/CartItem"
import UserMessage from "../components/UserMessage"

function Cart() {
	const { cartPhotos, removeFromCart, emptyCart, isShown, showUserMessage } = useContext(Context)
	const [order, setOrder] = useState("Place order")

	const price = 5.99
	const totalPrice = cartPhotos.length * price

	const cartItemElements = cartPhotos.map((photo) => (
		<CartItem
			key={photo.id}
			item={photo}
			removeItem={removeFromCart}
			price={price}
		/>
	))

	function placeOrder() {
		setOrder("Ordering...")

		setTimeout(() => {
			emptyCart && emptyCart()
			showUserMessage && showUserMessage()
			setOrder("Place order")
		}, 3000)
	}

	return (
		<div className = "bp-xl:container bp-xl:mx-auto">
			<main className="font-basic p-8">
				{cartPhotos.length ?
					<div className = "grid grid-cols-[auto_50px_auto] auto-rows-auto gap-10">
						<h1 className="text-3xl font-semibold mt-8 col-span-3 self-center justify-self-center">
							Check out
						</h1>
						{cartItemElements}
						<p className="font-semibold col-start-3 self-center justify-self-start">
							Total:
							{totalPrice.toLocaleString("en-PL", {
								style: "currency",
								currency: "EUR",
							})}
						</p>
						
							<button
								className="text-slate-100 font-semibold bg-red-800 rounded-lg px-6 py-3.5 col-span-3 self-center justify-self-center"
								onClick={placeOrder}>
								{order}
							</button>
					</div>
				: <div className="flex flex-col justify-between">
					<h1 className="bp-sm:text-3xl text-2xl text-center mt-20 font-semibold self-center">
						The cart is empty.
					</h1>
					<p className = "text-lg text-center mt-5 self-center"> Fill it with some nice photos 
						<Link to = "/" className = "font-semibold hover:cursor-pointer hover:text-slate-600"> here</Link> !</p>
				</div>
				}
				{isShown && <UserMessage message="Order placed!"/>}
			</main>
		</div>
	)
}

export default Cart
