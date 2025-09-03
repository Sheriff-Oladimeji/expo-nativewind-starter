import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';




export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Not Found</Text>

        <Link href="/">
          <Text className="text-xl font-bold text-blue-500">Go to Home</Text>
        </Link>
     </View>
    </>
  );
}

