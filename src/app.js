import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      //
    };
  }

  componentWillMount() {
    //
  }

  render(){
    return(
      <View>
        <Text>
          React Native Boilerplate by <b>Eyk Rehbein</b>
        </Text>
      </View>
    )
  }
}