import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const Header = () => {
  return (
    <View>
    <View>
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
        alignItems:"center",
        paddingTop:40,
    justifyContent:"space-between",   
 },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
 },
 iconCont:{
    flexDirection:"row",
 },
 icon:{
    marginLeft:15
 }
})