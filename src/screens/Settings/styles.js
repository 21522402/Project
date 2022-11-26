import {StyleSheet} from 'react-native'
import CUSTOM_COLOR from '../../constants/colors'
import size from '../../constants/responsive'
import FONT_Family from '../../constants/fonts'
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
    imgAvatarContainer: {
        marginTop: 36,
    },
    profileMenu: {
        marginTop: 16,
    },
    MenuItem: {
        width: 343,
        height: 80,
        borderWidth: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderColor: CUSTOM_COLOR.LightGray,
    },
    textItem: {
        width: 311,
        height: 32,
        lineHeight: 32,
        fontSize: 24,
        textAlign: 'center',
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_Family.Medium,
    },
    bottomText: {
        marginTop: 16,
        fontSize: 14,
        lineHeight:16,
    },
    titleInfo: {
        fontSize: 20,
        height: 26,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_Family.Bold,
        alignItems: 'center',
    },
    container2: {
        width: 343,
        height: 82,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    containerInfo: {
        flexDirection: 'row',
        height: 66,
        alignItems: 'center',
        marginLeft: 16,
    },
    titleItem:{
        fontSize: 20,
        lineHeight: 26,
        height: 26,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_Family.Bold,
        marginLeft: 12,
    },
    arrowContainer: {
        marginRight: 16,
    }
})

export default styles