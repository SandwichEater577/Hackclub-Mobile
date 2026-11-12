import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-screens/experimental';

export default function HomeScreen() {
    return (
        <SafeAreaView edges={{ bottom: true }} style={{ flex: 1, backgroundColor: '#18181b', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Home</Text>
        </SafeAreaView>
    );
}