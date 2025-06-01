import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { colors } from '@constant/colors';
import Icon from '@components/atmos/icon/icon';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '@utility/index.ts';
import { iconName } from '@constant/iconNames';

interface SearchBarProps {
	style?: StyleProp<ViewStyle>;
	placeholder: string;
	onChangeText?: (text: string) => void;
	setModalVisible: () => void;
	selectedItem: string;
	setSelectedItem: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	style,
	placeholder,
	onChangeText,
	setModalVisible,
	selectedItem,
	setSelectedItem,
}) => {
	const renderSearchBar = () => {
		return (
			<>
				{selectedItem ? (
					<View style={styles.selectedItemContainer}>
						<Text style={styles.selectedItemText}>{selectedItem}</Text>
						<TouchableOpacity onPress={setSelectedItem}>
							<Icon
								iconName={iconName.cross}
								size={18}
								color={colors.primary_white}
							/>
						</TouchableOpacity>
					</View>
				) : (
					<TextInput
						style={styles.input}
						placeholder={placeholder}
						keyboardType='web-search'
						onChangeText={onChangeText}
					/>
				)}
			</>
		);
	};

	return (
		<View style={[styles.inputContainer, style]}>
			<View style={styles.searchBar}>
				<TouchableOpacity onPress={setModalVisible}>
					<Icon iconName={iconName.leftArrow} size={25} color={colors.primary_black} />
				</TouchableOpacity>

				{renderSearchBar()}
			</View>
			<Pressable style={styles.searchBtn}>
				<Icon iconName={iconName.search} size={25} color={colors.primary_white} />
			</Pressable>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	input: {
		flex: 1,
		fontSize: responsiveFontSize(15),
	},
	searchBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		borderRadius: 6,
		paddingHorizontal: 16,
		paddingVertical: 4,
		backgroundColor: colors.primary_grey,
	},
	searchBtn: {
		width: responsiveWidth(45),
		height: responsiveHeight(45),
		backgroundColor: colors.primary_blue,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedItemContainer: {
		backgroundColor: colors.primary_blue,
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 6,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	selectedItemText: {
		color: colors.primary_white,
	},
});
