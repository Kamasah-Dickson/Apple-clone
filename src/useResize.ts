import { useState, useEffect } from "react";

function useResize() {
	const [size, setSize] = useState(window.innerWidth);

	function checkResize() {
		setSize(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", checkResize);
		return () => window.removeEventListener("resize", checkResize);
	}, [size]);

	return { size };
}

export default useResize;
