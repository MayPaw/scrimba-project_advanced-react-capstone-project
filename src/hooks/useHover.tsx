import React, { useState, useRef, useEffect } from "react"

function useHover() {
	const [hovered, setHovered] = useState(false)
	const ref: React.LegacyRef<any> | null = useRef (null)

	useEffect(() => {
		ref.current && ref.current.addEventListener("mouseenter", enter)
		ref.current && ref.current.addEventListener("mouseleave", leave)


		return () => {
			ref.current && ref.current.removeEventListener("mouseenter", enter)
			ref.current && ref.current.removeEventListener("mouseleave", leave)
		}
	}, [])

	function enter() {
		setHovered(true)
	}

	function leave() {
		setHovered(false)
	}

    return {hovered, ref}
}

export default useHover
