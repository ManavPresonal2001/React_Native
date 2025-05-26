import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { colors } from '@constant/colors';
import { responsiveHeight } from '@utility/index';
import Container from '@components/atmos/container/container';
import Card from '@components/molecules/card/card';

interface HeroImage {
	url: string;
}

type ListingItem = {
	id: number;
	heroImageUrl: string;
	agency: {
		logoFileName: string;
		brandColour: string;
	};
	agents: {
		agentPhotoFileName: string;
		firstName: string;
		lastName: string;
	}[];
	images: HeroImage[];
	priceText: number;
	unitNumber: string;
	streetNumber: string;
	streetName: string;
	suburbName: string;
	state: string;
	postcode: string;
	bathrooms: number;
	bedrooms: number;
	carparks: number;
	landSize: number;
	primaryPropertyType: string;
};

const url =
	'https://resi.uatz.view.com.au/api/pubui/mobile/listings/search-result-page/listings-by-location';

const headers = {
	accept: 'application/json, text/plain,*/*',
	'content-type': 'application/json',
	'x-rev-apikey': '46F42C32-1294-4D13-8B54-EB183BC04FBD',
	'x-mob-app-version': '6.8.2',
	'User-Agent': 'avesta-ua',
};

const requestBody = {
	saleMethod: ['Sale'],
	page: 1,
	includeSurrounding: true,
	excludeUnderContract: false,
	propertyTypes: [],
	exactBeds: false,
	exactBaths: false,
	exactCars: false,
	features: [],
	locations: [
		{
			state: 'vic',
			suburbNameSlug: 'richmond',
			suburbName: 'RICHMOND',
			postcode: '3121',
		},
	],
	sort: 'recommended',
};

const List = () => {
	const [list, setList] = useState<[]>([]);

	const getList = async () => {
		try {
			const response = await axios.post(url, requestBody, { headers });
			setList(response.data.data.listings);
		} catch (error) {
			Alert.alert('Error', 'Failed to fetch data', error.message);
		}
	};

	useEffect(() => {
		getList();
	}, []);

	// unitNumber/streetNumber streetName, suburbName, state postcode

	const renderCardItem = ({ item }: { item: ListingItem }) => {
		return (
			item.agency && (
				<Card
					agencyImg={item.agency.logoFileName}
					brandColour={item.agency.brandColour}
					agentName={item.agents[0]}
					agentImg={item.agents[0].agentPhotoFileName}
					heroImages={item.images}
					priceText={item.priceText}
					unitNumber={item.unitNumber}
					streetNumber={item.streetNumber}
					streetName={item.streetName}
					suburbName={item.suburbName}
					state={item.state}
					postcode={item.postcode}
					bathrooms={item.bathrooms}
					bedrooms={item.bedrooms}
					carparks={item.carparks}
					landSize={item.landSize}
					primaryPropertyType={item.primaryPropertyType}
				/>
			)
		);
	};

	return (
		<Container style={styles.containerStyle}>
			<View style={styles.filterContainer}></View>

			<FlatList
				data={list}
				renderItem={renderCardItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</Container>
	);
};

export default List;

const styles = StyleSheet.create({
	filterContainer: {
		height: responsiveHeight(60),
		backgroundColor: colors.primary_white,
	},
	containerStyle: {
		backgroundColor: colors.primary_grey,
	},
});
