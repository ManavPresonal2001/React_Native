import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { colors } from '@constant/colors';
import { responsiveHeight } from '@utility/index';
import Container from '@components/atmos/container/container';
import Card from '@components/molecules/card/card';
import { ListingItem } from '@utility/types';
import { post } from '@utility/httpServices';
import Error from '@components/molecules/error/error';
import SkeletonLoader from '@components/molecules/skeletonLoader/loader';

const endpoint = '/api/pubui/mobile/listings/search-result-page/listings-by-location';

const headers = {
	Accept: 'application/json, text/plain,*/*',
	'Content-Type': 'application/json',
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

interface ListingsResponse {
	data: {
		listings: ListingItem[];
	};
}

const List: React.FC<ListingItem> = () => {
	const [list, setList] = useState<ListingItem[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const getList = async () => {
		setIsLoading(true);
		try {
			const response = await post<ListingsResponse>(endpoint, requestBody, headers);
			setList(response.data.listings);
		} catch (error: unknown) {
			setError(`somthing went wrong! ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getList();
	}, []);

	const renderCardItem = ({ item }: { item: ListingItem }) => {
		if (isLoading) {
			return <SkeletonLoader />;
		}

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
			{isLoading ? (
				<>
					<SkeletonLoader />
					<SkeletonLoader />
					<SkeletonLoader />
				</>
			) : error ? (
				<Error message={error} />
			) : (
				<FlatList
					data={list}
					renderItem={renderCardItem}
					keyExtractor={(item) => item.id.toString()}
					ListHeaderComponent={<View style={styles.filterContainer} />}
				/>
			)}
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
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
});
