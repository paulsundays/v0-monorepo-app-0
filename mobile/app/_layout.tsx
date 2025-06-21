import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#16a34a',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e5e7eb',
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Proyectos',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}
