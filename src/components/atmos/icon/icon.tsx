import {SvgXml} from 'react-native-svg';
import { colors } from '@constant/colors';
import { svgPaths } from '@constant/svgPaths';


type IconProps = {
  iconName: keyof typeof svgPaths;
  height?: number | string;
  width?: number | string;
  color?: string;
  size?: number;
  fillColor?: string;
  viewBox?: string;
  strokeWidth?: string;
};

const Icon: React.FC<IconProps> = ({
  iconName,
  height,
  width,
  size = 29,
  color = colors.tertiary_grey,
  fillColor = 'none',
  viewBox = '0 0 32 32',
  strokeWidth = '1.5',
}) => {
  const path = svgPaths[iconName];
  console.log(iconName);
  
  if (!path) {
    return null;
  }

  const svgString = `
    <svg 
      stroke="${color}" 
      width="${width ?? size}"
      height="${height ?? size}"
      stroke-width="${strokeWidth}"
      viewBox="${width ? `0 0 ${width} ${height}` : viewBox}" 
      fill="${fillColor}" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      ${path}
    </svg>
  `;

  return <SvgXml xml={svgString} />;
};

export default Icon;
