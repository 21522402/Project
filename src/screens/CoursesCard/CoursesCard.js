import { Text, View, SafeAreaView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CourseCard from '../../components/CourseCard'
import {NotiIcon2, SearchIcon} from '../../assets/icon'
import HashTag from '../../components/HashTag'
import HashtagsData from '../../datas/HashtagsData'
import CoursesData from '../../datas/CoursesData'
export default function CoursesCard({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            {/* Header */}
            <></>
                <View style={styles.headerScreen}>
                    <View style={styles.textHeaderContainer}>
                        <Text style={styles.textHeaderTop}>
                            Hello,    
                        </Text>
                        <Text style={styles.textHeaderBeneath}>
                            Le Quang Nhan    
                        </Text>    
                    </View>
                    <View style={styles.notiIconContainer}>
                        <Image style={styles.notiStyle} source={NotiIcon2}/>
                    </View>
                </View>
            <></>
            {/* Search */}
            <></>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Search')}
                >
                    <View style={styles.containerSearch}>
                            <Text style={styles.textSearch}>Search course</Text> 
                            {/* <TextInput style={styles.textSearch} placeholder="Search course" /> */}
                        <View style={styles.searchIconContainer}>
                            <Image source={SearchIcon} />
                        </View>
                    </View>
                </TouchableOpacity>
            <></>
            {/* Category */}
            <></>
                <View style={styles.categoryContainer}>
                    <Text style={styles.titleCategory}>Category:</Text>
                    <FlatList style={styles.tagList}
                            data={HashtagsData}
                            renderItem={({item}) =>
                                <HashTag tag={item.tag} margin={11}/> 
                            }
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={true}
                    />
                </View>
            <></>

            {/* Courses List */}
            <></>
                <View style={[styles.coursesContainer, {height: 495}]}>
                    <FlatList style={[styles.coursesList, {height: 400}]}
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
                                        navigation.navigate('Product', item)
                                    }}
                                />
                            }
                            showsVerticalScrollIndicator={false}
                    />
                </View>
            <></>
        </View>
    </SafeAreaView>
  )
}
