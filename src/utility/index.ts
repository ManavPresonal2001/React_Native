// utils/responsive.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base design size (iPhone X/11 Pro) //375 is the base screen width (like iPhone 11/12/13).
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

//  Responsive Width
export function responsiveWidth(size: number) {
	return (SCREEN_WIDTH / BASE_WIDTH) * size;
}

//  Responsive Height
export function responsiveHeight(size: number) {
	return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
}

// Responsive Font Size
export function responsiveFontSize(size: number) {
	const scale = SCREEN_WIDTH / BASE_WIDTH;
	const newSize = size * scale;
	return PixelRatio.getFontScale() * Math.round(PixelRatio.roundToNearestPixel(newSize));
}
