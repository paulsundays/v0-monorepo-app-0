import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

export default function Contact() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Feather name="mail" size={48} color="#16a34a" />
        <Text style={styles.title}>Contacto</Text>
        <Text style={styles.subtitle}>Escríbenos si tienes dudas o comentarios.</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:contacto@ejemplo.com')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})
