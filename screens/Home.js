import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import Loader from "../components/Loader";
import { getDB } from "../src/firebase";

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin-top: 20px;
  height: 200px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 5px 0 15px #aaa;
`;
const Block = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: tomato;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
`;
const Tag = styled.Text`
  font-size: 17px;
  font-weight: 400;
  color: white;
`;
const Separator = styled.View`
  height: 20px;
`;

const Home = () => {
  const { isLoading, data } = useQuery(["DB", "Category"], getDB);
  const navigation = useNavigation();
  const GotoCategory = () => {
    navigation.navigate("Stack", { screen: "Category" });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Block onPress={GotoCategory}>
      <Tag>비닐류</Tag>
    </Block>
  );
};

export default Home;
