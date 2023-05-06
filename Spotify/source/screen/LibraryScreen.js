import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image,TextInput,onChangeNumber,onChangeText, text} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LibraryScreen = ({ navigation }) => {
  useEffect(() => {
      navigation.setOptions({
          headerShown: true
      })
  }, [])


  return (
<View>
  <View style={styles.veiw}>
  <MaterialCommunityIcons style={styles.icon} name="alpha-z-circle" size={45} color={'#66FF99'}/>
  <Text style={styles.text}>Your Library </Text>
  <MaterialCommunityIcons style={styles.icon1} name="magnify" size={35} color={'white'}/>
  <MaterialCommunityIcons style={styles.icon2} name="plus" size={35} color={'white'}/>

  
  <View>
  <Text style={styles.text}>Your Library </Text>
  <Text style={styles.text}>Your Library </Text>
  <Text style={styles.text}>Your Library </Text>
  </View>
    


  </View>



    <SafeAreaView>
      <ScrollView>

    
     <Image source={require("../albumCovers/billie.jpg")} style={{ height: 1600, width: 1600 }}></Image>


      </ScrollView>
    </SafeAreaView>


  </View>
  )

}
    export default LibraryScreen
    const styles = StyleSheet.create({
    veiw1: {     
        width: 190,     
        height: 100,          
        marginLeft: 10,     
         borderRadius:5,
         marginTop:15,
         
         },
    text: {
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          justifyContent: "flex-start",
    
      },
    veiw: {
      
             flexDirection: "row",
             backgroundColor:"black",
             justifyContent:"flex-start"
     },
    veiw2: {
      marginLeft: 10,     
       marginTop:15,
      color:"white",
        flexDirection:"row",
          alignItem:'stretch',
    },
    icon1:{
      justifyContent:"flex-end",
      marginStart:130
    },
    icon2:{
      marginStart:10
    }

        })