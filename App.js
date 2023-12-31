import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from './screens';


const Stack = createNativeStackNavigator();
export default function App() {

  const [fontLoaded] = useFonts(
    {regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  
  }
  );
const onLayoutRootView = useCallback(async ()=>{
  if (fontLoaded){
    await Splashscreen.hideAsync();
    
  }
},[fontLoaded]);

if(!fontLoaded){
  return null;
}

  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name ='Onboarding' 
  component={Onboarding} 
  options={{hearderShown : true}} 
    
  />
</Stack.Navigator>

</NavigationContainer>   
  );
}

