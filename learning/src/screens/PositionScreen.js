import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PositionScreen = ({ navigation}) => {
    return (
        <View style={styles.root}>
            <Text style={styles.textOne}>Child #1</Text>
            <Text style={styles.textTwo}>Child #2</Text>
            <Text style={styles.textThree}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    textOne: {
        borderWidth: 3,
        borderColor: 'red'
    },
    textTwo: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
        position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
    textThree: {
        borderWidth: 3,
        borderColor: 'red'
    },
});

export default PositionScreen;