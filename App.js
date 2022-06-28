import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();

  const [showFace, setShowFace] = useState(false);

  const buttonHandler = () => {
    setShowFace(!showFace);
  };

  const smile = () => {
    return (
      <FontAwesome
        onPress={buttonHandler}
        name="smile-o"
        style={{
          fontSize: 300,
          color: "green",
          paddingTop: 150,
          paddingBottom: 200,
        }}
      />
    );
  };

  const frown = () => {
    return (
      <FontAwesome
        onPress={buttonHandler}
        name="frown-o"
        style={{
          fontSize: 300,
          color: "red",
          paddingTop: 150,
          paddingBottom: 200,
        }}
      />
    );
  };

  const snackTime = () => {
    if (
      (hours === 10 && min >= 0 && min <= 30) ||
      (hours === 15 && min >= 0 && min <= 30) 
      
    ) {
      return true;
    } else {
      return false;
    }
  };

  const iconButton = () => {
    return (
      <TouchableOpacity onPress={buttonHandler}>
        <MaterialCommunityIcons
          name="food-apple"
          style={{
            fontSize: 300,
            color: "pink",
            paddingTop: 150,
            paddingBottom: 200,
          }}
        />
      </TouchableOpacity>
    );
  };

  const face = () => {
    return snackTime() ? smile() : frown();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textQuestion}>Is it snack time?</Text>
        {showFace ? face() : iconButton()}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF668F",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    minHeight: 1000,
  },
  textQuestion: {
    fontSize: 50,
    color: "white",
  },

  textAnswer: {
    fontSize: 50,
    color: "white",
  },

  answerIcon: {
    fontSize: 50,
    color: "white",
    paddingLeft: 120,
  },
  happyFace: {
    fontSize: 100,
  },

  button: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FF668F",
    fontSize: 70,
  },
});
