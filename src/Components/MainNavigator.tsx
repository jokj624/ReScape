import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontawesomeIcon from "react-native-vector-icons/FontAwesome";
import Home from "./Home";
import CreateReview from "./CreateReview";
import MyReview from "./MyReview";
import type { RouteProp, ParamListBase } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
type TabBarIconProps = { color: string, size: number };

const MainNavigator = () => {
    FontawesomeIcon.loadFont();
    const screenOptions = useCallback(({ route }: { route: RouteProp<ParamListBase, string>}) => {
        return {
            tabBarStyle: {
                backgroundColor: '#FDFEFF'
            },
            tabBarIcon: ({ color, size }: TabBarIconProps) => {
                const { name } = route;
                switch (name) {
                    case "나의 리뷰":
                        return <FontawesomeIcon name="user" size={size} color={color} />;
                    case "한줄평":
                        return <FontawesomeIcon name="edit" size={size} color={color} />;
                }
                return <FontawesomeIcon name = "home" size={size} color={color} />;
            }
        }
    }, []);
    return (
        <Tab.Navigator initialRouteName="홈" screenOptions={screenOptions}>
            <Tab.Screen name="나의 리뷰" options={{ headerShown: false }} component={MyReview} />
            <Tab.Screen name="홈" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="한줄평" options={{ headerShown: false }} component={CreateReview} />
        </Tab.Navigator>
    );
}
export default MainNavigator;