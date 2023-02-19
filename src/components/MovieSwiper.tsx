import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { swiperData } from "../swiperData";
import { AiFillPlayCircle } from "react-icons/ai";
import useResize from "../useResize";

function MovieSwiper() {
	const { size } = useResize();
	return (
		<div className="overflow-hidden pb-10">
			<Swiper
				pagination={{ clickable: true }}
				modules={[Pagination]}
				spaceBetween={15}
				slidesPerView={1.5}
				centeredSlides={true}
				loop={true}
			>
				{swiperData.map((data, index) => {
					return (
						<SwiperSlide key={data.text}>
							<div className="relative h-full w-full cursor-grab">
								<div className="h-[550px] w-full ">
									<img
										className=" h-full w-full object-cover object-top md:object-center"
										src={size <= 750 ? data.mobile_img : data.img}
										alt={data.text}
									/>
								</div>
								{size <= 750 ? (
									<img
										className="absolute top-10"
										src={data.mobile_name}
										alt={data.text}
									/>
								) : null}
								{/* =====content===== */}
								<div className="absolute bottom-12 left-0 flex flex-wrap items-center justify-center p-2 text-center text-white md:left-14">
									<button className="mr-0 mb-3 flex cursor-pointer items-center justify-center gap-3 rounded-3xl bg-white py-3 px-5 font-bold text-black transition-all hover:bg-gray-200 active:scale-x-105 active:bg-gray-100 md:mb-0 md:mr-10">
										Stream now
										<AiFillPlayCircle />
									</button>
									<h3 className="max-w-[550px] text-lg">
										<span className="mr-2 text-xl font-bold">
											{data.genre}.
										</span>
										{data.text}
									</h3>
								</div>
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
