import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = () => {
    const name = "Arslan Mushtaq"
    return (
        <View style={styles.rootStyle}>
            <Text style={styles.headingStyle}>Getting started with react native!</Text>
            <Text style={styles.subtitleStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    rootStyle: {
        margin: 10
    },
    headingStyle: {
        fontSize: 45
    },
    subtitleStyle: {
        fontSize: 20
    }

});

export default ComponentsScreen;