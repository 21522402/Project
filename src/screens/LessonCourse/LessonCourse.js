import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { IMG_Introduce_1 } from '../../assets/images'
import { PlayIcon } from '../../assets/icon'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import LessonItem from '../../components/LessonItem'
import LessonData from '../../datas/LessonData/LessonData'
import Setting from '../../screens/Settings/Setting'
import size from '../../constants/responsive'

export default function ({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', height: size.devicesHeight}}>
        <Header header="HTML" onClicked={() => {navigation.goBack()}}/>
        <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
                {/* Introduce lesson */}
                <></>
                <TouchableOpacity>
                    <View style={styles.introduceLesson}>
                        <View style={styles.imagePlay}>
                            <Image source={IMG_Introduce_1}/>
                            <View style={styles.playContainer}>
                                <Image source={PlayIcon}/>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleIntroduce}>HTML</Text>
                            <Text style={styles.infoIntroduce}>Advanced web applications</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <></>

                {/* Leson Icon */}
                <></>
                <View style={[styles.lessonContainer, {height: 250}]}>
                    <FlatList 
                        data={LessonData} 
                        renderItem={({item}) => 
                            <TouchableOpacity onPress={() => navigation.navigate('LearningScreen', item)}>
                                <LessonItem 
                                    imgSource={item.image}
                                    courseName={item.lessonName}
                                    percentage={item.percentage}
                                />       
                            </TouchableOpacity>
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </View> 
                <></>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{},
    introduceLesson:{
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        borderRadius: 8,
        marginTop: 20,
    },
    imagePlay:{
        backgroundColor: CUSTOM_COLOR.LightYellow,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    playContainer:{
        margin: 8,
        alignItems: 'flex-end',
    },
    textContainer: {
        marginTop: 8,
        marginBottom: 8,
    },
    titleIntroduce:{
        fontSize: 24,
        lineHeight: 32,
        Height: 32,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Bold,
        marginBottom: 8,
        marginTop: 16,
        marginLeft: 16,
    },
    infoIntroduce:{
        fontSize: 16,
        lineHeight: 18,
        Height: 18,
        color: CUSTOM_COLOR.Nickel,
        fontFamily: FONT_FAMILY.Bold,
        marginLeft: 16,
        marginBottom: 16,
    },
    lessonContainer: {
        marginTop: 16
    }

})