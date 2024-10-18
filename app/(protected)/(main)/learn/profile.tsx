import React, { useEffect } from 'react'
import { View, Text, Alert, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabase'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import Header from '@/components/Header'
import Icon from '@/assets/icons'
import { theme } from '@/constants/theme'
import Avatar from '@/components/Avatar'

const Profile = () => {
  const { user, setAuth } = useAuth()
  const router = useRouter()
  console.log("User Profile screen:", user)

  const onLogout = async () => {
    const {error} = await supabase.auth.signOut()
    if(error) {
      Alert.alert('Connexion', 'Erreur de déconnexion !')
    }
  }

  const handleLogout = async () => {
    // show confirm modal
    Alert.alert('Confirmer', 'Confirme ta déconnexion', [
      {
        text: 'Annuler',
        onPress: () => console.log('modal annulé'),
        style: 'cancel'
      },
      {
        text: 'Déconnexion',
        onPress: () => onLogout(),
        style: 'destructive'
      }
    ])
  }

  return (
    <ScreenWrapper bg="white">
      <UserHeader user={user} router={router} handleLogout={handleLogout} />
    </ScreenWrapper>
  )
}

const UserHeader = ({user, router, handleLogout}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: wp(4)}}>
      
      <View>
        <Header title="Profile" mb={30} showBackButton />
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Icon name={"logout"} color={theme.colors.rose} />
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={{gap: 15}}>
          <View style={styles.avatarContainer}>
            
            {/* Avatar */}
            <Avatar uri={user?.image} size={hp(12)} rounded={theme.radius.xxl*1.4}/>
            

          </View>
        </View>
      </View>
      <Text>Hello {user?.email}</Text>
      <Text>Hello {user?.username}</Text>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginHorizontal: wp(4),
    marginBottom: 20
  },
  headerShape: {
    width: wp(100),
    height: hp(20)
  },
  avatarContainer: {
    width: wp(12),
    height: hp(12),
    alignSelf: 'center'
  },
  editIcon :{},
  userName: {},
  info: {},
  infoText: {},
  logoutButton: {},
  listStyle: {},
  noPost: {},
})