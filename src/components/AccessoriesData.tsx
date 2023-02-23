import { Link, useLocation } from "react-router-dom";

interface accessoriesInterface {
	title: string;
	data: string[];
	explore_accessories_title: string;
	explore_accessories_links: string[];
}

interface accessoriesProps {
	Navdata: accessoriesInterface;
}
function AccessoriesData({ Navdata }: accessoriesProps) {
	const location = useLocation();
	const headerWhite = location.pathname === "/store";

	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`} className="hover:text-gray-400">
			<li>{data}</li>
		</Link>
	));
	const explore_accessories_title = Navdata?.explore_accessories_title;
	const explore_accessories_links = Navdata.explore_accessories_links?.map(
		(data: any) => (
			<Link key={data} to={`/${data}`} className="hover:text-gray-400">
				<li>{data}</li>
			</Link>
		)
	);

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen max-w-[400px] md:mt-8">
			<div>
				<h3
					className={`text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#86868b]"
					}`}
				>
					{title}
				</h3>
				<ul
					className={`mt-4 flex flex-col gap-0 text-[24px] ${
						headerWhite ? "font-semibold text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">
					{explore_accessories_title}
				</h3>
				<ul
					className={`mt-4 flex flex-col gap-1 text-[12px] ${
						headerWhite ? "text-grayish" : "text-[#E8E8ED]"
					}`}
				>
					{explore_accessories_links}
				</ul>
			</div>
		</div>
	);
}

export default AccessoriesData;
