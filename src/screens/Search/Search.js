import { Image, SafeAreaView, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import { BackIcon, SearchIcon } from '../../assets/icon'
import size from '../../constants/responsive'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import CoursesData from '../../datas/CoursesData'
import CourseCard from '../../components/CourseCard'

export default function Search({navigation}) {
    const [newData, setNewData] = useState(CoursesData);
    const searchName = (input) => {
        let data = CoursesData;
        let searchData = data.filter((item) => {
            return item.title.toLowerCase().includes(input.toLowerCase());
        })
        setNewData(searchData);
    }
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: size.devicesHeight, alignItems: 'center'}}>
        <View style={styles.searchContainerBack}>
            <TouchableOpacity style={styles.backTouch} onPress={() => navigation.goBack()}>
                <View style={styles.backIconContainer}>
                    <Image style={styles.backIcon} source={BackIcon}/>
                </View>
            </TouchableOpacity>
            <View style={styles.containerSearch}>
                <TextInput style={styles.textSearch} placeholder="Search course" onChangeText={(input) => {searchName(input)}}/>
                <View style={styles.searchIconContainer}>
                    <Image source={SearchIcon} />
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <FlatList style={[styles.coursesList]}
                data={newData}
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchContainerBack: {
        marginTop: 11.67,
        flexDirection: 'row',
        alignItems: 'center',
        width: 343,
    },
    backIconContainer:{
        borderRadius: 40,
        borderWidth: 1,
        width: 40,
        height: 40,
        borderColor: CUSTOM_COLOR.LightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
       alignItems: 'center',
    },
    containerSearch: {
        flexDirection: 'row',
        height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
        marginLeft: 8,
    },
    textSearch: {
        width: 215,
        height: 21,
        marginLeft: 16,
        lineHeight: 21,
        fontSize: 14,
        fontFamily: FONT_FAMILY.Medium,
        padding: 0,
        marginTop: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: CUSTOM_COLOR.Nickel,
    },
    searchIconContainer: {
        marginRight: 16,
        marginLeft: 16,
    },
})