import custromercare from "../assets/store_assets/store-chat-specialist-icon-202211_AV2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import useResize from "../useResize";

import "swiper/css";
import "swiper/css/navigation";

type propductType = {
	name: string;
	img: string;
}[];

interface productsProps {
	products: propductType;
}

function Store_Products({ products }: productsProps): JSX.Element {
	const { size } = useResize();
	return (
		<div>
			<div className="mx-auto mb-20 flex max-w-[900px] flex-col items-start justify-between gap-10 px-5 pt-[80px] lg:flex-row lg:items-center lg:px-0">
				<h1 className="max-w-2xl text-[30px] font-semibold leading-tight text-[#6e6e73] md:text-[48px] md:leading-none">
					<span className="text-black"> Store.</span> The best way to buy the
					products you love.
				</h1>
				<div className=" flex gap-5 lg:flex-col lg:gap-3">
					<div className=" flex items-center justify-center gap-2">
						<div className="h-10 w-10 overflow-hidden rounded-full">
							<img
								src={custromercare}
								alt="Need help?"
								className="rounded-full"
							/>
						</div>
						<div className="flex flex-col justify-start">
							<h2 className="text-[14px] font-normal text-black">
								Need shoping help?
							</h2>
							<a className="text-sm font-normal text-apple-blue" href="#">
								Ask a Specialist
							</a>
						</div>
					</div>
					<div className=" flex items-center justify-center gap-2">
						<div className="h-10 w-10 overflow-hidden rounded-full">
							<svg
								viewBox="0 0 35 35"
								aria-hidden="true"
								width="35px"
								height="35px"
							>
								<path fill="none" d="M0 0h35v35H0z"></path>
								<path d="M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z"></path>
								<path d="M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z"></path>
							</svg>
						</div>
						<div className="flex flex-col justify-start">
							<h2 className="text-[14px] font-normal text-black">
								Visit an Apple Store?
							</h2>
							<a
								href="#"
								className="flex items-center justify-center text-sm font-normal text-apple-blue"
							>
								<p>Find one near you</p> <MdKeyboardArrowRight />
							</a>
						</div>
					</div>
				</div>
			</div>
			<Swiper
				navigation={size >= 768 ? true : false}
				spaceBetween={15}
				slidesPerView={3}
				modules={[Navigation, A11y]}
				breakpoints={{
					500: {
						slidesPerView: 5,
					},

					768: {
						slidesPerView: 6,
					},

					1200: {
						slidesPerView: 7,
					},
				}}
			>
				<SwiperSlide
					className={`important ${size <= 1400 && "hidden2"}`}
				></SwiperSlide>
				{products.map((data) => (
					<SwiperSlide tabIndex={0} key={data.name} className="cursor-pointer">
						<div className=" text-center">
							<img src={data.img} alt={data.name} className="select-none" />
							<p className="tex-black mt-3 font-normal">{data.name}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Store_Products;
