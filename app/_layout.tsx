import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <Stack screenOptions={{
      headerTitleStyle: {fontWeight: 'bold'},
        headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="index" options={{
        title: 'Welcome',
      }} />
      <Stack.Screen name="Subscribe" options={{
        title: 'Subscribe',
      }} />
      <Stack.Screen name="MenuItems" options={{
        title: 'Users',
      }} />
      <Stack.Screen name="MenuSpecials" options={{
        title: 'Menu Specials',
      }} />
    </Stack>
  )
}