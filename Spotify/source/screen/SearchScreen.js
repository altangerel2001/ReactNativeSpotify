import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image,TextInput,onChangeNumber,onChangeText, text} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SearchScreen = ({ navigation }) => {
  useEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])

  return (
  
    <ScrollView style={styles.tomveiw}>
    
    <View style={styles.searchbar}>
    <View style={styles.searchveiw1}>
      <Text style={styles.text3}>Search</Text>
      <MaterialCommunityIcons style={styles.icon} name="camera-outline" size={30} color={"white"}/>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="What do you want to listening to?"
      />
    </View>

    <View style={styles.searchveiw2}>
      <Text style={styles.text3}>Browse all</Text>
      </View>

    <View style={styles.veiw}>
    
    <LinearGradient
      colors={['pink', 'green', 'orange']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Podcasts</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['red', 'pink', 'orange']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Made For You</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['red', 'yellow', 'green']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Live Event</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['black', 'blue', 'gray']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Pop</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['blue', 'pink', 'gray']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Hip-Hop</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['yellow', 'red', 'blue']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Latin</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['purple', 'pink', 'orange']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Trap</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['red', 'purple', 'orange']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Rock</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['orange', 'red', 'green']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Alternative Rock</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['blue', 'blue', 'red']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Dance</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['red', 'blue', 'red']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Emo-rap</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['purple', 'green', 'purple']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Rap</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['yellow', 'purple', 'purple']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Podcast</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['pink', 'red', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>AG's</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['gray', 'white', 'gray']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Hard-Rock</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['black', 'red', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>

     <LinearGradient
      colors={['white', 'red', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
 <LinearGradient
      colors={['black', 'white', 'red']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['pink', 'red', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'brown', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'orange', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'yellow', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'green', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'black', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'gray', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'pink', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'green', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['black', 'purple', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['pink', 'white', 'pink']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     <LinearGradient
      colors={['white', 'red', 'red']} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 2 }} 
      style={styles.veiw1} 
    >
    <View style={styles.veiw1}>           
          <Text style={styles.text2}>Soft-Rock</Text>   
     </View>
     </LinearGradient>
     
     



     
    
     </View>

    </ScrollView>
  
  )
}
export default SearchScreen

const styles = StyleSheet.create({
  veiw1: {     
    width: 190,     
    height: 100,          
    marginLeft: 10,     
     borderRadius:5,
     marginTop:15,
     
     },
     input:{
      height:50,
      margin:15,
      borderWidth:1,
      padding:10,
       borderColor:'white',
      backgroundColor:"white",
    
    },
     text2: {
      color: "white",
      fontSize: 17,
      fontWeight: "bold",
      justifyContent: "flex-start",

  },
  searchveiw1: {
      marginLeft: 10,     
       marginTop:15,
      color:"white",
        flexDirection:"row",
          alignItem:'stretch',
          justifyContent:"space-between"
      
      
},
searchveiw2: {
  marginLeft: 10,     
  color:"white"
},
veiw: {
   flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 0,
        alignItems: "center",
        justifyContent:"space-evenly",
        backgroundColor:"black",
},
searchbar:{
  flex:1,
  backgroundColor:"black",
  marginTop:50,
  

},
tomveiw:{

  backgroundColor:"black"
},
text3:{
  fontSize:25,
  fontStyle:"normal",
  fontWeight:"bold",
  color: "white",
  justifyContent:'flex-start',
 

},
icon:{
  marginLeft:10
  
},
 })