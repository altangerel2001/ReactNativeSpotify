import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Header = () => {
  return (
    <View>
      <View style={style.text}>
    <Text style={style.text}>Good afternoon</Text>
      </View>
    <View style={style.iconCont}>
        <MaterialCommunityIcons style={style.icon} name="bell-outline" size={30} color={"white"}/>
        <MaterialCommunityIcons style={style.icon} name="history" size={30} color={"white"}/>
        <MaterialCommunityIcons style={style.icon} name="cog-outline" size={30} color={"white"}/>
        
    </View>
   
    </View>
   

    
  )
}

export default Header
const style = StyleSheet.create({
    topCont:{
        flexDirection:"row",
    
 },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        justifyContent:"flex-start",
       
 },
 iconCont:{
  flexDirection:"row",
    alignItem:'stretch',
    justifyContent:"flex-end"
 },
 icon:{
    marginLeft:10
 }
})