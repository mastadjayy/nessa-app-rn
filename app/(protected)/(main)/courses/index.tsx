import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { getCourses,  } from '@/db/queries'
import { hp, wp } from '@/helpers/common'
import CourseCard from '@/components/CourseCard'
import { router } from 'expo-router'
import BackButton from '@/components/BackButton'

const coursesScreenIndex = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    let res = await getCourses();
    console.log("Course data from course index file:", res.data)
    if(res.success){
      setCourse(res.data);
      console.log("RES.SUCCESS courses/index.tsx: ", course)
    }
  }

  return (
    <ScreenWrapper bg='whtie'>
      <View style={styles.container}>
      
      {/* Back buton */}
      <BackButton router={router}/>

      <Text style={styles.mainText}>
        Quelle langue veux-tu apprendre ?
      </Text>
      <FlatList
        data={course}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CourseCard
          item={item}
          router={router}
        />}
      />

      </View>
    </ScreenWrapper>
  )
}

export default coursesScreenIndex

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
  listStyle: {
    paddingTop: 20,
    //paddingHorizontal: wp(4)
  }
})