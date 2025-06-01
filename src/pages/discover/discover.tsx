import { StyleSheet, Text, View, Pressable, SectionList, TouchableOpacity } from 'react-native';
import { colors } from '@constant/colors';
import { iconName } from '@constant/iconNames';

import Container from '@components/atmos/container/container';
import Icon from '@components/atmos/icon/icon';
import Tabs from '@navigation/materialTab';
import { responsiveFontSize } from '@utility/index';
import { useState } from 'react';
import SearchBar from '@components/molecules/searchbar/searchBar';
import ModalScreen from '@components/molecules/ModalScreen/ModalScreen';
import { post } from '@utility/httpServices';
import Error from '@components/molecules/error/error';

interface suburbData {
	_id: string;
	locationId?: number;
	lgaId: number;
	postcode: string;
	state: string;
	suburbName: string;
	lgaName: string;
	stateFullName: string;
	displayText: string;
	locationType: string;
	city: string | null;
	cityId: number | null;
	regionId: number | null;
	region: string | null;
	aliasSearchName: string[] | null;
	aliasSuburbs: { name: string; postcode: string }[] | null;
	suburbId: number;
	streetAddressSlug: string;
	numberOfProperties: number;
	streetSlug: string;
	createdAt: string;
	streetName: string;
	suburbSlug: string;
	streetAddress: string;
	streetAbv: string;
	streetNameFirst: string;
	updatedAt: string | null;
	streetTypeCode: string;
	projectSlug?: string;
}

interface SuburbResponse {
	data: suburbData[];
}

const endpoint = `/api/pubui/mobile/location/unified-search`;

const headers = {
	'x-rev-apikey': '46F42C32-1294-4D13-8B54-EB183BC04FBD',
	'x-mob-app-version': '6.8.2',
};

const Discover = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [searchResults, setSearchResults] = useState<
		Array<{ title: string; data: suburbData[] }>
	>([]);
	const [selectedItem, setSelectedItem] = useState('');
	const [error, setError] = useState<string | null>(null);

	const onChangeText = async (text: string) => {
		if (text.length < 3) {
			setSearchResults([]);
			return;
		}
		try {
			const requestBody = {
				searchText: text,
				scope: {
					excludeLocations: false,
					excludeStreets: false,
					excludeProperties: true,
					excludeProject: false,
					excludeSchool: false,
					locationScope: {
						excludeState: false,
						excludeCity: false,
						excludeLga: false,
						excludeRegion: false,
					},
				},
			};
			const response = await post<SuburbResponse>(endpoint, requestBody, headers);
			const category = response.data;

			const result: Array<{ title: string; data: suburbData[] }> = [];
			const state: { title: string; data: suburbData[] } = { title: 'state', data: [] };
			const city: { title: string; data: suburbData[] } = { title: 'city', data: [] };
			const suburb: { title: string; data: suburbData[] } = { title: 'suburb', data: [] };
			const project: { title: string; data: suburbData[] } = { title: 'project', data: [] };
			const street: { title: string; data: suburbData[] } = { title: 'street', data: [] };

			category.forEach((item) => {
				if (item.locationType === 'state') {
					state.data.push(item);
				}
				if (item.locationType === 'city') {
					city.data.push(item);
				}
				if (item.locationType === 'suburb') {
					suburb.data.push(item);
				}
				if (item.projectSlug) {
					project.data.push(item);
				}
				if (item.streetSlug) {
					street.data.push(item);
				}
			});

			if (state.data.length > 0) {
				result.push(state);
			}
			if (city.data.length > 0) {
				result.push(city);
			}
			if (suburb.data.length > 0) {
				result.push(suburb);
			}
			if (project.data.length > 0) {
				result.push(project);
			}
			if (street.data.length > 0) {
				result.push(street);
			}

			setSearchResults(result);
		} catch (error) {
			setError(`Something went wrong! ${error}`);
		}
	};

	const renderSearchList = ({ item }: { item: suburbData }) => {
		const setItemName = (item: suburbData) => {
			if (item.streetSlug) {
				return item.streetAddress;
			}
			return item.displayText;
		};

		const setItemInSearchbar = (item: suburbData) => {
			if (item.streetSlug) {
				setSelectedItem(item.streetAddress);
			} else {
				setSelectedItem(item.displayText);
			}
		};

		return (
			<TouchableOpacity style={styles.resultItem} onPress={() => setItemInSearchbar(item)}>
				<Text style={styles.resultText}>{setItemName(item)}</Text>
				{item.locationType == 'suburb' && (
					<Icon iconName={iconName.plus} size={20} color={colors.primary_black} />
				)}
			</TouchableOpacity>
		);
	};

	return (
		<Container>
			{modalVisible && (
				<ModalScreen modalVisible={modalVisible} setModalVisible={setModalVisible}>
					<SearchBar
						placeholder='Search suburb, school or street'
						onChangeText={onChangeText}
						setModalVisible={() => setModalVisible(false)}
						selectedItem={selectedItem}
						setSelectedItem={() => setSelectedItem('')}
					/>

					{error && <Error message={error} />}

					<View style={styles.searchListContainer}>
						<SectionList
							sections={searchResults}
							keyExtractor={(item, index) => `${item._id}+${index}`}
							renderItem={renderSearchList}
							renderSectionHeader={({ section: { title } }) => (
								<Text style={styles.sectionText}>{title}</Text>
							)}
							showsVerticalScrollIndicator={false}
						/>
					</View>
				</ModalScreen>
			)}

			<View style={styles.headerContainer}>
				<View style={styles.searchContainer}>
					<Icon iconName={iconName.leftArrow} size={35} color={colors.primary_black} />

					<Pressable
						style={styles.searchBar}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<Icon iconName={iconName.search} size={25} color={colors.primary_black} />
						<Text style={styles.searchText}>Search suburb, school or street</Text>
					</Pressable>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Filters</Text>
						<Icon iconName={iconName.filters} size={24} color={colors.primary_black} />
					</Pressable>
					<Pressable style={styles.button}>
						<Text style={styles.buttonText}>Save search</Text>
						<Icon iconName={iconName.heart} size={24} color={colors.primary_black} />
					</Pressable>
				</View>
			</View>

			<Tabs />
		</Container>
	);
};

export default Discover;

const styles = StyleSheet.create({
	searchListContainer: {
		marginTop: 50,
	},
	resultItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 12,
		marginVertical: 5,
	},
	resultText: {
		fontSize: responsiveFontSize(14),
		paddingLeft: 15,
	},
	sectionText: {
		fontSize: responsiveFontSize(14),
		fontWeight: 'bold',
		textTransform: 'capitalize',
		marginBottom: 10,
		marginLeft: 15,
	},
	headerContainer: {
		gap: 10,
		backgroundColor: colors.primary_white,
		paddingHorizontal: 18,
		paddingTop: 2,
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	searchBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 15,
		borderRadius: 6,
		paddingHorizontal: 16,
		backgroundColor: colors.primary_grey,
	},
	searchText: {
		flex: 1,
		fontSize: responsiveFontSize(14),
		paddingVertical: 12,
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 16,
		paddingTop: 3,
		paddingBottom: 20,
	},
	button: {
		flex: 1,
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		paddingHorizontal: 10,
		borderRadius: 5,
		backgroundColor: colors.secondary_blue,
	},
	buttonText: {
		fontSize: responsiveFontSize(14),
		fontWeight: 400,
	},
});
