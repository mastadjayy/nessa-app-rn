import React, { useEffect } from 'react'
import { SplashScreen, Stack, useRouter } from 'expo-router'
import { useFonts } from 'expo-font'

import { supabase } from '@/lib/supabase'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { getUserData } from '@/services/userService'
import { User } from '@supabase/supabase-js'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "mulishBlack": require("../assets/fonts/Mulish-Black.ttf"),
    "mulishExtraBold": require("../assets/fonts/Mulish-ExtraBold.ttf"),
    "mulishBold": require("../assets/fonts/Mulish-Bold.ttf"),
    "mulishSemiBold": require("../assets/fonts/Mulish-SemiBold.ttf"),
    "mulishRegular": require("../assets/fonts/Mulish-Regular.ttf"),
    "mulishMedium": require("../assets/fonts/Mulish-Medium.ttf"),
    "mulishLight": require("../assets/fonts/Mulish-Light.ttf"),
    "mulishExtraLight": require("../assets/fonts/Mulish-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  )
}

const RootLayout = () => {
  const { setAuth, setUserData } = useAuth()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({data: { session } }) => {
      if(session) {
        setAuth(session?.user)
        router.replace("/(protected)/(main)/learn")
        console.log("Get session: ", session)
      }
    });
    
    supabase.auth.onAuthStateChange((_event, session) => {
      if(session) {
        setAuth(session?.user)
        updateUserData(session?.user)
        router.replace("/(protected)/(main)/learn")
        console.log("onAuthStateChange: ", session)
      } else {
        console.log("No user")
        router.replace("/welcome")
        console.log("Else part of onAuthStateChange: ", session)
      }
    });
  }, [])

  const updateUserData = async (user: User) => {
    let res = await getUserData(user?.id)
    console.log("Got user data: ", res)
    if(res.success) setUserData(res.data)
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}

export default _layout