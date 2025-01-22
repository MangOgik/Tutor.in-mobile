import CustomText from "@/src/components/CustomText";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const _layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        swipeEnabled: false,
        tabBarActiveTintColor: "white",
        tabBarLabel: (props) => {
          return <CustomText {...props} className={`text-white opacity-60 ${props.focused ? "opacity-100" : ""}`} />;
        },
        tabBarIndicatorStyle: {
          borderColor: "white",
          backgroundColor: "white",
        },
        tabBarStyle: { backgroundColor: "#FFA726" },
      }}
    >
      <MaterialTopTabs.Screen
        name="forum"
        options={{ title: "Forum Belajar" }}
      />
      <MaterialTopTabs.Screen
        name="my_forum"
        options={{ title: "Forum Saya" }}
      />
    </MaterialTopTabs>
  );
};

export default _layout;
