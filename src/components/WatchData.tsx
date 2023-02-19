function WatchData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopWatch_title = Navdata?.shopWatch_title;
	const shopWatch_links = Navdata.shopWatch_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const moreWatch_title = Navdata?.moreWatch_title;
	const moreWatch_links = Navdata.moreWatch_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen max-w-[750px] md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[20px] text-[#E8E8ED] md:text-[24px]">
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{shopWatch_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopWatch_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{moreWatch_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{moreWatch_links}
				</ul>
			</div>
		</div>
	);
}

export default WatchData;
