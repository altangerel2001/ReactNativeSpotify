import { View, Text, SafeAreaView, ScrollView,StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown:true
        })
    },[])


  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient 
            colors={['#8a0a0a','#111','#111','#111','#111',]}
            start={{x:-0.1,y:0.2}}
            end={{x:1,y:1}}
            locations={[0.01,0.2,0.3,1,1,1]}
        >
        <ScrollView>
            <View style={styles.subContainer}>
            <Header/>
            <View style={styles.container}>
            <PlaylistCard/>
            </View>
            </View>
        </ScrollView>
        </LinearGradient>
    </SafeAreaView>
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    subContainer:{
        paddingRight:15,
        paddingLeft:15,
    }


})