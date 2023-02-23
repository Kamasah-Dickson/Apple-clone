import { Link } from "react-router-dom";

function PageNotFound() {
	return (
		<div className="grid h-screen w-full place-content-center text-center ">
			<h1 className="text-2xl font-medium text-black md:text-4xl">
				Page Under Construction 🚧😷
			</h1>
			<p className="text-md mt-2 font-light md:text-2xl">
				Project is basically to demonstrate or showcase a skill
			</p>
			<Link
				to="/"
				className="my-trans mt-6 text-center text-4xl hover:scale-125 active:-scale-125"
			>
				👽
			</Link>
		</div>
	);
}

export default PageNotFound;
