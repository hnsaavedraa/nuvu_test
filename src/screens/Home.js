import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ScrollArea from "../components/ScrollArea";
import { Center } from "@builderx/utils";
import Menu from "../components/Menu";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scroll_container}>
        <ScrollArea style={styles.scrollArea}></ScrollArea>
      </View>
      <View style={styles.menu_container}>
        <Center horizontal>
          <Menu style={styles.menu}></Menu>
        </Center>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll_container: {
    top: 0,
    left: 0,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  scrollArea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  menu_container: {
    bottom: 54,
    left: 0,
    height: 85,
    position: "absolute",
    right: 0
  },
  menu: {
    position: "absolute",
    top: -1,
    height: 85,
    width: 327
  }
});

export default Home;
