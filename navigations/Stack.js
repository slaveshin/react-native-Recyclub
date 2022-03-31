import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/Category";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ presentation: "modal" }}>
      <NativeStack.Screen name="카테고리" component={Category} />
    </NativeStack.Navigator>
  );
};

export default Stack;
