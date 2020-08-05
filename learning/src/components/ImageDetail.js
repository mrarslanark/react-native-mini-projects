import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View style={styles.rootStyle}>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    rootStyle: {
        margin: 10
    }
});

export default ImageDetail;