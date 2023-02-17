import { Link } from "react-router-dom";

function StoreData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => (
		<Link key={data} to={`/${data}`}>
			<li>{data}</li>
		</Link>
	));
	const quickLinks_title = Navdata?.quickLinks_title;
	const quickLinks = Navdata.linksData?.map((data: any) => (
		<Link key={data} to={`/${data}`}>
			<li>{data}</li>
		</Link>
	));
	const specials_title = Navdata?.specials_title;
	const specialLinks = Navdata.specials_links?.map((data: any) => (
		<Link key={data} to={`/${data}`}>
			<li>{data}</li>
		</Link>
	));

	return (
		<div className="my-grid">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[24px] text-[#E8E8ED]">
					{list}
				</ul>
			</div>
			<div className="justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{quickLinks_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{quickLinks}
				</ul>
			</div>
			<div className="justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{specials_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{specialLinks}
				</ul>
			</div>
		</div>
	);
}

export default StoreData;
