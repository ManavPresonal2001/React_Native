import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '@constant/colors';
import { screenName } from '@constant/screenNames';
import { iconName } from '@constant/iconNames';

import Discover from '@pages/discover/discover';
import Icon from '@components/atmos/icon/icon';
import ShortList from '@pages/shortlist/shortList';
import MyAccount from '@pages/myAccount/myAccount';
import More from '@pages/more/more';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primary_blue,
				tabBarInactiveTintColor: colors.tertiary_grey,
				tabBarStyle: {
					elevation: 0,
					height: '9.5%',
				},
				tabBarIconStyle: {
					marginTop: 10,
				},
				tabBarButton: (props) => (
					<Pressable {...props} android_ripple={{ color: 'transparent' }} />
				),
			}}
		>
			<Tab.Screen
				name={screenName.discover}
				component={Discover}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon iconName={iconName.search} color={color} size={29} />
					),
				}}
			/>
			<Tab.Screen
				name={screenName.shortList}
				component={ShortList}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon iconName={iconName.heart} color={color} size={29} />
					),
				}}
			/>
			<Tab.Screen
				name={screenName.myAccount}
				component={MyAccount}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon iconName={iconName.user} color={color} size={29} />
					),
				}}
			/>
			<Tab.Screen
				name={screenName.more}
				component={More}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon iconName={iconName.menu} color={color} size={29} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;
