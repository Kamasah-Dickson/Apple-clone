import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { container, item } from "../animation";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShowMore_Nav from "./ShowMore_Nav";

interface mobileProp {
	setTarget: React.Dispatch<React.SetStateAction<string | null>>;
	setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
	ToggleLinks(): JSX.Element | null;
	showMobile: boolean;
}

function MobileNav({
	setTarget,
	setShowMobile,
	showMobile,
	ToggleLinks,
}: mobileProp) {
	const [extraNav, setExtraNav] = useState(false);

	return (
		<div>
			<nav className="m-auto h-full w-full max-w-[1200px]">
				<ul className="m-auto flex h-full max-w-[1000px] items-center px-[20px] text-[12px] font-light text-whites md:justify-between">
					<Link to="/" className="w-full md:w-auto">
						<img src={logo} className="h-[20px] w-[20px]" alt="" />
					</Link>

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
			{/* =========navigation========== */}
			<div
				className={`my-trans absolute top-0 left-0 z-10 overflow-hidden ${
					showMobile ? "min-h-auto  h-screen md:h-[440px] " : "h-0"
				} w-full bg-grayish`}
			>
				{showMobile && (
					<motion.nav
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						className="mx-auto flex h-full max-w-[950px] flex-col justify-center overflow-y-scroll pt-[50px] pb-[50px]"
					>
						<AiOutlineClose
							color="white"
							size={20}
							onClick={() => setShowMobile(false)}
							className="absolute top-5 right-5 cursor-pointer font-[12px] hover:text-white"
						/>
						{extraNav ? (
							<ShowMore_Nav
								showMobile={showMobile}
								setExtraNav={setExtraNav}
								ToggleLinks={ToggleLinks}
							/>
						) : (
							<motion.ul
								variants={container}
								initial="hidden"
								animate={showMobile && "show"}
								className="m-auto mt-10 flex h-full w-full max-w-[980px] flex-col gap-3 px-[20px] text-3xl font-bold text-whites"
							>
								<motion.p
									variants={item}
									tabIndex={0}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("store"))}
								>
									Store
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={1}
									className="hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("Mac"))}
								>
									Mac
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={2}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("ipad"))}
								>
									iPad
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={3}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("iphone"))}
								>
									iPhone
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={4}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("watch"))}
								>
									Watch
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={5}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("airpods"))}
								>
									Airpods
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={6}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("tv&home"))}
								>
									Tv & Home
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={7}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (
										setExtraNav(true), setTarget("entertainment")
									)}
								>
									Entertainment
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={8}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("accessories"))}
								>
									Accessories
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>

								<motion.p
									variants={item}
									tabIndex={9}
									className=" hover:my-hover flex cursor-pointer items-center justify-between hover:text-white"
									onClick={() => (setExtraNav(true), setTarget("support"))}
								>
									Support
									<MdKeyboardArrowRight className="icon" color="white" />
								</motion.p>
							</motion.ul>
						)}
					</motion.nav>
				)}
			</div>
		</div>
	);
}

export default MobileNav;