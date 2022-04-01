import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";
import getHeaderTitle from "../function/getHeaderTitle";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerTitleStyle: { color: "green" } }}>
    <Nav.Screen
      name="Tabs"
      component={Tabs}
      options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
    />
    <Nav.Screen name="Stack" component={Stack} />
  </Nav.Navigator>
);

export default Root;
