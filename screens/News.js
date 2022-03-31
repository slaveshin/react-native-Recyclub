import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { getNews } from "../src/api";
import Loader from "../components/Loader";
import { ConvertText } from "../function/util";
const Separator = styled.View`
  height: 20px;
`;
const Tag = styled.Text`
  font-size: 17px;
  font-weight: 400;
  margin-left: 5px;
  margin-right: 5px;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 5px 0 15px #aaa;
`;
const Box = styled.TouchableOpacity`
  border-width: 1px;
  border-color: black;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-left: 5px;
  background-color: white;
  border-radius: 20px;
`;
const BlogName = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;
const Thumbnail = styled.Image`
  margin-top: 20px;
  width: 120px;
  height: 120px;
  border-radius: 5px;
`;
const Title = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
`;
const Content = styled.Text`
  margin-top: 20px;
`;

const News = () => {
  const { isLoading, data } = useQuery(["News", "Article"], getNews);
  return isLoading ? (
    <Loader />
  ) : (
    <FlatList
      data={data.documents}
      ListHeaderComponent={
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box>
            <Tag> #hello </Tag>
          </Box>
          <Box>
            <Tag> #이것은 양 옆으로 </Tag>
          </Box>
          <Box>
            <Tag> #스와이프가 가능합니다 </Tag>
          </Box>
          <Box>
            <Tag> #하이 헬로우~ </Tag>
          </Box>
        </ScrollView>
      }
      ItemSeparatorComponent={Separator}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Container>
          <BlogName>{item.blogname}</BlogName>
          <Thumbnail source={item.thumbnail ? { uri: item.thumbnail } : null} />
          <Title>{ConvertText(item.title)}</Title>
          <Content>{ConvertText(item.contents)}</Content>
        </Container>
      )}
    />
  );
};
export default News;
