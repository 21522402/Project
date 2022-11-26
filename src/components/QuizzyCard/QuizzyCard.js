import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { IMG_Lesson_2 } from '../../assets/images'
import CUSTOM_COLOR from '../../constants/colors'
import Button from '../Button/Button'
import FONT_FAMILY from '../../constants/fonts'
import { useNavigation } from '@react-navigation/native';

const QuizzyCard = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image style={styles.imgTest} source={IMG_Lesson_2}/>
        <View style={styles.containerText}>
            <Text style={styles.counterQuizzy}>Quiz 1</Text>
            <Text style={styles.nameLesson}>Tags For Headers</Text>
            <Text style={styles.infoQuiz}>Let’s put your memory on this topic test. Solve tasks and check your knowledge.</Text>
        </View>
        <Button 
            label="Begin" 
            styleText={{color: CUSTOM_COLOR.BlackOlive, fontFamily: FONT_FAMILY.Regular}} 
            styles={{backgroundColor: CUSTOM_COLOR.White, 
                    borderWidth: 2,
                    borderColor: CUSTOM_COLOR.Orange ,
                    width: 295,
            }}
            onClicked={() => {navigation.navigate('TestQuestion')}}
        />
      </View>
    )
}

export default QuizzyCard;

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 463,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: CUSTOM_COLOR.LightGray,
        alignItems: 'center',
        marginTop: 24,
    },
    imgTest: {
        marginTop: 24,
    },
    containerText: {
        marginTop: 16,
        width: 295,
    },
    counterQuizzy: {
        fontSize: 14,
        lineHeight: 21,
        color: CUSTOM_COLOR.Orange,
        height: 21,
        marginBottom: 4,
    },
    nameLesson: {
        fontSize: 20,
        lineHeight: 26,
        color: CUSTOM_COLOR.BlackOlive, 
        fontFamily: FONT_FAMILY.Semibold,
        marginBottom: 8,
    },
    infoQuiz: {
        fontSize: 14,
        lineHeight: 21,
        color: CUSTOM_COLOR.LightGray, 
        fontFamily: FONT_FAMILY.Regular,
        marginBottom: 16,
        height: 63,
    }
})