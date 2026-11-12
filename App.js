import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import './src/styles/global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}