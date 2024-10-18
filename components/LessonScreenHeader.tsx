import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { theme } from "@/constants/theme"
import { wp, hp } from "@/helpers/common"

type LessonScreenHeaderProps = {
  activeCourse: string;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const LessonScreenHeader = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription
}: LessonScreenHeaderProps) => {
  const { top } = useSafeAreaInsets()
  const paddingTop = top > 0 ? top + 5 : 30

  return (
    <View style={[styles.container, {paddingTop}]}>
      <Text style={styles.text}>{activeCourse}</Text>
      <Text style={styles.text}>{points}</Text>
      <Text style={styles.text}>{activeCourse}</Text>
    </View>
  )
}

export default LessonScreenHeader

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp(4),
    paddingHorizontal: wp(4),
    backgroundColor: theme.colors.primary,
    borderBottomRightRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.sm,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'mulishRegular',
    color: theme.colors.white
  }
})