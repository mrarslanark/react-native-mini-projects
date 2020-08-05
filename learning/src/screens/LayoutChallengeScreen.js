import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';

const LayoutChallengeScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.red} />
            <View style={styles.green} />
            <View style={styles.blue} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    red: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    },
    green: {
        backgroundColor: 'green',
        height: 100,
        width: 100,
        top: 100
    },
    blue: {
        backgroundColor: 'blue',
        height: 100,
        width: 100
    }
});

export default LayoutChallengeScreen;