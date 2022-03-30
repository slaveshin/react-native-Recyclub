import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <CenterView>
    <Text>This is Home screen</Text>
  </CenterView>
);

export default Home;
