import React, { useState, useRef} from 'react'
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link, useRouter } from 'expo-router'

import { theme } from '@/constants/theme'
import { wp, hp } from '@/helpers/common'
import ScreenWrapper from '@/components/ScreenWrapper'
import Icon from '@/assets/icons'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import BackButton from '@/components/BackButton'
import { supabase } from '@/lib/supabase'

const Login = () => {
  const router = useRouter()
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [ loading, setLoading ] = useState(false)

  /* const [ isSubmitting, setIsSubmitting ] = useState(false) */

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current) {
      Alert.alert("Connexion", "Renseignes tous les champs");
      return;
    }

    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    
    setLoading(true);

    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setLoading(false);

    if(error) {
      Alert.alert("Connexion", "Un problème est survenu. Réessayer");
    }
    //router.replace("/(protected)/(main)/learn")
  }
  return (
    <ScreenWrapper bg="white">
      
      <View style={styles.container}>
        
        {/* Back buton */}
        <BackButton router={router}/>

        {/* Main Text */}
        <View>
          <Text style={styles.mainText}>Connectes-toi pour continuer.</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <CustomInput
            icon={<Icon name={"mail"} size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            placeholder='E-mail'
            onChangeText={value => emailRef.current = value}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
          />
          <CustomInput
            icon={<Icon name={"mail"} size={26} strokeWidth={1.6} color={theme.colors.darkGray} />}
            placeholder='Mot de passe'
            onChangeText={value => passwordRef.current = value}
            containerStyle={{borderColor: theme.colors.gray, backgroundColor: theme.colors.gray}}
            title="Password"
          />
          <CustomButton
            title="CONTINUER"
            onPress={onSubmit}
            buttonStyle={{backgroundColor: theme.colors.primary, borderColor: theme.colors.primary}}
            textStyle={{color: 'white', fontFamily: 'mulishBold'}}
            loading={loading}
          />

          <Text style={{textAlign: 'right', fontSize: hp(1.8), color: theme.colors.primary, fontFamily: 'mulishBold'}}>
            <Link href="/(auth)/passwordForgot">
              Mot de passe oublié?
            </Link>
          </Text>
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
          <Text style={{fontSize: hp(2), color: theme.colors.dark, fontFamily: 'mulishMedium'}}>Ou connectes-toi avec</Text>
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
            Tu n'as pas de compte?
          </Text>
          <Pressable onPress={() => {router.push('/register')}}>
            <Text style={[styles.footerText, {color: theme.colors.primary, fontFamily: 'mulishBold'}]}>
              Crée ton compte
            </Text>
          </Pressable>
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Login

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
  form :{
    gap: 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: 600,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.textLight,
    fontSize: hp(1.8),
    fontFamily: 'mulishRegular'
  }
})