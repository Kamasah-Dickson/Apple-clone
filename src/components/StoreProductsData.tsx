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
import AccessoriesleadImg from "../assets/latest-products/Accessories/store-card-40-accessories-seasonal-202209.jpg";
import Accessories1 from "../assets/latest-products/Accessories/MQTJ3.jpg";
import Accessories2 from "../assets/latest-products/Accessories/MPU63.jpg";
import Accessories3 from "../assets/latest-products/Accessories/MPRY3.jpg";
import Accessories4 from "../assets/latest-products/Accessories/MQDR3.jpg";
import Accessories5 from "../assets/latest-products/Accessories/MPPJ3.jpg";
import Accessories6 from "../assets/latest-products/Accessories/MPPX3.jpg";
import loudLeadingImg from "../assets/latest-products/LoudAndClear/store-card-40-applemusic-202301.jpg";
import loudImg1 from "../assets/latest-products/LoudAndClear/homepod-select-midnight-202210.jpg";
import loudImg2 from "../assets/latest-products/LoudAndClear/MQD83.jpg";
import loudImg3 from "../assets/latest-products/LoudAndClear/homepod-mini-select-yellow-202110.jpg";
import loudImg4 from "../assets/latest-products/LoudAndClear/airpods-max-select-silver-202011.jpg";
import loudImg5 from "../assets/latest-products/LoudAndClear/MME73.jpg";
import loudImg6 from "../assets/latest-products/LoudAndClear/MJ4X3.jpg";
import subScriptionImg from "../assets/latest-products/Experience/store-card-50-subscriptions-202108_GEO_US.jpg";
import AppleCareImg from "../assets/latest-products/Experience/store-card-40-applecare-202301.jpg";
import ApplePayImg from "../assets/latest-products/Experience/store-card-50-applepay-202209.jpg";
import AppleControlImg from "../assets/latest-products/Experience/store-card-50-homekit-202301.jpg";
import EducationImg from "../assets/latest-products/Exclusives/store-card-40-edu-202301.jpg";
import BusinessImg from "../assets/latest-products/Exclusives/store-card-40-business-202209.jpg";
import GovernmentImg from "../assets/latest-products/Exclusives/store-card-40-gov-202301.jpg";
import VerteranImg from "../assets/latest-products/Exclusives/ipad-card-40-veteran-202210.jpg";
import RefurbishedImg from "../assets/latest-products/Exclusives/store-card-40-refurb-202108.jpg";

import {
	productsProp,
	differenceProp,
	titleProp,
	latestProps,
	AccessoriesProp,
	leadProp,
	experienceProp,
} from "../TypesData";

export const Accessories_Lead: leadProp = [
	{
		title: "In with the new.",
		text: "Discover fresh new colors for your favorite accessories.",
		img: AccessoriesleadImg,
	},
];

export const Accessories_Products_Data: AccessoriesProp = [
	{
		img: Accessories1,
		new: true,
		title: "45mm Black Unity Sport Loop",
		price: "$49.00",
	},
	{
		img: Accessories2,
		new: true,
		title: "iPhone 14 Pro Clear Case with MagSafe",
		price: "$49.00",
	},
	{
		img: Accessories3,
		new: true,
		title: "iPhone 14 Silicone case with MagSafe - Lilac",
		price: "$49.00",
	},
	{
		img: Accessories4,
		new: true,
		title: "Smart Folio for iPad (10th generation) - Lemonade",
		price: "$79.00",
	},
	{
		img: Accessories5,
		new: true,
		title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
		price: "$59.00",
	},
	{
		img: Accessories6,
		new: true,
		title: "iPhone Leather Wallet with MagSafe - Umber",
		price: "$59.00",
	},
];

export const LoudClearLead: leadProp = [
	{
		title: "Get 6 months of Apple Music free.",
		text: "Included with your HomePod,AirPods, or select Beats product.",
		img: loudLeadingImg,
	},
];

export const loudAndClearData: AccessoriesProp = [
	{
		img: loudImg1,
		new: true,
		title: "HomePod - Midnight",
		price: "$299.00",
	},
	{
		img: loudImg2,
		new: true,
		title: "AirPods Pro (2nd generation)",
		price: "$249.00",
	},
	{
		img: loudImg3,
		new: true,
		title: "HomePod mini - Yellow",
		price: "$99.00",
	},
	{
		img: loudImg4,
		new: true,
		title: "AirPods Max - Silver",
		price: "$549.00",
	},
	{
		img: loudImg5,
		new: true,
		title: "AirPods (3rd generation) with Lightning Charging Case",
		price: "$169.00",
	},
	{
		img: loudImg6,
		new: true,
		title: "Beats Studio Buds - True Wireless Noise Cancelling...",
		price: "$149.00",
	},
];

