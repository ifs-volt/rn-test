import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: getStatusBarHeight(),
  },
})

export default App = () => {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>
          Code the search input here {'\n\n'}
          Display the search results here {'\n\n'}
          Display the DetailView as an overlay when a movie has been selected
        </Text>
      </View>
    )
}
