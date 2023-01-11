import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  const handleSubmit = (goal) => {
    console.log("You submitted: ", goal);
    setListOfGoals((prevList) => {
      return [...prevList, goal];
    });
  };

  const handleDeleteGoal = (goalToDelete) => {
    // can also use filter here because it returns a new array
    setListOfGoals((prevList) => {
      return [
        ...prevList.slice(0, goalToDelete.index),
        ...prevList.slice(goalToDelete.index + 1),
      ];
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput handleSubmit={handleSubmit} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                handleDeleteGoal={handleDeleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => index}
        />
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
  goalsContainer: {
    flex: 5,
  },
});
