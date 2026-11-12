import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { BlurView } from 'expo-blur';
import { Platform, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createNativeBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => (
            <View style={{ flex: 1, backgroundColor: '#18181b' }} />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: Platform.select({
              ios: { type: 'sfSymbol', name: 'house.fill' },
              default: { type: 'image', source: require('./assets/icon.png') },
            }),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: Platform.select({
              ios: { type: 'sfSymbol', name: 'person.crop.circle' },
              default: { type: 'image', source: require('./assets/icon.png') },
            }),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}