import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import * as Font from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigations/Root";

const queryClient = new QueryClient();

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) => {
  if (typeof image == "string") {
    return Image.prefetch(image);
  } else {
    return Asset.loadAsync(image);
  }
};

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // preloading
    const fonts = loadFonts([Ionicons.font]);
    //const images = loadImages([require("./path"), "url"]);
    await Promise.all([...fonts]);
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
