import { ScreenNames } from "utils/constants/ScreenNames";

export type RootStackNavigatorParamsList = {
    [ScreenNames.TAB]: undefined,
    [ScreenNames.HOME]: undefined,
    [ScreenNames.BASKET]: undefined,
    [ScreenNames.PROFILE]: { userId: string },
    [ScreenNames.DETAILS]: { productId: string }
}
