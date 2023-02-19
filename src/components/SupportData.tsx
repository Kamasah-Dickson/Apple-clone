function SupportData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const getHelp_title = Navdata?.getHelp_title;
	const getHelp_links = Navdata.getHelp_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const helpful_topics_title = Navdata?.helpful_topics_title;
	const helpful_topics_links = Navdata.helpful_topics_links?.map(
		(data: any) => <li key={data}>{data}</li>
	);

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[24px] text-[#E8E8ED]">
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{getHelp_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{getHelp_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{helpful_topics_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{helpful_topics_links}
				</ul>
			</div>
		</div>
	);
}

export default SupportData;
