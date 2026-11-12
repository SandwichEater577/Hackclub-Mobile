import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './../components/Button';

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-zinc-900">
            <View className="flex-1 items-center justify-center gap-4 px-6">
                <Text className="text-3xl font-bold text-white">Expo + NativeWind</Text>
                <Text className="text-center text-zinc-400">
                    Edit src/screens/HomeScreen.js and save to reload
                </Text>
                <Button title={`count is ${count}`} onPress={() => setCount(count + 1)} />
            </View>
        </SafeAreaView>
    );
}