import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons';

import {    AppRegistry, 
            View, 
            Text,
            ScrollView, 
            Image, 
            StyleSheet, 
            ImageBackground, 
            Animated, Easing
        } from 'react-native';

        export default class HomePage extends React.Component {

          render() {
return(
    <View style={styles.container}> 

    <ScrollView>
        <View
        style={[styles.tbcViews, {top: 600}, {left: 25} ]}
        />
        <View
        style={[styles.tbcViews, {top: 950}, {left: 200} ]}
        />
        <View
        style={[styles.tbcViews, {top: 1200}, {left: 600} ]}
        />
        <View
        style={[styles.tbcViews, {top: 600}, {left: 700} ]}
        />
        <View
        style={[styles.tbcViews, {top: 1400}, {left: 250} ]}
        />
        <View
        style={[styles.tbcViews, {top: 950}, {left: 900} ]}
        />
        <View
        style={[styles.tbcViews, {top: 1500}, {left: 1000} ]}
        />
        <View
        style={[styles.tbcViews, {top: 1100}, {left: 1300} ]}
        />
        <View
        style={[styles.tbcViews, {top: 400}, {left: 1200} ]}
        />
         <View
        style={[styles.tbcViews, {top: 1650}, {left: 650} ]}
        />
        <View
        style={[styles.tbcViews, {top: 1750}, {left: 75} ]}
        />


        <Image style={{resizeMode: 'repeat', height:2000, width:1500}}
        source={require('../albumCovers/billie.jpg')}
        />


        </ScrollView>

         <Image
        style={styles.logo_title}
        source={require('../albumCovers/billie.jpg')} 
        />  
        <Text
        style={styles.mini_titles}>FUTURE</Text>
        <Text
        style={styles.mini_titles2}>PAST</Text>
        <Icon 
        style={styles.arrows}
        name="ios-arrow-up" size={20} />
         <Icon 
        style={styles.arrowdown}
        name="ios-arrow-down" size={20} />
        <Image
        style={styles.futureicon}
        source={require('../albumCovers/billie.jpg')} 
        />  
      </View>
);
};
        }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        width:  450,
        left: -25

    },
    logo_title: {
        position: 'absolute',
        alignItems: 'center',
        top:400,
        zIndex: 10,
        width: 450,
        height: 150,
      },
      mini_titles: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12,
        top: 350,

      },
      mini_titles2: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12,
        top: 550,

      },
      arrows: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12,
        top: 300,

      },
      arrowdown: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12,
        top: 600,

      },
      futureicon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 12,
        top: 85,
        height: 190,
        width: 190


      },

      tbcViews: {
        position: 'absolute',
        alignItems: 'center',
        zIndex: 10,
        width: 200,
        height: 200,
        borderWidth:2.5,
        borderStyle: 'dotted',
        borderColor:'rgb(27, 63, 143)',
        borderRadius: 10
      },

})
