import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {setupPlayer, addTrack} from "../musicPlayerServices"


function App(): React.JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPaylerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])


  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView >
      <StatusBar
       
      />
     <Text> Testing </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
