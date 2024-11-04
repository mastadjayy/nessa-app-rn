import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Alert, StyleSheet, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import Icon from '@/assets/icons'
import BackButton from '@/components/BackButton'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { wp, hp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import { supabase } from '@/lib/supabase'

const Register = () => {
  const router = useRouter()
  // Using useRef instead of useState to store email, name & password
  const usernameRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current) {
      Alert.alert("S'enregistrer", "Renseigner tous les champs !")
      return
    }
    // Trim email, name & password
    let username = usernameRef.current.trim()
    let email = emailRef.current.trim()
    let password = passwordRef.current.trim()

    setLoading(true)

    const {data: {session}, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    })

    setLoading(false)

    console.log('session', session)
    console.log('error', error)

    if(error) {
      Alert.alert("S'enregistrer", error.message)
    }
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton router={router}/>
        {/* Main Text */}
        <View>
          <Text style={styles.mainText}>Crée ton compte et commence à apprendre.</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <CustomInput
            icon={<Icon name="user" size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            placeholder='Pseudo'
            onChangeText={value => usernameRef.current = value}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
          />
          <CustomInput
            icon={<Icon name="mail" size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            placeholder='Adresse email'
            onChangeText={value => emailRef.current = value}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
          />
          <CustomInput
            icon={<Icon name="lock" size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            placeholder='Mot de passe'
            onChangeText={value => passwordRef.current = value}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
            title='Password'
          />

          <CustomButton
            title='CONTINUER'
            onPress={onSubmit}
            buttonStyle={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }}
            textStyle={{ color: 'white', fontFamily: 'mulishBold' }}
            loading={loading}
          />
        </View>

        {/* Auth Providers */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
          <View style={{
            flex: 1,
            height: hp(.2),
            backgroundColor: theme.colors.gray,
            marginHorizontal: 10
          }}
          />
          <Text style={{fontSize: hp(2), color: theme.colors.dark, fontFamily: 'mulishMedium'}}>Ou inscris-toi avec</Text>
          <View style={{
            flex: 1,
            height: hp(.2),
            backgroundColor: theme.colors.gray,
            marginHorizontal: 10
          }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Pressable onPress={() =>{}}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent:'center',
              flexDirection:'row',
              height: 52,
              borderWidth: 1,
              borderColor: theme.colors.gray,
              borderRadius: theme.radius.sm,
              gap: 5
            }}
          >
            <Text>Google</Text>
          </Pressable>

          <Pressable onPress={() =>{}}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent:'center',
              flexDirection:'row',
              height: 52,
              borderWidth: 1,
              borderColor: theme.colors.gray,
              borderRadius: theme.radius.sm,
              gap: 5
            }}
          >
            <Text>FaceBook</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Tu as déjà un compte?
          </Text>
          
          <Pressable onPress={() => {router.push('/(auth)/login')}}>
            <Text style={[styles.footerText, {color: theme.colors.primary, fontFamily: 'mulishBold'}]}>
              Connectes-toi
            </Text>
          </Pressable>
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(4)
  },
  mainText:{
    fontSize: hp(2.5),
    fontFamily: 'mulishSemiBold'
  },
  form: {
    gap: 25
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.textLight,
    fontSize: hp(1.8),
    fontFamily: 'mulishRegular'
  }
})