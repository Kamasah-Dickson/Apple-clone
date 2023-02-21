import { Link } from "react-router-dom";

function Footer_RegularTexts() {
	return (
		<div className="pt-2">
			<div className="my-grid2">
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Shop and Learn</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/store"}>
								Store
							</Link>
							<Link className="hover:underline" to={"/mac"}>
								Mac
							</Link>
							<Link className="hover:underline" to={"/iPad"}>
								iPad
							</Link>
							<Link className="hover:underline" to={"/iPhone"}>
								iPhone
							</Link>
							<Link className="hover:underline" to={"/watch"}>
								Watch
							</Link>
							<Link className="hover:underline" to={"/airpods"}>
								Airpods
							</Link>
							<Link className="hover:underline" to={"/tv&home"}>
								TV & Home
							</Link>
							<Link className="hover:underline" to={"/airtag"}>
								AirTag
							</Link>
							<Link className="hover:underline" to={"/accessories"}>
								Accessories
							</Link>
							<Link className="hover:underline" to={"/giftcards"}>
								Gift Cards
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Apple Wallet</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/Wallet"}>
								Wallet
							</Link>
							<Link className="hover:underline" to={"/applecard"}>
								Apple Card
							</Link>
							<Link className="hover:underline" to={"/Applepay"}>
								Apple Pay
							</Link>
							<Link className="hover:underline" to={"/Applecash"}>
								Apple Cash
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Account</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/appleID"}>
								Manage Your Apple ID
							</Link>
							<Link className="hover:underline" to={"/appleaccount"}>
								Apple Store Account
							</Link>
							<Link className="hover:underline" to={"/iCloud"}>
								iCloud.com
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Entertainment</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/appleone"}>
								Apple One
							</Link>
							<Link className="hover:underline" to={"/appletv"}>
								Apple TV+
							</Link>
							<Link className="hover:underline" to={"/applemusic"}>
								Apple Music
							</Link>
							<Link className="hover:underline" to={"/applearcade"}>
								Apple Arcade
							</Link>
							<Link className="hover:underline" to={"/applefitness+"}>
								Apple Fitness+
							</Link>
							<Link className="hover:underline" to={"/applenews+"}>
								Apple News+
							</Link>
							<Link className="hover:underline" to={"/applepodcasts"}>
								Apple Podcasts
							</Link>
							<Link className="hover:underline" to={"/applebooks"}>
								Apple Books
							</Link>
							<Link className="hover:underline" to={"/applestore"}>
								Apple Store
							</Link>
						</ul>
					</div>
				</div>
				<div>
					<h3 className="mb-2 mt-4 text-[12px] font-medium">
						<span className="text-[#1d1d1f]">Apple Store</span>
						<button className="hidden" disabled>
							+
						</button>
					</h3>
					<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
						<Link className="hover:underline" to={"/findastore"}>
							Find a Store
						</Link>
						<Link className="hover:underline" to={"/geniusbar"}>
							Genius Bar
						</Link>
						<Link className="hover:underline" to={"/todayatapple"}>
							Today at Apple
						</Link>
						<Link className="hover:underline" to={"/applecamp"}>
							Apple Camp
						</Link>
						<Link className="hover:underline" to={"/applestoreapp"}>
							Apple Store App
						</Link>
						<Link className="hover:underline" to={"/certifiedrefurbished"}>
							Certified Refurbished
						</Link>
						<Link className="hover:underline" to={"/financing"}>
							Financing
						</Link>
						<Link className="hover:underline" to={"/appletradein"}>
							Apple Trade In
						</Link>
						<Link className="hover:underline" to={"/orderstatus"}>
							Order Status
						</Link>
						<Link className="hover:underline" to={"/shoppinghelp"}>
							Shopping Help
						</Link>
					</ul>
				</div>
				<div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Business</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/findastore"}>
								Find a Store
							</Link>
							<Link className="hover:underline" to={"/appleandbusiness"}>
								Apple and Business
							</Link>
							<Link className="hover:underline" to={"/shopforbusiness"}>
								Shop for Business
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Education</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/appleandeducation"}>
								Apple and Education
							</Link>
							<Link className="hover:underline" to={"/shopk-12"}>
								Shop for K-12
							</Link>
							<Link className="hover:underline" to={"/shopforcollege"}>
								Shop for College
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Healthcare</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/appleinhealthcare"}>
								Apple in Healthcare
							</Link>
							<Link className="hover:underline" to={"/healthonapplewatch"}>
								Health on Apple Watch
							</Link>
							<Link className="hover:underline" to={"/healthrecordsonphone"}>
								Health Records on iPhone
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">For Government</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/shopforgovernment"}>
								Shop for Government
							</Link>
							<Link className="hover:underline" to={"/veterans and Military"}>
								Shop for Veterans and Military
							</Link>
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">Apple Values</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/accessibility"}>
								Accessibility
							</Link>
							<Link className="hover:underline" to={"/education"}>
								Education
							</Link>
							<Link className="hover:underline" to={"/environment"}>
								Environment
							</Link>
							<Link className="hover:underline" to={"/inclusionandiversity"}>
								Inclusion and Diversity
							</Link>
							<Link className="hover:underline" to={"/privacy"}>
								Privacy
							</Link>
							<Link className="hover:underline" to={"/racialequityandjustice"}>
								Racial Equity and Justice
							</Link>
							<Link className="hover:underline" to={"/supplierresponsibility"}>
								Supplier Responsibility
							</Link>
						</ul>
					</div>
					<div>
						<h3 className="mb-2 mt-4 text-[12px] font-medium">
							<span className="text-[#1d1d1f]">About Apple</span>
							<button className="hidden" disabled>
								+
							</button>
						</h3>
						<ul className="flex flex-col justify-center gap-2 text-[12px] text-[#6e6e73]">
							<Link className="hover:underline" to={"/newsroom"}>
								Newsroom
							</Link>
							<Link className="hover:underline" to={"/appleleadership"}>
								Apple Leadership
							</Link>
							<Link className="hover:underline" to={"/careeropportunities"}>
								Career Opportunities
							</Link>
							<Link className="hover:underline" to={"/investors"}>
								Investors
							</Link>
							<Link className="hover:underline" to={"/Ethics&Compliance"}>
								Ethics and Compliance
							</Link>
							<Link className="hover:underline" to={"/Events"}>
								Events
							</Link>
							<Link className="hover:underline" to={"/contactapple"}>
								Contact Apple
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div className="my-hr">
					<p className="pb-3 text-[#6e6e73]">
						More ways to shop:
						<a className="px-1 text-apple-blue underline" href="#">
							Find an Apple Store
						</a>
						or
						<a className="px-1 text-apple-blue underline" href="#">
							other retailer
						</a>
						near you. Or call 1-800-MY-APPLE.
					</p>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col items-start justify-between gap-1 pt-3">
						<p className="text-[#6e6e73]">
							Copyright © 2023 Apple Inc. All rights reserved.
						</p>
						<p>
							Privacy | Policy | Terms of Use | Sales and Refunds | Legal Site
							Map
						</p>
					</div>
					<p className="pt-3">Ghana</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_RegularTexts;
