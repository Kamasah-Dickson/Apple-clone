import "./index.css";
import Header from "./components/Header";
import homebg from "./assets/hero_iphone14pro__e5xbgo5ffhg2_large.jpg";
import iphoneBg from "./assets/hero_iphone14__fjmsqstr1ceq_large.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function App() {
	return (
		<>
			<main className="home relative h-[90vh]">
				<div className="mt-12">
					<p className="mx-auto max-w-[700px] py-2 text-center text-[15px] font-normal">
						Get $200–$570 in credit toward an iPhone 14 when you trade in an
						iPhone 11 or newer.
						<a className="font-semibold text-[#2997ff] " href="#">
							<sup>1</sup> Shop iPhone
						</a>
					</p>
				</div>
				<img
					src={homebg}
					alt="Iphone 14"
					className="h-full object-cover object-center"
				/>

				<div className="absolute top-[85px] left-0 grid w-full place-content-center text-center font-semibold">
					<h1 className="text-[56px] tracking-[0.28] text-white">
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
				<div className="relative h-[80vh]">
					<img
						src={iphoneBg}
						alt="Iphone 14"
						className="h-full object-cover object-center"
					/>
					<div className="absolute top-[85px] left-0 grid w-full place-content-center text-center font-semibold">
						<h1 className="text-[rgb(29, 29, 31] text-[56px] tracking-[0.28]">
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
			</main>
		</>
	);
}
