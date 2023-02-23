import React from "react";

type propductType = {
	name: string;
	img: string;
}[];

interface productsProps {
	products: propductType;
}

function Store_Products({ products }: productsProps): JSX.Element {
	return <div></div>;
}

export default Store_Products;
