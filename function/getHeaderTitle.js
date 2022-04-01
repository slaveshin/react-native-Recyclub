import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "News":
      return "News";
    case "Search":
      return "Search";
  }
};

export default getHeaderTitle;
