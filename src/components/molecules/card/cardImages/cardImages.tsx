import { responsiveHeight } from '@utility/index';
import { Image, StyleSheet, View } from 'react-native';

interface CardImages {
	headerImg: string;
}
const CardImages: React.FC<CardImages> = ({ headerImg }) => {
	return (
		<View style={styles.imageContainer}>
			<Image source={{ uri: headerImg }} style={styles.heroImage} />
		</View>
	);
};

export default CardImages;

const styles = StyleSheet.create({
	imageContainer: {
		height: responsiveHeight(250),
		width: '100%',
		backgroundColor: '#60D4F188',
	},
	heroImage: {
		width: '100%',
		height: '100%',
	},
});
