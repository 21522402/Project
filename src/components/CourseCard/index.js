import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HashTag from '../HashTag/index'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'

export default class CourseCard extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    changeColor = () => {
        return `${this.props.color}`;
    }

    render() {
    const that = this.props.color;
    return (
        <TouchableOpacity 
            onPress={this.props.onClicked}
            activeOpacity={0.5}
        >
            <View style={[styles.container]}>
                    <View style={[styles.imgContainer, {backgroundColor: this.props.color}]}>
                        <Image style={styles.imageDisplay} source={this.props.image} />
                        <View style={styles.costContainer}>
                            <HashTag tag={this.props.cost} margin={16} style={styles.textCost}/>
                        </View>
                        <View style={{height: 8}}></View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.textDuration}>{this.props.duration}</Text>
                        <Text style={styles.textTitle}>{this.props.title}</Text> 
                        <Text style={styles.textInfo}>{this.props.info}</Text> 
                    </View>
            </View> 
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 297,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Nickel,
        marginTop: 16,
    },
    imgContainer: {
        borderRadius: 8,
        width: 340,
    },
    imageDisplay: {
        marginTop: 16,
        marginBottom: 8,
    },
    costContainer: {
        alignSelf: 'flex-end',
        marginRight: 16,
    },
    contentContainer: {
        margin: 16,
    },
    textDuration: {
        width: 311,
        height: 18,
        marginBottom: 4,
        color: CUSTOM_COLOR.LightGreen,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: 12,
        lineHeight: 18,
    },
    textTitle: {
        width: 311,
        height: 32,
        fontSize: 24,
        lineHeight: 32,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
        marginBottom: 4,
    },
    textInfo: {
        height: 21,
        fontSize: 14,
        lineHeight: 21,
        color: '#3C3A36',
        fontFamily: FONT_FAMILY.Regular,
    }
})
