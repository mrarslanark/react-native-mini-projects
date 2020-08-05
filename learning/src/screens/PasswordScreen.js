import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PasswordScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <View style={styles.root}>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            { password.length < 6
                ? <Text style={styles.text}>Password must be longer than 5 character</Text>
                : null }
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

export default PasswordScreen;
