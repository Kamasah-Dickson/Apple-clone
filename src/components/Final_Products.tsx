import { experienceProp, headingProp, productProps } from "../TypesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useResize from "../useResize";

interface FinalProps {
	product: experienceProp;
	heading: headingProp;
}

function Final_Products({ product, heading }: FinalProps) {
	const { size } = useResize();
	return (
		<div className="mt-24 px-5 lg:px-0">
			<h2 className="mx-auto mt-20 mb-10 max-w-[950px] text-2xl font-semibold leading-tight text-[#6e6e73] md:text-[27px] md:leading-none">
				<span className="text-black">{heading.span}</span>
				{heading.text}
			</h2>
			<Swiper
				modules={[Navigation, A11y]}
				navigation
				spaceBetween={25}
				breakpoints={{
					500: {
						slidesPerView: 1.3,
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
				}}
			>
				<SwiperSlide
					className={`important ${size <= 1400 && "hidden2"}`}
				></SwiperSlide>

				{product.map((data) => {
					return (
						<SwiperSlide key={data.h1} className="my-5 rounded-3xl bg-white ">
							<div className=" my-trans relative flex  h-[500px] cursor-pointer  flex-col items-center justify-center overflow-hidden rounded-3xl shadow-md hover:scale-[1.02] hover:shadow-lg">
								<div className="absolute top-10 left-10">
									<span className="mb-2 text-sm font-medium text-gray-400">
										{data.span}
									</span>
									<h3 className="mb-4 max-w-[350px] text-3xl font-semibold">
										{data.h1}
									</h3>
									<p>{data.p}</p>
								</div>
								<div>
									<img
										className=" h-auto w-full "
										src={data.img}
										alt={data.h1}
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Final_Products;
