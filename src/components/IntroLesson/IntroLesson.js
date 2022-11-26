import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { IMG_IntroLesson_1 } from '../../assets/images'
import { PlayIcon } from '../../assets/icon'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'

export default class IntroLesson extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.playImageContainer}>
            <Image source={IMG_IntroLesson_1}/>
            <View style={styles.playIconContainer}>
                <Image style={styles.playIcon} source={PlayIcon}/>
            </View>
        </View>
        <View style={styles.introduceContainer}>
            <Text style={styles.titleText}>
                Introduction
            </Text>
            <Text style={styles.mainInfomation}>
            You can launch a new career in web develop-
ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, 
a lot of determination, and a teacher you trust.
Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    playIconContainer: {
        alignItems: 'flex-end',
    },
    playImageContainer: {
        backgroundColor: CUSTOM_COLOR.Lightx2Blue,
        borderRadius: 8,
        overflow: 'hidden',
    },
    playIcon: {
        marginRight: 8,
        marginBottom: 8,
    },
    introduceContainer: {
        marginTop: 24,
        width: 343,
    },
    titleText: {
        //width: 343,
        height: 26,
        lineHeight: 26,
        fontSize: 20,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold
    },
    mainInfomation: {
        fontSize: 14,
        lineHeight: 21,
        color: CUSTOM_COLOR.RegularGray,
        marginTop: 4,
    }
})