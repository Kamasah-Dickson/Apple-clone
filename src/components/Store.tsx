import Footer from "./Footer";
import Store_Products from "./Store_Products";
import TopAdd from "./TopAdd";

import ipadImg from "../assets/store_assets/iPad.png";
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

// ========latest=====
import wovenWatch from "../assets/latest-products/store-card-40-watch-bhm-202301.jpg";
import ihone14 from "../assets/latest-products/store-card-40-iphone-14-202209_GEO_US.jpg";
import laptop from "../assets/latest-products/store-card-40-macbook-pro-202301.jpg";
import macMini from "../assets/latest-products/store-card-40-mac-mini-202301.jpg";
import homePod from "../assets/latest-products/store-card-40-homepod-202301.jpg";
import iphone142 from "../assets/latest-products/store-card-40-iphone-14-pro-202209.jpg";
import series8 from "../assets/latest-products/store-card-40-watch-s8-202209.jpg";
import ipad from "../assets/latest-products/store-card-40-ipad-202210.jpg";
import ipadPro from "../assets/latest-products/store-card-40-ipad-pro-202210.jpg";
import appleWatch from "../assets/latest-products/store-card-40-watch-ultra-202209.jpg";
import PageNotFound from "./PageNotFound";
import Help_is_here from "./Help_is_here";

type latestProps = {
	name: string;
	img: string;
	para: string;
	text: string;
	white: boolean;
}[];

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
		name: "iPad",
		img: ipadImg,
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

const Latest_Products_data: latestProps = [
	{
		name: "BLACK UNITY BAND",
		text: "Creative and community. Woven together",
		para: "49$",
		img: wovenWatch,
		white: true,
	},
	{
		name: "IPHONE 14",
		text: "Big and bigger",
		para: "from $799.00 or $33.29/mo. for 24 mo. before trade-in",
		img: ihone14,
		white: false,
	},
	{
		name: `MACBOOK PRO 14" AND 16"`,
		text: "Mover.Maker.Boundary",
		para: "from $1999 or 166.58/mo. for 12 mo.",
		img: laptop,
		white: true,
	},
	{
		name: "MAC MINI",
		text: "More muscle. More hustle.",
		para: "from $599 or 49.91/mo.",
		img: macMini,
		white: true,
	},
	{
		name: "HOMEPOD",
		text: "Profound sound.",
		para: "From $299",
		img: homePod,
		white: true,
	},
	{
		name: "IPHONE 14 PRO",
		text: "Pro. Beyond.",
		para: "From $999.00 or $41.62/mo. for 24 mo. before trade-in",
		img: iphone142,
		white: true,
	},
	{
		name: "APPLE WATCH SERIES 8",
		text: "A healthy leap ahead",
		para: "From $399.00 or $16.62/mo. for 24 mo.",
		img: series8,
		white: true,
	},
	{
		name: "IPAD",
		text: "Lovable.Drawable.Magical",
		para: "From $449.00 or $37.41/mo. for 12 mo.",
		img: ipad,
		white: false,
	},
	{
		name: "IPAD PRO",
		text: "Supercharged by M2",
		para: "From $799.00 or $66.58/mo. for 12 mo.",
		img: ipadPro,
		white: true,
	},
	{
		name: "APPLE WATCH ULTRA",
		text: "Adventure awaits",
		para: "From $799.00 or $33.29/mo. for 24 mo.",
		img: appleWatch,
		white: false,
	},
];

function Store() {
	return (
		<main className="">
			<TopAdd />
			{/* 1170 */}
			<div className="mx-auto bg-[#f5f5f7]">
				{/* ===intro-products=== */}
				<div>
					<Store_Products products={Store_Products_Data} />
				</div>
				{/* ===latest-products/swiper=== */}
				<div className=" bg-[#f5f5f7]">
					<Latest_Products Latest_Products={Latest_Products_data} />
				</div>
				{/* ===help/care=== */}
				<div>
					<Help_is_here />
				</div>
				<PageNotFound />
				{/* ===apple-store-defference=== */}
				<div>{/* <h1>Store</h1> */}</div>
				{/* ===essential-accessories=== */}
				<div>{/* <h1>Store</h1> */}</div>
				{/* ===loud-devices=== */}
				<div>{/* <h1>Store</h1> */}</div>
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
