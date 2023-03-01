export type latestProps = {
	name: string;
	img: string;
	para: string;
	text: string;
	white: boolean;
}[];

export type productsProp = {
	name: string;
	img: string;
}[];

export interface titleProp {
	h1: string;
	span: string;
}

export interface storeDifference {
	img: JSX.Element;
	text: string;
	green: boolean;
}
[];

// type Accessories ={

// }

export type AccessoriesProp = {
	img: string;
	new: boolean;
	title: string;
	price: string;
}[];

// =====================
export type differenceProp = {
	img: JSX.Element;
	text: JSX.Element;
	green?: boolean;
	purple?: boolean;
	blue?: boolean;
	orange?: boolean;
	name: string;
}[];

export type leadProp = {
	title: string;
	text: string;
	img: string;
}[];

// =====================

export interface defferenceDataProp {
	difference: differenceProp;
}

export interface titleProp {
	h1: string;
	span: string;
}

export interface titleType {
	title: titleProp;
}

export type headingProp = {
	span: string;
	text: string;
};

export interface productProps {
	leading: leadProp;
	product: AccessoriesProp;
	heading: headingProp;
}

export type experienceProp = {
	span?: string;
	h1: string;
	p?: string;
	img: string;
	dark?: boolean;
}[];
