import React, { useReducer, useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import { motion } from "framer-motion";

function Header() {
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState<string | null>(null);

	const navData = [
		{
			title: "shop",
			data: [
				"Shop the latest",
				"Mac",
				"Ipad",
				"Iphone",
				"Apple Watch",
				"Accessories",
			],
			quickLinks_title: "Quick Links",
			linksData: [
				"Find a Store",
				"Order Status",
				"Financing",
				"Apple Trade In",
			],
			specials_title: "Shop Special Stores",
			specials_links: [
				"Certified Refurbished",
				"Education",
				"Business",
				"Veterans & Military",
				"Government",
			],
		},
		{
			title: "Explore mac",
			data: [
				"Macbook Air",
				"Macbook Pro",
				"iMac",
				"Mac mini",
				"Mac studio",
				"Mac Pro",
				"Displays",
			],
		},
	];

	interface dataProp {
		title: string;
		data: string[];
		quickLinks_title?: string;
		linksData?: string[];
		specials_title?: string;
		specials_links?: string[];
	}
	[];

	function displayData(Navdata: dataProp) {
		const title = Navdata.title;
		const list = Navdata.data.map((data) => <li key={data}>{data}</li>);
		const quickLinks_title = Navdata?.quickLinks_title;
		const quickLinks = Navdata.linksData?.map((data) => (
			<li key={data}>{data}</li>
		));
		const specials_title = Navdata?.specials_title;
		const specialLinks = Navdata.specials_links?.map((data) => (
			<li key={data}>{data}</li>
		));

		return (
			target === "store" && (
				<div className="my-grid">
					<div>
						<h3 className="text-[12px] text-[#86868b]">{title}</h3>
						<ul className="mt-6 flex flex-col gap-4 text-[24px] text-[#E8E8ED]">
							{list}
						</ul>
					</div>
					<div className="justify-self-end">
						<h3 className="text-[12px] text-[#86868b]">{quickLinks_title}</h3>
						<ul className="mt-6 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
							{quickLinks}
						</ul>
					</div>
					<div className="justify-self-end">
						<h3 className="text-[12px] text-[#86868b]">{specials_title}</h3>
						<ul className="mt-6 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
							{specialLinks}
						</ul>
					</div>
				</div>
			)
		);
	}

	return (
		<>
			<header className="fixed top-0 left-0 z-[99] w-full bg-grayish shadow-md">
				<nav
					className={`m-auto max-w-[1200px] ${
						show ? "bg-grayish" : "bg-grayish"
					} py-[15px]`}
				>
					<ul className=" flex items-center justify-center gap-10 text-sm text-[12px] font-normal text-whites">
						<Link to="/">
							<img src={logo} className="h-[20px] w-[20px]" alt="" />
						</Link>
						<NavLink
							className="hover:text-white"
							to="/store"
							onMouseOver={() => (setShow(true), setTarget("store"))}
						>
							Store
							<ul
								className={`absolute top-0 left-0 -z-10  ${
									show ? "h-[470px]" : "h-0"
								} w-full bg-grayish`}
							>
								<nav className="mx-auto  flex h-full max-w-[1030px] flex-col justify-center overflow-hidden">
									{show && displayData(navData[0])}
								</nav>
							</ul>
						</NavLink>
						<NavLink
							className="hover:text-white"
							to="/mac"
							onMouseOver={() => setTarget("Mac")}
						>
							Mac
						</NavLink>
						<NavLink className="hover:text-white" to="/ipad">
							iPad
						</NavLink>
						<NavLink className="hover:text-white" to="/iphone">
							iPhone
						</NavLink>
						<NavLink className="hover:text-white" to="/watch">
							Watch
						</NavLink>
						<NavLink className="hover:text-white" to="/airpods">
							Airpods
						</NavLink>
						<NavLink className="hover:text-white" to="/tv&home">
							Tv & Home
						</NavLink>
						<NavLink className="hover:text-white" to="/entertainment">
							Entertainment
						</NavLink>
						<NavLink className="hover:text-white" to="/accessories">
							Accessories
						</NavLink>
						<NavLink className="hover:text-white" to="/support">
							Support
						</NavLink>
						{show && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								className={`overlay absolute top-0 left-0 -z-20 ${
									show ? "h-screen" : "h-0"
								} w-full blur`}
								onMouseOver={() => setShow(false)}
							></motion.div>
						)}

						{/* <HiMenuAlt4 className="cursor-pointer hover:text-white" size={20} />
						<AiOutlineClose
							size={20}
							className="cursor-pointer
					 font-[12px] hover:text-white"
						/> */}
						<AiOutlineSearch
							className="cursor-pointer hover:text-white"
							size={18}
						/>
						<BsBag className="cursor-pointer hover:text-white" size={16} />
						{/* <NavLink to="/support"></NavLink> */}
						{/* <NavLink to="/support"></NavLink> */}
					</ul>
				</nav>
				{/* <div className="top-0 left-0  h-screen w-full blur "></div> */}
				{/* <div className="absolute top-0 left-0  -z-20 h-screen w-full bg-red-400 "></div> */}
			</header>
		</>
	);
}

export default Header;
