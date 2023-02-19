function MacData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopMac_title = Navdata?.shopMac_title;
	const shopMac_links = Navdata.shopMac_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const moreMac_title = Navdata?.moreMac_title;
	const moreMac_links = Navdata.moreMac_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[24px] text-[#E8E8ED]">
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{shopMac_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopMac_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreMac_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{moreMac_links}
				</ul>
			</div>
		</div>
	);
}

export default MacData;
