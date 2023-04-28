import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screen/Home';
import DetailScreen from './source/screen/Details';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
 </NavigationContainer>
 );
}
export default App