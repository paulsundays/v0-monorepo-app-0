import { MaterialTopTabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'


export default function RootLayout() {
  return (
    <MaterialTopTabs
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
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="projects"
        options={{
          title: 'Proyectos',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="contact"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" color={color} size={size} />
          ),
        }}
      />
    </MaterialTopTabs>
  )
}
