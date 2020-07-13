import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import InvestCard from "./InvestCard";
import InvestSummary from "./InvestSummary";
import Goals from "./Goals";
import Portfolio from "./Portfolio";
import Media from "./Media";
import Blog from "./Blog";

function ScrollArea(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.scroll_elements}>
            <View style={styles.hola_title}>
              <View style={styles.container_row}>
                <Text style={styles.section_title}>Hola, Camila</Text>
                <Image
                  source={require("../assets/images/icon_notification.png")}
                  resizeMode="contain"
                  style={styles.tittle_icons}
                ></Image>
              </View>
            </View>
            <InvestCard style={styles.investCard}></InvestCard>
            <InvestSummary style={styles.invest_summary}></InvestSummary>
            <View style={styles.goals_title}>
              <View style={styles.container_row}>
                <Text style={styles.section_title}>Tus metas</Text>
                <Image
                  source={require("../assets/images/add_icon_goals.png")}
                  resizeMode="contain"
                  style={styles.tittle_icons}
                ></Image>
              </View>
            </View>
            <Goals style={styles.goals}></Goals>
            <View style={styles.portfolio_title}>
              <View style={styles.portfolio_stack}>
                <Text style={styles.section_title}>
                  Conoce tu portafolio
                </Text>
                <View style={styles.status_domicilio}>
                  <Text style={styles.text_status_domicilio}>Estratega</Text>
                </View>
              </View>
            </View>
            <Portfolio style={styles.portfolio}></Portfolio>
            <Text style={styles.media_title}>Los P*t@s del ahorro</Text>
            <Media style={styles.media}></Media>
            <View style={styles.counter}>
              <View style={styles.counter_elipse_active}></View>
              <View style={styles.counter_elipse_disable}></View>
              <View style={styles.counter_elipse_disable}></View>
            </View>
            <Blog style={styles.blog}></Blog>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollArea: {
    backgroundColor: "rgba(248,248,252,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 1970,
    overflow: "visible",
    alignSelf: "center"
  },
  scroll_elements: {
    width: 375,
    height: 1930
  },
  hola_title: {
    width: 328,
    height: 32,
    flexDirection: "row",
    marginTop: 49,
    alignSelf: "center"
  },
  section_title: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 18,
    width: 275,
    height: 25,
    fontWeight: "600"
  },
  container_row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
  },
  investCard: {
    height: 261,
    width: 328,
    marginTop: 8,
    marginLeft: 23
  },
  invest_summary: {
    height: 102,
    width: 327,
    marginTop: 19,
    marginLeft: 24
  },
  goals_title: {
    width: 328,
    height: 25,
    flexDirection: "row",
    marginTop: 41,
    alignSelf: "center"
  },
  tittle_icons: {
    width: 25,
    height: 25,
    marginLeft: 30,

  },
  goals: {
    height: 202,
    width: 327,
    marginTop: 19,
    marginLeft: 24
  },
  portfolio_title: {
    width: 327,
    height: 25,
    marginTop: 40,
    alignSelf: "center"
  },
  status_domicilio: {
    top: 2,
    left: 263,
    width: 64,
    height: 21,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(65,207,105,1)",
    borderRadius: 10,
    backgroundColor: "rgba(228,255,238,1)"
  },
  text_status_domicilio: {
    fontFamily: "open-sans-regular",
    color: "rgba(65,207,105,1)",
    width: 45,
    height: 15,
    fontSize: 10,
    marginTop: 3,
    marginLeft: 10,
    fontWeight: "600"
  },
  portfolio_stack: {
    width: 327,
    height: 25
  },
  portfolio: {
    height: 229,
    width: 327,
    marginTop: 23,
    marginLeft: 24
  },
  media_title: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    width: 327,
    height: 25,
    fontSize: 18,
    marginTop: 37,
    alignSelf: "center",
    fontWeight: "600"
  },
  media: {
    height: 290,
    width: 327,
    marginTop: 20,
    marginLeft: 24
  },
  counter: {
    width: 50,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 38
  },
  counter_elipse_active: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(84,209,237,1)",
    borderWidth: 0,
    borderColor: "rgba(84,209,237,1)",
    borderRadius: 100
  },
  counter_elipse_disable: {
    width: 10,
    height: 10,
    backgroundColor: "#D7C7FF",
    borderWidth: 0,
    borderColor: "rgba(84,209,237,1)",
    borderRadius: 100
  },

  blog: {
    height: 304,
    width: 327,
    marginTop: 19,
    marginLeft: 24
  }
});

export default ScrollArea;
