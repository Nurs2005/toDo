import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({ index,taskText,setTasks }) {
    const deleteTask=()=>{
        setTasks(prevState =>{
            const newTasks = prevState.filter((el,curIndex)=>{
                return curIndex !== index
            })
            return newTasks
        })
    }
  return (
    <TouchableOpacity onPress={deleteTask} style={styles.container}>
      <View style={styles.left}>
        <View style={styles.square} />
        <Text style={styles.text}>{taskText}</Text>
      </View>
      <View style={styles.right} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,

    padding: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth:'85%'
  },
  square: {
    width: 24,
    height: 24,

    borderRadius: 5,
    backgroundColor: "rgba(85, 188, 246, 0.4)",

    marginRight: 15,
  },
  text: {
    fontSize: 14,
  },
  right: {
    width: 12,
    height: 12,

    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});