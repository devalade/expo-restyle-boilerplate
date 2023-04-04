import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Box, Text } from '@/atoms';
import { useAtom } from 'jotai';
import {activeThemeAtom} from '@/stores/theme.store';
import {ThemeProvider} from '@shopify/restyle';

export default function App() {
  const [activeTheme] = useAtom(activeThemeAtom);
  return (
    <ThemeProvider theme={activeTheme} >
      <Box bg="$primary"  style={styles.container}>
        <Text>Open up App.js to start !</Text>
        <StatusBar style="auto" />
      </Box>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
