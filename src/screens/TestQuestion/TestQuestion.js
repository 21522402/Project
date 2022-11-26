import { Text, StyleSheet, View, SafeAreaView, Image, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import size from '../../constants/responsive'
import Header from '../../components/Header'
import AnswerItem from '../../components/AnswerItem/AnswerItem'
import Button from '../../components/Button/NextButton';
import CUSTOM_COLOR from '../../constants/colors'
import FONT_FAMILY from '../../constants/fonts'
import TestData from '../../datas/TestData/TestData'
import { IMG_Result } from '../../assets/images'

const TestQuestion = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const TestDataRef = useRef(null);
    const textButton = () => {
        if(currentIndex === TestData.length - 1)
            return "Submit";
        return "Next";
    }

    const scrollTo = () => {
        if(currentIndex < TestData.length - 1){
            TestDataRef.current.scrollToIndex({index: currentIndex + 1});
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: '#FFF', height: size.devicesHeight}}>
            <Header header="" onClicked={() => {navigation.goBack()}}/>
            <View style={{alignSelf: 'center', width : 343}}>
                <FlatList
                    data={TestData}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.testViewContainer}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.counterQuestion}>{item.id} of {TestData.length}</Text>
                                    <Text style={styles.questionText}>{item.question}</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <View style={styles.imgContainer}>
                                        <Image style={styles.imgInfo} source={item.image} />
                                    </View>
                                    <View style={styles.answerItems}>
                                        <AnswerItem data={item.answer}/>
                                    </View>
                                </View>
                            </View>
                    )}}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset:{x:scrollX}}}], {
                        useNativeDriver: false,
                    })}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={TestDataRef}
                    />
            </View>
            <Text>{currentIndex}</Text>
            <View style={{alignSelf: 'center'}}>    
                <Button label={textButton()} 
                        scrollTo={
                            (currentIndex===TestData.length - 1) ?
                                () => {navigation.navigate('ResultScreen', {title: "Results",
                                                                            image: IMG_Result,
                                                                            titleContent: "Congratulations!",
                                                                            bodyContent: "Congratulations for getting all the answers correct!",
                                                                            isButton: false
                                                                            })} : scrollTo
                        }
                />
            </View>
        </SafeAreaView>
    )
}

export default TestQuestion;

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 32,
        alignItems: 'center',
    },
    counterQuestion: {
        height: 26,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        color: CUSTOM_COLOR.RegularGray,
        fontFamily: FONT_FAMILY.Medium,
        marginBottom: 8,
    },
    questionText: {
        //height: 32,
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        width: 343,
        color: CUSTOM_COLOR.BlackOlive,
        fontFamily: FONT_FAMILY.Black,
        marginBottom: 8,
    },
    answerView: {
        marginTop: 16,
    },
    imgContainer: {
        backgroundColor: CUSTOM_COLOR.LightX2Orange,
        height: 191,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.LightGray,
    },
    imgInfo: {
        marginTop: 8,
        marginBottom: 8,
    },
    answerItems: {
        marginTop: 16,
        marginBottom: 61,
    },
    testViewContainer: {
        alignSelf: 'center',
    }
})