import ContentLoader, { Rect } from 'react-content-loader/native';
import { Dimensions } from 'react-native';

const SkeletonLoader = () => {
	const { width } = Dimensions.get('window');

	return (
		<ContentLoader
			speed={1.5}
			width={width}
			height={260}
			viewBox='0 0 360 260'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<Rect x='0' y='0' rx='8' ry='8' width='360' height='180' />
			<Rect x='12' y='192' rx='4' ry='4' width='216' height='16' />
			<Rect x='12' y='216' rx='4' ry='4' width='144' height='16' />
			<Rect x='252' y='210' rx='4' ry='4' width='32' height='32' />
			<Rect x='288' y='210' rx='4' ry='4' width='32' height='32' />
			<Rect x='324' y='210' rx='4' ry='4' width='32' height='32' />
		</ContentLoader>
	);
};

export default SkeletonLoader;
