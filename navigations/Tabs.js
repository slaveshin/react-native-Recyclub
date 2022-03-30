import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import News from "../screens/News";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      unmountOnBlur: true,
      headerTitleStyle: {
        color: "green",
      },
      tabBarActiveTintColor: "green",
      tabBarLabelStyle: {
        marginTop: -5,
        fontSize: 12,
        fontWeight: "600",
      },
    }}
  >
    <Tab.Screen
      name="홈"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="home" color={color} size={size} />;
        },
      }}
    />
    <Tab.Screen
      name="뉴스"
      component={News}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="newspaper" color={color} size={size} />;
        },
      }}
    />
    <Tab.Screen
      name="검색"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="search" color={color} size={size} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
