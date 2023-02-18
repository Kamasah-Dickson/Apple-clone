import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperData } from "../swiperData";
import { motion } from "framer-motion";

function MovieSwiper() {
	return (
		<div className="overflow-hidden pb-10">
			<Swiper
				navigation
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={1.5}
				centeredSlides={true}
				loop={true}
			>
				{swiperData.map((data) => {
					return (
						<SwiperSlide key={data.text}>
							<div className="relative h-full w-full">
								{/* w-full */}
								<div className="h-[550px] w-full ">
									<img
										className=" h-full w-full object-cover object-center"
										src={data.img}
										alt={data.text}
									/>
								</div>
								{/* =====content===== */}
								<motion.div
									initial={{ translateY: "70px" }}
									animate={{ translateY: 0 }}
									transition={{ duration: 0.4 }}
									className="absolute bottom-14 left-14 flex items-center justify-center text-white"
								>
									<button className="mr-14 cursor-pointer rounded-3xl bg-white py-3 px-4 font-bold text-black transition-all hover:bg-gray-200 active:scale-x-105 active:bg-gray-100">
										Stream now
									</button>
									<h3 className="text-lg">
										<span className="mr-2 text-xl font-bold">
											{data.genre}.
										</span>
										{data.text}
									</h3>
								</motion.div>
								{/* =====overlay====== */}
								<div></div>
							</div>
						</SwiperSlide>
					);
				})}
				<div className="mt-10"></div>
			</Swiper>
		</div>
	);
}

export default MovieSwiper;
