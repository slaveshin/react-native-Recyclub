import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Search = () => (
  <CenterView>
    <Text>This is Search screen</Text>
  </CenterView>
);

export default Search;
