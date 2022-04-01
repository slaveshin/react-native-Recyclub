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
const Separator = styled.View`
  height: 20px;
`;
const Box = styled.TouchableOpacity`
  border-width: 1px;
  border-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  border-radius: 20px;
`;
const Category = () => {
  const { isLoading, data } = useQuery(["DB", "Category"], getDB);
  return isLoading ? (
    <Loader />
  ) : (
    <FlatList
      data={data.vinyl}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Box>
          <Text>{item.title}</Text>
        </Box>
      )}
    />
  );
};

export default Category;
