import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <EvilIcons name="search" style={styles.icon}/>
            <TextInput
                placeholder="Search"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                returnKeyType="search"
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 8
    }
});

export default SearchBar;