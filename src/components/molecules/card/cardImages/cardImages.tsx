import { FlatList, Image, StyleSheet, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '@utility/index';
import { colors } from '@constant/colors';
import { HeroImage } from '@utility/types';

const CardImages: React.FC<{ heroImages: HeroImage[] }> = ({ heroImages }) => {
	const renderHeroImages = ({ item }: { item: HeroImage }) => {
		const IMAGE = `https://resi.uatz.view.com.au/viewstatic/images/listing/750-min/${item.url}`;
		return <Image source={{ uri: IMAGE }} style={styles.heroImage} />;
	};

	return (
		<View style={styles.imageContainer}>
			<FlatList
				data={heroImages}
				renderItem={renderHeroImages}
				keyExtractor={(item) => item.url.toString()}
				horizontal
			/>
		</View>
	);
};
export default CardImages;

const styles = StyleSheet.create({
	imageContainer: {
		height: responsiveHeight(250),
		width: '100%',
		backgroundColor: colors.secondary_grey,
	},
	heroImage: {
		width: responsiveWidth(375),
		height: '100%',
	},
});
