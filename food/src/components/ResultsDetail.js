import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        height: 100,
        width: 200,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        marginTop: 5
    }

});

export default ResultsDetail;