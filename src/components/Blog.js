import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Blog(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.home_preview_1}>
        <View style={styles.title_preview_stack}>
          <Text style={styles.title_preview}>10 gastos que debes evitar</Text>
          <View style={styles.text_preview_stack}>
            <Text style={styles.text_preview}>
              Aunque el 66% de los adultos recibió{"\n"}educación para el
              ahorro, apenas el 44%{"\n"}ahorra de manera formal.
            </Text>
            <Image
              source={require("../assets/images/preview_1.png")}
              resizeMode="contain"
              style={styles.image_preview}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.home_preview_2}>
        <View style={styles.title_preview_stack}>
          <Text style={styles.title_preview}>10 gastos que debes evitar</Text>
          <View style={styles.text_preview_stack}>
            <Text style={styles.text_preview}>
              Aunque el 66% de los adultos recibió{"\n"}educación para el
              ahorro, apenas el 44%{"\n"}ahorra de manera formal.
            </Text>
            <Image
              source={require("../assets/images/preview_2.png")}
              resizeMode="contain"
              style={styles.image_preview}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.home_preview_3}>
        <View style={styles.title_preview_stack}>
          <Text style={styles.title_preview}>10 gastos que debes evitar</Text>
          <View style={styles.text_preview_stack}>
            <Text style={styles.text_preview}>
              Aunque el 66% de los adultos recibió{"\n"}educación para el
              ahorro, apenas el 44%{"\n"}ahorra de manera formal.
            </Text>
            <Image
              source={require("../assets/images/preview_3.png")}
              resizeMode="contain"
              style={styles.image_preview}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.divider_blog_1}></View>
      <View style={styles.divider_blog_2}></View>
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
  home_preview_1: {
    width: 287,
    height: 68,
    marginTop: 21,
    marginLeft: 18
  },
  title_preview: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    width: 202,
    height: 21
  },
  text_preview: {
    top: 26,
    left: 0,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "rgba(129,118,153,1)",
    fontSize: 10,
    width: 222,
    height: 42
  },
  image_preview: {
    top: 0,
    left: 219,
    width: 68,
    height: 68,
    position: "absolute"
  },
  text_preview_stack: {
    top: 0,
    left: 0,
    width: 287,
    height: 68,
    position: "absolute"
  },
  title_preview_stack: {
    width: 287,
    height: 68
  },
  home_preview_2: {
    width: 287,
    height: 68,
    marginTop: 30,
    marginLeft: 18
  },
  home_preview_3: {
    width: 287,
    height: 68,
    marginTop: 29,
    marginLeft: 18
  },
  divider_blog_1: {
    width: 287,
    height: 2,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderStyle: "solid",
    marginTop: -82,
    marginLeft: 18
  },
  divider_blog_2: {
    width: 287,
    height: 2,
    borderWidth: 1,
    borderColor: "rgba(250,249,253,1)",
    borderStyle: "solid",
    marginTop: -100,
    marginLeft: 18
  }
});

export default Blog;
