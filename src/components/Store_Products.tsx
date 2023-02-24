import custromercare from "../assets/store_assets/store-chat-specialist-icon-202211_AV2.jpg";
import qustion from "../assets/store_assets/question.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import useResize from "../useResize";

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
		<div className="mx-auto max-w-[1300px]">
			{/* 64 */}
			<div className="mx-auto mb-20 flex max-w-[900px] flex-wrap items-center justify-between gap-10 pt-[80px]">
				<h1 className=" max-w-2xl text-[48px] font-semibold leading-none text-[#6e6e73]">
					<span className="text-black"> Store.</span> The best way to buy the
					products you love.
				</h1>
				<div className=" flex  flex-col gap-2">
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
							<a href="#">Ask a Specialist</a>
						</div>
					</div>
					<div className=" flex items-center justify-center gap-2">
						<div className="h-10 w-10 overflow-hidden rounded-full">
							<img src={qustion} alt="Find store" />
						</div>
						<div className="flex flex-col justify-start">
							<h2 className="text-[14px] font-normal text-black">
								Visit an Apple Store?
							</h2>
							<a href="#">
								<p>Find one near you</p> <MdKeyboardArrowRight />
							</a>
						</div>
					</div>
				</div>
			</div>
			<Swiper
				// navigation={size <= 1600 ? true : false}
				navigation
				spaceBetween={17}
				centeredSlides={true}
				slidesPerView={4}
				modules={[Navigation]}
				breakpoints={{
					600: {
						slidesPerView: 5,
					},
					768: {
						slidesPerView: 7,
					},
					1000: {
						slidesPerView: 9,
					},
					1300: {
						slidesPerView: 25,
					},
					1500: {
						slidesPerView: 28,
					},
				}}
			>
				{products.map((data) => (
					<SwiperSlide key={data.name} className="important">
						<div className=" text-center">
							<img
								src={data.img}
								alt={data.name}
								className="important select-none"
							/>
							<p className="tex-black mt-3 font-normal">{data.name}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Store_Products;
