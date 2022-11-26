import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import { EmailIcon, NextIcon } from '../../assets/icon';
export default class SettingItem extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInfo}>
            <View style={styles.imgContainer}>
                <Image source={this.props.avatar}/>
            </View>
            <View style={styles.nameAndInfo}>
                <Text style={styles.titleItem}>
                    {this.props.title}
                </Text>
                <Text style={styles.infoItem}>
                    {this.props.info}
                </Text>
            </View>
        </View>
        <View style={styles.arrowContainer}>
            <Image source={NextIcon}/>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 82,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 16,
    },
    containerInfo: {
        flexDirection: 'row',
        height: 66,
        alignItems: 'center',
        marginLeft: 16,
    },
    nameAndInfo: {
        marginLeft: 12,
    },
    titleItem:{
        fontSize: 20,
        lineHeight: 26,
        height: 26,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
    },
    infoItem:{
        fontSize: 14,
        lineHeight: 21,
        height: 21,
        color: CUSTOM_COLOR.Nickel,
        fontFamily: FONT_FAMILY.Regular,
    },
    arrowContainer: {
        marginRight: 16,
    }
})