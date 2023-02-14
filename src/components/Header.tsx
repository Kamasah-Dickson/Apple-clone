import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
function Header() {
	return (
		<header className="fixed top-0 left-0 h-[60px] w-full bg-grayish shadow-md">
			<nav className="mw-[1200px] m-auto h-full">
				<ul className="flex h-full items-center justify-center gap-4 text-white">
					<Link to="/">
						<img src={logo} className="h-[30px] w-[30px]" alt="" />
					</Link>
					<NavLink to="/store">Store</NavLink>
					<NavLink to="/mac">Mac</NavLink>
					<NavLink to="/ipad">ipad</NavLink>
					<NavLink to="/iphone">iphone</NavLink>
					<NavLink to="/watch">Watch</NavLink>
					<NavLink to="/airpods">Airpods</NavLink>
					<NavLink to="/tv&home">Tv & Home</NavLink>
					<NavLink to="/onlyonapple">Only on Apple</NavLink>
					<NavLink to="/accessories">Accessories</NavLink>
					<NavLink to="/support">Support</NavLink>
					{/* <NavLink to="/support"></NavLink> */}
					{/* <NavLink to="/support"></NavLink> */}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
