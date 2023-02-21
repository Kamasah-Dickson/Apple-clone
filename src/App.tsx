import "./index.css";
import homebg from "./assets/hero_iphone14pro__e5xbgo5ffhg2_large.jpg";
import mobileHomeBg from "./assets/hero_iphone14pro__e5xbgo5ffhg2_small_2x.jpg";
import iphoneBg from "./assets/hero_iphone14__fjmsqstr1ceq_large.jpg";
import creativityBg from "./assets/download.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import useResize from "./useResize";
import GridCommerce from "./components/GridCommerce";
import MovieSwiper from "./components/MovieSwiper";
import Footer from "./components/Footer";
import TopAdd from "./components/TopAdd";

export default function App() {
	const { size } = useResize();

	return (
		<>
			<main className="top-12">
				<TopAdd />
				<div className="mx-auto max-w-[2500px]">
					<div className="relative h-[90vh]">
						<img
							src={size >= 768 ? homebg : mobileHomeBg}
							alt="Iphone 14"
							className="h-full object-cover object-center"
						/>
						<div className="absolute top-[50px] left-0 grid w-full place-content-center text-center font-semibold">
							<h1 className="text-[40px] tracking-[0.28] text-white md:text-[56px]">
								iPhone 14 Pro
							</h1>
							<p className="text-[28px] font-normal text-white">Pro.Beyond.</p>
							<div className="flex items-center justify-center gap-10 text-[21px] font-normal text-[#2997ff]">
								<a
									href="#"
									className="flex items-center justify-center transition-all hover:underline"
								>
									Learn more <MdKeyboardArrowRight size={25} />
								</a>
								<a
									href="#"
									className="flex items-center justify-center hover:underline"
								>
									Buy <MdKeyboardArrowRight size={25} />
								</a>
							</div>
						</div>
					</div>

					<div className="relative h-[80vh]">
						<img
							src={iphoneBg}
							alt="Iphone 14"
							className="h-full object-cover object-center"
						/>
						<div className="absolute top-[50px] left-0 grid w-full place-content-center text-center font-semibold">
							<h1 className="text-[rgb(29, 29, 31] text-[50px] tracking-[0.28] md:text-[56px]">
								iPhone 14
							</h1>
							<p className="text-[rgb(29, 29, 31] text-[28px] font-normal">
								Big and bigger.
							</p>
							<div className="flex items-center justify-center gap-10 text-[21px] font-normal text-[#2997ff]">
								<a
									href="#"
									className="flex items-center justify-center transition-all hover:underline"
								>
									Learn more <MdKeyboardArrowRight size={25} />
								</a>
								<a
									href="#"
									className="flex items-center justify-center hover:underline"
								>
									Buy <MdKeyboardArrowRight size={25} />
								</a>
							</div>
						</div>
					</div>
					<div className="relative h-fit">
						<div className="absolute top-[35px] left-0 grid w-full place-content-center p-2 text-center font-semibold md:top-[50px]">
							<h1 className="text-[37px] leading-[1.2] tracking-[0.28] text-white md:max-w-[800px] md:text-[56px]">
								Creativity and community Woven together.
							</h1>
							<p className=" text-[rgb(29, 29, 31] mx-auto mt-2 mb-3 text-[19px] font-normal leading-[1.2] text-white md:max-w-[450px] md:text-[28px]">
								Explore the new Black Unity Watch band and matching face.
							</p>
							<div className=" flex max-w-[800px] items-center justify-center gap-10 text-[21px] font-normal text-[#2997ff]">
								<a
									href="#"
									className="flex items-center justify-center transition-all hover:underline"
								>
									Learn more <MdKeyboardArrowRight size={25} />
								</a>
								<a
									href="#"
									className="flex items-center justify-center hover:underline"
								>
									Buy <MdKeyboardArrowRight size={25} />
								</a>
							</div>
						</div>
						<img
							className="h-[624px] w-full object-cover object-bottom"
							src={creativityBg}
							alt="creativity"
						/>
					</div>
					{/* ==========grid-commerce========== */}
					<GridCommerce />
					{/* ==========Movieswiper========== */}

					<MovieSwiper />
					{/* ====footer======= */}
					<Footer />
				</div>
			</main>
		</>
	);
}
