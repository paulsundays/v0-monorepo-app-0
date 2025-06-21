import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Image
          source={require('../assets/images/sundays.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Nombre del Usuario</Text>
        <Text style={styles.subtitle}>usuario@example.com</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7280',
  },
})
