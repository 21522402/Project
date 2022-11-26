import { StyleSheet } from "react-native";
import size from "../../constants/responsive";
import FONT_FAMILY from "../../constants/fonts";
import CUSTOM_COLOR from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: size.reSizeHeight(188),
    },
    textContainer: {
        marginTop: size.reSizeHeight(33),
        position: 'absolute',
        left: size.reSizeWidth(330),
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: FONT_FAMILY.Bold,
        color: CUSTOM_COLOR.Nickel,
        paddingLeft: 24,
    }
})
export default styles;