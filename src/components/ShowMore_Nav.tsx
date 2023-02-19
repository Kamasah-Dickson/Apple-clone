import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface showMoreProp {
	showMobile: true;
	setExtraNav: React.Dispatch<React.SetStateAction<boolean>>;
	ToggleLinks: () => JSX.Element | null;
}

function ShowMore_Nav({ showMobile, setExtraNav, ToggleLinks }: showMoreProp) {
	return (
		<ul>
			<MdKeyboardArrowLeft
				className=" icon absolute top-5 left-5 cursor-pointer"
				color="white"
				size={20}
				onClick={() => setExtraNav(false)}
			/>
			{ToggleLinks()}
		</ul>
	);
}

export default ShowMore_Nav;
