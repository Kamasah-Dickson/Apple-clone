function AccessoriesData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const explore_accessories_title = Navdata?.explore_accessories_title;
	const explore_accessories_links = Navdata.explore_accessories_links?.map(
		(data: any) => <li key={data}>{data}</li>
	);

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen max-w-[400px] md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[24px] text-[#E8E8ED]">
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">
					{explore_accessories_title}
				</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{explore_accessories_links}
				</ul>
			</div>
		</div>
	);
}

export default AccessoriesData;
