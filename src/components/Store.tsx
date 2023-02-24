import Footer from "./Footer";
import Store_Products from "./Store_Products";
import TopAdd from "./TopAdd";

import ipadImg from "../assets/store_assets/iPad.png";
import iphoneImg from "../assets/store_assets/iphone.png";
import macImg from "../assets/store_assets/Mac.png";
import AppleWatch from "../assets/store_assets/AppleWatch.png";
import airPodsImg from "../assets/store_assets/AirPods.png";
import airTagImg from "../assets/store_assets/AitTag.png";
import appleTvImg from "../assets/store_assets/AppleTV.png";
import homePodImg from "../assets/store_assets/HomePod.png";
import accessoriesImg from "../assets/store_assets/Accessories.png";
import giftcard from "../assets/store_assets/Giftcard.png";
import iphone from "../assets/store_assets/iphone.png";
import Latest_Products from "./Latest_Products";
type productsProp = {
	name: string;
	img: string;
}[];

const Store_Products_Data: productsProp = [
	{
		name: "Mac",
		img: macImg,
	},
	{
		name: "iPhone",
		img: iphone,
	},
	{
		name: "Apple Watch",
		img: AppleWatch,
	},
	{
		name: "AirPods",
		img: airPodsImg,
	},
	{
		name: "AirTag",
		img: airTagImg,
	},
	{
		name: "Apple TV 4K",
		img: appleTvImg,
	},
	{
		name: "HomePod",
		img: homePodImg,
	},
	{
		name: "Accessories",
		img: accessoriesImg,
	},
	{
		name: "Apple Gift Card",
		img: giftcard,
	},
];

function Store() {
	return (
		<main className="bg-[#f5f5f7]">
			<TopAdd />
			{/* 1170 */}
			<div className="mx-auto">
				{/* ===intro-products=== */}
				<div>
					<Store_Products products={Store_Products_Data} />
				</div>
				{/* ===latest-products/swiper=== */}
				<div>
					<Latest_Products />
					<h1>Store</h1>
				</div>
				{/* ===help/care=== */}
				<div>
					<h1>Store</h1>
				</div>
				{/* ===apple-store-defference=== */}
				<div>
					<h1>Store</h1>
				</div>
				{/* ===essential-accessories=== */}
				<div>
					<h1>Store</h1>
				</div>
				{/* ===loud-devices=== */}
				<div>
					<h1>Store</h1>
				</div>
				{/* ===Apple-Experience=== */}
				<div>
					<h1>Store</h1>
				</div>
				{/* ===special-stores and QuickLinks=== */}
				<div>
					<h1>Store</h1>
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default Store;
