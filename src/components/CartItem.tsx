import React from "react"
import useHover from "../hooks/useHover"

type Props = {
	item: {
		id: string
		url: string
		isFavorite: boolean
	}
	price: number
	removeItem?: Function
}

function CartItem(props: Props) {
	const { hovered, ref } = useHover()

	return (
		<>
			<img src={props.item.url} alt = "" className="min-w-[130px] w-[45%] h-[150px] object-cover self-center justify-self-end" />
			<svg
				onClick={() => props.removeItem && props.removeItem(props.item.id)}
				ref={ref}
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 place-self-center cursor-pointer"
				fill={"none"}
				viewBox="0 0 24 24"
				stroke={hovered ? "grey" : "currentColor"}
				strokeWidth={2}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
				/>
			</svg>
			<p className = "self-center justify-self-start">
				{props.price.toLocaleString("en-PL", {
					style: "currency",
					currency: "EUR",
				})}
			</p>
		</>
	)
}

export default CartItem
