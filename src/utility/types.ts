export interface HeroImage {
	url: string;
}

export interface Agent {
	firstName: string;
	lastName: string;
	agentPhotoFileName: string;
}

export interface Agency {
	logoFileName: string;
	brandColour: string;
}

export interface Price {
	priceText: number;
}

export interface Address {
	unitNumber: string;
	streetNumber: string;
	streetName: string;
	suburbName: string;
	state: string;
	postcode: string;
}

export interface Accommodation {
	bathrooms: number;
	bedrooms: number;
	carparks: number;
	landSize: number;
	primaryPropertyType: string;
}

export interface ListingItem extends Price, Accommodation, Address {
	id: number;
	heroImageUrl: string;
	agency: Agency;
	agents: Agent[];
	images: HeroImage[];
}

export interface cardProps extends Price, Accommodation, Address {
	agentName: Agent;
	heroImages: HeroImage[];
	agencyImg: string;
	brandColour: string;
	agentImg: string;
}

export interface CardHeaderProps {
	headerImg: string;
	headerBgColor: string;
	agentName: Agent;
	agentImg: string;
}
