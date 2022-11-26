import {StyleSheet} from 'react-native';
import size from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: size.reSizeHeight(63),
        alignItems: 'center',
    },
    backIcon:{
    },
    backIconContainer:{
        position: 'absolute',
        top: 27,
        left: 15,
        borderRadius: 48,
        borderWidth: 1,
        width: 48,
        height: 48,
        borderColor: CUSTOM_COLOR.LightGray,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imgContainer:{
        width: 343,
    },
    image:{
        width: '100%',
    },
    title:{
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 24,
        lineHeight: 32,
        width: 341,
        textAlign: 'center',
        marginTop: 16,
    },
    infoText:{
        color: CUSTOM_COLOR.Nickel,
        fontSize: 14,
        LineHeight: 21,
        width: 341,
        textAlign: 'center',
        marginTop: 8,
        fontFamily: FONT_FAMILY.Regular,

    },
    iconContainer:{
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 16,
    },
    LoginInput:{
        marginBottom: 16,
        marginTop: 16,
    },
    textForgotPass:{

    },
    textPassword:{
        color: CUSTOM_COLOR.Nickel,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 16,
    },
    buttonLogin:{
        
    },
    textForgotPass:{
        
    },
    textSignup: {
        color: CUSTOM_COLOR.Nickel, 
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 14,
        lineHeight: 16,
        marginTop: 16,
    }
});

export default styles;