import "./index.css";
import Header from "./components/Header";
import homebg from "./assets/hero_iphone14pro__e5xbgo5ffhg2_large.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function App() {
	return (
		<>
			<main className="home relative h-[100vh]">
				<img
					src={homebg}
					alt="Iphone 14"
					className="h-full object-cover object-center"
				/>
				<div className="absolute top-[85px] left-0 grid w-full place-content-center text-center font-semibold">
					<h1 className="text-[56px] tracking-[0.28] text-white">
						iPhone 14 Pro
					</h1>
					<p className="my-[10px] text-[28px] font-normal text-white">
						Pro.Beyond.
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
			</main>
		</>
	);
}
