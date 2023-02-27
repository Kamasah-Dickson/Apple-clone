import { productProps } from "../TypesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useResize from "../useResize";

function Accessory_Products({ leading, product, heading }: productProps) {
	const { size } = useResize();
	return (
		<div className="mt-24 px-5 lg:px-0">
			<h2 className="mx-auto mt-20 mb-10 max-w-[900px] text-2xl font-semibold leading-tight text-[#6e6e73] md:text-[27px] md:leading-none">
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
					1200: {
						slidesPerView: 4,
					},
				}}
			>
				<SwiperSlide
					className={`important ${size <= 1400 && "hidden2"}`}
				></SwiperSlide>

				{leading.map((data) => {
					return (
						<SwiperSlide key={data.title} className="my-5 cursor-pointer">
							<div className="my-trans relative h-[450px] cursor-pointer overflow-hidden rounded-3xl shadow-md hover:scale-[1.01] hover:shadow-lg">
								<div className=" absolute top-10 left-7">
									<h1 className="mb-3 text-3xl font-semibold text-black">
										{data.title}
									</h1>
									<p>{data.text}</p>
								</div>
								<div className=" h-full">
									<img
										className="h-full w-full"
										src={data.img}
										alt={data.title}
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				{product.map((data) => {
					return (
						<SwiperSlide
							key={data.title}
							className="my-5 rounded-3xl bg-white "
						>
							<div className=" my-trans flex h-[450px] cursor-pointer flex-col justify-center gap-5 overflow-hidden rounded-3xl shadow-md hover:scale-[1.02] hover:shadow-lg">
								<div className=" h-[250px] w-full">
									<img
										className=" h-full w-full object-contain"
										src={data.img}
										alt={data.title}
									/>
								</div>
								<div className=" ml-10">
									<p className="mb-2 text-sm font-normal text-[#bf4800]">
										{data.new && <span>New</span>}
									</p>
									<h3 className="mb-4 max-w-[250px] text-base font-semibold">
										{data.title}
									</h3>
									<p>{data.price}</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Accessory_Products;
