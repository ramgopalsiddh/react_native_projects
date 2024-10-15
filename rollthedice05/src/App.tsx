import { Image, ImageSourcePropType, Pressable, StyleSheet, View, Linking, Text } from 'react-native';
import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const [isPressed, setIsPressed] = useState(false);  // Track if button is pressed

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }

  // function for show dice image and change when press image
  const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return (
      <View>
        <Pressable onPress={rollDiceOnTap}>
          <Image style={styles.diceImage}  source={imageUrl} />
        </Pressable>
      </View>
    )
  }

  // function for open link
  const openLink = (url: string) => {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
        onPress={rollDiceOnTap}
        onPressIn={() => setIsPressed(true)}   // Set pressed state to true
        onPressOut={() => setIsPressed(false)} // Reset pressed state
        style={[
          styles.rollDiceBtn,                 // Default style
          isPressed && styles.pressedStyle     // Change style when pressed
        ]}
      >
        <Text style={styles.rollDiceBtnText}>
          Roll the dice
        </Text>
      </Pressable>

      {/* Social media icons at the bottom */}
      <View style={styles.socialLinks}>
        <Pressable onPress={() => openLink('https://twitter.com/ramgopalsiddh1')} style={styles.iconWrapper}>
          <FontAwesome name="twitter" size={50} color="#1DA1F2" />
        </Pressable>
        <Pressable onPress={() => openLink('https://www.linkedin.com/in/ramgopalsiddh')} style={styles.iconWrapper}>
          <FontAwesome name="linkedin" size={50} color="#0077B5" />
        </Pressable>
        <Pressable onPress={() => openLink('https://github.com/ramgopalsiddh')} style={styles.iconWrapper}>
          <FontAwesome name="github" size={50} color="#333" />
        </Pressable>
        <Pressable onPress={() => openLink('https://ramgopal.dev')} style={styles.iconWrapper}>
          <FontAwesome name="user" size={50} color="#000" />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
  },
  rollDiceBtnText: {
    fontSize: 16,
    color: '#080808',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  pressedStyle: {
    backgroundColor: '#8A8A8A',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    position: 'absolute',
    bottom: 10,
  },
  iconWrapper: {
    borderWidth: 3,
    borderColor: '#8A8A8A',
    borderRadius: 20,
    padding: 8, 
  },
});
