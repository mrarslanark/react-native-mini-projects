import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective" />
                <View style={styles.divider}/>
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier" />
                <View style={styles.divider}/>
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="Big Spender" />
                <View style={styles.divider}/>
                <ResultsList
                    results={filterResultsByPrice('$$$$')}
                    title="Royal Spender"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#d3d1d1',
        marginBottom: 10,
        marginHorizontal: 15,
        height: 1
    },
    background: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default SearchScreen;