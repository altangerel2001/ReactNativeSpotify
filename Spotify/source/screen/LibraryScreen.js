import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image,TextInput,onChangeNumber,onChangeText, text} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const LibraryScreen = ({ navigation }) => {
  useEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
  }, [])


  return (
<View style={styles.tomveiw}>
  <View style={styles.veiw}>
  <MaterialCommunityIcons style={styles.icon} name="alpha-z-circle" size={45} color={'#66FF99'}/>
  <Text style={styles.text}>Your Library </Text>
  <MaterialCommunityIcons style={styles.icon1} name="magnify" size={35} color={'white'}/>
  <MaterialCommunityIcons style={styles.icon2} name="plus" size={35} color={'white'}/>

  </View>
  <View style={styles.jijigveiw}>
    <View style={styles.veiw3}>
  <Text style={styles.text1}>Playlist </Text>
  </View>
  <View style={styles.veiw3}>
  <Text style={styles.text1}>Album</Text>
  </View>
  <View style={styles.veiw3}>
  <Text style={styles.text1}>Artist</Text>
  </View>
  </View>



    <SafeAreaView>
      <ScrollView >
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji • mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>

        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>
        <View style={styles.veiw4}>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        <View style={styles.zurag2}>
        <Image source={require("../albumcover2/1.jpg")} style={{ height: 180, width: 180,  }}></Image>
        <Text style={styles.text4}>Joji mix</Text>
        <Text style={styles.text3}>Vande mix</Text>
        </View>
        </View>

        
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
             marginTop:50
     },
jijigveiw: {
      flexDirection: "row",
      backgroundColor:"black",
      marginTop:15,
      marginBottom:15,
},
veiw4: {
  flexDirection: "row",
  backgroundColor:"black",
  justifyContent:"space-evenly"
  
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
    },
text1: {
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
      marginStart:13,
    
     
  },
 veiw3: {
      
    flexDirection: "row",
    backgroundColor:"black",
    alignItems: "center",
    width: 100,
    height: 50,
    backgroundColor: "rgba(51,51,51,0.9)",
    borderWidth: 10,
    borderRadius: 100,
    justifyContent:"space-between"
},
tomveiw:{
  backgroundColor:'black',
  

},
text3:{
  color:"gray",
  marginTop:4,
  fontWeight:"800"
},
zurag2:{
  flex: 1,
  overflow:'hidden',
  minHeight:280,
  maxHeight:280,
  maxWidth:200,
  marginRight:20,
},
text4:{
  color:"white",
  marginTop:4,
  fontWeight:"800"

},
    

        })