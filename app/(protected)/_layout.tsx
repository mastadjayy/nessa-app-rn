import React, { useState, useEffect } from 'react'
import { Stack, useRouter } from 'expo-router' 
import { Session, User } from '@supabase/supabase-js'

import { supabase } from '@/lib/supabase'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { getUserData, updateUserData } from '@/services/userService'

const ProtectedLayout = () => {
  const router = useRouter()
  const { setAuth, setUserData, user } = useAuth()
  const [session, setSession] = useState<Session | null>(null)

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
  
}

export default ProtectedLayout