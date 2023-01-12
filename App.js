import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const cancelModal = () => {
    setModalIsVisible(false);
  };

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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          handleSubmit={handleSubmit}
          visible={modalIsVisible}
          cancelModal={cancelModal}
        />
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
    </>
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
