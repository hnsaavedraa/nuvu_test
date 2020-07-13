import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";
import { LinearGradient } from 'expo-linear-gradient';


function Menu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/vector_menu.png")}
        resizeMode="cover"
        style={styles.menu_vector}
      ></Image>
      <View style={styles.home_container_menu}>
        <Image
          source={require("../assets/images/home_icon_menu.png")}
          resizeMode="contain"
          style={styles.menu_icon}
        ></Image>
        <Text style={styles.menu_text}>Inicio</Text>
      </View>
      <View style={styles.history_container_menu}>
        <Image
          source={require("../assets/images/history_icon_menu.png")}
          resizeMode="contain"
          style={styles.menu_icon}
        ></Image>
        <Text style={styles.menu_text}>Historial</Text>
      </View>
      <View style={styles.profile_container_menu}>
        <Image
          source={require("../assets/images/profile_icon_menu.png")}
          resizeMode="contain"
          style={styles.menu_icon}
        ></Image>
        <Text style={styles.menu_text}>Mi Perfil</Text>
      </View>
      <View style={styles.more_container_menu}>
        <Image
          source={require("../assets/images/more_icon_menu.png")}
          resizeMode="contain"
          style={styles.menu_icon}
        ></Image>
        <Text style={styles.menu_text}>Mas</Text>
      </View>

      <LinearGradient colors={['rgba(44, 82, 216, 0)', 'rgba(44, 82, 216, 0.4)']} style={styles.invest_container_menu}>
        <Center>
          <Image
            source={require("../assets/images/add_icon_menu.png")}
            resizeMode="contain"
            style={styles.invest_icon}
          ></Image>
        </Center>
        
      </LinearGradient>
      <Text style={styles.ahorrar_text}>Ahorrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible"
  },
  menu_vector: {
    width: 327,
    height: 60,
    position: "absolute",
    top: 25,
    left: 0
  },
  more_container_menu: {
    top: 35,
    left: 273,
    width: 37,
    height: 41,
    position: "absolute"
  },
  menu_icon: {
    top: 0,
    left: 7,
    width: 24,
    height: 24,
    position: "absolute"
  },
  menu_text: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    width: 42,
    textAlign: "center",
    height: 14
  },
  ahorrar_text: {
    top: 62,
    left: 145,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(169,157,198,1)",
    fontSize: 10,
    width: 42,
    textAlign: "center",
    height: 14
  },
  profile_container_menu: {
    top: 35,
    left: 209,
    width: 37,
    height: 41,
    position: "absolute"
  },
  history_container_menu: {
    top: 35,
    left: 81,
    width: 37,
    height: 41,
    position: "absolute"
  },
  invest_container_menu: {
    top: 0,
    left: 140,
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: "#54D1ED",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100
  },
  invest_icon: {
    width: 30,
    height: 30,
    position: "absolute"
  },
  home_container_menu: {
    top: 35,
    left: 17,
    width: 37,
    height: 41,
    position: "absolute"
  },

});

export default Menu;
