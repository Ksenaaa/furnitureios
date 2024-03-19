import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomIcon } from 'components/customIcon/CustomIcon';
import { BasketScreen } from 'screens/BasketScreen';
import { HomeScreen } from 'screens/HomeScreen';
import { ProfileScreen } from 'screens/ProfileScreen';
import { Colors } from 'utils/constants/Colors';
import { ScreenNames } from 'utils/constants/ScreenNames';

import { stylesTabNavigator as styles } from './TabNavigator.styles';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    const iconColor = (isFocus: boolean) => (isFocus ? Colors.gold : Colors.grey);

    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.HOME}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.containerTabBar,
                tabBarBackground: () => (
                    <BlurView overlayColor="" blurAmount={5} style={styles.blurStyles} />
                ),
            }}
        >
            <Tab.Screen
                name={ScreenNames.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon name="home" size={25} color={iconColor(focused)} />
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenNames.BASKET}
                component={BasketScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon name="shopping-cart" size={25} color={iconColor(focused)} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name={ScreenNames.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CustomIcon name="user" size={25} color={iconColor(focused)} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
