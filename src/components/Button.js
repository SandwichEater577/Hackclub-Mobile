import { Pressable, Text } from 'react-native';

export default function Button({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            className="rounded-lg bg-emerald-500 px-6 py-3 active:bg-emerald-600"
        >
            <Text className="font-semibold text-zinc-900">{title}</Text>
        </Pressable>
    );
}