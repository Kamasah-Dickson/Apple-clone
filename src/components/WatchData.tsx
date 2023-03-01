import { Link, useLocation } from "react-router-dom";

interface watchInterface {
	title: string;
	data: string[];
	shopWatch_title: string;
	shopWatch_links: string[];
	moreWatch_title: string;
	moreWatch_links: string[];
}

interface watchProps {
	Navdata: watchInterface;
}

function WatchData({ Navdata }: watchProps) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const shopWatch_title = Navdata?.shopWatch_title;
	const shopWatch_links = Navdata.shopWatch_links?.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const moreWatch_title = Navdata?.moreWatch_title;
	const moreWatch_links = Navdata.moreWatch_links?.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));

	return (
		<div className="my-grid3 mx-[20px] mt-[150px] h-screen max-w-[750px] md:mt-8">
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
				<h3 className="text-[12px] text-[#86868b]">{shopWatch_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{shopWatch_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreWatch_title}</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{moreWatch_links}
				</ul>
			</div>
		</div>
	);
}

export default WatchData;
