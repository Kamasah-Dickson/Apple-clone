import { useState } from "react";
import { Link } from "react-router-dom";

interface itemProps {
	// question: string;
	// answer: string;
	title: string;
	links: string[];
	listHeight90?: boolean;
}

function FAQItem(props: itemProps) {
	const [isOpen, setIsOpen] = useState(false);

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<div className=" my-hr cursor-pointer" onClick={toggleOpen}>
			<h3 className=" mb-2 flex items-center justify-between text-[14px] font-medium">
				<span className="text-[#1d1d1f]">{props.title}</span>
				<button className="font-2xl text-md">{isOpen ? "-" : "+"}</button>
			</h3>
			<ul
				className={` my-trans flex ${
					isOpen
						? `${props.listHeight90 ? "h-[90px] pb-2" : "h-[250px]"}`
						: "h-0"
				} flex-col gap-2 overflow-hidden text-[12px] text-[#6e6e73]`}
			>
				{props.links.map((data) => {
					return (
						<Link key={data} to={`/${data}`}>
							{data}
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default FAQItem;
