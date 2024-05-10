import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
