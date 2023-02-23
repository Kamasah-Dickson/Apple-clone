import { Link, useLocation } from "react-router-dom";

interface supportInterface {
	title: string;
	data: string[];
	getHelp_title: string;
	getHelp_links: string[];
	helpful_topics_title: string;
	helpful_topics_links: string[];
}

interface supportProps {
	Navdata: supportInterface;
}

function SupportData({ Navdata }: supportProps) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const getHelp_title = Navdata?.getHelp_title;
	const getHelp_links = Navdata.getHelp_links?.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const helpful_topics_title = Navdata?.helpful_topics_title;
	const helpful_topics_links = Navdata.helpful_topics_links?.map(
		(data: any) => (
			<Link key={data} to={`/${data}`} className="hover:text-gray-400">
				<li>{data}</li>
			</Link>
		)
	);

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-0 text-[24px] ${
						headerWhite ? "font-semibold text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{getHelp_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{getHelp_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{helpful_topics_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{helpful_topics_links}
				</ul>
			</div>
		</div>
	);
}

export default SupportData;
