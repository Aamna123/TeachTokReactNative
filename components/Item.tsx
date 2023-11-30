// Item.tsx
import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { MCQResponse } from "../types";
import Option from "./Option";
import VerticalBar from "./RightBar";
import { DataContext } from "../DataContext";
import PlaylistComponent from "./Footer";
import Header from "./Header";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const height = Dimensions.get("window").height;
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
// const bottomTabNavigatorHeight = 60;
// const itemHeight = height - (statusBarHeight + bottomTabNavigatorHeight + 60);
interface ItemProps {
  mcqResponse: MCQResponse;
}

const Item: React.FC<ItemProps> = ({ mcqResponse }) => {
  // const context = useContext(DataContext);
  // const { correctAnswer } = context;
  const [userChoice, setUserChoice] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(userChoice);
  }, [isSelected]);

  const handleOptionPress = (option) => {
    setUserChoice(option);
    setIsSelected(true);
  };

  return (
    <View style={styles.item}>
      <View
      // style={{marginTop:140}}
      >
        <Text style={styles.question}>{mcqResponse.question}</Text>
      </View>
      <View>
        <View style={styles.bottomItem}>
          <View>
            {mcqResponse.options.map((option, index) => (
              <Option
                key={index}
                option={option.answer}
                isSelected={isSelected}
                isCorrect={option.answer === mcqResponse.correctAnswer}
                isUserChoice={option.answer === userChoice}
                onPress={() => handleOptionPress(option.answer)}
              />
            ))}
            <View>
              <Text style={styles.username}>{mcqResponse.user.name}</Text>
              <Text style={styles.description}>{mcqResponse.description}</Text>
            </View>
          </View>
          <View>
            <VerticalBar />
          </View>
        </View>

        <View>
          <PlaylistComponent playlistName={mcqResponse.playlist} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 24,
    fontWeight: "bold",
    maxWidth: 260,
    color: "white",
  },
  item: {
    height: height - 112,
    borderColor: "green",
    borderWidth: 2,
    justifyContent: "space-between",
  },
  username: { color: "white", fontWeight: "600", fontSize: 15 },
  description: { color: "white", fontWeight: "400", fontSize: 13 },
  bottomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 70,
  },
});

export default Item;
