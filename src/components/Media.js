import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function Media(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.image_mediaStack}>
        <ImageBackground
          source={require("../assets/images/image_media.png")}
          resizeMode="contain"
          style={styles.image_media}
        >
          <Image
            source={require("../assets/images/play_icon.png")}
            resizeMode="contain"
            style={styles.play_icon}
          ></Image>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/vector_media.png")}
          resizeMode="contain"
          style={styles.image_vector}
        >
          <Text style={styles.subtitle_media}>Esto es AHORRO</Text>
          <Text style={styles.text_media}>
            Conoce como nuestro RoboAdvisor crea el mejor{"\n"}portafolio de
            inversión para ti
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image_media: {
    top: 0,
    width: 374,
    height: 221,
    position: "absolute",
    left: 0
  },
  play_icon: {
    width: 40,
    height: 40,
    marginTop: 87,
    marginLeft: 167
  },
  image_vector: {
    top: 168,
    left: 13,
    width: 348,
    height: 122,
    position: "absolute"
  },
  subtitle_media: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    width: 190,
    height: 33,
    marginTop: 40,
    marginLeft: 30,
    fontWeight: "600"
  },
  text_media: {
    fontFamily: "open-sans-regular",
    color: "rgba(255,255,255,1)",
    width: 287,
    height: 32,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 30
  },
  image_mediaStack: {
    width: 374,
    height: 290,
    marginLeft: -23
  }
});

export default Media;
