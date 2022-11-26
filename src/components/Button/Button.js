import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import size from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onClicked}>
        <View style={[styles.buttonContainer, props.styles]}>
            <Text style={[styles.textButton, props.styleText]}>{props.label}</Text>
        </View>
    </TouchableOpacity>
  )
};
export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 311,
        height: 56,
        backgroundColor: CUSTOM_COLOR.Orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    textButton: {
        fontSize: 16,
        lineHeight: 18,
        color: CUSTOM_COLOR.White,
        fontFamily: FONT_FAMILY.Bold
    }
})