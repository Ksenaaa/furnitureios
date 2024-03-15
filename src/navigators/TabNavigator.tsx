import { StyleSheet } from 'react-native';

import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomIcon } from 'components/customIcon/CustomIcon';
import { BasketScreen } from 'screens/BasketScreen';
import { HomeScreen } from 'screens/HomeScreen';
import { ProfileScreen } from 'screens/ProfileScreen';
import { Colors } from 'utils/constants/Colors';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
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
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="home"
                            size={25}
                            color={focused ? Colors.gold : Colors.grey}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="shopping-cart"
                            size={25}
                            color={focused ? Colors.gold : Colors.grey}
                        />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name="user"
                            size={25}
                            color={focused ? Colors.gold : Colors.grey}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    containerTabBar: {
        height: 70,
        position: 'absolute',
        paddingTop: 10,
        backgroundColor: Colors.grey,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
    },
    blurStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
