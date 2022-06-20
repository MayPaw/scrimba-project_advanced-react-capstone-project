import React from "react"
import { Link } from "react-router-dom"

function Header() {
	return (
		<header className="bp-sm:text-4xl text-2xl text-slate-100 w-full bg-red-800 bp-sm:p-7 py-7 px-2 shadow-lg ">
			<div className="bp-xl:container bp-xl:mx-auto flex items-center justify-between">
				<Link to="/scrimba-project_advanced-react-capstone-project/">
					<h2 className="font-decorative italic tracking-wider "> PicSome </h2>
				</Link>
				<Link to="/scrimba-project_advanced-react-capstone-project/cart">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="bp-sm:h-9 bp-sm:w-9 h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
					</svg>
				</Link>
			</div>
		</header>
	)
}

export default Header
