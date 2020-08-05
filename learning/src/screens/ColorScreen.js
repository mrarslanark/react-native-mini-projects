import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColor] = useState([])
    console.log(colors)

    return <View style={styles.root}>
        <Button title="Add a Color" onPress={() => {
            setColor([...colors, randomRgb()])
        }} />
        
        <FlatList
            data={colors}
            keyExtractor={item => item}
            renderItem={({ item }) => {
                return <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: item
                }} />
            }}/>
    </View>
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    root: {
        margin: 18
    }
});

export default ColorScreen;