import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

export default () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage != null ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    results={filterResultsByPrice('$')}
                    title='Cost Effective'
                />
                <ResultList
                    results={filterResultsByPrice('$$')}
                    title='Bit Pricer'
                />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title='Bit Spender'
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})
