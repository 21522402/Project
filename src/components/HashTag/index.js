import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'

export default class HashTag extends Component {
    constructor (props){
        super(props);
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.textContainer, {marginLeft: this.props.margin, marginRight: this.props.margin}]} >
           {this.props.tag}
        </Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: CUSTOM_COLOR.LightBlue,
        height: 24,
        justifyContent: 'center', 
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginLeft: 16,
    },
    textContainer: {
        color: '#F2F2F2',
        fontSize: 12,
        lineHeight: 24,
        fontFamily: FONT_FAMILY.Bold,
        verticalAlign: 'middle',
    }
})