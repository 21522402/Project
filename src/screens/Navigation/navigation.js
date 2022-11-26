import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import IntroScreen from '../IntroScreen/IntroScreen';
import MyTabs from '../../NavigatorScreen/Home';
import Product from '../../components/ProductDetail/Product';
import LearningScreen from '../LearningScreen/LearningScreen';
import YourCourses from '../YourCourse/YourCourses';
import LessonCourse from '../LessonCourse/LessonCourse';
import SplashScreen from '../SplashScreen/SplashScreen';
import TestQuestion from '../TestQuestion/TestQuestion';
import ResultScreen from '../ResultScreen/ResultScreen';
import SavedScreen from '../SavedScreen/SavedScreen';
import Search from '../Search/Search';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Product" component={Product}/>
      <Stack.Screen name="LearningScreen" component={LearningScreen}/>
      <Stack.Screen name="YourCourses" component={YourCourses}/> 
      <Stack.Screen name="LessonCourse" component={LessonCourse}/> 
      <Stack.Screen name="SplashScreen" component={SplashScreen}/> 
      <Stack.Screen name="IntroScreen" component={IntroScreen}/> 
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="HeaderNavigation" component={HeaderNavigation}/>
      <Stack.Screen name="TestQuestion" component={TestQuestion}/> 
      <Stack.Screen name="ResultScreen" component={ResultScreen}/> 
      <Stack.Screen name="SavedScreen" component={SavedScreen}/> 
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
