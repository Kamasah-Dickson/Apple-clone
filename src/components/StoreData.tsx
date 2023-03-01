import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface storeProps {
	title: string;
	data: string[];
	quickLinks_title: string;
	linksData: string[];
	specials_title: string;
	specials_links: string[];
}

interface storeData {
	Navdata: storeProps;
}

function StoreData({ Navdata }: storeData) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const quickLinks_title = Navdata.quickLinks_title;
	const quickLinks = Navdata.linksData?.map((data) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const specials_title = Navdata.specials_title;
	const specialLinks = Navdata.specials_links.map((data) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));

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
				<h3 className="text-[12px] text-[#86868b]">{quickLinks_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{quickLinks}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{specials_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{specialLinks}
				</ul>
			</div>
		</div>
	);
}

export default StoreData;
