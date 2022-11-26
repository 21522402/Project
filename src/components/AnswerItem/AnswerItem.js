import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native'
import React,{useState} from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'

const titleList = [
    {
        id: 1,
        title: "<h5>",
    },
    {
        id: 2,
        title: '<p>',
    },
    {
        id: 3,
        title: '<h1>',
    }
]


const HeaderNavigation = ({data}) => {
    const [clickedId, setClickedId] = useState(-1);

    const handleClicked = (index) => {
        setClickedId(index);
    };
    return (
        <View style={styles.container}>
        {
           data.map((element, index) => {
                return (
                    <TouchableOpacity 
                        onPress={
                            () => {
                               (index === clickedId) ? handleClicked(-1) : handleClicked(index)}
                        }
                        activeOpacity={0.9}
                    >
                            <View style={[styles.button, 
                                (index === clickedId) ? 
                                    {
                                        backgroundColor: CUSTOM_COLOR.LightX2Orange,
                                        borderColor: CUSTOM_COLOR.LightOrange,
                                    }:
                                    {
                                        backgroundColor: CUSTOM_COLOR.White,
                                        borderColor: CUSTOM_COLOR.LightGray,
                                    }
                            ]}>
                                <Text style={styles.text}>
                                    {
                                        (index === 0)? `A.   ${element.A}`:
                                        (index === 1)? `B.   ${element.B}`:
                                        (index === 2)? `C.   ${element.C}`: null
                                    }
                                </Text>
                            </View>
                    </TouchableOpacity>
                )
            })
        }
    </View>
    )
};

export default HeaderNavigation;


const styles = StyleSheet.create({
    container: {
        width: 343,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        width: 343,
        backgroundColor: CUSTOM_COLOR.White,
        height: 58,
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        paddingLeft: 24,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        fontFamily: FONT_FAMILY.Regular,
        color: CUSTOM_COLOR.BlackOlive,
        opacity: 0.8,
    },
    textActive: {
        color: CUSTOM_COLOR.BlackOlive,
    }
})