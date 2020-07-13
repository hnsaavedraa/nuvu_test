import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function InvestSummary(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.divider_summary}></View>
      <View style={styles.inversion_frame_summary}>
        <View style={styles.stack_summary}>
          <Text style={styles.text_summary}>inversión</Text>
          <Text style={styles.value_summary}>$1.600.000</Text>
        </View>
      </View>
      <View style={styles.rendimiento_frame_summary}>
        <View style={styles.stack_summary}>
          <Text style={styles.text_summary}>Rendimiento</Text>
          <Text style={styles.value_summary}>-$30.000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20
  },
  divider_summary: {
    width: 287,
    height: 2,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    marginTop: 51,
    marginLeft: 20
  },
  inversion_frame_summary: {
    width: 285,
    height: 21,
    marginTop: -33,
    marginLeft: 21
  },
  rendimiento_frame_summary: {
    width: 285,
    height: 21,
    marginTop: 20,
    marginLeft: 21
  },
  text_summary: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    width: 186,
    height: 21
  },
  value_summary: {
    top: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    width: 132,
    height: 21,
    right: 0,
    textAlign: "right",
    fontWeight: "600"
  },
  stack_summary: {
    width: 285,
    height: 21
  },


});

export default InvestSummary;
