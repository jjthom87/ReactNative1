/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Weekday from './Weekday.js';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class JaredsProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the Week:
        </Text>
       {this.days()}
      </View>
    )
  }
  days(){
    return DAYS.map(function(day, index){
      return <Weekday day={day} key={index}/>
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JaredsProject', () => JaredsProject);
