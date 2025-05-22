import { StyleSheet, TextInput, View } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { svgPaths } from '@constant/svgPaths';
import { colors } from '@constant/colors';
import Icon from '@components/atmos/icon/icon';
import { responsiveFontSize } from '@utility/index.ts';

interface SearchBarProps {
	style?: StyleProp<ViewStyle>;
	placeholder: string;
	iconName: keyof typeof svgPaths;
}

const SearchBar: React.FC<SearchBarProps> = ({ style, placeholder, iconName }) => {
	return (
		<View style={[styles.inputContainer, style]}>
			{iconName && <Icon iconName={iconName} size={25} color={colors.primary_black} />}
			<TextInput style={styles.input} placeholder={placeholder} />
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		borderRadius: 6,
		paddingHorizontal: 16,
		backgroundColor: colors.primary_grey,
	},
	input: {
		flex: 1,
		fontSize: responsiveFontSize(16),
		backgroundColor: 'transparent',
	},
});
