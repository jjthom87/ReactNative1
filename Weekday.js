import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Weekday extends Component {
  render() {
  	const day = this.props.day
	    return (
	        <Text style={styles.day}>
	        	{day}
	        </Text>
	   )
  	}
}

const styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#000FFF'
	}
});

AppRegistry.registerComponent('Weekday', () => Weekday);