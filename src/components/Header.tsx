import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import StoreData from "../components/StoreData";
import MacData from "./MacData";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { animate, easeIn, easeInOut, motion } from "framer-motion";
import IpadData from "./IpadData";
import IphoneData from "./IphoneData";
import WatchData from "./WatchData";
import AirpodData from "./AirpodData";
import Tv_homeData from "./Tv&homeData";
import EntertainmentData from "./EntertainmentData";
import AccessoriesData from "./AccessoriesData";
import SupportData from "./SupportData";
import { navData } from "../navData";
import useResize from "../useResize";
import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";

function Header() {
	const { size } = useResize();
	const [show, setShow] = useState(false);
	const [showMobile, setShowMobile] = useState(false);
	const [target, setTarget] = useState<string | null>(null);
	const location = useLocation();

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
		<header
			className={`${
				show ? "bg-grayish" : "bg-[#323233e8]"
			} fixed top-0 left-0 z-[99] grid h-[45px] w-full shadow-md`}
		>
			{size >= 768 ? (
				<>
					<nav className={`mx-auto hidden w-full max-w-[1200px] md:block`}>
						<ul className="m-auto flex h-full max-w-[950px] items-center px-[20px] text-[12px] font-light text-whites md:justify-between">
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
									transition={{ duration: 0.3, delay: 0.2 }}
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
							<BsBag className="mx-5 cursor-pointer text-[20px] hover:text-white md:mx-0 md:text-[17px]" />
							<HiMenuAlt4
								className=" cursor-pointer hover:text-white md:hidden"
								size={20}
								onClick={() => setShowMobile((prev) => !prev)}
							/>
						</ul>
					</nav>
					<motion.div
						initial={{ height: "0" }}
						animate={show ? { height: "440px" } : { height: "0" }}
						transition={{ duration: 0.01 }}
						className={`my-trans absolute top-0 left-0 -z-10 overflow-hidden${
							show ? "min-h-auto  h-screen md:h-[440px]" : "h-0"
						} w-full bg-grayish`}
					>
						{show && (
							<motion.nav
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								className="mx-auto flex h-full max-w-[950px] flex-col justify-center overflow-hidden pt-[50px] pb-[50px]"
							>
								{show && ToggleLinks()}
							</motion.nav>
						)}
					</motion.div>
				</>
			) : (
				<MobileNav
					setTarget={setTarget}
					setShowMobile={setShowMobile}
					ToggleLinks={ToggleLinks}
					showMobile={showMobile}
				/>
			)}
		</header>
	);
}

export default Header;
