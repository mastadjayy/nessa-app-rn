import React, { useState, useRef } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { View, Text, StyleSheet } from 'react-native'
import { hp, wp } from '@/helpers/common'
import BackButton from '@/components/BackButton'
import { router } from 'expo-router'
import CustomInput from '@/components/CustomInput'
import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'
import CustomButton from '@/components/CustomButton'

const PasswordForgot = () => {
  const emailRef = useRef("")
  const [ loading, setLoading ] = useState(false)
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        
        {/* Back Button */}
        <BackButton router={router}/>

        {/* Main Text */}
        <View>
          <Text style={styles.mainText}>Mot de passe oublié</Text>
        </View>

        {/* Sub Text */}
        <View>
          <Text style={styles.subText}>
            Entres ton adresse email pour obtenir un code afin de réinitialiser ton mot de passe.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <CustomInput
            icon={<Icon name="mail" size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
            placeholder="Adresse email"
          />
          <CustomButton
            title="OBTENIR LE CODE"
            onPress={() => {}}
            buttonStyle={{backgroundColor: theme.colors.primary, borderColor: theme.colors.primary}}
            textStyle={{color: theme.colors.white, fontFamily: "mulishBold"}}
            loading={loading}
          />
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default PasswordForgot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(4)
  },
  mainText: {
    fontSize: hp(2.5),
    fontFamily: 'mulishSemiBold'
  },
  subText :{
    fontSize: hp(1.8),
    fontFamily: 'mulishRegular'
  },
  form: {
    gap:25
  }
})