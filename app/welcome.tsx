/* Welcome Screen */
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Session } from '@supabase/supabase-js'

import ScreenWrapper from '@/components/ScreenWrapper'
import CustomButton from '@/components/CustomButton'
import { wp, hp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import { supabase } from '@/lib/supabase'

const Welcome = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    console.log(session)
  }, [])

  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      {/* container */}
      <View style={styles.container}>

        {/* App name */}
        <View>
          <Text style={styles.mainText}>Nessa</Text>
        </View>
        
        {/* Punchline */}
        <View>
          <Text style={styles.subText}>
            Apprends ta langue maternelle en toute simplicité.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          {session && session.user
          ?
          <CustomButton
            title="CONTINUER À APPRENDRE"
            onPress={() => router.replace('/(protected)/(main)/learn')}
            buttonStyle={{marginHorizontal:wp(3), backgroundColor:theme.colors.primary, borderColor:theme.colors.primary}}
            textStyle={{color:'white', fontFamily:'mulishBold'}}
          />
          :
          <>
          <CustomButton
            title="COMMENCER"
            onPress={() => router.push('/(auth)/register')}
            buttonStyle={{marginHorizontal:wp(3), backgroundColor:theme.colors.primary, borderColor:theme.colors.primary}}
            textStyle={{color:'white', fontFamily:'mulishBold'}}
          />
          <CustomButton
            title="J'AI DÉJÀ UN COMPTE"
            onPress={() => router.push('/(auth)/login')}
            buttonStyle={{marginHorizontal: wp(3), borderColor: theme.colors.primary}}
            textStyle={{color: theme.colors.primary, fontFamily: 'mulishBold'}}
            hasShadow={false}
          />
          </>
          }
        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(4)
  },
  mainText: {
    color: theme.colors.primary,
    fontSize: hp(8),
    fontFamily: 'mulishBold',
    letterSpacing: hp(-.3)
  },
  subText: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    color: theme.colors.dark,
    marginBottom: hp(23),
    fontFamily: 'mulishRegular'
  },
  footer: {
    gap: 15,
    width: '100%',
    marginVertical: hp(3)
  }
})