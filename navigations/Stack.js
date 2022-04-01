import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/Category";
import { Ionicons } from "@expo/vector-icons";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="카테고리" component={Category} />
    </NativeStack.Navigator>
  );
};

export default Stack;
