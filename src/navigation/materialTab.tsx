import { colors } from '@constant/colors';
import Auction from '@pages/auction/auction';
import Inspections from '@pages/inspections/inspections';
import List from '@pages/list/list';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { responsiveFontSize } from '@utility/index';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					elevation: 0,
					borderBottomWidth: 1,
					borderBottomColor: colors.secondary_grey,
					paddingVertical: 10,
					backgroundColor: colors.primary_grey,
				},
				tabBarLabelStyle: {
					fontSize: responsiveFontSize(14),
					fontWeight: '600',
					textTransform: 'none',
				},
				tabBarActiveTintColor: colors.primary_blue,
				tabBarInactiveTintColor: colors.primary_black,
				tabBarIndicatorStyle: {
					backgroundColor: colors.primary_blue,
					height: 4,
				},
			}}
		>
			<Tab.Screen name='List' component={List} />
			<Tab.Screen name='inspections' component={Inspections} />
			<Tab.Screen name='Auction' component={Auction} />
		</Tab.Navigator>
	);
}

export default Tabs;
