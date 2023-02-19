import { gridData } from "../commerceGridData";
import { MdKeyboardArrowRight } from "react-icons/md";
function GridCommerce() {
	return (
		<div className="grid grid-cols-1 gap-3 p-[10px] md:gap-4 md:p-[15px] lg:grid-cols-2">
			{gridData.map((data) => {
				const { logo, img, h1, white, green, imgShow, span, p, more } = data;
				return (
					<div key={h1} className="relative h-[400px] w-full md:h-[600px]">
						<img
							className="h-full w-full object-cover object-center"
							src={img}
							alt={h1}
						/>
						<div
							className={`${
								white ? "text-white" : "text-black"
							} absolute top-[10px] left-0 w-full text-center md:top-[55px]`}
						>
							{green ? (
								<h1 className=" mx-auto flex max-w-[600px] items-start justify-center text-4xl font-semibold">
									{imgShow && <img className="h-9 w-9" src={logo} alt={h1} />}
									<p>
										Mac does <span className="bg-[#02fd02]">that</span>
									</p>
								</h1>
							) : (
								<h1 className=" mx-auto flex max-w-[600px] items-start justify-center text-4xl font-semibold">
									{imgShow && <img className="h-9 w-9" src={logo} alt={h1} />}
									{h1}
								</h1>
							)}
							<span className="max-w-[600px] font-medium text-red-600">
								{span}
							</span>
							<p className="mx-auto max-w-[300px] text-xl font-light ">{p}</p>
							{more ? (
								<div className="mx-auto mt-5 w-fit text-[18px] font-normal text-[#2997ff]">
									<a
										className=" flex items-center justify-center transition-all hover:underline"
										href="#"
									>
										Learn more <MdKeyboardArrowRight size={25} />
									</a>
								</div>
							) : (
								<div className="mt-5 flex items-center justify-center gap-10 text-[18px] font-normal text-[#2997ff]">
									<a
										href="#"
										className=" flex items-center justify-center transition-all hover:underline"
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
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default GridCommerce;
