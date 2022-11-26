import {StyleSheet} from 'react-native'
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import size from '../../constants/responsive'

const styles = StyleSheet.create({
    container: {
        width: size.devicesWidth,
        alignItems: 'center',
        marginTop: 19,
    },
    headerScreen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 343,
    },
    textHeaderContainer: {
       
    },
    textHeaderTop: {
        height: 26,
        width: 271,
        fontSize: 16,
        lineHeight: 26,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Regular,
    },
    textHeaderBeneath: {
        height: 42,
        width: 271,
        fontSize: 32,
        lineHeight: 42,
        color: '#333333',
        fontFamily: FONT_FAMILY.Bold,
    },
    notiIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 48,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Nickel,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSearch: {
        flexDirection: 'row',
        width: 343,
        height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Nickel,
    },
    textSearch: {
        width: 271,
        height: 21,
        marginLeft: 16,
        lineHeight: 21,
        fontSize: 14,
        fontFamily: FONT_FAMILY.Medium,
        padding: 0,
        marginTop: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: CUSTOM_COLOR.Nickel,
    },
    searchIconContainer: {
        marginRight: 16,
    },
    categoryContainer:{
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
        width: 300,
    },
    tagList: {
        width: 25,
        alignSelf: 'flex-start'
    },
    titleCategory:{
        fontSize: 14,
        lineHeight: 21,
        height: 21,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Medium,
    },
});

export default styles;