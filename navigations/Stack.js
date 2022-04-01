import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/Category";
import { Ionicons } from "@expo/vector-icons";
import Detail from "../screens/Detail";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Category" component={Category} />
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
