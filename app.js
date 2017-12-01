import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  const {
    container,
    title,
    button,
    buttonText,
    mainContent
  } = styles

  return (
    <View style={container}>
      <Text style={title}>Redux Async Playground</Text>
      <TouchableHighlight
        style={button}
        onPress={() => props.fetchData()}>
        <Text style={buttonText}>Load Super Heroes</Text>
      </TouchableHighlight>
      <View style={mainContent}>
        {
          props.appData.isFetching
          &&
          <Text>Loading...</Text>
        }
        {
          props.appData.data.length
          ? (
            props.appData.data.map((hero, i) =>
              <View key={i}>
                <Text>Name: {hero.name}</Text>
                <Text>Age: {hero.age}</Text>
              </View>
            )
          )
          : null
        }
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    height: 48,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1094ee'
  },
  buttonText: {
    color: '#fff'
  },
  mainContent: {
    margin: 20
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
