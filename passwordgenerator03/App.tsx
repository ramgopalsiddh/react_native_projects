import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'should be min of 4 characters')
  .max(16, 'should be max of 16 characters')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(false)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, usesymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    //
  }

  const resetPasswordState = () => {
    //
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})