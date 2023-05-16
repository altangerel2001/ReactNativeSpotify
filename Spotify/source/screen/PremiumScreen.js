import { View, Text, StyleSheet,ImageBackground, Image, ScrollView,onPressLearnMore } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Button } from 'react-native'

const PremiumScreen = () => {
  return (
    <ScrollView style={styles.sc1}>

	<View styles={styles.Button}>
	<Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
	</View>
	
    <View style={{backgroundColor:'black', height:1600,}}>
    <Text style={styles.t1}>
      Try Premium Free for 1 month
    </Text>
    <Text style={styles.t2}>
      Whatever you want to share your sound or enjoy ad-free listening, we have the right plan for you
    </Text>

    <View style={styles.v1}>
      <View style={styles.v2}><Text style={{color:'white', fontSize:13, fontWeight:700,}}>Why join Premium </Text></View>
      <Text style={{color:'white', fontSize:30, fontWeight:700,marginLeft:20, marginTop:10,}}>Next Pro</Text>
      <Text style={{color:'white', fontSize:20, fontWeight:700,marginLeft:20, marginTop:10,}}>$12 / month when billed yearly</Text>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Download to listen offline without wifi</Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>ad-free music listening</Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>2x higher sound quality than our free plan</Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Play songs in any order with unlimited skips</Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Cancel monthly plans online anytime</Text>
      </Feather>
    </View>
    

    <Text style={styles.t3}>
      Spotify Free
    </Text>
    <Text style={styles.t4}>
      From fan-powered royalties to our audince-building artists plans, your subdcription helps support the SoundCloud global community.
    </Text>
    <ImageBackground source={require("../albumCover3/doja.jpg")} style={styles.img2}>
    
    <Text style={{color:'white', fontSize:18, fontWeight:600, marginLeft:200, marginTop:50,}}>
      "It's such a simple idea. Your monthly fees get split up between the songs you actually listen to"
    </Text>
    <Text style={{color:'white', fontSize:18, fontWeight:600, marginLeft:200, marginTop:10,}}>
      --RAC, musician and producer
    </Text>
   
    </ImageBackground>
    <Image source={require("../albumCovers/igor tyler.jpg")} style={styles.img3}></Image>
    </View>
    </ScrollView>
  )
}

export default PremiumScreen
const styles = StyleSheet.create({
  img3:{
    width:170,
    height:300,
    position:'absolute',
    top:1300,
    left:10,
  },
  img2:{
    width:'100%',
    height:250,
    marginTop:20,
  },
  t3:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginLeft:20,
    marginTop:40,
  },
  t4:{
    color:'white',
    fontSize:15,
    fontWeight:'300',
    marginLeft:20,
    marginTop:10,
  },
  icon:{
    marginLeft:20,
    marginTop:22,
  },
  v2:{
    height:20,
    width:100,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginLeft:20,
  },
  v1:{
    width:350,
    height:600,
    backgroundColor:'rgba(51,51,51,0.7)',
    marginTop:20,
    marginLeft:30,
    borderRadius:10,
  },
  img1:{
    width:'100%',
    height:1050,
  },
  sc1:{
    backgroundColor:"black",
    
  },
  t1:{
    color:'white',
    fontSize:30,
    fontWeight:700,
    marginTop:180,
    marginHorizontal:20
  },
  t2:{
    color:'white',
    fontSize:15,
    fontWeight:300,
    marginTop:10,
    marginHorizontal:20
  },
})