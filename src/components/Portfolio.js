import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Portfolio(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.portfolio_holding_donutRow}>
        <View style={styles.portfolio_holding_donut}>
          <ImageBackground
            source={require("../assets/images/chart_portfolio.png")}
            resizeMode="contain"
            style={styles.image_chart}
            imageStyle={styles.image_chart_portfolio}
          >
            <Image
              source={require("../assets/images/roboAdvisor.png")}
              resizeMode="contain"
              style={styles.image_roboadvisor}
            ></Image>
            <Text style={styles.roboAdvisor}>RoboAdvisor</Text>
            <Text style={styles.text_fondos_portfolio}>10 Fondos</Text>
          </ImageBackground>
        </View>
        <View style={styles.portfolio_frame_dataColumn}>
          <View style={styles.portfolio_frame_data}>
            <View style={styles.image_skandiaRow}>
              <Image
                source={require("../assets/images/skandia_logo.png")}
                resizeMode="contain"
                style={styles.image_skandia}
              ></Image>
              <View style={styles.tag_portfolio}>
                <Text style={styles.value_percentage}>15%</Text>
              </View>
            </View>
            <Text style={styles.text_type_portfolio}>FIC Old Mutual Efectivo</Text>
            <Text style={styles.value_portfolio_frame}>$240.000</Text>
            <View style={styles.tipoDeActivoStack}>
              <Text style={styles.text_activo_portfolio}>Tipo de activo</Text>
              <Text style={styles.text_renta_portfolio}>
                Renta fija{"\n"}Depósito a la fija
              </Text>
            </View>
          </View>
          <View style={styles.circle_nav_leftRow}>
            <View style={styles.circle_nav_left}>
              <Image
                source={require("../assets/images/left_arrow.png")}
                resizeMode="contain"
                style={styles.icons_nav}
              ></Image>
            </View>
            <View style={styles.circle_nav_right}>
              <Image
                source={require("../assets/images/right_arrow.png")}
                resizeMode="contain"
                style={styles.icons_nav}
              ></Image>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.text_description_portfolio}>
        Tu dinero se invierte de la forma más eficiente de acuerdo al{"\n"}
        perfil de riesgo asignado por nuestro RoboAdvisor.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20
  },
  portfolio_holding_donut: {
    width: 120,
    height: 120
  },
  image_chart: {
    width: 120,
    height: 120
  },
  image_chart_portfolio: {},
  image_roboadvisor: {
    width: 40,
    height: 40,
    marginTop: 25,
    marginLeft: 40
  },
  roboAdvisor: {
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    letterSpacing: -1,
    fontSize: 10,
    width: 64,
    textAlign: "center",
    height: 14,
    marginLeft: 28
  },
  text_fondos_portfolio: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    width: 64,
    height: 16,
    marginLeft: 28
  },
  portfolio_frame_data: {
    width: 147,
    height: 103
  },
  image_skandia: {
    width: 90,
    height: 15
  },
  tag_portfolio: {
    width: 36,
    height: 15,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 6,
    backgroundColor: "rgba(65,207,105,1)",
    marginLeft: 21
  },
  value_percentage: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    width: 20,
    marginTop: 1,
    marginLeft: 8,
    fontWeight: "600"
  },
  image_skandiaRow: {
    height: 15,
    flexDirection: "row"
  },
  text_type_portfolio: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    width: 147,
    height: 16,
    marginTop: 4
  },
  value_portfolio_frame: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 12,
    width: 147,
    height: 16,
    marginTop: 5,
    fontWeight: "600"
  },
  text_activo_portfolio: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(65,207,105,1)",
    fontSize: 10,
    width: 147,
    height: 16,
    fontWeight: "600"
  },
  text_renta_portfolio: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    width: 147,
    height: 28
  },
  tipoDeActivoStack: {
    width: 147,
    height: 42,
    marginTop: 5
  },
  circle_nav_left: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderRadius: 100
  },
  icons_nav: {
    width: 6,
    height: 10,
    marginTop: 9,
    marginLeft: 11
  },
  circle_nav_right: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderRadius: 100,
    marginLeft: 88
  },
  circle_nav_leftRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 8
  },
  portfolio_frame_dataColumn: {
    width: 148,
    marginLeft: 20
  },
  portfolio_holding_donutRow: {
    height: 141,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 19,
    marginRight: 20
  },
  text_description_portfolio: {
    fontFamily: "open-sans-regular",
    color: "rgba(88,80,107,1)",
    fontSize: 10,
    width: 287,
    height: 28,
    marginTop: 20,
    marginLeft: 19
  }
});

export default Portfolio;
