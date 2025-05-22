import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '@constant/colors';
import { iconName } from '@constant/iconNames';

import Container from '@components/atmos/container/container';
import Icon from '@components/atmos/icon/icon';
import Tabs from '@navigation/materialTab';
import SearchBar from '@components/molecules/searchbar/searchBar';
import { responsiveFontSize } from '@utility/index';

const Discover = () => {
	return (
		<Container>
			<View style={styles.headerContainer}>
				<View style={styles.searchContainer}>
					<Icon iconName={iconName.menu} size={25} color={colors.primary_black} />
					<SearchBar
						placeholder='Search suburb, school or street'
						iconName={iconName.search}
					/>
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
	headerContainer: {
		gap: 10,
		backgroundColor: colors.primary_white,
		paddingHorizontal: 18,
		paddingTop: 2,
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
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
