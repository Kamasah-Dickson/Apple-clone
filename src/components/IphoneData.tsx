import { Link, useLocation } from "react-router-dom";

interface iphoneInterface {
	title: string;
	data: string[];
	shopIphone_title: string;
	shopIphone_links: string[];
	moreIphone_title: string;
	moreIphone_links: string[];
}

interface iphoneProps {
	Navdata: iphoneInterface;
}

function IphoneData({ Navdata }: iphoneProps) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const shopIphone_title = Navdata?.shopIphone_title;
	const shopIphone_links = Navdata.shopIphone_links?.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const moreIphone_title = Navdata?.moreIphone_title;
	const moreIphone_links = Navdata.moreIphone_links?.map((data: any) => (
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
				<h3 className="text-[12px] text-[#86868b]">{shopIphone_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{shopIphone_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreIphone_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{moreIphone_links}
				</ul>
			</div>
		</div>
	);
}

export default IphoneData;
