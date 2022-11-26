import React from 'react';
import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: 210,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 264,
    },
    textContainer: {
        width: 341,
        height: 46,
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 40,
        lineHeight: 46,
        marginTop: 16,
        fontFamily: FONT_FAMILY.Black,
        color: CUSTOM_COLOR.Black,
    }
});
export default styles;