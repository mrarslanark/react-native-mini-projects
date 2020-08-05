import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Button
        title="Go to Components Demo"
        onPress={() => { navigation.navigate('Components') }}
      />
      <Button
        title="Go to List Demo"
        onPress={() => { navigation.navigate('List') }}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => { navigation.navigate('Image') }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => { navigation.navigate('Counter') }}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => { navigation.navigate('Color') }}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => { navigation.navigate('Square') }}
      />
      <Button
        title="Go to Text Input Demo"
        onPress={() => { navigation.navigate('TextInput') }}
      />
      <Button
        title="Go to Password Input Demo"
        onPress={() => { navigation.navigate('Password') }}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => { navigation.navigate('Box') }}
      />
      <Button
        title="Go to Flex Demo"
        onPress={() => { navigation.navigate('Flex') }}
      />
      <Button
        title="Go to Position Demo"
        onPress={() => { navigation.navigate('Position') }}
      />
      <Button
        title="Go to Layout Challenge"
        onPress={() => { navigation.navigate('Layout') }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  root: {
    margin: 18
  }
});

export default HomeScreen;