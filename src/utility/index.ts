import {Dimensions, PixelRatio} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');

const fScale = (size: number) => {
  const scale = screenWidth / 375; //375 is the base screen width (like iPhone 11/12/13).
  const newSize = size * scale;
  const roundedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return roundedSize;
};

export default fScale;
