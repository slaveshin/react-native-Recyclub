import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Category = () => (
  <CenterView>
    <Text>This is Category screen</Text>
  </CenterView>
);

export default Category;
