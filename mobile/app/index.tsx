import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
