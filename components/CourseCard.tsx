import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
/* import { Image } from 'expo-image' */
import { wp, hp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import { getCourseThumbnail } from '@/services/imageService'

type CourseCardProps = {
  item: any;
  router: any;
}

const CourseCard = ({
  item,
  router,
}: CourseCardProps) => {
  console.log("ITEM", item)
  console.log("ITEM IMAGE SOURCE", item?.image_src)
  return (
    <View style={styles.container}>
      <Image source={getCourseThumbnail(item.image_src)} style={styles.image} />
      <Text style={[styles.courseTitle, {}]}>{item.title}</Text>
    </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.darkGray,
    borderRadius: theme.radius.xxl,
    gap: 8,
    marginBottom: 25,
    //padding: 10
    height: hp(7),
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row'
  },
  courseTitle: {
    fontFamily: 'mulishRegular',
    fontSize: 23,
    //borderWidth: 2,
    //borderColor: 'red'
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
})