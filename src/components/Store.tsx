import Footer from "./Footer";
import Store_Products from "./Store_Products";
import TopAdd from "./TopAdd";
import Latest_Products from "./Latest_Products";
import PageNotFound from "./PageNotFound";
import Help_is_here from "./Help_is_here";
import Store_difference from "./Store_difference";
import Accessory_Products from "./Accessory_Products";
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
} from "./StoreProductsData";

function Store() {
	return (
		<main className="">
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
				<PageNotFound />
				{/* ===Apple-Experience=== */}
				<div>{/* <h1>Store</h1> */}</div>
				{/* ===special-stores and QuickLinks=== */}
				<div>{/* <h1>Store</h1> */}</div>
			</div>
			<Footer />
		</main>
	);
}

export default Store;
