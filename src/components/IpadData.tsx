import React from "react";

function IpadData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopIpad_title = Navdata?.shopIpad_title;
	const shopIpadLinks = Navdata.shopIpad_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const moreIpad_title = Navdata?.moreIpad_title;
	const moreIpad_links = Navdata.moreIpad_links?.map((data: any) => (
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
				<h3 className="text-[12px] text-[#86868b]">{shopIpad_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopIpadLinks}
				</ul>
			</div>
			<div className="justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreIpad_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{moreIpad_links}
				</ul>
			</div>
		</div>
	);
}

export default IpadData;
