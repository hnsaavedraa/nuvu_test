import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Goals(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.goal_view_row}>
        <View style={styles.goal_view_1}>
          <Image
            source={require("../assets/images/canarias_goal.png")}
            resizeMode="contain"
            style={styles.image_goal}
          ></Image>
          <Text style={styles.name_goal}>Viaje a Islas{"\n"}Canarias</Text>
          <View style={styles.divider_goal}></View>
          <View style={styles.invest_donut}>
            <View style={styles.image_invest_donut_row}>
              <Image
                source={require("../assets/images/canarias_donut.png")}
                resizeMode="contain"
                style={styles.image_invest_donut}
              ></Image>
              <View style={styles.saving_goal_column}>
                <Text style={styles.saving_goal}>$1.630.000</Text>
                <Text style={styles.value_goal}>$8.000.000</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.goal_view_2}>
          <Image
            source={require("../assets/images/mcbook_goal.png")}
            resizeMode="contain"
            style={styles.image_goal}
          ></Image>
          <Text style={styles.name_goal}>Macbook Pro</Text>
          <View style={styles.divider_goal}></View>
          <View style={styles.invest_donut}>
            <View style={styles.image_invest_donut_row}>
              <Image
                source={require("../assets/images/mcbook_donut.png")}
                resizeMode="contain"
                style={styles.image_invest_donut}
              ></Image>
              <View style={styles.saving_goal_column}>
                <Text style={styles.saving_goal}>$0</Text>
                <Text style={styles.value_goal}>$7.000.000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  goal_view_1: {
    width: 158,
    height: 202,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,1)"
  },
  image_goal: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  name_goal: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    width: 118,
    height: 42,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "600",
    textAlignVertical: "center"
  },
  divider_goal: {
    width: 118,
    height: 2,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderStyle: "solid",
    marginTop: 9,
    marginLeft: 21
  },
  invest_donut: {
    width: 118,
    height: 50,
    marginTop: 9,
    marginLeft: 20
  },
  image_invest_donut: {
    width: 50,
    height: 50
  },
  saving_goal: {
    fontFamily: "open-sans-regular",
    color: "rgba(84,209,237,1)",
    fontSize: 12,
    width: 63,
    height: 16,
    fontWeight: "600"
  },
  value_goal: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    fontSize: 10,
    width: 63,
    height: 14
  },
  saving_goal_column: {
    width: 63,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 10
  },
  image_invest_donut_row: {
    height: 50,
    flexDirection: "row"
  },
  goal_view_2: {
    width: 158,
    height: 202,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    marginLeft: 11
  },
  goal_view_row: {
    height: 202,
    flexDirection: "row",
    flex: 1
  }
});

export default Goals;
