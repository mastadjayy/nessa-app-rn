// Register Screen
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useRouter, Link } from 'expo-router'

import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import { wp, hp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import Icon from '@/assets/icons'
import { supabase } from '@/lib/supabase'

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
    </View>
  )
}

export default signUp