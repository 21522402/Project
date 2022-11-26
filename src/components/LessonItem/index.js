import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import { IMG_Lesson_1 } from '../../assets/images'

export default class LessonItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={this.props.imgSource} />
                </View>
                <View style={styles.textInfoContainer}>
                    <Text style={styles.textInfo}>{this.props.courseName}</Text>
                    <View style={styles.percentageContainer}>
                        <View style={[styles.percentage, {width: this.props.percentage}]}>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 88,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        borderRadius: 8,
        paddingLeft: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        flexDirection: 'row',
        marginBottom: 16,
    },
    textInfoContainer: {
        marginLeft: 8,
    },
    textInfo: {
        fontSize: 20,
        lineHeight: 26,
        Height: 26,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
    },
    percentageContainer: {
        marginTop: 16,
        backgroundColor: CUSTOM_COLOR.LightYellow,
        width: 222,
        height: 11,
        borderRadius: 16,
    },
    percentage: {
        backgroundColor: CUSTOM_COLOR.LightXXBlue,
        width: 0,
        height: 11,
        borderRadius: 16,
        
    }
})