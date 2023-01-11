import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  const handleChange = (goal) => {
    setGoal(goal);
  };

  const handleSubmit = () => {
    console.log("You submitted: ", goal);
    setListOfGoals((prevList) => {
      return [...prevList, goal];
    });
    setGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => handleChange(text)}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={goal}
        />
        <Button title="Add Goal" onPress={handleSubmit} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {listOfGoals.map((singleGoal, index) => {
            return (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{singleGoal}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
