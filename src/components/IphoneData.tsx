import React from "react";

function IphoneData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopIphone_title = Navdata?.shopIphone_title;
	const shopIphone_links = Navdata.shopIphone_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const moreIphone_title = Navdata?.moreIphone_title;
	const moreIphone_links = Navdata.moreIphone_links?.map((data: any) => (
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
				<h3 className="text-[12px] text-[#86868b]">{shopIphone_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopIphone_links}
				</ul>
			</div>
			<div className="justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreIphone_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{moreIphone_links}
				</ul>
			</div>
		</div>
	);
}

export default IphoneData;
