import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'
import size from '../../constants/responsive'
import Header from '../../components/Header'
import FONT_FAMILY from '../../constants/fonts'
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CUSTOM_COLOR from '../../constants/colors'

const LearningScreen = ({navigation, route}) => {
    const {id, lessonName} = route.params;
    return (
        <SafeAreaView style={{backgroundColor: '#FFF', height: size.devicesHeight}}>
            <Header header="HTML" onClicked={() => navigation.goBack()}/>
            <View style={{alignItems: 'center'}}>
                <View style={styles.titleCourseContainer}>
                    <Text style={styles.courseTitle}>
                        {lessonName}
                    </Text>
                    <Text style={styles.indexCourses}>
                        {`${id + 1} of 11 lessons`} 
                    </Text>
                </View>
                <HeaderNavigation /> 
            </View> 
        </SafeAreaView>
    )
  }
export default LearningScreen;
const styles = StyleSheet.create({
    courseTitle: {
        marginTop: 36,
        width: 343,
        height: 32,
        fontSize: 24,
        lineHeight: 32,
        fontFamily: FONT_FAMILY.Bold,
        color: CUSTOM_COLOR.BlackOlive,
        textAlign: 'center',
    },
    indexCourses: {
        marginTop: 8,
        marginBottom: 8,
        width: 343,
        height: 32,
        fontSize: 14,
        lineHeight: 32,
        fontFamily: FONT_FAMILY.Light,
        color: CUSTOM_COLOR.RegularGray,
        textAlign: 'center',
    }
})