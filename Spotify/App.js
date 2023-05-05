import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './source/screen/HomeScreen';
import SearchScreen from './source/screen/SearchScreen';
import LibraryScreen from './source/screen/LibraryScreen';
import PremiumScreen from './source/screen/PremiumScreen';
import { SafeAreaView,StyleSheet} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();
function App() {
 return (
 <NavigationContainer>
    <Tab.Navigator stylesinitialRouteName='Home'
      screenOptions={{
        tabBarStyle:{
          height:65,
          paddingTop:10,
          backgroundColor:"black",
          borderTopWidth:0,
        },
        tabBarLabelStyle:{
          marginBottom:5,
          paddingBottom:5,
          fontSize:10,
          fontWeight:'bold',
        },
        tabBarActiveTintColor:"white"
      }}  
      
      >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: ({color,size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30}/>
          )
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} 
      options={{
        tabBarIcon: ({color,size}) => (
          <MaterialCommunityIcons name="search-web" color={color} size={30}/>
        )
      }}/>
      <Tab.Screen name="Library" component={LibraryScreen} 
      options={{
        tabBarIcon: ({color,size}) => (
          <MaterialCommunityIcons name="home" color={color} size={30}/>
        )
      }}/>
      <Tab.Screen name="Premium" component={PremiumScreen} 
      options={{
        tabBarIcon: ({color,size}) => (
          <MaterialCommunityIcons name="home" color={color} size={30}/>
        )
      }}/>
    </Tab.Navigator>
 </NavigationContainer>
 );
}
export default App