export const Store_Products_Data: productsProp = [
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

export const storeDifference: differenceProp = [
	{
		img: (
			<svg viewBox="0 0 49 56" aria-hidden="true" role="img">
				<path d="m0 0h49v56h-49z" fill="none"></path>
				<path
					d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"
					fill="#6CCA4E"
				></path>
			</svg>
		),
		text: (
			<h3 className=" absolute bottom-7 left-7 mt-2 max-w-[250px] text-[22px] font-semibold">
				Enjoy <span className="text-[#68cc45]"> two-hour </span>
				<span className="text-[#68cc45]"> delivery</span> from an Apple Store,
				<span className="text-[#68cc45]"> free delivery</span>,or
				<span className="text-[#68cc45]"> easy pickup.</span>
			</h3>
		),
		name: "delivery",
	},
	{
		img: (
			<svg
				viewBox="0 0 43 56"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				role="img"
			>
				<path d="m0 0h43v56h-43z" fill="none"></path>
				<path
					d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
					fill="#ab45fb"
				></path>
				<path
					d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
					fill="#ab45fb"
				></path>
				<path
					d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
					fill="#ab45fb"
				></path>
				<path
					d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
					fill="#ab45fb"
				></path>
			</svg>
		),
		text: (
			<h3 className=" absolute bottom-7 left-7 mt-2 max-w-[250px] text-[22px] font-semibold">
				<span className="text-[#ac39ff]"> Trade in your current device.</span>{" "}
				Get credit toward a new one.
			</h3>
		),
		name: "Trade",
	},
	{
		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 42 56"
				aria-hidden="true"
				role="img"
			>
				<g>
					<rect fill="none"></rect>
					<path
						d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
						fill="#6cca4e"
					></path>
				</g>
			</svg>
		),

		text: (
			<h3 className=" absolute left-7 bottom-7 mt-2 max-w-[250px] text-[22px] font-semibold">
				Pay in full or <span className="text-[#68cc45]"> pay over time.</span>{" "}
				Your choice.
			</h3>
		),

		name: "Pay",
	},
	{
		img: (
			<svg viewBox="0 0 35 35" role="img" aria-hidden="true">
				<path d="m0 0h35v35h-35z" fill="none"></path>
				<path
					d="m17.5 6.1a11.4 11.4 0 1 1 -11.4 11.4 11.4129 11.4129 0 0 1 11.4-11.4m0-1.1a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0 -12.5-12.5zm3.7707 11.3121a1.213 1.213 0 0 0 .9343-.4539 1.8075 1.8075 0 0 0 0-2.269 1.213 1.213 0 0 0 -.9343-.4539 1.2009 1.2009 0 0 0 -.921.4539 1.7981 1.7981 0 0 0 0 2.2624 1.1946 1.1946 0 0 0 .921.4605zm-7.5547 0a1.2454 1.2454 0 0 0 .9476-.4605 1.764 1.764 0 0 0 .0067-2.2624 1.2454 1.2454 0 0 0 -.9543-.4539 1.1813 1.1813 0 0 0 -.9143.4539 1.8311 1.8311 0 0 0 0 2.269 1.1813 1.1813 0 0 0 .9143.4539zm11.9727 2.2157a.655.655 0 0 0 -.6407-.08 27.5372 27.5372 0 0 1 -3.6906.861 24.1545 24.1545 0 0 1 -3.8507.3 24.2809 24.2809 0 0 1 -3.8575-.3 26.9794 26.9794 0 0 1 -3.6839-.861.6922.6922 0 0 0 -.6607.08.6079.6079 0 0 0 -.18.6139 7.7434 7.7434 0 0 0 1.4015 3.6306 8.5219 8.5219 0 0 0 2.9765 2.5961 8.3779 8.3779 0 0 0 4.0043.9677 8.35 8.35 0 0 0 3.9909-.9677 8.5849 8.5849 0 0 0 2.9832-2.5961 7.5976 7.5976 0 0 0 1.3948-3.6306.6384.6384 0 0 0 -.1871-.6139zm-1.4815 2.83a23.8689 23.8689 0 0 1 -3.3169.7008 24.6667 24.6667 0 0 1 -3.3836.2335 24.8628 24.8628 0 0 1 -3.3837-.2335 23.7823 23.7823 0 0 1 -3.33-.7008 6.2135 6.2135 0 0 1 -.694-1.8686 27.7532 27.7532 0 0 0 3.6171.7875 25.529 25.529 0 0 0 3.7908.28 25.5717 25.5717 0 0 0 3.784-.28 27.1787 27.1787 0 0 0 3.61-.7875 6.0407 6.0407 0 0 1 -.6937 1.8682z"
					fill="#06c"
				></path>
			</svg>
		),
		text: (
			<h3 className=" absolute bottom-7 left-7 mt-2 max-w-[250px] text-[22px] font-semibold">
				Make them yours.
				<span className="text-[#007aff]">
					Engrave a mix of emoji, names, and numbers for free.
				</span>
			</h3>
		),
		name: "Make them yours",
	},
	{
		img: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 29 56"
				aria-hidden="true"
				role="img"
			>
				<g>
					<rect fill="none"></rect>
					<defs>
						<linearGradient id="linearGradient2904">
							<stop
								style={{
									stopColor: "#f8ab5e",
									stopOpacity: 1,
									offset: 0,
								}}
							></stop>
							<stop
								style={{
									stopColor: "#f3695f",
									stopOpacity: 1,
									offset: 1,
								}}
							></stop>
						</linearGradient>
					</defs>
					<g>
						<path
							style={{
								fill: "url(#linearGradient2904)",
							}}
							id="path2324"
							d="m 14.9,14.43 a 2.581,2.581 0 0 1 -0.472,-0.045 3.083,3.083 0 0 1 -0.067,-0.629 7.531,7.531 0 0 1 1.909,-4.694 7.76,7.76 0 0 1 5.1,-2.628 3.329,3.329 0 0 1 0.067,0.7 7.745,7.745 0 0 1 -1.837,4.825 6.728,6.728 0 0 1 -4.7,2.471 z m 12.807,3.818 a 7.851,7.851 0 0 0 -3.751,6.6 7.64,7.64 0 0 0 4.649,7.008 18.257,18.257 0 0 1 -2.381,4.919 c -1.482,2.134 -3.032,4.268 -5.391,4.268 -2.359,0 -2.965,-1.37 -5.683,-1.37 -2.65,0 -3.594,1.415 -5.75,1.415 -2.156,0 -3.661,-1.977 -5.391,-4.4 A 21.279,21.279 0 0 1 0.395,25.211 c 0,-6.738 4.38,-10.31 8.692,-10.31 2.291,0 4.2,1.5 5.638,1.5 1.37,0 3.5,-1.595 6.109,-1.595 a 8.172,8.172 0 0 1 6.873,3.442 z"
						></path>
					</g>
				</g>
			</svg>
		),
		text: (
			<h3 className=" absolute bottom-7 left-7 mt-2 max-w-[250px] text-[22px] font-semibold">
				<span className="gradient"> Customize </span> your Mac and create your
				own style of Apple Watch.
			</h3>
		),
		name: "Customize",
	},
];

