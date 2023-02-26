import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useResize from "../useResize";

type latestProps = {
	name: string;
	img: string;
	para: string;
	text: string;
	white: boolean;
}[];
interface latest_productsProps {
	Latest_Products: latestProps;
}

interface titleProp {
	h1: string;
	span: string;
}

interface titleType {
	title: titleProp;
}

function Latest_Products({
	Latest_Products,
	title,
}: titleType & latest_productsProps) {
	const { size } = useResize();
	return (
		<div className="px-5 lg:px-0">
			<h1 className="mx-auto mt-24 mb-6 max-w-[900px] text-[28px] font-semibold leading-tight text-[#6e6e73] md:leading-none">
				<span className="text-black">{title.span}</span>
				{title.h1}
			</h1>
			<Swiper
				navigation
				modules={[Navigation, A11y]}
				spaceBetween={20}
				breakpoints={{
					500: {
						slidesPerView: 1,
					},
					550: {
						slidesPerView: 1.5,
					},
					768: {
						slidesPerView: 2,
					},
					1000: {
						slidesPerView: 2.5,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3.5,
					},
				}}
			>
				<SwiperSlide
					className={`important ${size <= 1400 && "hidden2"}`}
				></SwiperSlide>
				{Latest_Products.map((data) => {
					return (
						<SwiperSlide
							key={data.name}
							tabIndex={0}
							className="my-trans relative my-5 w-full cursor-pointer rounded-3xl shadow-lg md:hover:scale-[1.03]"
						>
							<div
								className={`absolute p-6 ${
									data.white ? "text-white" : "text-black"
								}`}
							>
								<p className="font-normal">{data.name}</p>
								<h2 className="mt-3 max-w-[400px] text-[27px] font-semibold leading-tight">
									{data.text}
								</h2>
								<p className="mt-3 text-lg font-medium">{data.para}</p>
							</div>
							<img
								src={data.img}
								alt={data.name}
								className="h-[500px] rounded-3xl"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default Latest_Products;
