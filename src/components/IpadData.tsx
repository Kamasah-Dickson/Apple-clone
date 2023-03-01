import { useLocation, Link } from "react-router-dom";

interface ipadInterface {
	title: string;
	data: string[];
	shopIpad_title: string;
	shopIpad_links: string[];
	moreIpad_title: string;
	moreIpad_links: string[];
}

interface ipadProps {
	Navdata: ipadInterface;
}

function IpadData({ Navdata }: ipadProps) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const shopIpad_title = Navdata?.shopIpad_title;
	const shopIpadLinks = Navdata.shopIpad_links?.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const moreIpad_title = Navdata?.moreIpad_title;
	const moreIpad_links = Navdata.moreIpad_links?.map((data: any) => (
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
				<h3 className="text-[12px] text-[#86868b]">{shopIpad_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{shopIpadLinks}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreIpad_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{moreIpad_links}
				</ul>
			</div>
		</div>
	);
}

export default IpadData;
