/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackNavigatorParamsList } from 'model/rootStackNavigatorParamsList';
import { TabNavigator } from 'navigators/TabNavigator';
import { ProductDetailsScreen } from 'screens/ProductDetailsScreen';
import { ScreenNames } from 'utils/constants/ScreenNames';

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <BottomSheetModalProvider>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={ScreenNames.TAB} component={TabNavigator} />
                        <Stack.Screen name={ScreenNames.DETAILS} component={ProductDetailsScreen} />
                    </Stack.Navigator>
                </BottomSheetModalProvider>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default App;
