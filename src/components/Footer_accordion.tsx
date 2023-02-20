import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer_accordion() {
	const [show, setShow] = useState(false);
	return (
		<div className="pt-2">
			<div className="">
				<div className="flex flex-col gap-3">
					<div
						className=" my-hr cursor-pointer pt-3 pb-1"
						onClick={() => setShow((prev) => !prev)}
					>
						<h3 className="flex items-center justify-between text-[14px] font-medium">
							<span className="text-[#1d1d1f]">Shop and Learn</span>
							<button>+</button>
						</h3>
						<ul
							className={` my-trans flex ${
								show ? "h-[270px]" : "h-0"
							} flex-col justify-center gap-2 overflow-hidden text-[12px] text-[#6e6e73]`}
						>
							<Link className="" to={"/store"}>
								Store
							</Link>
							<Link to={"/mac"}>Mac</Link>
							<Link to={"/iPad"}>iPad</Link>
							<Link to={"/iPhone"}>iPhone</Link>
							<Link to={"/watch"}>Watch</Link>
							<Link to={"/airpods"}>Airpods</Link>
							<Link to={"/tv&home"}>TV & Home</Link>
							<Link to={"/airtag"}>AirTag</Link>
							<Link to={"/accessories"}>Accessories</Link>
							<Link to={"/giftcards"}>Gift Cards</Link>
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
							<Link className="" to={"/Wallet"}>
								Wallet
							</Link>
							<Link to={"/applecard"}>Apple Card</Link>
							<Link to={"/Applepay"}>Apple Pay</Link>
							<Link to={"/Applecash"}>Apple Cash</Link>
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
							<Link className="" to={"/appleID"}>
								Manage Your Apple ID
							</Link>
							<Link to={"/appleaccount"}>Apple Store Account</Link>
							<Link to={"/iCloud"}>iCloud.com</Link>
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
							<Link className="" to={"/appleone"}>
								Apple One
							</Link>
							<Link to={"/appletv"}>Apple TV+</Link>
							<Link to={"/applemusic"}>Apple Music</Link>
							<Link to={"/applearcade"}>Apple Arcade</Link>
							<Link to={"/applefitness+"}>Apple Fitness+</Link>
							<Link to={"/applenews+"}>Apple News+</Link>
							<Link to={"/applepodcasts"}>Apple Podcasts</Link>
							<Link to={"/applebooks"}>Apple Books</Link>
							<Link to={"/applestore"}>Apple Store</Link>
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
						<Link className="" to={"/findastore"}>
							Find a Store
						</Link>
						<Link to={"/geniusbar"}>Genius Bar</Link>
						<Link to={"/todayatapple"}>Today at Apple</Link>
						<Link to={"/applecamp"}>Apple Camp</Link>
						<Link to={"/applestoreapp"}>Apple Store App</Link>
						<Link to={"/certifiedrefurbished"}>Certified Refurbished</Link>
						<Link to={"/financing"}>Financing</Link>
						<Link to={"/appletradein"}>Apple Trade In</Link>
						<Link to={"/orderstatus"}>Order Status</Link>
						<Link to={"/shoppinghelp"}>Shopping Help</Link>
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
							<Link className="" to={"/findastore"}>
								Find a Store
							</Link>
							<Link to={"/appleandbusiness"}>Apple and Business</Link>
							<Link to={"/shopforbusiness"}>Shop for Business</Link>
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
							<Link className="" to={"/appleandeducation"}>
								Apple and Education
							</Link>
							<Link to={"/shopk-12"}>Shop for K-12</Link>
							<Link to={"/shopforcollege"}>Shop for College</Link>
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
							<Link className="" to={"/appleinhealthcare"}>
								Apple in Healthcare
							</Link>
							<Link to={"/healthonapplewatch"}>Health on Apple Watch</Link>
							<Link to={"/healthrecordsonphone"}>Health Records on iPhone</Link>
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
							<Link className="" to={"/shopforgovernment"}>
								Shop for Government
							</Link>
							<Link to={"/veterans and Military"}>
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
							<Link className="" to={"/accessibility"}>
								Accessibility
							</Link>
							<Link to={"/education"}>Education</Link>
							<Link to={"/environment"}>Environment</Link>
							<Link to={"/inclusionandiversity"}>Inclusion and Diversity</Link>
							<Link to={"/privacy"}>Privacy</Link>
							<Link to={"/racialequityandjustice"}>
								Racial Equity and Justice
							</Link>
							<Link to={"/supplierresponsibility"}>
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
							<Link className="" to={"/newsroom"}>
								Newsroom
							</Link>
							<Link to={"/appleleadership"}>Apple Leadership</Link>
							<Link to={"/careeropportunities"}>Career Opportunities</Link>
							<Link to={"/investors"}>Investors</Link>
							<Link to={"/Ethics&Compliance"}>Ethics and Compliance</Link>
							<Link to={"/Events"}>Events</Link>
							<Link to={"/contactapple"}>Contact Apple</Link>
						</ul>
					</div>
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div className="my-hr">
					<p className="pb-3 text-[#6e6e73]">
						More ways to shop:
						<a className="px-1 text-apple-blue" href="#">
							Find an Apple Store
						</a>
						or
						<a className="px-1 text-apple-blue" href="#">
							other retailer
						</a>
						near you. Or call 1-800-MY-APPLE.
					</p>
				</div>
				<div className="flex items-center justify-between pt-3">
					<p className="pb-5 text-[#6e6e73]">
						Copyright © 2023 Apple Inc. All rights reserved.
					</p>
					<p>
						Privacy | Policy | Terms of Use | Sales and Refunds | Legal Site Map
					</p>
					<p>Ghana</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_accordion;
