import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../lib/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { StyleSheet } from "react-native";
import HeaderView from "../components/Header";
import OrdersStack from "./OrdersStack";
import UserStack from "./UserStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ShopTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CartTab") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "OrdersTab") {
            iconName = "list";
          } else if (route.name === "UserTab") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        header: () => <HeaderView />,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="ShopTab" component={ShopStack} />
      <Tab.Screen name="CartTab" component={CartStack} />
      <Tab.Screen name="OrdersTab" component={OrdersStack} />
      <Tab.Screen name="UserTab" component={UserStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.mainBlue,
    height: 60,
  },
});

export default TabNavigator;
