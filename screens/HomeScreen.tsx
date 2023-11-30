import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import Item from "../components/Item";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import Header from "../components/Header";

let endReached = false;
const windowHeight = Dimensions.get("window").height;
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const bottomTabNavigatorHeight = 50; // Define the height of your bottom tab navigator
const flatListHeight = windowHeight - bottomTabNavigatorHeight;

const HomeScreen = () => {
  const context = useContext(DataContext);
  const [isFetching, setIsFetching] = useState(false);

  const { data, loading, fetchData, currentItem } = context;

  const handleLoadMore = () => {
    if (!isFetching && !loading) {
      setIsFetching(true);
      fetchData()
        .then(() => {
          setIsFetching(false);
        })
        .catch(() => {
          setIsFetching(false); // handle error appropriately
        });
    }
  };

  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <ImageBackground
      source={{ uri: `${currentItem?.image}` }}
      style={styles.backgroundImage}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          contentContainerStyle={{
            minHeight: "100%",
            justifyContent: "space-between",
          }}
          data={data}
          style={{
            height: windowHeight,
          }}
          renderItem={({ item }) => <Item mcqResponse={item} />}
          keyExtractor={(item, index) => item.id + index}
          onEndReached={() => handleLoadMore()}
          pagingEnabled={true}
          onEndReachedThreshold={0.5}
          snapToInterval={flatListHeight}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    paddingTop: statusBarHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default HomeScreen;
