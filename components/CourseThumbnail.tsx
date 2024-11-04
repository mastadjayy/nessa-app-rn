import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/helpers/common'
import { Image } from 'expo-image'
import { getCourseImageSrc } from '@/services/imageService'

type CourseThumbnailProps = {
  uri: any;
}

const CourseThumbnail = ({
  uri,
  size=hp(4.5),
  rounded=theme.radius.md,
  style={}
}) => {
  return (
    <Image
      source={getCourseImageSrc(uri)}
      transition={100}
      style={[styles.thumbnail, {height: size, width: size, borderRadius: rounded}, style]}
    />
  )
}

export default CourseThumbnail

const styles = StyleSheet.create({
  thumbnail: {
    borderCurve: 'continuous',
    borderColor: theme.colors.darkLight,
    borderWidth: 1
  }
})