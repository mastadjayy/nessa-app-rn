import React from 'react'
import { Tabs } from 'expo-router'
import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'


const LearnLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.brownLight,
        tabBarStyle: {
          backgroundColor: theme.colors.brown,
          borderTopWidth: 0
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="home" size={26} strokeWidth={1.6} color={color} />
          ),
          tabBarLabel: "Leçons"
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="user" size={26} strokeWidth={1.6} color={color} />
          ),
          tabBarLabel: "Profil"
        }}
      />
    </Tabs>
  )
}

export default LearnLayout