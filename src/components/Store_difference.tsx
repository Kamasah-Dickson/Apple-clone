import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useResize from "../useResize";
import { defferenceDataProp, titleType } from "../TypesData";

function Store_difference({
	difference,
	title,
}: defferenceDataProp & titleType) {
	const { size } = useResize();
	return (
		<div className="px-5 lg:px-0">
			<h1 className="mx-auto mt-20 mb-6 max-w-[900px] text-[28px] font-semibold leading-tight text-[#6e6e73] md:leading-none">
				<span className="text-black">{title.span}</span>
				{title.h1}
			</h1>
			<Swiper
				modules={[Navigation, A11y]}
				spaceBetween={20}
				navigation={size >= 768 ? true : false}
				breakpoints={{
					500: {
						slidesPerView: 1.5,
					},
					650: {
						slidesPerView: 2,
					},
					800: {
						slidesPerView: 2.5,
					},
					1000: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4.5,
					},
				}}
			>
				<SwiperSlide
					className={`important ${size <= 1400 && "hidden2"}`}
				></SwiperSlide>
				{difference.map((data) => {
					return (
						<SwiperSlide key={data.name} className="">
							<div className="my-trans my-3 cursor-pointer rounded-2xl bg-white shadow-md hover:scale-[1.02] hover:shadow-lg">
								<div className="relative flex h-[230px] flex-col items-start justify-start">
									<p className="ml-7 mt-7 w-[40px]">{data.img}</p>
									{data.text}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Store_difference;
