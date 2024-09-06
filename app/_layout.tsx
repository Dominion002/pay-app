
import Home from "./Home"
import Index from "./index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function RootLayout() {
  return (
    <NavigationContainer  independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="index" component={Index}   options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
      
    </Stack.Navigator>
   
  </NavigationContainer>
  );
}
