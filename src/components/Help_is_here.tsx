import specialistImg from "../assets/latest-products/store-card-50-specialist-help-202211.jpg";
import getTOknow from "../assets/latest-products/store-card-25-apps-202108.jpg";
import getExpert from "../assets/latest-products/store-card-25-genius-202108.jpg";

function Help_is_here() {
	return (
		<div>
			<h1 className="mx-auto mt-24 mb-8 max-w-[500px] px-5  text-[28px] font-semibold leading-tight text-[#6e6e73] md:max-w-[900px] md:leading-none lg:px-0">
				<span className="text-black">Help is here.</span>
				Whenever and however you need it.
			</h1>
			<div className="mx-auto grid max-w-[650px] gap-10 p-5 lg:max-w-[1000px] lg:grid-cols-2">
				<div>
					<div className=" my-trans relative h-auto cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:scale-[1.01] hover:shadow-2xl">
						<img
							className="h-full w-full"
							src={specialistImg}
							alt="apple specialist"
						/>
						<div className="absolute top-6 left-6">
							<p className="mb-3 text-sm  font-medium text-[#6e6e73]">
								APPLE SPECIALIST
							</p>
							<h2 className="text-[20px] font-bold leading-tight md:text-[27px] ">
								Shop one on one with a Specialist. Online or in a store.
							</h2>
						</div>
					</div>
				</div>
				<div className="flex h-auto flex-col gap-6">
					<div className=" my-trans relative cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:scale-[1.01] hover:shadow-2xl">
						<img
							className="h-auto w-full"
							src={getTOknow}
							alt="get to know your device"
						/>
						<div className="absolute top-7 left-7">
							<h2 className="max-w-[350px] text-[20px] font-bold leading-tight md:text-[23px] ">
								Get to know your new device with a free Personal Session.
							</h2>
						</div>
					</div>
					<div className="my-trans relative cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:scale-[1.01] hover:shadow-2xl">
						<img
							className="h-auto w-full"
							src={getExpert}
							alt="get expert service"
						/>
						<div className="absolute top-0 left-7 flex h-full max-w-[220px] items-center">
							<h2 className="max-w-[175px] text-[20px] font-bold leading-tight md:max-w-[470px] md:text-[23px] ">
								Get expert service and support at the Genius Bar.
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Help_is_here;