export const latest_title: titleProp = {
	h1: `Take a look at what's new, right now.`,
	span: "The latest.",
};
export const Latest_Products_data: latestProps = [
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

export const Apple_Experience_data: experienceProp = [
	{
		h1: "Six Apple services.One easy subscription.",
		img: subScriptionImg,
	},
	{
		h1: `We've got you covered.`,
		p: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
		img: AppleCareImg,
	},
	{
		h1: "Discover all the ways to use Apple Pay.",
		img: ApplePayImg,
	},
	{
		span: "HOME",
		h1: "See how one app can control your entire home.",
		img: AppleControlImg,
	},
];

export const Exclusive_data: experienceProp = [
	{
		span: "Education",
		h1: "Save on Mac or iPad with Education pricing",
		img: EducationImg,
	},
	{
		span: "Business",
		h1: `From enterprise to small business, we'll work with you`,
		img: BusinessImg,
		dark: true,
	},

	{
		span: "Government",
		h1: `Special Pricing is available for state, local, and federal agencies.`,
		img: GovernmentImg,
		dark: true,
	},
	{
		span: "Verterans and Military",
		h1: `Active and Veteran members may be eligible for exclusive savings.`,
		img: VerteranImg,
	},
	{
		span: "Certified Refurbished",
		h1: `Shop refurbished Apple products backed by one-year warranty.`,
		img: RefurbishedImg,
	},
];

export const differenceTitle: titleProp = {
	h1: "Even more reasons to shop with us.",
	span: "The Apple Store difference.",
};
export const LoudAndClearTitle = {
	text: "Unparalleled choices for rich, high-quality sound.",
	span: "Loud and clear.",
};
export const Accessory_heading = {
	span: "Accessories.",
	text: "Essentials that pari perfectly with your favorite devices.",
};

export const experience_heading = {
	span: "The Apple experience.",
	text: "Do even more with Apple products and services.",
};
export const exclusive_heading = {
	span: "Special stores.",
	text: "Exclusive savings for businesses,school and more.",
};
