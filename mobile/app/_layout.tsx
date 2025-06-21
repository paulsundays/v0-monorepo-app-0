import { withLayoutContext } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const TabNavigator = withLayoutContext(createMaterialTopTabNavigator().Navigator)

export default function RootLayout() {
  return (
    <TabNavigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        tabBarActiveTintColor: '#16a34a',
        tabBarPosition: 'bottom',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e5e7eb',
          height: 60,
        },
      }}
    >
      <TabNavigator.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="projects"
        options={{
          title: 'Proyectos',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="contact"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" color={color} size={size} />
          ),
        }}
      />
    </TabNavigator>
  )
}
