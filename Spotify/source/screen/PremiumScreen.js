import { View, Text, StyleSheet,ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'
import Feather from "@expo/vector-icons/Feather";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Button } from 'react-native'

const PremiumScreen = () => {
  return (
    <ScrollView style={styles.sc1}>
      <View>
      <Image source={require("../albumcover2/4.jpg")} style={styles.image}></Image>
      </View>
      
    <View style={{backgroundColor:'black', height:1600,}}>
    
    <Text style={styles.t1}>
        Try Premium free for 1 month
    </Text>
    <View style={styles.veiw3}>
    <Text style={styles.text}>Get Premium</Text>
    </View>
    <Text style={styles.t2}>
     Only USD 4.99/month after.Offer only users who are new to Premium.Terms and conditions only
    </Text>

    <View style={styles.v1}>
      <Text style={{color:'white', fontSize:20, fontWeight:"normal",marginLeft:20, marginTop:10,}}>Why join Premium?</Text>
      
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Download to listen offline without wifi</Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>ad-Free music listening </Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>2x higher sound quality than our free plan </Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Play song in any order, with unlimited skips </Text>
      </Feather>
      <Feather name='check' size={20} color={'green'} style={styles.icon}>
      <Text style={{color:'white', fontSize:15, fontWeight:400, marginLeft:5}}>Cancel monthly plans online anytime</Text>
      </Feather>
    </View>

    <View style={styles.veiwt}>
        <Text style={{color:'white',fontSize:17,marginTop:25,}}>Spotify Free</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:90, marginTop:30,}}>CURRENT PLAN</Text>
      </View>
    

    <Text style={styles.t3}>
      Spotify supports independent artists
    </Text>
    <Text style={styles.t4}>
      From fan-powered royalties to our audince-building artists plans, your subdcription helps support the spotify global community.
    </Text>
    <ImageBackground source={require("../albumCover3/joji.jpg")} style={styles.img2}>
    
    <Text style={{color:'white', fontSize:18, fontWeight:600, marginLeft:200, marginTop:50,}}>
      "It's such a simple idea. Your monthly fees get split up between the songs you actually listen to"
    </Text>
    <Text style={{color:'white', fontSize:18, fontWeight:600, marginLeft:200, marginTop:10,}}>
      --RAC, musician and producer
    </Text>
   
    </ImageBackground>
    
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
    height:350,
    backgroundColor:'rgba(51,51,51,0.9)',
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
    fontSize:28,
    fontWeight:700,
    marginTop:10,
    marginHorizontal:20,
    fontWeight:"normal"

  },
  t2:{
    color:'gray',
    fontSize:10,
    fontWeight:"normal",
    marginTop:10,
    marginHorizontal:20
  },
  veiw3: {
    marginLeft:20,
    flexDirection: "row",
    backgroundColor:"black",
    alignItems: "center",
    width: 350,
    height: 80,
    backgroundColor: "white",
    borderWidth: 10,
    borderRadius: 100,
    justifyContent:"center"
},
text:{
  color: "black",
  fontSize: 20,
  fontWeight: "bold",
},
veiwt:{
  flexDirection: "row",
  backgroundColor:"rgba(51,51,51,0.9)",
  width: 350,
  height: 80,
  marginTop:60,
  marginLeft:30,
  borderRadius:10,
  justifyContent:"space-evenly"
  
},
image:{
  width:'100%',
  height:300,
  marginTop:20,
},
})