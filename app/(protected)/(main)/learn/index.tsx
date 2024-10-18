import React from 'react'
import { View, Text } from 'react-native'

import LessonScreenHeader from '@/components/LessonScreenHeader'
import { useAuth } from '@/context/AuthContext'
import { theme } from '@/constants/theme'
import { wp, hp } from '@/helpers/common'

const LearnScreen = () => {
  const { user, setAuth } = useAuth()
  console.log("User info from learn/index: ", user)
  return (
    <>
      <LessonScreenHeader
        activeCourse={"Baoulé"}
        hearts={4}
        points={16}
        hasActiveSubscription={false}
      />
      <View>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
        <Text>Learn Screen</Text>
      </View>
    </>
  )
}

export default LearnScreen