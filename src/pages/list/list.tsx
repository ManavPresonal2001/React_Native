import Container from '@components/atmos/container/container';
import Card from '@components/molecules/card/card';
import { iconName } from '@constant/iconNames';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

type ListingItem = {
	id: number;
	heroImageUrl: string;
};

const url = 'https://view.com.au/api/pubui/mobile/listings/search-result-page/listings-by-location';

const headers = {
	accept: 'application/json, text/plain, */*',
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
};

const List = () => {
	const [list, setList] = useState<[]>([]);

	const getData = async () => {
		try {
			const response = await axios.post(url, requestBody, { headers });
			setList(response.data.data.listings);
		} catch (error) {
			Alert.alert('Error', 'Failed to fetch data', error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const renderCardItem = ({ item }: { item: ListingItem }) => {
		return <Card iconNameA={iconName.bed} heroImg={item.heroImageUrl} />;
	};

	return (
		<Container>
			<FlatList
				data={list}
				renderItem={renderCardItem}
				keyExtractor={(item) => item.id.toString()}
			/>
			{/* <Card iconNameA={iconName.bed} /> */}
		</Container>
	);
};

export default List;
