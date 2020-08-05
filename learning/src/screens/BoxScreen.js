import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Box Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        borderWidth: 3,
        borderColor: 'black'
    },
    text: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;