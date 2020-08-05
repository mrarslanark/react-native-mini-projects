import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, ColorPropType } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TextScreen = () => {
    const [name, setName] = useState('')

    return (
        <View style={styles.root}>
            <Text>Enter your name</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="givenName"
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.text}>Your name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        margin: 18
    },
    input: {
        marginTop: 8,
        borderColor: '#c6c6c6',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5
    },
    text: {
        marginTop: 8
    }
});

export default TextScreen;
