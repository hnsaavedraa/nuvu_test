import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


function InvestCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.value_cardStack}>
        <LinearGradient colors={['rgba(44, 82, 216, 0)', 'rgba(44, 82, 216, 0.4)']} style={styles.value_card}>
          <Text style={styles.value_card_tittle}>Eres{"\n"}estratega</Text>
          <Text style={styles.value_card_text}>Tu saldo</Text>
          <Text style={styles.value_card_amount}>$1.570.000</Text>
        </LinearGradient>
        <Image
          source={require("../assets/images/invest_card.png")}
          resizeMode="contain"
          style={styles.image_invest_card}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  value_card: {
    top: 31,
    left: 0,
    height: 230,
    position: "absolute",
    backgroundColor: "#54D1ED",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    right: 0
  },
  value_card_tittle: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 50,
    fontSize: 18,
    width: 112,
    marginTop: 29,
    marginLeft: 26,
    fontWeight: "600"
  },
  value_card_text: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 56,
    marginTop: 60,
    marginLeft: 21,
    fontWeight: "600"
  },
  value_card_amount: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    marginTop: 1,
    marginLeft: 17,
    fontWeight: "600"
  },
  image_invest_card: {
    top: 0,
    left: 147,
    width: 170,
    height: 180,
    position: "absolute"
  },
  value_cardStack: {
    height: 261
  }
});

export default InvestCard;
