import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import size from '../../constants/responsive';
import Header from '../../components/Header/index';
import CoursesData from '../../datas/CoursesData';
import CourseCard from '../../components/CourseCard'
const YourCourses = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', height: size.devicesHeight}}>
        <Header header="Your Courses" onClicked={() => navigation.goBack()}/>
        <View style={{alignItems: 'center'}}>
            <View style={styles.listCourseContainer}>
                <FlatList style={[styles.coursesList]}
                    data={CoursesData}
                    renderItem={({item}) =>
                        <CourseCard 
                            image={item.image}
                            cost={item.cost}
                            title={item.title}
                            info={item.info}
                            duration={item.time}
                            color={item.background}
                            onClicked={() => {
                                navigation.navigate('LessonCourse', item)
                            }}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default YourCourses;

const styles = StyleSheet.create({
    listCourseContainer: {
        marginTop: 20,
    },
})