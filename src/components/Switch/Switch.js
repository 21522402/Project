import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import CUSTOM_COLOR from '../../constants/colors'

export default class Switch extends Component {
  constructor(props){
    super(props);
    this.state={
      value: true,
    };
  }

  switchValue = () => {
    this.setState({
      value: !this.state.value,
    });
}
  changeColor = () => {
    if(this.state.value === true)
      return CUSTOM_COLOR.LightGreen;
    return CUSTOM_COLOR.Nickel;
  }
  changePosition = () =>{
    if(this.state.value === true)
      return 12;
    return 0;
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.switchValue}
          activeOpacity={0.9}
        >
          <View style={[styles.rectangle, {
            backgroundColor: this.changeColor(),
          }]}>
            <View style={[styles.circle, {
            backgroundColor: this.changeColor(),
            left: this.changePosition(),
          }]}></View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rectangle: {
    width: 32,
    height: 8,
    borderRadius: 4.5,
    backgroundColor: CUSTOM_COLOR.LightGreen,
    justifyContent: 'center',
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: CUSTOM_COLOR.LightGreen,
    borderColor: CUSTOM_COLOR.Syllabub,
    position: 'absolute',
    left: 12,
  }
})