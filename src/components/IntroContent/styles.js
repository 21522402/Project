import React from 'react';
import { StyleSheet } from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import size from '../../constants/responsive';


const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
    },
    imgContainer: {
        width: size.devicesWidth,
        height: 290,
    },
    imageContent: {
        width: '100%',
        height: '100%',
    },
    titleContent: {
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
        width: size.devicesWidth,
        height: 72,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 16,
        //display: 'flex',
        verticalAlign: 'middle',
    },
    bodyContent: {
        color: CUSTOM_COLOR.Nickel,
        marginTop: 8,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: FONT_FAMILY.Light,
    },
})

export default styles;