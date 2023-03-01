import Footer from "./Footer";
import Store_Products from "./Store_Products";
import TopAdd from "./TopAdd";
import Latest_Products from "./Latest_Products";
import Help_is_here from "./Help_is_here";
import Store_difference from "./Store_difference";
import Accessory_Products from "./Accessory_Products";
import Final_Products from "./Final_Products";
import Final_Exclusive from "./Final_Exclusive";

import {
	Store_Products_Data,
	Latest_Products_data,
	latest_title,
	storeDifference,
	differenceTitle,
	Accessories_Products_Data,
	Accessories_Lead,
	LoudAndClearTitle,
	loudAndClearData,
	LoudClearLead,
	Accessory_heading,
	experience_heading,
	Apple_Experience_data,
	Exclusive_data,
	exclusive_heading,
} from "./StoreProductsData";

function Store() {
	return (
		<main>
			<TopAdd />
			{/* 1170 */}
			<div className="mx-auto bg-[#f5f5f7]">
				{/* ===intro-products=== */}
				<Store_Products products={Store_Products_Data} />
				{/* ===latest-products/swiper=== */}
				<Latest_Products
					Latest_Products={Latest_Products_data}
					title={latest_title}
				/>
				{/* ===help/care=== */}
				<Help_is_here />
				{/* ===apple-store-defference=== */}
				<Store_difference
					difference={storeDifference}
					title={differenceTitle}
				/>

				{/* ===accessories=== */}
				<Accessory_Products
					product={Accessories_Products_Data}
					leading={Accessories_Lead}
					heading={Accessory_heading}
				/>
				{/* ===loud-devices=== */}
				<Accessory_Products
					product={loudAndClearData}
					leading={LoudClearLead}
					heading={LoudAndClearTitle}
				/>
				{/* ===Apple-Experience=== */}
				<Final_Products
					product={Apple_Experience_data}
					heading={experience_heading}
				/>
				{/* ===special-stores ===*/}
				<Final_Exclusive product={Exclusive_data} heading={exclusive_heading} />
				{/* ===Quick_Links=== */}
				<div className="mx-auto max-w-[920px] pb-7">
					<h1 className="mb-3 mt-10 text-3xl font-semibold">Quick Links</h1>
					<div className=" flex flex-wrap items-center justify-start gap-5">
						<a className="rounded-3xl bg-gray-200 py-2 px-3" href="#">
							Order Status
						</a>
						<a className="rounded-3xl bg-gray-200 py-2 px-3" href="#">
							Shopping help
						</a>
						<a className="rounded-3xl bg-gray-200 py-2 px-3" href="#">
							Returns
						</a>
						<a className="rounded-3xl bg-gray-200 py-2 px-3" href="#">
							Your Saves
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default Store;
