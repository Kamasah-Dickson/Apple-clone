function AirpodData({ Navdata }: any) {
	const title = Navdata.title;
	const list = Navdata.data.map((data: any) => <li key={data}>{data}</li>);
	const shopPods_title = Navdata?.shopPods_title;
	const shopPods_links = Navdata.shopPods_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));
	const morePods_title = Navdata?.morePods_title;
	const morePods_links = Navdata.morePods_links?.map((data: any) => (
		<li key={data}>{data}</li>
	));

	return (
		<div className="my-grid mx-[20px] mt-[150px] h-screen max-w-[400px] md:mt-8">
			<div>
				<h3 className="text-[12px] text-[#86868b]">{title}</h3>
				<ul className="mt-4 flex flex-col gap-0 text-[24px] text-[#E8E8ED]">
					{list}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{shopPods_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{shopPods_links}
				</ul>
			</div>
			<div className="md:justify-self-end">
				<h3 className="text-[12px] text-[#86868b]">{morePods_title}</h3>
				<ul className="mt-4 flex flex-col gap-1 text-[12px] text-[#E8E8ED]">
					{morePods_links}
				</ul>
			</div>
		</div>
	);
}

export default AirpodData;
