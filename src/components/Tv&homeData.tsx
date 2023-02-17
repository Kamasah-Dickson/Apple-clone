import React from "react";

function Tv_homeData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopTV_title = Navdata?.shopTV_title;
	const shopTV_links = Navdata.shopTV_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const moreTV_title = Navdata?.moreTV_title;
	const moreTV_links = Navdata.moreTV_links?.map((data: any) => (
		<li key={data}>{data}</li>
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
				<h3 className="text-[12px] text-[#86868b]">{shopTV_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopTV_links}
				</ul>
			</div>
			<div className="justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreTV_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{moreTV_links}
				</ul>
			</div>
		</div>
	);
}

export default Tv_homeData;
