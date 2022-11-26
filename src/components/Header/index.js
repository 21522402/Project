import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {BackIcon} from '../../assets/icon/index'
import React, { Component } from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import size from '../../constants/responsive'
import FONT_Family from '../../constants/fonts'

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.backTouch} onPress={this.props.onClicked}>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.titleText}>{this.props.header}</Text>
        </View>
     </View>
    )
  }
}
const styles = StyleSheet.create({
    backIconContainer:{
        position: 'absolute',
        top: 11.67,
        left: 16,
        borderRadius: 40,
        borderWidth: 1,
        width: 40,
        height: 40,
        borderColor: CUSTOM_COLOR.LightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
       alignItems: 'center',
    },
    titleText: {
        wudth: 341,
        height: 32,
        marginTop: size.reSizeHeight(15),
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 24,
        lineHeight: 32,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_Family.Bold,
    },
})