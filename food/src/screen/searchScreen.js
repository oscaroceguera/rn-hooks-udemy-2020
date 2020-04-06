import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'
import ResultsList from '../components/ResultList'

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMesage] = useResults();
  console.log("SearchScreen -> results", results)

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price
    })
  }
  
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMesage ? <Text>{errorMesage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Big Pricier" />
      <ResultsList results={filterResultsByPrice("$$")} title="Big Spender" />
    </View>
  );
}

const styles = StyleSheet.create({})

export default SearchScreen;