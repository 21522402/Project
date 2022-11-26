import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import IntroLesson from '../../components/IntroLesson/IntroLesson'
import QuizzyCard from '../../components/QuizzyCard/QuizzyCard'

const titleList = [
    {
        id: 1,
        title: "Lesson",
        viewableItems: <IntroLesson/>
    },
    {
        id: 2,
        title: 'Tests',
        viewableItems: <QuizzyCard/>
    },
    {
        id: 3,
        title: 'Discuss',
        viewableItems: <IntroLesson/>
    }
]


const HeaderNavigation = ({navigation, route}) => {
    const [clickedId, setClickedId] = useState(0);

    const handleClicked = (index) => {
        setClickedId(index);
    };
    return (
        <View style={styles.container}>
            <View style={styles.navContainer}> 
                {
                    titleList.map((element, index) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => handleClicked(index)}
                                activeOpacity={0.9}
                            >
                                    <View style={[styles.button]}>
                                        <Text style={[styles.text,
                                            (index === clickedId) ? {color: CUSTOM_COLOR.BlackOlive}: {color: CUSTOM_COLOR.RegularGray}
                                        ]}>
                                            {element.title}
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.contentContainer}>
                {
                    titleList.map((element, index) => {
                        return (
                            (index === clickedId) ? element.viewableItems : null
                        )
                    })
                }
            </View>
        </View>
    )
};

export default HeaderNavigation;


const styles = StyleSheet.create({
    container: {
        
    },
    navContainer: {
        width: 343,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: 16,
    },
    button: {
        width: 110,
        backgroundColor: CUSTOM_COLOR.Syllabub,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2,
    },
    text: {
        fontSize: 16,
        fontFamily: FONT_FAMILY.Medium,
        color: CUSTOM_COLOR.RegularGray,
    },
    textActive: {
        color: CUSTOM_COLOR.BlackOlive,
    }
})