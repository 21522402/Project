import React from 'react';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import IntroScreen from './src/screens/IntroScreen/IntroScreen';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';
import Profile from './src/screens/Profile/Profile';
import Settings from './src/screens/Settings/Setting';
import CoursesCard from './src/screens/CoursesCard/CoursesCard';
import MyTabs from './src/NavigatorScreen/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductDetail from './src/components/ProductDetail/Product';
import CoursesData from './src/datas/CoursesData';
import LessonCourse from './src/screens/LessonCourse/LessonCourse';
import LearningScreen from './src/screens/LearningScreen/LearningScreen';
import MainNavigator from './src/screens/Navigation/navigation';
 
const App = () => {
  return (
    //<SplashScreen/>
    //<IntroScreen/>
    //<Login/>
    //<SignUp/>
    //<Profile/>
    //<Settings/>
    //<CoursesCard/>
    //<LessonCourse/>
    //<ProductDetail/>
    //<LearningScreen/>
    //<TestQuestion/>
     <MainNavigator/>
  )
};

export default App;
