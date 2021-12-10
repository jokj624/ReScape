import React, { useEffect, useState, useCallback } from 'react';
import {  StyleSheet, View, } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'; // 스플래시 화면
import { NavigationContainer } from '@react-navigation/native'; 
import Header from './src/Components/Header';
import MainNavigator from './src/Components/MainNavigator';
import { ReviewProvider } from './src/Components/ReviewContext';
import reviews from './src/Mockup/reviewMockUp';
import { IReview } from './src/Interfaces/IReview';

const App = () => {
  const [review, setReviewList] = useState<IReview[]>(reviews);

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    } catch (e) {
      console.log('에러 발생');
      console.warn(e);
    }
  });

  const setReview = useCallback((reviewList: IReview) => {
    return setReviewList((reviews) => {
      return [... reviews, reviewList];
    })
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeView}>
        <ReviewProvider review={review} setReview={setReview}>
          <View style={styles.headerView}>
            <Header />
          </View>
          <MainNavigator />
        </ReviewProvider>
      </SafeAreaView>
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  safeView: {   
    flex: 1,
    backgroundColor: "#ECF2FF",
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerView: {
    flex: 0.1,
  },
  tabView: {
    flex: 3,
  }
});

export default App;
