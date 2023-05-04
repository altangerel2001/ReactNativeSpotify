import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

const PlaylistCard = ({img,title}) => {
  return (
    <View style={styles.container}>
      <Image source={require("../albumCovers/billie.jpg")} style={{height:60, width:60}}></Image>
      <Image source={require("../albumCovers/posty boi.jpg")} style={{height:60, width:60}}></Image>
      <Image source={require("../albumCovers/flower boy.jpg")} style={{height:60, width:60}}></Image>
      <Image source={require("../albumCovers/joji nectar.jpg")} style={{height:60, width:60}}></Image>
      <Image source={require("../albumCovers/nirvana in utero.jpg")} style={{height:60, width:60}}></Image>
      <Image source={require("../albumCovers/kendrick damn.jpg")} style={{height:60, width:60}}></Image>
    </View>
  )
}

export default PlaylistCard
const styles = StyleSheet.create({
    container:{
        flex:1,
        minWidth:170,
        maxWidth:210,
    
    }

})