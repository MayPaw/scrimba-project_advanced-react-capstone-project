import React, { useContext } from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

type Props = {
	photo: {
		id: string
		url: string
		isFavorite: boolean
	}
	containerClass: string
	class: string
}

function Image(props: Props) {
	const { hovered, ref } = useHover()
	const { toggleFavorite, cartPhotos, addToCart, removeFromCart } =
		useContext(Context)
	const inCart = cartPhotos.find((photo) => photo.id === props.photo.id)

	return (
		<div className={`${props.containerClass} relative`} ref={ref}>
			<img src={props.photo.url} alt = "" className={props.class} />
			{(hovered || props.photo.isFavorite) && (
				// favorite icon
				<svg
					onClick={() => {
						toggleFavorite && toggleFavorite(props.photo.id)
					}}
					xmlns="http://www.w3.org/2000/svg"
					className="h-9 w-9 absolute top-2 left-2 bg-white p-2 rounded-full hover:cursor-pointer"
					fill={props.photo.isFavorite ? "red" : "none"}
					viewBox="0 0 24 24"
					stroke={props.photo.isFavorite ? "red" : "currentColor"}
					strokeWidth={2}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			)}
			{(hovered || inCart) && (
				// cart icon
					<svg
						onClick={() => {
							!inCart && addToCart && addToCart(props.photo)
							inCart && removeFromCart && removeFromCart(props.photo.id)
						}}
						xmlns="http://www.w3.org/2000/svg"
						className="h-9 w-9 absolute top-2 right-2 bg-white p-2 rounded-full hover:cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
			)}
		</div>
	)
}

export default Image
