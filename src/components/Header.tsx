import React, { useReducer, useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import StoreData from "../components/StoreData";
import MacData from "./MacData";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import IpadData from "./IpadData";
import IphoneData from "./IphoneData";
import WatchData from "./WatchData";
import AirpodData from "../AirpodData";
import Tv_homeData from "./Tv&homeData";
import EntertainmentData from "./EntertainmentData";
import AccessoriesData from "./AccessoriesData";
import SupportData from "./SupportData";

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
			shopMac_title: "Shop Mac",
			shopMac_links: [
				"Shop Mac",
				"Mac Accessories",
				"Financing",
				"Apple Trade in",
			],
			moreMac_title: "More from Mac",
			moreMac_links: [
				"Mac Support",
				"macOS Ventura",
				"Continuity",
				"iCloud",
				"Mac for Business",
				"Education",
			],
		},
		{
			title: "Explore iPad",
			data: ["iPad Pro", "iPad Air", "iPad Mini", "Apple Pencil", "Keyboards"],
			shopIpad_title: "Shop iPad",
			shopIpad_links: [
				"Shop iPad",
				"iPad Accessories",
				"Financing",
				"Apple Trade in",
			],
			moreIpad_title: "More from iPad",
			moreIpad_links: ["iPad Support", "iPadOS Ventura", "iCloud", "Education"],
		},
		{
			title: "Explore iPhone",
			data: [
				"iPhone 14 Pro",
				"iPhone 14",
				"iPhone 13",
				"iPhone 12",
				"iPhone SE",
			],
			shopIphone_title: "Shop iPhone",
			shopIphone_links: [
				"Shop iPhone",
				"iPhone Accessories",
				"Apple Trade in",
				"Carrier Deals",
				"Financing",
			],
			moreIphone_title: "More from iPhone",
			moreIphone_links: [
				"iPhone Support",
				"iOS 16",
				"iPhone Privacy",
				"iCloud",
				"Wallet,Pay,Card",
				"Siri",
			],
		},
		{
			title: "Explore Watch",
			data: [
				"Apple Watch Ultra",
				"Apple Watch Series 8",
				"Apple Watch Series SE",
				"Apple Watch Nike",
				"Apple Watch Hermes",
			],
			shopWatch_title: "Shop Watch",
			shopWatch_links: [
				"Shop Apple Watch",
				"Apple Watch Studio",
				"Apple Watch Bands",
				"Apple Watch Accessories",
				"Financing",
				"Apple Trade In",
			],
			moreWatch_title: "More from Watch",
			moreWatch_links: ["Apple Watch Support", "watchOS 9", "Apple FItness+"],
		},
		{
			title: "Explore Airpods",
			data: [
				"AirPods 2nd generation",
				"AirPods 3nd generation",
				"AirPods Pro 2nd generation",
				"AirPods Max",
			],
			shopPods_title: "Shop Airpods",
			shopPods_links: ["Shop AirPods", "AirPods Accessories"],
			morePods_title: "More from AirPods",
			morePods_links: ["AirPods Support", "Apple Music"],
		},
		{
			title: "Explore TV & Home",
			data: ["Apple TV 4K", "HomePod", "HomePod mini"],
			shopTV_title: "Shop Tv & Home",
			shopTV_links: [
				"Shop Apple TV",
				"Shop HomePod",
				"Shop HomePod mini",
				"Shop Siri Remote",
				"TV & Home Accessories",
			],
			moreTV_title: "More from TV & Home",
			moreTV_links: [
				"Apple TV Support",
				"HomePod Support",
				"Apple TV App",
				"Apple TV+",
				"Home App",
				"Apple Music",
				"Siri",
				"Aiplay",
			],
		},
		{
			title: "Explore Entertainment",
			data: [
				"Apple One",
				"Apple TV+",
				"Apple Music",
				"Apple Arcade",
				"Apple Fitness+",
				"Apple News+",
				"Apple Podcasts",
				"Apple Books",
				"App Store",
			],
			entertainment_title: "Support",
			entertainment_links: ["Apple TV+ Support", "Apple Music Support"],
		},
		{
			title: "Shop Accessories",
			data: ["Mac", "iPad", "iPhone", "Apple Watch", "AirPods", "TV & Home"],
			explore_accessories_title: "Explore Accessories",
			explore_accessories_links: ["Made by Apple", "Beats by Dr.Dre", "AirTag"],
		},
		{
			title: "Explore Support",
			data: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"],
			getHelp_title: "Get Help",
			getHelp_links: ["Communities", "Check Coverage", "Repair", "Contact Us"],
			helpful_topics_title: "Helpful Topics",
			helpful_topics_links: [
				"Get AppleCare+",
				"Apple ID & Password",
				"Billing & Subscriptions",
				"Find My",
				"Accessibility",
			],
		},
	];

	function ToggleLinks() {
		return target === "store" ? (
			<StoreData Navdata={navData[0]} />
		) : target === "Mac" ? (
			<MacData Navdata={navData[1]} />
		) : target === "ipad" ? (
			<IpadData Navdata={navData[2]} />
		) : target === "iphone" ? (
			<IphoneData Navdata={navData[3]} />
		) : target === "watch" ? (
			<WatchData Navdata={navData[4]} />
		) : target === "airpods" ? (
			<AirpodData Navdata={navData[5]} />
		) : target === "tv&home" ? (
			<Tv_homeData Navdata={navData[6]} />
		) : target === "entertainment" ? (
			<EntertainmentData Navdata={navData[7]} />
		) : target === "accessories" ? (
			<AccessoriesData Navdata={navData[8]} />
		) : target === "support" ? (
			<SupportData Navdata={navData[9]} />
		) : null;
	}

	return (
		<>
			<header
				className={`${
					show ? "bg-grayish" : "bg-[#323233e8]"
				} fixed top-0 left-0 z-[99] grid h-[45px] w-full shadow-md`}
			>
				<nav className={`m-auto w-full max-w-[1200px]`}>
					<ul className="m-auto flex max-w-[1000px] items-center px-[20px] text-[12px] font-light text-whites md:justify-between">
						<Link to="/" className="w-full md:w-auto">
							<img src={logo} className="h-[20px] w-[20px]" alt="" />
						</Link>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/store"
							onMouseOver={() => (setShow(true), setTarget("store"))}
							onClick={() => setShow(false)}
						>
							Store
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/mac"
							onMouseOver={() => (setTarget("Mac"), setShow(true))}
							onClick={() => setShow(false)}
						>
							Mac
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/ipad"
							onMouseOver={() => (setShow(true), setTarget("ipad"))}
							onClick={() => setShow(false)}
						>
							iPad
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/iphone"
							onMouseOver={() => (setShow(true), setTarget("iphone"))}
							onClick={() => setShow(false)}
						>
							iPhone
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/watch"
							onMouseOver={() => (setShow(true), setTarget("watch"))}
							onClick={() => setShow(false)}
						>
							Watch
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/airpods"
							onMouseOver={() => (setShow(true), setTarget("airpods"))}
							onClick={() => setShow(false)}
						>
							Airpods
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/tv&home"
							onMouseOver={() => (setShow(true), setTarget("tv&home"))}
							onClick={() => setShow(false)}
						>
							Tv & Home
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/entertainment"
							onMouseOver={() => (setShow(true), setTarget("entertainment"))}
							onClick={() => setShow(false)}
						>
							Entertainment
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/accessories"
							onMouseOver={() => (setShow(true), setTarget("accessories"))}
							onClick={() => setShow(false)}
						>
							Accessories
						</NavLink>
						<NavLink
							className="hidden hover:text-white md:flex"
							to="/support"
							onMouseOver={() => (setShow(true), setTarget("support"))}
							onClick={() => setShow(false)}
						>
							Support
						</NavLink>
						{show && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2, delay: 0.3 }}
								className={`overlay absolute top-0 left-0 -z-20 ${
									show ? "h-screen" : "h-0"
								} w-full blur`}
								onMouseOver={() => setShow(false)}
							></motion.div>
						)}
						<AiOutlineClose
							size={20}
							className="hidden cursor-pointer
					 font-[12px] hover:text-white"
						/>
						<AiOutlineSearch
							className=" cursor-pointer hover:text-white"
							size={20}
						/>
						<BsBag
							className="mx-5 cursor-pointer text-[20px] hover:text-white md:mx-0 md:text-[17px]"
							// size={20}
						/>
						<HiMenuAlt4
							className=" cursor-pointer hover:text-white md:hidden"
							size={20}
						/>
					</ul>
				</nav>
				<div
					className={`my-trans absolute top-0 left-0 -z-10 overflow-hidden ${
						show ? "min-h-auto h-[440px]" : "h-0"
					} w-full bg-grayish`}
				>
					{show && (
						<motion.nav
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.35 }}
							className="mx-auto flex h-full max-w-[950px] flex-col justify-center overflow-hidden pt-[50px] pb-[50px]"
						>
							{show && ToggleLinks()}
						</motion.nav>
					)}
				</div>
			</header>
		</>
	);
}

export default Header;
