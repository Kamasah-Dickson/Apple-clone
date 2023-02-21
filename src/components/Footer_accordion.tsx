import FAQItem from "./FooterItem";

const shopAndLearn = {
	links: [
		"Store",
		"Mac",
		"iPad",
		"iPhone",
		"Watch",
		"Airpods",
		"TV & Home",
		"AirTag",
		"Accessories",
		"Gift Cards",
	],
	title: "Shop and Learn",
};

const AppleWallet = {
	title: "Apple Wallet",
	links: ["Apple Card", "Apple Pay", "Apple Cash"],
	listHeight90: true,
};

const manageId = {
	title: "Manage Your Apple ID",
	links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
	listHeight90: true,
};

const entertainment = {
	title: "Entertainment",
	links: [
		"Apple One",
		"Apple TV+",
		"Apple Music",
		"Apple Arcade",
		"Apple Fitness+",
		"Apple News+",
		"Apple Podcasts",
		"Apple Books",
		"Apple Store",
	],
};
const appleStore = {
	title: "Apple Store",
	links: [
		"Find a Store",
		"Genius Bar",
		"Today at Apple",
		"Apple Camp",
		"Apple Store App",
		"Certified Refurbished",
		"Financing",
		"Apple Trade In",
		"Order Status",
		"Shopping Help",
	],
};

const business = {
	title: "For Business",
	links: ["Find a Store", "Apple and Business", "Shop for Business"],
	listHeight90: true,
};
const education = {
	title: "For Education",
	links: ["Apple and Education", "Shop for K-12", "Shop for College"],
	listHeight90: true,
};

const healthCare = {
	title: "For Healthcare",
	links: [
		"Apple in Healthcare",
		"Health on Apple Watch",
		"Health Records on iPhone",
	],
	listHeight90: true,
};
const government = {
	title: "For Government",
	links: ["Shop for Government", "Shop for Veterans and Military"],
	listHeight90: true,
};

const appleValues = {
	title: "Apple Values",
	links: [
		"Accessibility",
		"Education",
		"Environment",
		"Inclusion and Diversity",
		"Privacy",
		"Racial Equity and Justice",
		"Supplier Responsibility",
	],
};

const aboutApple = {
	title: "About Apple",
	links: [
		"Apple Leadership",
		"Career Opportunities",
		"Investors",
		"Ethics and Compliance",
		"Events",
		"Contact Apple",
	],
};

function Footer_accordion() {
	return (
		<div className="pt-2">
			<div className="">
				<div className="flex flex-col gap-3">
					<FAQItem links={shopAndLearn.links} title={shopAndLearn.title} />
					<FAQItem
						links={AppleWallet.links}
						title={AppleWallet.title}
						listHeight90={AppleWallet.listHeight90}
					/>
					<FAQItem
						links={manageId.links}
						title={manageId.title}
						listHeight90={manageId.listHeight90}
					/>
					<FAQItem links={entertainment.links} title={entertainment.title} />
					<FAQItem links={appleStore.links} title={appleStore.title} />
					<FAQItem
						links={business.links}
						title={business.title}
						listHeight90={business.listHeight90}
					/>
					<FAQItem
						links={education.links}
						title={education.title}
						listHeight90={education.listHeight90}
					/>
					<FAQItem
						links={healthCare.links}
						title={healthCare.title}
						listHeight90={healthCare.listHeight90}
					/>
					<FAQItem
						links={government.links}
						title={government.title}
						listHeight90={government.listHeight90}
					/>
					<FAQItem links={appleValues.links} title={appleValues.title} />
					<FAQItem links={aboutApple.links} title={aboutApple.title} />
				</div>
			</div>
			<footer className="mt-10 text-[12px]">
				<div>
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
				<div className="flex flex-col items-start justify-between pt-3">
					<p className="text-md pb-3">Ghana</p>

					<p className="text-[#6e6e73]">
						Copyright © 2023 Apple Inc. All rights reserved.
					</p>
					<p className="text-[#6e6e73]">
						Privacy | Policy | Terms of Use | Sales and Refunds | Legal Site Map
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer_accordion;
